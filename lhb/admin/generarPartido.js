var goles = [ new Object(), new Object() ];
var asis = [ new Object(), new Object() ];
var goles_display = "";
var ultimoAgregado = null;

function validarTiempo(tiempo) {
	if (tiempo.search(":") == -1) {
		alert("Falta un ':' en el tiempo");
		return false;
	}
	
	var spl = tiempo.split(":");

	if (spl.length != 2) {
		alert("Formato incorrecto en el tiempo. Ejemplo de tiempo: 3:42");
		return false;
	}

	var minutos = Number(spl[0]);
	if (minutos == null || minutos < 0) {
		alert("Minutos mal ingresados, debe ser un numero mayor o igual que 0");
		return false;
	}

	var segundos = Number(spl[1]);
	if (segundos == null || segundos < 0 || segundos >=60) {
		alert("Segundos mal ingresados, debe ser un numero entre 0 y 59");
		return false;
	}

	return true;
}

function agregarGol() {
	var local = document.getElementById('local').value;
	var visitante = document.getElementById('visitante').value;
	
	var tiempo = document.getElementById('tiempo').value;
	if (tiempo == "") {
		alert("No se informo un tiempo");
		return;
	} else if (!validarTiempo(tiempo)) {
		return;
	}

	var goleador = document.getElementById('goleador').value;
	if (goleador == "") {
		alert("No se informo un goleador");
		return;
	}

	var en_contra = document.getElementById('en_contra').checked;
	if (en_contra) {
		goleador += " (E.C)";
	}

	var cual;
	var indice_cual;
	if (document.getElementById('check_loc').checked) {
		cual = local;
		indice_cual = 0;
	} else if (document.getElementById('check_vis').checked) {
		cual = visitante;
		indice_cual = 1;
	} else {
		alert("Gol de local o visitante?");
		return;
	}
	
	var mensaje = "Gol de " + cual + ": " + goleador;
	if (goles[indice_cual][goleador] == null) {
		goles[indice_cual][goleador] = [];
	}

	goles[indice_cual][goleador].push(tiempo);
	
	var asistidor = document.getElementById('asistidor').value;
	if (asistidor != "" && !en_contra) {
		mensaje += ", asistidor: " + asistidor;

		if (asis[indice_cual][asistidor] == null) {
			asis[indice_cual][asistidor] = [];
		}

		asis[indice_cual][asistidor].push(tiempo);
	}

	mensaje += " ("+tiempo+")"
	goles_display += mensaje + "\n";
	document.getElementById("lista_goles").innerHTML = goles_display;

	ultimoAgregado = {
		indice: indice_cual,
		goleador: goleador,
		asistidor: asistidor
	}
}

function eliminarUltimoGol() {
	if (ultimoAgregado == null || goles_display == "") {
		alert("Todavia no se agrego un gol");
		return;
	}

	goles[ultimoAgregado.indice][ultimoAgregado.goleador].pop();
	if (ultimoAgregado.asistidor != "") {
		asis[ultimoAgregado.indice][ultimoAgregado.asistidor].pop();
	}

	goles_display = goles_display.split('\n');
	goles_display.pop();
	goles_display.pop();
	goles_display.join('\n');
	document.getElementById("lista_goles").innerHTML = goles_display;
}

function nuevoPartido() {
	goles = [ new Object(), new Object() ];
	asis = [ new Object(), new Object() ];
	goles_display = "";
	ultimoAgregado = null;
	document.getElementById("lista_goles").innerHTML = "";
}

function guardarPartido() {
	var local = document.getElementById('local').value;
	var visitante = document.getElementById('visitante').value;
	var resultado = Object.keys(goles[0]).length + " - " + Object.keys(goles[1]).length;
	
	var partido = {
		fecha: document.getElementById('fecha').value,
		local: local,
		visitante: visitante,
		goles: goles,
		asis: asis,
		resultado: resultado
	};

	alert("PARTIDO GENERADO: " + JSON.stringify(partido));
}
