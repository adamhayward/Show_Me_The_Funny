
$('#main-content').addClass('home-page-background');
// immeditate funciton carried out when pages loads & "tab-1" oaded
renderPage();
// fucntion assigned to create page layout
function renderPage() {
    $('#title').removeClass().empty();
    // HTML element ID assingned to create varrible
    var page = $('#page');
    // varrible assigned to create new <div> tags on HTML file
    var newDivEl1 = $('<div>');
    var newDivEl2 = $('<div>');
    var newDivEl3 = $('<div>');
    var newH1 = $('<h1>')
    // methods assigned verribles 
    newDivEl1.addClass('greeting');
    newDivEl1.append(newH1);
    newH1.text('Hello');
    // newDivEl2.addClass('clock');
    newDivEl3.addClass('quote');
    // function exectution
    page.append(newDivEl1, newDivEl2, newDivEl3);
    function callQuote() {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "43c4ad0238mshd2b6b6367029a69p1d3aa7jsn1bdb4aab6840",
                "x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com"
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);


            newDivEl3.text(response.text + '....' + response.author);

        });
    }

    callQuote();
}
// funciton to be taken when "tab-1" is clicked 
$('#tab-1').on('click', function (event) {
    // prevents page from refreshing 
    event.preventDefault();

    var m = moment();
    // methods to remove page renderings from other tabs
    $('#page').removeClass('paper').empty();
    $('#heading').removeClass('heading');
    $('#title').removeClass().empty();
    $('#date').removeClass().empty();
    $('#time').removeClass().addClass('home-theme')
  
    // function exectuted to re-render the page
    renderPage();
})

