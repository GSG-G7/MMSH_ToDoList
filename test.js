var test = require('tape');
var logic = require('./logic');
test('Example test', function(t) {
  t.pass();
  t.end();
});


const todos  = [
  { id: 3, description: 'second todo',done:false },
  { id: 1, description: 'third todo',done:true },
  { id: 2, description: 'first todo',done:true }
];


test('mark todo function',function(t){

  t.equal(logic.markTodo(todos,-2)[1].done,true,"should be true");
  t.end();
});

test('sort todo function',function(t){
  t.equal(logic.sortTodos(todos,(x,y)=>{
    
    return y.done-x.done;

  })[0].done,true,"should false be above");
  t.end();
});

test('sort todo function',function(t){
  t.equal(logic.sortTodos(todos,(x,y)=>{
    
    return y.id-x.id;

  })[0].id,3,"the higher should be above");
  t.end();
});

test('sort todo function by descriptaion',function(t){
  t.equal(logic.sortTodos(todos,(x,y)=>{
    
    return x.description.localeCompare(y.description);

  })[0].description,"first todo","the higher should be above");
  t.end();
});
