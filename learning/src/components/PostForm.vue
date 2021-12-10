<template>
  <form>
    <h4>Create Post</h4>
    <input class="input" type="text" v-model="post.title" placeholder="Name">
    <input class="input" type="text" v-bind:value="post.body" @input="post.body = $event.target.value" placeholder="Description">
    <my-button
        class="btn-add"
        @click="createPost"
    >Add Post</my-button>
  </form>
</template>

<script>
import MyButton from '@/components/UI/MyButton'
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
  components: {
    MyButton
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

<style>
.btn-add{
  margin-top:15px;
  align-self: flex-end;
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

</style>