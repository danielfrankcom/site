export default {
  css: {
    preprocessorOptions: {
      scss: {
         // example : additionalData: `@import "./src/design/styles/variables";`
         // dont need include file extend .scss
         additionalData: `@import "./lib/web/base.scss";`
     },
    },
  },
};