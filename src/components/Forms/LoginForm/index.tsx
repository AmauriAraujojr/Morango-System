import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../../providers/User.context";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../fragments/Input";
import { useNavigate } from "react-router-dom";

export interface ILoginFormData {
  username: string;
  password: string;
}

export const LoginSchema = z.object({
  username: z.string().min(1, "O nome é obrigatório"),

  password: z.string().min(1, "A Senha é obrigatória"),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({ resolver: zodResolver(LoginSchema) });

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    userLogin(formData);
  };
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        type="text"
        placeholder="Username"
        {...register("username")}
        error={errors.username}
      />

      <Input
        label="Senha"
        type="password"
        placeholder="password"
        {...register("password")}
        error={errors.password}
      />

      <button>Login</button>

      <button onClick={() => navigate("/")}>Home</button>
    </form>
  );
};
