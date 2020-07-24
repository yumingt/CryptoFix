import React from "react";
import { DepositHeader } from "../../components/Deposit/DepositHeader";
import { Grid } from "./styles";
import {SideMenu} from "../../components/SideMenu";
export const Deposit = () => {
  return (
    <>
      <Grid>
        <SideMenu/>
        <DepositHeader />
      </Grid>
    </>
  );
};
