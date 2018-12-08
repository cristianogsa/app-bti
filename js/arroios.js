function $(elemento){
	return document.querySelector(elemento);
}

function showResult() {
	$(".resVal").classList.remove("esc");//mostra resultado
	$(".button").classList.add("esc");//esconde Profundidade
}
function showButton() {
	$(".button").classList.remove("esc");//mostra button
	$(".resVal").classList.add("esc");//esconde resultado
}
$(".button").addEventListener("click", function(){
	calcVal();
	showResult();
	calcDose();
});
$(".voltarVal").addEventListener("click", function(){
	showButton();
});

function calcVal(){
	percent = $("#porc").value;
	$("#porc").innerHTML = percent.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

	var e = $("#calhaAltura");
	var calhaAlt = Number(e.options[e.selectedIndex].value);

	var e2 = $("#tipoCalha");
 	var calhaTipo = Number(e2.options[e2.selectedIndex].value);

	if (calhaTipo === 1){//30x90
		if(calhaAlt === 1){calhaVaz = 0.01;}
		else if (calhaAlt === 2){calhaVaz = 0.06;}
		else if (calhaAlt === 3){calhaVaz = 0.12;}
		else if (calhaAlt === 4){calhaVaz = 0.18;}
		else if (calhaAlt === 5){calhaVaz = 0.24;}
		else if (calhaAlt === 6){calhaVaz = 0.36;}
		else if (calhaAlt === 7){calhaVaz = 0.48;}
		else if (calhaAlt === 8){calhaVaz = 0.66}
		else if (calhaAlt === 9){calhaVaz = 0.78}
		else if (calhaAlt === 10){calhaVaz = 0.96}
		else if (calhaAlt === 11){calhaVaz = 1.14}
		else if (calhaAlt === 12){calhaVaz = 1.32}
		else if (calhaAlt === 13){calhaVaz = 1.56;}
		else if (calhaAlt === 14){calhaVaz = 1.80;}
		else if (calhaAlt === 15){calhaVaz = 2.04;}
		else if (calhaAlt === 16){calhaVaz = 2.28;}
		else if (calhaAlt === 17){calhaVaz = 2.52;}
		else if (calhaAlt === 18){calhaVaz = 2.82;}
		else if (calhaAlt === 19){calhaVaz = 3.12;}
		else if (calhaAlt === 20){calhaVaz = 3.42;}
		else if (calhaAlt === 21){calhaVaz = 3.72;}
		else if (calhaAlt === 22){calhaVaz = 4.08}
		else if (calhaAlt === 23){calhaVaz = 4.44;}
		else if (calhaAlt === 24){calhaVaz = 4.80;}
		else if (calhaAlt === 25){calhaVaz = 5.16;}
		else if (calhaAlt === 26){calhaVaz = 5.52;}
		else if (calhaAlt === 27){calhaVaz = 5.94;}
		else if (calhaAlt === 28){calhaVaz = 6.36;}
		else if (calhaAlt === 29){calhaVaz = 6.78;}
		else if (calhaAlt === 30){calhaVaz = 7.20;}
		else if (calhaAlt === 31){calhaVaz = 7.62;}
		else if (calhaAlt === 32){calhaVaz = 8.10}
		else if (calhaAlt === 33){calhaVaz = 8.58;}
		else if (calhaAlt === 34){calhaVaz = 9.06;}
		else if (calhaAlt === 35){calhaVaz = 9.54;}
		else if (calhaAlt === 36){calhaVaz = 10.08;}
		else if (calhaAlt === 37){calhaVaz = 10.62;}
		else if (calhaAlt === 38){calhaVaz = 11.10;}
		else if (calhaAlt === 39){calhaVaz = 11.70;}
		else if (calhaAlt === 40){calhaVaz = 12.24;}
		else if (calhaAlt === 41){calhaVaz = 12.78;}
		else if (calhaAlt === 42){calhaVaz = 13.38;}
		else if (calhaAlt === 43){calhaVaz = 13.98;}
		else if (calhaAlt === 44){calhaVaz = 14.58;}
		else if (calhaAlt === 45){calhaVaz = 15.18;}
		else if (calhaAlt > 45){
			alert("Valor máximo Calha 1 - 45cm" + 
				  "\nClique em voltar e selecione um valor válido");
			calhaAlt = 0;
		}
	}
	else if (calhaTipo === 2){//40x180
		if (calhaAlt === 2){calhaVaz = 0.12;}
		else if (calhaAlt === 3){calhaVaz = 0.18;}
		else if (calhaAlt === 4){calhaVaz = 0.36;}
		else if (calhaAlt === 5){calhaVaz = 0.42;}
		else if (calhaAlt === 6){calhaVaz = 0.54;}
		else if (calhaAlt === 7){calhaVaz = 0.72;}
		else if (calhaAlt === 8){calhaVaz = 0.90}
		else if (calhaAlt === 9){calhaVaz = 1.08}
		else if (calhaAlt === 10){calhaVaz = 1.32}
		else if (calhaAlt === 11){calhaVaz = 1.56}
		else if (calhaAlt === 12){calhaVaz = 1.74}
		else if (calhaAlt === 13){calhaVaz = 2.04;}
		else if (calhaAlt === 14){calhaVaz = 2.28;}
		else if (calhaAlt === 15){calhaVaz = 2.58;}
		else if (calhaAlt === 16){calhaVaz = 2.82;}
		else if (calhaAlt === 17){calhaVaz = 3.12;}
		else if (calhaAlt === 18){calhaVaz = 3.48;}
		else if (calhaAlt === 19){calhaVaz = 3.78;}
		else if (calhaAlt === 20){calhaVaz = 4.08;}
		else if (calhaAlt === 21){calhaVaz = 4.44;}
		else if (calhaAlt === 22){calhaVaz = 4.80}
		else if (calhaAlt === 23){calhaVaz = 5.16;}
		else if (calhaAlt === 24){calhaVaz = 5.52;}
		else if (calhaAlt === 25){calhaVaz = 5.94;}
		else if (calhaAlt === 26){calhaVaz = 6.36;}
		else if (calhaAlt === 27){calhaVaz = 6.72;}
		else if (calhaAlt === 28){calhaVaz = 7.14;}
		else if (calhaAlt === 29){calhaVaz = 7.56;}
		else if (calhaAlt === 30){calhaVaz = 8.02;}
		else if (calhaAlt === 31){calhaVaz = 8.46;}
		else if (calhaAlt === 32){calhaVaz = 8.94}
		else if (calhaAlt === 33){calhaVaz = 9.36;}
		else if (calhaAlt === 34){calhaVaz = 9.84;}
		else if (calhaAlt === 35){calhaVaz = 10.32;}
		else if (calhaAlt === 36){calhaVaz = 10.80;}
		else if (calhaAlt === 37){calhaVaz = 11.34;}
		else if (calhaAlt === 38){calhaVaz = 11.82;}
		else if (calhaAlt === 39){calhaVaz = 12.36;}
		else if (calhaAlt === 40){calhaVaz = 12.90;}
		else if (calhaAlt === 41){calhaVaz = 13.44;}
		else if (calhaAlt === 42){calhaVaz = 13.98;}
		else if (calhaAlt === 43){calhaVaz = 14.52;}
		else if (calhaAlt === 44){calhaVaz = 15.06;}
		else if (calhaAlt === 45){calhaVaz = 15.66;}
		else if (calhaAlt === 46){calhaVaz = 16.20;}
		else if (calhaAlt === 47){calhaVaz = 16.80;}
		else if (calhaAlt === 48){calhaVaz = 16.20;}
		else if (calhaAlt === 49){calhaVaz = 17.40;}
		else if (calhaAlt === 50){calhaVaz = 18;}
		else if (calhaAlt === 51){calhaVaz = 18.60;}
		else if (calhaAlt === 52){calhaVaz = 19.26;}
		else if (calhaAlt === 53){calhaVaz = 20.52;}
		else if (calhaAlt === 54){calhaVaz = 21.12;}
		else if (calhaAlt === 55){calhaVaz = 21.78;}
		else if (calhaAlt === 56){calhaVaz = 22.44;}
		else if (calhaAlt === 57){calhaVaz = 23.10;}
		else if (calhaAlt === 58){calhaVaz = 23.76;}
		else if (calhaAlt === 59){calhaVaz = 24.48;}
		else if (calhaAlt === 60){calhaVaz = 25.14;}
	}
	else if (calhaTipo === 3){//30x90
		if(calhaAlt === 1){calhaVaz = 0.06;}
		else if (calhaAlt === 2){calhaVaz = 0.12;}
		else if (calhaAlt === 3){calhaVaz = 0.30;}
		else if (calhaAlt === 4){calhaVaz = 0.42;}
		else if (calhaAlt === 5){calhaVaz = 0.66;}
		else if (calhaAlt === 6){calhaVaz = 0.84;}
		else if (calhaAlt === 7){calhaVaz = 1.08;}
		else if (calhaAlt === 8){calhaVaz = 1.38}
		else if (calhaAlt === 9){calhaVaz = 1.68}
		else if (calhaAlt === 10){calhaVaz = 1.98}
		else if (calhaAlt === 11){calhaVaz = 2.34}
		else if (calhaAlt === 12){calhaVaz = 2.70}
		else if (calhaAlt === 13){calhaVaz = 3.06;}
		else if (calhaAlt === 14){calhaVaz = 3.42;}
		else if (calhaAlt === 15){calhaVaz = 3.84;}
		else if (calhaAlt === 16){calhaVaz = 4.32;}
		else if (calhaAlt === 17){calhaVaz = 4.74;}
		else if (calhaAlt === 18){calhaVaz = 5.22;}
		else if (calhaAlt === 19){calhaVaz = 5.70;}
		else if (calhaAlt === 20){calhaVaz = 6.24;}
		else if (calhaAlt === 21){calhaVaz = 6.72;}
		else if (calhaAlt === 22){calhaVaz = 7.26}
		else if (calhaAlt === 23){calhaVaz = 7.80;}
		else if (calhaAlt === 24){calhaVaz = 8.40;}
		else if (calhaAlt === 25){calhaVaz = 9;}
		else if (calhaAlt === 26){calhaVaz = 9.60;}
		else if (calhaAlt === 27){calhaVaz = 10.20;}
		else if (calhaAlt === 28){calhaVaz = 10.80;}
		else if (calhaAlt === 29){calhaVaz = 11.46;}
		else if (calhaAlt === 30){calhaVaz = 12.12;}
		else if (calhaAlt === 31){calhaVaz = 12.78;}
		else if (calhaAlt === 32){calhaVaz = 13.50}
		else if (calhaAlt === 33){calhaVaz = 14.22;}
		else if (calhaAlt === 34){calhaVaz = 14.94;}
		else if (calhaAlt === 35){calhaVaz = 15.66;}
		else if (calhaAlt === 36){calhaVaz = 16.38;}
		else if (calhaAlt === 37){calhaVaz = 17.16;}
		else if (calhaAlt === 38){calhaVaz = 17.94;}
		else if (calhaAlt === 39){calhaVaz = 18.72;}
		else if (calhaAlt === 40){calhaVaz = 19.50;}
		else if (calhaAlt === 41){calhaVaz = 20.34;}
		else if (calhaAlt === 42){calhaVaz = 21.12;}
		else if (calhaAlt === 43){calhaVaz = 21.96;}
		else if (calhaAlt === 44){calhaVaz = 22.80;}
		else if (calhaAlt === 45){calhaVaz = 23.70;}
		else if (calhaAlt === 46){calhaVaz = 24.54;}
		else if (calhaAlt === 47){calhaVaz = 25.44;}
		else if (calhaAlt === 48){calhaVaz = 26.34;}
		else if (calhaAlt === 49){calhaVaz = 27.24;}
		else if (calhaAlt === 50){calhaVaz = 28.20;}
		else if (calhaAlt > 50){
			alert("Valor máximo Calha 3 - 50cm" + 
				  "\nClique em voltar e selecione um valor válido");
			calhaAlt = 0;
		}
	}

	if (calhaTipo === 2 && calhaAlt === 1){
		alert("Calha 2 - 1cm - Não Aplicar");
	}

}//function calcCal


