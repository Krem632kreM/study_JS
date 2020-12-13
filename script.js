'use strict';

function DomElement(selector, height, width, bg, fontSize  ){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }
  
  DomElement.prototype.createDiv = function(){
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
  
  let obj = new DomElement('.block,' ,  '50px' , '400px' , '#FE8020' , '40px');
  
  obj.createDiv();
  