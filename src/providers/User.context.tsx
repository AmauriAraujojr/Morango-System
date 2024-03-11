import React, { createContext, useEffect, useState } from "react";
import { ILoginFormData } from "../components/Forms/LoginForm";
import { Api } from "../services";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IRegisterFormData } from "../components/Forms/RegisterForm";
import { IService } from "./ServicesContext";

interface IUserProvider {
  children: React.ReactNode;
}

interface IUserContext {
  userLogin: (formData: ILoginFormData) => Promise<void>;
  user: IUser | null | undefined;
  userLogout: () => void;
  openMenu: boolean;
  registerUser: (formdata: IRegisterFormData) => Promise<void>;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUser {
  id: number;
  username: string;
  email: string;
  services:IService[]
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProvider) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null | undefined>();
  const [openMenu, setOpenMenu] = useState(false);

  const userLogin = async (formData: ILoginFormData) => {
    try {
      const response = await Api.post("users/login/", formData);

      localStorage.setItem("@TOKEN", response.data.access);

      const jwt: any = jwtDecode(response.data.access);

      localStorage.setItem("@USERID", jwt.user_id);

      UserAuth(Number(jwt.user_id));

      navigate("/");
    } catch (error: any) {
      toast.error(error.response.data.detail);
    }
  };

  const UserAuth = async (id: number) => {
    try {
      const response = await Api.get(`users/${id}/`);

      setUser(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("@USERID");

    if (id) {
      UserAuth(Number(id));
    }
  }, []);

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  const registerUser = async (formdata: IRegisterFormData) => {
    try {
      await Api.post("users/", formdata);

      toast.success("Cadastro realizado com sucesso");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        user,
        userLogout,
        openMenu,
        setOpenMenu,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
