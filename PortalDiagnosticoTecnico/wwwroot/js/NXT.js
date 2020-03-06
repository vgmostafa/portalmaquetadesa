
$(document).ready(function () {
    if ($("#laFuncion").val() == 'Ping')
        $("#divRepeat").removeClass('d-none').addClass('d-block');
    else
        $("#divRepeat").removeClass('d-block').addClass('d-none');


    switch ($("#laFuncion").val()) {
        case "RealTimeCM":
            $("#tituloPrincipal").html("Consulta RealTimeCM");
            break;
        case "RealTimeDownData":
            $("#tituloPrincipal").html("Consulta RealTimeDownData");
            break;
        case "Ping":
            $("#tituloPrincipal").html("Consulta Ping");
            break;
        case "Reset":
            $("#tituloPrincipal").html("Consulta Reset");
            break;
        case "CustomOID":
            $("#tituloPrincipal").html("Consulta CustomOID");
            break;
    }

    $("#elBody").on('keypress', '.controlNumericoEntero', function (e) {
        if (!controlNumericoEntero(e))
            return false;
    })

})



function controlNumericoEntero(e) {  /* Acepta 0 a 9 */
    var key = e.keyCode;
    var bool = false;
    if ((key >= 48 && key <= 57))
        bool = true;
    return bool;
}


function preLeerNXT() {
    mensaje = "";
    $("#divDatos").removeClass('d-block').addClass('d-none');
    if ($("#txtCampo").val() == '' || $("#txtCampo").val() == null)
        mensaje += "Falta ingresar Nro. de Serie <br />";
    if ($("#laFuncion").val() == "Ping") {
        if ($("#txtRepeat").val() == '' || $("#txtRepeat").val() == null)
            mensaje += "Falta ingresar Repeat <br />";
    }

    if (mensaje != "") {
        $("#lblAlerta").html(mensaje);
        $("#idAlerta").removeClass('d-none').addClass('d-block');
        return;
    }
    $("#idAlerta").removeClass('d-block').addClass('d-none');

    $("#wait").removeClass('d-none').addClass('d-block');

    setTimeout(function () { leerNXT() }, 50);
}

