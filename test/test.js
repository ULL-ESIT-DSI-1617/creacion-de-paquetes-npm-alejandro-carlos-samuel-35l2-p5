let Shape = require('../lib/shape.js');
let assert = require('chai').assert;
let expect = require('chai').expect;


describe("Shape", function() {
  it("Se crea correctamente el objeto Shape", function() {
      let figura = new Shape({ width: 8, height: 2 }, 'Triangle');
      assert.typeOf(figura, 'Object');
      expect(figura).to.not.be.undefined;
  })

});