<template>
  <v-app id="app">
    <v-system-bar class="fixed-el" app color="primary darken-1">
      <v-btn class="unfixed-el" icon to="/">
        <v-icon size="18" color="secondary">mdi-keyboard-backspace</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="unfixed-el" icon @click="minimize()">
        <v-icon size="18" color="secondary">mdi-minus</v-icon>
      </v-btn>
      <v-btn class="unfixed-el" icon>
        <v-icon size="18" color="secondary">mdi-checkbox-blank-outline</v-icon>
      </v-btn>
      <v-btn class="unfixed-el" icon @click="close()">
        <v-icon size="18" color="secondary">mdi-close</v-icon>
      </v-btn>
    </v-system-bar>

    <v-main>
      <v-container fluid class="fit-parent">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { remote } from "electron";
const window = remote.getCurrentWindow();

export default {

  methods: {
    minimize() {
      window.minimize();
    },
    close() {
      window.close();
    }
  }
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: hidden;
}
::-webkit-scrollbar {
    display: none;
}
.fixed-el {
  -webkit-app-region: drag;
}
.unfixed-el {
  -webkit-app-region: none;
}

.fit-parent {
  height: 100%;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.414s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
