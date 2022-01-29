import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: any;
      neutrals: any;
    }
  }
}
