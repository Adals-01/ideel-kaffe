const form = document.querySelector(".nlForm");
console.log("selected");

form.addEventListener("submit", userSubmittet);
console.log(form)

function userSubmittet(evt) {
    evt.preventDefault();
    console.log(form.elements.email.value);
    console.log("form submitted")

const payload = {
    email: form.elements.email.value
};

document.querySelector("input[type=submit]").disabled = true;

/* fetch("https://silfen-9520.restdb.io/rest/newsletter", {
  method: "POST",
  headers: {
    "x-apikey": "608278cf28bf9b609975a5b3",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload),
}) 
 */

fetch("https://keasem2-551e.restdb.io/rest/newsletter", {
method: "POST",
headers: {
    "x-apikey": "606defeaf592f7113340ed01",
    "Content-Type": "application/json"
},
body: JSON.stringify(payload),
  })



.then(response => {
  console.log(response);
  document.querySelector("input[type=submit]").disabled = false;
  form.elements.email.value = "";
  document.querySelector("p.submit-confirm").classList.remove("submit-confirm");
  document.querySelector(".email").classList.add("submit-confirm");
  document.querySelector(".submit-button").classList.add("submit-confirm");
})

.catch(err => {
  console.error(err);
}); 
}
