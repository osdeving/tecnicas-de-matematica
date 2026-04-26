window.addEventListener("DOMContentLoaded", () => {
  renderMathInElement(document.body, {
    delimiters: [
      {left: "$$", right: "$$", display: true},
      {left: "\\[", right: "\\]", display: true},
      {left: "\\(", right: "\\)", display: false}
    ],
    throwOnError: false
  });

  document.querySelectorAll(".quiz-card").forEach(card => {
    const answer = card.dataset.answer;
    const feedback = card.querySelector(".feedback");

    card.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => {
        card.querySelectorAll("button").forEach(b => {
          b.classList.remove("correct", "incorrect");
          b.disabled = true;
        });

        if (button.dataset.option === answer) {
          button.classList.add("correct");
          feedback.textContent = "Correto. Você reconheceu a propriedade certa.";
          feedback.className = "feedback good";
        } else {
          button.classList.add("incorrect");
          const correct = card.querySelector(`button[data-option="${answer}"]`);
          if (correct) correct.classList.add("correct");
          feedback.textContent = "Quase. Repare na propriedade destacada pela alternativa correta.";
          feedback.className = "feedback bad";
        }

        if (window.renderMathInElement) {
          renderMathInElement(card, {
            delimiters: [
              {left: "$$", right: "$$", display: true},
              {left: "\\[", right: "\\]", display: true},
              {left: "\\(", right: "\\)", display: false}
            ],
            throwOnError: false
          });
        }
      });
    });
  });
});
