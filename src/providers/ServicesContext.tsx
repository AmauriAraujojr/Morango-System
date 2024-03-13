import React, { createContext, useState } from "react";

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
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>
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
  const[openModal,setOpenModal]=useState(false)

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
        setTimer
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
