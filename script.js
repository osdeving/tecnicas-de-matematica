// JS separado extraído de index.html

document.addEventListener('DOMContentLoaded', function () {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "\\(", right: "\\)", display: false}
      ]
    });
  }

  // Quiz interativo
  document.querySelectorAll('.quiz-card').forEach(function(card) {
    const answer = card.getAttribute('data-answer');
    const buttons = card.querySelectorAll('button[data-option]');
    const feedback = card.querySelector('.feedback');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        buttons.forEach(b => b.classList.remove('correct', 'incorrect'));
        if (btn.getAttribute('data-option') === answer) {
          btn.classList.add('correct');
          feedback.textContent = 'Correto!';
          feedback.className = 'feedback good';
        } else {
          btn.classList.add('incorrect');
          feedback.textContent = 'Tente novamente.';
          feedback.className = 'feedback bad';
        }
      });
    });
  });
});
