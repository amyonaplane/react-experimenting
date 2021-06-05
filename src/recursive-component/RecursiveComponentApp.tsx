import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import RecursiveComponent from "./RecursiveComponent";

const data = {
  name: "Level 1",
  items: [
    {
      name: "Level 2",
      items: [
        {
          name: "Level 3",
        },
      ],
    },
  ],
};

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background};
`;

function RecursiveComponentApp() {
  return (
    <AppContainer>
      <header>React Experimenting</header>
      <RecursiveComponent {...data} />
    </AppContainer>
  );
}

export default RecursiveComponentApp;
