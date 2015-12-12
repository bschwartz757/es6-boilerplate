//outside constructor, simply grabs DOM element

document.querySelector('[data-hook="pick"]').innerHTML = '<a><img data-hook="img-swap" src="https://xplatform.org/ext/lorempixel/200/300/nightlife"/></a>';

//constructor

class ImageSlider {
  
  constructor() {
    
    this.$images = ['https://xplatform.org/ext/lorempixel/200/300/nightlife/', 'https://xplatform.org/ext/lorempixel/200/300/cats/'];

document.querySelector('[data-hook="change"]')
  .addEventListener('click', ()=>{
    let max = this.$images.length - 1;
    let min = 0;
document.querySelector('[data-hook="img-swap"]').src = this.$images[Math.floor(Math.random()*(max - min + 1)) + min];    
  
  });    
    
  }

}

let myInstance = new ImageSlider();
