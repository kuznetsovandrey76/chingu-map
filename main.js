// Объявляем переменные map, infoWindow, clusterMarkers за пределами функции initMap,
// тем самым делая их глобальными и теперь мы их можем использовать внутри любой функции, а не только внутри initMap, как это было раньше.
 
var map, infoWindow, clusterMarkers = [];
  
function initMap() {
    var markerImageSize = 30,  // Размер собственных изображений
        markerImage = new google.maps.Size(markerImageSize, markerImageSize);
 
    var centerMap = {lat: 35, lng: 30};
    var mapOptions = {
        center: centerMap,
        scrollwheel: true, //запрет увеличения
        zoom: 3,
        minZoom: 2,
        fullscreenControl: true
    };
  
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    // Создаем объект информационного окна и помещаем его в переменную infoWindow
    // Так как у каждого информационного окна свое содержимое, то создаем пустой объект, без передачи ему параметра content
    infoWindow = new google.maps.InfoWindow();
  
    // Отслеживаем клик в любом месте карты
    google.maps.event.addListener(map, "click", function() {
        // infoWindow.close - закрываем информационное окно.
        infoWindow.close();
    });
  
    // Перебираем в цикле все координата хранящиеся в markersData
    for (var i = 0; i < markersData.length; i++){  

        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var title = markersData[i].title;
        var name = markersData[i].name;
        var fullText = markersData[i].fullText;
        var icon = {
                    url: markersData[i].img,       
                    scaledSize: markerImage
                    }; 
        // Добавляем маркер с информационным окном
        addMarker(latLng, title, name, fullText, icon); 
    }

    // Изменяем стиль карты
    var styles = [
        {
            stylers: [
                { hue: "#00bfff" },
                { saturation: -60 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];
    map.setOptions({styles: styles});

    var markerCluster = new MarkerClusterer(map, clusterMarkers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    // img в иоей папке
    // var markerCluster = new MarkerClusterer(map, clusterMarkers, {imagePath: 'img/m'});  
}
// Функция добавления маркера с информационным окном
function addMarker(latLng, title, name, fullText, icon) {   
    var markers = new google.maps.Marker({
        position: latLng,
        map: map,
        title: title,
        icon: icon
    });

    // Цикл проходит по функции, добавить каждый маркер в clusterMarkers 
    var test = clusterMarkers.push(markers);
  
    // Отслеживаем клик по нашему маркеру
    google.maps.event.addListener(markers, "click", function() {
  
        // contentString - это переменная в которой хранится содержимое информационного окна.
        var contentString = '<div class="infowindow">' +
                                '<h3>' + name + '</h3>' +
                                '<p>' + fullText + '</p>' +
                            '</div>';
  
        // Меняем содержимое информационного окна
        infoWindow.setContent(contentString);
  
        // Показываем информационное окно
        infoWindow.open(map, markers);  
    });    
}



    