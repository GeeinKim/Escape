$(document).ready(function(){

//             // 타이핑될 텍스트를 가져온다 
// var typingTxt = $(".Tbody").text(); 
// typingBool=false;
// typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

// if(typingBool==false){ 
//   // 타이핑이 진행되지 않았다면 
//    typingBool=true;     
//    var tyInt = setInterval(typing,70); // 반복동작 
// } 
     
// function typing(){ 
//   if(typingIdx<typingTxt.length){ 
//     // 타이핑될 텍스트 길이만큼 반복 
//     $(".typing").append(typingTxt[typingIdx]);
//     // 한글자씩 이어준다. 
//     typingIdx++; 
//    } else{ 
//      //끝나면 반복종료 
//     clearInterval(tyInt);
//    } 
// }  
      
    /*웹페이지 열었을 때*/

    function isEmpty(value){

        if(value == null || value.length === 0) {
    
               return "";
    
         } else{
    
                return value;
    
         }
    
    }


    $(".II").hide();
    $(".end").hide();
    $(".Background1").show();
    $(".bookPile1").show();
    $(".bookPile2").show();
    $(".bookPile3").show();
    $(".bookPile4").hide();
    $(".bookPile5").hide();
    $(".bookPile6").show();
    $(".bookPile7").show();

    $(".inventory_B").hide();

    $(".recordPlayer").hide();
    
    $(".recordPlayer1").hide();
    $(".puzzle").hide();

    $("#name").hide();

    $(".QuoteBook").show();

    $(".Background2").hide();
    $(".Arrow1").hide();
    $(".Arrow2").hide();
    $(".JayCarter").hide();
    $(".TextBox").hide();
    $(".TextBox1").hide();
    $(".TextBox2").hide();
    $(".TextBox3").hide();
    $(".TextBox4").hide();
    $(".TextBox5").hide();
    $(".type").hide();
    $(".type1").hide();
    $(".itemBack").hide();

    $(".newspaper").hide();

    $(".inventory").hide();
    $("#paper1").hide();
    $("#paper2").hide();
    $("#paper3").hide();
    $("#paper4").hide();
    $("#paper5").hide();
    $("#key").hide();
    $("#glassbottle").hide();
    $("#glassbottleopen").hide();

    $("#cane").hide(); 
    $("#cane1").show();    

    $(".fireplaceHand").hide();

    $(".paper1").hide();
    $(".paper2").hide();
    $(".paper3").hide();
    $(".paper4").hide();
    $(".paper5").hide();
    $(".caneimage").hide();

    $("#item").hide();
    $(".key").hide();

    $(".scrptT").hide();
    $(".scrpt").hide();
    $(".scrptlocked").hide();

    $(".book1").show();
    $(".book2").hide();
    $(".fireplace").hide();

    $(".carpet").show();

    $(".play").click(function(){
        $(".startp").fadeOut(1000);
        $(".Info").hide();
        $(".Arrow2").fadeIn(1000);
        $(".inventory_B").fadeIn(1000);
    });

    $(".HowTo").click(function(){
        var audio = new Audio('sound/Paper2.mp3');
        audio.play();
        $(".II").show();
    });


    $(".II").click(function(){
  
        $(".II").hide();
    });

    $(".retry").click(function(){
        window.location.href="https://geeinkim.github.io/Escape/";
    });

    $(".bookPile").click(function(){
        var audio = new Audio('sound/bookPile.mp3');
        audio.play();
        $(".JayCarter").fadeIn();
        $(".TextBox3").fadeIn();
        $(".JayBack").hide();
        $(".JayNormal").show();
        $("#name").fadeIn();
        $(".TextBox1").hide();
        $(".TextBox2").hide();
        $(".TextBox").hide();
        $(".TextBox4").hide();
        $(".TextBox5").hide();
        $(".scrpt_bookPile1").show();
        $(".scrptW").hide();
        $(".scrpt_fire").hide();
    });

    $(".recordPlayer").click(function(){
        const audio = document.querySelector("#audio");
        audio.play();
        $(".recordPlayer").hide();
        $(".recordPlayer1").show();
    });

    $(".recordPlayer1").click(function(){
        const audio = document.querySelector("#audio");
        audio.pause();
        $(".recordPlayer").show();
        $(".recordPlayer1").hide();
    });


    $(".fireplaceHand").click(function(){
        var audio = new Audio('sound/fire.mp3');
        audio.play();
        $(".JayCarter").fadeIn();
        $(".JayBack").hide();
        $(".JayNormal").show();
        $("#name").fadeIn();
        $(".TextBox3").fadeIn();
        $(".TextBox1").hide();
        $(".TextBox2").hide();
        $(".TextBox").hide();
        $(".TextBox4").hide();
        $(".TextBox5").hide();
        $(".scrpt_bookPile1").hide();
        $(".scrptW").hide();
        $(".scrpt_fire").show();
    });
  $(".objects").click(function(){
  
        $(".JayCarter").fadeIn();
        $(".JayBack").hide();
        $(".JayNormal").show();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();
        $(".TextBox1").hide();
        $(".TextBox2").hide();
        $(".TextBox3").hide();
        $(".TextBox4").hide();
        $(".TextBox5").hide();
        $(".scrptlocked").hide();
        $(".scrptT").hide();
        $(".scrpt").show();


setInterval(typing, 200)
    });

    $(".Arrow2").click(function(){
        $(".Background1").hide();
        $(".Background2").show();
        $(".newspaper").show();
        $(".Arrow2").hide();
        $(".Arrow1").show();
        $(".door").hide();

        $(".recordPlayer").show();

        $(".book1").hide();
        $(".book2").show();
        
        $(".carpet").hide();

        $(".bookPile1").hide();
        $(".bookPile2").hide();
        $(".bookPile3").hide();
        $(".bookPile4").show();
        $(".bookPile5").show();
        $(".bookPile6").hide();
        $(".bookPile7").hide();
        $(".fireplaceHand").show();

        $("#cane1").hide(); 
        $("#cane").show();  

        $(".QuoteBook").hide();
        $(".typewriter").hide();
        
    });

    $(".Arrow1").click(function(){
        
        $(".Background1").show();
        $(".Background2").hide();
        $(".newspaper").hide();
        $(".Arrow2").show();
        $(".Arrow1").hide();
        $(".door").show();
        $(".typewriter").show();
        $(".book1").show();
        $(".book2").hide();

        $(".recordPlayer").hide();
        
    $(".recordPlayer1").hide();
         $(".carpet").show();

        $(".bookPile1").show();
        $(".bookPile2").show();
        $(".bookPile3").show();
        $(".bookPile4").hide();
        $(".bookPile5").hide();
        $(".bookPile6").show();
        $(".bookPile7").show();
        $(".fireplace").hide();
        $(".fireplaceHand").hide();

        $(".QuoteBook").show();
        $("#cane").hide(); 
        $("#cane1").show();  
    });
    
    
    $(".inventory_B").click(function(){
        $(".inventory").fadeIn();
        $(".inventory_B").fadeOut();

    });

    $(".inventory p").click(function(){
        $(".inventory").fadeOut();
        $(".inventory_B").fadeIn();

    });


    
    $(".door").click(function(){
        var audio = new Audio('sound/door.mp3');
        audio.play();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();
        $(".scrpt").hide();
        $(".scrptT").hide();
        $(".scrptlocked").show();
        $(".TextBox1").hide();
        $(".TextBox2").hide();
        $(".TextBox3").hide();
        $(".TextBox4").hide();
        $(".TextBox5").hide();
    });

    $(".wall").click(function(){
        $(".JayCarter").fadeIn();
        $(".JayBack").hide();
        $(".JayNormal").show();
        $("#name").fadeIn();
        $(".TextBox3").fadeIn();
        $(".scrpt_fire").hide();
        $(".scrpt_bookPile1").hide();
        $(".scrptW").show();
        $(".TextBox1").hide();
        $(".TextBox2").hide();
        $(".TextBox").hide();
        $(".TextBox4").hide();
        $(".TextBox5").hide();
        
    });


    $(".typewriter").click(function(){
        var audio = new Audio('sound/typewriter.mp3');
        audio.play();
        $(".JayCarter").fadeIn();
        $(".JayNormal").hide();
        $(".JayBack").show();
        $("#name").fadeIn();
        $(".TextBox1").fadeIn();
        $(".scrptT").show();
        $(".scrptQB").hide();
        $(".scrptlocked").hide();
        $("type1").hide();
        $(".TextBox").hide();
        $(".TextBox2").hide();
        $(".TextBox3").hide();
        $(".TextBox4").hide();
        $(".TextBox5").hide();
        $(".TextBox1").click(function(){
            $(".type").fadeIn(1000);
            $(".type1").hide();
            $(".JayCarter").hide();
            $(".TextBox1").hide();
            $("#name").hide();
        });
    });



    
    $(".QuoteBook").click(function(){
        var audio = new Audio('sound/Paper2.mp3');
        audio.play();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox1").fadeIn();
        $(".TextBox").hide();
        $(".TextBox2").hide();
        $(".TextBox3").hide();
        $(".TextBox4").hide();
        $(".TextBox5").hide();
        $(".scrptT").hide();
        $(".scrptQB").show();
        $(".scrptlocked").hide();
        $(".TextBox1").click(function(){
            $(".type1").fadeIn(1000);
            $(".type").hide();
            $(".JayCarter").hide();
            $(".TextBox1").hide();
            $("#name").hide();
        });
    });

    $(".TextBox").click(function(){
        $(".TextBox").hide();
        $("#name").hide();
        $(".JayCarter").hide();
    });

    $(".TextBox2").click(function(){
        $(".TextBox2").hide();
        $("#name").hide();
        $(".JayCarter").hide();
    });

    $(".TextBox3").click(function(){
        $(".TextBox3").hide();
        $("#name").hide();
        $(".JayCarter").hide();
    });

    $(".TextBox4").click(function(){
        $(".TextBox4").hide();
        $("#name").hide();
        $(".JayCarter").hide();
    });

    $(".TextBox5").click(function(){
        $(".TextBox5").hide();
        $("#name").hide();
        $(".JayCarter").hide();
    });



    $(".typeback").click(function(){
        $(".type").hide();
        $(".type1").hide();
    });

    $(".textback").click(function(){
        $(".JayCarter").hide();
        $(".TextBox").hide(); 
        $(".TextBox2").hide();
        $(".TextBox3").hide();
        $(".TextBox4").hide();
        $("#name").hide();
        $(".type").hide();
        $(".type1").hide();
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    });

    $(".book1").click(function(){
        var audio = new Audio('sound/Paper.mp3');
        audio.play();
        $("#paper1").show();
        $(".book1").remove();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox2").fadeIn();
        $(".scrptC").hide();
        $(".scrptN").hide();
        $(".scrptB").show();
        $(".scrptN1").hide();
        $(".scrptFF").hide();
        $(".TextBox1").hide();
        $(".TextBox").hide();
        $(".TextBox3").hide();
        $(".TextBox4").hide();   
        $(".TextBox5").hide();
   
    });

    $(".book2").click(function(){
        var audio = new Audio('sound/Paper.mp3');
        audio.play();
        $("#paper2").show();
        $(".book2").remove();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $("#name").fadeIn();
        $(".JayNormal").hide();
        $(".TextBox2").fadeIn();
        $(".scrptC").hide();
        $(".scrptN").hide();
        $(".scrptN1").hide();
        $(".scrptFF").hide();
        $(".scrptB").show();
        $(".TextBox1").hide();
        $(".TextBox").hide();
        $(".TextBox3").hide();
        $(".TextBox4").hide();
        $(".TextBox5").hide();
   
    });

    $("#paper1").click(function(){
        $(".paper1").show();
        $(".itemBack").show();
        $(".door").hide();
    });

    $("#paper2").click(function(){
        $(".paper2").show();
        $(".itemBack").show();
        $(".door").hide();
    });

    $("#paper3").click(function(){
        $(".paper3").show();
        $(".itemBack").show();
        $(".door").hide();
    });

    $("#paper4").click(function(){
        $(".paper4").show();
        $(".itemBack").show();
        $(".door").hide();
    });

    $("#paper5").click(function(){
        $(".paper5").show();
        $(".itemBack").show();
        $(".door").hide();
    });

    $("#key").click(function(){
        $(".key").show();
        $(".itemBack").show();
    });

    $("#glassbottle").click(function(){
        $("#paper3").show();
        $("#glassbottle").hide();
        $("#glassbottleopen").show();
    });

    $("#cane1").click(function(){
        $(".caneimage").show();
        $(".itemBack").show();
        $(".door").hide();
        $(".fireplace").hide();
    });

    $("#cane").click(function(){
        $(".caneimage").show();
        $(".itemBack").show();
        $(".door").hide();
        $(".fireplace").show();
    });


    $(".itemBack").click(function(){
        $("#item").fadeOut();
        $(".key").fadeOut();
        $(".paper1").fadeOut();
        $(".paper2").fadeOut();
        $(".paper3").fadeOut();
        $(".paper4").fadeOut();
        $(".paper5").fadeOut();
        $(".itemBack").fadeOut();
        $(".caneimage").fadeOut();
        $(".fireplace").hide();
        $(".puzzle").hide();
        if(B1==true){
        $(".door").show();}
        else{ $(".door").hide();}
    });


    $(".book2").click(function(){
        $("#paper2").show();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox2").fadeIn();
        $(".TextBox1").hide();
        $(".TextBox").hide();
        $(".TextBox3").hide();
        $(".TextBox4").hide();
        $(".TextBox5").hide();
   
    });

    $(".carpet").click(function(){
        $("#paper5").show();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox2").fadeIn();
        $(".scrptC").show();
        $(".scrptN").hide();
        $(".scrptN1").hide();
        $(".scrptFF").hide();
        $(".scrptB").hide();
        $(".TextBox1").hide();
        $(".TextBox").hide();
        $(".TextBox3").hide();
        $(".TextBox4").hide();
        $(".TextBox5").hide();
        $(".carpet").remove();
   
    });


    $(".newspaper").click(function(){
        $(".JayCarter").fadeIn();
        $(".JayBack").hide();
        $(".JayNormal").show();
        $("#name").fadeIn();
        $(".TextBox2").fadeIn();
        $(".scrptC").hide();       
        $(".scrptB").hide();
        $(".scrptN").hide();
        $(".scrptN1").show(); 
        $(".scrptFF").hide();
        $(".TextBox1").hide();
        $(".TextBox").hide();
        $(".TextBox3").hide();
        $(".TextBox4").hide();
        $(".TextBox5").hide();
   
    });

    
    $(".newspaper").dblclick(function(){
        $("#paper4").show();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox2").fadeIn();
        $(".scrptC").hide();       
        $(".scrptB").hide();
        $(".scrptN").show();
        $(".scrptN1").hide();   
        $(".scrptFF").hide();
        $(".newspaper").hide();  
        $(".TextBox1").hide();
        $(".TextBox").hide();
        $(".TextBox3").hide();
        $(".TextBox4").hide();
        $(".TextBox5").hide();
        $(".newspaper").remove();

    });



   
var typingBool = false; 
var typingIdx=0; 




$( function() {
    $( ".paper1" ).draggable();
    $( ".paper2" ).draggable();
    $( ".paper3" ).draggable();
    $( ".paper4" ).draggable();
    $( ".paper5" ).draggable();
  } );


  $( function() {
    $( "#unlock" ).draggable({ revert: "invalid" }
    );
    $( ".door" ).droppable({
      drop: function( event, ui ) {
        var audio = new Audio('sound/dooropenning.mp3');
        audio.play();

        $(".JayCarter").fadeIn();
        $(".JayBack").hide();
        $(".JayNormal").show();
        $("#name").fadeIn();
        $(".TextBox5").fadeIn();
        $(".TextBox1").hide();
        $(".TextBox").hide();
        $(".TextBox2").hide();
        $(".TextBox3").hide();
        $(".TextBox4").hide();
        $(".TextBox5").click(function(){
          $(".end").fadeIn(1500);
          var audio = new Audio('sound/end.mp3');
          audio.play();});
          
        $(".JayCarter").click(function(){
            $(".end").fadeIn(1500);
            var audio = new Audio('sound/end.mp3');
            audio.play();}
        )}
  
});


  
  });


  $( function() {
    $( ".caneimage" ).draggable({ revert: "invalid" }
    );
    $( ".fireplace" ).droppable({
      drop: function( event, ui ) {
        $("#glassbottle").show();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox2").fadeIn();
        $(".scrptC").hide();
        $(".scrptN").hide();
        $(".scrptB").hide();
        $(".scrptN1").hide();
        $(".scrptFF").show();
        $(".TextBox1").hide();
        $(".TextBox").hide();
        $(".TextBox3").hide();
        $(".TextBox4").hide();   

        }
  
});


  
  });
  

});


