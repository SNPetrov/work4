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
    let owl = $('.owl-carousel');
    owl.owlCarousel({
        center: true,
        items: 1,
        loop: true,
        autoWidth: true,
        margin: 20,
        nav: false
        // dots: true
    });
    $('#gallery-photos-nav .owl-prev').click(() => {
        owl.trigger('prev.owl.carousel', [300]);
    });
    $('#gallery-photos-nav .owl-next').click(() => {
        owl.trigger('next.owl.carousel', [300]);
    });
    // owl.on('changed.owl.carousel', function(event) {
    //     $('.gallery-photos-item.tempActive').attr('src', 'images/passive.png');
    //     $($('.gallery-photos-item').attr('src', 'images/active.gallery.png')).addClass('tempActive');
    // })
});