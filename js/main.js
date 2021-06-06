'use strict'

{
  function errorControl(){
    if(document.getElementById('erorr') != null) {
      document.getElementById('erorr').remove();
    }
  }
  function trashBox() {
    const trash = document.getElementsByClassName('trash-btn');
    for(let i = 0; i < trash.length; i++) {
      trash[i].addEventListener('click', function() {
        this.parentNode.parentNode.remove();
        errorControl();
      });
    }
  }

  function doneBox() {
    const done = document.getElementsByClassName('done-btn');
    const doneArea = document.getElementById('done-list');
    
    for(let i = 0; i < done.length; i++) {
      done[i].addEventListener('click', function() {
        doneArea.appendChild(this.parentNode.parentNode);
        this.remove();
        errorControl();
      });
    }
  }

  function addTodo() {
    errorControl();
    const add_todo = document.querySelector('.add_todo')
    const listText = document.getElementById('add-area');
    const todo_list = document.getElementById('todo-list');
    
    const li = document.createElement('li');
    const todo = document.createElement('ul');
    todo.id = 'todo';
    
    
    //テキストを追加
    const erorr = document.createElement('p');
    erorr.id = 'erorr';
    const kara = "";
    
    if(listText.value === kara) {
      if(document.getElementById('erorr') == null) {
        erorr.innerHTML = '空白のタスク？なんじゃそれは！ ちょっとおしゃれやん';
        add_todo.appendChild(erorr);
      }
    } else {
      let text = document.createTextNode(listText.value);
      li.appendChild(text);
      todo_list.appendChild(todo);
      todo.appendChild(li);
      
      const list_btn = document.createElement('div');
      list_btn.classList.add('list-btn');
      
      
      //削除ボタン 
      let trash = document.createElement('span');
      trash.classList.add('trash-btn');
      trash.id = 'trash';
      trash.innerHTML = '削除';
      
      //完了ボタン
      const done = document.createElement('span');
      done.classList.add('done-btn');
      done.innerHTML = '完了';
      
      //ボタンを追加
      list_btn.appendChild(trash);
      list_btn.appendChild(done);
      todo.appendChild(list_btn);
      
      
      listText.value = '';
  
      trashBox();
      doneBox();
    }
  }

  function enterAction(e) {
    if(e.keyCode === 13) {
      addTodo();
    }
    btn.blur();
  }

  const btn = document.querySelector('.add-btn');
  const textArea = document.getElementById('add-area');
  

  btn.addEventListener('click', () => {
    addTodo();
  });
  textArea.addEventListener('keypress', (e) => {
    enterAction(e);
  });
  btn.addEventListener('keypress', (e) => {
    enterAction(e);
  });
  
  
}