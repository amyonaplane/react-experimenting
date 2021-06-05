import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import RecursiveComponentApp from "./recursive-component/RecursiveComponentApp";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background};
`;

function App() {
  return (
    <AppContainer>
      <header>Recursive Component App</header>
      <RecursiveComponentApp />
    </AppContainer>
  );
}

export default App;
