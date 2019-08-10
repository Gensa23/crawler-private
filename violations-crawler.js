//0 -> 2
//4 -> 6 
//8 -> 10


//summary table 

var rows = $("tbody").find("tr"); 
var amountList = []
for (var i=3; i<=rows.length -4; i++ ) {
	var data = {"number": "" +rows[i].children[0].innerHTML + "", "amount": "" +rows[i].children[2].innerHTML + "", "date": "" +rows[i].children[1].innerHTML + ""}
	amountList.push(data);
}

//details popup 
var popups = $(".service-popup");
var dataList = [];

for (var i =0; i<popups.length; i++) {

	popups[i].children[0].children[1].children[0].innerHTML
	var data = 
	{
	"description": "" + popups[i].children[0].children[1].children[2].innerHTML.replace(/   /g,'') + "", 
	"number" : ""+ popups[i].children[0].children[1].children[6].innerHTML + "",
	"plate" : "" + popups[i].children[0].children[1].children[10].innerHTML + "",
	"status" : "UNPAID"
	};
	dataList.push(data);

}

//combine both lists
var finalList = []
for(var i=0; i < dataList.length; i++) {
	for(var j=0; j < amountList.length; j++) {
		if(dataList[i].number == amountList[j].number) {
			var data = { 
				"description": dataList[i].description,
				"number": dataList[i].number,
				"plate": dataList[i].plate,
				"status": dataList[i].status, 
				"amount": amountList[j].amount,
				"date": amountList[j].date
			};
			finalList.push(data)
			break; 
		}
	}
}

//everything went as expected? 
console.log(finalList.length == amountList.length)
console.log(finalList.length == dataList.length)
