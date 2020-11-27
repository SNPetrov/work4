$(document).ready(function () {
    //
    // Первый слайдер ( мастера)
    //
    $('#info-persons').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        customPaging:function (slider, i){
            return '<a class="info-nav-item">' + (i+1) + '<a class="info-nav-item">';
        },
        responsive: [
            {
            breakpoint : 1023,
                settings: {
                slidesToShow: 2,
                    slidesToScroll:2,
                    infinite:true,
                    dots:true,
                }
            },
            {
            breakpoint : 767,
                settings: {
                slidesToShow: 1,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                    variableWidth: true,
                    centerMode: true
                }
            }
        ]
    });
    //
    //Второй слайдер (Галерея)
    //
    $('.gallery-photo').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });
    let owl = $('.owl-carousel');
    owl.owlCarousel({
        center: true,
        items:5,
        loop: true,
        autoWidth: true,
        margin: 20,
        nav: false
    });
    $('#gallery-photos-nav .owl-prev').click(() => {
        owl.trigger('prev.owl.carousel', [300]);
    });
    $('#gallery-photos-nav .owl-next').click(() => {
        owl.trigger('next.owl.carousel', [300]);
    });
    //
    // Аккордеон (FAQ)
    //
    $('.card-header').click(function () {
        if ($(this).next('.card-body').hasClass('active')) {
            $(this).next('.card-body').removeClass('active').slideUp();
            $(this).children('svg.down').css('display', 'inline-block');
            $(this).children('svg.up').css('display', 'none');
        } else {
            $('.card .card-body').removeClass('active').slideUp();
            $('.card .card-header svg.up').css('display', 'none');
            $('.card .card-header svg.down').css('display', 'inline-block');
            $(this).next('.card-body').addClass('active').slideDown();
            $(this).children('svg.down').css('display', 'none');
            $(this).children('svg.up').css('display', 'inline-block');
        }
    });
    //
    // Всплывающее окно заказа
    //
    let appointment_item = $('.appointment-item');
    let appointment = $('#appointment');
    let appointment_input = $('#appointment .input');
    let custom_select = $('#custom-select');
    $('.order-btn').click((e) => {
        if(e.target.id==='massage-1') {
            $("#select-header .option").text('Массаж камнями');
        }
        else if(e.target.id==='massage-2') {
            $("#select-header .option").text('Баллийский массаж');
        }
        else if(e.target.id==='massage-3') {
            $("#select-header .option").text('С травяными мешочками');
        }
        else if(e.target.id==='massage-4') {
            $("#select-header .option").text('Антицеллюлитный массаж');
        }
        else {
            $("#select-header .option").text('Выберите ритуал');
        }
        custom_select.css('margin-bottom', '24px').removeClass('active');
        appointment_item.children('.appointment-item .appointment-input').css('border-color', 'rgb(114, 17, 99)');
        appointment_input.css('margin-bottom', '24px');
        appointment_input.val('');
        appointment_item.children('div.validation').css('display', 'none');
        appointment.css('display', 'flex');
    });
    let loader =  $('#loader');
    let name = $('#name');
    let phone = $('#phone');
    let selected_ritual = $('#select-header .option');
    let date = $('#date');
    $('#appointment-button .btn').click( () => {
        let ok = $.trim(selected_ritual.text())==='Выберите ритуал';
        custom_select.css('margin-bottom', '24px');
        appointment_item.children('.appointment-item .appointment-input').css('border-color', 'rgb(114, 17, 99)');
        appointment_input.css('margin-bottom', '24px');
        appointment_item.children('div.validation').css('display', 'none');
        if (!name.val()) {
            name.css('border-color', 'red');
            name.css('margin-bottom', '0');
            name.siblings('div.validation').css('display', 'block');
        }
        if (!phone.val()) {
            phone.css('border-color', 'red');
            phone.css('margin-bottom', '0');
            phone.siblings('div.validation').css('display', 'block');
        }
        if (ok) {
            selected_ritual.parent().css('border-color', 'red');
            selected_ritual.parents('#custom-select').css('margin-bottom', '0');
            $('#custom-select .validation').css('display', 'block');
        }
        if (!date.val()) {
            date.css('border-color', 'red');
            date.css('margin-bottom', '0');
            date.siblings('div.validation').css('display', 'block');
        }
        if (date.val() && !ok && phone.val() && name.val()) {
            loader.css('display','flex');
            $.ajax({
                method: 'POST',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone' + phone.val() + '&selected_ritual=' + selected_ritual.text() + '&date' + date.val(),
                // Функия сработает при успешном запросе(если с сервера придет код 200)
                success: () => {
                    loader.hide();
                    $('#appointment-sent').css('display', 'flex');
                    $('#appointment-form').hide();
                },
                //Функция сработает при ошибке (если с сервера вернется код ошибки)
                error: () => {
                    loader.hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                    $('#appointment').hide();
                }
            });
        }
    });
    $('#close, #appointment').click((e) => {
        if(e.target.id==='appointment'||e.target.id === 'close'){
        appointment.hide();
        }
    });
    ///////////////////////////////////////////////// custom select appointment
    let select_svg_up = $('#custom-select #select-header svg.up');
    let select_svg_down = $('#custom-select #select-header svg.down');
    $("#select-header").click(function () {
        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            select_svg_down.css('display', 'inline-block');
            select_svg_up.css('display', 'none');
        }
        else {
            $(this).parent().addClass('active');
            select_svg_down.css('display', 'none');
            select_svg_up.css('display', 'inline-block');
        }
    })

    $("#select-body .option").click(function () {
        let currentele = $(this).html();
        $("#select-header .option").html(currentele);
        $(this).parents("#custom-select").removeClass("active");
        select_svg_up.css('display', 'none');
        select_svg_down.css('display', 'inline-block');
    });
    $("#appointment-form, .input").click(function (e) {
      if(custom_select.hasClass('active')&&$(this).hasClass('input')||e.target.id==='appointment-form') {
          custom_select.removeClass("active");
          select_svg_up.css('display', 'none');
          select_svg_down.css('display', 'inline-block');
      }
    });
    /////////////////////////////////////////////////////////////// custom select appointment
    //
    //Работа с отправкой номера телефона
    //
    let questions_validation = $('#questions-form-input .validation');
    let questions_phone = $('#questions-phone');
    $('#questions-form-btn .btn').click(() => {
        questions_validation.hide();
        questions_phone.css('margin-bottom', '15px');
        questions_phone.css('border-color', 'rgb(114, 17, 99)');
        if (!$('#questions-phone').val()) {
            questions_phone.css('margin-bottom', '0');
            questions_phone.css('border-color', 'red');
            questions_validation.show();
        }
        else {
            loader.css('display','flex');
            $.ajax({
                method: 'POST',
                url: 'mail1.php1',
                data: 'phone' + questions_phone.val(),
                // Функия сработает при успешном запросе(если с сервера придет код 200)
                success: () => {
                    loader.hide();
                    $('#questions-call-response').css('display', 'flex');
                    $('#questions-form').hide();
                },
                //Функция сработает при ошибке (если с сервера вернется код ошибки)
                error: () => {
                    loader.hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        }
    });
    //
    //Работа с меню на мобильных устройствах
    //
    $('#burger').click(()=> {
        $('#header-menu').addClass('open');
    })
    $('#header-menu > *').click(()=> {
        $('#header-menu.open').removeClass('open');
    })
    //
    //Подключение библиотеки wow
    //
    new WOW().init({
        animateClass: 'animate-animated'
    });
});