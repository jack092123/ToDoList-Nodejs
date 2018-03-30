$(document).ready(function() {
    var api_url = "http://" + window.location.host + "/api/Todo/";
    $.ajax({
        type: 'GET',
        url: api_url,
        success: function(result){
            result.forEach(function(element){
                $("#table").append(
                    '<tr><td>'+ element.id + '</td>' +
                    '<td>' + element.task + '</td>' +
                    '<td>' + element.status + '</td>' +
                    '<td>' + element.priority + '</td>' +
                    '<td>' + element.due_date + '</td>' +
                    '<td>' + element.note + '</td>' +
                    '<td>' + element.last_modify + '</td>' +
                    '<td>' + element.create_time + '</td>' +
                    '<td><button type="button" class="edt" name="' + element.id + '">Edit</button></td>' +
                    '<td><button type="button" class="del" name="' + element.id + '">Delete</button></td></tr>'
                );
            });
            $("button.edt").click(function(){
                console.log("1");
                location.href = "http://" + window.location.host + "/todolist/edit/" + $(this).attr("name") + "/";
            });

            $("button.del").click(function(){
                var api_url = "http://" + window.location.host + "/api/Todo/" + $(this).attr("name") + "/";
                $.ajax({
                    type: 'DELETE',
                    url: api_url,
                    success: function(result){
                        location.reload();
                    }
                });
            });
        }
    });

    $("#btn_add").click(function(){
        if ($("#task").val() == "" || $("#due_date").val() == ""){
            alert("Task and Due Date can't be blank");
        } else {
            var patt = /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/;
            if (!patt.test($("#due_date").val())) {
                alert("Due_date isn't correct");
            } else {
                $.ajax({
                    type: 'POST',
                    url: api_url,
                    data: $("#form_add").serialize(),
                    success: function(result){
                        alert("Add success");
                        location.reload();
                    }
                });
            };
        };
    });
});