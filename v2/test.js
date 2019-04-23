const app = require('./app.js')
const assert = require('assert')
// it('should return true', () => {
//   assert.equal(true, true)
// })

it("indicates failure when a user inputs nothing instead of string", () => {
    assert.equal(app.validateNames(),false)
})

it("indicates failure when a user uses numbers instead of string", () => {
    assert.equal(app.validateNames(10),false)
})

it("indicates success when a user uses string", () => {
    assert.equal(app.validateNames("cinder"),true)
})
// it("checks whether input is a text string", () => {

// }) 