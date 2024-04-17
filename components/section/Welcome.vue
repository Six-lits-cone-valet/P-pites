<template>
    <div class="relative">
        <div class="frame">
            <img src="/images/food-trucks.jpg" alt="">
        </div>

        <h1 class="fascinate-regular">
            Pépites
        </h1>

        <p class="introText">
            Nous collectionnons les pépites culinaires qui nous ont séduits par leur originalité, leur qualité ou leur goût.  Une pépite peut être un sandwich particulièrement délicieux,  une sauce qui  accompagne votre steak-frites, une baguette vraiment croustillante et légère, un plat présentant un rapport qualité-prix exceptionnel ou encore une proposition osée pour une nouvelle expérience gastronomique qui sort des sentiers battus.  Nous cherchons à rendre hommage à tous les artisans qui mettent de la personnalité et de la passion dans leurs créations offertes à la dégustation.
        </p>
    </div>
    
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fascinate&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.fascinate-regular {
  font-family: "Fascinate", system-ui;
  font-weight: 400;
  font-style: normal;
}
.frame {
    padding: 10px 20px;
}
img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: center;
    border-radius: 40px;
}

h1 {
    width: 100%;
    font-size: clamp(3.5rem, 10vw, 9rem);
    line-height: 1em;
    text-align: center;
    position: absolute;
    top: 0px;
    left: 0; 
}
.introText {
    width: min(100%, 1200px);
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 600;
    line-height: 1.5em;
    padding: clamp(10px, 10vw, 150px) clamp(10px, 10vw, 150px);
    margin: auto;
}
</style>