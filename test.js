var test = require('tape');
var logic = require('./logic');

var state = [
  { id: -3, description: 'first todo' },
  { id: -2, description: 'second todo' },
  { id: -1, description: 'third todo' },
];

test('Testing the delete function', function(t) {
  let actual=(logic.deleteTodo(state,-2));
  let expected=([
    { id: -3, description: 'first todo' },
    { id: -1, description: 'third todo' },
  ])
  t.deepEqual(actual,expected,"The new Array must not includes the id -2");
  t.end();
});