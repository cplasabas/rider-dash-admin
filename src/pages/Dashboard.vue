<template>
  <v-layout>
    <v-layout v-if="ongoingOrders.length > 0" class="orders-container" row wrap>
      <v-flex
        xs12
        md4
        px-2
        py-2
        v-for="(order, key) in ongoingOrders"
        :key="key"
      >
        <v-card class="order-card" @click="show_order(order.id)">
          <v-card-title class="clickable" primary-title>
            <v-flex md12 sm12>
              <v-layout row wrap>
                <v-flex md5 sm5>
                  <h3 class="body-2 mb-0">#{{ order.id }}</h3>
                </v-flex>
                <v-flex class="body-2" md7 sm7 text-xs-right>
                  <h3
                    class="secondary--text
                    text-capitalize
                    text--lighten-1"
                  >
                    {{ order.status.name }}
                  </h3>
                </v-flex>
              </v-layout>
              <v-layout row wrap v-if="order.rider">
                <v-flex md4 sm4>
                  {{ order.createdAt | moment("hh:mm A") }}
                </v-flex>
                <v-flex
                  class="body-2
                  text-xs-right
                  text-capitalize"
                  md8
                  sm8
                  v-show="order.status_id > 1"
                >
                  {{ order.rider.first_name }} {{ order.rider.last_name }}
                </v-flex>
              </v-layout>
            </v-flex>
          </v-card-title>
          <v-card-text class="clickable" style="padding-top: 0">
            <v-layout row wrap>
              <v-flex
                class="subheading font-weight-bold"
                md6
                sm6
                my-2
                text-capitalize
              >
                {{ order.contact_name }}
              </v-flex>
              <v-flex
                class="title text-xs-right primary--text font-weight-bold"
                md6
                sm6
                my-2
                text-capitalize
              >
                {{ order.service_fee | currency }}
              </v-flex>
            </v-layout>
            <v-layout
              v-for="(location, key) in order.locations"
              :key="location.id"
              row
              wrap
              my-1
              text-capitalize
            >
              <v-flex md12 sm12>
                <v-icon
                  color="primary"
                  v-if="key === order.locations.length - 1"
                >
                  location_on
                </v-icon>
                <v-icon color="primary" v-else>donut_large</v-icon>
                {{ location.address }}
              </v-flex>
            </v-layout>
            <v-layout row wrap my-1 text-capitalize>
              <v-flex md12 sm12 class="grey--text" my-2>
                {{ order.notes }}
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions
            v-on:click.stop
            class="secondary"
            v-show="order.status.id === 1"
          >
            <v-layout row wrap my-1 text-capitalize justify-end>
              <v-flex class="text-xs-right" md3 sm3>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      dark
                      v-on="on"
                      color="red darken-4"
                      @click="show_reject(order.id)"
                    >
                      Reject
                    </v-btn>
                  </template>
                  <span>Reject Order</span>
                </v-tooltip>
              </v-flex>
              <v-flex class="text-xs-right" md3 sm3>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      dark
                      v-on="on"
                      color="primary"
                      @click="order_assign(order.id)"
                    >
                      Assign
                    </v-btn>
                  </template>
                  <span>Assign Rider to Order</span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <v-container fill-height text-xs-center>
        <v-layout row wrap align-center>
          <v-flex>
            <p
              class="display-2 text-uppercase font-weight-bold grey--text text--lighten-1"
            >
              NO ORDERS
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    <v-bottom-nav
      :value="show_riders"
      fixed
      class="secondary py-2 px-2 justify-end"
      dark
      height="120"
    >
      <VuePerfectScrollbar class="scroll-area">
        <v-layout class="non-clickable" row wrap justify-end>
          <v-flex md3 xs12 px-2 py-2 v-for="(rider, key) in riders" :key="key">
            <!-- eslint-disable -->
            <v-card
              class="rider-card"
              v-bind:class="{
                'clickable': rider_pick && !rider.current_order,
                'rider-hover': rider_pick && !rider.current_order
              }"
              @click="pick_rider(rider.id)"
            >
              <v-card-title primary-title style="padding: 15px !important">
                <v-flex md12 sm12>
                  <v-layout row wrap>
                    <v-flex md5 sm5>
                      <h3 class="body-2 mb-0">RIDER #{{ rider.id }}</h3>
                    </v-flex>
                    <v-flex
                      class="body-2"
                      md7
                      sm7
                      text-xs-right
                      v-if="rider.current_order && rider.current_order.current_location"
                    >
                      <!-- eslint-disable -->
                      <h3
                        class="primary--text text-capitalize text--lighten-1"
                      >
                        {{rider.current_order.status.name}} {{rider.current_order.current_location.establishment}}
                      </h3>
                    </v-flex>
                    <v-flex
                      class="body-2"
                      md7
                      sm7
                      text-xs-right
                      v-if="!rider.current_order"
                    >
                      <h3
                        class="secondary--text
                        text--lighten-4"
                      >
                        No Current Order
                      </h3>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex
                      class="body-2 font-weight-bold"
                      md7
                      sm7

                      text-capitalize
                    >
                      {{ rider.first_name }} {{ rider.last_name }}
                    </v-flex>
                    <v-flex
                      class="caption"
                      md5
                      sm5
                      text-xs-right
                      v-if="rider.current_order">
                        ORDER #{{ rider.current_order.id }}
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </VuePerfectScrollbar>
    </v-bottom-nav>
    <v-dialog v-model="dialog.reject" width="500">
      <v-card>
        <v-card-title class="title secondary white--text" primary-title>
          Reject Order
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
            Are you sure you want to reject the order?
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" flat @click="dialog.reject = false">Close</v-btn>
          <v-btn color="red" flat @click="reject_order()">Reject</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog.order" width="500">
      <v-card>
        <v-card-title class="title secondary white--text" primary-title>
          Order Details
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <!-- -->
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import {
  ongoingOrdersQuery,
  orderCreatedSubscription,
  orderUpdatedSubscription,
  ridersQuery,
  riderAssignedSubscription,
  riderOrderUpdatedSubscription,
  updateOrderMutation
} from "@/graphql";
import moment from "moment";

