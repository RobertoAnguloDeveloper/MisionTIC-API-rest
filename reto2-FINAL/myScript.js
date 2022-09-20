function leerTool(){
    //FUNCION GET
        $.ajax({
            url : 'https://g54c002f2a8054d-knkzptnm2vm3gb5r.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/tool/tool',
            type : 'GET',
            dataType : 'json',

            success : function(herramientas) {
                let ch=herramientas.items;
                $("#listaHerramientas").empty();
                for(i=0; i<ch.length; i++) {
                    $("#listaHerramientas").append(ch[i].id+" : <b>"+ch[i].brand+"</b> "+ch[i].model+" "+ch[i].category_id+" "+ch[i].name+" ");
                    
                    $("#listaHerramientas").append("<button onclick='borrarTool("+ch[i].id+")'>Borrar</button></br></br>")

                }
             // console.log(clientes);
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            }
            
        });
}

function guardarTool(){
    let idHerramienta=$("#idHerramienta").val();
    let marca=$("#marcaHerramienta").val();
    let modelo=$("#modeloHerramienta").val();
    let categorID=$("#categorID").val();
    let nombreTo=$("#nombreHerramienta").val();
    

    let data={
        id:idHerramienta,
        brand:marca,
        model:modelo,
        category_id:categorID,
        name:nombreTo
    };

    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://g54c002f2a8054d-knkzptnm2vm3gb5r.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/tool/tool',
        type : 'POST',
        dataType : 'json',
        data:dataToSend,
        contentType:'application/json',

        complete : function(herramientas) {
            $("#idHerramienta").val("");
            $("#marcaHerramienta").val("");
            $("#modeloHerramienta").val("");
            $("#categorID").val("");
            $("#nombreHerramienta").val("");
        },

        error : function(xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete : function(){
            leerTool();
        }
        
    });
}

function editarTool(){

    let idHerramienta=$("#idHerramienta").val();
    let marca=$("#marcaHerramienta").val();
    let modelo=$("#modeloHerramienta").val();
    let categorID=$("#categorID").val();
    let nombreTo=$("#nombreHerramienta").val();;

    let data={
        id:idHerramienta,
        brand:marca,
        model:modelo,
        category_id:categorID,
        name:nombreTo
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g54c002f2a8054d-knkzptnm2vm3gb5r.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/tool/tool',
        type : 'PUT',
        data:dataToSend,
        contentType:'application/json',

        success : function(clientes) {
            $("#idHerramienta").val("");
            $("#marcaHerramienta").val("");
            $("#modeloHerramienta").val("");
            $("#categorID").val("");
            $("#nombreHerramienta").val("");
        },

        error : function(xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete : function(){
            leerTool();
        }
        
    });




}


function borrarTool(idHerramienta){

    let data={
        id:idHerramienta,
   };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g54c002f2a8054d-knkzptnm2vm3gb5r.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/tool/tool',
        type : 'DELETE',
        data:dataToSend,
        contentType:'application/json',

        success : function(herramientas) {
            $("#idHerramienta").val("");
            $("#marcaHerramienta").val("");
            $("#modeloHerramienta").val("");
            $("#categorID").val("");
            $("#nombreHerramienta").val("");
        },

        error : function(xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete : function(){
            leerTool();
        }
        
    });




}


function leerClientes(){
    //FUNCION GET
        $.ajax({
            url : 'https://g54c002f2a8054d-knkzptnm2vm3gb5r.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'GET',
            dataType : 'json',

            success : function(clientes) {
                let cs=clientes.items;
                $("#listaClientes").empty();
                for(i=0; i<cs.length; i++) {
                    $("#listaClientes").append(cs[i].id+" : <b>"+cs[i].name+"</b> "+cs[i].email+" "+cs[i].age+" ");
                    
                    $("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button></br></br>")

                }
             // console.log(clientes);
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            }
            
        });
}

function guardarCliente(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let mailCliente=$("#mailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:mailCliente,
        age:edad
    };

    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://g54c002f2a8054d-knkzptnm2vm3gb5r.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'POST',
        dataType : 'json',
        data:dataToSend,
        contentType:'application/json',

        complete : function(clientes) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },

        error : function(xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete : function(){
            leerClientes();
        }
        
    });
}

function editarCliente(){

    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let mailCliente=$("#mailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:mailCliente,
        age:edad
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g54c002f2a8054d-knkzptnm2vm3gb5r.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'PUT',
        data:dataToSend,
        contentType:'application/json',

        success : function(clientes) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },

        error : function(xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete : function(){
            leerClientes();
        }
        
    });




}

function borrarCliente(idCliente){

    let data={
        id:idCliente,
   };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g54c002f2a8054d-knkzptnm2vm3gb5r.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'DELETE',
        data:dataToSend,
        contentType:'application/json',

        success : function(clientes) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");
        },

        error : function(xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete : function(){
            leerClientes();
        }
        
    });




}


//MESSAGE
function leerMensajes(){
    //FUNCION GET
        $.ajax({
            url : 'https://g54c002f2a8054d-knkzptnm2vm3gb5r.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
            type : 'GET',
            dataType : 'json',

            success : function(mensajes) {
                let ct=mensajes.items;
                $("#listaMensajes").empty();
                for(i=0; i<ct.length; i++) {
                    $("#listaMensajes").append(ct[i].id+" : <b>"+ct[i].messagetext+" ");
                    $("#listaMensajes").append("<button onclick='borrarMensaje("+ct[i].id+")'>Borrar</button></br></br>")

                }
             // console.log(clientes);
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            }
            
        });
}

function guardarMensaje(){
    //FUNCION POST
    let idMensaje=$("#idMensaje").val();
    let textoMensaje=$("#textoMensaje").val();
    
    let data={
        id:idMensaje,
        messagetext:textoMensaje,
    };

    let dataToSend=JSON.stringify(data);
    

    $.ajax({
        url : 'https://g54c002f2a8054d-knkzptnm2vm3gb5r.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'POST',
        dataType : 'json',
        data:dataToSend,
        contentType:'application/json',

        complete : function(mensajes) {
            $("#idMensaje").val("");
            $("#textoMensaje").val("");
        },

        error : function(xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete : function(){
            leerMensajes();
        }
        
    });
}

function borrarMensaje(idMensaje){

    let data={
        id:idMensaje,
   };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g54c002f2a8054d-knkzptnm2vm3gb5r.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'DELETE',
        data:dataToSend,
        contentType:'application/json',

        success : function(mensajes) {
            $("#idMensaje").val("");
            $("#textoMensaje").val("");
        },

        error : function(xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete : function(){
            leerMensajes();
        }
        
    });

}

function editarMensajes(){

    let idMensaje=$("#idMensaje").val();
    let textoMensaje=$("#textoMensaje").val();
    
    let data={
        id:idMensaje,
        messagetext:textoMensaje,
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'https://g54c002f2a8054d-knkzptnm2vm3gb5r.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'PUT',
        data:dataToSend,
        contentType:'application/json',

        success : function(mensajes) {
            $("#idMensaje").val("");
            $("#textoMensaje").val("");
        },

        error : function(xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete : function(){
            leerMensajes();
        }
        
    });

}