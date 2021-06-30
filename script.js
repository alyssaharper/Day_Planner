function runDayPlanner() {
    refresh();
// sets the time at the top of the jumbotron
var today = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(today);
//DOM elements needed 
var saveBtnEl = $(".saveBtn");
var timeBlockEl = $(".time-block")

// console.log(hourEl);
//created a function that holds the current time, and then adds or removes appropriate classes based on time of day
function timeBlock() {
    var currentTime = moment().hour();
    timeBlockEl.each(function() {
        //targets this element id and splits it by hour starting at index 1 and the makes it an integer
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
    // console.log(currentTime);
    console.log(timeBlock);
    if(timeBlock < currentTime) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
    } else if (timeBlock === currentTime) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    } else {
        $(this).removeClass("present");
        $(this).addClass("future");
        $(this).removeClass("past");
    }
    })
}
timeBlock();

// when the save button is clicked this function runs and sets items to local storage
function clickSave(event) {
    event.preventDefault();

    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val().trim();
    
    localStorage.setItem(time, description);
    refresh();
}
// pulls all the different hours and descriptions from local storage
function refresh() {
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
}

saveBtnEl.on('click', clickSave);

};

runDayPlanner();
