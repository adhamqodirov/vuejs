<template>
  <div class="todo-app " :class="{ 'modal-body': openModal}">
    <h2>{{message}}</h2>

    <div class="add-todo-item">
      <input type="text" placeholder="Enter body" v-model="todoItem.body">
      <button type="submit" class="add-item" @click="addTodo">Add Task</button>
    </div>

    <div class="vue-todo-modal" :class="{ 'modal-close': !openModal}">
      <div class="custom-modal">
        <h3>Edit form</h3>
        <div class="title-">
          title:
          <input type="text" v-model="this.editItem.body" >
        </div>

        <button class="btn edit-form" @click="closeModal">Save changes</button>
      </div>
    </div>


    <div class="to-do-list">
      <div class="to-do-container" v-for="item in todo" :key="item.id">
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
        data () {
            return {
                message: 'To Do App!',
                openModal: false,
                todo: [
                    { id: 1, body: 'create react app', time: '2020.09.18'},
                    { id: 2, body: 'learn vuejs', time: '2020.09.12'},
                    { id: 3, body: 'finish divi builder extension with wordpress', time: '2020.09.11' },
                    { id: 4, body: 'enjoy with family', time: '2020.11.18'},
                ],
                todoItem: {id: '', body:''},
                editItem: {id: '', body: '', time: ''}
            }
        },
        methods: {
            addTodo() {
                const newItem = {
                    id: Date.now(),
                    body: this.todoItem.body
                }
                this.todo.push(newItem);
                this.todoItem.body='';
            },
            removeTodo(itemId){
                this.todo = this.todo.filter((e)=>e.id !== itemId )
            },
            editTodo(itemId) {
                this.openModal = true;
                this.editItem = this.todo.find(x => x.id === itemId);
            },
            closeModal() {
                this.openModal = false;
                console.log('changed value ', this.editItem.body)
            }
        }
    }
</script>

<style>
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  .todo-app{
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
  }

  .todo-app h2 {
    text-align: center;
    margin-bottom: 10px;
  }

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


  /* buttons */
  .btn  {

    font-size: 11px;
    padding: 5px 8px;
    color: white;
    border: none;
    cursor: pointer;
    margin: 5px;
  }
  .edit {
    background-color: lightseagreen;
  }

  .remove {
    background-color: red;
  }



  /* modal form  */
  .modal-close {
    display: none;
  }
  .vue-todo-modal{
    position: absolute;
    background-color: white;

  }

  .modal-body {
    background: rgba(0, 0, 0, 0.5);
    visibility: none;
  }

  .custom-modal{
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 2px solid gray;
    padding-top: 30px;
  }

  .custom-modal h3 {
    font-weight:  500;
  }
  .custom-modal input {
    padding: 5px 10px;
    border: 2px solid green;
    margin-right: 5px;
    margin-top: 10px;
  }

  .custom-modal .edit-form {
    background-color: blue;
    color: white;
    padding: 10px;
    margin-top: 20px;
  }

</style>