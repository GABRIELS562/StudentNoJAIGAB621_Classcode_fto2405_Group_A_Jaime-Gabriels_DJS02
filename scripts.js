const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();//stops the default form submission behaviour
  
  
  try {
    const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  if (!dividend || !divider) { 
    result.innerText =  "Division not performed. Both values are required in inputs. Try again.";
    return; //stops the code from running if no values have been entered
  }

const divideConvertToNumber = Number(dividend);
const dividerConvertToNumber = Number(divider); // in case a string submitted

// Check if inputs are valid numbers
if (isNaN(dividendNum) || isNaN(dividerNum)) {
  result.innerText("Invalid number provided");
  return
}



  result.innerText = dividend / divider;
});
catch 

