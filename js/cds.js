var gbottom_element = $('.GBottom');
var blc_element     = $(".blc");
var tlc_element     = $(".tlc");

var blc_element_wb = blc_element.css('border-right-width').replace('px','');     /* Толщина правой рамки нижнего div'a */

var resize_blc = function(){
    var gbottom_height= gbottom_element.height();                                   /* Высота нижнего div'a */

    blc_element.css( 'border-width', gbottom_height + 'px');
    blc_element.css( 'width', gbottom_element.width()*75/100 - gbottom_height + 'px');
    tlc_element.css( 'width', blc_element.width() - blc_element_wb + 'px');

};


$(window).load( resize_blc);
$(window).resize( resize_blc);


