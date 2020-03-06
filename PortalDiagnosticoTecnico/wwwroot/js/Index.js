var elEstilo = 1;
var idUsuario = "";
var idDireccionUsuario = "";
var llave_internet = 0;
var llave_video = 0;
var llave_telefonia = 0;
var llave_telefonia_movil = 0;

$(document).ready(function () {
    armarEstilo(elEstilo);

    //                ActualizarEstado();

    $("#cmbTelefonos").val($("#hiddenTelefono").val());
    $("#cmbMails").val($("#hiddenMail").val());

    $(document).keydown(function (e) {
        if (e.keyCode == 38) {
            if (elEstilo < 5)
                elEstilo = elEstilo + 1;
            armarEstilo(elEstilo);
        }
        if (e.keyCode == 40 && elEstilo > 1) {
            elEstilo = elEstilo - 1;
            armarEstilo(elEstilo);
        }
    });

    altoDisponible = $(window).height();
    altoHeader = $("#elHeader").height();
    altoDisponible = altoDisponible - altoHeader - 30;

    $("#sideBarReducido").css('height', altoDisponible + "px");
    $("#sideBarExpandido").css('height', altoDisponible + "px");
    $("#divFrame").css('height', altoDisponible + "px");

    $(".video_padre").click(function () {
        if ($(".video_hijo").hasClass('d-none')) {
            $(".esHijo").removeClass('d-block').addClass('d-none');
            $(".internet_hijo").removeClass('d-block').addClass('d-none');
            $(".telefonia_hijo").removeClass('d-block').addClass('d-none');
            $(".telefoniaMovil_hijo").removeClass('d-block').addClass('d-none');
            $(".video_hijo").removeClass('d-none').addClass('d-block');

            //                $(".esHijo_telefonia").removeClass('d-block').addClass('d-none');
            //                $(".esHijo_telefoniaMovil").removeClass('d-block').addClass('d-none');
        }
        else {
            switch (llave_video) {
                case 0:
                    $(".video_hijo").removeClass('d-block').addClass('d-none');
                    break;
                case 1:
                    if ($("#divHijoFlow").hasClass('d-none'))
                        mostrarWorkflow('Flow');
                    else
                        $("#divHijoFlow").removeClass('d-block').addClass('d-none');
                    break;
                case 2:
                    if ($("#divHijoFlowApp").hasClass('d-none'))
                        mostrarWorkflow('FlowApp');
                    else
                        $("#divHijoFlowApp").removeClass('d-block').addClass('d-none');
                    break;
            }
            llave_video = 0;
        }
    });

    $(".internet_padre").click(function () {
        if ($(".internet_hijo").hasClass('d-none')) {
            $(".esHijo").removeClass('d-block').addClass('d-none');
            $(".video_hijo").removeClass('d-block').addClass('d-none');
            $(".telefonia_hijo").removeClass('d-block').addClass('d-none');
            $(".telefoniaMovil_hijo").removeClass('d-block').addClass('d-none');
            $(".internet_hijo").removeClass('d-none').addClass('d-block');
            //                $(".telefonia_hijo").removeClass('d-block').addClass('d-none');
            //                $(".telefoniaMovil_hijo").removeClass('d-block').addClass('d-none');
        }
        else
        {
            switch (llave_internet) {
                case 0:
                    $(".internet_hijo").removeClass('d-block').addClass('d-none');
                    break;
                case 1:
                    if ($("#divHijoInternetSagem").hasClass('d-none'))
                        mostrarWorkflow('Sagem');
                    else
                        $("#divHijoInternetSagem").removeClass('d-block').addClass('d-none');
                    break;
                case 2:
                    if ($("#divHijoInternetHuawei").hasClass('d-none'))
                        mostrarWorkflow('Huawei');
                    else
                        $("#divHijoInternetHuawei").removeClass('d-block').addClass('d-none');
                    break;
                case 3:
                    if ($("#divHijoInternetWifi").hasClass('d-none'))
                        mostrarWorkflow('Wifi');
                    else
                        $("#divHijoInternetWifi").removeClass('d-block').addClass('d-none');
                    break;
            }
            llave_internet = 0;
        }

    });

    $(".telefonia_padre").click(function () {
        if ($(".telefonia_hijo").hasClass('d-none')) {
            $(".esHijo").removeClass('d-block').addClass('d-none');
            $(".internet_hijo").removeClass('d-block').addClass('d-none');
            $(".video_hijo").removeClass('d-block').addClass('d-none');
            $(".telefoniaMovil_hijo").removeClass('d-block').addClass('d-none');
            $(".telefonia_hijo").removeClass('d-none').addClass('d-block');
        }
        else {
            switch (llave_telefonia) {
                case 1:
                    if ($(".telefonia_hijo").hasClass('d-none'))
                        mostrarWorkflow('Telefonia');
                    else {
                        $(".telefonia_hijo").removeClass('d-block').addClass('d-none');
                        $("#divHijoTelefonia").removeClass('d-block').addClass('d-none');
                    }
                    break;
                case 2:
                    if ($("#divHijoTelefonia").hasClass('d-none'))
                        mostrarWorkflow('Telefonia');
                    else
                        $("#divHijoTelefonia").removeClass('d-block').addClass('d-none');
                    break;
            }
            llave_telefonia = 0;
        }
    });

    $(".telefoniaMovil_padre").click(function () {
        if ($(".telefoniaMovil_hijo").hasClass('d-none')) {
            $(".esHijo").removeClass('d-block').addClass('d-none');
            $(".internet_hijo").removeClass('d-block').addClass('d-none');
            $(".video_hijo").removeClass('d-block').addClass('d-none');
            $(".telefonia_hijo").removeClass('d-block').addClass('d-none');
            $(".telefoniaMovil_hijo").removeClass('d-none').addClass('d-block');
        }
        else {
            switch (llave_telefoniaMovil) {
                case 1:
                    if ($(".telefoniaMovil_hijo").hasClass('d-none'))
                        mostrarWorkflow('TelefoniaMovil');
                    else {
                        $(".telefoniaMovil_hijo").removeClass('d-block').addClass('d-none');
                        $("#divHijoTelefoniaMovil").removeClass('d-block').addClass('d-none');
                    }
                    break;
                case 2:
                    if ($("#divHijoTelefoniaMovil").hasClass('d-none'))
                        mostrarWorkflow('TelefoniaMovil');
                    else
                        $("#divHijoTelefoniaMovil").removeClass('d-block').addClass('d-none');
                    break;
            }
            llave_telefoniaMovil = 0;
        }
    });
})

