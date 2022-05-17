import closeLight from "../images/icons/close-light.png";
import closeDark from "../images/icons/close-dark.png";

import arrowDownLight from "../images/icons/arrow-down-light.svg";
import arrowDarkDark from "../images/icons/arrow-down-dark.svg";

import arrowBackLight from "../images/icons/back-light.svg";
import arrowBackDark from "../images/icons/back-dark.svg";

const changeTheme = (theme: { light: boolean; dark: boolean }): void => {
  if (theme.light) {
    document.documentElement.style.setProperty("--main-bg", "#ffffff");

    document.documentElement.style.setProperty("--header-bg", "#ffffff");

    document.documentElement.style.setProperty("--main-text", "#111517");

    document.documentElement.style.setProperty(
      "--arrow-down",
      `url(${arrowDownLight})`
    );

    document.documentElement.style.setProperty(
      "--arrow-back",
      `url(${arrowBackLight})`
    );

    document.documentElement.style.setProperty("--close", `url(${closeLight})`);
  } else {
    document.documentElement.style.setProperty("--main-bg", "#202c36");

    document.documentElement.style.setProperty("--header-bg", "#2B3844");

    document.documentElement.style.setProperty("--main-text", "#ffffff");

    document.documentElement.style.setProperty("--close", `url(${closeDark})`);

    document.documentElement.style.setProperty(
      "--arrow-down",
      `url(${arrowDarkDark})`
    );

    document.documentElement.style.setProperty(
      "--arrow-back",
      `url(${arrowBackDark})`
    );
  }
};

export { changeTheme };
