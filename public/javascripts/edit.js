$(document).ready(() => {
    var url = window.location.href.split("/");
    var id = url[url.length - 2];
    var api_url = "http://" + window.location.host + "/api/todo/" + id + "/";
    $.ajax({
        type: 'GET',
        url: api_url,
        success: (result) => {
            $("#task").val(result[0].task);
            $("#status").val(result[0].status);
            $("#priority").val(result[0].priority);
            $("#due_date").val(new Date(result[0].due_date).toISOString().slice(0,10));
            $("#note").val(result[0].note);
        }
    });
    $("#btn_edit").click(function() {
        if ($("#task").val() == "" || $("#due_date").val() == ""){
            alert("Task and Due Date can't be blank");
        } else {
            var patt = /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/;
            if (!patt.test($("#due_date").val())) {
                alert("Due_date isn't correct");
            } else {
                $.ajax({
                    type: 'PUT',
                    url: api_url,
                    data: $("#form_edit").serialize(),
                    success: (result) => {
                        alert("Edit success");
                        location.href = "http://" + window.location.host + "/todo/list/";
                    }
                });
            };
        };
    });
});