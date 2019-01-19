let map;

function loadMap() {
    // load the map here
    let lat = 53.3438;
    let long = -6.2546;
    let loc = {latitude: lat, longitude: long};

    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AixcH93GJ4uBd_CimDK4hgDkA8OgFGacaTnOwoIvknaK_8PIXo6J1ma_NE0USGgY'
    });
    // No pushpin to begin with
    // var pushpin = new Microsoft.Maps.Pushpin(loc, {draggable: true});
    // map.entities.push(pushpin);
    return map;
}

function updateMapPushPin(lat, lon, cityName, weather) {
    let location = {latitude: lat, longitude: lon};
    let pushpin = new Microsoft.Maps.Pushpin(location, {draggable: true})
    map.entities._primitives = []; // remove pushpin that was there
    map.entities.push(pushpin); // append new pushpin with updated location
    let centerMap = {latitude: lat, longitude: lon};
    map.setView({ center: centerMap, zoom: 12}); // re-center the map where the pushpin is

    var center = map.getCenter();
    var infobox = new Microsoft.Maps.Infobox(center, { title: 'Current weather for ' + cityName,
    description: `<b>Temperature:</b> ${weather[0]}&#8451 <br> <b>Summary:</b> ${weather[1]}` });

    // Add a click listener to the pushpin
    Microsoft.Maps.Events.addHandler(pushpin, 'click', function () { infobox.setOptions({ visible: true })});
    infobox.setMap(map); // add an info box with the information    
}