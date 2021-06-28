var today = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(today);

var saveBtnEl = $(".saveBtn");
var hourEl = saveBtnEl.parent(); 
var descriptionEl = $(".description");
var timeBlockEl = $(".time-block")

function timeBlock() {
    timeBlockEl.each(function() {
    var currentTime = parseInt(moment().hours());
    var timeBlock = timeBlockEl.data('time')
    // console.log(currentTime);
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