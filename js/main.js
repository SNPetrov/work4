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
    let gallery_photos = $('#gallery-photos');
    gallery_photos.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#gallery-photos-items',
        nextArrow: $('#gallery .next-arrow'),
        prevArrow: $('#gallery .prev-arrow'),
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
    gallery_photos.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('.gallery-photos-item.slick-slide.active').attr('src', 'images/passive.png');
        $($('.gallery-photos-item.slick-slide.slick-current').attr('src', 'images/active.gallery.png')).addClass('active');
    });
    $('.gallery-photo').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });

});