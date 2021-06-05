export type ThemeType = typeof defaultTheme; // This is the type definition for my theme object.

export const defaultTheme = {
  primary: "#f45511",
  text: "#000",
  background: "#fff",
};

const theme = defaultTheme; // set the light theme as the default.
export default theme;
