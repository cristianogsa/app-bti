function $(elemento) {
	return document.querySelector(elemento);
}

/*HORA E DATA*/
var Data = new Date();
//getHours = retorna a hora (0 - 23)
var hora = Data.getHours();


//Relógio
function relogio(){
	var Data = new Date();
	var hours = Data.getHours();
	var minutes = Data.getMinutes();
	var seconds = Data.getSeconds();
	if(hours < 10){
		hours = "0" + hours;
	}
	if(minutes < 10){
		minutes = "0" + minutes;
	}
	if(seconds < 10){
		seconds = "0" + seconds;
	}
	$("#horas").innerHTML = hours+":"+minutes+":"+seconds;
}
window.setInterval("relogio()", 1000);

//Dia da semana
var arrayDias = ["Domingo","Segunda-feira","Terça-Feira","Quarta-feira","Quinta-Feira","Sexta-feira","Sábado"];
var semana = Data.getDay();//= dias da semana de 0 a 6.
var week = arrayDias[semana];
$("#weekDay").innerHTML = week;

//Dia do mes
var diaMes = Data.getDate();//Dia do mes
	if(diaMes < 10){
		diaMes = "0" + diaMes;
	}
$("#monthDay").innerHTML = diaMes;

//mes de 0 a 11 
var arrayMeses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var Mes = Data.getMonth();//mes de 0 a 11
var months = arrayMeses[Mes]
$("#monthName").innerHTML = months;

//mostra o ano com 4 dígitos
var ano = Data.getFullYear();
$("#yearNum").innerHTML = ano;//-2000 = 18


/*LARGURA*/
function showResultLarg() {//click button
	$(".resLarg").classList.remove("esc");//mostra resultado
	$(".buttonLarg").classList.add("esc");//esconde button
}

function showButtonLarg() {//click voltar
    $(".buttonLarg").classList.remove("esc");//mostra button
	$(".resLarg").classList.add("esc");//esconde resultado
}

$(".buttonLarg").addEventListener("click", function(){
	if ($("#larg0").value === "0" || $("#larg1").value === "0" || $("#larg2").value === "0" || $("#larg3").value === "0" || $("#larg4").value === "0" || $("#larg5").value === "0"){
		alert("Valor 0 não é valido");
	}
	else if (largCount() < 5){
		alert("Preencha ao menos 5 valores");
	}//pode usar focus
	else {
	calcLargura();
	showResultLarg();
	}
});

$(".voltarLarg").addEventListener("click", function(){
	showButtonLarg();
});

function calcLargura(){
	const largura = mediaLarg($("#larg0").value, $("#larg1").value, $("#larg2").value, $("#larg3").value, $("#larg4").value, $("#larg5").value);
$(".largValor1").innerHTML = largura.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
$(".largValor2").innerHTML = largura.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

vLargSing = largura === 1 ? ' metro' : ' metros';

$(".largSing").innerHTML = vLargSing;
$(".largSing2").innerHTML = vLargSing;
larg = largura;
}

function largCount(counter){
	var arrMedLarg = [$("#larg0").value, $("#larg1").value, $("#larg2").value, $("#larg3").value, $("#larg4").value, $("#larg5").value]
	var counter = 0;
	for(var i = 0; i < arrMedLarg.length; i++){
		if(arrMedLarg[i] !== ""){
			counter++;
		}
	};
	return counter;
}

function mediaLarg(l0,l1,l2,l3,l4,l5){
	return ( Number(l0) + Number(l1) + Number(l2) + 
Number(l3) + Number(l4) + Number(l5) ) / largCount();
}

/***********************
Profundidade*/
/******* point 0 ***********/
function showResultprof() {
	$(".resProf").classList.remove("esc");//mostra res
	$(".buttonProf").classList.add("esc");//esconde button
}1

function showButtonProf() {
	$(".buttonProf").classList.remove("esc");//mostra button
	$(".resProf").classList.add("esc");//esconde res
}

$(".buttonProf").addEventListener("click", function(){
	if ($("#prof01").value === "0" || $("#prof02").value === "0" || $("#prof03").value === "0" || $("#prof04").value === "0" || $("#prof05").value === "0" || $("#prof06").value === "0" || $("#prof07").value === "0" || $("#prof08").value === "0" || $("#prof09").value === "0"){
		alert("Valor 0 não é valido");
	}
	else if(profCount() < 6){
		alert("Preencha ao menos 6 valores");
	}
	else {
	calcProf();
	showResultprof();
	}
});

