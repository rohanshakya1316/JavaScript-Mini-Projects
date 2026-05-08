const btn = document.getElementById("calculate");

const total = document.getElementById("total");

const calculateTotal = () => {
  const billAmt = document.getElementById("bill").value;

  const tipPercent = document.getElementById("tip").value;

  const totalAmt = billAmt * (1 + tipPercent / 100);

  total.innerText = totalAmt.toFixed(3);
};

btn.addEventListener("click", calculateTotal);
