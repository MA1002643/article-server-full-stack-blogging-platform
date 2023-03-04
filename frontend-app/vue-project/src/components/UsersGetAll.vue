<template>
  <p>
    <button
      class="rounded-pill btn btn-outline-light mb-4"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse6"
      aria-expanded="false"
      aria-controls="collapseCreateuser"
    >
      List All Users
    </button>
  </p>
  <div class="collapse" id="collapse6">
    <div
      class="w-90 container-sm p-3 mb-2 text-white rounded"
      style="background-color: #252b37"
    >
      <div class="container">
        <h2 class="text-center">User List</h2>
        <table class="table text-white">
          <thead>
            <div class="row">
              <div class="col title1">ID</div>
              <div class="col title1">First name</div>
              <div class="col title1">Last Name</div>
              <div class="col title1">Email</div>
            </div>
          </thead>

          <div v-for="user in users" :key="users.user_id">
            <div class="row">
              <th class="col">{{ user.user_id }}</th>
              <td class="col">{{ user.first_name }}</td>
              <td class="col">{{ user.last_name }}</td>
              <td class="col">{{ user.email }}</td>
            </div>
          </div>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { usersService } from "../Services/users.service.js";

export default {
  data() {
    return {
      users: [],
      loading: true,
      error: "",
    };
  },
  mounted() {
    usersService
      .getUsers()
      .then((user) => {
        this.users = user;
        this.loading = false;
      })
      .catch((error) => (this.error = error));
  },
};
</script>
<style>
.title1 {
  font-weight: bold;
}
</style>
