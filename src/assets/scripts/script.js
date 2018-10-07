let map;

function loadMap() {
    // load the map here
    let lat = 53.3438;
    let long = -6.2546;
    let loc = {latitude: lat, longitude: long};
    
    
    // console.log('in the map method');
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AixcH93GJ4uBd_CimDK4hgDkA8OgFGacaTnOwoIvknaK_8PIXo6J1ma_NE0USGgY'
    });
    var pushpin = new Microsoft.Maps.Pushpin(loc, {draggable: true});
    console.log('this is the pushpin');
    console.log(pushpin);
    map.entities.push(pushpin);
    return map;
}