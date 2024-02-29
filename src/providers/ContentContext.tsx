import { createContext } from "react";

interface IContentProvider {
    children: React.ReactNode;
  }

interface IContentContext {
    data: Idata[]
    
  
  }

  interface Idata{
    id:string
    image:string
    description:string
    title:string
  }



export const ContentContext = createContext({}as IContentContext);

export const ContentProvider = ({ children }: IContentProvider) => {

    const data :Idata[]= [
        {
          id: "1",
          image:"https://blog.broto.com.br/wp-content/uploads/2022/03/irrigacao-por-aspersao.jpeg",
          description: "Mantenha sua lavoura irrigada com apenas um 'CLICk'",
          title:"Irrigação Inteligente"
        },
        {
          id: "2",
          image: "https://waldineypassos.com.br/wp-content/uploads/2018/08/morango-juazeiro.jpg",
          description: "Veja a cotação do morango em tempo real",
          title:"Cotação em tempo real"    },
        {
          id: "3",
          image:
            "https://blog.cresol.com.br/wp-content/uploads/2019/08/produtor-rural-olhando-para-o-campo.jpg",
            description: "Negocie seu produto sem sair de sua lavoura",
            title:"Compra e venda online" },
    
      ];


    return(
        <ContentContext.Provider value={{data}}>
            {children}
        </ContentContext.Provider>
    )
}