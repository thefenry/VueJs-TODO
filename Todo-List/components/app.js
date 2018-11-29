Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.task}}</li>'
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
    }
  }
});
