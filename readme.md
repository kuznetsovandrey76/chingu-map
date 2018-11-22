**The Chingu world map** 

If you want to open the project on your computer.
1. `git clone https://github.com/kuznetsovandrey76/chingu-map.git`
2. `cd chingu-map`
3. `npm install` - install `https://nodejs.org/en/`  
4. `node server.js`
5. `127.0.0.1:8080`

:pencil2: If you want to add yourself to the map: 
```
,{
    "lat": [number], 
    "lng": [number], 
    "title": "@[your username]", 
    "name": "[your full name]", 
    "fullText": "any text", 
    "lang":"native: <i class=\"em em-[ru]\"></i>",
    "img": "img/[your username].jpe"
} 
```

1. change the text in brackets (remove brackets)
2. open `https://www.google.com/maps` find your place     
`lat` - first coordinate, `lng` - second coordinate  
3. Find your flag here: `https://afeld.github.io/emoji-css/`
4. add photos to the folder `img `
_(Photo should be square, small size, in the photo there is no icon of the cohort. 
Name of the image, your user name)_  
5. record changes in `js/data.json`
6. make a pull request :fire:



