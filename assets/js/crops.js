$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip()

    $('#fc').on('click', function(){
        $('.item-fc').slideToggle("slow");
        $('#prob-hidin').slideToggle("slow");
    });

    $('.item-r').hover(function(){
        $(this).find('.content-item').show();
    }, function(){
        $(this).find('.content-item').hide()
    });

    $('#button-pel-basil').on('click', function(){
        if($('#peluang-basil').hasClass('show-hidden')){
            $('#peluang-basil').removeClass('show-hidden');
        }else{
            $('#peluang-basil').addClass('show-hidden');
        }
    });

    $('#button-pel-mint').on('click', function(){
        if($('#peluang-mint').hasClass('show-hidden')){
            $('#peluang-mint').removeClass('show-hidden');
        }else{
            $('#peluang-mint').addClass('show-hidden');
        }
    });

    $('#button-pel-rosemary').on('click', function(){
        if($('#peluang-rosemary').hasClass('show-hidden')){
            $('#peluang-rosemary').removeClass('show-hidden');
        }else{
            $('#peluang-rosemary').addClass('show-hidden');
        }
    });

    $('#button-pel-thyme').on('click', function(){
        if($('#peluang-thyme').hasClass('show-hidden')){
            $('#peluang-thyme').removeClass('show-hidden');
        }else{
            $('#peluang-thyme').addClass('show-hidden');
        }
    });

    $('#button-pel-oregano').on('click', function(){
        if($('#peluang-oregano').hasClass('show-hidden')){
            $('#peluang-oregano').removeClass('show-hidden');
        }else{
            $('#peluang-oregano').addClass('show-hidden');
        }
    });

    $('#button-pel-tomat').on('click', function(){
        if($('#peluang-tomat').hasClass('show-hidden')){
            $('#peluang-tomat').removeClass('show-hidden');
        }else{
            $('#peluang-tomat').addClass('show-hidden');
        }
    });    

    $('#button-pel-cabai').on('click', function(){
        if($('#peluang-cabai').hasClass('show-hidden')){
            $('#peluang-cabai').removeClass('show-hidden');
        }else{
            $('#peluang-cabai').addClass('show-hidden');
        }
    });    

    $('#button-pel-kentang').on('click', function(){
        if($('#peluang-kentang').hasClass('show-hidden')){
            $('#peluang-kentang').removeClass('show-hidden');
        }else{
            $('#peluang-kentang').addClass('show-hidden');
        }
    });    

    $('#button-pel-wortel').on('click', function(){
        if($('#peluang-wortel').hasClass('show-hidden')){
            $('#peluang-wortel').removeClass('show-hidden');
        }else{
            $('#peluang-wortel').addClass('show-hidden');
        }
    });    

    $('#button-pel-timun').on('click', function(){
        if($('#peluang-timun').hasClass('show-hidden')){
            $('#peluang-timun').removeClass('show-hidden');
        }else{
            $('#peluang-timun').addClass('show-hidden');
        }
    });    
});