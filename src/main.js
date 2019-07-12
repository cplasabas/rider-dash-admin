import Vue from "vue";
import App from "./App";
import router from "@/routes";
import store from "@/store/store";

import "./registerServiceWorker";

import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-boost";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "./theme/style.scss";

import * as VueGoogleMaps from "vue2-google-maps";
import { rtdbPlugin } from "vuefire";

import moment from "vue-moment";
import VueCurrencyFilter from "vue-currency-filter";

import Truncate from "lodash.truncate";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDO-UOIDzbh8SGncTMZ8z45OU30Y7X70o0"
  }
});

Vue.use(rtdbPlugin);

Vue.filter("truncate", Truncate);
Vue.use(moment);

Vue.use(VueCurrencyFilter, {
  symbol: "₱",
  thousandsSeparator: ",",
  fractionCount: 2,
  fractionSeparator: ".",
  symbolPosition: "front",
  symbolSpacing: true
});

Vue.use(Vuetify, {
  theme: {
    primary: "#ff5f07",
    secondary: "#313131",
    accent: "#ff5f07"
  },
  options: {
    themeVariations: ["primary", "secondary", "accent"],
    extra: {
      mainToolbar: {
        color: "primary"
      },
      sideNav: "primary",
      mainNav: "primary lighten-1",
      bodyBg: ""
    }
  }
});

const httpLink = new HttpLink({
  uri: "https://api.riderdash.ph"
  // uri: "http://localhost:8010"
});

const wsLink = new WebSocketLink({
  uri: "ws://api.riderdash.ph/graphql",
  // uri: "ws:localhost:8010/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      authToken: `Bearer ${store.state.token}`
    }
  }
});

const middlewareLink = setContext(() => ({
  headers: {
    authorization: `Bearer ${store.state.token}`
  }
}));

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  middlewareLink.concat(httpLink)
);

// const link = middlewareLink.concat(httpLink);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: link,
  cache,
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