function armarEstilo(cual) {
    switch (cual) {
        case 1:
            $(".elFondo").removeClass('elFondo_2').addClass('elFondo_1');
            $("#elHeader").removeClass('elDegradado_2').addClass('elDegradado_1');
            $(".usaSubtitulo").removeClass('subTitulo_2').addClass('subTitulo_1');
            $(".usaSubtituloReducido").removeClass('subTituloReducido_2').addClass('subTituloReducido_1');
            $(".usaDetalle").removeClass('detalle_2').addClass('detalle_1');
            $(".usaDetalleTitulo").removeClass('detalleTitulo_2').addClass('detalleTitulo_1');
            $(".elSidebar").removeClass('elSidebar_2').addClass('elSidebar_1');
            $(".submenu").removeClass('submenu_2').addClass('submenu_1');
            $(".usaColorIconos").removeClass('colorIconos_2').addClass('colorIconos_1');
            $(".laSombra").addClass('sombra_1');
            break;
        case 2:
            $(".elFondo").removeClass('elFondo_1').removeClass('elFondo_3').addClass('elFondo_2');
            $("#elHeader").removeClass('elDegradado_1').removeClass('elDegradado_3').addClass('elDegradado_2');
            $(".usaSubtitulo").removeClass('subTitulo_1').removeClass('subTitulo_3').addClass('subTitulo_2');
            $(".usaSubtituloReducido").removeClass('subTituloReducido_1').removeClass('subTituloReducido_3').addClass('subTituloReducido_2');
            $(".usaDetalle").removeClass('detalle_1').removeClass('detalle_3').addClass('detalle_2');
            $(".usaDetalleTitulo").removeClass('detalleTitulo_1').removeClass('detalleTitulo_3').addClass('detalleTitulo_2');
            $(".elSidebar").removeClass('elSidebar_1').removeClass('elSidebar_3').addClass('elSidebar_2');
            $(".submenu").removeClass('submenu_1').removeClass('submenu_3').addClass('submenu_2');
            $(".usaColorIconos").removeClass('colorIconos_1').removeClass('colorIconos_3').addClass('colorIconos_2');
            break;
        case 3:
            $(".elFondo").removeClass('elFondo_2').removeClass('elFondo_4').addClass('elFondo_3');
            $("#elHeader").removeClass('elDegradado_2').removeClass('elDegradado_4').addClass('elDegradado_3');
            $(".usaSubtitulo").removeClass('subTitulo_2').removeClass('subTitulo_4').addClass('subTitulo_3');
            $(".usaSubtituloReducido").removeClass('subTituloReducido_2').removeClass('subTituloReducido_4').addClass('subTituloReducido_3');
            $(".usaDetalle").removeClass('detalle_2').removeClass('detalle_4').addClass('detalle_3');
            $(".usaDetalleTitulo").removeClass('detalleTitulo_2').removeClass('detalleTitulo_4').addClass('detalleTitulo_3');
            $(".elSidebar").removeClass('elSidebar_2').removeClass('elSidebar_4').addClass('elSidebar_3');
            $(".submenu").removeClass('submenu_2').removeClass('submenu_4').addClass('submenu_3');
            $(".usaColorIconos").removeClass('colorIconos_2').removeClass('colorIconos_4').addClass('colorIconos_3');
            break;
        case 4:
            $(".elFondo").removeClass('elFondo_3').removeClass('elFondo_5').addClass('elFondo_4');
            $("#elHeader").removeClass('elDegradado_3').removeClass('elDegradado_5').addClass('elDegradado_4');
            $(".usaSubtitulo").removeClass('subTitulo_3').removeClass('subTitulo_5').addClass('subTitulo_4');
            $(".usaSubtituloReducido").removeClass('subTituloReducido_3').removeClass('subTituloReducido_5').addClass('subTituloReducido_4');
            $(".usaDetalle").removeClass('detalle_3').removeClass('detalle_5').addClass('detalle_4');
            $(".usaDetalleTitulo").removeClass('detalleTitulo_3').removeClass('detalleTitulo_5').addClass('detalleTitulo_4');
            $(".elSidebar").removeClass('elSidebar_3').removeClass('elSidebar_5').addClass('elSidebar_4');
            $(".submenu").removeClass('submenu_3').removeClass('submenu_5').addClass('submenu_4');
            $(".usaColorIconos").removeClass('colorIconos_3').removeClass('colorIconos_5').addClass('colorIconos_4');
            break;
        case 5:
            $(".elFondo").removeClass('elFondo_4').addClass('elFondo_5');
            $("#elHeader").removeClass('elDegradado_4').addClass('elDegradado_5');
            $(".usaSubtitulo").removeClass('subTitulo_4').addClass('subTitulo_5');
            $(".usaSubtituloReducido").removeClass('subTituloReducido_4').addClass('subTituloReducido_5');
            $(".usaDetalle").removeClass('detalle_4').addClass('detalle_5');
            $(".usaDetalleTitulo").removeClass('detalleTitulo_4').addClass('detalleTitulo_5');
            $(".elSidebar").removeClass('detalle_4').addClass('elSidebar_5');
            $(".submenu").removeClass('submenu_4').addClass('submenu_5');
            $(".usaColorIconos").removeClass('colorIconos_4').addClass('colorIconos_5');
            break;
    }
}

