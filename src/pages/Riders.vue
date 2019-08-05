<template>
  <v-container fluid class="riders-container">
    <v-layout my-2>
      <p class="display-2 font-weight-bold">Riders</p>
    </v-layout>
    <v-layout my-5>
      <v-flex md12 sm12>
        <GmapMap
          :center="{ lat: 7.053704, lng: 125.597936 }"
          :zoom="15"
          style="height: 60vh;"
          :options="{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            disableDefaultUi: true,
            mapStyle: mapStyle
          }"
        >
          <gmap-info-window
            :options="infoOptions"
            :position="infoWindowPos"
            :opened="infoWinOpen"
            @closeclick="infoWinOpen = false"
          >
            <div class="text-capitalize" v-html="infoContent"></div>
          </gmap-info-window>
          <GmapMarker
            :key="index"
            v-for="(r, index) in riders"
            :position="getPosition(r)"
            @click="toggleInfoWindow(r, index)"
          />
        </GmapMap>
      </v-flex>
    </v-layout>
    <v-layout my-3 justify-end>
      <v-flex md2 xs2>
        <v-btn color="primary" @click="view_add_rider">
          Create Rider
          <v-icon>add</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md12 xs12>
        <template>
          <v-card>
            <v-layout>
              <v-container>
                <p class="title secondary--text font-weight-bold">Rider List</p>
              </v-container>
            </v-layout>
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="rider_list.headers"
              :items="rider_list.items"
              :search="search"
            >
              <template v-slot:items="props">
                <td>{{ props.item.first_name }} {{ props.item.last_name }}</td>
                <td>{{ props.item.phone }}</td>
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
                  <v-tooltip bottom>
                    <v-btn
                      slot="activator"
                      color="red darken-1"
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
                  </v-tooltip>
                </td>
              </template>
              <template v-slot:no-results>
                <v-alert :value="true" color="error" icon="warning">
                  Your search for "{{ search }}" found no results.
                </v-alert>
              </template>
            </v-data-table>
          </v-card>
        </template>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog.add_rider" width="800">
      <v-card>
        <v-card-title class="headline secondary white--text" primary-title>
          Add Rider
        </v-card-title>
        <v-card-text>
          <v-form v-model="rider_form_valid">
            <v-container>
              <v-layout row wrap>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    prepend-icon="person"
                    v-model="rider.first_name"
                    :rules="[rules.required]"
                    label="First name"
                    required
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md6>
                  <v-text-field
                    prepend-icon="person"
                    v-model="rider.middle_name"
                    label="Middle name"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6md6>
                  <v-text-field
                    prepend-icon="person"
                    v-model="rider.last_name"
                    :rules="[rules.required]"
                    label="Last Name"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    prepend-icon="phone"
                    prefix="+63"
                    v-model="rider.phone"
                    mask="####-###-####"
                    :rules="[rules.required]"
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
          <v-btn color="primary" flat @click="dialog.add_rider = false">
            Close
          </v-btn>
          <v-btn
            color="primary"
            flat
            :disabled="!rider_form_valid"
            @click="add_rider()"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { firebase_db } from "../firebase";
import { ridersQuery, createRider } from "@/graphql";
// import GmapCustomMarker from "vue2-gmap-custom-marker";

export default {
  // components: {
  //   "gmap-custom-marker": GmapCustomMarker
  // },
  apollo: {
    riders: {
      query: ridersQuery,
      manual: true,
      result({ data, loading }) {
        if (!loading) {
          this.rider_list.items = data.riders;
        }
      }
    }
  },
  data: () => ({
    mapStyle: {
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }]
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }]
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }]
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }]
        }
      ]
    },
    search: "",
    rider_list: {
      headers: [
        { text: "Name", value: "first_name" },
        { text: "Phone", value: "phone" },
        {
          text: "Actions",
          value: "actions",
          align: "center"
        }
      ],
      items: []
    },
    riders: [],
    infoContent: "",
    infoWindowPos: {
      lat: 0,
      lng: 0
    },
    infoWinOpen: false,
    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35
      }
    },
    dialog: {
      add_rider: false
    },
    rider_form_valid: false,
    rider: {
      first_name: "",
      middle_name: "",
      last_name: "",
      phone: null
    },
    rules: {
      required: value => !!value || "Required.",
      email: v => /.+@.+/.test(v) || "E-mail must be valid"
    }
  }),
  firebase: {
    riders: firebase_db.ref("riders")
  },
  methods: {
    // view_edit_rider(id) {

    // },
    // view_delete_rider(id) {

    // },
    view_add_rider() {
      this.dialog.add_rider = true;
    },
    add_rider() {
      this.loading = true;
      const newRider = this.rider;

      this.$apollo
        .mutate({
          mutation: createRider,
          variables: newRider,
          update: (store, { data }) => {
            const riders = store.readQuery({ query: ridersQuery });

            riders.riders.push(data.createRider);

            store.writeQuery({ query: ridersQuery, data });
          },
          optimisticResponse: {
            __typename: "Mutation",
            rider: {
              __typename: "Rider",
              id: -1,
              first_name: newRider.first_name,
              middle_name: newRider.middle_name,
              last_name: newRider.last_name
            }
          }
        })
        .then(() => {
          this.loading = false;
          this.dialog.add_rider = false;

          window.getApp.snackbar = {
            show: true,
            color: "primary",
            text: "Rider Created."
          };
        })
        .catch(error => {
          this.loading = false;
          this.dialog.add_rider = false;

          window.getApp.snackbar = {
            show: true,
            color: "red darken-4",
            text: "Failed!."
          };

          console.error(error);
          this.rider = newRider;
        });
    },
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = this.getPosition(marker);
      this.infoContent = marker.first_name + " " + marker.last_name;
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    getPosition(marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      };
    }
  }
};
</script>
