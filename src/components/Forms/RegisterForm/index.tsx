import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../../providers/User.context";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../fragments/Input";
import { useNavigate } from "react-router-dom";
import { StyledFormLogin } from "../../Forms/LoginForm/style";
import { StyledBigButton } from "../../../styles/buttons";
import {
  BodyTwo400,
  ButtonBigText,
  HeadingFour600,
} from "../../../styles/typhography";
import { GiStrawberry } from "react-icons/gi";
import { LogoType } from "../../../fragments/Logo";

export interface IRegisterFormData {
  username: string;
  password: string;
  email: string;
}

export const RegisterSchema = z.object({
  username: z.string().min(1, "O nome é obrigatório"),
  email: z.string().min(1,"O e-mail é obrigatório").email("Forneça um e-mail válido"),
  password: z.string().min(1, "A Senha é obrigatória"),
});

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({ resolver: zodResolver(RegisterSchema) });

  const { registerUser } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormData> = (formData) => {
    registerUser(formData)
  };
  const navigate = useNavigate();
  return (
    <StyledFormLogin>
      <LogoType/>
      <HeadingFour600 className="text_center">Cadastre-se</HeadingFour600>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Nome"
          type="text"
          placeholder="Username"
          {...register("username")}
          error={errors.username}
        />
        <Input
          label="E-mail"
          type="email"
          placeholder="Ex: cultivointeligente@mail.com"
          {...register("email")}
          error={errors.email}
        />

        <Input
          label="Senha"
          type="password"
          placeholder="password"
          {...register("password")}
          error={errors.password}
        />

        <StyledBigButton color="sucess">
          <ButtonBigText>Criar conta</ButtonBigText>
        </StyledBigButton>
      </form>
      <BodyTwo400 className="text_center">Já é cadastrado?</BodyTwo400>

      <StyledBigButton color="outline2" onClick={() => navigate("/")}>
        <ButtonBigText>Voltar para Home</ButtonBigText>
      </StyledBigButton>
    </StyledFormLogin>
  );
};
