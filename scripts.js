const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //stops the default form submission behaviour

  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if (!dividend || !divider) {
      result.innerText =
        "Division not performed. Both values are required in inputs. Try again.";
      return; //stops the code from running if no values have been entered
    }

    const divideConvertToNumber = Number(dividend);
    const dividerConvertToNumber = Number(divider); // in case a string submitted

    // Check if inputs are valid numbers
    if (isNaN(divideConvertToNumber) || isNaN(dividerConvertToNumber)) {
      result.innerText = "Invalid number provided";
    }

    if (dividerNum === 0) {
      result.innerText =
        "Division not performed. Invalid number provided. Try again.";
      console.error(new Error("Division by zero error"));
      return;
    }
    // Perform division and show the whole number result
    const divisionResult = Math.floor(
      divideConvertToNumber / dividerConvertToNumber
    );
    result.innerText = divisionResult;
  } catch (error) {
    // Handle critical errors and crash the application
    result.innerText = "Something critical went wrong. Please reload the page.";
    console.error(error);
    // Here you might also force the page to reload after showing the error
    // location.reload();
  }
});
