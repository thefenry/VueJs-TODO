Vue.component("todo-item", {
  props: ["todo"],
  template: `
  <li>
    <div class="todo-item" v-bind:class="{ complete: todo.isCompleted }">{{todo.task}} </div>
    <div class="button-container">
      <button v-on:click="emitComplete(todo.id)" class="complete-button">&#10004;</button>
      <button v-on:click="emit(todo.id)" class="delete-button">X</button>
    </div>
  </li>`,
  methods: {
    emit: function(idToRemove) {
      this.$emit("event_child", idToRemove);
    },
    emitComplete: function(idToRemove) {
      this.$emit("complete_child", idToRemove);
    }
  }
});

var todoApp = new Vue({
  el: "#todoApp",
  data: {
    todoList: [
      { id: 1, task: "Learn Vue.js", isCompleted: false },
      { id: 2, task: "Discuss it", isCompleted: false },
      { id: 3, task: "compare Vue.js", isCompleted: false }
    ],
    newItem: ""
  },
  methods: {
    addToList: function() {
      var lastItemId = this.todoList[this.todoList.length - 1].id;
      newId = lastItemId + 1;

      this.todoList.push({ id: newId, task: this.newItem });
      this.newItem = "";
    },
    eventChild: function(idToRemove) {
      for (var i = 0; i < this.todoList.length - 1; i++) {
        if (this.todoList[i].id === idToRemove) {
          this.todoList.splice(i, 1);
        }
      }
    },
    toggleComplete: function(idToRemove) {
      for (var i = 0; i < this.todoList.length - 1; i++) {
        if (this.todoList[i].id === idToRemove) {
          this.todoList[i].isCompleted = !this.todoList[i].isCompleted;
        }
      }
    }
  }
});
