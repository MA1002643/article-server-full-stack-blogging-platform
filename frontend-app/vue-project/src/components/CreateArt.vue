<template>
  <p>
    <button
      class="rounded-pill btn btn-outline-light mb-4"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse2"
      aria-expanded="false"
      aria-controls="collapseCreatearticle"
    >
      Crate article
    </button>
  </p>
  <div class="collapse" id="collapse2">
    <div
      class="w-50 container-sm p-3 mb-2 text-white rounded"
      style="background-color: #252b37"
    >
      <h1 class="text-center mb-5">Create New Article</h1>
      <div>
        <form @submit.prevent="handleSubmit">
          <div class="form-floating">
            <input
              type="title"
              class="form-control"
              id="floatingInput"
              placeholder="title"
              name="title"
              v-model="title"
            />
            <label for="floatingInput" class="text-dark">title </label>
            <div v-show="submitted && !title">This is a required field</div>
          </div>

          <br /><br />
          <div class="form-floating">
            <input
              type="author"
              class="form-control"
              id="floatingInput"
              placeholder="author"
              name="author"
              v-model="author"
            />
            <label for="floatingInput" class="text-dark">author </label>
            <div v-show="submitted && !author">This is a required field</div>
          </div>

          <br /><br />

          <div class="form-floating mb-4">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              type="article_text"
              name="article_text"
              v-model="article_text"
            ></textarea>
            <label ffor="floatingInput" class="text-dark">article text </label>
            <div v-show="submitted && !article_text">
              This is a required field
            </div>
          </div>
          <div class="d-grid justify-content-center">
            <button class="rounded-pill btn btn-outline-light">
              Create Article
            </button>
          </div>
          <div v-if="error">{{ error }}</div>
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
      author: "",
      article_text: "",
      submitted: false,
    };
  },

  methods: {
    handleSubmit(f) {
      this.submitted = true;
      this.error = "";

      console.log(this.title, this.author, this.article_text);
      articleService
        .createArticle(this.title, this.author, this.article_text)
        .then((result) => {
          console.log("Article Created");
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
  },
};
</script>
