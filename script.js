'use strict';

const todoControl  = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted =document.querySelector(".todo-completed");

let todoData = [

];

if (localStorage.getItem('todoData')) todoData = JSON.parse (localStorage.getItem ("todoData"));

console.log(todoData);

const render = function() {

    todoList.textContent = '';
    todoCompleted.textContent = '';
    
todoData.forEach(function(item, index, arr){
    const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
    '<div class="todo-buttons">' + 
        '<button class="todo-remove"></button>' + 
        '<button class="todo-complete"></button>' + 
    '</div>';

if (item.comleted) {
        todoCompleted.append(li);
    } else {
        todoList.append(li);
    }

    const btnTodoCompleted = li.querySelector('.todo-complete');

    btnTodoCompleted.addEventListener ('click', function(){
        item.comleted = !item.comleted;
        render();
        localStorage.setItem ("todoData", JSON.stringify(todoData));
    });

   const btnTodoRemoved = li.querySelector('.todo-remove');

    btnTodoRemoved.addEventListener ('click', function(e){
        /*const btn = e.target.closest('.todo-remove');
        if (!btn) {
        return;
        }
        btn.closest('li').remove();*/
        //todoList.remove(index);
           arr.splice(index,1);
           /*delete todoData[index];
           todoData = todoData.filter(function (el) {
            return el !== null;
        });*/
    
           localStorage.removeItem('todoData');
           localStorage.setItem ("todoData", JSON.stringify(todoData));
           console.log(todoData);
           render();
        });
        
});







    /*btnTodoRemoved.onclick = function(e) {
        const btn = e.target.closest('.todo-remove');
        if (!btn) {
        return;
        }
        //btn.parentElement.remove();
        btn.closest('li').remove();

        todoData.splise(index,1);

    
        
        console.log(item);
        //localStorage.removeItem("todoData");
        //localStorage.setItem ("todoData", JSON.stringify(todoData));
        //if (localStorage.getItem('todoData')) todoData = JSON.parse (localStorage.getItem ("todoData"));
    }

//console.log(todoData);*/
};

render();

console.log(todoData);



todoControl.addEventListener('submit', function(event){

event.preventDefault();

let newTodo = {
    value: headerInput.value,
    comleted: false
};
todoData.push(newTodo);
localStorage.setItem ("todoData", JSON.stringify(todoData));
render();
console.log("ffff" + headerInput.value);
headerInput.value = '';
});
//localStorage.setItem ("todoData", JSON.stringify(todoData));
const headerButton  = document.querySelector(".header-button");
headerButton.addEventListener("input", buttonBlocked);
function buttonBlocked() {
    
    if (headerInput.value === '') { 
        headerButton.disabled = true; 
        } else {
            headerButton.disabled = false;
        }   
    }
  
  buttonBlocked();

  






