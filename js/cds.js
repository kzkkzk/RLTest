var gtop_element    = $('.GTop');
var gbottom_element = $('.GBottom');
var blc_element     = $(".blc");
var tlc_element     = $(".tlc");
var diamond_element = $(".main_diamond");
var footer_element  = $('.footer');
var content_element = $('.content');
var square_element  = $('.main_square');

var resize_blc = function(){

    content_element.css('height', $(window).height()- footer_element.height() +'px');

    square_element.css('height', content_element.height() + 20);
    square_element.css('width',  square_element.height());

    var d_main_diamond = square_element.height()- (diamond_element.css( 'border-width').replace('px', '') * 2);  /*��������� �����*/
    var w_main_diamond = d_main_diamond / Math.sqrt(2);                                                           /*������� �����*/

/*    diamond_element.css( {'width': w_main_diamond, 'height': w_main_diamond});

    var mt = (content_element.height() - w_main_diamond) /2 - 17; /*�������� margin-top ��� �����*/
    /*    diamond_element.css( 'margin-top',  mt + 'px');

    gtop_element.css('height', diamond_element.width()/ 2 - 30 + 'px');

    $('.info').html( 'bone - ' + $('.bone').height() +
        '<br>Content- ' + content_element.height() +
        '<br>footer- '+ footer_element.height() +
        '<br>d_diamond- ' + d_main_diamond +
        '<br>w_diamond- ' + w_main_diamond +
        '<br>diamond_border- ' + diamond_element.css( 'border-width'));

    var gtop_height   = gtop_element.height();                                   /* ������ �������� div'a */
    /*   var gbottom_height= gbottom_element.height();                                /* ������ ������� div'a */
    /*    tlc_element.css( 'border-width', gtop_height    + 'px');

    var tlc_delta = (Math.sqrt( Math.pow(w_main_diamond / 2, 2) - Math.pow(gtop_height, 2))+ 60);



    tlc_element.css( 'width', (gtop_element.width()/2 - gtop_height) + 'px');
    


 /*   tlc_element.css( 'width', (gtop_element.width()/2 - gtop_height) - (Math.sqrt( Math.pow(w_main_diamond / 2, 2) - Math.pow(gtop_height, 2))) - 60 + 'px');


    /* blc_element.css( 'border-width', gbottom_height + 'px');

     blc_element.css( 'width', gbottom_element.width()*75/100 - gbottom_height + 'px');
      */

    /*   diamond_element.css( {'left': (d_main_diamond - w_main_diamond) /2 + 12, 'top': (d_main_diamond - w_main_diamond) /2 + 12}); */
    /*    var mt = d_main_diamond - w_main_diamond - diamond_element.css( 'border-width').replace('px', '') * 2 - 4;
     if (mt> 80){
     diamond_element.css( 'margin-top',  mt + 'px');
     }else{
     diamond_element.css( 'margin-top',  '80px');
     }
     ;
     */
};

$(window).load( resize_blc);
$(window).resize( resize_blc);


