

$(document).ready(function(){
    var conLink = $('#contactLink');
    var hidCon = $('#hiddenContact');

    // $('.let').hide();

    hidCon.click(function (){
        $('.let').toggle()
    })

    var windowWidth = $(window).width();
    if(windowWidth < 600){
        $('#long-text').find('span').text('Tech')
    }

    var $side = $('.side-fix');
    var $ul = $('.side-fix ul');
    var $icon = $('.side-fix i');

    function checkScrollPosition() {
        if ($(window).scrollTop() === 0) {
            $ul.removeClass('hidden'); // Tampilkan ul jika scroll di atas
            $icon.removeClass('minimal-border');
        }
    }
    
    // Handle scroll event to hide ul with animation
    $(window).on('scroll', function () {
        if (!$ul.hasClass('hidden')) {
            $ul.addClass('hidden');
            $icon.addClass('minimal-border');
            $side.removeClass('side-fix-show');
        }
        else{
            checkScrollPosition();
        }
    });

    // Handle click event on i to toggle ul
    $icon.on('click', function () {
        $ul.toggleClass('hidden');

        if ($ul.hasClass('hidden')) {
            $icon.addClass('minimal-border');
            $side.removeClass('side-fix-show');
        } else {
            $side.addClass('side-fix-show');
            $icon.removeClass('minimal-border');
        }
    });

    checkScrollPosition();

    const $methods = $('.methods');
    const $methodElements = $('.method');
    const totalElements = $methodElements.length;
    const visibleElements = 3; // Jumlah elemen yang terlihat
    let currentIndex = 0; // Mulai dari elemen pertama

    function updateSlider() {
        const validIndex = Math.max(0, Math.min(currentIndex, totalElements - visibleElements));
        const translateValue = -(validIndex * ($methodElements.outerWidth(true)));
        $methods.css('transform', `translateX(${translateValue}px)`);
    }

    $('#next').on('click', function() {
        if (currentIndex < totalElements - visibleElements) {
            currentIndex++;
            updateSlider();
        }

        $('#dot-2').css("color", "#236F53");
        $('#dot-1').css("color", "#A0E8AF");
    });

    $('#dot-2').on('click', function() {
        if (currentIndex < totalElements - visibleElements) {
            currentIndex++;
            updateSlider();
        }

        $(this).css("color", "#236F53");
        $('#dot-1').css("color", "#A0E8AF");
    })

    $('#prev').on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }

        $('#dot-1').css("color", "#236F53");
        $('#dot-2').css("color", "#A0E8AF");
    });

    $('#dot-1').on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }

        $(this).css("color", "#236F53");
        $('#dot-2').css("color", "#A0E8AF");
    })

    // Inisialisasi posisi slider
    updateSlider();

    $('.method-1').on('click', function(){
        window.location.href = '/Methods/Aquaponik'
    });

    $('.method-2').on('click', function(){
        window.location.href = '/Methods/Hidroponik'
    });

    $('.method-3').on('click', function(){
        window.location.href = '/Methods/Vertikultur'
    });

    $('.method-4').on('click', function(){
        window.location.href = '/Methods/TamanAtap'
    });
});