<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
              flat
              solo
              prepend-icon="search"
              placeholder="Type something"
              v-model="search"
              hide-details
              class="hidden-sm-and-down"
              ></v-text-field>     
              <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn>         
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="order_headers"
                :search="search"
                :items="orders" 
                :rows-per-page-items="[5]"
                class="elevation-1"
                item-key="name"             
                :disable-page-reset="true"
                >
                <template slot="items" slot-scope="props">         
                  <td>{{ props.item.id }}</td>
                  <td>{{ props.item.customer.first_name}}</td>
                  <td>{{ props.item.customer.last_name }}</td>
                  <td>{{ props.item.contact_name}}</td>
                  <td>{{ props.item.contact_phone}}</td>
                  <td>{{ props.item.notes}}</td>
                  <td>{{ props.item.service_fee | currency  }}</td>
                  <td>{{ props.item.total | currency }}</td>
                  <td>{{ props.item.status.name }}</td>
                  <td>{{ props.item.order_date | moment('YYYY-MM-DD')}}</td>
                  <td>{{ props.item.createdAt | moment('YYYY-MM-DD')}}</td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>  
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import {
  ordersQuery,
  orderCreatedSubscription,
  orderUpdatedSubscription,
} from "@/graphql";
import moment from "moment";

export default {
  apollo: {
    orders: {
      query: ordersQuery,
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
    }
  },


  data: () => ({
    moment: moment,
    search: "",
    orders: [],
    order_headers: [
      {
        text: 'Order ID',
        value: 'id',
        align: 'center'
      },
      {
        text: 'First Name',
        value: 'customer.first_name'
      },
      {
        text: 'Last Name',
        value: 'customer.last_name'
      },
      {
        text: 'Contact Name',
        value: 'contact_name'
      },
      {
        text: 'Contact Phone',
        value: 'contact_phone'
      },
      {
        text: 'Order',
        value: 'notes'
      },
      {
        text: 'Service Fee',
        value: 'service_fee'
      },
      {
        text: 'Order Total',
        value: 'total'
      },
      {
        text: 'Status',
        value: 'status.name',
      },
      {
        text: 'Order Date',
        value: 'order_date',
      },
      {
        text: 'Order Created',
        value: 'createdAt',
      },
    ],
    loading: false
  }),
  created() {
    
  },
  computed: {

  },
  methods: {
    show_order(order_id) {
    
    },
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
