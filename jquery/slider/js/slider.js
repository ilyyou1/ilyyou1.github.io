let bild = 0;
let currentIndex = 0; // Variabel som kollar vilken bild man e på
let totalImages = 3; // antalet bilder
let loopInterval; // variabel för loop

$("#Right").on("click", function() {
    console.log("Right"); 

    bild++;
    if (bild == totalImages) { //kolla bilderna
        bild = 0;
        $("#bilder").animate({
            left: "0px"
        }, 1); 
    }

    $("#bilder").animate({
        left: "-=1280px" 
    }, 1000); 
    
    currentIndex++; 
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
});

$("#Left").on("click", function() {
    console.log("Left");

    bild--; 
    if (bild < 0) {
        bild = totalImages - 1; // gå till den förra sliden när man clickar vänster
        $("#bilder").animate({
            left: `-=${1280 * totalImages}px`
        }, 1);
    }

    $("#bilder").animate({
        left: "+=1280px" 
    }, 1000);
    
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
});

$('#startLoop').click(function() {
    // om den ej är igång starta den
    if (!loopInterval) {
        loopInterval = setInterval(function() {
            currentIndex = (currentIndex + 1) % totalImages; 
            
            // gå över till nästa bild
            $("#bilder").animate({
                left: `-=${1280}px`
            }, 1000, function() {
                // efter de går vidare kolla ifall vi är på sista sidan
                if (currentIndex === 0) {
                    // restarta till första sidan
                    $("#bilder").css('left', '0px');
                }
            });
        }, 2000); // 2tusen millisekunder är 2sekunder

        // ändrar namn till stop loop när man klickar på den"
        $(this).text('Stop Loop');
    } else {
        // om man klickar igen då loopet är igång stoppa den
        clearInterval(loopInterval);
        loopInterval = null;  

        // ändra namnet tillbaka till start loop när man stoppar den
        $(this).text('Start Loop');
    }
});