function leerNXT() {

    var elXML = "";
    var laAccion = "";
    var parameters = "";


    switch ($("#laFuncion").val()) {
        case "RealTimeCM":
            laAccion = "ObtenerRealTimeCM";

            parameters = "cmSysDescr,cpe.cpeType,cpe.cpeStatus," +//
                "upData.frequency,upData.txPwr," +//
                "downData.frequency,downData.rxPwr," +//downData.rxPwr,downData.snr";
                "cmMacAddr,cpeMac,cpeIpAddr,cmHost,downData.rxMer,cmtsName,regStatus";

            $("#tituloPrincipal").html("Consulta RealTimeCM");
            break;
        case "RealTimeDownData":
            laAccion = "ObtenerRealTimeDownData";
            $("#tituloPrincipal").html("Consulta RealTimeDownData");
            break;
        case "Ping":
            laAccion = "Ping";
            $("#tituloPrincipal").html("CPing");
            break;
        case "Reset":
            laAccion = "Reset";
            $("#tituloPrincipal").html("Reset");
            break;
        case "CustomOID":
            laAccion = "CustomOIDPolling";
            $("#tituloPrincipal").html("CustomOID");
            break;
        case "HistoricoCM":
            laAccion = "HistoricoCM";
            $("#tituloPrincipal").html("HistoricoCM");
            break;
        case "HistoricoCMBulk":
            laAccion = "HistoricoCMBulk";
            $("#tituloPrincipal").html("HistoricoCMBulk");
            break;
        case "cmRealTimeBulk":
            laAccion = "cmRealTimeBulk";
            $("#tituloPrincipal").html("cmRealTimeBulk");
            break;

    }

    var datos = "";
    if (laAccion == 'Ping')
        datos = { accion: laAccion, serialnumber: $("#txtCampo").val(), repeat: $("#txtCampo").val(), legajo: "wdi585714" };
    else //datos = { accion: laAccion, serialnumber: $("#txtCampo").val(), secretUser: "usuario.1tzx9cCnEpW/f1FmMApkVQ==", legajo: "wdi585714", parameters: parameters };
        datos = { accion: laAccion, serialnumber: $("#txtCampo").val(), legajo: "wdi585714", parameters: parameters };
    debugger
    $.ajax({
        type: "POST",
        url: "http://localhost:60042/proxy.aspx/UpdateAsyncExample02",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(datos),

        async: true,
        cache: false,
        encoding: "UTF-8",
        dataType: "json",

        error: function (e) {
            debugger
            console.log("AjaxError:");
            console.log(e);

            $("#lblAlerta").html("No se encontraron datos de respuesta");
            $("#idAlerta").removeClass('d-none').addClass('d-block');
            $("#wait").removeClass('d-block').addClass('d-none');
        },
        success: function (data) {
            debugger
            var jdatos = JSON.parse(data.d);

            if (parseInt(data.codigo) == -1) {
                $("#lblAlerta").html(data.Status);
                $("#idAlerta").removeClass('d-none').addClass('d-block');
                $("#wait").removeClass('d-block').addClass('d-none');
            }
            else {
                debugger
                switch (laAccion) {
                    case "RealTimeCM":
                    case "RealTimeDownData":
                    case "Ping":
                    case "ObtenerRealTimeCM":

                        debugger
                        //ValidateIPv4('66.10.10.20');

                        elXML = jdatos.parameters.cmSysDescr.value;
                        $("#txtDispositivo").html(data.deviceId);
                        $("#txtTransaccion").html(data.transactionId);
                        $("#txtParametros").html(elXML);
                        debugger
                        if (jdatos.parameters.regStatus.value == "operational(8)") {
                            $("#imgEstado").attr('src', 'images/iconVerde.png');
                        }
                        else {
                            $("#imgEstado").attr('src', 'images/iconRojo.png');
                        }

                        if (elXML) {
                            //
                            var strLenght = 0;
                            var n = -1;
                            var strarray = elXML.split(';');
                            //
                            //MODEL
                            for (var i = strarray.length; i >= 0; i--) {
                                var subStr = strarray[i - 1];
                                n = subStr.indexOf("MODEL:");
                                //debugger
                                if (n != -1) {
                                    var modelo = subStr.substring(n + 6);
                                    if (modelo) {
                                        $("#txtModelo").html(modelo);
                                        break;
                                    }
                                    //debugger
                                }
                            }
                            //VENDOR
                            for (var i = strarray.length; i >= 0; i--) {
                                var subStr = strarray[i - 1];
                                n = subStr.indexOf("VENDOR:");
                                //debugger
                                if (n != -1) {
                                    var vendor = subStr.substring(n + 7);
                                    if (vendor) {
                                        $("#txtVendor").html(vendor);
                                        break;
                                    }
                                    //debugger
                                }
                            }
                            //HW_REV
                            for (var i = strarray.length; i >= 0; i--) {
                                var subStr = strarray[i - 1];
                                n = subStr.indexOf("HW_REV:");
                                //debugger
                                if (n != -1) {
                                    var version = subStr.substring(n + 7);
                                    if (version) {
                                        $("#txtVersion").html(version);
                                        break;
                                    }
                                    //debugger
                                }
                            }
                            //SW_REV
                            for (var i = strarray.length; i >= 0; i--) {
                                var subStr = strarray[i - 1];
                                n = subStr.indexOf("SW_REV:");
                                //debugger
                                if (n != -1) {
                                    var OsRev = subStr.substring(n + 7);
                                    if (OsRev) {
                                        $("#txtOsRev").html(OsRev);
                                        break;
                                    }
                                    //debugger
                                }
                            }

                            //BOOTR
                            for (var i = strarray.length; i >= 0; i--) {
                                var subStr = strarray[i - 1];
                                n = subStr.indexOf("BOOTR:");
                                //debugger
                                if (n != -1) {
                                    var OsRev = subStr.substring(n + 6);
                                    if (OsRev) {
                                        $("#txtBooTR").html(OsRev);
                                        break;
                                    }
                                    //debugger
                                }
                            }
                        } //FIN elXML

                        //cpeStatus
                        //FIN cpeStatus

                        //UpData
                        var ObjArray = jdatos.parameters.upData.values;
                        debugger
                        var ObjLength = ObjArray.length;
                        var txPwrArray = [];
                        for (var i = 0; i < ObjLength; i++) {

                            var x = ObjArray[i].parameters.txPwr.value;

                            //PwrArray.add(x);
                            //PwrArray[i] = x;
                            //parseFloat(x);
                            txPwrArray.push(parseFloat(x));
                            //debugger
                        }
                        var txPwr = Math.min.apply(null, txPwrArray);
                        if (txPwr) {
                            $("#txttxPwr").html(txPwr);
                        }
                        //Fin UpData

                        //downData
                        ObjArray = jdatos.parameters.downData.values;
                        ObjLength = ObjArray.length;
                        var rxPwrArray = [];
                        for (var i = 0; i < ObjLength; i++) {

                            var x = ObjArray[i].parameters.rxPwr.value;

                            //PwrArray.add(x);
                            //PwrArray[i] = x;
                            //parseFloat(x);
                            rxPwrArray.push(parseFloat(x));
                            //debugger
                        }
                        var rxPwr = Math.min.apply(null, rxPwrArray);
                        if (rxPwr) {
                            $("#rxttxPwr").html(rxPwr);
                        }
                        //Fin downData

                        //cmMacAddr
                        var cmMacAddr = jdatos.parameters.cmMacAddr.value;
                        debugger
                        if (cmMacAddr) {
                            $("#txtcmMacAddr").html(cmMacAddr);
                        }
                        //Fin cmMacAddr

                        //cpeMac
                        var cpeMacStr = jdatos.parameters.cpeMac.value;
                        var cpeMacArray = cpeMacStr.split(',');
                        cpeMac = cpeMacArray[0];
                        for (var i = 1; i < cpeMacArray.length; i++) {
                            cpeMac += " " + cpeMacArray[i];
                        }
                        debugger
                        if (cpeMac) {
                            $("#txtcpeMac").html(cpeMac);
                        }
                        //Fin cpeMac

                        //cmHost
                        var cmHost = jdatos.parameters.cmHost.value;
                        debugger
                        if (cmHost) {
                            $("#txtcmHost").html(cmHost);
                        }
                        //Fin cmHost

                        //cmtsName
                        var cmtsName = jdatos.parameters.cmtsName.value;
                        debugger
                        if (cmtsName) {
                            $("#txtcmtsName").html(cmtsName);
                        }
                        //Fin cmtsName

                        debugger
                        $("#divDatos").removeClass('d-none').addClass('d-block');

                        break;
                    case "Reset":

                        elXML = data.parameters['nroInterno'].value;
                        elXML = elXML.replace(/\>/g, '');
                        elXML = elXML.replace(/\</g, '');
                        $("#txtDispositivo").html(data.deviceId);
                        $("#txtTransaccion").html(data.transactionId);
                        $("#txtParametros").html(elXML);
                        $("#txtType").html(data.parameters['nroInterno'].type);
                        $("#divDatos").removeClass('d-none').addClass('d-block');
                        break;
                    case "CustomOID":
                        elXML = data.parameters['nroInterno'].values[0];
                        elXML = elXML.replace(/\>/g, '');
                        elXML = elXML.replace(/\</g, '');
                        $("#txtDispositivo").html(data.deviceId);
                        $("#txtTransaccion").html(data.transactionId);
                        $("#txtParametros").html(elXML);
                        $("#txtType").html(data.parameters['nroInterno'].type);
                        $("#divDatos").removeClass('d-none').addClass('d-block');
                        break;


                }
                $("#wait").removeClass('d-block').addClass('d-none');
            }
        }
    });
}