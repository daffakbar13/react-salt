import * as React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { BasePath } from "../configs/paths";
import HeaderContainer from "../containers/HeaderContainer";

export function Routes() {
  return (
    <BrowserRouter>
      <HeaderContainer>
        <Switch>
          {BasePath.map((props, index) => (
            <Route key={index} {...props} />
          ))}
        </Switch>
      </HeaderContainer>
    </BrowserRouter>
  );
}
