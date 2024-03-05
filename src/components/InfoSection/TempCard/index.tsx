import { useContext } from "react";
import { ContentContext } from "../../../providers/ContentContext";
import { StyledTemcard } from "./style";
import { CiTempHigh } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import {
  BodyOne600,
  HeadingOne700,
  HeadingSix600,
  HeadingTwo600,
} from "../../../styles/typhography";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindy } from "react-icons/ti";


export const TempCard = () => {
  const { weather,date } = useContext(ContentContext);
  return (
    <StyledTemcard>
      <div className="title_box">
        <HeadingSix600 className="location_icon">
          <TfiLocationPin />
        </HeadingSix600>
        <HeadingSix600>{weather?.name}</HeadingSix600>
      </div>
      {weather?.weather.map((el) => {
        return (
          <div className="img_box" key={weather.name}>
            <div className="ul">
              <div className="title_box">
                <HeadingOne700>
                  <CiTempHigh />
                </HeadingOne700>
                <HeadingTwo600>{weather?.main.temp}º</HeadingTwo600>
              </div>
              <div className="max_min">
                <li> máx: {weather?.main.temp_max}º</li>
                <li>mín: {weather?.main.temp_min}º</li>
              </div>
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${el.icon}@2x.png`}
              alt=""
            />
            <div className="box_description">
              <BodyOne600>{el.description}</BodyOne600>
              <div className="title_box">
                <HeadingSix600 className="location_icon">
                  <WiHumidity />
                </HeadingSix600>
                <li>{weather?.main.humidity} %</li>
              </div>
              <div className="title_box">
                <HeadingSix600 className="location_icon">
                <TiWeatherWindy />
                </HeadingSix600>
                <li>{weather?.wind.speed} Km/h</li>
              </div>
            </div>
          </div>
          
        );
      })}
      <HeadingSix600 className="data">{date}</HeadingSix600>
    </StyledTemcard>
  );
};
