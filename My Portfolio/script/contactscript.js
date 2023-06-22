
function contactsubmitscr() {


    const scriptURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfR84HZWQY03MCTaXVWDVryh8f4eqGuzzd5tpcKLiERdJ0R8w/formResponse'
    const form = document.forms['submit-to-google-sheet']
    const success = document.getElementById('success');
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log('Success!', response))


            .catch(error => console.error('Error!', error.message))

    })

    success.style.fontSize = "20px";
    success.style.color = "white";

    document.getElementById("submitbtn").style.display = 'none';

    success.innerHTML = "...Please Wait...";

    setTimeout(() => {
        form.reset()
        success.innerHTML = "";
        success.innerHTML = "Data Submit Successfully";
    }, 2000);

    setTimeout(() => {
        // success.innerHTML = "";
        location.reload();
        // document.getElementById("submitbtn").style.display = '';
    }, 10000);
}





// ===================================================================

// disable the submit button until all required fields have values
// Get the form and the submit button

var form = document.getElementById("myForm");
var submitButton = document.getElementById("submitbtn");

// Add event listener to the form's submit event
form.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();
});

// Add event listener to the form's input fields and textarea
var inputs = form.querySelectorAll("input[required], textarea[required]");
inputs.forEach(function(input) {
  input.addEventListener("input", function() {
    // Check if all required fields have values
    var allFieldsFilled = Array.from(inputs).every(function(input) {
      return input.value.trim() !== "";
    });

    // Enable or disable the submit button based on the validation result
    submitButton.disabled = !allFieldsFilled;
  });
});
