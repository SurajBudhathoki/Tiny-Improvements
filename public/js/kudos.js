

//getting all kudos
const getKudos = function () {
    $.get(`/api/kudos`).then(function (data) {
        renderKudos(data);

    });
}


//displaying all the kudos 
const renderKudos = function (dataList) {

    $('#kudosContent').empty();

   
    for (let i = 0; i < dataList.length; i++) {

        $('#kudosContent').append(
            `<div class='card kudosCard'>
         
          <h5 id = "from" >From: ${dataList[i].from[0].name}</h5> 
          <h5 id = "to">To: ${dataList[i].to[0].name}</h5>
          <h3>${dataList[i].title}</h3>
          <p>${dataList[i].body}</p>
        </div>`
        );
    }
}



//getting all users 
const renderUsers = function () {
    $.get(`/api/users`).then(function (data) {
       

        for (let i = 0; i < data.length; i++) {


            $('#fromUser').append(`<option value='${data[i]._id}'> ${data[i].name} </option>`)
            $('#toUser').append(`<option value='${data[i]._id}'> ${data[i].name} </option>`)

        }
    })
}


//posting the kudos messages
const sendKudos = function (event) {
    event.preventDefault();


    if($('#fromUser').val() && $('#toUser').val()) {
        $('.userRow').empty();

    
    const newKudos = {
        title: $('#kudosTitle').val(),
        body: $('#kudosBody').val(),
        from: $('#fromUser').val(),
        to: $('#toUser').val()
    }

    if ($('#kudosTitle').val() && $('#kudosBody').val()) {

        $.post('/api/kudos', newKudos).then(function (data) {

            $('#kudosTitle').val('');
            $('#kudosBody').val('');
            $('#fromUser').val('');
            $('#toUser').val('');
            $('#kudosModal').modal('hide');
            $('.err').empty();
           

            getKudos();
        });

    } else {
       $('.err').text('please enter title and message!').css({ "color": "red", "font-size": "100%" });
    }

} else {
    $('.userRow').text('Please choose to and from').css({ "color": "red", "font-size": "100%" });
}




}



//empyting out modal on click close
$('.closeModal').on('click', function () {
    $('#kudosTitle').val('');
    $('#kudosBody').val('');
    $('#fromUser').val('');
    $('#toUser').val('');
    $('.err').empty();
    $('.userRow').empty();
});



//running the functions
$('#sendKudos').on('click', sendKudos);
renderUsers();
getKudos();