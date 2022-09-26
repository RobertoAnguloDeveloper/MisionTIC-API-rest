function getClients() {
    $.ajax({
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',
        
        success: function (list) {
            console.log(list.items);

            if (document.getElementById('table')) {
                document.getElementById('table').remove();
            }

            table = document.createElement("table");
            document.body.appendChild(table);
            table.id = "table";
            document.getElementById("table").setAttribute("class", "table table-striped table-dark w-50 p-3");
            thead = document.createElement("thead");
            tr = document.createElement("tr");
            thead.appendChild(tr);
            tr.innerHTML = "<th>ID</th><th>NAME</th><th>EMAIL</th><th>AGE</th><th>ACTIONS</th>";
            table.appendChild(thead);

            table = document.getElementById('table');

            for (let i = 0; i < list.items.length; i++) {
                table.insertRow(-1).innerHTML = '<td>' + list.items[i].id + '</td>' 
                                                + '<td>' + list.items[i].name + '</td>'
                                                + '<td>' + list.items[i].email + '</td>'
                                                + '<td>' + list.items[i].age + '</td>';
            }
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