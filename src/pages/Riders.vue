<template>
  <v-container class="riders-container">
    <v-layout>
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
          <!-- <gmap-custom-marker
            :key="index"
            v-for="(r, index) in riders"
            :marker="getPosition(r)"
            @click.native="toggleInfoWindow(r,index)"
          >
            <v-layout>
              <v-flex xs12 sm12>
                <v-card>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="caption text-capitalize font-weight-black mb-0">{{ r.first_name }}  {{ r.last_name }}</h3>
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </gmap-custom-marker> -->
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
            :label="index"
            @click="toggleInfoWindow(r, index)"
          />
        </GmapMap>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { firebase_db } from "../firebase";
// import GmapCustomMarker from "vue2-gmap-custom-marker";

export default {
  // components: {
  //   "gmap-custom-marker": GmapCustomMarker
  // },
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
    }
  }),
  firebase: {
    riders: firebase_db.ref("riders")
  },
  methods: {
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