function rearmarPantalla(como) {
    $("#divFrame").css('visibility', 'hidden');
    $("#divFrame").removeClass('col-6').removeClass('col-8').removeClass('col-9').addClass('col-11');

    $("#tablaVideo").removeClass('d-block').addClass('d-none');
    $("#tablaInternet").removeClass('d-block').addClass('d-none');
    $(".telefonia_hijo").removeClass('d-block').addClass('d-none');
    $(".telefoniaMovil_hijo").removeClass('d-block').addClass('d-none');

    switch (como) {
        case "reducido":
            $("#sidebarExpandido").removeClass('d-block').addClass('d-none');
            $("#tablaVideo").removeClass('d-block').addClass('d-none');
            $("#tablaInternet").removeClass('d-block').addClass('d-none');
            $(".esHijo").removeClass('d-block').addClass('d-none');
            $("#sidebarReducido").removeClass('d-none').addClass('d-block');
            break;
        case "expandido":
            $("#sidebarReducido").removeClass('d-block').addClass('d-none');
            $("#sidebarExpandido").removeClass('d-none').addClass('d-block');
            $("#divFrame").removeClass('col-6').removeClass('col-8').removeClass('col-11').addClass('col-9');
            break;
        case "expandidoVideo":
            $("#sidebarReducido").removeClass('d-block').addClass('d-none');
            $("#sidebarExpandido").removeClass('d-none').addClass('d-block');
            $("#tablaVideo").removeClass('d-none').addClass('d-block');
            break;
        case "expandidoInternet":
            $("#sidebarReducido").removeClass('d-block').addClass('d-none');
            $("#sidebarExpandido").removeClass('d-none').addClass('d-block');
            $("#tablaInternet").removeClass('d-none').addClass('d-block');
            break;
        case "expandidoTelefonia":
            $("#sidebarReducido").removeClass('d-block').addClass('d-none');
            $("#sidebarExpandido").removeClass('d-none').addClass('d-block');
            $(".telefonia_hijo").removeClass('d-none').addClass('d-block');
            break;
        case "expandidoTelefoniaMovil":
            $("#sidebarReducido").removeClass('d-block').addClass('d-none');
            $("#sidebarExpandido").removeClass('d-none').addClass('d-block');
            $(".telefoniaMovil_hijo").removeClass('d-none').addClass('d-block');
            break;
        case "ejecucion":
            $("#sidebarReducido").removeClass('d-none').addClass('d-block');
            $("#sidebarExpandido").removeClass('d-block').addClass('d-none');
            $(".esHijo").removeClass('d-block').addClass('d-none');
            break;
    }
}

