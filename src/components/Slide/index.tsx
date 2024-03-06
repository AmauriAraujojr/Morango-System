import { Swiper, SwiperSlide } from "swiper/react";
import { StyledSlider } from "./style";
import { EffectCreative } from "swiper/modules";
import { HeadingOne700,BodyOne400, ButtonBigText } from "../../styles/typhography";
import { StyledBigButton } from "../../styles/buttons";
import { useContext } from "react";
import { ContentContext } from "../../providers/ContentContext";

export const Slider = () => {
  
  const{data}=useContext(ContentContext)
  return (
    <StyledSlider>
      <Swiper
        grabCursor={true}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="swiper"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id} className="slide">
              <div className="info_box">
                <HeadingOne700>{item.title}</HeadingOne700>
                <BodyOne400>{item.description}</BodyOne400>
                <StyledBigButton color="sucess"><ButtonBigText>Saiba mais</ButtonBigText></StyledBigButton>
              </div>
                <img src={item.image} alt="Slider" className="slide-item" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledSlider>
  );
};
