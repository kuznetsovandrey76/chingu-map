<!DOCTYPE html>
<html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">
      <link rel="stylesheet" href="css/style.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <title>CHINGU Map</title>
  </head>
  <body>

    <header class="header">
    	<img class="header-img" src="img/chingu.png">
        <p class="header-title"><span>Chingu</span> Map</p>
    </header>

    <section class="section">  
      <div id="map" class="section-map"></div>
      <div class="section-form">
      	<div id="login-button" class="section-form__login-button">
		  <img src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png">
		  </img>
		</div>
		<div id="container" class="section-form__container">
		  <h1 class="section-form__container-h">add yourself</h1>
		  <span class="section-form__container-close-btn">
		    <img src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"></img>
		  </span>
		  <form action="mail.php" method="post">
		  	<label for="lat">Latitude:</label>
		  	<input type="text" name="user_lat" id="lat"  placeholder="57.185569" required>
		  	<label for="lng">Longitude:</label>
		  	<input type="text" name="user_lng" id="lng" placeholder="39.396566" required>	
		  	<label for="title">GitHub username:</label>
		  	<input type="text" name="user_title" id="title" placeholder="kuznetsovandrey76" required>
		  	<label for="name">Full name:</label>
		  	<input type="text" name="user_name" id="name" placeholder="Andrey Kuznetsov" required>	
		  	<label for="fullText">Your message:</label>
		  	<input type="text" name="user_fullText" id="fullText" placeholder="Hello World :)" required>
		  	<label for="lang">Language:</label>
		  	<input type="text" name="user_lang" id="lang" placeholder="russian" required>	
		  	<label for="img">Link to your foto:</label>
		  	<input type="text" name="user_img" id="img" placeholder="https://avatars2.githubusercontent.com/u/16838647" required>	
		  	<button type="submit" class="submit">Add</button>
		  	<p>* I'll get a message with your details and add you <span>later</span></p>
		</form>
		</div>

      </div>
    </section>

    <footer class="footer">
    <a class="footer-link" href="https://github.com/kuznetsovandrey76/chingu-map">GitHub repo</a>      
    </footer>

    <!-- SCRIPTS -->
    <script src="js/main.js"></script>
    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGZ8LI4eLYygl3uRy4pUzt0E0CDqfyBkQ&callback=initMap"></script>

    <script type="text/javascript">
		$('#login-button').click(function(){
			$('#login-button').fadeOut("slow",function(){
				$("#container").fadeIn();
			});
		});

		$(".section-form__container-close-btn").click(function(){
			$("#container").fadeOut();
			$("#container, #forgotten-container").fadeOut(800, function(){
				$("#login-button").fadeIn(800);
			});
		});
    </script>
  </body>
</html>
