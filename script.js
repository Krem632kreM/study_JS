'use strict';

/*const DomElement = function() {
    this.selector = '.gfh';
    this.height = 0;
    this.width = 0;
    this.bg = 0;
    this.fontSize = 0;
};

DomElement.prototype.createDiv = function() {
    console.log(this.selector);
}.bind(DomElement);

DomElement.prototype.createDiv.bind(DomElement);*/

function Car(selector, height, width, bg, fontSize  ){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }
  
  Car.prototype.createDiv = function(){
    if (this.selector.startsWith('.')) {
        const div = document.createElement('div');
        div.innerHTML = '<div class="' + this.selector.split('.').pop() + '">див с классом</div>';
        document.body.append(div);
        div.style.cssText = 'height:' + this.height +'; width:' + this.width + 
        '; background:' + this.bg + '; font-size:' + this.fontSize + '; color: black;';
    }

    if (this.selector.startsWith('#')) {
        const div = document.createElement('div');
        div.innerHTML = '<div id="' + this.selector.split('.').pop() + '">параграф</div>';
        document.body.append(div);
        div.style.cssText = 'height:' + this.height +'; width:' + this.width + 
        '; background:' + this.bg + '; font-size:' + this.fontSize + '; color: black;';
    }

  };
  
  Car.prototype.getInformation = function(){
    return `${this.selector} ${this.height}, ${this.width}`;
  };
  
  let obj = new Car('.block,' ,  '50px' , '400px' , '#FE8020' , '40px');
  
  obj.createDiv();
  
  console.log(obj.getInformation()); //Audi S8, 2020