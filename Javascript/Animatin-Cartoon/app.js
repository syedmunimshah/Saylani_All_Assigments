var left = 0;
var right = 0; //is ko global banaya tw chalraha hy agr isko function ky under banaya tw ni chalyga .q?
function abc() {
    var character = document.getElementById('character');

    console.log(left)
    // forward chalyga code d
    if (event.keyCode === 68  && left < 400) {
        left = left + 10;
        character.style.left = left + "px";
        // character.src="./img/ironMan/iron-walk.gif"
        character.src = "./img/ironMan/stand.gif"

        //         setTimeout(()=>{
        // character.src="./img/ironMan/stand.gif"
        //         },700)

    }
    // backward chalyga code a
    else if (event.keyCode === 65 && left > -10) {
        left = left - 10;
        character.style.left = left + "px";
    }
    //beth jaega s
    else if (event.keyCode === 83) {


        character.src = "./img/ironMan/ironman-crouch.gif"
        setTimeout((() => {
            character.src = "./img/ironMan/stand.gif"
            character.style.width = "250px"
            character.style.height = "250px"
        }), 700)
    }
    // uper chalyga w
    else if (event.keyCode === 87) {


        character.src = "./img/ironMan/iron-fly.gif"
        character.style.width = "250px"
        character.style.height = "400px"
        setTimeout((() => {
            character.src = "./img/ironMan/stand.gif"
            character.style.width = "250px"
            character.style.height = "250px"
        }), 700)
    }
    // power hand ki chalyga z 
    else if (event.keyCode === 90) {
        character.src = './img/ironMan/power.gif'
        character.style.width = "522px"
        character.style.height = "559px"
        setTimeout((() => {
            character.src = "./img/ironMan/stand.gif"
            character.style.width = "250px"
            character.style.height = "250px"
        }), 5550)

    }
    // power sena chalyga c
    else if (event.keyCode === 67) {
        character.src = './img/ironMan/iron-unibeam.gif'
        character.style.width = "670px"
        character.style.height = "387px"
        setTimeout((() => {
            character.src = "./img/ironMan/stand.gif"
            character.style.width = "250px"
            character.style.height = "250px"
        }), 1500)

    }
    // block sena chalyga q
    else if (event.keyCode === 81) {
        character.src = './img/ironMan/iron-shields.gif'
        character.style.width = "300px"
        character.style.height = "300px"
        setTimeout((() => {
            character.src = "./img/ironMan/stand.gif"
            character.style.width = "250px"
            character.style.height = "250px"
        }), 2500)

    }
    // beth ky power  chalyga x
    else if (event.keyCode === 88) {
        character.src = './img/ironMan/x.gif'
        character.style.width = "557px"
        character.style.height = "400px"
        setTimeout((() => {
            character.src = "./img/ironMan/stand.gif"
            character.style.width = "250px"
            character.style.height = "250px"
        }), 5220)

    }
    console.log(event.keyCode)
    // sir sy pochna hy setTimeout(function(){},1000) dono mai faraq kia hy ?
    // setTimeout((()=>{
    //     console.log("hello 1s");
    // }),1000)



    //spider man start 
   
    var spiderCharacter = document.getElementById("Spider");
   
    console.log(right)
   // forward hoga j
    if (event.keyCode === 74  && right <370) {
        right = right + 10;
        spiderCharacter.style.right = right + "px"
        spiderCharacter.src="./img/spiderman/spidey-whateva.gif";


    }
// backward hoga l
    else if (event.keyCode === 76 && right >0) {
        right = right - 10;
        spiderCharacter.style.right = right + "px"
        spiderCharacter.src = './img/spiderman/spidey-whateva.gif'
       

    }
    // uper jaega hoga i
    else if (event.keyCode === 73) {
        spiderCharacter.src = './img/spiderman/spidey-dashing.gif'
         spiderCharacter.style.width = "500px"
         spiderCharacter.style.height = "500px"
         spiderCharacter.style.transform="scaleX(-1)"
         setTimeout(() => {
            spiderCharacter.src = './img/spiderman/spidey-whateva.gif'
            spiderCharacter.style.width = "250px"
            spiderCharacter.style.height = "250px"
            spiderCharacter.style.transform="scaleX(1)"
         }, 1000);

    }
    // bethyga k
    else if (event.keyCode === 75) {
        spiderCharacter.src = './img/spiderman/m-spiderman.gif'
        // spiderCharacter.src = './img/spiderman/spidey-dashing.gif'
         spiderCharacter.style.width = "250px"
         spiderCharacter.style.height = "250px"
         spiderCharacter.style.transform="scaleX(-1)"
         setTimeout(() => {
            spiderCharacter.src = './img/spiderman/spidey-whateva.gif'
            spiderCharacter.style.width = "250px"
            spiderCharacter.style.height = "250px"
            spiderCharacter.style.transform="scaleX(1)"
         }, 1000);

    }
     // punch u
    else if (event.keyCode === 85) {
        spiderCharacter.src = './img/spiderman/u.gif'
       
         spiderCharacter.style.width = "600px"
         spiderCharacter.style.height = "600px"
         spiderCharacter.style.transform="scaleX(-1)"
         setTimeout(() => {
            spiderCharacter.src = './img/spiderman/spidey-whateva.gif'
            spiderCharacter.style.width = "250px"
            spiderCharacter.style.height = "250px"
            spiderCharacter.style.transform="scaleX(1)"
         }, 1000);

    }
    else if (event.keyCode === 79) {
        spiderCharacter.src = './img/spiderman/o.gif'
       
         spiderCharacter.style.width = "250px"
         spiderCharacter.style.height = "250px"
         spiderCharacter.style.transform="scaleX(-1)"
         setTimeout(() => {
            spiderCharacter.src = './img/spiderman/spidey-whateva.gif'
            spiderCharacter.style.width = "250px"
            spiderCharacter.style.height = "250px"
            spiderCharacter.style.transform="scaleX(1)"
         }, 1000);

    }
    else if (event.keyCode === 79) {
        spiderCharacter.src = './img/spiderman/o.gif'
       
         spiderCharacter.style.width = "250px"
         spiderCharacter.style.height = "250px"
         spiderCharacter.style.transform="scaleX(-1)"
         setTimeout(() => {
            spiderCharacter.src = './img/spiderman/spidey-whateva.gif'
            spiderCharacter.style.width = "250px"
            spiderCharacter.style.height = "250px"
            spiderCharacter.style.transform="scaleX(1)"
         }, 1000);

    }
    else if (event.keyCode === 77) {
        spiderCharacter.src = './img/spiderman/m.gif'
       
         spiderCharacter.style.width = "400px"
         spiderCharacter.style.height = "400px"
         spiderCharacter.style.transform="scaleX(-1)"
         setTimeout(() => {
            spiderCharacter.src = './img/spiderman/spidey-whateva.gif'
            spiderCharacter.style.width = "250px"
            spiderCharacter.style.height = "250px"
            spiderCharacter.style.transform="scaleX(1)"
         }, 2150);

    }
    else if (event.keyCode === 188) {
        spiderCharacter.src = './img/spiderman/m-spidey.gif'
       
         spiderCharacter.style.width = "350px"
         spiderCharacter.style.height = "350px"
         spiderCharacter.style.transform="scaleX(-1)"
         setTimeout(() => {
            spiderCharacter.src = './img/spiderman/spidey-whateva.gif'
            spiderCharacter.style.width = "250px"
            spiderCharacter.style.height = "250px"
            spiderCharacter.style.transform="scaleX(1)"
         }, 2150);

    }
    else if (event.keyCode === 190) {
        spiderCharacter.src = './img/spiderman/n.gif'
       
         spiderCharacter.style.width = "350px"
         spiderCharacter.style.height = "350px"
         spiderCharacter.style.transform="scaleX(-1)"
         setTimeout(() => {
            spiderCharacter.src = './img/spiderman/spidey-whateva.gif'
            spiderCharacter.style.width = "250px"
            spiderCharacter.style.height = "250px"
            spiderCharacter.style.transform="scaleX(1)"
         }, 4600);

    }


    // spider man end

}
window.onkeydown = abc;
