function openGift() {

  // Hide gift screen
  document.getElementById("gift-screen").style.display = "none";

  // Show birthday content
  document.getElementById("birthday-content").style.display = "block";


  // Confetti explosion
  for (let i = 0; i < 150; i++) {

    createConfetti();

  }

}


function createConfetti() {

  const confetti = document.createElement("div");

  confetti.innerHTML = "🎉";

  confetti.style.position = "fixed";

  confetti.style.left = Math.random() * 100 + "vw";

  confetti.style.top = "-50px";

  confetti.style.fontSize =
    Math.random() * 30 + 20 + "px";

  confetti.style.zIndex = "999";

  document.body.appendChild(confetti);


  const duration =
    Math.random() * 3000 + 2000;


  confetti.animate(

    [

      {
        transform: "translateY(0) rotate(0deg)"
      },

      {
        transform:
          "translateY(110vh) rotate(720deg)"
      }

    ],

    {

      duration: duration,

      easing: "linear"

    }

  );


  setTimeout(() => {

    confetti.remove();

  }, duration);

}
