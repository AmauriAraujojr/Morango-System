import React, { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../services";
import { IFormData } from "../components/Timer";

interface IServiceProvider {
  children: React.ReactNode;
}

interface IServiceContext {
  currentPage: number;
  cardPerPage: IService[];
  totalPages: number;
  setCardPerPage: React.Dispatch<React.SetStateAction<IService[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  turnOnIrrigations: (formData: IFormData) => Promise<void>;
  turnOffIrrigations: () => Promise<void>;
  serviceList: IService[];
  setServiceList: React.Dispatch<React.SetStateAction<IService[]>>;
  getServices: () => Promise<void>;
  getTimeSinceSystem: (date: string) => string;
}

export interface IService {
  id: number;
  turnOn: string;
  turnOff: string;
  active: boolean;
}

export const ServiceContext = createContext({} as IServiceContext);

export const ServiceProvider = ({ children }: IServiceProvider) => {
  const [services, setServices] = useState<IService | undefined>(undefined);
  const [active, setActive] = useState(false);
  const [timer, setTimer] = useState(0);
  const [cardPerPage, setCardPerPage] = useState([] as IService[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [serviceList, setServiceList] = useState<IService[]>([]);

  const getServices = async () => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await Api.get("services/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setServiceList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   getServices();
  // }, []);

  const turnOnIrrigations = async (formData: IFormData) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await Api.post(
        "services/",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setServices(response.data);
      setTimer(Number(formData.time) * 60);

      setActive(true);
    } catch (error) {
      console.log(error);
    }
  };

  const turnOffIrrigations = async () => {
    const token = localStorage.getItem("@TOKEN");
    const id = services?.id;

    try {
      const response = await Api.patch(
        `services/${id}/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newServices = serviceList.filter((service) => {
        return service.id !== id;
      });

      setServiceList([...newServices, response.data]);
      setActive(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeSinceSystem = (date: string) => {
    const currentDate: Date = new Date();
    const commentDate: Date = new Date(date);

    const secondsDifference = Math.floor(
      (currentDate.getTime() - commentDate.getTime()) / 1000
    );
    if (secondsDifference < 60) {
      return `há menos de 1 minuto`;
    }

    const minutesDifference = Math.floor(secondsDifference / 60);
    if (minutesDifference < 60) {
      if (minutesDifference == 1) {
        return `há 1 minuto`;
      } else {
        return `há ${minutesDifference} minutos`;
      }
    }

    const hoursDifference = Math.floor(minutesDifference / 60);
    if (hoursDifference < 24) {
      if (hoursDifference == 1) {
        return `há 1 hora`;
      } else {
        return `há ${hoursDifference} horas`;
      }
    }

    const daysDifference = Math.floor(hoursDifference / 24);
    const monthsDifference =
      (currentDate.getFullYear() - commentDate.getFullYear()) * 12 +
      (currentDate.getMonth() - commentDate.getMonth());
    if (monthsDifference < 1 && daysDifference < 31) {
      if (daysDifference == 1) {
        return `há 1 dia`;
      } else {
        return `há ${daysDifference} dias`;
      }
    }

    if (monthsDifference < 12) {
      if (monthsDifference == 1) {
        return `há 1 mês`;
      } else {
        return `há ${monthsDifference} meses`;
      }
    }

    const yearsDifference =
      currentDate.getFullYear() - commentDate.getFullYear();
    if (yearsDifference === 1) {
      return "há 1 ano";
    } else if (yearsDifference) {
      return `há ${yearsDifference} anos`;
    }

    return "há algum tempo";
  };

  return (
    <ServiceContext.Provider
      value={{
        cardPerPage,
        currentPage,
        totalPages,
        setCardPerPage,
        setCurrentPage,
        setTotalPages,
        openModal,
        setOpenModal,
        active,
        setActive,
        timer,
        setTimer,
        turnOnIrrigations,
        turnOffIrrigations,
        serviceList,
        setServiceList,
        getServices,
        getTimeSinceSystem,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
