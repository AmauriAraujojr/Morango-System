import { RegisterForm } from "../../components/Forms/RegisterForm";
import { StyledContainer } from "../../styles/grid";

export const RegisterPage = () => {
  return (
    <div className="registerPage">
      <StyledContainer>
        <RegisterForm />
      </StyledContainer>
    </div>
  );
};
