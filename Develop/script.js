var today = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(today);

var containerEl = $("#container");
var timeBlockEl = $('<p>');
timeBlockEl.appendTo(containerEl);