$(".voltarProf").addEventListener("click", function(){
	showButtonProf();
});

function calcProf(){
	const profundidade = mediaProf($("#prof01").value, $("#prof02").value, $("#prof03").value, $("#prof04").value, $("#prof05").value, $("#prof06").value, $("#prof07").value, $("#prof08").value, $("#prof09").value);
	$(".profValor").innerHTML = profundidade.toLocaleString("pt-BR",{ maximumFractionDigits: 2 });
prof0 = profundidade;
}

function profCount(counter){
	var arrMedProf = [$("#prof01").value, $("#prof02").value, $("#prof03").value, $("#prof04").value, $("#prof05").value, $("#prof06").value, $("#prof07").value,$("#prof08").value, $("#prof09").value]
	var counter = 0;
	for(var i = 0; i < arrMedProf.length; i++){
		if(arrMedProf[i] !== ""){
			counter++;
		}
	};
	return counter;
}

function mediaProf(p0,p1,p2,p3,p4,p5,p6,p7,p8){
	return ( ( Number(p0) + Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5) + Number(p6)  + Number(p7)  + Number(p8) ) / profCount() ) / 100;
}

/******* point 1 ***********/
function showResultprof1() {
	$(".resProf1").classList.remove("esc");//mostra res
	$(".buttonProf1").classList.add("esc");//esconde button
}

function showButtonProf1() {
	$(".buttonProf1").classList.remove("esc");//mostra button
	$(".resProf1").classList.add("esc");//esconde res
}

$(".buttonProf1").addEventListener("click", function(){
	if ($("#prof11").value === "0" || $("#prof12").value === "0" || $("#prof13").value === "0" || $("#prof14").value === "0" || $("#prof15").value === "0" || $("#prof16").value === "0" || $("#prof17").value === "0" || $("#prof18").value === "0" || $("#prof19").value === "0"){
		alert("Valor 0 não é valido");
	}
	else if(profCount1() < 6){
		alert("Preencha ao menos 6 valores");
	}
	else {
	calcProf1();
	showResultprof1();
	}
});

$(".voltarProf1").addEventListener("click", function(){
	showButtonProf1();
});

function calcProf1(){
	const profundidade = mediaProf1($("#prof11").value, $("#prof12").value, $("#prof13").value, $("#prof14").value, $("#prof15").value, $("#prof16").value, $("#prof17").value, $("#prof18").value, $("#prof19").value);
	$(".profValor1").innerHTML = profundidade.toLocaleString("pt-BR",{ maximumFractionDigits: 2 });
prof1 = profundidade;
}

function profCount1(counter){
	var arrMedProf1 = [$("#prof11").value, $("#prof12").value, $("#prof13").value, $("#prof14").value, $("#prof15").value, $("#prof16").value, $("#prof17").value, $("#prof18").value, $("#prof19").value]
	var counter = 0;
	for(var i = 0; i < arrMedProf1.length; i++){
		if(arrMedProf1[i] !== ""){
			counter++;
		}
	};
	return counter;
}

function mediaProf1(p0,p1,p2,p3,p4,p5,p6,p7,p8){
	return ( ( Number(p0) + Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5) + Number(p6)  + Number(p7)  + Number(p8) ) / profCount1() ) / 100;
}

/******* point 2 ***********/
function showResultprof2() {
	$(".resProf2").classList.remove("esc");//mostra res
	$(".buttonProf2").classList.add("esc");//esconde button
}

function showButtonProf2() {
	$(".buttonProf2").classList.remove("esc");//mostra button
	$(".resProf2").classList.add("esc");//esconde res
}

$(".buttonProf2").addEventListener("click", function(){
	if ($("#prof21").value === "0" || $("#prof22").value === "0" || $("#prof23").value === "0" || $("#prof24").value === "0" || $("#prof25").value === "0" || $("#prof26").value === "0" || $("#prof27").value === "0" || $("#prof28").value === "0" || $("#prof29").value === "0"){
		alert("Valor 0 não é valido");
	}
	else if(profCount2() < 6){
		alert("Preencha ao menos 6 valores");
	}
	else {
	calcProf2();
	showResultprof2();
	}
});

$(".voltarProf2").addEventListener("click", function(){
	showButtonProf2();
});

