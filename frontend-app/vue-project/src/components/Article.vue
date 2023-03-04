<template>
  <div
    class="w-90 cont container-sm p-3 mb-2 text-white rounded"
    style="background-color: #252b37"
  >
    <div class="container">
      <h1 class="text-center">{{ article.title }}</h1>

      <div class="flex-parent-element">
        <div class="flex-child-element">
          <p>Created By: {{ article.author }}</p>
        </div>
        <div class="flex-child-element">
          <p>Date Created: {{ article.date_published }}</p>
        </div>
      </div>
      <p>{{ article.article_text }}</p>

      <div>
        <form @submit.prevent="handlesubmit">
          <div class="form-floating">
            <div class="mb-2 form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="text"
                name="text"
                v-model="comment"
              />
              <label for="floatingInput" class="text-dark">Add comment </label>
            </div>
            <div v-show="submitted && !title">This is a required field</div>
          </div>
        </form>
      </div>
      <h2>These are the comments({{ comments.length }})</h2>
      <ul v-if="this.comments.length">
        <li v-for="comment in comments" :key="comment.id">
          <p>
            {{
              " " +
              comment.comment_id +
              " " +
              comment.comment_text +
              " " +
              comment.date_published
            }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { articleService } from "../Services/article.service.js";
import { commentsService } from "../Services/comments.service.js";

export default {
  data() {
    return {
      article: [],
      comments: [],
      num_comments: null,
      comment: "",
      error: "",
    };
  },
  created() {
    this.article.loading = true;
    this.comments.loading = true;

    articleService
      .getOne(this.$route.params.id)
      .then((article) => {
        this.article = article;
        commentsService
          .getAll(this.$route.params.id)
          .then((comments) => {
            this.comments = comments;
            this.num_comments = comments.length;

            console.log(this.article);
          })
          .catch((error) => (this.error = error));
      })
      .catch((error) => (this.error = error));
  },

  methods: {
    handlesubmit(e) {
      this.submitted = true;
      this.error = "";
      commentsService
        .showcomments(this.$route.params.id, this.comment)
        .then(() => {
          commentsService
            .getAll(this.$route.params.id)
            .then((comments) => {
              this.comments = comments;
              this.num_comments = comments.length;

              console.log(this.articles);
            })
            .catch((error) => (this.error = error));
        });
    },
  },
};
</script>
<style>
.cont {
  margin-top: 120px;
}
.flex-parent-element {
  display: flex;
  width: 100%;
}

.flex-child-element {
  flex: 1;
  margin: 10px;
}

.flex-child-element:first-child {
  margin-right: 20px;
}
</style>
