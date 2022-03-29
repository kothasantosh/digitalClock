window.onload = function () {
	setInterval(updateTime, 1000)
};

function updateTime() {
	const format = number => `${ +!(number < 10) && '' }${number}`;
	
	let date = new Date();
	
	document.querySelector("#hour").innerHTML = format( date.getHours());
	document.querySelector("#minute").innerHTML = format( date.getMinutes());
	document.querySelector("#second").innerHTML = format( date.getSeconds());

    document.querySelector("#date").innerHTML = format( date.getDate());
	document.querySelector("#month").innerHTML = format( date.getMonth()+1);
	document.querySelector("#year").innerHTML = format( date.getFullYear());

	// document.querySelector("#month").innerHTML = (
	// 	[
	// 		//date.getDate(), 
	// 		++date.getMonth() 
	// 		//date.getFullYear()
	// 	]
	// 		.map(format)
	// 		.join('/')
	// );
	
	const week = [
		"Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
];
	
	document.querySelector("#day").innerHTML = week[ date.getDay() ];
}