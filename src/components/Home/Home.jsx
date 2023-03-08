import React from "react";

// i18n locale
import { useTranslation } from "react-i18next";

// utils
import "../../utils/i18n";

// components
import Products from "../Products/Products";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home">
      <h1>{t("products.title")}</h1>
      <Products />
    </section>
  );
};

export default Home;
