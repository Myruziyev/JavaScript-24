let api = "https://jsonplaceholder.typicode.com/users";
let sun = document.querySelector("#sun");
let moon = document.querySelector("#moon");
let input = document.querySelector("input");
let container = document.querySelector(".container");
let main = document.querySelector("main");

fetch(api)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      let name = user.name;
      let email = user.email;
      let phone = user.phone;
      let address = user.address.street + ", " + user.address.city;

      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${name}</h2>
        <i class="fa-solid fa-user" style="color: #1f3050;"></i>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
      `;
      container.appendChild(card);
      main.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
input.addEventListener("keyup", (e) => {
  filterCard(e.target.value.toLowerCase());
});

function darkMode() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  input.style.backgroundColor = "black";
  input.style.color = "white";
  input.style.border = "1px solid white";

  sun.style.display = "none";
  moon.style.display = "inline-block";
}

function lightMode() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  input.style.backgroundColor = "white";
  input.style.color = "black";
  input.style.border = "1px solid black";

  sun.style.display = "inline-block";
  moon.style.display = "none";
}

sun.addEventListener("click", darkMode);
moon.addEventListener("click", lightMode);
function filterCard(query) {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    let name = card.querySelector("h2").textContent.toLowerCase();
    if (name.includes(query)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}
