var test = require("tape");
var logic = require("./logic");

var state = [
  { id: -3, description: "first todo", done: false },
  { id: -2, description: "second todo", done: true },
  { id: -1, description: "third todo", done: true }
];

test("Testing the delete function", function(t) {
  let actual = logic.deleteTodo(state, -2);
  let expected = [
    { id: -3, description: "first todo", done: false },
    { id: -1, description: "third todo", done: true }
  ];
  t.deepEqual(actual, expected, "The new Array must not includes the id -2");
  t.end();
});

test("test add", function(t) {
  const actual1 = logic.addTodo(state, "mai");
  const expected1 = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: true },
    { id: -1, description: "third todo", done: true },
    { id: 1, description: "mai", done: false }
  ];
  t.deepEqual(actual1, expected1, "Should return the new to do");

  const actual2 = logic.addTodo(state, "nn");
  const expected2 = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: true },
    { id: -1, description: "third todo", done: true },
    { id: 2, description: "nn", done: false }
  ];
  t.deepEqual(actual2, expected2, "Should return the new to do");

  t.deepEqual(
    state,
    [
      { id: -3, description: "first todo", done: false },
      { id: -2, description: "second todo", done: true },
      { id: -1, description: "third todo", done: true }
    ],
    "State should not be changed"
  );
  t.end();
});

test('mark todo function',function(t){
  t.equal(logic.markTodo(state,-2)[1].done,false,"should be true");
  t.equal(logic.markTodo(state,-3)[0].done,true,"should be false")
  t.end();
});

test("sort todo function", function(t) {
  t.equal(
    logic.sortTodos(state, (x, y) => {
      return y.done - x.done;
    })[0].done,
    true,
    "should false be above"
  );
  t.end();
});

test("sort todo function", function(t) {
  t.equal(
    logic.sortTodos(state, (x, y) => {
      return y.id - x.id;
    })[0].id,
    -1,
    "the higher should be above"
  );
  t.end();
});

test("sort todo function by descriptaion", function(t) {
  t.equal(
    logic.sortTodos(state, (x, y) => {
      return x.description.localeCompare(y.description);
    })[0].description,
    "first todo",
    "the higher should be above"
  );
  t.end();
});

test("Testing Edit function", function(t) {
  const expected = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "new Text", done: true },
    { id: -1, description: "third todo", done: true }
  ];
  t.deepEqual(
    logic.editTodo(state, -2, "new Text"),
    expected,
    "The text should be edited"
  );
  t.end();
});

test("Testing Clear All Function", function(t) {
  const expected = [];
  t.deepEqual(logic.clearAll(state), expected, "The array must be cleared");
  t.end();
});