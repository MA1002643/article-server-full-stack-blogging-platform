<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />

  <section>
    <h1 class="text-center text-white">Dashboard</h1>
    <form @submit.prevent="handleSubmit">
      <div class="d-grid justify-content-md-center">
        <button class="rounded-pill btn btn-outline-light mb-4">Logout</button>
      </div>
      <div v-if="error">{{ error }}</div>
    </form>

    <div class="text-center">
      <usersCreate />

      <createArticle />

      <deleteArticle />

      <updateArticle />

      <deleteComment />

      <allUsers></allUsers>
    </div>
  </section>
</template>
<script>
import { usersService } from "../Services/users.service.js";
import allUsers from "../components/UsersGetAll.vue";
import usersCreate from "../components/usersCreate.vue";
import createArticle from "../components/CreateArt.vue";
import deleteArticle from "../components/deleteArt.vue";
import updateArticle from "../components/UpdateArt.vue";
import deleteComment from "../components/deleteComment.vue";

export default {
  data() {
    return {
      submitted: false,
    };
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      this.$router.push("/");
      this.error = "";
      usersService
        .logOut()
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
  },
  components: {
    allUsers,
    usersCreate,
    createArticle,
    deleteArticle,
    updateArticle,
    deleteComment,
  },
};
</script>
<style>
.template {
  background-color: black;
}
</style>
