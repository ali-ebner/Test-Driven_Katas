const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns the original string if max length is equal or greater than the string length', () => {
    let str = "123456789"
    expect(wrap(str, 9)).to.equal(str)
    expect(wrap(str, 11)).to.equal(str)
  })
  it('Returns text with no column longer than the max length', () => {
    let str = "1 2 45"
    expect(wrap(str, 3)).to.equal("1 2\n 45")
  })
  it('It breaks lines at word boundaries', () => {
    let str = "Hello World"
    expect(wrap(str, 7)).to.equal("Hello \nWorld")
    str = "Hello Whole World"
    expect(wrap(str, 7)).to.equal("Hello \nWhole \nWorld")
  })
});