import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  components: {
    VuePerfectScrollbar
  },
  apollo: {
    orders: {
      query: ongoingOrdersQuery,
      subscribeToMore: [
        {
          document: orderUpdatedSubscription,
          updateQuery: (previousResult, { subscriptionData }) => {
            window.getApp.snackbar = {
              show: true,
              color: "primary",
              text:
                "Order #" + subscriptionData.data.orderUpdated.id + " Updated."
            };
          }
        },
        {
          document: orderCreatedSubscription,
          updateQuery: (previousResult, { subscriptionData }) => {
            window.getApp.snackbar = {
              show: true,
              color: "primary",
              text: "New Order Created."
            };

            return {
              orders: [
                ...previousResult.orders,
                subscriptionData.data.orderCreated
              ]
            };
          }
        }
      ]
    },
    riders: {
      query: ridersQuery,
      subscribeToMore: [
        {
          document: riderOrderUpdatedSubscription,
          updateQuery: (previousResult, { subscriptionData }) => {

            let data = subscriptionData.data.riderOrderUpdated;
            previousResult.riders.map(rider => {
              if (rider.id === data.rider_id) {
                rider.current_order = data.current_order;
              }
              return rider;
            });
          }
        },
        {
          document: riderAssignedSubscription,
          updateQuery: (previousResult, { subscriptionData }) => {
            let data = subscriptionData.data.riderAssigned;
            previousResult.riders.map(rider => {
              if (rider.id === data.rider_id) {
                rider.current_order = {
                  status: data.status,
                  id: data.id
                };
              }
              return rider;
            });
          }
        }
      ]
    }
  },
  data: () => ({
    moment: moment,
    orders: [],
    riders: [],
    dialog: {
      order: false,
      reject: false
    },
    order: {
      id: null,
      rider_id: null
    },
    show_riders: false,
    rider_pick: false,
    loading: false
  }),
  created() {
    window.getApp.$on("RIDERS_DRAWER_TOGGLED", data => {
      if (data) {
        this.show_riders = data;
      } else {
        this.show_riders = !this.show_riders;
      }
    });

    window.getApp.$on("EXIT_RIDER_PICK", () => {
      this.rider_pick = false;
    });
  },
  computed: {
    ongoingOrders: function() {
      return this.orders.filter(function(o) {
        return o.status_id !== 5 && o.status_id !== 6 && o.status_id !== 7;
      });
    },
    availableRiders: function() {
      return this.riders.map(function(r) {
        return {
          text: r.first_name + " " + r.last_name,
          value: r.id
        };
      });
    },
    pickedOrder: function() {
      return this.orders.find(
        function(o) {
          return o.id == this.order.id;
        }.bind(this)
      );
    }
  },
  methods: {
    show_reject (order_id) {
      this.reject_id = order_id;
      this.dialog.reject = true;
    },
    async reject_order () {
      let payload = {
        id: this.reject_id,
        status_id: 7
      };
      
      await this.$apollo
          .mutate({
            mutation: updateOrderMutation,
            variables: payload
          })
          .then(() => {
            this.loading = false;
            this.dialog.reject = false;

            window.getApp.snackbar = {
              show: true,
              color: "red darken-1",
              text: "Order Rejected"
            };
          })
          .catch(({ graphQLErrors }) => {
            this.loading = false;
            this.dialog.reject = false;
            
            if (graphQLErrors) {
              this.error = graphQLErrors[0].message;

              window.getApp.snackbar = {
                show: true,
                color: "red darken-1",
                text: "Rider Assignment Error"
              };
            }
          });
    },
    show_order(order_id) {
      this.order.id = order_id;
      this.dialog.order = true;
    },
    order_assign(order_id) {
      this.order.id = order_id;
      this.rider_pick = true;
      window.getApp.$emit("RIDER_PICK");
    },
    async pick_rider(rider_id) {
      let rider = this.riders.find(r => r.id === rider_id);

      if (!rider.current_order && this.rider_pick && !this.loading) {
        this.order.rider_id = rider_id;
        this.order.status_id = 2;
        this.loading = true;

        await this.$apollo
          .mutate({
            mutation: updateOrderMutation,
            variables: this.order
          })
          .then(() => {
            this.loading = false;
            window.getApp.$emit("RIDER_PICK");
            window.getApp.snackbar = {
              show: true,
              color: "primary",
              text: "Rider Assigned"
            };
          })
          .catch(({ graphQLErrors }) => {
            this.loading = false;
            window.getApp.$emit("RIDER_PICK");
            if (graphQLErrors) {
              this.error = graphQLErrors[0].message;

              window.getApp.snackbar = {
                show: true,
                color: "red darken-1",
                text: "Rider Assignment Error"
              };
            }
          });
      }
    }
  }
};
</script>

<style lang="scss">
.scroll-area {
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
}
</style>
