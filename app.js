let inputDollar = document.querySelector("#dollar");
let inputNumber = document.querySelector("#number");
let inputCustom = document.querySelector("#custom");
let MoneyAll = document.getElementsByClassName("price");
let reset = document.querySelector(".btn-reset");
let custom = 0;
let money = 0;
let people = 0;
let total = 0;
let tip = 0;
inputDollar.addEventListener("input", (e) => {
  money = e.target.value;
  if (Number(money) > 1000000000) {
    inputDollar.classList.add("active-border");
    alert("Limit $: 1.000.000.000 ");
  } else {
    inputDollar.classList.remove("active-border");
  }
});
inputCustom.addEventListener("input", (e) => {
  custom = e.target.value;

  if (Number(custom) > 100) {
    inputCustom.classList.add("active-border");
    alert("Tip limit: 100%");
  } else {
    inputCustom.classList.remove("active-border");
  }
});

inputNumber.addEventListener("input", (e) => {
  people = e.target.value;
  if (Number(people) > 1000) {
    inputNumber.classList.add("active-border");
    alert("Limit People: 1000");
  } else {
    inputNumber.classList.remove("active-border");
  }
});
function check(x, y) {
  if (x == "" || y == "" || x == 0 || y == 0) {
    return false;
  } else return true;
}
let btnNam = document.querySelector("#nam");
let btnHaiNam = document.querySelector("#hainam");
let btnNamMuoi = document.querySelector("#nammuoi");
let btnMuoi = document.querySelector("#muoi");
let btnMuoiNam = document.querySelector("#muoinam");
let allButton = document.getElementsByClassName("btn-primary");
inputCustom.addEventListener("focusout", () => {
  if (check(money, people)) {
    for (let i = 0; i < allButton.length; i++) {
      allButton[i].classList.remove("active");
    }
    tip = (Number(money) * (Number(custom) / 100)) / Number(people);
    MoneyAll[0].innerHTML = "$" + tip.toFixed(2);
    MoneyAll[1].innerHTML = "$" + (money / people + tip).toFixed(2);
    reset.classList.remove("disable");
  }
});

btnNam.addEventListener("click", () => {
  if (check(money, people)) {
    tip = (Number(money) * 0.05) / Number(people);
    MoneyAll[0].innerHTML = "$" + tip.toFixed(2);
    MoneyAll[1].innerHTML = "$" + (money / people + tip).toFixed(2);
    for (let i = 0; i < allButton.length; i++) {
      allButton[i].classList.remove("active");
    }
    inputCustom.value = "";
    btnNam.classList.add("active");
    reset.classList.remove("disable");
  }
});
btnMuoi.addEventListener("click", () => {
  if (check(money, people)) {
    tip = (Number(money) * 0.1) / Number(people);
    MoneyAll[0].innerHTML = "$" + tip.toFixed(2);
    MoneyAll[1].innerHTML = "$" + (money / people + tip).toFixed(2);
    for (let i = 0; i < allButton.length; i++) {
      allButton[i].classList.remove("active");
    }
    inputCustom.value = "";
    btnMuoi.classList.add("active");
    reset.classList.remove("disable");
  }
});
btnMuoiNam.addEventListener("click", () => {
  if (check(money, people)) {
    tip = (Number(money) * 0.15) / Number(people);
    MoneyAll[0].innerHTML = "$" + tip.toFixed(2);
    MoneyAll[1].innerHTML = "$" + (money / people + tip).toFixed(2);
    for (let i = 0; i < allButton.length; i++) {
      allButton[i].classList.remove("active");
    }
    inputCustom.value = "";
    btnMuoiNam.classList.add("active");
    reset.classList.remove("disable");
  }
});
btnHaiNam.addEventListener("click", () => {
  if (check(money, people)) {
    tip = (Number(money) * 0.25) / Number(people);
    MoneyAll[0].innerHTML = "$" + tip.toFixed(2);
    MoneyAll[1].innerHTML = "$" + (money / people + tip).toFixed(2);
    for (let i = 0; i < allButton.length; i++) {
      allButton[i].classList.remove("active");
    }
    inputCustom.value = "";
    btnHaiNam.classList.add("active");
    reset.classList.remove("disable");
  }
});
btnNamMuoi.addEventListener("click", () => {
  if (check(money, people)) {
    tip = (Number(money) * 0.5) / Number(people);
    MoneyAll[0].innerHTML = "$" + tip.toFixed(2);
    MoneyAll[1].innerHTML = "$" + (money / people + tip).toFixed(2);
    for (let i = 0; i < allButton.length; i++) {
      allButton[i].classList.remove("active");
    }
    inputCustom.value = "";
    btnNamMuoi.classList.add("active");
    reset.classList.remove("disable");
  }
});

reset.addEventListener("click", () => {
  reset.classList.add("disable");
  inputCustom.value = "";
  inputDollar.value = "";
  inputNumber.value = "";
  MoneyAll[0].innerHTML = "$0";
  MoneyAll[1].innerHTML = "$0";
  for (let i = 0; i < allButton.length; i++) {
    allButton[i].classList.remove("active");
  }
  custom = 0;
  money = 0;
  people = 0;
  total = 0;
  tip = 0;
});
