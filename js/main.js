jQuery(function($) {

    var updateArrows = function(){
        $('.carouselGallery-right').removeClass('disabled');
        $('.carouselGallery-left').removeClass('disabled');
        var curIndex = $('.carouselGallery-carousel.active').data('index');
        updateArrows.nbrOfItems = updateArrows.nbrOfItems || $('.carouselGallery-carousel').length -1;

        curIndex === updateArrows.nbrOfItems && $('.carouselGallery-right').addClass('disabled');
        curIndex === 0 && $('.carouselGallery-left').addClass('disabled');
    }
    $('.carouselGallery-carousel').on('click', function(e){
        scrollTo = $('body').scrollTop();
       $('body').addClass('noscroll');
       $('body').css('position', 'fixed');
        $('.carouselGallery-col-1, .carouselGallery-col-2').removeClass('active');
        $(this).addClass('active');
        showModal($(this));
        updateArrows();
    });

    $('body').on('click', '.carouselGallery-right, .carouselGallery-left', function(e){
        if($(this).hasClass('disabled')) return;
        var curIndex = $('.carouselGallery-carousel.active').data('index');
        var nextItemIndex = parseInt(curIndex+1);
        if($(this).hasClass('carouselGallery-left')){
            nextItemIndex-=2;
        }
        var nextItem = $('.carouselGallery-carousel[data-index='+nextItemIndex+']');
       // console.log(nextItemIndex);
        if(nextItem.length > 0){
            $('.carouselGallery-col-1, .carouselGallery-col-2').removeClass('active');
            $('body').find('.carouselGallery-wrapper').remove();
            showModal($(nextItem.get(0)));
            nextItem.first().addClass('active');
        }
        updateArrows();
    });

    var modalHtml = '';
    showModal = function(that){
     //   console.log(that);
         var imagepath = that.data('imagepath'),
         namech = that.data('namech'),
         namee = that.data('namee'),


         price =  that.data('price'),
         ordnum =  that.data('ordnum'),
         totprenum =  that.data('totprenum'),
         limitprenum =  that.data('limitprenum'),
         title = that.data('title'),

         onlytxt = that.data('onlytxt'),
         // onlytxt

         pic1 = that.data('pic1'),
         scroe1 = that.data('scroe1'),
         star1 = that.data('star1'),
         text1 = that.data('text1'),
         // pic1

         pic2 = that.data('pic2'),
         scroe2 = that.data('scroe2'),
         star2 = that.data('star2'),
         text2 = that.data('text2'),
         // pic2

         pic3 = that.data('pic3'),
         scroe3 = that.data('scroe3'),
         star3 = that.data('star3'),
         text3 = that.data('text3'),
         // pic3

         pic4 = that.data('pic4'),
         scroe4 = that.data('scroe4'),
         star4 = that.data('star4'),
         text4 = that.data('text4'),
         // pic4

         pic5 = that.data('pic5'),
         scroe5 = that.data('scroe5'),
         star5 = that.data('star5'),
         text5 = that.data('text5'),
         // pic5

         ans1 = that.data('ans1'),
         ans21 = that.data('ans21'),
         ans22 = that.data('ans22'),
         ans23 = that.data('ans23'),
         ans24 = that.data('ans24'),
         ans25 = that.data('ans25'),
         ans26 = that.data('ans26'),
         ans27 = that.data('ans27'),
         ans28 = that.data('ans28'),
         ans29 = that.data('ans29'),
         ans3 = that.data('ans3'),
         ans4 = that.data('ans4'),
         repicepic = that.data('repicepic'),
         repice = that.data('repice'),
         link = that.data('link')
    



        maxHeight = $(window).height()-100;

        if ($('.carouselGallery-wrapper').length === 0) {
            if(typeof imagepath !== 'undefined') {
                modalHtml = "<div class='carouselGallery-wrapper'>";
                modalHtml += "<div class='carouselGallery-modal'><span class='carouselGallery-left'><span class='icons icon-arrow-left6'></span></span><span class='carouselGallery-right'><span class='icons icon-arrow-right6'></span></span>";
                modalHtml += "<div class='container'>";
                modalHtml += "<span class='icons iconscircle-cross close-icon'></span>";
                modalHtml += "<div class='carouselGallery-scrollbox'><div class='carouselGallery-modal-image'>";
                modalHtml += "<img src='"+imagepath+"' alt='carouselGallery image'>";
                modalHtml += "</div>";



                modalHtml += "<div class='carouselGallery-modal-text'>";
                modalHtml += "<div class='namech'>"+namech+"</div>";
                
                //content
                modalHtml += "<div class='namee'>"+namee+"</div>";

                modalHtml += "<div class='buyBOX'>";
                modalHtml += "<div class='left'><div class='price'><span class='sp'>價</span>格：<span class='redsp'>$"+price+"</span></div><div class='ordnum'><span>產品編號：</span>"+ ordnum +"</div></div>";
                modalHtml += "<div class='right'><div class='totprenum'><span>產品總數：</span>"+totprenum+"瓶</div><div class='limitprenum'><span>每人限購：</span>"+ limitprenum +"瓶</div></div></div>";
                // buyBOX

                modalHtml += "<img src='"+title+"'>";


                modalHtml += "<div class='onlytxt'>"+onlytxt+"</div>";
                // onlytxt

                modalHtml += "<div class='scroeBOX'>";
                modalHtml += "<div class='left'><img class='ps' src='"+pic1+"'></div>";
                modalHtml += "<div class='right'><div class='name'><div>"+scroe1+"</div><div><img src='"+star1+"'</div></div></div>";
                modalHtml += "<div class='text'>"+text1+"</div></div></div>";
                // scroeBOX1

                modalHtml += "<div class='scroeBOX'>";
                modalHtml += "<div class='left'><img class='ps' src='"+pic2+"'></div>";
                modalHtml += "<div class='right'><div class='name'><div>"+scroe2+"</div><div><img src='"+star2+"'</div></div></div>";
                modalHtml += "<div class='text'>"+text2+"</div></div></div>";
                // scroeBOX2

                modalHtml += "<div class='scroeBOX'>";
                modalHtml += "<div class='left'><img class='ps' src='"+pic3+"'></div>";
                modalHtml += "<div class='right'><div class='name'><div>"+scroe3+"</div><div><img src='"+star3+"'</div></div></div>";
                modalHtml += "<div class='text'>"+text3+"</div></div></div>";
                // scroeBOX3

                modalHtml += "<div class='scroeBOX'>";
                modalHtml += "<div class='left'><img class='ps' src='"+pic4+"'></div>";
                modalHtml += "<div class='right'><div class='name'><div>"+scroe4+"</div><div><img src='"+star4+"'</div></div></div>";
                modalHtml += "<div class='text'>"+text4+"</div></div></div>";
                // scroeBOX4

                modalHtml += "<div class='scroeBOX'>";
                modalHtml += "<div class='left'><img class='ps' src='"+pic5+"'></div>";
                modalHtml += "<div class='right'><div class='name'><div>"+scroe5+"</div><div><img src='"+star5+"'</div></div></div>";
                modalHtml += "<div class='text'>"+text5+"</div></div></div>";
                // scroeBOX5


                modalHtml += "<div class='infoBOX'>";
                modalHtml += "<div class='left'><p><span class='infolist'>地區：</span>"+ans1+"</p>";

                modalHtml += "<p><span class='infolist'>適合搭配：</span><img class='suit'src='"+ans21+"'><img class='suit'src='"+ans22+"'><img class='suit'src='"+ans23+"'><img class='suit'src='"+ans24+"'><img class='suit'src='"+ans25+"'><img class='suit'src='"+ans26+"'><img class='suit'src='"+ans27+"'><img class='suit'src='"+ans28+"'><img class='suit'src='"+ans29+"'></p>";
                modalHtml += "<p><span class='infolist'>葡萄品種：</span>"+ans3+"</p>";
                modalHtml += "<div class='exp'><div class='exptitle' >特色說明：</div><div class='exptext'>"+ans4+"</div></div></div>";
    

                modalHtml += "<div class='right'><img class='repicepic' src='"+repicepic+"'><p class='recommend'>建議搭配食譜</p><p class='dish'>"+repice+"</p>";
                modalHtml += "<a class='repicelink' href='"+link+"' target='_black'>食譜作法››</a>";
                // infoBOX


                modalHtml += "</div></div></div></div></div>";

                $('body').append(modalHtml).fadeIn(2500);
            
                
            }
        }
    };

   

    $('body').on( 'click','.carouselGallery-wrapper', function(e) {
        if($(e.target).hasClass('.carouselGallery-wrapper')){
            removeModal();
        }
    });
    $('body').on('click', '.carouselGallery-modal .iconscircle-cross', function(e){
        removeModal();
    });

     var removeModal = function(){
        $('body').find('.carouselGallery-wrapper').remove();
        $('body').removeClass('noscroll');
        $('body').css('position', 'static');
        $('body').animate({scrollTop: scrollTo}, 0);
    };

    // Avoid break on small devices
    var carouselGalleryScrollMaxHeight = function() {
        if ($('.carouselGallery-scrollbox').length) {
            maxHeight = $(window).height()-100;
            //$('.carouselGallery-scrollbox').css('max-height',maxHeight+'px');
        }
    }
    $(window).resize(function() { // set event on resize
        clearTimeout(this.id);
        this.id = setTimeout(carouselGalleryScrollMaxHeight, 100);
    });
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            removeModal();
        }
    };

});
