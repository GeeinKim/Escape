$(document).ready(function(){

    let myInterval 
    $(".an").hide();

    $(".textback3").hide();
    $(".textback2").hide();
    $(".textback1").hide();
    $(".textback").show();

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
    $(".type").hide();
    $(".type1").hide();
    $(".itemBack").hide();

    $("#newspaper").hide();
    $(".newspaper1").hide();

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
        $(".all").hide();
        $(".JayCarter").fadeIn();
        $(".TextBox").fadeIn();
        $(".JayBack").hide();
        $(".JayNormal").show();
        $("#name").fadeIn();
        $(".bookPile").hide();

        const content = "It is not a good idea to read a book right now... ";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)
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
        $(".all").hide();
        $("#bookPile").hide();
        $(".JayCarter").fadeIn();
        $(".JayBack").hide();
        $(".JayNormal").show();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();
        const content = "I'm going to burn my hand if I reach there.";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)
    });

  $(".objects").click(function(){
  
        $(".JayCarter").fadeIn();
        $(".JayBack").hide();
        $(".JayNormal").show();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();
        $(".all").hide();
        $("#bookPile").hide();


        const content = "Nothing is here.";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)



    });

    $(".Arrow2").click(function(){
        $(".Background1").hide();
        $(".Background2").show();
        $("#newspaper").show();
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
        $("#newspaper").hide();
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
        $(".all").hide();
        $("#bookPile").hide();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();

        const content = "It seems I need a key to open this...";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)

    });

    $(".wall").click(function(){
        $(".all").hide();
        $("#bookPile").hide();
        $(".JayCarter").fadeIn();
        $(".JayBack").hide();
        $(".JayNormal").show();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();

        const content = "I need to move to see this side of the room.";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)
        
    });


    $(".typewriter").click(function(){
        $(".all").hide();
        $("#bookPile").hide();
        var audio = new Audio('sound/typewriter.mp3');
        audio.play();
          
        const content = "Maybe I can type in this typewriter...";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)

        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();
        $(".textback1").show();
        $(".textback").hide();
        $(".textback1").click(function(){
            $(".type").fadeIn(1000);
            $(".type1").hide();
            $(".JayCarter").hide();
            $(".TextBox1").hide();
            $("#name").hide();
            $(".textback1").hide();
            $(".textback").show();
            $(".all").show();
            $("#bookPile").show();
        });
        
    });



    
    $(".QuoteBook").click(function(){
        $(".all").hide();
        $("#bookPile").hide();
        var audio = new Audio('sound/Paper2.mp3');
        audio.play();

        const content = "Which page should I read?";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)

        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();
        $(".textback1").show();
        $(".textback").hide();
        $(".textback1").click(function(){
            $(".type1").fadeIn(1000);
            $(".type").hide();
            $(".JayCarter").hide();
            $(".TextBox1").hide();
            $("#name").hide();
            $(".textback1").hide();
            $(".textback").show();
            $(".all").show();
        });
    });

    $(".TextBox").click(function(){
        $(".TextBox").hide();
        $("#name").hide();
        $(".JayCarter").hide();
        clearInterval(myInterval)
        $(".text").empty()
        console.log($(".text"))
        $(".all").show();
        $("#bookPile").show();
    });



    $(".typeback").click(function(){
        $(".type").hide();
        $(".type1").hide();
        $(".all").show();
        $("#bookPile").show();
        $(".an").hide();
    });

    $(".textback").click(function(){
        $(".JayCarter").hide();
        $(".TextBox").hide(); 
        $("#name").hide();
        $(".type").hide();
        $(".type1").hide();
        clearInterval(myInterval)
        $(".text").empty()
        console.log($(".text"))
        $(".all").show();
        $("#bookPile").show();
        $(".an").hide();
    });

    $(".book1").click(function(){
        $(".an").fadeIn(1000, function() { $(".an").fadeOut(1500)});
        $(".all").hide();
        $("#bookPile").hide();
        var audio = new Audio('sound/Paper.mp3');
        audio.play();
        $("#paper1").show();
        $(".book1").remove();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();
        $(".TextBox4").hide();   
        $(".TextBox5").hide();
        
        const content = "Something is inside of this book...";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)
   
    });

    $(".book2").click(function(){
        $(".an").fadeIn(1000, function() { $(".an").fadeOut(1500)});
        $(".all").hide();
        $("#bookPile").hide();
        var audio = new Audio('sound/Paper.mp3');
        audio.play();
        $("#paper2").show();
        $(".book2").remove();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $("#name").fadeIn();
        $(".JayNormal").hide();
        $(".TextBox").fadeIn();
        $(".TextBox4").hide();
        $(".TextBox5").hide();

        const content = "Something is inside of this book...";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)
   
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
        $(".door").show();
    });

    $("#glassbottle").click(function(){
        $(".an").fadeIn(1000, function() { $(".an").fadeOut(1500)});
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
        $(".all").show();
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



    $(".carpet").click(function(){
        $(".an").fadeIn(1000, function() { $(".an").fadeOut(1500)});
        $(".all").hide();
        $("#bookPile").hide();
        $("#paper5").show();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();
        $(".carpet").remove();

        const content = "Something is underneath of this carpet...";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)
   
    });


    $(".newspaper").click(function(){
        $(".all").hide();
        $("#bookPile").hide();
        $(".JayCarter").fadeIn();
        $(".JayBack").hide();
        $(".JayNormal").show();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();
        $(".TextBox4").hide();
        $(".TextBox5").hide();
        $(".newspaper").remove();
        $(".newspaper1").show();

        const content = "There is nothing special with this newspaper.";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)
   
    });

    
    $(".newspaper1").click(function(){
        $(".an").fadeIn(1000, function() { $(".an").fadeOut(1500)});
        $(".all").hide();
        $("#bookPile").hide();
        $("#paper4").show();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();
        $(".newspaper1").remove();

        const content = " Wait, I can feel something is behind...";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)

    });



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
                $(".all").hide();

        const content = "...!";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)
        $(".JayCarter").fadeIn();
        $(".JayBack").hide();
        $(".JayNormal").show();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();
        $(".textback").hide();
        $(".textback2").show();
        $(".textback2").click(function(){
          $(".end").fadeIn(1500);
          var audio = new Audio('sound/end.mp3');
          audio.play();});
          
        $(".JayCarter").click(function(){
            $(".end").fadeIn(1500);
            var audio = new Audio('sound/end.mp3');
            audio.play();
}
        )}
  
});


  
  });


  $( function() {
    $( ".caneimage" ).draggable({ revert: "invalid" }
    );
    $( ".fireplace" ).droppable({
      drop: function( event, ui ) {
        $(".an").fadeIn(1000, function() { $(".an").fadeOut(1500)});
        $("#glassbottle").show();
        $(".JayCarter").fadeIn();
        $(".JayBack").show();
        $(".JayNormal").hide();
        $("#name").fadeIn();
        $(".TextBox").fadeIn();
        const content = "Something is here... a glass bottle?";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
        
            if (i>=content.length){
                clearInterval(myInterval)
            }
            
        }
        
        myInterval = setInterval(typing, 110)

        }
  
});


  
  });
  

});


