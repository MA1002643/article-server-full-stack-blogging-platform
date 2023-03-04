<template>
  <div
    class="w-90 cont container-sm p-3 mb-2 text-white rounded"
    style="background-color: #252b37"
  >
    <div class="container">
      <h2 class="text-center">Welcome to my blog!</h2>
      <table class="table text-white">
        <thead>
          <div class="row"></div>
        </thead>
        <em v-if="loading">Loading articles...</em>
        <div v-if="articles.length">
          <div class="row">
            <div v-for="article in articles" :key="article.article_id">
              <th class="col">
                <router-link :to="'/article/' + article.article_id">
                  {{ article.title + " by " + article.author }}
                </router-link>
              </th>
            </div>
          </div>
        </div>
        <div v-if="error">
          {{ error }}
        </div>
      </table>
    </div>
  </div>
</template>
<script>
import { articleService } from "../Services/article.service.js";
export default {
  data() {
    return {
      articles: {},
      comments: [],
      num_comments: null,
      comment: "",
      error: "",
      loading: true,
    };
  },
  mounted() {
    articleService
      .getAll()
      .then((article) => {
        this.articles = article;
        this.loading = false;
      })
      .catch((error) => (this.error = error));
  },
};
</script>
<style>
.cont {
  margin-top: 70px;
}
body {
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
}
</style>
