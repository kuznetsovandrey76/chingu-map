ymaps.ready(init);
    var myMap, campers;
    var kuznetsovandrey76, andrei_u, lesedi, heinhoang, eightthday, alecia, 
               curiouscc, chance, marieanabel, jose, vigneshblue, alexbass8888, sangeethasundar;
    var size = 30;

function init(){     
    
    myMap = new ymaps.Map("map", {
        center: [30.00, 0.00],
        zoom: 3,
        controls: ['zoomControl', 'fullscreenControl']
    });

    kuznetsovandrey76 = new ymaps.Placemark([57.185569, 39.396566], {hintContent: '@kuznetsovandrey76', balloonContent: 'Andrey Kuznetsov<br>UTC +3:00' }, 
                                                                    {iconImageHref: 'img/kuznetsovandrey76.png', iconLayout: 'default#image', iconImageSize: [size, size]});
             andrei_u = new ymaps.Placemark([45.748900, 21.208700], {hintContent: '@andrei_u', balloonContent: 'Uzun Andrei'}, 
                                                                    {iconLayout: 'default#image', iconImageHref: 'img/andrei_u.png', iconImageSize: [size, size]});
      sangeethasundar = new ymaps.Placemark([13.085716, 80.208596], {hintContent: '@sangeethasundar', balloonContent: 'Sangeetha Sundar' }, 
                                                                    {iconLayout: 'default#image', iconImageHref: 'img/sangeethasundar.png', iconImageSize: [size, size]});
            curiouscc = new ymaps.Placemark([51.538417, -0.009306], {hintContent: '@curiouscc', balloonContent: 'Silvana P'}, 
                                                                    {iconLayout: 'default#image', iconImageHref: 'img/curiouscc.png', iconImageSize: [size, size]});
               lesedi = new ymaps.Placemark([-33.918861, 18.423300], {hintContent: '@lesedi', balloonContent: 'Lesedi Diamond Damane'}, 
                                                                    {iconLayout: 'default#image', iconImageHref: 'img/lesedi.png', iconImageSize: [size, size]});
	        heinhoang = new ymaps.Placemark([10.691048, 107.246215], {hintContent: '@heinhoang', balloonContent: 'Hein Hoang'}, 
                                                                    {iconLayout: 'default#image', iconImageHref: 'img/heinhoang.png', iconImageSize: [size, size]});
           eightthday = new ymaps.Placemark([52.9835189, -0.0179148], {hintContent: '@8thday', balloonContent: 'Toni Gibbons'}, 
                                                                    {iconLayout: 'default#image', iconImageHref: 'img/eightthday.png', iconImageSize: [size, size]});
               alecia = new ymaps.Placemark([32.217700, -82.413500], {hintContent: '@alecia', balloonContent: 'Toni Gibbons'}, 
                                                                    {iconLayout: 'default#image', iconImageHref: 'img/alecia.png', iconImageSize: [size, size]});
               chance = new ymaps.Placemark([43.464300, -80.520400], {hintContent: '@chance', balloonContent: 'Chance Taken'}, 
                                                                    {iconLayout: 'default#image', iconImageHref: 'img/chance.png', iconImageSize: [size, size]});
          marieanabel = new ymaps.Placemark([48.862500, 2.287500], {hintContent: '@marieanabel', balloonContent: 'Anabel Salomone'}, 
                                                                    {iconLayout: 'default#image', iconImageHref: 'img/marieanabel.png', iconImageSize: [size, size]});
                 jose = new ymaps.Placemark([51.556000, 0.173000], {hintContent: '@jose', balloonContent: 'Jose EseEme'}, 
                                                                    {iconLayout: 'default#image', iconImageHref: 'img/jose.png', iconImageSize: [size, size]});
          vigneshblue = new ymaps.Placemark([13.068236, 80.270717], {hintContent: '@vigneshblue', balloonContent: 'Vigneshwaran Sivalingam'}, 
                                                                    {iconLayout: 'default#image', iconImageHref: 'img/vigneshblue.png', iconImageSize: [size, size]});
         alexbass8888 = new ymaps.Placemark([19.072830, 72.882610], {hintContent: '@alexbass8888', balloonContent: 'Alex Bass'}, 
                                                                    {iconLayout: 'default#image', iconImageHref: 'img/alexbass8888.png', iconImageSize: [size, size]});
    
    campers = [kuznetsovandrey76, andrei_u, lesedi, heinhoang, eightthday, alecia, 
               curiouscc, chance, marieanabel, jose, vigneshblue, alexbass8888, sangeethasundar];

    for (var i = 0; i < campers.length; i++) {
        myMap.geoObjects.add(campers[i]);
    }
}
