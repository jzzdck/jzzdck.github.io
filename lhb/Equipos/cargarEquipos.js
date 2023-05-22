var equipos = ['{"tag":"rK","nombre":"Riki Forever of Chacotown","escudo":"https://cdn.discordapp.com/attachments/1098966493196206122/1098966494207029348/rk_2.png","lema":"LA BARRA DE MIAME","jugs":["svsh (C)","kkck (J)","blud (S)","erwin! (J)","seven (J)","Joakito (J)","tomm (J)"],"camis":["/colors red 60 F7D69C 050505 3B3B3B (T)","/colors red 0 000000 FFFFFF E0E0E0 FFFFFF (A)","/colors red 60 557364 81D6AE C9FFE6  (A)"],"palmares":{},"pj":0,"pg":0,"pp":0,"gf":0,"gc":0}']

var cargarEquipos = function() {
	var teambox = document.getElementById("teambox");

	for (var i = 0; i<equipos.length; i++) {
		var obj_equipo = JSON.parse(equipos[i]);
		teambox.innerHTML += `
			<div class="items" onclick=cargarEquipo(`+ i +`)>
				<div style="padding:3%"><img class="img" src="`+obj_equipo.escudo+`"></img></div>
				<div style="text-align:center">`+ obj_equipo.tag +`</div>
			</div>
		`;
	}
}

function cargarEquipo(indice) {
	var teambox = document.getElementById("teambox");
	teambox.className = "teamcard";
	var equipo = JSON.parse(equipos[indice]);
	var cap = equipo.jugs.find(jug=>jug.slice(-3) == '(C)');
	var subcap = equipo.jugs.find(jug=>jug.slice(-3) == '(S)');
	var jugs = equipo.jugs.filter(jug=>jug!=cap && jug!=subcap);
	var jugs_html="<ul style=\"margin-left:3%\">";
	jugs.forEach(jug=> {
		jugs_html += "<li style=\"font-weight:300\">"+jug.slice(0,-4)+"</li>";
	});
	jugs_html+="</ul>";
	
	teambox.innerHTML = `
		<div class="items" style="height:89%;width:40%">
			<text class="teamname">`+ equipo.nombre +` </text>
			<div style="padding:5%"><img class="img" src="`+equipo.escudo+`"></img></div>
			<text style="text-align:center;padding:5%;font-weight:200;font-size:1.3vw;font-style:italic; letter-spacing: 3px"> "`+ equipo.lema +`" </text>
		</div>
		<div class="teamdata">
			<h1 class="simple_header">CAPITANES</h1>
				<ul style="margin-left:3%">
					<li style="font-weight:300">`
						+ cap +`
					</li>
					<li style="font-weight:300">`
					+ subcap +`
					</li>
				</ul>
			<h1 class="simple_header">JUGADORES</h1>`
				+jugs_html+`
			<h1 class="simple_header">ESTADISTICAS</h1>
				<table>
					<tr>
					<th>Partidos Jugados</th>
					<td>`+ equipo.pj +`</td>
					</tr>
					<tr>
					<th>Ganados</th>
					<td>`+ equipo.pg+`</td>
					</tr>
					<tr>
					<th>Perdidos</th>
					<td>`+ equipo.pp +`</td>
					</tr>
					<tr>
					<th>Empatados</th>
					<td>`+ (equipo.pj-equipo.pg-equipo.pp) +`</td>
					</tr>
					<tr>
					<th>Goles a Favor</th>
					<td>`+ equipo.gf +`</td>
					</tr>
					<tr>
					<th>Goles en Contra</th>
					<td>`+ equipo.gc +`</td>
					</tr>
					<tr>
					<th>Diferencia de goles</th>
					<td>`+ (equipo.gf-equipo.gc) +`</td>
					</tr>
					<tr>
					<th>Porcentaje de Victorias</th>
					<td>`+ (equipo.pj != 0 ? equipo.pg/equipo.pj * 100 : 0) +`%</td>
					</tr>
					<tr>
				</table>
				
			<h1 class="simple_header">PALMARES</h1>
		</div>
	`;
}

window.onload = cargarEquipos;


