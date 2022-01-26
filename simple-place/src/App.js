import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import { AppWrapper } from "./App-styles";

const App = () => {
  return (
    <AppWrapper>
      {/* <Header /> */}
      <AppRoutes />
    </AppWrapper>
  );
};

export default App;
