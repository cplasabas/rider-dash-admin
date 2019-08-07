<template>
  <v-app id="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <div class="layout column align-center">
              <img
                src="@/assets/rider-dash-logo-text.png"
                alt="Rider Dash"
                width="240"
                height="240"
              />
            </div>
            <v-alert v-show="error" type="error" :value="true">
              {{ error }}
            </v-alert>
            <v-text-field
              prepend-icon="person"
              name="username"
              label="Username"
              type="text"
              v-model="username"
            >
            </v-text-field>
            <v-text-field
              prepend-icon="lock"
              @keydown.enter="login"
              name="password"
              label="Password"
              id="password"
              type="password"
              v-model="password"
            >
            </v-text-field>
            <v-btn
              block
              color="primary"
              type="submit"
              @keydown.enter="login"
              @click="login"
              :loading="loading"
            >
              Login
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { loginMutation } from "@/graphql";

export default {
  data: () => ({
    loading: false,
    error: "",
    username: "",
    password: ""
  }),
  methods: {
    async login() {
      this.loading = true;
      await this.$apollo
        .mutate({
          mutation: loginMutation,
          variables: {
            username: this.username,
            password: this.password,
            type: 1
          }
        })
        .then(response => {
          this.$store
            .dispatch("setToken", response.data.login.token)
            .then(() => {
              this.loading = false;
              window.getApp.snackbar = {
                show: true,
                color: "light-green darken-4",
                text: "Login successfully."
              };

              this.$router.replace({ path: "/dashboard" });
            });
        })
        .catch(({ graphQLErrors }) => {
          this.loading = false;
          if (graphQLErrors) {
            this.error = graphQLErrors[0].message;

            window.getApp.snackbar = {
              show: true,
              color: "red darken-1",
              text: "Login Error"
            };
          }
        });
    }
  }
};
</script>

<style scoped lang="css">
#login {background-color: white;}
</style>
