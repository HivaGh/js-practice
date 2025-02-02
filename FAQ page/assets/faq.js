const btns = document.querySelectorAll('.question-btn');
btns.forEach(function(btn){
      btn.addEventListener('click', function(e){
            const answer = e.currentTarget.parentElement.nextElementSibling;
            answer.classList.toggle('show-answer');
      })
})


