// Define and array of cat objects
const cats = [
  { name: "Bad Hair Day", count: 0 },
  { name: "No Hair Day", count: 0 },
  { name: "cat3", count: 0 }
];
const catSelector = document.getElementById("cats");
const catContainer = document.querySelector(".cats");

cats.forEach(cat => {
  // Create option for each cat
  const catOption = document.createElement("option");
  catOption.value = cat.name;
  catOption.innerText = cat.name;
  catSelector.appendChild(catOption);

  // Create Box
  const catBox = document.createElement("div");
  catBox.setAttribute("data-cat", cat.name);
  catBox.className = "hidden cat";

  // Create Cat
  const catPic = document.createElement("img");
  catPic.setAttribute("src", `img/${cat.name}.jpg`);
  const catName = document.createElement("span");
  catName.innerText = cat.name;
  const catCounter = document.createElement("span");
  catCounter.innerText = 0;

  // Add click listener to cat
  catPic.addEventListener("click", () => {
    cat.count += 1;
    catCounter.innerText = cat.count;
  });

  // Add cat to box
  catBox.appendChild(catName);
  catBox.appendChild(catPic);
  catBox.appendChild(catCounter);

  // Add box to container
  catContainer.appendChild(catBox);
});

catSelector.addEventListener("change", e => {
  // Get all the existing cats
  const cats = document.querySelectorAll(".cat");

  // Loop through cats, hide them all
  cats.forEach(cat => {
    if (!cat.classList.contains("hidden")) {
      cat.classList.add("hidden");
    }
  });

  // Show the cat that matches the data attribute
  const value = event.target.value;
  const cat = document.querySelector(`div[data-cat="${value}"]`);
  cat.classList.remove("hidden");
});
