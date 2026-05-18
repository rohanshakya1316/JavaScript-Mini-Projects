const next = document.getElementById("next");
const prev = document.getElementById("prev");

const progress = document.querySelector(".progress-bar-front");

const steps = document.querySelectorAll(".step");

let curChecked = 1;

next.addEventListener("click", () => {
  curChecked++;
  if (curChecked > steps.length) {
    curChecked = steps.length;
  }
  updateStepProgress();
});

prev.addEventListener("click", () => {
  curChecked--;
  if (curChecked < 1) {
    curChecked = 1;
  }

  updateStepProgress();
});

const updateStepProgress = () => {
  steps.forEach((curStep, index) => {
    if (index < curChecked) {
      curStep.classList.add("checked");
      curStep.innerHTML = `
            <i class="fas fa-check"></i>
            <small>${
              index === 0
                ? "Start"
                : index === steps.length - 1
                  ? "Final"
                  : "Step " + index
            } </small> 
            `;
    } else {
      curStep.classList.remove("checked");
      curStep.innerHTML = `
        <i class="fas fa-times"></i>
        `;
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");

  progress.style.width =
    ((checkedNumber.length - 1) / (steps.length - 1)) * 100 + "%";

  if (curChecked === 1) {
    prev.disabled = true;
  } else if (curChecked === steps.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
