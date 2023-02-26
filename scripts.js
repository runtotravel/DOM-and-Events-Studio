// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    let button1 = document.getElementById("takeoff");
    let button2 = document.getElementById("landing");
    let button3 = document.getElementById("missionAbort");
    let button4 = document.getElementById("up");
    let button5 = document.getElementById("down");
    let button6 = document.getElementById("right");
    let button7 = document.getElementById("left");
    let flightStatus = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");
    let height = document.getElementById("spaceShuttleHeight");
    button1.addEventListener("click", function() {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerText = "Shuttle in flight.";
            background.setAttribute("style", "background-color: blue");
            height.innerText = "10,000";
    } else {
        window.close();
    }
})
    button2.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.") 
            flightStatus.innerText = "The shuttle has landed."
            background.setAttribute("style", "background-color: green");
            height.innerText = "0";
        })
    button3.addEventListener("click", function() {
        if (confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerText = "Mission aborted."
            background.setAttribute("style", "background-color: green");
            height.innerText = "0";
        } else {
            window.close();
        }
    });
    button4.addEventListener("click", function() {
        shuttleBackground.style = `${shuttleBackground.offsetLeft - 10}px`;
        height.innerText = "10,0000"
        

    })
    })
