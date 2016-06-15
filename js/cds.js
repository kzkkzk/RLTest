var gtop_element    = $('.GTop');
var gbottom_element = $('.GBottom');
var blc_element     = $(".blc");
var tlc_element     = $(".tlc");
var diamond_element = $(".main_diamond");

var tlc_element_wb = tlc_element.css('border-right-width').replace('px','');     /* ������� ������ ����� �������� div'a */
var blc_element_wb = blc_element.css('border-right-width').replace('px','');     /* ������� ������ ����� ������� div'a */

var resize_blc = function(){

    $('.content').css('height', $(window).height()- 65 +'px');

    var gtop_height   = gtop_element.height();                                   /* ������ ������� div'a */
    var gbottom_height= gbottom_element.height();                                /* ������ ������� div'a */

    var d_main_diamond = $(window).height()- $('.footer').height() - 60;         /*��������� ����� (60 - ������� ������ 30*20)*/
    var w_main_diamond = d_main_diamond / Math.sqrt(2);                          /*������� �����*/


    tlc_element.css( 'border-width', gtop_height    + 'px');
    blc_element.css( 'border-width', gbottom_height + 'px');

    blc_element.css( 'width', gbottom_element.width()*75/100 - gbottom_height + 'px');
    tlc_element.css( 'width', blc_element.width() -  gtop_height + 'px');

    diamond_element.css( 'width',  w_main_diamond + 'px');
    diamond_element.css( 'height', diamond_element.width());

    diamond_element.css( {'left': (d_main_diamond - w_main_diamond) /2 + 12 + tlc_element.width(), 'top': (d_main_diamond - w_main_diamond) /2 + 12} );


};

$(window).load( resize_blc);
$(window).resize( resize_blc);


