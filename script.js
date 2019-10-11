/*global fetch*/
document.getElementById("randomPlanet").addEventListener("click", function(event) {
    event.preventDefault();
    var url = "https://swapi.co/api/planets/";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let rand = Math.floor(Math.random() * json.count);
            console.log(json);
            return rand;
        }).then(function(rand) {
            url += rand + "/";
            fetch(url)
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                    console.log(json);
                    let results = "";
                    results += "<h2>";
                    results += json.name;
                    results += "</h2>";
                    results += "<ul>";
                    results += "<li>Climate: " + json.climate + "</li>"
                    results += "<li>Population: " + json.population + "</li>"
                    results += "<li>Terrain: " + json.terrain + "</li>"
                    results += "<li>Diameter: " + json.diameter + "m</li>"
                    results += "<li>Rotation Period: " + json.rotation_period + " Space Units</li>"
                    results += "<li>Orbital Period: " + json.orbital_period + " Mega-Space Units</li>"
                    results += "<li>Gravity: " + json.gravity + "</li>"
                    results += "<li>Surface Water: " + json.suface_water + "</li>"
                    document.getElementById("planetResults").innerHTML = results;
                });
        });

});
