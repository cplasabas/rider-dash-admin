<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
        <v-layout my-3 justify-end>
        <v-flex md2 xs2>
            <v-btn color="primary" @click="view_add">
            Create Coupon
            <v-icon>add</v-icon>
            </v-btn>
        </v-flex>
        </v-layout>
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
                    :headers="headers"
                    :search="search"
                    :items="coupons" 
                    :rows-per-page-items="[5]"
                    class="elevation-1"
                    item-key="code"             
                    :disable-page-reset="true"
                    >
                    <template slot="items" slot-scope="props">         
                        <td>{{ props.item.code }}</td>
                        <td>{{ props.item.name}}</td>
                        <td>{{ props.item.amount }}</td>
                        <td v-if="props.item.type === 1">Percentage</td>
                        <td v-else>Fixed</td>
                        <td v-if="props.item.active">Active</td>
                        <td v-if="!props.item.active">Inactive</td>
                        <td class="text-xs-center">
                            <v-tooltip bottom>
                                <v-btn
                                    slot="activator"
                                    color="light-green darken-4"
                                    depressed
                                    outline
                                    icon
                                    fab
                                    dark
                                    small
                                    @click="view_edit(props.item.id)"
                                >
                                    <v-icon>edit</v-icon>
                                </v-btn>
                                <span>Edit</span>
                            </v-tooltip>
                            <!-- <v-tooltip bottom>
                                <v-btn
                                    slot="activator"
                                    color="red darken-4"
                                    depressed
                                    outline
                                    icon
                                    fab
                                    dark
                                    small
                                    @click="view_delete(props.item.id)"
                                >
                                    <v-icon>delete</v-icon>
                                </v-btn>
                                <span>Delete</span>
                            </v-tooltip> -->
                        
                        </td>
                    </template>
                </v-data-table>
                </v-card-text>
            </v-card>
            </v-flex>  
        </v-layout>
        <v-dialog v-model="dialog.add_coupon" width="800">
            <v-card>
                <v-card-title v-if="!is_edit" class="headline secondary white--text" primary-title>
                    Add Coupon
                </v-card-title>
                <v-card-title v-if="is_edit" class="headline secondary white--text" primary-title>
                    Edit Coupon
                </v-card-title>
                <v-card-text>
                    <v-form v-model="coupon_form_valid">
                        <v-container>
                            <v-layout row wrap>
                                <v-flex xs12 sm4 md4>
                                    <v-select
                                        prepend-icon="category"
                                        label="type"
                                        v-model="coupon.type"
                                        :items="types"
                                    ></v-select>
                                </v-flex>
                                <v-flex xs12 sm4 md4 v-if="is_edit">
                                    <v-switch
                                        v-model="coupon.active"
                                        label="Active"
                                    ></v-switch>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex xs12 sm4 md4>
                                    <v-text-field
                                        prepend-icon="local_offer"
                                        v-model="coupon.code"
                                        :rules="[rules.required]"
                                        label="Code"
                                        required
                                    ></v-text-field>
                                   
                                </v-flex>
                                <v-flex xs12 sm4 md4>
                                    <v-text-field
                                        v-model="coupon.name"
                                        :rules="[rules.required]"
                                        label="Name"
                                        required
                                    ></v-text-field>
                                 </v-flex>
                                <v-flex xs12 sm4 md4>
                                    <v-text-field
                                        v-model="coupon.amount"
                                        :rules="[rules.required]"
                                        label="Amount"
                                        type="number"
                                        required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click="dialog.add_coupon = false">
                        Close
                    </v-btn>
                    <v-btn
                        v-if="!is_edit"
                        color="primary"
                        flat
                        :disabled="!coupon_form_valid"
                        @click="add_coupon()"
                    >
                        Add
                    </v-btn>
                    <v-btn
                        v-if="is_edit"
                        color="primary"
                        flat
                        :disabled="!coupon_form_valid"
                        @click="edit_coupon()"
                    >
                        Edit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog.delete_coupon" width="800">
            <v-card>
                <v-card-title v-if="!is_edit" class="headline secondary white--text" primary-title>
                    Delete Coupon
                </v-card-title>
                <v-card-text>
                    <v-form >
                        <v-container>
                            <v-layout row wrap>
                                Do you want to delete the coupon?
                            </v-layout>
                        </v-container>
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click="dialog.add_coupon = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
  </div>
