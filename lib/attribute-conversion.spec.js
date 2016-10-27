'use strict';

const chai = require('chai');
const expect = chai.expect;

const convert = require('./attribute-conversion');

describe('attribute-conversion', function() {
  Object.keys(convert.map).forEach(k => {
    const val = convert.map[k];
    it(`should convert '${k}' to '${val}'`, function() {
      expect(convert.toJsx(k)).to.equal(val);
    });
  });
});
