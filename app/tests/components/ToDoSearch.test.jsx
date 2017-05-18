var React = require('react')
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoSearch = require('ToDoSearch');

describe('ToDoSearch component', () => {
  it('should exist', () => {
    expect(ToDoSearch).toExist();
  });

  it("should call onSearch with entered input text", () => {
    var spy = expect.createSpy();
    var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);
    var searchText = "Dog Attack";

    toDoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(toDoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it("should call onSearch with proper checked value", () => {
    var spy = expect.createSpy();
    var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

    toDoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(toDoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
