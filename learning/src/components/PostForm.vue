<template>
  <form>
    <h4>Create Post</h4>
    <input class="input" type="text" v-model="post.title" placeholder="Name">
    <input class="input" type="text" v-bind:value="post.body" @input="post.body = $event.target.value" placeholder="Description">
    <button class="btn" @click="createPost">Add Post</button>
  </form>
</template>

<script>
export default {
  name: 'PostForm',
  data(){
    return{
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost(event) {
      event.preventDefault();
      this.post.id =  Date.now();
      this.$emit('createPostForm',this.post);
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>

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