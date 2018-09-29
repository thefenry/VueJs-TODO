Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.task}}</li>'
});

var todoApp = new Vue({
  el: '#todoApp',
  data: {
    todoList: [
      { id: 1, task: 'Learn Vue.js' },
      { id: 1, task: 'Discuss it' },
      { id: 1, task: 'compare Vue.js' }
    ]
  }
});
