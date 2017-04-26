'use strict';
let util = require('util');

/**
 * Clase que define la estructura básica de una figura.
 * @type {Shape}
 */
class Shape {
  /**
   * Constructor de la clase Shape
   * @param  {Object} options Contiene la información de la figura (ancho y alto).
   * @param  {string} shape   Contiene el tipo de figura a crear.
   */
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