function calcProf2(){
	const profundidade = mediaProf2($("#prof21").value, $("#prof22").value, $("#prof23").value, $("#prof24").value, $("#prof25").value, $("#prof26").value, $("#prof27").value, $("#prof28").value, $("#prof29").value);
	$(".profValor2").innerHTML = 

profundidade.toLocaleString("pt-BR",
		{ maximumFractionDigits: 2 });
prof2 = profundidade;
}

function profCount2(counter){
	var arrMedProf2 = [$("#prof21").value, $("#prof22").value, $("#prof23").value, $("#prof24").value, $("#prof25").value, $("#prof26").value, $("#prof27").value, $("#prof28").value, $("#prof29").value]
	var counter = 0;
	for(var i = 0; i < arrMedProf2.length; i++){
		if(arrMedProf2[i] !== ""){
			counter++;
		}
	};
	return counter;
}

function mediaProf2(p0,p1,p2,p3,p4,p5,p6,p7,p8){
	return ( ( Number(p0) + Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5) + Number(p6)  + Number(p7)  + Number(p8) ) / profCount2() ) / 100;
}

/******* point 3 ***********/
function showResultprof3() {
	$(".resProf3").classList.remove("esc");//mostra res
	$(".buttonProf3").classList.add("esc");//esconde button
}

function showButtonProf3() {
	$(".buttonProf3").classList.remove("esc");//mostra button
	$(".resProf3").classList.add("esc");//esconde res
}

$(".buttonProf3").addEventListener("click", function(){
	if ($("#prof31").value === "0" || $("#prof32").value === "0" || $("#prof33").value === "0" || $("#prof34").value === "0" || $("#prof35").value === "0" || $("#prof36").value === "0" || $("#prof37").value === "0" || $("#prof38").value === "0" || $("#prof39").value === "0"){
		alert("Valor 0 não é valido");
	}
	else if(profCount3() < 6){
		alert("Preencha ao menos 6 valores");
	}
	else {
	calcProf3();
	showResultprof3();
	}
});

$(".voltarProf3").addEventListener("click", function(){
	showButtonProf3();
});

function calcProf3(){
	const profundidade = mediaProf3($("#prof31").value, $("#prof32").value, $("#prof33").value, $("#prof34").value, $("#prof35").value, $("#prof36").value, $("#prof37").value, $("#prof38").value, $("#prof39").value);$(".profValor3").innerHTML = profundidade.toLocaleString("pt-BR",{ maximumFractionDigits: 2 });
prof3 = profundidade;
}

function profCount3(counter){
	var arrMedProf3 = [$("#prof31").value, $("#prof32").value, $("#prof33").value, $("#prof34").value, $("#prof35").value, $("#prof36").value, $("#prof37").value, $("#prof38").value, $("#prof39").value]
	var counter = 0;
	for(var i = 0; i < arrMedProf3.length; i++){
		if(arrMedProf3[i] !== ""){
			counter++;
		}
	};
	return counter;
}

function mediaProf3(p0,p1,p2,p3,p4,p5,p6,p7,p8){
	return ( ( Number(p0) + Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5) + Number(p6)  + Number(p7)  + Number(p8) ) / profCount3() ) / 100;
};

//point 4
function showResultprof4() {
	$(".resProf4").classList.remove("esc");//mostra res
	$(".buttonProf4").classList.add("esc");//esconde button
}

function showButtonProf4() {
	$(".buttonProf4").classList.remove("esc");//mostra button
	$(".resProf4").classList.add("esc");//esconde res
}

$(".buttonProf4").addEventListener("click", function(){
	if ($("#prof41").value === "0" || $("#prof42").value === "0" || $("#prof43").value === "0" || $("#prof44").value === "0" || $("#prof45").value === "0" || $("#prof46").value === "0" || $("#prof47").value === "0" || $("#prof48").value === "0" || $("#prof49").value === "0"){
		alert("Valor 0 não é valido");
	}
	else if(profCount4() < 6){
		alert("Preencha ao menos 6 valores");
	}
	else {
	calcProf4();
	showResultprof4();
	}
});

$(".voltarProf4").addEventListener("click", function(){
	showButtonProf4();
});

function calcProf4(){
	const profundidade = mediaProf4($("#prof41").value, $("#prof42").value, $("#prof43").value, $("#prof44").value, $("#prof45").value, $("#prof46").value, $("#prof47").value, $("#prof48").value, $("#prof49").value);$(".profValor4").innerHTML = profundidade.toLocaleString("pt-BR",{ maximumFractionDigits: 2 });
prof4 = profundidade;
}

