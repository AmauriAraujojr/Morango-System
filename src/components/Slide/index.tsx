import { Swiper, SwiperSlide } from "swiper/react";
import { StyledSlider } from "./style";
import { StyledContainer } from "../../styles/grid";

export const Slider = () => {
  const data = [
    {
      id: "1",
      image:
        "https://todosaumasovoz.com.br/site/wp-content/uploads/2020/12/oportunidades_estudantes-Profissoes-do-futuro-700x400.jpg",
      description: "ajajajjaja",
    },
    {
      id: "2",
      image: "https://www.udop.com.br/u_img/noticias/2021/27_07_2021_agro.png",
      description: "ppooooooo",
    },
    {
      id: "3",
      image:
        "https://ruralpecuaria.com.br/painel/img/noticias/365/noticias_1406233184.jpg",
      description: "iiiii",
    },
    {
      id: "4",
      image:
        "https://www.agroplanning.com.br/wp-content/uploads/2018/06/morango_1.jpg",
      description: "adijdaujaui",
    },
  ];
  return (
    <StyledContainer>
      <StyledSlider>
        <Swiper
          className="swiper"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id} className="slide">
                  <p>{item.description}</p>
                <div className="box">
                  <img src={item.image} alt="Slider" className="slide-item" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StyledSlider>
    </StyledContainer>
  );
};
