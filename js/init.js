(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 2, // Creates a dropdown of 15 years to control year,
  today: 'Hoje',
  clear: 'Limpar',
  close: 'Confirmar',
  closeOnSelect: false, // Close upon selecting a date,
  monthsFull: ['Janeiro', 'Fevereiro', 'Mar;o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  formatSubmit: 'dd/mm/aaaa'
});

function funcao1(){
  alert("Favor entrar em contato pelos nossos telefones ou e-mail. Teremos um enorme prazer em atende-lo. AMS Executivos agradece a compreensão");
}
