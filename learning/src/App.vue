<template>
  <div class="app">
    <form>
      <h4>Create Post</h4>
      <input class="input" type="text" placeholder="Name">
      <input class="input" type="text" placeholder="Description">
      <button class="btn">Add Post</button>
    </form>
    <About></About>
    <div class="post" v-for="post in posts">
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
import About from './components/About'
export default {
  components: {
    About
  },
  data () {
    return {
      likes: 2,
      dislikes: 0,
      posts: [
        { id: 1, title: 'Javascript', body: 'Javascript is universal programming language' },
        { id: 2, title: 'Python', body: 'Python is interpretation programming language' },
        { id: 3, title: 'Swift', body: 'Swift is IOS programming language' },
      ]
    }
  },
  methods: {
    addLike () {
      this.likes++
    },
    addDisLike () {
      this.dislikes++
    },
  }
}
</script>

<style>
.app {
  padding: 50px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

form {
  display: flex;
  flex-direction: column;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>