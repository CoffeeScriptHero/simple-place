import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import { AppWrapper, Main } from "./App-styles";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main>
        <AppRoutes />
      </Main>
    </AppWrapper>
  );
};

export default App;
