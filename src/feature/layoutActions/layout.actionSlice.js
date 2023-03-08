import { createSlice } from "@reduxjs/toolkit";

// checking devise theme
const system = window.matchMedia("(prefers-color-scheme: dark");

let systemTheme;

if (system.matches) {
  systemTheme = "dark";
} else {
  systemTheme = "light";
}

const LayoutActionSlice = createSlice({
  name: "layoutActions",
  initialState: {
    showMenu: false,
    theme: localStorage.getItem("theme") || systemTheme,
  },
  reducers: {
    // show & hide menu
    toggleMenu: (state, { payload }) => {
      state.showMenu = payload;
    },

    // change skin of template
    toggleTheme: (state, { payload }) => {
      state.theme = payload;
      localStorage.setItem("theme", payload);
    },
  },
});

export const { toggleMenu, toggleTheme } = LayoutActionSlice.actions;
export default LayoutActionSlice.reducer;
