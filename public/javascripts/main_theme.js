(function($){
   $(function() {
       $('#check-code').click( function() {
         var $warning = $('.warning');
         $warning.find('p').remove();
         if (parseInt($('#code-number').val()) == 1 + 1 + 8 + 1 + 9 + 8 + 9) {
             $('#step-1').hide();
             $('#step-2').show();
         } else  {
             $warning.append('<p>Неверный Код! Попробуй Еще Раз!</p>')
         }
       });

       $('#begin').click(function() {
           $('#step-2').hide();
           $('#step-3').show();
           $('body').css('display', 'none');

       });
   });
})(jQuery);