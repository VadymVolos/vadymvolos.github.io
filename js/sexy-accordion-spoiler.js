(function($) {
    // первая-вкладка-была-открыта-отключил-теперь-по умолчанию-все-закрыты 
    // $('.accordion > .accordion-li:eq(0) .accordion-a').addClass('active').next().slideDown();

    $('.accordion .accordion-a').click(function(j) {
        var dropDown = $(this).closest('.accordion-li').find('.accordion-content');

        $(this).closest('.accordion').find('.accordion-content').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('.accordion-a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);
