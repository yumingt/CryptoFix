import React from "react";
import { Container, Button } from "./styles";
import deposit1 from "../../assets/icons/deposit1.svg";
import borrow1 from "../../assets/icons/borrow1.svg";
import settings from "../../assets/icons/settings.svg";
import home_icon from "../../assets/icons/home_icon.svg";

export const SideMenu = () => {
  return (
    <>
      <Container>
        <IconButton name={home_icon} descriprion={"Home"} />
        <IconButton name={deposit1} descriprion={"Desposit"} />
        <IconButton name={borrow1} descriprion={"Borrow"} />
        <IconButton name={settings} descriprion={"Settigs"} />
      </Container>
    </>
  );
};

const IconButton = props => {
  return (
    <Button>
      <img className="image" src={props.name} alt={props.descriprion} />
    </Button>
  );
};
