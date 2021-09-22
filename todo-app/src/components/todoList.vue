<template>
    <div>

        <div class="to-do-list">
            <div class="to-do-container" v-for="item in todoArr" :key="item.id">
                <div class="to-do-item">
                    <p class="item-body"><strong> {{item.body}}</strong></p>
                    <div class="item-actions">
                        <button type="submit" class="btn edit" @click="editTodo(item.id)">Edit</button>
                        <button type="submit" class="btn remove" @click="removeTodo(item.id)">Remove</button>
                    </div>

                </div>
                <div class="todo-time">{{item.time}}</div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: {

            todoArr: {
                type: Array,
                required: true
            },
        },
        data () {
            return {

            }
        },
        methods: {
            removeTodo(id){
                this.$emit("removeTodo", id);
            }
        }

    }
</script>

<style scoped>

    /* To do list component */

    .to-do-list{
        margin-top: 20px;
    }

    .to-do-list .to-do-item {
        margin: 5px;
        border: 2px solid green;
        padding: 5px 25px;
        max-width: 500px;
        min-width: 260px;
    }
    .todo-time {
        text-align: right;
        padding: 0 5px 10px 0;
        font-size: 13px;
        font-style: italic;
    }
    .to-do-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px 10px 10px;
    }
    .item-body {
        padding-right: 10px;
    }


    .edit {
        background-color: lightseagreen;
    }

    .remove {
        background-color: red;
    }


</style>