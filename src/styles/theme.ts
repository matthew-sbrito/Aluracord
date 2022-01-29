import { DefaultTheme } from "styled-components";
import config from "../data/config.json";

const theme: DefaultTheme = {
  colors: config.theme.colors,
};

export default theme;
