<template>
  <div class="app">
  <post-form  @createPostForm="createPost($event)"></post-form>
  <post-list :posts="posts"></post-list>

  </div>
</template>

<script>
import About from './components/About'
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
export default {
  components: {
    About,
    PostForm,
    PostList
  },
  data () {
    return {
      likes: 2,
      dislikes: 0,
      title: '',
      body: '',
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
    inputTitle(event){
      this.title =  event.target.value;
    },
    createPost(newPost){
      console.log(newPost);
      this.posts.push(newPost);
    }
  },
  mounted () {
    console.log(this.body)
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

</style>