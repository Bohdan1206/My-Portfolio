import "./App.css";
import Calculator from "./components/Calculator";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: #323232;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
