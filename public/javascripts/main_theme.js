(function($){
   $(function() {
       $('#check-code').click( function() {
         var $warning = $('.warning');
         $warning.find('p').remove();
         if (parseInt($('#code-number').val()) == 1 + 1 + 8 + 1 + 9 + 8 + 9) {
             $('#step-1').hide();
             $('#step-2').show();

             setTimeout(function(){
                 $('.first-task').slideDown(1000); //TODO
             }, 1000);
         } else  {
             $warning.append('<p>Неверный Код! Попробуй Еще Раз!</p>')
         }
       });

       $('#begin').click(function() {
           $('#step-2').hide();
           $('#step-3').show();
           $('body').css('display', 'none').css('background-color','midnightblue');
       });

       $('#second-task').click(function() {
           $('#step-3').hide();
           $('#step-4').show();
       });

       $('#check-name').click( function() {
           var $warning = $('.warning');
           $warning.find('p').remove();
           if ($('#code-name').val() == '39lb650v') {
               $('#step-4').hide();
               $('#step-5').show();
           } else  {
               $warning.append('<p>Неверное Имя! Попробуй Еще Раз!</p>')
           }
       });

       $('#third-task').click(function() {
           $('#step-5').hide();
           $('#step-6').show();
           $('body').css('background-color','steelblue');
       });

       $('#varenik-code').click( function() {
           var $warning = $('.warning');
           $warning.find('p').remove();
           if ($('#varenik-text').val() == '') {
               $('#step-6').hide();
               $('#step-7').show();
           } else  {
               $warning.append('<p>Неверный Ответ! Попробуй Еще Раз!</p>')
           }
       });

       $('#fourth-task').click(function() {
           $('#step-7').hide();
           $('#step-8').show();
           $('body').css('background-color','blue');
       });
   });
})(jQuery);