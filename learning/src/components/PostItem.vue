<template>
  <div class="post">
    <div>
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns"></div>
    <my-button
        class="btn-delete"
        @click="deletePost(post)"
        style="align-self: flex-end"
    >Delete</my-button>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton'
export default {
  name: 'PostItem',
  props:{
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    MyButton
  },
  methods: {
    deletePost (item) {
      console.log(item.id)

    }
  }
}
</script>

<style scoped>

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display:flex;
  align-items: center;
  justify-content: space-between;
}
.btn-delete{
  background-color: red;
  color: white;
  border: 1px solid red;
  cursor: pointer;
}
</style>