<template>
   <v-container grid-list-xl text-xs-center>
    <v-layout row wrap align-center>
      <v-flex xs12 sm6 offset-sm3>
        <v-card elevation-24 style="padding: 30px; border: 1px; border-radius: 50px;">
          <v-card-text class="text-center">
            <h1 class="display-2 font-weight-bold">Login</h1>
          </v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="username" label="Username" required :rules="usernameRules"></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" required
              :rules="passwordRules"></v-text-field>
          </v-form>
          <v-btn @click="submit">Login</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default ({
    name: "LoginForm",
    data() {
        return {
            valid: false,
            username: "",
            usernameRules: [
                value => {
                    if (value)
                        return true;
                    return "Username is required.";
                }
            ],
            password: "",
            passwordRules: [
                value => {
                    if (value)
                        return true;
                    return "Password is required.";
                }
            ],
        };
    },
    methods: {
        submit() {
          if (this.$refs.form.validate()) {
              this.$store.dispatch("login", {
                  username: this.username,
                  password: this.password
              });
          }
        }
    },
})
</script>

<style scoped>
.align-center {
  height: 70vh;
}
</style>