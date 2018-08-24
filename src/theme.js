// example theme.js
// import theme from 'mdx-deck/themes'
import { code as theme } from "mdx-deck/themes";

let colors = theme.colors;
let css = theme.css;

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  // font: 'Roboto, sans-serif',
  // custom colors
  colors: {
    ...colors,
    background: "#1ba9d5",
    text: "#0a0045",
    link: "yellow"
  },
  css: {
    ...css,
    textAlign: "left"
  }
};
