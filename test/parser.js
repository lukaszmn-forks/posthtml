'use strict'

const fs = require('fs')
const path = require('path')

const it = require('mocha').it
const expect = require('chai').expect
const describe = require('mocha').describe

const posthtml = require('../')

const html = fs.readFileSync(
  path.resolve(__dirname, 'templates/parser.html'), 'utf8'
)

describe('Parser', function () {
  it('static', () => {
    const tree = posthtml.parse(html, false)

    expect(tree).to.eql(posthtml.parse(html, false))
  })

  it('parser => render', function (done) {
    expect(html).to.eql(posthtml.render(posthtml.parse(html)))

    done()
  })
})
