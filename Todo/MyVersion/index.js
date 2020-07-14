Vue.component('todo-item', {
template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

var app = new Vue({
  el: '#todoExample',
  data:{
    newItem: '',
    index: 0,
    todos:[]
  },
  methods: {
    addNewTodo:function() {
      this.index++;
      this.todos.push({
      index: this.index,
      title: this.newItem
      })
      this.newItem=''
    }
  }

})
