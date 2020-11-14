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
    $('.gallery-photo').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });
    $("#questions-accordion").accordion();
    $('.owl-carousel').owlCarousel({
        center: true,
        items:4,
        loop:true,
        // margin:100
    });
});