const { expect } = require('chai');
const twoSum = require('./twoSum')

describe("twoSum", () => {
  it("returns true", () => {
    const arr = [1,2,3]
    const target = 5
    expect(twoSum(arr, target)).to.equal(true)
  })
})
