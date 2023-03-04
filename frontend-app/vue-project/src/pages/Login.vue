<template>
  <section class="form d-flex align-items-center justify-content-center">
    <div
      class="w-50 container-sm p-3 text-white"
      style="background-color: #252b37; box-shadow: 20px 20px 20px 20px #0ff"
    >
      <h1 class="text-center mb-5">Login</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="Email"
            name="email"
            v-model="email"
          />
          <label for="floatingInput" class="text-dark">Email </label>
          <div v-show="submitted && !email">This is a required field</div>
        </div>

        <br /><br />

        <div class="form-floating">
          <input
            type="Password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="Password"
            v-model="password"
          />
          <label for="floatingPassword" class="text-dark">Password </label>
          <div v-show="submitted && !password">This is a required field</div>
        </div>

        <br /><br />

        <p>{{ email + " " + password }}</p>
        <div class="d-grid justify-content-center">
          <button
            type="submit"
            class="rounded-pill btn btn-outline-light"
            style="width: 90px"
          >
            Login
          </button>
        </div>
        <div v-if="error">{{ error }}</div>
      </form>
    </div>
  </section>
</template>

<script>
import { usersService } from "../Services/users.service";

export default {
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
    };
  },
  methods: {
    handleSubmit(b) {
      this.submitted = true;
      this.error = "";

      console.log(this.email);
      usersService
        .login(this.email, this.password)
        .then((result) => {
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
  },
};
</script>
<style>
.form {
  margin-top: 120px;
}
</style>
