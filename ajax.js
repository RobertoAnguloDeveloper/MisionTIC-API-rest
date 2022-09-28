// CLIENT TABLE REQUESTS
function getClients() {
    $.ajax({
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',
        
        success: function (list) {
            //console.log(list.items);

            if (document.getElementById("client_table").querySelector("tbody")) {
                document.getElementById("client_table").querySelector("tbody").remove();
            }

            for (let i = 0; i < list.items.length; i++) {
                if (i == 0) {
                    tbody = document.createElement("tbody");
                    document.getElementById("client_table").appendChild(tbody);
                }
                document.getElementById("client_table").querySelector("tbody").insertRow(-1).innerHTML = '<td>' + list.items[i].id + '</td>' 
                                                + '<td><div contenteditable id = "client_name'+list.items[i].id+'">' + list.items[i].name + '</div></td>'
                                                + '<td><div contenteditable id = "client_email'+list.items[i].id+'">' + list.items[i].email + '</div></td>'
                                                + '<td><div contenteditable id = "client_age'+list.items[i].id+'">' + list.items[i].age + '</div></td>'
                                                + '<td><BUTTON id = "client_btnSave'+list.items[i].id+'" onclick="updateClient('+list.items[i].id+');" class = "btn-primary rounded">SAVE</BUTTON>'
                                                + '<BUTTON id = "client_btnDelete'+list.items[i].id+'" onclick="deleteClient('+list.items[i].id+');" class = "btn-danger ml-2 rounded">DELETE</BUTTON></td>';
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

function updateClient(id){
    let name = document.getElementById("client_table").querySelector("#client_name"+id).textContent;
    let email = document.getElementById("client_table").querySelector("#client_email"+id).textContent;
    let age = document.getElementById("client_table").querySelector("#client_age"+id).textContent;
    
    let client = {
        id: id,
        name: name,
        email: email,
        age: age
    };

    let clientJson = JSON.stringify(client);

    $.ajax({
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'PUT',
        dataType: 'json',
        data: clientJson,
        contentType: 'application/json',

        error : function (xhr, status) {
        },
        complete : function () {
            getClients();
        }
    });
}

function deleteClient(id){
    let client = {
        id: id,
    };

    let clientJson = JSON.stringify(client);

    $.ajax({
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'DELETE',
        dataType: 'json',
        data: clientJson,
        contentType: 'application/json',

        error : function (xhr, status) {
        },
        complete : function () {
            getClients();
        }
    });
}

//BOX TABLE REQUESTS
function getBoxes() {
    $.ajax({
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box',
        type: 'GET',
        dataType: 'json',
        
        success: function (list) {
            //console.log(list.items);

            if (document.getElementById("box_table").querySelector("tbody")) {
                document.getElementById("box_table").querySelector("tbody").remove();
            }

            for (let i = 0; i < list.items.length; i++) {
                if (i == 0) {
                    tbody = document.createElement("tbody");
                    document.getElementById("box_table").appendChild(tbody);
                }
                document.getElementById("box_table").querySelector("tbody").insertRow(-1).innerHTML = '<td>' + list.items[i].id + '</td>' 
                                                + '<td><div contenteditable id = "box_location'+list.items[i].id+'">' + list.items[i].location + '</div></td>'
                                                + '<td><div contenteditable id = "box_capacity'+list.items[i].id+'">' + list.items[i].capacity + '</div></td>'
                                                + '<td><div contenteditable id = "box_category_id'+list.items[i].id+'">' + list.items[i].category_id + '</div></td>'
                                                + '<td><div contenteditable id = "box_name'+list.items[i].id+'">' + list.items[i].name + '</div></td>'
                                                + '<td><BUTTON id = "box_btnSave'+list.items[i].id+'" onclick="updateBox('+list.items[i].id+');" class = "btn-primary rounded">SAVE</BUTTON>'
                                                + '<BUTTON id = "box_btnDelete'+list.items[i].id+'" onclick="deleteBox('+list.items[i].id+');" class = "btn-danger ml-2 rounded">DELETE</BUTTON></td>';
            }
        },
        error: function (xhr, status) {
            //console.log(status);
        }

    });
}

function createBox() {
    //Post request
    let id = $("#box_id").val();
    let location = $("#box_location").val();
    let capacity = $("#box_capacity").val();
    let category_id = $("#box_category_id").val();
    let name = $("#box_name").val();

    let box = {
        id: id,
        location: location,
        capacity: capacity,
        category_id: category_id,
        name: name
    };

    let boxJson = JSON.stringify(box);

    $.ajax({
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box',
        type: 'POST',
        dataType: 'json',
        data: boxJson,
        contentType: 'application/json',

        error : function (xhr, status) {
            //console.log("status");
        },
        complete : function () {
            $("#box_id").val("");
            $("#box_location").val("");
            $("#box_capacity").val("");
            $("#box_category_id").val("");
            $("#box_name").val("");
            getBoxes();
        }
    });
}

function updateBox(id){
    //console.log(document.getElementById("box_table").querySelector("#box_location"+id).textContent);
    let location = document.getElementById("box_table").querySelector("#box_location"+id).textContent;
    let capacity = document.getElementById("box_table").querySelector("#box_capacity"+id).textContent;
    let category_id = document.getElementById("box_table").querySelector("#box_category_id"+id).textContent;
    let name = document.getElementById("box_table").querySelector("#box_name"+id).textContent;
    
    let box = {
        id: id,
        location: location,
        capacity: capacity,
        category_id: category_id,
        name: name
    };

    let boxJson = JSON.stringify(box);

    $.ajax({
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box',
        type: 'PUT',
        dataType: 'json',
        data: boxJson,
        contentType: 'application/json',

        error : function (xhr, status) {
        },
        complete : function () {
            getBoxes();
        }
    });
}

function deleteBox(id){
    let box = {
        id: id,
    };

    let boxJson = JSON.stringify(box);

    $.ajax({
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/box/box',
        type: 'DELETE',
        dataType: 'json',
        data: boxJson,
        contentType: 'application/json',

        error : function (xhr, status) {
        },
        complete : function () {
            getBoxes();
        }
    });
}

//MESSAGE TABLE REQUESTS
function getMessages() {
    $.ajax({
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'GET',
        dataType: 'json',
        
        success: function (list) {
            //console.log(list.items);

            if (document.getElementById("message_table").querySelector("tbody")) {
                document.getElementById("message_table").querySelector("tbody").remove();
            }

            for (let i = 0; i < list.items.length; i++) {
                if (i == 0) {
                    tbody = document.createElement("tbody");
                    document.getElementById("message_table").appendChild(tbody);
                }
                document.getElementById("message_table").querySelector("tbody").insertRow(-1).innerHTML = '<td>' + list.items[i].id + '</td>' 
                                                + '<td><div contenteditable id = "message_messagetext'+list.items[i].id+'">' + list.items[i].messagetext + '</div></td>'
                                                + '<td><BUTTON id = "message_btnSave'+list.items[i].id+'" onclick="updateMessage('+list.items[i].id+');" class = "btn-primary rounded">SAVE</BUTTON>'
                                                + '<BUTTON id = "message_btnDelete'+list.items[i].id+'" onclick="deleteMessage('+list.items[i].id+');" class = "btn-danger ml-2 rounded">DELETE</BUTTON></td>';
            }
        },
        error: function (xhr, status) {
            //console.log(status);
        }

    });
}

function createMessage() {
    //Post request
    let id = $("#message_id").val();
    let messagetext = $("#message_messagetext").val();

    let message = {
        id: id,
        messagetext: messagetext
    };

    let messageJson = JSON.stringify(message);

    $.ajax({
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'POST',
        dataType: 'json',
        data: messageJson,
        contentType: 'application/json',

        error : function (xhr, status) {
            //console.log("status");
        },
        complete : function () {
            $("#message_id").val("");
            $("#message_messagetext").val("");
            getMessages();
        }
    });
}

function updateMessage(id){
    let messagetext = document.getElementById("message_table").querySelector("#message_messagetext"+id).textContent;
    
    let message = {
        id: id,
        messagetext: messagetext
    };

    let messageJson = JSON.stringify(message);

    $.ajax({
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'PUT',
        dataType: 'json',
        data: messageJson,
        contentType: 'application/json',

        error : function (xhr, status) {
        },
        complete : function () {
            getMessages();
        }
    });
}

function deleteMessage(id){
    let message = {
        id: id,
    };

    let messageJson = JSON.stringify(message);

    $.ajax({
        url: 'https://g7913fe229aa44b-proyecto23.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'DELETE',
        dataType: 'json',
        data: messageJson,
        contentType: 'application/json',

        error : function (xhr, status) {
        },
        complete : function () {
            getMessages();
        }
    });
}