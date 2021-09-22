<template>
    <div>

        <div class="add-todo-item">
            <input type="text" placeholder="Enter body" v-model="newTodo">
            <button type="submit" class="add-item" @click="addTodo">Add Task</button>
        </div>

    </div>
</template>

<script>
    export default {
        data (){
            return {
                newTodo:''
            }
        },
        methods : {
            addTodo(){
                console.log('emit new todo', this.newTodo);
                this.$emit("newTodo", this.newTodo);
                this.newTodo='';
            }
        }

    }
</script>

<style scoped>


    /* Adding todo item component */

    .add-todo-item {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }
    .add-item{
        background-color:green;
        color: white;
        cursor: pointer;
    }

    .add-todo-item input, .add-todo-item .add-item {
        padding: 5px 10px;
        border: 2px solid green;
        margin-right: 5px;

    }


</style>