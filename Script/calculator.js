$(document).ready(function(){

var temp1="";

//to concate the strings
function stringconcate(val){
	temp1=temp1.concat(val);
	displaydata(temp1);
} 
// to display the date and by default its primary display
function displaydata(temp1,location){

	if (location === undefined) {
		location = "#primarydisplay";
	}

	$(location).html(temp1);

}

$(".btn").click(function(){
	var val = $(this).val();
	stringconcate(val);
		});

$(".sign.cc").click(function(){
		displaydata(0);
		displaydata("","#secondarydisplay");
		temp1 = "";
		});
	
$(".sign.del").click(function(){
		temp1=temp1.slice(0,-1);
		temp1 = (temp1 !== "") ? temp1:"0"
		displaydata(temp1);
		displaydata("","#secondarydisplay");
	});

$(".sign.equal").click(function(){
		displaydata(temp1,"#secondarydisplay")
		temp1=eval(temp1);
		temp1 = temp1.toString();
		displaydata(temp1);
	});
});