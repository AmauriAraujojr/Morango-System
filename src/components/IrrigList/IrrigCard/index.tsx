import { useEffect, useState } from "react";
import { IService } from "../../../providers/ServicesContext";
import { BodyTwo500 } from "../../../styles/typhography";
import { StyledIrrigCard } from "./styles";

interface IIrrigProps {
  service: IService;
}
export const IrrigCard = ({ service }: IIrrigProps) => {
  const [date, setDate] = useState("");
  const [on, setOn] = useState("");
  const [off, setOff] = useState("");

  const getDate = () => {
    const meses = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    let date = new Date(service.turnOn);
    let formatDate = `${date.getDate()} ${
      meses[date.getMonth()]
    } ${date.getFullYear()}`;

    setDate(formatDate);
    let hour = "";
    if (date.getHours() < 10) {
      hour = `0${date.getHours()}`;
    } else {
      hour = String(date.getHours());
    }

    let minutes = "";
    if (date.getMinutes() < 10) {
      minutes = `0${date.getMinutes()}`;
    } else {
      minutes = String(date.getMinutes());
    }
    let hourOn = `${hour} : ${minutes} : ${date.getUTCSeconds()}`;

    setOn(hourOn);

    let dateOff = new Date(service.turnOff);

    let hourOff = "";
    let hourLocal = dateOff.getHours();

    if (hourLocal == 0) {
      hourLocal = 24;
    }
    if (hourLocal == 1) {
      hourLocal = 25;
    }
    if (hourLocal == 2) {
      hourLocal = 26;
    }

    let newHour = hourLocal - 3;

    if (newHour < 10) {
      hourOff = `0${newHour}`;
    } else {
      hourOff = String(newHour);
    }

    let minutesOff = "";
    if (dateOff.getMinutes() < 10) {
      minutesOff = `0${dateOff.getMinutes()}`;
    } else {
      minutesOff = String(dateOff.getMinutes());
    }
    let hourOffForm = `${hourOff} : ${minutesOff} : ${dateOff.getUTCSeconds()}`;
    setOff(hourOffForm);
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <StyledIrrigCard>
      <BodyTwo500>Data: {date} </BodyTwo500>
      <BodyTwo500>Horário de ativação: {on}</BodyTwo500>
      {service.turnOff ? (
        <BodyTwo500>Horário de desativação: {off}</BodyTwo500>
      ) : null}
      <BodyTwo500>Duração: 10 min</BodyTwo500>
    </StyledIrrigCard>
  );
};
