import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import { AppWrapper } from "./App-styles";
import UsersModal from "./components/UsersModal/UsersModal";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <UsersModal />
      <AppRoutes />
    </AppWrapper>
  );
};

export default App;