function profCount4(counter){
	var arrMedProf4 = [$("#prof41").value, $("#prof42").value, $("#prof43").value, $("#prof44").value, $("#prof45").value, $("#prof46").value, $("#prof47").value, $("#prof48").value, $("#prof49").value]
	var counter = 0;
	for(var i = 0; i < arrMedProf4.length; i++){
		if(arrMedProf4[i] !== ""){
			counter++;
		}
	};
	return counter;
}

function mediaProf4(p0,p1,p2,p3,p4,p5,p6,p7,p8){
	return ( ( Number(p0) + Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5) + Number(p6)  + Number(p7)  + Number(p8) ) / profCount4() ) / 100;
};

//point 5
function showResultprof5() {
	$(".resProf5").classList.remove("esc");//mostra res
	$(".buttonProf5").classList.add("esc");//esconde button
}

function showButtonProf5() {
	$(".buttonProf5").classList.remove("esc");//mostra button
	$(".resProf5").classList.add("esc");//esconde res
}

$(".buttonProf5").addEventListener("click", function(){
	if ($("#prof51").value === "0" || $("#prof52").value === "0" || $("#prof53").value === "0" || $("#prof54").value === "0" || $("#prof55").value === "0" || $("#prof56").value === "0" || $("#prof57").value === "0" || $("#prof58").value === "0" || $("#prof59").value === "0"){
		alert("Valor 0 não é valido");
	}
	else if(profCount5() < 6){
		alert("Preencha ao menos 6 valores");
	}
	else {
	calcProf5();
	showResultprof5();
	calcProfTotal();//calculo total adicionado ao button 5
	}
});

$(".voltarProf5").addEventListener("click", function(){
	showButtonProf5();
});

function calcProf5(){
	const profundidade = mediaProf5($("#prof51").value, $("#prof52").value, $("#prof53").value, $("#prof54").value, $("#prof55").value, $("#prof56").value, $("#prof57").value, $("#prof58").value, $("#prof59").value);$(".profValor5").innerHTML = profundidade.toLocaleString("pt-BR",{ maximumFractionDigits: 2 });
prof5 = profundidade;
}

function profCount5(counter){
	var arrMedProf5 = [$("#prof51").value, $("#prof52").value, $("#prof53").value, $("#prof54").value, $("#prof55").value, $("#prof56").value, $("#prof57").value, $("#prof58").value, $("#prof59").value]
	var counter = 0;
	for(var i = 0; i < arrMedProf5.length; i++){
		if(arrMedProf5[i] !== ""){
			counter++;
		}
	};
	return counter;
}

function mediaProf5(p0,p1,p2,p3,p4,p5,p6,p7,p8){
	return ( ( Number(p0) + Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5) + Number(p6)  + Number(p7)  + Number(p8) ) / profCount5() ) / 100;
};


/*Profundidade Total*/
function calcProfTotal(){
	const profundidade = mediaProfTotal (prof0, prof1, prof2, prof3, prof4, prof5);
$(".profValorTotal1").innerHTML = profundidade.toLocaleString("pt-BR",
{ maximumFractionDigits: 2 });
$(".profValorTotal2").innerHTML = profundidade.toLocaleString("pt-BR",
{ maximumFractionDigits: 2 });
prof = profundidade;
}

function mediaProfTotal(p0,p1,p2,p3,p4,p5){
	return  ( Number(p0) + Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5) ) / 6;
}

/*Média tempo*/
function showResultTemp() {
	$(".resTemp").classList.remove("esc");//mostra resultado
	$(".buttonTemp").classList.add("esc");//esconde button
}

function showButtonTemp() {
	$(".buttonTemp").classList.remove("esc");//mostra button
	$(".resTemp").classList.add("esc");//esconde resultado
}

$(".buttonTemp").addEventListener("click", function(){
	if ($("#temp0").value === "0" || $("#temp1").value === "0" || $("#temp2").value === "0" || $("#temp3").value === "0" || $("#temp4").value === "0" || $("#temp5").value === "0"){
		alert("Valor 0 não é valido");
	}
	else if (valMediaTemp() < 5){
		alert("Preencha ao menos 5 valores");
	}//pode usar focus
	else {
	calcTemp();
	showResultTemp();
	calcVelocidade();
	calcVaz()
	}
});

