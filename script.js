// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
   let form = document.querySelector('form');
      
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById('pilotStatus');
   let copilotStatus = document.getElementById('copilotStatus');
   let fuelStatus = document.getElementById('fuelStatus');
   let cargoStatus = document.getElementById('cargoStatus');
   let launchStatus = document.getElementById("launchStatus")

   form.addEventListener('submit', function(){
      let pilotName = document.querySelector("input[name=pilotName");
      let copilotName = document.querySelector("input[name=copilotName");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
          alert("All fields are required!");
          event.preventDefault();
           } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            window.alert("Incorrect value type. Try again.");
            event.preventDefault();}
            

if (fuelLevel.value < 10000){
      faultyItems.style.visibility = "visible";
   fuelStatus.innerHTML = "Not enough fuel for journey";
   launchStatus.innerHTML = "Shuttle not ready for launch";
   launchStatus.style.color = "red";
} else if (cargoMass.value > 10000){
   faultyItems.style.visibility = "visible"
   cargoStatus.innerHTML = "Too much mass for shuttle take off";
   launchStatus.innerHTML = "Shuttle not ready for launch";
   launchStatus.style.color = "red";
} else{
   faultyItems.style.visibility = "visible"
   launchStatus.innerHTML = "Shuttle is ready for launch";
   launchStatus.style.color = "green";
}

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         let destination = document.getElementById("missionTarget");
         destination.innerHTML = ` 
         <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${json[1].name}</li>
                <li>Diameter: ${json[1].diameter}</li>
                <li>Star: ${json[1].star}</li>
                <li>Distance from Earth: ${json[1].distance}</li>
                <li>Number of Moons: ${json[1].moons}</li>
            </ol>
                <img src="${json[1].image}"></img>;
         `
      })
})

});
});