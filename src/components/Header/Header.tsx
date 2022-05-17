import { useEffect, useState } from "react";
import "./Header.css";
import { changeTheme } from "../../utils/utils";

interface Theme {
  light: boolean;
  dark: boolean;
}

const Header = () => {
  const [theme, setTheme] = useState<Theme>({ light: true, dark: false });
  const [themeState, setThemeState] = useState("Light mode");

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  const handleThemeChangeClick = (): void => {
    setTheme({
      light: !theme.light,
      dark: !theme.dark,
    });

    theme.light ? setThemeState("Dark Mode") : setThemeState("Light Mode");
  };

  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>

      <div className="header__theme-wrap">
        <button
          className="header__theme-buttom"
          onClick={handleThemeChangeClick}
          aria-label="theme change"
        ></button>
        <p className="header__theme-state">{themeState}</p>
      </div>
    </header>
  );
};
export default Header;
