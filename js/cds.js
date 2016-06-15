var gtop_element    = $('.GTop');
var gbottom_element = $('.GBottom');
var blc_element     = $(".blc");
var tlc_element     = $(".tlc");
var diamond_element = $(".main_diamond");
var footer_element  = $('.footer');

var resize_blc = function(){





   $('.content').css('height', $(window).height()- footer_element.height() +'px');

 /*   var gtop_height   = gtop_element.height();                                   /* Высота верхнего div'a */
    /*   var gbottom_height= gbottom_element.height();                                /* Высота нижнего div'a */

    var d_main_diamond = $(window).height()- footer_element.height() - 60;         /*Диагональ ромба (60 - толщина бордер 30*20)*/
    var w_main_diamond = d_main_diamond / Math.sqrt(2);                          /*Сторона ромба*/


 /*   tlc_element.css( 'border-width', gtop_height    + 'px');
    blc_element.css( 'border-width', gbottom_height + 'px');

    blc_element.css( 'width', gbottom_element.width()*75/100 - gbottom_height + 'px');
    tlc_element.css( 'width', blc_element.width() -  gtop_height + 'px'); */

    diamond_element.css( 'width',  w_main_diamond + 'px');
    diamond_element.css( 'height', diamond_element.width());


 /*   diamond_element.css( {'left': (d_main_diamond - w_main_diamond) /2 + 12, 'top': (d_main_diamond - w_main_diamond) /2 + 12}); */


};

$(window).load( resize_blc);
$(window).resize( resize_blc);


