import React from "react";
import { useDispatch, useSelector } from "react-redux";

// layout actions 
import { toggleMenu } from "../../feature/layoutActions/layout.actionSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const { showMenu } = useSelector(({ layoutActions }) => layoutActions);

  const closeForm = () => dispatch(toggleMenu(false));

  return (
    <>
      <div
        className={showMenu ? "container show" : "container"}
        onClick={closeForm}
      />
      <ul className={showMenu ? "menu show-menu" : "menu"}>
        <li>
          <a href="/">Link 1</a>
        </li>
        <li>
          <a href="/">Link 2</a>
        </li>
      </ul>
    </>
  );
};

export default Menu;
