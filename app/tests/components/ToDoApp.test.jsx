var React = require('react')
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require('ToDoList');

describe('ToDoApp component', () => {
  it('should exist', () => {
    expect(ToDoApp).toExist();
  });
});