function calcDose(){
	var concentracao;
	var carreamento;
	var vaz = (calhaVaz * percent) / 100;

	if(vaz > 0.01 && vaz < 0.31){
		concentracao = 50;
		carreamento = "50 (01)";
	}
	else if(vaz > 0.32 && vaz < 0.62){
		concentracao = 50;
		carreamento = "60 (01)";
	}
	else if(vaz > 0.63 && vaz < 1.25){
		concentracao = 45;
		carreamento = "75 (01)";
	}
	else if(vaz > 1.26 && vaz < 2.50){
		concentracao = 40;
		carreamento = "125 (02)";
	}
	else if(vaz > 2.51 && vaz < 5){
		concentracao = 30;
		carreamento = "250 (02)";
	}
	else if(vaz > 5.01 && vaz < 10){
		concentracao = 20;
		carreamento = "500 (02)";
	}
	else if(vaz > 10.01 && vaz < 15){
		concentracao = 15;
		carreamento = "750 (02) (03)";
	}
	else if(vaz > 15.01 && vaz < 100){
		concentracao = 12;
		carreamento = "1000 (02) (03)";
	}
	else{
		alert("Preencha o campo porcentagem");
	}

	//var vaz = (calhaVaz * percent) / 100;
	$(".vazaoSp").innerHTML = vaz.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
	const con =  $(".conSp").innerHTML = concentracao;
	const dose =  $(".doseSp").innerHTML = Math.round(vaz * concentracao); 
	$(".doseSp").innerHTML = dose.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
	const car =  $(".carSp").innerHTML = carreamento;
}