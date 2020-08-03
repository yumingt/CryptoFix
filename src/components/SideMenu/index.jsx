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
        <a href=".">
          <IconButton name={home_icon} descriprion={"Home"} />
        </a>
        <a href="/deposit">
          <IconButton name={deposit1} descriprion={"Desposit"} />
        </a>
        <a href="/borrow">
          <IconButton name={borrow1} descriprion={"Borrow"} />
        </a>
        <a href="/settings">
          <IconButton name={settings} descriprion={"Settigs"} />
        </a>
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