</template>


<script>
import {
  couponsQuery,
  createCouponMutation,
  updateCouponMutation,
  deleteCouponMutation
} from "@/graphql";
import moment from "moment";

export default {
  apollo: {
    coupons: {
      query: couponsQuery,
    }
  },
  data: () => ({
    moment: moment,
    search: "",
    coupons: [],
    headers: [
      {
        text: 'Code',
        value: 'code'
      },
      {
        text: 'Name',
        value: 'name'
      },
      {
        text: 'Amount',
        value: 'amount'
      },
      {
        text: 'Type',
        value: 'type'
      },
      {
        text: 'Active',
        value: 'active'
      },
      {
        text: "Actions",
        value: "actions",
        align: "center"
        }
    ],
    types: [
        {
          text: 'Fixed',
          value: 0
        },
        {
          text: 'Percentage',
          value: 1
        }
    ],
    coupon: {
        name: '',
        code: '',
        amount: 0,
        type: 0,
        active: true
    },
    rules: {
      required: value => !!value || "Required.",
      email: v => /.+@.+/.test(v) || "E-mail must be valid"
    },
    loading: false,
    dialog: {
        add_coupon: false,
        delete_coupon: false
    },
    coupon_form_valid: true,
    is_edit: false,
    edit_id: null,
    delete_id: null,
  }),
  methods: {
    view_add() {
        this.is_edit = false;
        this.dialog.add_coupon = true;
    },
    view_edit(id) {
        this.edit_id = id;
        this.is_edit = true;
        this.dialog.add_coupon = true;

        let coupon = this.coupons.find(c => c.id === id);
        this.coupon = coupon;
    },
    view_delete(id) {
        this.delete_id = id;
        this.dialog.delete_coupon = true;

    },
    add_coupon() {
        let payload = {
            name: this.coupon.name,
            code: this.coupon.code,
            amount: parseFloat(this.coupon.amount),
            type: parseInt(this.coupon.type),
            active: 1
        }

        this.$apollo
        .mutate({
          mutation: createCouponMutation,
          variables: payload,
          update: (store, { data }) => {
            const coupons = store.readQuery({ query: couponsQuery });

            coupons.coupons.push(data.createCoupon);

            store.writeQuery({ query: couponsQuery, data });
          }
        })
        .then(() => {
          this.loading = false;
          this.dialog.add_coupon = false;

          window.getApp.snackbar = {
            show: true,
            color: "primary",
            text: "Coupon Created."
          };
        })
        .catch(error => {
          this.loading = false;
          this.dialog.add_coupon = false;

          window.getApp.snackbar = {
            show: true,
            color: "red darken-4",
            text: "Failed!."
          };
        });
    },
    edit_coupon() {
        let payload = {
            id: this.coupon.id,
            name: this.coupon.name,
            code: this.coupon.code,
            amount: parseFloat(this.coupon.amount),
            type: parseInt(this.coupon.type),
            active: this.coupon.active
        }

        this.$apollo
        .mutate({
          mutation: updateCouponMutation,
          variables: payload,
        //   update: (store, { data }) => {
        //     const coupons = store.readQuery({ query: couponsQuery });


        //     // let updatedData = data.updateCoupon
        //     // console.log(updatedData);
            
        //     coupons.coupons.map(coupon => {
 
        //         if (coupon.id === data.updateCoupon.id) {
        //             coupon = data.updateCoupon
        //         }
        //     })

        //     let couponData = coupons.coupons

        //     store.writeQuery({ query: couponsQuery, couponData });
        //   }
        })
        .then(() => {
          this.loading = false;
          this.dialog.add_coupon = false;

          window.getApp.snackbar = {
            show: true,
            color: "primary",
            text: "Coupon Updated."
          };
        })
        .catch(error => {
          this.loading = false;
          this.dialog.add_coupon = false;

          window.getApp.snackbar = {
            show: true,
            color: "red darken-4",
            text: "Failed!."
          };
        });
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
