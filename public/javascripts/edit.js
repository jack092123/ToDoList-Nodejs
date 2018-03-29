$(document).ready(function() {
    console.log("l");
    var url = window.location.href.split("/");
    var id = url[url.length - 2];
    var api_url = "http://" + window.location.host + "/api/Todo/" + id + "/";
    $.ajax({
        type: 'GET',
        url: api_url,
        success: function(result){
            console.log(result);
            $("#task").val(result.task);
            $("#status").val(result.status);
            $("#priority").val(result.priority);
            $("#due_date").val(result.due_date);
            $("#note").val(result.note);
        }
    });
    $("#btn_edit").click(function(){
        $.ajax({
            type: 'PUT',
            url: api_url,
            data: $("#form_edit").serialize(),
            success: function(result){
                alert("Edit success");
                location.href = "http://" + window.location.host + "/todolist/";
            }
        });
    });
});