<template>
  <div id="appRoot">
    <template v-if="!$route.meta.public">
      <v-app id="inspire" class="app">
        <app-drawer class="app--drawer"></app-drawer>
        <app-toolbar class="app--toolbar"></app-toolbar>
        <v-content>
          <div class="page-wrapper">
            <router-view></router-view>
          </div>
          <!-- App Footer -->
          <v-footer height="auto" class="white pa-3 app--footer">
            <span class="caption">
              Rider Dash &copy; {{ new Date().getFullYear() }}
            </span>
            <v-spacer></v-spacer>
          </v-footer>
        </v-content>
        <!-- Go to top -->
        <app-fab></app-fab>
      </v-app>
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
    <div
      class="rider-pick-overlay"
      @keydown.esc="hide_rider_pick()"
      tabindex="0"
      v-show="overlay.rider_pick"
    >
      <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
          <v-flex class="white--text display-1 font-weight-bold text-uppercase">
            Select Rider
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <v-snackbar
      :timeout="0"
      top
      right
      :color="snackbar.color"
      v-model="snackbar.show"
    >
      {{ snackbar.text }}
      <v-btn dark flat @click.native="snackbar.show = false" icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>
<script>
import AppDrawer from "@/components/AppDrawer";
import AppToolbar from "@/components/AppToolbar";
import AppFab from "@/components/AppFab";

export default {
  components: {
    AppDrawer,
    AppToolbar,
    AppFab
  },
  data: () => ({
    expanded: true,
    snackbar: {
      show: false,
      text: "",
      color: ""
    },
    overlay: {
      rider_pick: false
    }
  }),
  created() {
    window.getApp = this;

    window.getApp.$on("RIDER_PICK", () => {
      window.getApp.$emit("RIDERS_DRAWER_TOGGLED", true);
      this.overlay.rider_pick = !this.overlay.rider_pick;
    });
  },
  methods: {
    hide_rider_pick() {
      window.getApp.$emit("EXIT_RIDER_PICK", false);
      window.getApp.$emit("RIDERS_DRAWER_TOGGLED", false);
      this.overlay.rider_pick = !this.overlay.rider_pick;
    }
  }
};
</script>

<style lang="css" scoped>
.setting-fab {
  top: 50% !important;
  right: 0;
  border-radius: 0;
}

.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px );
}
</style>
