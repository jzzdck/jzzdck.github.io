const local = prompt("tag Equipo Local?");
const visitante = prompt("tag Equipo visitante?");
const fecha = prompt("fecha? (1,2,3,...)");

var goles = [ new Object(), new Object() ];
var asis = [ new Object(), new Object() ];

var nuevo_gol = prompt("Ingresar gol? Y/N");
while (nuevo_gol != "N") {
	var tiempo = prompt("Ingrese tiempo del gol en formato m:ss:");
	var goleador = prompt("Ingrese quien hizo el gol: ");
	var fue_local = prompt("Gol del local? Y/N");
	if (fue_local != "Y" && fue_local != "N") {
		console.log("Y/N mal ingresado");
		continue;
	}
	
	var en_contra = prompt("En Contra? Y/N");
	if (en_contra != "Y" && en_contra != "N") {
		console.log("Y/N mal ingresado");
		continue;
	}

	var indice = (fue_local == "Y" ? 0 : 1);
	if (en_contra=="Y") {
		goleador += " (E.C)";
	} else {
		var asistidor = prompt("quien asistio? dejar vacio si nadie");

		if (asistidor != "") {
			if (asis[indice][asistidor] == null) {
				asis[indice][asistidor] = new Array(0);
			}

			asis[indice][asistidor].push(tiempo);
		}
	}

	if (goles[indice][goleador] == null) {
		goles[indice][goleador] = new Array(0);
	}
	
	goles[indice][goleador].push(tiempo);
	nuevo_gol = prompt("Ingresar gol? Y/N");
}

var partido = {
	fecha: fecha,
	local: local,
	visitante: visitante,
	goles: goles,
	asis: asis,
	resultado: "" + Object.keys(goles[0]).length + " - " + Object.keys(goles[1]).length
}

setTimeout(()=>console.log(JSON.stringify(partido)),2000);
