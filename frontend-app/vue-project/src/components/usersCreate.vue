<template>
  <p>
    <button
      class="rounded-pill btn btn-outline-light mb-4"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse1"
      aria-expanded="false"
      aria-controls="collapseCreateuser"
    >
      Create User
    </button>
  </p>
  <div class="collapse" id="collapse1">
    <div
      class="w-50 container-sm p-3 mb-2 text-white rounded"
      style="background-color: #252b37"
    >
      <h1 class="text-center mb-5">Create New User</h1>
      <div>
        <form @submit.prevent="handleSubmit">
          <div class="row">
            <div class="col">
              <div class="form-floating">
                <input
                  type="first_name"
                  class="form-control"
                  id="floatingInput"
                  placeholder="first_name"
                  name="first_name"
                  v-model="first_name"
                />
                <label for="floatingInput" class="text-dark">First name </label>
                <div v-show="submitted && !first_name">
                  This is a required field
                </div>
              </div>
            </div>
            <div class="col">
              <div class="form-floating">
                <input
                  type="last_name"
                  class="form-control"
                  id="floatingInput"
                  placeholder="last_name"
                  name="last_name"
                  v-model="last_name"
                />
                <label for="floatingInput" class="text-dark">Last name </label>
                <div v-show="submitted && !last_name">
                  This is a required field
                </div>
              </div>
            </div>
          </div>

          <br /><br />

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="email"
              name="email"
              v-model="email"
            />
            <label for="floatingInput" class="text-dark">Email </label>
            <div v-show="submitted && !email">This is a required field</div>
          </div>

          <br /><br />

          <div class="form-floating mb-4">
            <input
              type="password"
              class="form-control"
              id="floatingInput"
              placeholder="password"
              name="password"
              v-model="password"
            />
            <label for="floatingInput" class="text-dark">Password </label>
            <div v-show="submitted && !password">This is a required field</div>
          </div>

          <div class="d-grid justify-content-center">
            <button class="rounded-pill btn btn-outline-light">
              Create user
            </button>
          </div>

          <div v-if="error">{{ error }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { usersService } from "../Services/users.service.js";

export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      submitted: false,
    };
  },

  methods: {
    handleSubmit(d) {
      this.submitted = true;
      this.error = "";

      console.log(this.first_name, this.last_name, this.email, this.password);
      usersService
        .usersCreate(this.first_name, this.last_name, this.email, this.password)
        .then((result) => {
          console.log("User Created");
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
  },
};
</script>