$(".voltarTemp").addEventListener("click", function(){
	showButtonTemp();
});

function calcTemp(){
	const tempo = mediaTemp($("#temp0").value, $("#temp1").value, $("#temp2").value, $("#temp3").value, $("#temp4").value, $("#temp5").value);
	$(".tempValor1").innerHTML = tempo.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
	$(".tempValor2").innerHTML = tempo.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
temp = tempo;
}

function valMediaTemp(counter){
	var arrMedTemp = [$("#temp0").value, $("#temp1").value, $("#temp2").value, $("#temp3").value, $("#temp4").value, $("#temp5").value]
	var counter = 0;
	for(var i = 0; i < arrMedTemp.length; i++){
		if(arrMedTemp[i] !== ""){
			counter++;
		}
	};
	return counter;
}

function mediaTemp(l0,l1,l2,l3,l4,l5){
	return ( Number(l0) + Number(l1) + Number(l2) + Number(l3) + Number(l4) + Number(l5) ) / valMediaTemp();
}

function calcVelocidade(){
	const velocidade = $(".velocSp").innerHTML = (extensao * 60) / temp;
	$(".velocSp").innerHTML = velocidade.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
	const velocidadeC =  $(".velocCSp").innerHTML = velocidade * 0.85;
	$(".velocCSp").innerHTML = velocidadeC.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
	velC = velocidadeC;
}

function calcVaz(){
	const vazao1 =  $(".vazaoSp1").innerHTML = larg * prof * velC; 
	$(".vazaoSp1").innerHTML = vazao1.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
	const vazao2 =  $(".vazaoSp2").innerHTML = larg * prof * velC; 
	$(".vazaoSp2").innerHTML = vazao2.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
vaz = vazao1;
}

/*EXTENSÃO*/
var extensao = $(".extension").innerHTML = 5;

/*PORCENTAGEM*/
function showResultPerc() {
	$(".resPerc").classList.remove("esc");//mostra resultado
	$(".buttonPerc").classList.add("esc");//esconde Profundidade
}
function showButtonPerc() {
	$(".buttonPerc").classList.remove("esc");//mostra button
	$(".resPerc").classList.add("esc");//esconde resultado
}
$(".buttonPerc").addEventListener("click", function(){
	calcPerc();
	showResultPerc();
	calcDose();
});
$(".voltarPerc").addEventListener("click", function(){
	showButtonPerc();
});

function calcPerc(){
	var e = $("#tipoCalha");
 	var calhaTipo = Number(e.options[e.selectedIndex].value);

	var e2 = $("#calhaAltura");
	var calhaAlt = Number(e2.options[e2.selectedIndex].value);

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
		}
	}

	if(calhaTipo === 2 && calhaAlt === 1){
		alert("Calha 2 - 1cm - Não Aplicar");
	}

	const porcentagem =  $(".percentSp").innerHTML = (vaz * 100) / calhaVaz; 
	$(".percentSp").innerHTML = porcentagem.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

}//function calcPerc

function calcDose(){
	var concentracao;
	var carreamento;

	if(vaz > 0.01 && vaz < 0.31){
		concentracao = 50;
		carreamento = "50 m (01)";
	}
	else if(vaz > 0.32 && vaz < 0.62){
		concentracao = 50;
		carreamento = "60 m (01)";
	}
	else if(vaz > 0.63 && vaz < 1.25){
		concentracao = 45;
		carreamento = "75 m (01)";
	}
	else if(vaz > 1.26 && vaz < 2.50){
		concentracao = 40;
		carreamento = "125 m (02)";
	}
	else if(vaz > 2.51 && vaz < 5){
		concentracao = 30;
		carreamento = "250 m (02)";
	}
	else if(vaz > 5.01 && vaz < 10){
		concentracao = 20;
		carreamento = "500 m (02)";
	}
	else if(vaz > 10.01 && vaz < 15){
		concentracao = 15;
		carreamento = "750 m (02) (03)";
	}
	else if(vaz > 15.01 && vaz < 100){
		concentracao = 12;
		carreamento = "1000 m (02) (03)";
	}
	else{
		alert("Esse valor não consta na tabela");
	}
	const con =  $(".conSp").innerHTML = concentracao;
	const car =  $(".carSp").innerHTML = carreamento;
	const dose =  $(".doseSp").innerHTML = Math.round(vaz * concentracao); 
$(".doseSp").innerHTML = dose.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
}
