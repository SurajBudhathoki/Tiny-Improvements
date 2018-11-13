

//getting all kudos
const getKudos = function() {
    $.get(`/api/kudos`).then(function(data) {
        render(data);
    });
}


//displaying all the kudos 
const render = function (dataList) {

    console.log(dataList);
    for (let i = 0; i < dataList.length; i++) {
        
        $('#kudosContent').append(
            `<div class='card'>
            <h5>${dataList[i].title}</h5>
            <h6>From: ${dataList[i].username}</h6> 
          <div class='card-body'>
            <h6>To: ${dataList[i].username}</h6>
            <p>${dataList[i].body}</p>
          </div>
        </div>`
        );
    }
}



//getting all users 

const renderUsers = function() {
    $.get(`/api/users`).then(function(data) {

       
        for(let i = 0; i < data.length; i++) {
       
        
            $('#fromUser').append(`<option value='${data[i]._id}'> ${data[i].username} </option>`)
            $('#toUser').append(`<option value='${data[i]._id}'> ${data[i].username} </option>`)
          
        }
    })
}


//posting the kudos messages

const sendKudos = function(event) {
    event.preventDefault();

    // const from = $('#fromUser').val();
    // const to = $('#toUser').val();

    const newKudos = {
        title: $('#kudosTitle').val(),
        body: $('#kudosBody').val(),
        from: $('#fromUser').val(),
        to: $('#toUser').val()
    }

    $.post('/api/kudos', newKudos).then(function(data) {


        console.log(data);

        getKudos();
    })

}

$('#sendKudos').on('click', sendKudos)

//running the functions
renderUsers();
getKudos();