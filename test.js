var test = require("tape");
var logic = require("./logic");

var state = [
  { id: -3, description: "first todo",done: false },
  { id: -2, description: "second todo",done: false },
  { id: -1, description: "third todo",done:false }
];

test("Testing the delete function", function(t) {
  let actual = logic.deleteTodo(state, -2);
  let expected = [
    { id: -3, description: "first todo",done:false },
    { id: -1, description: "third todo",done:false }
  ];
  t.deepEqual(actual, expected, "The new Array must not includes the id -2");
  t.end();
});
//console.log(logic);
test("test add", function(t) {
  const actual1 = logic.addTodo(state, "mai");
  const expected1 = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: false },
    { id: 1, description: "mai", done: false }
  ];
  t.deepEqual(actual1, expected1, "Should return the new to do");

  const actual2 = logic.addTodo(state, "nn");
  const expected2 = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: false },
    { id: 2, description: "nn", done: false }
  ];
  t.deepEqual(actual2, expected2, "Should return the new to do");

  t.deepEqual(
    state,
    [
      { id: -3, description: "first todo", done: false },
      { id: -2, description: "second todo", done: false },
      { id: -1, description: "third todo", done: false }
    ],
    "State should not be changed"
  );
  t.end();
});
