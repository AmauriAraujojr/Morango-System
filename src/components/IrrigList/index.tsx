import { useContext, useEffect } from "react";
import { StyledContainer } from "../../styles/grid";
import {
  ButtonBigText,
  HeadingFive500,
  HeadingFive600,
  HeadingOne700,
  HeadingThree600,
} from "../../styles/typhography";
import { IrrigCard } from "./IrrigCard";
import { StyledIrrigList } from "./styles";
import { UserContext } from "../../providers/User.context";
import { ServiceContext } from "../../providers/ServicesContext";
import { DiVim } from "react-icons/di";
import { StyledBigButton } from "../../styles/buttons";

export const IrrigList = () => {
  const { user } = useContext(UserContext);

  const {
    currentPage,
    totalPages,
    setCurrentPage,
    setCardPerPage,
    setTotalPages,
    cardPerPage,
  } = useContext(ServiceContext);

  const filterAnouncementActive = () => {
    const perPage: number = 5;

    const filter = user?.services.filter((an) => {
      return an.active == false;
    });
    if (filter) {
      setCardPerPage([
        ...filter!.slice(perPage * (currentPage - 1), perPage * currentPage),
      ]);
      setTotalPages(Math.ceil(filter!.length / perPage));
    }
  };

  useEffect(() => {
    filterAnouncementActive();
  }, [currentPage, user]);

  return (
    <StyledContainer>
      <StyledIrrigList>
        <div>
          <HeadingThree600>Histórico de Irrigações</HeadingThree600>{" "}
        </div>

        {user?.services.length == 0 ? (
          <div className="not">
            <HeadingOne700>Você não ativou nenhuma irrigação</HeadingOne700>{" "}
            <StyledBigButton color="sucess">
              <ButtonBigText>Iniciar</ButtonBigText>
            </StyledBigButton>
          </div>
        ) : (
          <>
            <ul>
              {cardPerPage.map((service) => {
                return <IrrigCard key={service.id} service={service} />;
              })}
            </ul>

            <div className="pageBox">
              <HeadingFive600 className="pageNumber">
                {currentPage}{" "}
                <HeadingFive500 className="pageNumberOpacity">
                  {" "}
                  de {totalPages}
                </HeadingFive500>
              </HeadingFive600>

              <button
                className="perPageH1"
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
              >
                {currentPage > 1 ? (
                  <HeadingFive600>{"<"} Anterior</HeadingFive600>
                ) : null}
              </button>

              <button
                className="perPageH1"
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
              >
                {currentPage < totalPages ? (
                  <HeadingFive600>Seguinte {">"}</HeadingFive600>
                ) : null}
              </button>
            </div>
          </>
        )}
      </StyledIrrigList>
    </StyledContainer>
  );
};
