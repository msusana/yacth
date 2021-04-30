
let $carrousel = $('.carrousel'), 
        $img = $('.carrousel img'), 
        indexImg = $img.length - 1,
        nextImg =  $img.eq(0); 
        i = 0, 
        $currentImg = $img.eq(i);
    
    $img.css('display', 'none'); 
    $currentImg.css('display', 'block'); 
    
  
    
    $('.next').click(function(){ 
        next();
    });

    function next(){ 

        i++;
    
        if( i <= indexImg){
            $img.css('display', 'none'); 
            $currentImg = $img.eq(i); 
            $currentImg.css('display', 'block');
        }
        else{
            nextImg;
            i = 0;
            next();
            

        }
    
    };
    
    $('.prev').click(function(){ 
    
    prev();   
    
    });

    function prev(){
         i--; 
    
        if( i >= 0 ){
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
        }
        else{
            nextImg;
            i = indexImg;
            prev();
        }
    }
    
    function slideImg(){
        setTimeout(function(){ 
                            
            if(i < indexImg){ 
            i++; 
        }
        else{ 
            i = 0;
        }
    
        $img.css('display', 'none');
    
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    
        slideImg(); 
    
        }, 5000); 
    }
    
    slideImg(); 


    /* deuxime carousel */

    let $carrousel2 = $('.carrousel2'), 
        $img2 = $('.carrousel2 img'), 
        indexImg2 = $img2.length - 1,
        nextImg2 =  $img2.eq(0); 
        $a = 0; 
        $currentImg2 = $img2.eq($a);
    
    $img2.css('display', 'none'); 
    $currentImg2.css('display', 'block'); 
    
  
    
    $('.next2').click(function(){ 
        next2();
    });

    function next2(){ 

        $a++;
    
        if( $a <= indexImg2 ){
            $img2.css('display', 'none'); 
            $currentImg2 = $img2.eq($a); 
            $currentImg2.css('display', 'block');
        }
        else{
            nextImg2;
            $a = 0;
            next2();
            

        }
    
    };
    
    $('.prev2').click(function(){ 
    
    prev2();   
    
    });

    function prev2(){
         $a--; 
    
        if( $a >= 0 ){
            $img2.css('display', 'none');
            $currentImg2 = $img2.eq($a);
            $currentImg2.css('display', 'block');
        }
        else{
            nextImg2;
            $a = indexImg2;
            prev2();
        }
    }
    
    function slideImg2(){
        setTimeout(function(){ 
                            
            if($a < indexImg2){ 
            $a++; 
        }
        else{ 
            $a = 0;
        }
    
        $img2.css('display', 'none');
    
        $currentImg2 = $img2.eq($a);
        $currentImg2.css('display', 'block');
    
        slideImg2(); 
    
        }, 5000); 
    }
    
    slideImg2(); 

