let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let likes = document.getElementById('.likes');
let submit = document.getElementById('submit');
let commentInput =document.getElementById('comment-input');
let commentList = document.querySelector('.comments');

let count = 0;
let intervalId = null;

function incrementCounter() {
    count++;
    counter.innerText = count;
}

function decrementCounter() {
    count--;
    counter.innerText = count;
}

let likesCount = {};

function likeNumber() {
  
  if (likesCount[count]) {
    likesCount[count]++;
  } else {
    
    likesCount[count] = 1;
  }

  let li = document.getElementById(`like-${count}`);
  if (li) {
    li.innerText = `Number ${count} has been liked ${likesCount[count]} time(s)`;
  } else {
    li = document.createElement('li');
    li.id = `like-${count}`;
    li.innerText = `Number ${count} has been liked ${likesCount[count]} time(s)`;
    likes.appendChild(li);
  }
}

function togglePause() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      pause.innerText = 'resume';
    } else {
      intervalId = setInterval(incrementCounter, 1000);
      pause.innerText = 'pause';
    }
  }

  function addComment(e) {
    e.preventDefault();

    let li = document.createElement('li');
        li.innerText = commentInput.value;

        commentList.appendChild(li);

        commentInput.value = '';
  }

  window.addEventListener('DOMContentLoaded', (event) => {
    intervalId = setInterval(incrementCounter, 1000);
  
    minus.addEventListener('click', decrementCounter);
    
    plus.addEventListener('click', incrementCounter);
    
    heart.addEventListener('click', likeNumber);
    
    pause.addEventListener('click', togglePause);
    
    submit.addEventListener('click', addComment);
  });
