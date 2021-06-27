var today = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(today);

var saveBtnEl = $(".saveBtn");
var hourEl = saveBtnEl.parent(); 
var descriptionEl = $(".description");


function timeBlock() {
    
    
}

function clickSave(event) {
    event.preventDefault();

    var dayPlanner = {
        time: hourEl.value,
        description: descriptionEl.value
    }

    localStorage.setItem("dayPlanner", JSON.stringify(dayPlanner));
    refresh();
}

function refresh() {
    var newDay = JSON.parse(localStorage.getItem("dayPlanner"));
    if (newDay !== null) {
        descriptionEl.textContent = newDay.description;
    }
}

saveBtnEl.on('click', clickSave);