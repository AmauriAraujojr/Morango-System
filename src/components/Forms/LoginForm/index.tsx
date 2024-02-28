import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../../providers/User.context";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../fragments/Input";
import { useNavigate } from "react-router-dom";
import { StyledFormLogin } from "./style";
import { StyledBigButton } from "../../../styles/buttons";
import { BodyTwo400, ButtonBigText, HeadingFour600 } from "../../../styles/typhography";

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

  const { userLogin,setOpenMenu } = useContext(UserContext);

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    userLogin(formData);
    setOpenMenu(false)
  };
  const navigate = useNavigate();
  return (
    <StyledFormLogin>
      <HeadingFour600 className="text_center">Acesso</HeadingFour600>
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

        <StyledBigButton color="sucess" ><ButtonBigText>Entrar</ButtonBigText></StyledBigButton>

      </form>
      <BodyTwo400 className="text_center">Não é Registrado?</BodyTwo400>

      <StyledBigButton color="outline2"><ButtonBigText>Crie uma nova conta</ButtonBigText></StyledBigButton>



    </StyledFormLogin>
  );
};
