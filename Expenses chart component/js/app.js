
$('.expenses-container .graphic > div').each(function() {
    
    var Price = parseInt($(this).attr('spend-price'));
    var PriceFloat = parseFloat($(this).attr('spend-price'));
    var DivHeight = Price * 130 / 52;

    $(this).children('.bar').css('height', DivHeight);
    $(this).children('.money').text('$' + PriceFloat);
});

var weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var day = weekday[new Date().getDay()];

$('.expenses-container .graphic .' + day + ' .bar').removeClass('bg-primary').addClass('bg-secondary');

$('.expenses-container .graphic > div').click(function() {
    $(this).toggleClass('active');
});