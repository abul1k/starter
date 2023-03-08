import React from "react";

// redux & store
import { useDispatch } from "react-redux";
import {
  toggleMenu,
  toggleTheme,
} from "../../feature/layoutActions/layout.actionSlice";

// i18n
import { useTranslation } from "react-i18next";
import "../../utils/i18n";

const Header = ({ theme }) => {
  const { i18n } = useTranslation();

  const dispatch = useDispatch();

  // show & hide menu
  const handleMenu = () => dispatch(toggleMenu(true));

  // change lang of layout
  const selectedLang = ({ target }) => i18n.changeLanguage(target.value);
  const lang = localStorage.getItem("i18nextLng");

  // change theme of layout
  const changeTheme = (currentTheme) => dispatch(toggleTheme(currentTheme));

  return (
    <header className="header">
      <h3>Header</h3>
      <button onClick={handleMenu}>menu</button>
      <select value={lang || "ru"} onInput={selectedLang}>
        <option value="ru">ru</option>
        <option value="uz">uz</option>
      </select>
      {theme === "light" ? (
        <button onClick={() => changeTheme("dark")}>dark</button>
      ) : (
        <button onClick={() => changeTheme("light")}>light</button>
      )}
    </header>
  );
};

export default Header;
