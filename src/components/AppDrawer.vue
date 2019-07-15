<template>
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant.sync="mini"
    fixed
    :dark="$vuetify.dark"
    app
    v-model="drawer"
    width="220"
  >
    <v-toolbar color="primary" dark>
      <img
        src="@/assets/rider-dash-logo-white.png"
        height="50"
        alt="Rider Dash"
      />
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Rider Dash</span>
      </v-toolbar-title>
    </v-toolbar>
    <vue-perfect-scrollbar class="drawer-menu--scroll">
      <v-list dense expand>
        <template v-for="item in menus">
          <v-list-tile
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            ripple="ripple"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            :key="item.name"
          >
            <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="item.subAction">
              <v-icon class="success--text">{{ item.subAction }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  name: "app-drawer",
  components: {
    VuePerfectScrollbar
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    mini: false,
    drawer: true,
    menus: []
  }),
  created() {
    this.$router.options.routes.filter(
      function(route) {
        if (route.meta.menu) {
          let menu = {
            title: route.name,
            group: "default",
            icon: route.icon,
            name: route.name
          };

          this.menus.push(menu);
        }
        return true;
      }.bind(this)
    );
    window.getApp.$on("APP_DRAWER_TOGGLED", () => {
      this.drawer = !this.drawer;
    });
  },

  methods: {
    genChildTarget(item, subItem) {
      if (subItem.href) return;
      if (subItem.component) {
        return {
          name: subItem.component
        };
      }
      return { name: `${item.group}/${subItem.name}` };
    }
  }
};
</script>