function mostrarWorkflow(cual) {
    $("#divFrame").css('visibility', 'hidden');
    switch (cual) {
        case 'Sagem':     // >Internet>Sagem
            $("#divHijoInternetSagem").removeClass('d-none').addClass('d-block');
            $("#divHijoInternetHuawei").removeClass('d-block').addClass('d-none');
            $("#divHijoInternetWifi").removeClass('d-block').addClass('d-none');
            $("#divHijoFlow").removeClass('d-block').addClass('d-none');
            $("#divHijoFlowApp").removeClass('d-block').addClass('d-none');
            $("#divHijoTelefonia").removeClass('d-block').addClass('d-none');
            $("#divHijoTelefoniaMovil").removeClass('d-block').addClass('d-none');
            break;
        case "Huawei":    // >Internet>Huawei
            $("#divHijoInternetHuawei").removeClass('d-none').addClass('d-block');
            $("#divHijoInternetSagem").removeClass('d-block').addClass('d-none');
            $("#divHijoInternetWifi").removeClass('d-block').addClass('d-none');
            $("#divHijoFlow").removeClass('d-block').addClass('d-none');
            $("#divHijoFlowApp").removeClass('d-block').addClass('d-none');
            $("#divHijoTelefonia").removeClass('d-block').addClass('d-none');
            $("#divHijoTelefoniaMovil").removeClass('d-block').addClass('d-none');
            break;
        case "Wifi":     // >Internet>Wifi
            $("#divHijoInternetWifi").removeClass('d-none').addClass('d-block');
            $("#divHijoInternetSagem").removeClass('d-block').addClass('d-none');
            $("#divHijoInternetHuawei").removeClass('d-block').addClass('d-none');
            $("#divHijoFlow").removeClass('d-block').addClass('d-none');
            $("#divHijoFlowApp").removeClass('d-block').addClass('d-none');
            $("#divHijoTelefonia").removeClass('d-block').addClass('d-none');
            $("#divHijoTelefoniaMovil").removeClass('d-block').addClass('d-none');
            break;
        case "Flow":   // >Video>Flow
            $("#divHijoFlow").removeClass('d-none').addClass('d-block');
            $("#divHijoFlowApp").removeClass('d-block').addClass('d-none');
            $("#divHijoInternetHuawei").removeClass('d-block').addClass('d-none');
            $("#divHijoInternetSagem").removeClass('d-block').addClass('d-none');
            $("#divHijoInternetWifi").removeClass('d-block').addClass('d-none');
            $("#divHijoTelefonia").removeClass('d-block').addClass('d-none');
            $("#divHijoTelefoniaMovil").removeClass('d-block').addClass('d-none');
            break;
        case "FlowApp":   // >Video>FlowApp
            $("#divHijoFlowApp").removeClass('d-none').addClass('d-block');
            $("#divHijoFlow").removeClass('d-block').addClass('d-none');
            $("#divHijoInternetHuawei").removeClass('d-block').addClass('d-none');
            $("#divHijoInternetSagem").removeClass('d-block').addClass('d-none');
            $("#divHijoInternetWifi").removeClass('d-block').addClass('d-none');
            $("#divHijoTelefonia").removeClass('d-block').addClass('d-none');
            $("#divHijoTelefoniaMovil").removeClass('d-block').addClass('d-none');
            break;
        case "Telefonia":
            $("#divHijoTelefonia").removeClass('d-none').addClass('d-block');
            $("#divHijoInternetHuawei").removeClass('d-block').addClass('d-none');
            $("#divHijoInternetSagem").removeClass('d-block').addClass('d-none');
            $("#divHijoInternetWifi").removeClass('d-block').addClass('d-none');
            $("#divHijoFlow").removeClass('d-block').addClass('d-none');
            $("#divHijoFlowApp").removeClass('d-block').addClass('d-none');
            $("#divHijoTelefoniaMovil").removeClass('d-block').addClass('d-none');
            break;
        case "TelefoniaMovil":
            $("#divHijoTelefoniaMovil").removeClass('d-none').addClass('d-block');
            $("#divHijoInternetHuawei").removeClass('d-block').addClass('d-none');
            $("#divHijoInternetSagem").removeClass('d-block').addClass('d-none');
            $("#divHijoInternetWifi").removeClass('d-block').addClass('d-none');
            $("#divHijoTelefonia").removeClass('d-block').addClass('d-none');
            $("#divHijoFlow").removeClass('d-block').addClass('d-none');
            $("#divHijoFlowApp").removeClass('d-block').addClass('d-none');
            break;
    }
    //            $("#sidebarWorkflow").removeClass('d-none').addClass('d-block');
}

