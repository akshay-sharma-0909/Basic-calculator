const buttons = document.querySelectorAll(".numbuttons");
const display = document.querySelector(".displaytext");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    if(value === "AC"){
      expression = "";
      display.innerText = "";
    }
    else if(value === "DEL"){
      expression = expression.slice(0, -1);
      display.innerText = expression;
    }
    else if(value === "="){
      try{
        expression = expression.replace(/÷/g,"/");
        expression = eval(expression).toString();
        display.innerText = expression;
      }catch{
        display.innerText = "Error";
        expression = "";
      }
    }
    else{
      expression += value;
      display.innerText = expression;
    }
  });
});
