$(document).ready(function(){
    dropDownMenu();
    roundedSkills();
    styleScrollBarr();
    slides();
    smootScroll();
    verifScrool();
    colorMenu();
    goToButton();
})

/** function pour la barr de scrool div slide **/
function styleScrollBarr(){
     $(".slide").niceScroll({
         cursorcolor:"#ecf0f1",
         cursorwidth: 5.5,
         cursorborder: "none"
     });
}

/** function menu drop down **/
function dropDownMenu(){
    $("#header_icon_menu").click(function(e){
        e.preventDefault();
        $("#menu_drop_down").toggleClass("header_2_actif");
    })
    
}
    
/** function rounded **/   
function roundedSkills(){
        
        var cons = Math.PI / 180;
        var threePiDivTwo = ((Math.PI)*3)/2;
        
        
        var divSkill = document.getElementsByClassName("divSkills");
        for(i=0;i<=divSkill.length-1;i++){
            
            /** VARIABLE FOR CONVAS **/
            var size = divSkill[i].offsetWidth;
            var center = size / 2;
            var rayon = center - 10;
            var width = (size/10)/2;
            var pourcentage = divSkill[i].getAttribute('data-percent');
            var degret = getDegretRadian(pourcentage,cons);
            
            /** CONVAS **/
            var cnvs = document.createElement('canvas');
            var cntx = cnvs.getContext('2d');
            cnvs.width = cnvs.height = size;
            
                /** GRY CYRCLE **/
                cntx.beginPath();
                cntx.lineWidth = width;
                cntx.strokeStyle = "#ecf0f1";
                cntx.arc(center, center, rayon , 0 , Math.PI * 2 );
                cntx.stroke();
            
                /** ORANGE CYRCLE **/
                cntx.beginPath();
                cntx.lineWidth = width;
                cntx.strokeStyle = "#d35400";
                cntx.arc(center, center, rayon, threePiDivTwo , degret + threePiDivTwo );
                cntx.lineCap = 'round';
                cntx.stroke();
                        
            
            
            /** SPAN **/
            var span = document.createElement('span');
            span.textContent =  pourcentage + '%';
            span.classList.add("span1")
            
            /** ADD CANVAS AND SPAN TO THE DIV **/
            divSkill[i].appendChild(cnvs);
            divSkill[i].appendChild(span);
            
            
        }
        
        
        function getDegretRadian(pr,cons){
            return  ( pr * 360 / 100 ) * cons ;
        }
        
        
        
    }

/** function slide **/
function slides(){
    var index = 1;
    var currentSlide = $("#div_slide"+index);
    var currentDot = $(".control_dots")[index-1];
    
    $("#next").click(function(e){
        e.preventDefault();
        if( index == 4 ){
            index = 1;
        }else{
            index++;
        }
        currentSlide = $("#div_slide"+index);
        currentDot = $(".control_dots")[index-1];
        showSlide(currentSlide);
        dotsColors(index);
    });
    
    $("#preview").click(function(e){
         e.preventDefault();
        if(index == 1){
            index = 4;
        }else{
            index--;
        }
        currentSlide = $("#div_slide"+index);
        currentDot = $(".control_dots")[index-1];
        showSlide(currentSlide);
        dotsColors(index);
    });
    
}

function showSlide(slideshow){
    slideshow.siblings().removeClass("show_slide");
    slideshow.addClass("show_slide");
}

/** function smootScrool menu options **/
function smootScroll(){
    $(".goto").click(function(e){
        e.preventDefault();
	    var the_id = $(this).attr("href");
        goTo(the_id);
        
    })
}

/** function goto**/
function goTo(element){
        $('html, body').animate({
		      scrollTop:$("#"+element).offset().top
        }, 'slow');
}

/** function button a propos **/
function goToButton(){
    $("#gotoaprops").click(function(e){
        e.preventDefault();
        var the_id = $(this).attr("href");
        goTo(the_id);
    })
}


/** function color menu **/
function colorMenu(){
    var position = 100;
    $(window).scroll(function(){
      verifScrool();
    });
}

/** function verifScrool **/
function verifScrool(){
    var position = 100;
     if( $(window).scrollTop() > position ){
           $("#header").addClass("header_color");
     }else {
           $("#header").removeClass("header_color");
     }
}