function ejecutar(cual) {
    rearmarPantalla('ejecucion');
    $("#divFrame").css('visibility', 'visible');
    switch (cual) {
        case 'firmware':
            $('#divFrame-content').removeClass('d-block').addClass('d-none');
            $('#el_iframe').removeClass('d-none').addClass('d-block');
            $("#el_iframe").attr('src', "https://webgestionmoviltesting/consulta_WF.aspx?signed=true&legajo=wdi585714&wf=HC-CPEWifiOptimize");
            break;
        case 'stbip_auto':
            $('#divFrame-content').removeClass('d-block').addClass('d-none');
            $('#el_iframe').removeClass('d-none').addClass('d-block');
            $("#el_iframe").attr('src', "https://webgestionmoviltesting/consulta_WF.aspx?signed=true&legajo=wdi585714&wf=HC-CPEWifiOptimize");
            break;
        case 'reinicio':
            $('#divFrame-content').removeClass('d-block').addClass('d-none');
            $('#el_iframe').removeClass('d-none').addClass('d-block');
            $("#el_iframe").attr('src', "https://webgestionmoviltesting/consulta_WF.aspx?signed=true&legajo=wdi585714&wf=HC-CPEWifiOptimize");
            break;
        case 'reinicio_fabrica':
            $('#divFrame-content').removeClass('d-block').addClass('d-none');
            $('#el_iframe').removeClass('d-none').addClass('d-block');
            $("#el_iframe").attr('src', "https://webgestionmoviltesting/consulta_WF.aspx?signed=true&legajo=wdi585714&wf=HC-CPEWifiOptimize");
            break;
        case 'general':
            $('#divFrame-content').removeClass('d-block').addClass('d-none');
            $('#el_iframe').removeClass('d-none').addClass('d-block');
            $("#el_iframe").attr('src', "https://webgestionmoviltesting/consulta_WF.aspx?signed=true&legajo=wdi585714&wf=HC-CPEWifiOptimize");
            break;
        case 'stbip_trouble':
            $('#divFrame-content').removeClass('d-block').addClass('d-none');
            $('#el_iframe').removeClass('d-none').addClass('d-block');
            $("#el_iframe").attr('src', "https://webgestionmoviltesting/consulta_WF.aspx?signed=true&legajo=wdi585714&wf=STBIP_troubleshooting");
            break;
        case 'adm_wifi':
            $('#divFrame-content').removeClass('d-block').addClass('d-none');
            $('#el_iframe').removeClass('d-none').addClass('d-block');
            $("#el_iframe").attr('src', "https://webgestionmoviltesting/Consultas_Modem_HDM.aspx?signed=true&legajo=wdi585714");
            break;
        case 'adm_huawei':
            $('#divFrame-content').removeClass('d-block').addClass('d-none');
            $('#el_iframe').removeClass('d-none').addClass('d-block');
            $("#el_iframe").attr('src', "https://webgestionmoviltesting/consulta_WF.aspx?signed=true&legajo=wdi585714&wf=HC-CPEWifiOptimize");
            break;
        case 'adm_Docis':

            $('#el_iframe').removeClass('d-block').addClass('d-none');
            $('#divFrame-content').removeClass('d-none').addClass('d-block');
            $.ajax({
                type: "GET",
                url: '/Home/NXT',
                contentType: 'html',
                dataType: 'html',
                async: true,
                beforeSend: function () {
                },
                success: function (response) {
                    $('#divFrame-content').html(response);
                },
                error: function (errorThrown) {
                }
            });
            break;

        case "telefoniaMovil":

            $('#el_iframe').removeClass('d-block').addClass('d-none');
            $('#divFrame-content').removeClass('d-none').addClass('d-block');

            $.ajax({
                type: "GET",
                url: '/Home/TelefoniaMovil',
                contentType: 'html',
                dataType: 'html',
                async: true,
                beforeSend: function () {
                },
                success: function (response) {
                    $('#divFrame-content').html(response);
                },
                error: function (errorThrown) {
                }
            });
            break;
        case "test_velocidad":
            $('#divFrame-content').removeClass('d-block').addClass('d-none');
            $('#el_iframe').removeClass('d-none').addClass('d-block');
            $("#el_iframe").attr('src', 'https://portaldiagnosticouat.telecom.com.ar/SpeedTest.html');
            break;
    }
}

