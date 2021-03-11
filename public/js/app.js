$(document).ready(function () {


    $.get('/api/todos')
        .then(Gettodos).catch((err) => {
            console.log(err)
        });


    $('#inputtodo').keypress(function (e) {
        if (e.which == 13) {
            CreateTodo();
        }
    });

    $('.todos').on('click', 'i', function (e) {
        e.stopPropagation();
        var selectedId = $(this).parent().data('id')
        $(this).parent().remove();

        $.ajax({
                method: 'DELETE',
                url: '/api/todos/' + selectedId
            })
            .then(function (data) {
                console.log(data.message)
            })
    })
    $('.todos').on('click', 'li', function () {
        updatetodo($(this))
    })
});


function Gettodos(result) {

    result.forEach(element => {
        var todo = $('<li class="icons">' + element.name + ' <i class="fas fa-times"></i><li/>')
        todo.data('id', element._id)
        todo.data('completed', element.completed)
        console.log(element.completed)
        if (element.completed) {
            $(todo).addClass('done');
        }
        $('.todos').append(todo);
    });

}

function CreateTodo() {
    var input = $('#inputtodo').val();
    console.log(input)
    $.post("/api/todos", {
        name: input
    }).then((element) => {
        console.log(element)
        $('#inputtodo').val('')
        console.log(input)
        var todo = $('<li class="icons">' + element.name + '<i class="fas fa-times"></i><li/>')
        todo.data('id', element._id)
        todo.data('completed', element.completed)
        if (element.completed) {
            $(todo).addClass('done');
        }
        $('.todos').append(todo);
    }).catch((err) => {
        console.log(err)
    });
}

function updatetodo(todo) {
    var isDone = !todo.data('completed')
    var url = todo.data('id')
    console.log(isDone)
    var updated = {
        completed: isDone
    }
    $.ajax({
        method: 'PUT',
        url: '/api/todos/' + url,
        data: updated
    }).then(function (data) {
        console.log(data.completed)
        todo.toggleClass("done");
        todo.data('completed', isDone)
    })
}