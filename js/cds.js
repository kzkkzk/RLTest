var blc_element = $(".blc");
var tlc_element = $(".tlc");

var resize_blc = function(){
    blc_element.css( 'border-width', $('.GBottom').height() + 'px');
    blc_element.css('width', tlc_element.width() + 114 + 'px');
};

$(window).load( resize_blc);
$(window).resize( resize_blc);
