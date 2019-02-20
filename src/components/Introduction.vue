<template>
  <div class="introduction">
    <article class="starwars">
  <audio preload="auto" autoplay>
    <source src="../assets/audios/Star_Wars_original_opening_crawl_1977.mp3" type="audio/mpeg" />    
    <source src="../assets/audios/Star_Wars_original_opening_crawl_1977.ogg" type="audio/ogg" />
    Your browser does not support the audio element.
  </audio>
   
  <div class="animation">
    
  <section class="intro">
    A long time ago, in a galaxy far,<br> far away....
  </section>
    
  <section class="titles">
    <div> 
      <p>
        The period of civil war have ended.
        The last Rebel stand was destroyed 
        on Jakku by the Galactic Empire.
      </p>

      <p>
        However, not every rebel was eradicate.
        Some Rebel spaceships, striking
        from a hidden bases.
      </p>

      <p>
        Boba Fett, the bounty hunter
        have gathering some information
        that the Rebel forces is about to make
        their last strike from a hidden planet.
      </p>

      <p>
        To make sure that all Rebels
        got wiped out, the Empire Galactic
        have decided to use the DEATH STAR
        to blow away those Rebels possible strike.
        Now the Galactic Empire is marching
        into their last battle to bring freedom to the galaxy....
      </p>
      </div>
  </section>
  
  <section class="logo">
    <img class="logoStarWars" src="../assets/images/star-wars.svg" />
  </section>
  </div>
</article>
  </div>
</template>

<script>
  export default {
    name: 'Introduction'
  }

</script>

<style lang="scss">
 @import url(https://fonts.googleapis.com/css?family=News+Cycle:400,700);

.home {
  width: 100%;
  height: 100%;
  font: 700 1em "News Cycle", sans-serif;
  letter-spacing:.15em;
	color: #ff6;
	background: #000;
	overflow: hidden;
  margin: 0;
}

.starwars {
  section {
    position: absolute;
    top: 45%;
    left: 50%;
    z-index: 1;
  }  
  
  .intro {
    $intro-width: 15em;
  	width: $intro-width;
    margin: 0 0 0 (- $intro-width / 2);
	  font-size: 200%;
	  font-weight: 400;
  	color: rgb(75, 213, 238);
    opacity: 0;
	  animation: intro 6s ease-out 1s;
  }
  
  .logo {
    opacity: 0;
    animation: logo 9s ease-out 9s; 
    
    img {
      width: inherit;
    }
  }
  
  .titles {
    $titles-width: 14.65em;
    width: $titles-width;
    margin: 0 0 0 (- $titles-width / 2);
    top: auto;
    bottom: 0;
  	height: 50em;
  	font-size: 350%;
  	text-align: justify;
	  overflow: hidden;
    transform-origin: 50% 100%;
    transform:(perspective(300px) rotateX(25deg));
  
    > div {
	    position: absolute;
	    top: 100%;
	    animation: titles 81s linear 13s;
    
      > p {
	      margin: 1.35em 0 1.85em 0;
        line-height: 1.35em;        
        backface:-visibility(hidden);
      }
    }
  }
}

@keyframes intro {
  0% {
    opacity: 0;
  }  
	20% { 
    opacity: 1; 
  }
	90% { 
    opacity: 1; 
  }
	100% { 
    opacity: 0;
  }
}

@keyframes logo {
	0% { 
    $logo-width: 18em;
  	width: $logo-width;
    margin: (- $logo-width / 2) 0 0 (- $logo-width / 2);
    
    transform:(scale(2.75)); 
    opacity: 1; 
  }
	50% { 
    opacity: 1; 
    
    $logo-width: 18em;
  	width: $logo-width;
    margin: (- $logo-width / 2) 0 0 (- $logo-width / 2);
  }
	100% { 
    transform:(scale(.1)); 
    opacity: 0;
    
    $logo-width: 18em;
  	width: $logo-width;
    margin: (- $logo-width / 2) 0 0 (- $logo-width / 2);
  }
}

@keyframes titles {
	0% { 
    top: 100%; 
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
	100% { 
    top: 20%; 
    opacity: 0;
  }
}
</style>