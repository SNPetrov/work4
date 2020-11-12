$(document).ready(function () {
    $('#info-persons').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '#info-person-numbers',
        nextArrow: $('#info .next-arrow'),
        prevArrow: $('#info .prev-arrow')
    });
    $('#info-person-numbers').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        asNavFor: '#info-persons',
        dots: false,
        infinite: false,
        centerMode: false,
        focusOnSelect: true
    });
    $('#gallery-photos').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: $('#gallery .next-arrow'),
        prevArrow: $('#gallery .prev-arrow'),
        asNavFor: '#gallery-photos-items',
    });
    $('#gallery-photos-items').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        asNavFor: '#gallery-photos',
        dots: false,
        infinite: false,
        centerMode: false,
        focusOnSelect: true
    });
    $('.gallery-photos-item.slick-slide, #gallery .next-arrow,#gallery .prev-arrow').click(()=>{
        $('.gallery-photos-item.slick-slide.active').attr('src','images/passive.png');
        $('.gallery-photos-item.slick-slide.slick-current').attr('src','images/active.gallery.png');
        $('.gallery-photos-item.slick-slide.slick-current').addClass('active');
    });

});