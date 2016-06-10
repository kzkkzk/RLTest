var gtop_element    = $('.GTop');
var gbottom_element = $('.GBottom');
var blc_element     = $(".blc");
var tlc_element     = $(".tlc");

var tlc_element_wb = tlc_element.css('border-right-width').replace('px','');     /* Толщина правой рамки верхнего div'a */
var blc_element_wb = blc_element.css('border-right-width').replace('px','');     /* Толщина правой рамки нижнего div'a */

var resize_blc = function(){

    $('.content').css('height', $(window).height()- 65 +'px');

    var gtop_height   = gtop_element.height();                                   /* Высота нижнего div'a */
    var gbottom_height= gbottom_element.height();                                   /* Высота нижнего div'a */


    tlc_element.css( 'border-width', gtop_height    + 'px');
    blc_element.css( 'border-width', gbottom_height + 'px');

    blc_element.css( 'width', gbottom_element.width()*75/100 - gbottom_height + 'px');
    tlc_element.css( 'width', blc_element.width() -  gtop_height + 'px');



/*    tlc_element.css( 'width', blc_element.width() - blc_element_wb + 'px'); */

    $('.main_diamond').css( 'height', $('.main_diamond').width());

};


$(window).load( resize_blc);
$(window).resize( resize_blc);


