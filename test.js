var test = require('tape');
var logic = require('./logic');
var state = [
  { id: -3, description: 'first todo' },
  { id: -2, description: 'second todo' },
  { id: -1, description: 'third todo' },
];
//console.log(logic);
test('test add', function(t) {
  const actual1 = logic.addTodo(state,'mai');
  const expected1 = [{ id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
    { id: 1, description: 'mai' }
  ];
  t.deepEqual(actual1, expected1 , 'Should return the new to do');

  const actual2 = logic.addTodo(state,'nn');
  const expected2 = [{ id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
    { id: 2, description: 'nn' }
  ];
  t.deepEqual(actual2, expected2 , 'Should return the new to do');
  
  t.deepEqual(state, [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ], 'State should not be changed');
  t.end();
});