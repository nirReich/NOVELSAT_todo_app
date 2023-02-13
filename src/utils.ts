type AppUtils = {
  createUniqueKey: () => string;
  checkTwoWordsAndLongerThanFour: (str: string) => boolean;
  emailLink: string;
  linkedinLink: string;
  colors: Colors;
  NOVELSAT_LOGO: string;
  trimString: (str: string) => string;
};
type Colors = {
  bluePrimary: "rgb(33,150,243)";
  warmOrange: "rgb(255, 153, 0)";
  ivoryWhite: "rgb(255,255,255)";
  greyWhite: "rgb(245,246,247)";
  lightGrey: "rgb(160, 160, 160)";
  darkBlue: "rgb(22, 24, 48)";
  darkRed: "rgb(153, 0, 0)";
  darkGrey: "rgb(36,36,36)";
  primaryGrey: "#444";
  dangerRed: "rgb(255,51,51)";
  taskGrey: "rgb(68,68,68)";
  black: "rgb(0,0,0)";
};

const appUtils: AppUtils = {
  NOVELSAT_LOGO:
    "https://2022.satelliteinnovation.com/wp-content/uploads/sites/18/2022/06/NOVELSAT-logo-2020-FINAL.png",
  emailLink: "reich.nir@gmail.com",
  linkedinLink: "https://www.linkedin.com/in/nir-reich/",

  colors: {
    bluePrimary: "rgb(33,150,243)",
    warmOrange: "rgb(255, 153, 0)",
    ivoryWhite: "rgb(255,255,255)",
    greyWhite: "rgb(245,246,247)",
    lightGrey: "rgb(160, 160, 160)",
    darkBlue: "rgb(22, 24, 48)",
    darkRed: "rgb(153, 0, 0)",
    darkGrey: "rgb(36,36,36)",
    primaryGrey: "#444",
    dangerRed: "rgb(255,51,51)",
    taskGrey: "rgb(68,68,68)",
    black: "rgb(0,0,0)",
  },

  createUniqueKey: () => {
    return `${new Date().getTime()}`;
  },

  checkTwoWordsAndLongerThanFour: (str: string): boolean => {
    let words = str.split(" ");
    let result = true;
    if (words.length < 2 || str.length <= 4) {
      result = false;
    }
    return result;
  },

  trimString: (str: string): string => {
    if (str.length > 75) {
      let trimmedString = str.substring(0, 75);
      let lastIndex = trimmedString.lastIndexOf(" ");
      trimmedString = trimmedString.substring(0, lastIndex);
      return `${trimmedString}...`;
    }
    return str;
  },
};

export default appUtils;
