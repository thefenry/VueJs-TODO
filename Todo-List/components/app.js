Vue.component('todo-item', {
  props: ['todo'],
  template: '<li><div class="todo-item">{{todo.task}} </div><button v-on:click="emit(todo.id)">X</button></li>',
  methods: {
		emit: function(idToRemove) {
			this.$emit('event_child', idToRemove)
		}
	}
});

var todoApp = new Vue({
  el: '#todoApp',
  data: {
    todoList: [
      { id: 1, task: 'Learn Vue.js' },
      { id: 2, task: 'Discuss it' },
      { id: 3, task: 'compare Vue.js' }
    ],
    newItem: ''
  },
  methods: {
    addToList: function () {
      
      var lastItemId = this.todoList[this.todoList.length -1].id;
      newId = lastItemId + 1;
      
      this.todoList.push({id: newId, task: this.newItem});
      this.newItem = '';
    },
    eventChild: function (idToRemove) {
      for( var i = 0; i < this.todoList.length-1; i++){ 
        if ( this.todoList[i].id === idToRemove) {
          this.todoList.splice(i, 1); 
        }
     }
    }
  }
});
