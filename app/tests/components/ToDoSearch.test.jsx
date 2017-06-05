var React = require('react')
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {ToDoSearch} from 'ToDoSearch';

describe('ToDoSearch component', () => {
  it('should exist', () => {
    expect(ToDoSearch).toExist();
  });

  it("should dispatch SET_SEARCH_TEXT input text change", () => {
    var spy = expect.createSpy();
    var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>);
    var searchText = "Dog";
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };

    toDoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(toDoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it("should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked", () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var spy = expect.createSpy();
    var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>);

    toDoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(toDoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
