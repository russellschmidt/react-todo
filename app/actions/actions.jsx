import firebase, {fb} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var updateToDo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var addToDo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var startAddToDo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      // id: uuid(),  //provided by firebase
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = fb.child('todos').push(todo);

    return todoRef.then( () => {
      dispatch(addToDo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var startToggleToDo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = fb.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then( () => {
      dispatch(updateToDo(id, updates));
    })
  };
};
