var weekDay = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

var months = [
	['January / 1', 31],
	['February / 2', 28],
	['March / 3', 31],
	['April / 4', 30],
	['May / 5', 31],
	['June / 6', 30],
	['July / 7', 31],
	['August / 8', 31],
	['September / 9', 30],
	['October / 10', 31],
	['November / 11', 30],
	['December / 12', 31]
];

var n = 1;
var w = 1;
var weekend_mark;
// For-loop that prints to the console markup consisting of months' li-items
for (var i = 0, m = months.length - 1; i <= m; i++) {
	console.log('<li class="item-common-style month-item">' + months[i][0] + '</li>');
// another loop that prints to the console markup consisiting of li-items with number of the day, weekday and number of day of the year
	for (var day = 1; day <= months[i][1]; day++) {
		if (w === 5 || w === 6) {
			weekend_mark = 'day-item_weekend';
		} else {
			weekend_mark = '';
		}
		console.log('<li class="item-common-style day-item', weekend_mark,'">','<div class="day-number">',n++ +'</div>','<div class="day">',day,'</div>','<div class="weekday">',weekDay[w++],'</div>','</li>');
		if (w === 7) {
			w = 0;
		}

	};
}



