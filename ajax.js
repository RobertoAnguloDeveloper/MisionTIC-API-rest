var clients;

function getClients() {
    $.ajax({
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',
        
        success: function (list) {
            console.log(list.items);
            clients = list.items;

            if (document.getElementById("client_table").querySelector("tbody")) {
                document.getElementById("client_table").querySelector("tbody").remove();
            }

            for (let i = 0; i < list.items.length; i++) {
                if (i == 0) {
                    tbody = document.createElement("tbody");
                    document.getElementById("client_table").appendChild(tbody);
                }
                document.getElementById("client_table").querySelector("tbody").insertRow(-1).innerHTML = '<td>' + list.items[i].id + '</td>' 
                                                + '<td><div contenteditable>' + list.items[i].name + '</div></td>'
                                                + '<td><div contenteditable>' + list.items[i].email + '</div></td>'
                                                + '<td><div contenteditable>' + list.items[i].age + '</div></td>'
                                                + '<td><BUTTON class = "btn-primary rounded">SAVE</BUTTON><BUTTON class = "btn-danger ml-2 rounded">DELETE</BUTTON></td>';
            }
        },
        error: function (xhr, status) {
            //console.log(status);
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
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'POST',
        dataType: 'json',
        data: clientJson,
        contentType: 'application/json',

        error : function (xhr, status) {
            //console.log("PILLA");
        },
        complete : function () {
            $("#client_id").val("");
            $("#client_name").val("");
            $("#client_email").val("");
            $("#client_age").val("");
            getClients();
        }
    });
}

function deleteClient(){

}