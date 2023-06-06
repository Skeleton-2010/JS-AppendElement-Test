const calcBtn = document.querySelector(".CalcButton");
const firIn = document.querySelector(".FirstNum");
const secIn = document.querySelector(".SecondNum");
const output = document.querySelector(".Answer");
const hist = document.querySelector(".History");

let calcOut = 0;
let textCalcOut = "";

function appElemToHist(content){
    let histElement = document.createElement("ul")
    histElement.innerText = content;
    if(histElement.textContent.includes("NaN")){
    histElement.className = "HistElementWrong";
    }else{
            histElement.className = "HistElement";
    }

    hist.prepend(histElement)
}

function animText(text) {
  output.textContent = "";
  let i = 0;
  let timer = setInterval(() => {
    output.textContent += text[i];
    i++;
    if (i == text.length) {
      clearInterval(timer);
    }
  }, 400 / text.length);
  appElemToHist(text)

}

function calcSum() {
  calcOut = Number(firIn.value) + Number(secIn.value);
  textCalcOut = firIn.value + " + " + secIn.value + " = " + calcOut;
  console.log(textCalcOut);
  animText(String(textCalcOut));
}

calcBtn.addEventListener("click", calcSum);
