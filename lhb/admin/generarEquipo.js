var jugs = new Array();
var camis = new Array();

function hay(val, arr) {
	if (arr.find(elem=>elem.slice(-3)==val) == null) {
		return false;
	} else {
		return true;
	}
}

function calcularExtra(valor) {
	if (valor=="Camiseta") {
		if (document.getElementById("titular").checked) {
			if (!hay("(T)", camis)) {
				return "(T)";
			} else {
				alert("Ya hay una camiseta titular");
				return "(A)";
			}
		} else if (document.getElementById("alternativa").checked) {
			return "(A)";
		} else {
			alert("Camiseta titular o alternativa?");
			return "";
		}
	} else if (valor=="Jugador") {
		if (document.getElementById("cap").checked) {
			document.getElementById("cap").checked = false;
			if (!hay("(C)",jugs)) {
				return "(C)";
			} else {
				alert("Ya hay un capitan");
				return "(J)";
			}
		} else if (document.getElementById("subcap").checked) {
			document.getElementById("subcap").checked = false;
			if (!hay("(S)",jugs)) {
				return "(S)";
			} else {
				alert("Ya hay un sub-capitan");
				return "(J)";
			}
		}
		
		return "(J)";
	}

	return "";
}

function agregar(valor, arr, extra) {
	var nuevo = document.getElementById(valor).value;
	if (arr.find(elem=>elem.slice(0,-4)==nuevo) != null) {
		alert(valor + " ya ingresado/a");
	} else {
		if (extra=="") return;
		arr.push(nuevo + " " + extra);
		document.getElementById(valor + "_list").innerHTML += nuevo + " " + extra + "<br>";
	}
}

function eliminar(valor, arr) {
	var a_elim = document.getElementById(valor).value;
	var val = arr.find(elem=>elem.slice(0,-4)==a_elim);
	if (val == null) {
		alert(valor + " no hallado/a");
	} else {
		arr.splice(arr.indexOf(val),1);
		document.getElementById(valor + "_list").innerHTML = arr.join("<br>");
	}
}

function validar() {
	var tag = document.getElementById("tag").value;
	if (tag == "") {
		alert("No ingreaste un tag.");
		return null;
	}

	var nombre = document.getElementById("nombre").value;
	if (nombre == "") {
		alert("Ingresa el nombre completo del equipo");
		return null;
	}

	var lema = document.getElementById("lema").value;
	var escudo = document.getElementById("escudo").value;

	const isValidUrl = urlString=> {
	  	var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
	  return !!urlPattern.test(urlString);
	}

	if (!isValidUrl(escudo)) {
		alert("URL invalida.");
		return null;
	}
	
	return {
		tag: tag,
		nombre: nombre,
		escudo: escudo,
		lema: lema,
		jugs: jugs,
		camis: camis,
		palmares: {},
		pj: 0,
		pg: 0,
		pp: 0,
		gf: 0,
		gc: 0
	};
}

function guardarEquipo() {
	var equipo = validar();

	if (equipo != null) {
		alert("Equipo Generado: " + JSON.stringify(equipo));
	}
}
