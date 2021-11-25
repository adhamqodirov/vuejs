<template>
  <div class="todo-app " :class="{ 'modal-body': openModal}">
    <h2>{{ message }}</h2>

    <add-item @newTodo="addTodo($event)"/>

    <todo-list :todoArr="todo" @removeTodo="removeTodo($event)"></todo-list>


    <div class="vue-todo-modal" :class="{ 'modal-close': !openModal}">
      <div class="custom-modal">
        <h3>Edit form</h3>
        <div class="title-">
          title:
          <input type="text" v-model="this.editItem.body">
        </div>

        <button class="btn edit-form" @click="closeModal">Save changes</button>
      </div>
    </div>

    <RadioButton name="city" value="Los Angeles" v-model="city"/>


  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script>
// import RadioButton from 'primevue/radiobutton';

import AddItem from '@/components/addItem.vue'
import TodoList from '@/components/todoList.vue'

export default {
  components: {
    AddItem,
    TodoList,

  },
  data () {
    return {
      message: 'To Do App!',
      openModal: false,
      todo: [
        { id: 1, body: 'create react app', time: '13.8.2021' },
        { id: 2, body: 'learn vuejs', time: '15.8.2021' },
        { id: 3, body: 'finish divi builder extension with wordpress', time: '15.8.2021' },
        { id: 4, body: 'enjoy with family', time: '16.8.2021' },
      ],
      todoItem: { id: '', body: '' },
      editItem: { id: '', body: '', time: '' }
    }
  },
  methods: {
    addTodo (value) {
      var date = new Date()
      var day = date.getDate()
      var year = date.getFullYear()
      var month = date.getMonth()
      const newItem = {
        id: Date.now(),
        body: value,
        time: day + '.' + month + '.' + year
      }
      this.todo.push(newItem)
      this.todoItem.body = ''
    },
    removeTodo (itemId) {
      this.todo = this.todo.filter((e) => e.id !== itemId)
    },
    editTodo (itemId) {
      this.openModal = true
      this.editItem = this.todo.find(x => x.id === itemId)
    },
    closeModal () {
      this.openModal = false
      console.log('changed value ', this.editItem.body)
    }
  }
}
</script>

<style>
.todo-app {
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
}

.todo-app h2 {
  text-align: center;
  margin-bottom: 10px;
}

/* buttons */
.btn {
  font-size: 11px;
  padding: 5px 8px;
  color: white;
  border: none;
  cursor: pointer;
  margin: 5px;
}

/* modal form  */
.modal-close {
  display: none;
}

.vue-todo-modal {
  position: absolute;
  background-color: white;
}

.modal-body {
  background: rgba(0, 0, 0, 0.5);
  visibility: none;
}

.custom-modal {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid gray;
  padding-top: 30px;
}

.custom-modal h3 {
  font-weight: 500;
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
