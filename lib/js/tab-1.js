

function renderPage() {
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
    // example of how to code the greeting

    //     function writeGreeting() {

    //         if(time >= 1159) {
    //            newH1.text('Good Morning'); 
    //         }else if (time <= 1200){
    //             newH1.text('Good Afternoon')
    //         } 
    //     }
    // writeGreeting();

}
renderPage();

$('#tab-1').on('click', function (event) {
    
    $('#page').removeClass('paper').empty();

    renderPage();
})









    // newDivEl1.append(newDivEl2);
    // newDivEl2.addClass('paper-content');
    // newDivEl2.append(newTxtArea);
    // newTxtArea.autofocus;
    // saveBTN.addClass('saveBTN');
    // var blackPen = pen.addClass('blackPen');
    // var storedData = localStorage.getItem('note pad data:');
    // // funcitons executed to asigned page locations
    // page.empty();






    // // populates the note pad with saved date in local storage
    // if (newDivEl1) {
    //     newTxtArea.append(storedData)
    // };
    // // toggles ink color when button is clicked
    // blackPen.on('click', function (event) {
    //     // prevents page refresh
    //     event.preventDefault();
    //     // toggles the ink color on the page
    //     toggleInkColor();
    //     // function to toggle ink & icon colors
    //     function toggleInkColor() {
    //         blackPen.toggleClass('bluePen');
    //         $('textarea').toggleClass('blackInk');
    //     }
    // })










// const settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "43c4ad0238mshd2b6b6367029a69p1d3aa7jsn1bdb4aab6840",
//         "x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com"
//     }
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
//     $('textarea').text(response.text + '....' + response.author); 

// });