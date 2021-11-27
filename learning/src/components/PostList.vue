<template>
  <post-item v-for="item in posts" :post="item"></post-item>
</template>

<script>
import PostItem from '@/components/PostItem'
export default {
  name: 'PostList',
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  components: {
    PostItem
  }
}
</script>

<style scoped>

</style>