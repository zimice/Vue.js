//LocalStorage persistances

var STORAGE_KEY = "todo-vuejs-2.0";
var todoStorage = {
  fetch: function(){
  var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  todos.forEach(function(todo,index){
    todo.id = index;
  });
  todoStorage.uid = todos.length;
  return todos;
},
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY,JSON.stringify(todos));
  }
};
//filters

var app = new Vue({

  data: {
    todos: todoStorage.fetch(),
  }
})
