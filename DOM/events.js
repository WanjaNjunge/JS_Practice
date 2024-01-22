// function addingEventListener() {
//     const input = document.getElementById('button');

//     function clickAlert() {
//         alert("You clicked the button!")
//     }

//     input.addEventListener('click', clickAlert)
// };

// addingEventListener();

const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "#FF65B9"

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }

  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

