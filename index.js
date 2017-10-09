const initialCats = [
  {
    clickCount: 0,
    name: 'Tabby\'s Bad Hair Day',
    imgSrc: 'images/cat-bad-hair-day.jpg',
    nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
  },
  {
    clickCount: 0,
    name: 'Bare\'s No Hair Day',
    imgSrc: 'images/evil-cat.jpg',
    nicknames: ['Baldy', 'Barely', 'Hairy']
  },
  {
    clickCount: 0,
    name: 'Sushi Roll',
    imgSrc: 'images/sushi-roll-cat.jpg',
    nicknames: ['Kitty Kitty', 'Sushi']
  },
  {
    clickCount: 0,
    name: 'Calgon Moments',
    imgSrc: 'images/bathing-cats.jpg',
    nicknames: ['Muffy and Cally', 'Booboo and Butt Head']
  },
  {
    clickCount: 0,
    name: 'Jumping Jack Flash',
    imgSrc: 'images/jumping-cat.jpg',
    nicknames: ['Jackie', 'JJ', 'Scardy Cat']
  },
  {
    clickCount: 0,
    name: 'Lizard Nose Ring',
    imgSrc: 'images/lizard-nose-ring.jpg',
    nicknames: ['Mr. Gadget', 'Sid']
  },
  {
    clickCount: 0,
    name: 'Oops!',
    imgSrc: 'images/oops-cat.jpg',
    nicknames: ['Spot', 'Klutz']
  },
  {
    clickCount: 0,
    name: 'Supreme Cat',
    imgSrc: 'images/supreme-cat.jpg',
    nicknames: ['His Highness', 'Boobah']
  }
]
const ViewModel = function () {
  const self = this; // always the ViewModel

  this.catList = ko.observableArray([]);

  initialCats.forEach(catData => self.catList.push(new Cat(catData)));

  this.currentCat = ko.observable(this.catList()[0]);

  self.setCat = function (cat) {
    self.currentCat(cat);
  }

  this.incrementCounter = function () {
    return self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};


const Cat = function (data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.level = ko.computed(function () {
    let level = 'Newborn';

    // Calculate level based on click count
    if (this.clickCount() > 700) {
      level = 'Old Codger';
    }
    else if (this.clickCount() > 550) {
      level = 'Middle Aged';
    }
    else if (this.clickCount() > 400) {
      level = 'Adult';
    }
    else if (this.clickCount() > 300) {
      level = 'Young Adult';
    }
    else if (this.clickCount() > 200) {
      level = 'Teen';
    }
    else if (this.clickCount() > 100) {
      level = 'Pre-teen';
    }
    else if (this.clickCount() > 50) {
      level = 'Toddler';
    }
    else if (this.clickCount() > 10) {
      level = 'Infant';
    }

    return level;
  }, this);

};

ko.applyBindings(new ViewModel());