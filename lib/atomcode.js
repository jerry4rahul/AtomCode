/*
    Library:            Atom Code
    Author:             Rahul Kumar Sharma
    Author URI:         https://www.rahulkrsharma.in
    Version:            1.0
*/

var colorsArray = [
    //colors must be in HEX format.
    ["none",""], 
    ["maroon","#800000"], 
    ["darkred","#8B0000"], 
    ["brown","#A52A2A"], 
    ["red","#FF0000"], 
    ["tomato","#FF6347"], 
    ["orangered","#FF4500"], 
    ["darkorange","#FF8C00"], 
    ["orange","#FFA500"], 
    ["gold","#FFD700"], 
    ["olive","#808000"], 
    ["yellow","#FFFF00"], 
    ["yellowgreen","#9ACD32"], 
    ["darkolivegreen","#556B2F"], 
    ["greenyellow","#ADFF2F"],
    ["darkgreen","#006400"], 
    ["green","#008000"], 
    ["lime","#00FF00"], 
    ["seagreen","#2E8B57"], 
    ["teal","#008080"], 
    ["cyan","#00FFFF"],
    ["steelblue","#4682B4"], 
    ["lightblue","#ADD8E6"], 
    ["skyblue","#87CEEB"], 
    ["navy","#000080"], 
    ["darkblue","#00008B"], 
    ["blue","#0000FF"], 
    ["indigo","#4B0082"],
    ["darkviolet","#9400D3"],
    ["purple","#800080"],
    ["violet","#EE82EE"],
    ["deeppink","#FF1493"],
    ["hotpink","#FF69B4"],
    ["light pink","#FFB6C1"],
    ["pink","#FFC0CB"],
    ["wheat","#F5DEB3"],
    ["saddlebrown","#8B4513"],
    ["chocolate","#D2691E"],
    ["rosybrown","#BC8F8F"],
    ["slategray","#708090"],
    ["lavender","#E6E6FA"],
    ["honeydew","#F0FFF0"],
    ["black","#000000"],
    ["gray","#808080"],
    ["darkgray","#A9A9A9"],
    ["silver","#C0C0C0"],
    ["white","#FFFFFF"],
];
var opacityArray = ["00", "05", "10","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95"];
var marginArray = ["0","1","2","3","4","5","10","15","20","25","30","35","40","45","50","60","70","80","90","100"];
var paddingArray = ["0","1","2","3","4","5","10","15","20","25","30","35","40","45","50","60","70","80","90","100"];
var fontArray = ["8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40"];
var fontWArray = ["100","200","300","400","500","600","700","800","900"];
var scaleArray=[["10","1.1,1.1"],["20","1.2,1.2"],["30","1.3,1.3"],["40","1.4,1.4"],["50","1.5,1.5"],["60","1.6,1.6"],["70","1.7,1.7"],["80","1.8,1.8"],["90","1.9.1.9"],["100","2,2"]];        
var rotateArray = ["0","15","30","45","60","75","90","105","120","135","150","165","180","195","210","225","240","255","270","285","300","315"];

var generatedStyles = $('.generated-styles');

if (!generatedStyles.length){
	$('body').append('<style class="generated-styles"></style>');
	$('.generated-styles').append('');

	// Opacity
	opacityArray.forEach(function(opacityValues){
		$('.generated-styles').append('.atom-opacity-'+opacityValues+'{opacity:'+opacityValues/100+'}');
	})

	// Positive Margin
	marginArray.forEach(function(marginValues){
		$('.generated-styles').append('.atom-mt-'+marginValues+'{margin-top:'+marginValues+'px!important} .atom-mb-'+marginValues+'{margin-bottom:'+marginValues+'px!important} .atom-ml-'+marginValues+'{margin-left:'+marginValues+'px!important} .atom-mr-'+marginValues+'{margin-right:'+marginValues+'px!important}');
	})

	// Negative Margin
	marginArray.forEach(function(marginValues){
		$('.generated-styles').append('.atom-mt--'+marginValues+'{margin-top:-'+marginValues+'px!important} .atom-mb--'+marginValues+'{margin-bottom:-'+marginValues+'px!important} .atom-ml--'+marginValues+'{margin-left:-'+marginValues+'px!important} .atom-mr--'+marginValues+'{margin-right:-'+marginValues+'px!important}');
	})

	// Positive Padding
	paddingArray.forEach(function(padingValues){
		$('.generated-styles').append('.atom-pt-'+padingValues+'{padding-top:'+padingValues+'px!important} .atom-pb-'+padingValues+'{padding-bottom:'+padingValues+'px!important} .atom-pl-'+padingValues+'{padding-left:'+padingValues+'px!important} .atom-pr-'+padingValues+'{padding-right:'+padingValues+'px!important}');
	})

	// Negative Padding
	paddingArray.forEach(function(padingValues){
		$('.generated-styles').append('.atom-pt--'+padingValues+'{padding-top:-'+padingValues+'px!important} .atom-pb--'+padingValues+'{padding-bottom:-'+padingValues+'px!important} .atom-pl--'+padingValues+'{padding-left:-'+padingValues+'px!important} .atom-pr--'+padingValues+'{padding-right:-'+padingValues+'px!important}');
	})

	// Font
	fontArray.forEach(function(fontValues){
		$('.generated-styles').append('.atom-font-'+fontValues+'{font-size:'+fontValues+'px!important}');
	})

	// Font Weight
	fontWArray.forEach(function(fontWValues){
		$('.generated-styles').append('.atom-fontweight-'+fontWValues+'{font-weight:'+fontWValues+'!important}');
	})

	// Transform Scale
	scaleArray.forEach(function(scaleVal){
		$('.generated-styles').append('.atom-scale-'+scaleVal[0]+'{transform:scale('+scaleVal[1]+')}');
	})

	// Transform Rotate
	rotateArray.forEach(function(rotateVal){
		$('.generated-styles').append('.atom-rotate-'+[rotateVal]+'{transform:rotate('+[rotateVal]+'deg)!important}');
	})

	// Text Color HEX
	colorsArray.forEach(function(colorVal){
		$('.generated-styles').append('.atom-color-'+colorVal[0]+'{color:'+colorVal[1]+'!important}');
	})

	// Background Color RGB
	colorsArray.forEach(function(bgColorVal){
		$('.generated-styles').append('.atom-bg-'+bgColorVal[0]+'{background-color:'+bgColorVal[1]+'!important}');
	})

}  