import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#000000",
        secondary: "#FFFFFF",
        
        pink: "#ff6188",
        orange: "#fc9867",
        yellow: "#F7F74C",
        green: "#1FD58F",
        blue: "#79dce8",
        purple: "#ab9df2",
        black: "#2d2a2e",

        pal: "#FC9A97",
        bg: "#F9D5D4",
      }
    }
  }
});