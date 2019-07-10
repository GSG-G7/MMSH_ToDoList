// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');

    var state = [
        { id: -3, description: 'first todo', done: false },
        { id: -2, description: 'second todo', done: false },
        { id: -1, description: 'third todo', done: false },
    ]; // this is our initial todoList


    let idSort = document.createElement('button');
    idSort.classList.add('id-sort');
    idSort.textContent = "sort By ID";
    let descriptionSort = document.createElement('button');
    descriptionSort.classList.add('description-sort');
    descriptionSort.textContent = "sort by description";
    let doneSort = document.createElement('button');
    doneSort.classList.add('done-sort');
    doneSort.textContent = "sort by done";
    let div = document.createElement('div');
    div.appendChild(descriptionSort);
    div.appendChild(idSort);
    div.appendChild(doneSort);
    div.addEventListener('click', (e) => {
        e.preventDefault();

        let newState;
        if (e.target.classList.contains('id-sort')) {
            //console.log(e.target.textContent);

            newState = todoFunctions.sortTodos(state, (x, y) => {
                return x.id - y.id;
            });
            //console.log(newState);

            update(newState);
            // console.log(newArr);
        } else if (e.target.classList.contains('description-sort')) {
            newState = todoFunctions.sortTodos(state, (x, y) => {
                return x.description.localeCompare(y.description);
            });
            // console.log(state);
            //console.log(newState);

            update(newState);
            //console.log(state);
        } else if (e.target.classList.contains('done-sort')) {
            newState = todoFunctions.sortTodos(state, (x, y) => {
                return y.done - x.done;
            });
            update(newState);
            console.log(newState)
        }
    })
    addTodoForm.appendChild(div);

    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
        var todoNode = document.createElement('li');
        // you will need to use addEventListener

        // add span holding description
        let span = document.createElement('span');
        span.textContent = todo.description;
        todoNode.appendChild(span);


        // this adds the delete button
        var deleteButtonNode = document.createElement('button');
        deleteButtonNode.textContent = "Delete";
        deleteButtonNode.addEventListener('click', function(event) {
            var newState = todoFunctions.deleteTodo(state, todo.id);
            update(newState);
        });
        todoNode.appendChild(deleteButtonNode);

        // add markTodo button
        let markBtn = document.createElement('button');
        markBtn.textContent = 'Done';
        markBtn.addEventListener('click', () => {
            let newState = todoFunctions.markTodo(state, todo.id);
            update(newState);
        })
        todoNode.appendChild(markBtn);

        // add classes for css

        return todoNode;
    };

    // bind create todo form
    if (addTodoForm) {
        addTodoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var description = event.target.querySelector('input').value;
            var newState = [...todoFunctions.addTodo(state, description)];
            update(newState);
            console.log(state);
        });
    }

    // you should not need to change this function
    var update = function(newState) {
        state = newState;
        renderState(state);
        localStorage.setItem('state', JSON.stringify(state));
    };


    // you do not need to change this function
    var renderState = function(state) {
        var todoListNode = document.createElement('ul');

        state.forEach(function(todo) {
            todoListNode.appendChild(createTodoNode(todo));
        });

        // you may want to add a class for css
        container.replaceChild(todoListNode, container.firstChild);
    };


    if (localStorage.getItem('state') != null) {

        update(JSON.parse(localStorage.getItem('state')));
    }
    if (container) renderState(state);
})();
