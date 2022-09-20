function getClients() {
    //Get request
    $.ajax({
        url: 'https://g7913fe229aa44b-jljr5f68ioqy3a4a.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',
        
        success: function (list) {
            console.log(list.items);
        },
        error: function (xhr, status) {
            console.log(status);
        }

    });
}

function createClient() {
    //Post request
    let id = $("#client_id").val();
    let name = $("#client_name").val();
    let email = $("#client_email").val();
    let age = $("#client_age").val();

    let client = {
        id: id,
        name: name,
        email: email,
        age: age
    };

    let clientJson = JSON.stringify(client);

    $.ajax({
        url: 'https://g7913fe229aa44b-jljr5f68ioqy3a4a.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'POST',
        dataType: 'json',
        data: clientJson,
        contentType: 'application/json',

        success : function () {
            $("#client_id").val("");
            $("#client_name").val("");
            $("#client_email").val("");
            $("#client_age").val("");
        },
        error : function (xhr, status) {
            console.log(xhr);
        }
    });
}

function deleteClient(){

}