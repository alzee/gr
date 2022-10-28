if(document.querySelector('#map')){
    let coord = [110.749462, 32.071229];

    let map = new AMap.Map('map', {
        resizeEnable: true,
        zoom:14,
        center: coord
    });


    function addMarker(coord) {
        let marker = new AMap.Marker({
            //position: new AMap.LngLat(coord[0], coord[1]),
        });
        marker.setPosition(coord);
        map.add(marker);
    }

    function showInfoWindow(coord) {
        let infoWindow = new AMap.InfoWindow({
            anchor: 'top-left',
            content: '房县开源砂石料经营有限公司',
        });
        infoWindow.open(map, coord);
    }

    addMarker(coord);
    showInfoWindow(coord);
}