function ActualizarEstado() {

    $('#btn-close-modal').click();
    var datos = { accion: 'iniciarDatosUsuario' };

    $.ajax({
        type: "GET",
        url: "https://webgestionmoviltesting/servicesAPI.aspx?servicio=DiagnosticoUnificadoTest&idSubscriber=" + idUsuario + "&domicilio=" + idDireccionUsuario,
        async: false,
        data: datos,
        dataType: 'json',
        encoding: "UTF-8",
        cache: false,
        /***** Estas son las líneas agregadas *****/
        timeout: 120000,
        beforeSend: function (xhr) {
            xhr.readystate = 1;
            $("#divEsperando").removeClass('d-none').addClass('d-block');
        },
        error: function (x, t, m) {

            $("#divEsperando").removeClass('d-block').addClass('d-none');
            $("#sidebarExpandido").removeClass('d-none').addClass('d-block');
        },
        success: function (data) {

            armarHeader(data.datosCliente, data.direccion, data.mails, data.productos, data.telefono);
        }
    });

    /**** Se inicializa todo con Iconos Grises ****/
    $("#imgReducidoVideo").attr('src', '/Files/iconGris.png');
    $("#imgVideo").attr('src', '/Files/iconGris.png');
    $("#imgReducidoInternet").attr('src', '/Files/iconGris.png');
    $("#imgInternet").attr('src', '/Files/iconGris.png');
    $("#imgReducidoTelefonia").attr('src', '/Files/iconGris.png');
    $("#imgTelefonia").attr('src', '/Files/iconGris.png');
    $("#imgReducidoTelefoniaMovil").attr('src', '/Files/iconGris.png');
    $("#imgTelefoniaMovil").attr('src', '/Files/iconGris.png');
    $("#imgServicios").attr('src', '/Files/iconGris.png');
    $("#imgReducidoServicios").attr('src', '/Files/iconGris.png');

    var datos = { accion: 'inicioWorkflow', nombre: 'abc', legajo: 'wdi585714' };

    $.ajax({
        type: "GET",
        url: "https://webgestionmoviltesting/services.aspx",
        async: true,
        data: datos,
        dataType: "json",
        encoding: "UTF-8",
        cache: false,
        /***** Estas son las líneas agregadas *****/
        timeout: 120000,
        beforeSend: function (xhr) {
            xhr.readystate = 1;
            $("#divEsperando").removeClass('d-none').addClass('d-block');
        },
        error: function (x, t, m) {
            //                    console.log("Default.aspx ActualizarEstado() Error:");
            $("#divEsperando").removeClass('d-block').addClass('d-none');
            $("#sidebarExpandido").removeClass('d-none').addClass('d-block');
        },
        success: function (data) {
            //                    console.log("Default.aspx ActualizarEstado() OK:");
            var variable = data.content;
            //$("#workflow-area").html(variable);
            if (variable != undefined) {
                var indiceInicio = variable.indexOf('<div class="content info">');
                if (indiceInicio != -1) {
                    var variable2 = variable.substr(indiceInicio + 26);
                    var indiceFin = variable2.indexOf('</div>');
                    if (indiceFin != -1) {
                        var variable3 = variable2.substr(0, indiceFin);
                        //alert(variable3);
                        var arrayEstados = variable3.split('<p>');
                        var losServicios = true;
                        for (contador = 0; contador < arrayEstados.length; contador++) {
                            var estado = arrayEstados[contador].replace('</p>', '');
                            var claveValor = estado.split('=');
                            if (claveValor[0] == "Video") {
                                if (claveValor[1].trim() == "OK") {
                                    $("#imgReducidoVideo").attr('src', '/Files/iconVerde.png');
                                    $("#imgVideo").attr('src', '/Files/iconVerde.png');
                                    $("#imgVideoFlow").attr('src', '/Files/iconVerde.png');
                                    $("#imgVideoFlowApp").attr('src', '/Files/iconVerde.png');
                                }
                                else {
                                    $("#imgReducidoVideo").attr('src', '/Files/iconRojo.png');
                                    $("#imgVideo").attr('src', '/Files/iconRojo.png');
                                    $("#imgVideoFlow").attr('src', '/Files/iconRojo.png');
                                    $("#imgVideoFlowApp").attr('src', '/Files/iconRojo.png');
                                    losServicios = false;
                                }
                            }
                            else if (claveValor[0] == "Internet") {
                                if (claveValor[1].trim() == "OK") {
                                    $("#imgReducidoInternet").attr('src', '/Files/iconVerde.png');
                                    $("#imgInternet").attr('src', '/Files/iconVerde.png');
                                    $("#imgInternetSagem").attr('src', '/Files/iconVerde.png');
                                    $("#imgInternetHuawei").attr('src', '/Files/iconVerde.png');
                                    $("#imgInternetWifi").attr('src', '/Files/iconVerde.png');
                                }
                                else {
                                    $("#imgReducidoInternet").attr('src', '/Files/iconRojo.png');
                                    $("#imgInternet").attr('src', '/Files/iconRojo.png');
                                    $("#imgInternetSagem").attr('src', '/Files/iconRojo.png');
                                    $("#imgInternetHuawei").attr('src', '/Files/iconRojo.png');
                                    $("#imgInternetWifi").attr('src', '/Files/iconRojo.png');
                                    losServicios = false;
                                }
                            }
                            else if (claveValor[0] == "Telefonia") {
                                if (claveValor[1].trim() == "OK") {
                                    $("#imgReducidoTelefonia").attr('src', '/Files/iconVerde.png');
                                    $("#imgTelefonia").attr('src', '/Files/iconVerde.png');
                                    $("#imgTelefoniaLinea").attr('src', '/Files/iconVerde.png');
                                }
                                else {
                                    $("#imgReducidoTelefonia").attr('src', '/Files/iconRojo.png');
                                    $("#imgTelefonia").attr('src', '/Files/iconRojo.png');
                                    $("#imgTelefoniaLinea").attr('src', '/Files/iconRojo.png');
                                    losServicios = false;
                                }
                            }
                            else if (claveValor[0] == "TelefoniaMovil") {
                                if (claveValor[1].trim() == "OK") {
                                    $("#imgReducidoTelefoniaMovil").attr('src', '/Files/iconVerde.png');
                                    $("#imgTelefoniaMovil").attr('src', '/Files/iconVerde.png');
                                    $("#imgTelefoniaLineaMovil").attr('src', '/Files/iconVerde.png');
                                }
                                else {
                                    $("#imgReducidoTelefoniaMovil").attr('src', '/Files/iconRojo.png');
                                    $("#imgTelefoniaMovil").attr('src', '/Files/iconRojo.png');
                                    $("#imgTelefoniaLineaMovil").attr('src', '/Files/iconRojo.png');
                                    losServicios = false;
                                }
                            }
                        }
                        if (losServicios) {
                            $("#imgServicios").attr('src', '/Files/iconVerde.png');
                            $("#imgReducidoServicios").attr('src', '/Files/iconVerde.png');
                        }
                        else {
                            $("#imgServicios").attr('src', '/Files/iconRojo.png');
                            $("#imgReducidoServicios").attr('src', '/Files/iconRojo.png');
                        }
                    }
                }
            }
            $("#divEsperando").removeClass('d-block').addClass('d-none');
            $("#sidebarExpandido").removeClass('d-none').addClass('d-block');
        }
    });
}

