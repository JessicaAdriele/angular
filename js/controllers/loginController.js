var app = window.angular.module('controllers', []);

app.controller('app', function ($scope) {
    "use strict";
    $scope.nome = '';
    var todoList = this;
    
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
    
    todoList.archive = function () {
        var oldTodos = todoList.todos;    
        todoList.todos = [];
        angular.forEach (oldTodos, function(todo) {
            if (!todo.done) todoList.todos.push(todo);
        });
    };
    
});