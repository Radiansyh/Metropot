$(document).ready(function(){
    $('#manfaat').on('click', function(e){

        if($(this).hasClass('wide-cp')){
            $(this).removeClass('wide-cp');
            $('#manf').removeClass('show-manf');
            $('.hidden-cp-1').show();
        } else{
            $(this).addClass('wide-cp');
            setTimeout(function(){
                $('#manf').addClass('show-manf');
            },500)
            $('.hidden-cp-1').hide();
        }
    });

    $('#sistem').on('click', function(e){

        if($(this).hasClass('wide-cp')){
            $(this).removeClass('wide-cp');
            $('.sistem-item').removeClass('show-manf');
        } else{
            $(this).addClass('wide-cp');
            setTimeout(function(){
                $('.sistem-item').addClass('show-manf');
            },500)
        }
    });
});