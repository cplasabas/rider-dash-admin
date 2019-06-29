<template>
  <v-toolbar color="secondary" fixed dark app>
    <v-toolbar-title class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="handleDrawerToggle">
      </v-toolbar-side-icon>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title class="ml-0 pl-3" v-show="show_rider_button">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn flat icon v-on="on" color="primary" @click="show_riders()">
            <v-icon>motorcycle</v-icon>
          </v-btn>
        </template>
        <span>Show Riders</span>
      </v-tooltip>
    </v-toolbar-title>
    <v-menu
      origin="center center"
      offset-y
      :nudge-bottom="10"
      transition="scale-transition"
    >
      <v-btn icon large flat slot="activator">
        <v-avatar size="30px">
          <v-icon>expand_more</v-icon>
        </v-avatar>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile @click="logout()">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: "app-toolbar",
  data: () => ({
    dialog: {
      show_edit: false
    },
    userFormValid: false,
    user_id: null,
    rules: {
      required: value => !!value || "Required."
    },
    show_rider_button: false
  }),
  watch: {
    $route(to) {
      if (to.name.toLowerCase() === "dashboard") {
        this.show_rider_button = true;
      } else {
        this.show_rider_button = false;
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      window.getApp.snackbar = {
        show: true,
        color: "green",
        text: "Logout successfully."
      };

      this.$router.replace({ path: "/" });
    },
    handleDrawerToggle() {
      window.getApp.$emit("APP_DRAWER_TOGGLED");
    },
    show_riders() {
      window.getApp.$emit("RIDERS_DRAWER_TOGGLED");
    }
  },
  // eslint-disable-next-line
  created: function () {
    this.user = this.$store.state.user;
  }
};
</script>
