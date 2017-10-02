// Model:  Define and array of cat objects
const model = {
  currentCat: null,
  cats: [
    {
      name: "Bad Hair Day",
      imgSrc: "images/cat-bad-hair-day.jpg",
      clickCount: 0
    },
    { name: "No Hair Day", imgSrc: "images/evil-cat.jpg", clickCount: 0 },
    {
      name: "Lizard Nose Ring",
      imgSrc: "images/lizard-nose-ring.jpg",
      clickCount: 0
    },
    {
      name: "Calgon Moments",
      imgSrc: "images/bathing-cats.jpg",
      clickCount: 0
    },
    { name: "Jumping Jack", imgSrc: "images/jumping-cat.jpg", clickCount: 0 },
    { name: "Oops!", imgSrc: "images/oops-cat.jpg", clickCount: 0 },
    {
      name: "The Supreme Ruler",
      imgSrc: "images/supreme-cat.jpg",
      clickCount: 0
    },
    { name: "Sushi Roll", imgSrc: "images/sushi-roll-cat.jpg", clickCount: 0 }
  ]
};

//Octopus/Controller
const octopus = {
  init() {
    // Set current cat to first one in the list
    model.currentCat = model.cats[0];

    // Initialize views
    catView.init();
    catListView.init();
  },

  // Get the array of cats from the Model
  // get makes the cats() function a property
  // that is called without parens
  // i.e. cats = octopus.cats
  get cats() {
    return model.cats;
  },

  // Get the Model's currentCat property
  get currentCat() {
    return model.currentCat;
  },

  // setter for currentCat
  // Sets the Model's currentCat value to the
  // parameter cat i.e. octopus.currentCat = cat;
  set currentCat(cat) {
    model.currentCat = cat;
  },

  // increment counter then render
  incrementCounter() {
    model.currentCat.clickCount++;
    catView.render();
  }
};

// View(s): Creating DOM objects

const catView = {
  init() {
    // Create variables on the catView object and
    // store pointers to DOM elements for later access
    this.catEl = document.querySelector(".cat");
    this.catNameEl = document.querySelector(".cat-name");
    this.catImgEl = document.querySelector(".cat-img");
    this.countEl = document.querySelector(".cat-count");

    // on click, increment cat's counter
    this.catImgEl.addEventListener("click", e => octopus.incrementCounter());

    // render this view (update DOM elements)
    this.render();
  },

  render() {
    // Get the cats from the octopus/controller
    const currentCat = octopus.currentCat;
    this.catNameEl.innerText = currentCat.name;
    this.catImgEl.src = currentCat.imgSrc;
    this.countEl.innerText = "Click count: " + currentCat.clickCount;
    console.log(
      currentCat,
      this.catNameEl,
      this.catImgEl,
      this.countEl.innerText
    );
  }
};

const catListView = {
  init() {
    // store DOM elements for later access
    this.catListEl = document.getElementById("cat-list");

    // get the cats from the octopus/controller
    this.cats = octopus.cats;

    // Add listener on select to change current cat and render
    this.catListEl.addEventListener("change", e => {
      const cat = this.cats.find(cat => cat.name === e.target.value);

      octopus.currentCat = cat;
      catView.render();
    });

    // render this view (update DOM elements)
    this.render();
  },

  render() {
    // Get the cats from the octopus/controller
    this.cats = octopus.cats;

    // remove all options from the select menu
    this.catListEl.innerHTML = octopus.currentCat.name;

    // loop over cats
    for (const cat of this.cats) {
      // Make new option, set values
      const option = document.createElement("option");
      option.value = cat.name;
      option.innerText = cat.name;
      this.catListEl.appendChild(option);
    }
  }
};

octopus.init();
