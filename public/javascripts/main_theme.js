(function($){
   $(function() {
       var num_of_steps = 9;
       var current_step = sessionStorage.getItem('current_step');
       var slider_timer = 5000;
       var first_audio_timer = 26000;
       var last_audio_timer = 18000;

       if (current_step !== null) {
           for(var i = 1; i < num_of_steps + 1; i ++) {
               $('#step-' + i).hide();
           }

           if (current_step == '2') {
               setTimeout(function(){
                   $('.first-task').slideDown(slider_timer);
               }, first_audio_timer);
           }

           if (current_step == '3') {
               $('body').css('display', 'none').css('background-color','midnightblue');
           } else if (current_step == '4' || current_step == '5') {
               $('body').css('background-color','midnightblue');
           } else if (current_step == '6' || current_step == '7') {
               $('body').css('background-color','steelblue');
           } else if (current_step == '8' || current_step == '9') {
               $('body').css('background-color','lightseagreen');
           } else if (current_step == '10') {
               $('body').css('background-color','white').css('background-image', 'url(' + 'images/balloons.png' + ')');
               setTimeout(function(){
                   $('.bonus').slideDown(slider_timer);
               }, last_audio_timer);
           }
           $('#step-' + current_step).show();
       }

       $('#check-code').click( function() {
         var $warning = $('.warning');
         $warning.find('p').remove();
         if (parseInt($('#code-number').val()) == 1 + 1 + 8 + 1 + 9 + 8 + 9) {
             $('#step-1').hide();
             $('#step-2').show();

             sessionStorage.setItem('current_step', 2);

             setTimeout(function(){
                 $('.first-task').slideDown(slider_timer);
             }, first_audio_timer);
         } else  {
             $warning.append('<p>Неверный Код! Попробуй Еще Раз!</p>')
         }
       });

       $('#begin').click(function() {
           $('#step-2').hide();
           $('#step-3').show();
           $('body').css('display', 'none').css('background-color','midnightblue');

           sessionStorage.setItem('current_step', 3);
       });

       $('#second-task').click(function() {
           $('#step-3').hide();
           $('#step-4').show();

           sessionStorage.setItem('current_step', 4);
       });

       $('#check-name').click( function() {
           var $warning = $('.warning');
           $warning.find('p').remove();
           if ($('#code-name').val().toLowerCase() == '39lb650v') {
               $('#step-4').hide();
               $('#step-5').show();

               sessionStorage.setItem('current_step', 5);
           } else  {
               $warning.append('<p>Неверное Имя! Попробуй Еще Раз!</p>')
           }
       });

       $('#third-task').click(function() {
           $('#step-5').hide();
           $('#step-6').show();
           $('body').css('background-color','steelblue');

           sessionStorage.setItem('current_step', 6);
       });

       $('#varenik-code').click( function() {
           var $warning = $('.warning');
           $warning.find('p').remove();
           if ($('#varenik-text').val().toLowerCase() == 'картинка' || $('#varenik-text').val().toLowerCase() == 'шнурок' ||
               $('#varenik-text').val().toLowerCase() == 'веревочка' || $('#varenik-text').val().toLowerCase() == 'loveis' ||
               $('#varenik-text').val().toLowerCase() == 'монетка' || $('#varenik-text').val().toLowerCase() == 'love is' ||
               $('#varenik-text').val().toLowerCase() == 'loveis...' || $('#varenik-text').val().toLowerCase() == 'love is...' ||
               $('#varenik-text').val().toLowerCase() == 'фантик' || $('#varenik-text').val().toLowerCase() == 'зверек'
           ) {
               $('#step-6').hide();
               $('#step-7').show();

               sessionStorage.setItem('current_step', 7);
           } else  {
               $warning.append('<p>Неверный Ответ! Попробуй Еще Раз!</p>')
           }
       });

       $('#fourth-task').click(function() {
           $('#step-7').hide();
           $('#step-8').show();
           $('body').css('background-color','lightseagreen');

           sessionStorage.setItem('current_step', 8);
       });

       $('#chicken-code').click( function() {
           var $warning = $('.warning');
           $warning.find('p').remove();
           if ($('#chicken-text').val().toLowerCase() == 'чеснок') {
               $('#step-8').hide();
               $('#step-9').show();

               sessionStorage.setItem('current_step', 9);
           } else  {
               $warning.append('<p>Неверный Ответ! Попробуй Еще Раз!</p>')
           }
       });

       $('#finish').click(function() {
           $('#step-9').hide();
           $('#step-10').show();
           $('body').css('background-color','white').css('background-image', 'url(' + 'images/balloons.png' + ')');

           sessionStorage.setItem('current_step', 10);

           setTimeout(function(){
               $('.bonus').slideDown(slider_timer);
           }, last_audio_timer);
       });

       $('#restart').click(function() {
           $('#step-10').hide();
           $('#step-1').show();

           sessionStorage.setItem('current_step', 1);

           window.location.reload();
       });
   });
})(jQuery);