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
                    <v-flex class="md1 xs6">
                        <v-text-field prefix="₱" label="Base Rate" type="number" v-model="base_rate"></v-text-field>
                    </v-flex>
                    <v-flex class="md1 xs6">
                        <v-text-field label="Base Km" suffix="km" type="number" v-model="base_km"></v-text-field>
                    </v-flex>
                    <v-flex class="md1 xs6">
                        <v-text-field prefix="₱" label="Per Km" type="number" v-model="per_km"></v-text-field>
                    </v-flex>
                    <v-flex class="md1 xs6">
                        <v-text-field prefix="₱" label="Per Location" type="number" v-model="per_location"></v-text-field>
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
                    if (setting.key === "base_rate" ) {
                        this.base_rate = parseFloat(setting.value)
                    }

                    if (setting.key === "base_km" ) {
                        this.base_km = parseInt(setting.value)
                    }

                    if (setting.key === "per_km" ) {
                        this.per_km = parseFloat(setting.value)
                    }

                    if (setting.key === "per_location" ) {
                        this.per_location = parseFloat(setting.value)
                    }
                })
                
            }
        }
    }
  },
  data: () => ({
    loading: false,
    base_rate: 0,
    base_km: 0,
    per_km: 0,
    per_location: 0
  }),

  methods: {
    async save_settings() {
        let settings = [
            {
                key: "base_rate",
                value: this.base_rate.toString()
            },
            {
                key: "base_km",
                value: this.base_km.toString()
            },
            {
                key: "per_km",
                value: this.per_km.toString()
            },
            {
                key: "per_location",
                value: this.per_location.toString()
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