function armarHeader(datosCliente, datosDireccion, datosMails, datosProductos, datosTelefono) {

    if (datosCliente.Estado == 1)
        $("#spanEstadoCliente").html('Activo');
    else
        $("#spanEstadoCliente").html('');

    losDatosCliente = datosCliente.nombre + " " + datosCliente.apellido + "\r\n" + "Segmento: " + datosCliente.segmento + "\r\n" + "Subscriber: " + datosCliente.subscriber + "\r\n" + "Identificador: " + datosCliente.identificador

    $('#spanCliente').html(datosCliente.nombre + " " + datosCliente.apellido);
    $("#spanEstadoCuenta").attr('title', losDatosCliente);
    $("#spanEstadoCliente").attr('title', losDatosCliente);

    $("#header_direccion").html(datosDireccion.domicilio);
    if (datosDireccion.departmento.toUpperCase() == 'CAPITAL FEDERAL')
        $("#header_localidad_pcia").html(datosDireccion.departmento);
    else
        $("#header_localidad_pcia").html(datosDireccion.departmento + " - " + datosDireccion.provincia);
    $("#cmbMails").children().remove();
    for (i = 0; i < datosMails.length; i++) {
        $("#cmbMails").append("<option value='" + i + "'>" + datosMails[i].mail + "</option>");
    }
    $("#cmbTelefonos").children().remove();
    for (i = 0; i < datosTelefono.length; i++) {
        $("#cmbTelefonos").append("<option value='" + i + "'>" + datosTelefono[i].codigoPais + " " + datosTelefono[i].codigoArea + " " + datosTelefono[i].telefono + "</option>");
    }

    for (i = 0; i < datosProductos.length; i++) {
        if (datosProductos[i].antiguedad != 'undefined' && datosProductos[i].antiguedad != null)
            $("#spanAntiguedad").html("Cliente por " + datosProductos[i].antiguedad + " años");
    }

    /***** vk 14/02/2020 ******/

    var laCiudad = "";

    if (datosDireccion.ciudad.toUpperCase() == 'CAPITAL FEDERAL') {
        $("#header_localidad_pcia").html(datosDireccion.departmento);
        laCiudad = "Ciudad Autonoma de Buenos Aires";
    }
    else {
        $("#header_localidad_pcia").html(datosDireccion.ciudad + " - " + datosDireccion.provincia);
        laCiudad = datosDireccion.ciudad;
    }
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + laCiudad + ",AR&lang=es&units=metric&APPID=4abe765eff8302e3d59269d800d12af7";
    $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: 'json',
        encoding: "UTF-8",  
        cache: false,
        error: function (x, t, m) {
        },
        success: function (data) {
            var iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            $("#imgIcon").attr('src', iconurl);
            $("#spanCiudad").html(datosDireccion.ciudad);
            $("#spanEstadoGeneral").html(data.weather[0].description);
            $("#spanTemperatura_min").html(Math.round(parseFloat(data.main.temp_min)) + "°");
            $("#spanTemperatura_max").html(Math.round(parseFloat(data.main.temp_max)) + "°");
        }
    });
