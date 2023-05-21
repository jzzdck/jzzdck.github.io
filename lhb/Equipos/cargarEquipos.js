var equipos = ['{"tag":"rK","nombre":"Riki Forever of Chacotown","escudo":"https://cdn.discordapp.com/attachments/1098966493196206122/1098966494207029348/rk_2.png","lema":"LA BARRA DE MIAME","jugs":["svsh (C)","kkck (J)","blud (S)","erwin! (J)","seven (J)","Joakito (J)","tomm (J)"],"camis":["/colors red 60 F7D69C 050505 3B3B3B (T)","/colors red 0 000000 FFFFFF E0E0E0 FFFFFF (A)","/colors red 60 557364 81D6AE C9FFE6  (A)"],"palmares":{},"pj":0,"pg":0,"gf":0,"gc":0}']

var cargarEquipos = function() {
	var teambox = document.getElementById("teambox");

	for (var i = 0; i<equipos.length; i++) {
		var obj_equipo = JSON.parse(equipos[i]);
		teambox.innerHTML += `
			<div class="items" onclick=cargarEquipo(`+ i +`)>
				<div style="padding:3%"><img class="img" src="`+obj_equipo.escudo+`"></img></div>
				<div style="text-align:center">`+ obj_equipo.nombre +`</div>
			</div>
		`;
	}
}

function cargarEquipo(indice) {
	var teambox = document.getElementById("teambox");
	teambox.innerHTML = "";
	
}

window.onload = cargarEquipos;


