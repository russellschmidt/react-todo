// import firebase from 'firebase';
//
// var config = {
//   apiKey: "AIzaSyDuQH6cdtpOEE1yWTXxy6lmI3xrj4RuSl8",
//   authDomain: "octorusty-to-do.firebaseapp.com",
//   databaseURL: "https://octorusty-to-do.firebaseio.com",
//   projectId: "octorusty-to-do",
//   storageBucket: "octorusty-to-do.appspot.com",
//   messagingSenderId: "253180539313"
// };
// firebase.initializeApp(config);
//
// var fb = firebase.database().ref();

// fb.set({
//   app: {
//     name: 'To Do App with Firebase',
//     version: '0.1'
//   },
//   isRunning: true,
//   user: {
//     name: 'octorusty',
//     age: 37
//   },
// }).then( () => {
//   console.log('Firebase updated!');
// }, (e) => {
//   console.log("Error! ", e);
// })
//
// // var todosArray = fb.child('todosTest');
// //
// // var newArrayItem = todosArray.push();
// // newArrayItem.set({
// //   text: 'Walk the dog'
// // })
// //
// // todosArray.push({
// //   text: 'Run like a dog!'
// // })
// //
// // todosArray.push({
// //   text: 'Smell like a dog!'
// // })
// //
// // fb.once('value').then((s) => { console.log(s.val()); });
// //
// // todosArray.on('child_added', (snapshot) => {
// //   console.log('child_added: ', snapshot.key, snapshot.val() );
// // });
// //
// // todosArray.on('child_changed', (snapshot) => {
// //   console.log('child_changed: ', snapshot.key, snapshot.val() );
// // });
// //
// // todosArray.on('child_removed', (snapshot) => {
// //   console.log('child_removed: ', snapshot.key, snapshot.val() );
// // });
//
// // arrays todos
// // child added listen to new todos added, output key and value
// // add 2 items to the arrays
// // make sure callback fires twice
//
// var todos =fb.child('todos');
// todos.on('child_added', (snapshot) => {
//   console.log('Added item! ', snapshot.key, snapshot.val() );
// });
//
// todos.push({
//   text: 'Make like a tree and leave'
// });
//
// todos.push({
//   text: 'See you later alligator'
// })
