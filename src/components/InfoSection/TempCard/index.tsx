import { useContext } from "react";
import { ContentContext } from "../../../providers/ContentContext";
import { StyledTemcard } from "./style";

export const TempCard = () => {
  const { weather } = useContext(ContentContext);
  console.log(weather);
  return (
    <StyledTemcard>
      <h2>{weather?.name}</h2>
      <div className="infos">
      <ul>
      <li>Temperatura atual: {weather?.main.temp}º</li>
        <li>Temperatura máxima:{weather?.main.temp_max}º</li>
        <li>Temperatura mínima:{weather?.main.temp_min}º</li>
      </ul>
      
        {weather?.weather.map((el) => {
          return (
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${el.icon}@2x.png`}
                alt=""
              />

              <li>{el.description}</li>
              </div>
      

          );
        })}
        
        <li>Humidade:{weather?.main.humidity}%</li>
        </div>
    </StyledTemcard>
  );
};
