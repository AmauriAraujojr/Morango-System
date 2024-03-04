import { Fragment, createContext, useEffect, useState } from "react";
import { ApiClima } from "../services";

interface IContentProvider {
    children: React.ReactNode;
  }

interface IContentContext {
    data: Idata[]
    weather: IWeather | null
    
  
  }

  interface IWeather{
    name:string
    main:{
      temp:number,
      temp_max:number,
      temp_min:number,
      pressure:number,
      humidity:number
    }
    weather:[{
      description:string,
      icon:string
    }]
    
  }

  export interface Idata{
    id:string
    image:string
    description:string
    title:string
    context:string
    introduction:string
  }



export const ContentContext = createContext({}as IContentContext);

export const ContentProvider = ({ children }: IContentProvider) => {

    const data :Idata[]= [
        {
          id: "1",
          image:"https://blog.broto.com.br/wp-content/uploads/2022/03/irrigacao-por-aspersao.jpeg",
          description: "Mantenha sua lavoura irrigada com apenas um 'CLICK'",
          title:"Irrigação Inteligente",
          introduction:"Apresentamos nosso avançado sistema de irrigação agrícola com apenas um click, desenvolvido para simplificar e otimizar o manejo hídrico de sua lavoura com máxima eficiência e praticidade.",
          context:"Apresentamos nosso avançado sistema de irrigação agrícola com apenas um click, desenvolvido para simplificar e otimizar o manejo hídrico de sua lavoura com máxima eficiência e praticidade. Com um simples clique, nosso sistema ativa uma rede de aspersores estrategicamente posicionados em seus campos. Equipado com tecnologia de ponta e sensores inteligentes, ele monitora continuamente os níveis de umidade do solo, as condições climáticas e as necessidades hídricas das plantações em tempo real. Ao ser acionado, o sistema fornece a quantidade precisa de água exatamente onde é necessária, garantindo uma irrigação uniforme e adequada para cada cultura. Seja em grandes extensões de plantio de grãos, pomares ou cultivos especializados, nossa solução se adapta às exigências específicas de sua lavoura, proporcionando um crescimento saudável e uma produção otimizada. Agora, você pode deixar para trás os métodos de irrigação convencionais e complicados. Com nosso sistema de irrigação agrícola com apenas um clique, você economiza tempo, recursos hídricos e mão de obra, garantindo uma colheita abundante e sustentável. Experimente a praticidade e a eficácia da irrigação moderna em sua lavoura.",
        
        },
        {
          id: "2",
          image: "https://waldineypassos.com.br/wp-content/uploads/2018/08/morango-juazeiro.jpg",
          description: "Veja a cotação do morango em tempo real",
          title:"Cotação em tempo real",
          context:""  ,
          introduction:"Introduzido em nossa plataforma a cotação de preços de morango em tempo real, uma ferramenta indispensável para produtores, distribuidores e compradores do mercado de morangos. Com nossa plataforma, você tem acesso instantâneo às últimas informações sobre os preços do morango, atualizadas em tempo real com base nas condições do mercado, oferta e demanda, e outros fatores relevantes.",
        },
        {
          id: "3",
          image:
            "https://blog.cresol.com.br/wp-content/uploads/2019/08/produtor-rural-olhando-para-o-campo.jpg",
            description: "Negocie seu produto sem sair de sua lavoura",
            title:"Compra e venda online" ,
            context:"Apresentamos nossa plataforma de compra e venda de morangos online, uma solução inovadora que conecta produtores, distribuidores e consumidores, facilitando transações seguras e eficientes no mercado de morangos.Com nossa plataforma, produtores de morango podem listar suas colheitas frescas com fotos detalhadas e informações sobre qualidade, variedade e preço. Distribuidores e compradores têm acesso a um amplo mercado de morangos, onde podem explorar diversas opções e comparar preços antes de fazer suas compras. Nossa plataforma oferece uma experiência de compra conveniente e intuitiva, permitindo que os usuários naveguem pelos produtos, façam pedidos e realizem transações financeiras com facilidade e segurança. Além disso, oferecemos opções de entrega flexíveis para atender às necessidades dos clientes, garantindo que os morangos cheguem frescos e prontos para consumo. Para os produtores, nossa plataforma proporciona uma maneira eficaz de alcançar novos clientes e expandir seus negócios, aumentando sua visibilidade no mercado online. Com ferramentas de gerenciamento de pedidos integradas, eles podem acompanhar as vendas, gerenciar estoques e garantir uma entrega oportuna e satisfatória para seus clientes. Se você está procurando comprar morangos frescos de alta qualidade ou deseja vender sua safra para um público mais amplo, nossa plataforma de compra e venda de morangos online é a solução ideal para suas necessidades. Junte-se a nós e aproveite a conveniência e eficiência do comércio de morangos online.",
            introduction:"Nossa plataforma de compra e venda de morangos online, uma solução inovadora que conecta produtores, distribuidores e consumidores, facilitando transações seguras e eficientes no mercado de morangos.",
          }
      ];
      const[weather,setWeather]=useState<IWeather|null>(null)

      const[location, setLocation]=useState(false)

      const getWeather=async(lat:any,long:any)=>{
        try {
          const response= await ApiClima.get("weather",{
            params:{
              lat:lat,
              lon:long,
              appid:"0f6e90193ef04e7217dc38831c8f36a8",
              lang:'pt',
              units:'metric'
            }
          })
          setWeather(response.data)
          
        } catch (error) {
          console.log(error)
        }

      }
      useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
          getWeather(position.coords.latitude, position.coords.longitude)
          setLocation(true)
        })
      },[])

      if(!location){
        return(
          <Fragment>
            Você precisa habilitar a localição
          </Fragment>
        )

      }


     

    return(
        <ContentContext.Provider value={{data,weather}}>
            {children}
        </ContentContext.Provider>
    )
}