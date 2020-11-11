// function to load content for tab-2 request
$('#tab-2').on('click', function (event) {
    event.preventDefault();
    // action to render page 
    renderPage ();
    // function to render page 
    function renderPage (){
        var page = $('#page');
        page.empty();

        var newDivEl1 = $('<div>');
        var newDivEl2 = $('<div>');

        newDivEl1.addClass('paper');
        newDivEl1.append(newDivEl2);
        newDivEl2.addClass('paper-content');
        

        page.append(newDivEl1);
       
    }

})
