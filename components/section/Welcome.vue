<template>
    <div class="frame relative">
        <img src="/images/food-trucks.jpg" alt="">

        <h1 class="fascinate-regular">
            Pépites
        </h1>

        <p class="introText">
            Nous collectionnons les pépites culinaires qui qui nous ont séduits par leur originalité, leur qualité ou leur goût.  Une pépite peut être un sandwich particulièrement délicieux,  une sauce qui  accompagne votre steak-frite, une baguette vraiment croustillant et légè, un plat présentant un rapport qualité-prix exceptionnel ou encore une proposition osée proposant une nouvelle expérience culinaire qui sort des cahntier batus.  Nous cherchons à rendre hommage aux artisans culinaires qui mettent de la personnalité et de la passion dans ce qu'ils nous proposent à déguster.
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

h1 {
    width: 100%;
    font-size: 10vw;
    line-height: 1em;
    text-align: center;
    position: absolute;
    top: 0px;
    left: 0; 
}
.introText {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5em;
    padding: clamp(10px, 10vw, 150px) clamp(10px, 10vw, 150px);
}
</style>