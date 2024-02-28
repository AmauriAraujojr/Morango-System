import { ToastContainer } from "react-toastify";
import { RounterMain } from "./routes/RouterMain";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./styles/GlobalStyle";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade";

import{Swiper,SwiperSlide} from "swiper/react"
import{EffectFlip}from'swiper'
const App = () => {

  const data=[
    {id:'1',image:"https://todosaumasovoz.com.br/site/wp-content/uploads/2020/12/oportunidades_estudantes-Profissoes-do-futuro-700x400.jpg"},
    {id:'2',image:"https://www.udop.com.br/u_img/noticias/2021/27_07_2021_agro.png"},
    {id:'3',image:"https://ruralpecuaria.com.br/painel/img/noticias/365/noticias_1406233184.jpg"},
    {id:'4',image:"https://www.agroplanning.com.br/wp-content/uploads/2018/06/morango_1.jpg"}

  ]
  return (
    <div className="app">
      <ToastContainer />
      <GlobalStyles />
      <RounterMain />
<div className="slide">

      <Swiper slidesPerView={1} pagination={{clickable:true}} navigation>
       {data.map((item)=>{
        return <SwiperSlide key={item.id}>
          <img src={item.image} alt='Slider' className="slide-item"/>
        </SwiperSlide>})}
      </Swiper>
</div>
    </div>
  );
};

export default App;
