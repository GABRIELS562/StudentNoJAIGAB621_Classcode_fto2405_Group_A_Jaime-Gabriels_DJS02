const form = document.querySelector("[data-form]"); //code given
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stops the default form submission behaviour

  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if (!dividend || !divider) {
      result.innerText =
        "Division not performed. Both values are required in inputs. Try again.";
      console.error(
        new Error("Both inputs are required but one or both were missing.")
      );
      return; // stops the code from running if no values have been entered
    }

    const divideConvertToNumber = Number(dividend);
    const dividerConvertToNumber = Number(divider); // in case a string is submitted

    if (isNaN(divideConvertToNumber) || isNaN(dividerConvertToNumber)) {
      throw new Error("Invalid number provided in one or both inputs.");
    }

    if (dividerConvertToNumber === 0) {
      result.innerText =
        "Division not performed. Invalid number provided. Try again.";
      console.error(new Error("Division by zero error"));
      return; // stops further execution if division by zero is attempted
    }

    // Perform division and show the whole number result
    const divisionResult = Math.floor(
      divideConvertToNumber / dividerConvertToNumber
    );
    result.innerText = divisionResult;
  } catch (error) {
    // Handle critical errors and crash the application
    document.body.innerHTML =
      "<h1>Something critical went wrong. Please reload the page.</h1>";
    console.error(error); // Optionally, force the page to reload after showing the error
    // location.reload();
  }
});
