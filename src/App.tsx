import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background};
`;

function App() {
  return (
    <AppContainer>
      <header>React Experimenting</header>
    </AppContainer>
  );
}

export default App;
