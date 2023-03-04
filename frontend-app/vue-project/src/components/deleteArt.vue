<template>
  <p>
    <button
      class="rounded-pill btn btn-outline-light mb-4"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse3"
      aria-expanded="false"
      aria-controls="collapseCreateuser"
    >
      Delete Article
    </button>
  </p>
  <div class="collapse" id="collapse3">
    <div
      class="w-50 container-sm p-3 mb-2 text-white rounded"
      style="background-color: #252b37"
    >
      <h1 class="text-center mb-5">Delete Article</h1>
      <div>
        <form @submit.prevent="handleSubmit">
          <div class="form-floating mb-3">
            <input
              type="article_id"
              class="form-control"
              id="floatingInput"
              placeholder="article_id"
              name="article_id"
              v-model="title"
            />
            <label for="floatingInput" class="text-dark">article id</label>
            <div v-show="submitted && !article_id">
              This is a required field
            </div>
          </div>
          <div class="d-grid justify-content-center">
            <button class="rounded-pill btn btn-outline-light">
              Delete Article
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { articleService } from "../Services/article.service";

export default {
  data() {
    return {
      title: "",
      article_id: "",
      submitted: false,
    };
  },

  methods: {
    handleSubmit(f) {
      this.submitted = true;
      this.error = "";

      articleService
        .deleteArticle(this.title)
        .then((result) => {
          console.log("Article Deleted");
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
  },
};
</script>
