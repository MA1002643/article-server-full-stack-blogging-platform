<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
    <h1>{{ welcome_message }}</h1>
    <p>Counter : {{ counter }}</p>

    <p v-if="counter >= 5">Big Number</p>
    <p v-else>Little Number</p>

    <Login />
    <ToDo />
    <commentList />
    <comment
      comment_text="Great Article"
      author="Muhammad Abdullah"
      date_published="14/11/2022"
    />
    <comment
      comment_text="I dont understand "
      author="Bill"
      date_published="13/11/2022"
    />
    <comment
      comment_text="It's simple, you're just passing in variables"
      author="MO"
      date_published="15/11/2022"
    />
  </div>
</template>
<script>
import Login from "./Login.vue";
import ToDo from "./todo.vue";
import comment from "./comment.vue";
import commentList from "./commentList.vue";

export default {
  data() {
    return {
      welcome_message: "Hello World!",
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
  components: {
    Login,
    ToDo,
    comment,
    commentList,
  },
};
</script>
<style></style>
