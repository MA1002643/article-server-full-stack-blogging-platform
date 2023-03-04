<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="Comment_text">Comment: </label>

      <input type="text" name="Comment_box" v-model="Comment_box" />
      <div v-show="submitted && !Comment_box">Item is required</div>
      <button>Add an item</button>
      <div v-if="error">{{ error }}</div>

      <ul>
        <li v-for="(item, index) in todo_list" :key="index">
          {{ item }}
        </li>
      </ul>
    </form>
  </div>
</template>
<style></style>
<script>
export default {
  data() {
    return {
      submitted: false,
      Comment_box: "",
      todo_list: ["Muhammad", "Abdullah"],
    };
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      this.error = "";
      const { Comment_box } = this;
      if (!Comment_box) {
        return;
      } else {
        this.todo_list.push(this.Comment_box);
      }
    },
  },
};
</script>