/*************************/
}

function seleccionaTelefono() {
    $("#hiddenTelefono").val($("#cmbTelefonos").val());
}
function seleccionaMail() {
    $("#hiddenMail").val($("#cmbMails").val());
    //             $("#Form1").submit();
}

function BuscarDatos() {
    $("#txtDNI").val("23829089");
    $("#datos").html("");
    $("#idModal").modal('show');

}

function ObtenerDatosCliente() {

    var dniConsulta = $("#txtDNI").val();
    var datos = "";

    $.ajax({
        type: "GET",
        url: "https://webgestionmoviltesting/servicesAPI.aspx?servicio=cliente&dni=" + dniConsulta,
        async: false,
        data: datos,
        dataType: 'json',
        encoding: "UTF-8",
        cache: false,
        /***** Estas son las líneas agregadas *****/
        timeout: 120000,
        beforeSend: function (xhr) {
            xhr.readystate = 1;
            $("#divEsperando").removeClass('d-none').addClass('d-block');
        },
        error: function (x, t, m) {
            $("#divEsperando").removeClass('d-block').addClass('d-none');
            $("#sidebarExpandido").removeClass('d-none').addClass('d-block');
        },
        success: function (data) {
            var variable = "<br ><br ><br >";
            variable += "Nombre y Apellido:" + data.nombre + " " + data.apellido + "<br >";
            variable += "Domicilios:" + data.domicilios[0].direccion + "<br >";
            idDireccionUsuario = data.domicilios[0].id;
            idUsuario = data.id;
            $("#datos").html(variable);
        }
    });
}