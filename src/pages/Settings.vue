<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-card width="100%">
            <v-card-title class="title secondary white--text" primary-title>
                Settings
            </v-card-title>
            <v-card-text>
                <v-layout row wrap>
                    <v-flex x12 md12 class="display-1 font-weight-bold">Errand Rates</v-flex>
                    <v-flex class="md1 xs6">
                        <v-text-field prefix="₱" label="Base Rate" type="number" v-model="base_rate_e"></v-text-field>
                    </v-flex>
                    <v-flex class="md1 xs6">
                        <v-text-field label="Base Km" suffix="km" type="number" v-model="base_km_e"></v-text-field>
                    </v-flex>
                    <v-flex class="md1 xs6">
                        <v-text-field prefix="₱" label="Per Km" type="number" v-model="per_km_e"></v-text-field>
                    </v-flex>
                    <v-flex class="md1 xs6">
                        <v-text-field prefix="₱" label="Per Location" type="number" v-model="per_location_e"></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex x12 md12 class="display-1 font-weight-bold">Food Rates</v-flex>
                    <v-flex class="md1 xs6">
                        <v-text-field prefix="₱" label="Base Rate" type="number" v-model="base_rate_f"></v-text-field>
                    </v-flex>
                    <v-flex class="md1 xs6">
                        <v-text-field label="Base Km" suffix="km" type="number" v-model="base_km_f"></v-text-field>
                    </v-flex>
                    <v-flex class="md1 xs6">
                        <v-text-field prefix="₱" label="Per Km" type="number" v-model="per_km_f"></v-text-field>
                    </v-flex>
                    <v-flex class="md1 xs6">
                        <v-text-field prefix="₱" label="Per Location" type="number" v-model="per_location_f"></v-text-field>
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="save_settings()">Save</v-btn>
            </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import {
  settingsQuery,
  saveSettingsMutation
} from "@/graphql";

export default {
    apollo: {
    settings: {
        query: settingsQuery,
        manual: true,
        result ({ data, loading, networkStatus }) {
            if (!loading) {
                data.settings.filter(setting => { 
                    if (setting.key === "base_rate_e" ) {
                        this.base_rate_e = parseFloat(setting.value)
                    }

                    if (setting.key === "base_km_e" ) {
                        this.base_km_e = parseInt(setting.value)
                    }

                    if (setting.key === "per_km_e" ) {
                        this.per_km_e = parseFloat(setting.value)
                    }

                    if (setting.key === "per_location_e" ) {
                        this.per_location_e = parseFloat(setting.value)
                    }

                    if (setting.key === "base_rate_f" ) {
                        this.base_rate_f = parseFloat(setting.value)
                    }

                    if (setting.key === "base_km_f" ) {
                        this.base_km_f = parseInt(setting.value)
                    }

                    if (setting.key === "per_km_f" ) {
                        this.per_km_f = parseFloat(setting.value)
                    }

                    if (setting.key === "per_location_f" ) {
                        this.per_location_f = parseFloat(setting.value)
                    }
                })
                
            }
        }
    }
  },
  data: () => ({
    loading: false,
    base_rate_e: 0,
    base_km_e: 0,
    per_km_e: 0,
    per_location_e: 0,
    base_rate_f: 0,
    base_km_f: 0,
    per_km_f: 0,
    per_location_f: 0
  }),

  methods: {
    async save_settings() {
        let settings = [
            {
                key: "base_rate_e",
                value: this.base_rate_e.toString()
            },
            {
                key: "base_km_e",
                value: this.base_km_e.toString()
            },
            {
                key: "per_km_e",
                value: this.per_km_e.toString()
            },
            {
                key: "per_location_e",
                value: this.per_location_e.toString()
            },
            {
                key: "base_rate_f",
                value: this.base_rate_f.toString()
            },
            {
                key: "base_km_f",
                value: this.base_km_f.toString()
            },
            {
                key: "per_km_f",
                value: this.per_km_f.toString()
            },
            {
                key: "per_location_f",
                value: this.per_location_f.toString()
            }
        ];

        await this.$apollo
          .mutate({
            mutation: saveSettingsMutation,
            variables: {
                settings: settings
            }
          })
          .then(() => {
            this.loading = false;

            window.getApp.snackbar = {
              show: true,
              color: "primary",
              text: "Settings Saved"
            };
          })
          .catch(({ graphQLErrors }) => {
            this.loading = false;
            
            if (graphQLErrors) {
              this.error = graphQLErrors[0].message;

              window.getApp.snackbar = {
                show: true,
                color: "red darken-1",
                text: "Settings not saved!"
              };
            }
          });
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
