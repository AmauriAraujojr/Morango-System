import React, { createContext, useState,} from "react";

interface IServiceProvider {
  children: React.ReactNode;
}

interface IServiceContext {

}

export interface IService {
    id:number,
    turnOn:string,
    turnOff:string,
    active:boolean

}

export const ServiceContext = createContext({} as IServiceContext);

export const ServiceProvider = ({ children }: IServiceProvider) => {
    const[services,setServices]=useState<IService|undefined>(undefined)

  
    
  return (
    <ServiceContext.Provider
      value={{
      
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
