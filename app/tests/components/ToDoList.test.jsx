var React = require('react')
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoList = require('ToDoList');

describe('ToDoList component', () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });
});
