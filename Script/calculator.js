$(document).ready(function(){

var temp1=" ";

function stringconcate(val){

	temp1=temp1.concat(val);
	displaydata(temp1);
} 

function displaydata(temp1){

	$(".display").val(temp1);

}
	$(".btn").click(function(){
		var val = $(this).attr("value");
		
		stringconcate(val);

		});
$(".sign.cc").click(function(){
		displaydata(0);
		});
	
$(".sign.del").click(function(){
		temp1=temp1.slice(0,-1);
		displaydata(temp1);
	});

$(".sign.equal").click(function(){
		temp1=eval(temp1);
		displaydata(temp1);
	});
});