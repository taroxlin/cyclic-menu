// Shorthand console.log // 
const l =(e)=> console.log(e);
//global selector//
const bodySelector = document.getElementById("body");

class Navi {
  constructor() {
    this.tabs = [];
    this.selector = bodySelector.appendChild(document.createElement("nav"));
    this.selector.classList.add("navigation");
    this.activeMenu = -1;
    bodySelector.addEventListener("keydown", this.clickHandler);
  }

  clickHandler = e=>{
    this.changeActivedMenu(e.keyCode);
}
// Adding new tab To navigation Ex. Object.newTab('Options',['opt1','opt2'])
  newTab(name, barsArray) {
    let p = new Menu(name, barsArray, this.selector);
    this.tabs.push(p);
    return p;
  }
  //Remove Existing tab by
  removeTab(a){
      const selector = document.getElementById(`menuId${this.numberOfTabs-1}`)
      selector.remove()
  }

  get allTabs() {
    return this.tabs;
  }

  get numberOfTabs() {
    return this.tabs.length;
  }

  changeActivedMenu(code) {
    if (this.activeMenu != -1) {
      this.tabs[this.activeMenu].hideExpand();
      const num = document.getElementById(`menuId${this.activeMenu}`).firstChild;
      num.classList.remove('selected');
    }
    if (code === 39) {
      this.activeMenu === this.numberOfTabs - 1
        ? (this.activeMenu = 0)
        : (this.activeMenu += 1);
    } else if (code === 37) {
      this.activeMenu === 0
        ? (this.activeMenu = this.numberOfTabs - 1)
        : (this.activeMenu -= 1);
    }
    this.tabs[this.activeMenu].showExpand();
    const num = document.getElementById(`menuId${this.activeMenu}`).firstChild
    num.classList.add('selected')
  }

  
}

class Menu {
  constructor(name, barsArray, parentSelector) {
    this.name = name;
    this.barsArray = barsArray;
    this.parentSelector = parentSelector;
    this.id = this.parentSelector.childNodes.length;
    this.init();
  }
  init() {
    const selector = this.parentSelector;
    let div = document.createElement("div");
    selector.appendChild(div);
    div.classList.add("Menu");
    div.id = `menuId${this.id}`;
    const innerDiv = document.createElement("div");
    div.appendChild(innerDiv);
    innerDiv.innerHTML = this.name;
    innerDiv.classList.add("menu-topic");
  }

  showExpand() {
    const selector = document.getElementById(`menuId${this.id}`);
    for (let barsName of this.barsArray) {
      const div = document.createElement("div");
      selector.appendChild(div);
      div.innerHTML = barsName;
      div.classList.add("expanded-item");
    }
  }

  hideExpand() {
    const selector = document.getElementById(`menuId${this.id}`);
    for (let i = 0; this.barsArray.length > i; i++) {
      selector.lastChild.remove();
    }
  }
}

let navigation = new Navi();
navigation.newTab("Main", ["MainOpt1", "MainOpt2", "MainOpt3"]);
navigation.newTab("Others", ["OthersOption1", "OthersOption2", "OthersOption3"]);
navigation.newTab("File", ["save", "load", "cancel"]);
