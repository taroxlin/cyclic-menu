const body = document.getElementById("body");
const mainBar = document.createElement("div");
body.appendChild(mainBar);
mainBar.classList.add("main-menu-bar");
mainBar.innerHTML = "Apollo School";
const mainCont = document.createElement("div");
body.appendChild(mainCont);
mainCont.classList.add("menuBox");

class naviMenu {
  constructor(obj) {
    this.obj = obj;
    this.selectnum = -1;
    body.addEventListener("keydown", this.clickHandler);
    this.menuClasses = {
      desc: "menu-description",
      name: "menu-day",
      soup: "menu-soup",
      mainMeal: "menu-mainMeal",
      veggie: "menu-salad",
      dessert: "menu-dessert"
    };
    this.init();
  }

  clickHandler = e=>{
      this.changeSelectNum(e.keyCode);
  }

  changeHiLight(nodeArr,operation){
      for(let i = 0; nodeArr.length > i;i++){
          if(operation ==='add')
          nodeArr[i].classList.add('selected')
          else if(operation ==='remove')
          nodeArr[i].classList.remove('selected')
        }
  }
  changeSelectNum(code){
     let selector = document.getElementsByClassName('day-container')
    if(code === 39){
        if(this.selectnum !=-1){
            this.changeHiLight(selector[this.selectnum].childNodes,'remove')
        }
    this.selectnum === selector.length-1 ? this.selectnum = 0 : this.selectnum += 1;
    }else if (code === 37){
        if(this.selectnum !=-1){
            this.changeHiLight(selector[this.selectnum].childNodes,'remove')
        }
        this.selectnum <= 0 ? this.selectnum = selector.length-1 : this.selectnum -= 1;
    }
    this.changeHiLight(selector[this.selectnum].childNodes,'add');
  }


  initElement(objElement, parent, key) {
    const meals = ["name", "soup", "mainMeal", "veggie", "dessert"];
    for (let i = 0; meals.length > i; i++) {
      const container = document.createElement("div");
      parent.append(container);
      objElement.hasOwnProperty(meals[i])
        ? (container.innerHTML = objElement[meals[i]])
        : "";
      key === "desc"
        ? container.classList.add(this.menuClasses[key])
        : container.classList.add(this.menuClasses[meals[i]]);
    }
  }

  init() {
    for (const key in this.obj) {
      const draw = document.createElement("div");
      mainCont.appendChild(draw);
      draw.classList.add("day-container");
      this.initElement(this.obj[key], draw, key);
    }
  }
}

const daily = {
  desc: {
    name: "Day",
    soup: "Soup",
    mainMeal: "Main-Meal",
    veggie: "Salad type",
    dessert: "Dessert ",
  },
  monday: {
    name: "monday",
    soup: "Onion Soup",
    dessert: "ice",
    veggie: "green",
    mainMeal: "Fish-O-fillet + fries",
  },
  tuesday: {
    name: "tuesday",
    soup: "beetroot soup",
    mainMeal: "Hamburger",
    dessert: "Burning Bananas !",
    veggie: "Shattered ice Salad",
  },
  wendsday: {
    name: "wendsday",
    soup: "borsch",
    veggie: "dsaasd",
  },
  thursday: {
    name: "thursday",
    soup: "cabbage soup",
    dessert: "Pancakes",
  },
  friday: {
    name: "friday",
    soup: "broth",
    mainMeal: "Something",
    dessert: "beer",
  },
};

const aa = new naviMenu(daily);
