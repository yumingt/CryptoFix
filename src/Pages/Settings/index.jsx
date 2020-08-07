import React from "react";
import { SettingsHeader } from "../../components/Settings/SettingsHeader";
import { Grid } from "./styles";
import { SideMenu } from "../../components/SideMenu";

export const Settings = () => {
  return (
    <>
      <Grid>
        <SideMenu />
        <SettingsHeader />
      </Grid>
    </>
  );
};
