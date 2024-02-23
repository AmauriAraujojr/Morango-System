import React, { createContext, useEffect, useState } from "react";
import { ILoginFormData } from "../components/Forms/LoginForm";
import { Api } from "../services";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

interface IUserProvider {
  children: React.ReactNode;
}

interface IUserContext {
  userLogin: (formData: ILoginFormData) => Promise<void>;
  user: IUser | undefined
}

interface IUser {
  id: number;
  username: string;
  email: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProvider) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>();


  const userLogin = async (formData: ILoginFormData) => {
    try {
      const response = await Api.post("login/", formData);

      localStorage.setItem("@TOKEN", response.data.access);

      const jwt: any = jwtDecode(response.data.access);

      localStorage.setItem("@USERID", jwt.user_id);

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

  return (
    <UserContext.Provider value={{ userLogin,user }}>
      {children}
    </UserContext.Provider>
  );
};
