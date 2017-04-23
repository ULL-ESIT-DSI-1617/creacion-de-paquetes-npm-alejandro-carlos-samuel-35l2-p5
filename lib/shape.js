'use strict';
let util = require('util');

class Shape {
       
  constructor(options, shape) {
    Object.assign(this, options);
    this.shape =  shape || this.constructor.name;
  }

  getArea() {
   try {
      let shape = this;
      if (this.constructor.name === 'Shape') 
        shape = new Shape.Shapes[this.shape](this);
      return shape.area();
   }
   catch(e) {
     console.error(`Can't compute area of '${this.shape}' shape.`);
     return null;
   }
  }
  
}
Shape.Shapes = Shape.Shapes || {};
module.exports = Shape;