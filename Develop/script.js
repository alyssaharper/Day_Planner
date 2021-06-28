// sets the time at the top of the jumbrotron
var today = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(today);
//DOM elements needed 
var saveBtnEl = $(".saveBtn");
var hourEl = saveBtnEl.parent(); 
var descriptionEl = $(".description");
var timeBlockEl = $(".time-block")

console.log(hourEl);
//created a function that holds the current time, and then adds or removes appropriate classes based on time of day
function timeBlock() {
    var currentTime = moment().hour();
    timeBlockEl.each(function() {
    var timeBlock = $(this).attr("id").split("hour")[1];
    // console.log(currentTime);
    console.log(timeBlock);
    if(timeBlock < currentTime) {
        timeBlockEl.removeClass("present");
        timeBlockEl.removeClass("future");
        timeBlockEl.addClass("past");
    } else if (timeBlock === currentTime) {
        timeBlockEl.addClass("present");
        timeBlockEl.removeClass("future");
        timeBlockEl.removeClass("past");
    } else {
        timeBlockEl.removeClass("present");
        timeBlockEl.addClass("future");
        timeBlockEl.removeClass("past");
    }

    })
    
}
timeBlock();


function clickSave(event) {
    event.preventDefault();

    var dayPlanner = {
        time: hourEl.attr('id'),
        description: descriptionEl.val().trim()
    }
// console.log(dayPlanner);
    localStorage.setItem("dayPlanner", JSON.stringify(dayPlanner));
    refresh();
}
//NEED TO FIGURE OUT WHY IT IS DOING FOR ALL HOURS AND NOT JUST ONE
function refresh() {
    var newDay = JSON.parse(localStorage.getItem("dayPlanner"));
    if (newDay !== null) {
        descriptionEl.text(newDay.description);
    }
}

saveBtnEl.on('click', clickSave);