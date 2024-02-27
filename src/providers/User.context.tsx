import React, { createContext, useEffect, useState } from "react";
import { ILoginFormData } from "../components/Forms/LoginForm";
import { Api } from "../services";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IUserProvider {
  children: React.ReactNode;
}

interface IUserContext {
  userLogin: (formData: ILoginFormData) => Promise<void>;
  user: IUser | null |undefined;
  userLogout: () => void

}

interface IUser {
  id: number;
  username: string;
  email: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProvider) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser|null|undefined>();

  const userLogin = async (formData: ILoginFormData) => {
    try {
      const response = await Api.post("users/login/", formData);

      localStorage.setItem("@TOKEN", response.data.access);

      const jwt: any = jwtDecode(response.data.access);

      localStorage.setItem("@USERID", jwt.user_id);

      const newUser = {
        id: jwt.user_id,
        username: jwt.user_username,
        email: jwt.user_email,
      };

      setUser(newUser);
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

  const userLogout=()=>{
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  }

  return (
    <UserContext.Provider value={{ userLogin, user,userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
