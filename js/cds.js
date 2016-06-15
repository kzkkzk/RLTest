var gtop_element    = $('.GTop');
var gbottom_element = $('.GBottom');
var blc_element     = $(".blc");
var tlc_element     = $(".tlc");
var diamond_element = $(".main_diamond");
var footer_element  = $('.footer');
var content_element = $('.content');

var resize_blc = function(){

    content_element.css('height', $(window).height()- footer_element.height() +'px');

    var d_main_diamond = content_element.height()- (diamond_element.css( 'border-width').replace('px', '') * 2);  /*Диагональ ромба*/
    var w_main_diamond = d_main_diamond / Math.sqrt(2);                                                           /*Сторона ромба*/

    /*   var gtop_height   = gtop_element.height();                                   /* Высота верхнего div'a */
    /*   var gbottom_height= gbottom_element.height();                                /* Высота нижнего div'a */
 /*   tlc_element.css( 'border-width', gtop_height    + 'px');
    blc_element.css( 'border-width', gbottom_height + 'px');

    blc_element.css( 'width', gbottom_element.width()*75/100 - gbottom_height + 'px');
    tlc_element.css( 'width', blc_element.width() -  gtop_height + 'px'); */

    diamond_element.css( {'width': w_main_diamond, 'height': w_main_diamond});

    var mt = (content_element.height() - w_main_diamond) /2 - 17;
    diamond_element.css( 'margin-top',  mt + 'px');

    $('.info').html( 'bone - ' + $('.bone').height() +
        '<br>Content- ' + content_element.height() +
        '<br>footer- '+ footer_element.height() +
        '<br>d_diamond- ' + d_main_diamond +
        '<br>w_diamond- ' + w_main_diamond +
        '<br>diamond_border- ' + diamond_element.css( 'border-width'));

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


