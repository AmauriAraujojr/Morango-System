import React, { createContext } from "react";
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
}

// interface IUser{
//     id:number
//     username:string
//     email:string
// }

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProvider) => {
  const navigate = useNavigate();

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

  return (
    <UserContext.Provider value={{ userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
