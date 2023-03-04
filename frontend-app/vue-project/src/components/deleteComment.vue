<template>
  <p>
    <button
      class="rounded-pill btn btn-outline-light mb-4"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse5"
      aria-expanded="false"
      aria-controls="collapseCreateuser"
    >
      Delete Comment
    </button>
  </p>
  <div class="collapse" id="collapse5">
    <div
      class="w-50 container-sm p-3 mb-2 text-white rounded"
      style="background-color: #252b37"
    >
      <h1 class="text-center mb-5">Delete comment</h1>
      <div>
        <form @submit.prevent="handleSubmit">
          <div class="form-floating mb-3">
            <input
              type="comment_id"
              class="form-control"
              id="floatingInput"
              placeholder="comment_id"
              name="comment_id"
              v-model="comment_id"
            />
            <label for="floatingInput" class="text-dark">comment id</label>
            <div v-show="submitted && !comment_id">
              This is a required field
            </div>
          </div>
          <div class="d-grid justify-content-center">
            <button class="rounded-pill btn btn-outline-light">
              Delete Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { commentsService } from "../Services/comments.service";

export default {
  data() {
    return {
      title: "",
      comment_id: "",
      submitted: false,
    };
  },

  methods: {
    handleSubmit(f) {
      this.submitted = true;
      this.error = "";

      commentsService
        .deleteComment(this.comment_id)
        .then((result) => {
          console.log("Comment Deleted");
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
  },
};
</script>
