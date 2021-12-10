<template>
  <div>
    <h3>List of Posts</h3>
    <post-item
        v-for="item in posts"
        :post="item"
    />
  </div>
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