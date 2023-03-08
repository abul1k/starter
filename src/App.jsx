import React from "react";
import { useSelector } from "react-redux";

// Routes
import AppRoutes from "./components/Routes/Routes";

// components
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { theme } = useSelector(({ layoutActions }) => layoutActions);

  return (
    <div className={theme === "light" ? "light-layout" : "dark-layout"}>
      <Header theme={theme} />
      <Menu />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
