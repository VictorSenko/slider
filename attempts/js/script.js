$(function() {
	var slidesNumber = $(".slideshow__image").length;
    var slideWidth = $(".slideshow__image").eq(1).width();
	$(".slideshow-list").after('<ul class="slideshow-navigation"></ul>'); 
	var navCont = $(".slideshow-navigation").html();	
	
	for(var i=1; i<=slidesNumber; i++){
		$(".slideshow-navigation").html(navCont+'<li><a href="#">'+i+'</a></li>');
		navCont = $(".slideshow-navigation").html();
	};
	
	$(".slideshow-navigation li").eq(0).addClass("active");
	var activeSlide = 1;
	
	$(".slideshow-navigation li").on('click',function(){ 
        console.log(123);
		$(".slideshow-navigation li").removeClass("active");
		$(this).addClass("active"); 
		var clickedSlide = $(this).index()+1;
        
		$(".slideshow-list").animate({
			left: -slideWidth*(clickedSlide-1)+"px"
		}, 800);
		activeSlide = $(".slideshow-navigation li.active").index()+1;
	});
    
    $(".right-arrow").on('click',function(){ 
        
		if(activeSlide<slidesNumber){ 
			$(".slideshow-list").animate({
				left: "-=0"+slideWidth+"px" 
			}, 800);
			activeSlide++; 
			$(".slideshow-navigation li").removeClass("active");
			$(".slideshow-navigation li").eq(activeSlide-1).addClass("active"); 
		}
        else { 
			$(".slideshow-list").animate({
				left: "0px"
			}, 800);
			$(".slideshow-navigation li").removeClass("active");
			$(".slideshow-navigation li").eq(0).addClass("active");
			activeSlide = $(".slideshow-navigation li.active").index()+1;
		}
		
	});
     $(".left-arrow").on('click',function(){ 
		if(activeSlide>1){ 
			$(".slideshow-list").animate({
				left: "+=0"+slideWidth+"px" 
			}, 800);
			activeSlide--; 
			$(".slideshow-navigation li").removeClass("active");
			$(".slideshow-navigation li").eq(activeSlide-1).addClass("active"); 
		}
        else { 
			$(".slideshow-list").animate({
				left: -slideWidth*(slidesNumber-1)+"px"
			}, 800);
			$(".slideshow-navigation li").removeClass("active");
			$(".slideshow-navigation li").eq(-1).addClass("active");
			activeSlide = $(".slideshow-navigation li.active").index()+1;
		}
	});
    $('.arrow').mousedown(function(){
            if($(this).hasClass('left-arrow')){
                $(this).toggleClass('arrow-toggle');
                $(this).css('border-left','0')
            }else{
                $(this).toggleClass('arrow-toggle');
                $(this).css('border-right','0')
            }
        });
    $('.arrow').mouseup(function(){
            $(this).toggleClass('arrow-toggle');
        });
    $('.arrow').mouseleave(function(){
            $(this).removeClass('arrow-toggle');
    })
});