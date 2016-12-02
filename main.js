ymaps.ready(init);
    var myMap,
        kuznetsovandrey76,
        andrei_u,
        sangeethasundar,
        curiouscc,
        lesedi;
  	

function init(){     
    myMap = new ymaps.Map("map", {
        center: [39.07, 21.17],
        zoom: 3,
        controls: ['zoomControl', 'fullscreenControl']
    });

// (start) how to add loop in this block?

    kuznetsovandrey76 = new ymaps.Placemark([57.185569, 39.396566], {
    	hintContent: '@kuznetsovandrey76', 
        balloonContent: 'Andrey Kuznetsov<br>UTC +3:00' 
    }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/kuznetsovandrey76.png',
    iconImageSize: [50, 50],
    // iconImageOffset: [-3, -42]        
    });

    andrei_u = new ymaps.Placemark([45.748900, 21.208700], {
    	hintContent: '@andrei_u', 
        balloonContent: 'Uzun Andrei' 
    }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/andrei_u.png',
    iconImageSize: [50, 50],
    iconImageOffset: [-3, -42]        
    });
    
	sangeethasundar = new ymaps.Placemark([13.085716, 80.208596], {
    	hintContent: '@sangeethasundar', 
        balloonContent: 'Sangeetha Sundar' 
    }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/sangeethasundar.png',
    iconImageSize: [50, 50],
    iconImageOffset: [-3, -42]        
    });

	curiouscc = new ymaps.Placemark([51.538417, -0.009306], {
    	hintContent: '@curiouscc', 
        balloonContent: 'Silvana P' 
    }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/curiouscc.png',
    iconImageSize: [50, 50],
    iconImageOffset: [-3, -42]        
    });

	lesedi = new ymaps.Placemark([-33.918861, 18.423300], {
    	hintContent: '@lesedi', 
        balloonContent: 'Lesedi Diamond Damane' 
    }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/lesedi.png',
    iconImageSize: [50, 50],
    iconImageOffset: [-3, -42]        
    });
// (end)

// (start) how to add loop in this block?
    myMap.geoObjects.add(kuznetsovandrey76);
    myMap.geoObjects.add(andrei_u);
    myMap.geoObjects.add(sangeethasundar);
    myMap.geoObjects.add(curiouscc);
    myMap.geoObjects.add(lesedi);
// (end)    
}