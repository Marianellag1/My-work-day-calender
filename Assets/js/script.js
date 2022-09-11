var today = moment();
var time = "h:mm"
$("#current-day").text(today.format('dddd, MMMM Do'));//current day is displaying

var saveButton = document.querySelector("tbody");
var notes = document.querySelectorAll("textarea").value;
var userWroteSpan = document.querySelector("#user-notes")

renderLastWritten();

function hourDisplay(moment) {
    var presentTime = document.querySelector(".present");
    var futureTime = document.querySelector(".future");
    var pastTime = document.querySelector(".past");

    if (time === presentTime) {

    }
}//need to see how to connect current time to time-block

function renderLastWritten() {
    var timeSlot = localStorage.getItem("timeSlot");

    userWroteSpan.textContent = timeSlot;
    document.body.appendChild(userWroteSpan);//tried making the text stay on page even if user reloads

}

saveButton.addEventListener("click", function (event) {
    // alert("it works!")

    if (event.target.matches(".saveBtn")) {// code= office hours
        console.log(event.target.dataset.time);
        var timeSlot = event.target.dataset.time;
        console.log(event.target.parentElement.children[1].children[0].value);
        var dataInSlot = event.target.parentElement.children[1].children[0].value;
        localStorage.setItem("timeSlot" + timeSlot, dataInSlot);
        renderLastWritten();
    };
});