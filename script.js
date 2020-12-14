'use strict';

function DomElement(selector, height, width, bg, fontSize, text){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
  }
  
  DomElement.prototype.createDiv = function(){
    if (this.selector.startsWith('.')) {
        const div = document.createElement('div');
        div.classList.add(this.selector.substring(1));
        div.textContent = this.text;
        document.body.append(div);
        div.style.cssText = 'height:' + this.height +'; width:' + this.width + 
        '; background:' + this.bg + '; font-size:' + this.fontSize + '; color: black;';
    }

    if (this.selector.startsWith('#')) {
        const p = document.createElement('p');
        p.id = this.selector.substring(1);
        p.textContent = this.text;
        document.body.append(p);
        p.style.cssText = 'height:' + this.height +'; width:' + this.width + 
        '; background:' + this.bg + '; font-size:' + this.fontSize + '; color: black;';
    }
  };
  
  let obj = new DomElement('#block,' ,  '50px' , '400px' , '#FE8020' , '40px', 'Какой-то текст');
  
  obj.createDiv();
  