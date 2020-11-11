// function to load content for tab-2 request
$('#tab-2').on('click', function (event) {
    //prevents page from refreshing
    event.preventDefault();
    // action to render page 
    renderHeading();
    renderPage();
    // funciton to render page heading
    function renderHeading() {
        // HTML element ID's assingned varribles
        var title = $('#title')
        var date = $('#date');
        var time = $('#time');
        // methods assigned verribles  
        title.empty();
        title.text('NOTE PAD');
        date.text('(Date)');
        time.text('(Time)');
        // funcitons executed to asigned page locations
        $('#title-elemement').append(title);
        $('.date-element').append(date, time);
    }
    // function to render page contents
    function renderPage() {
        // HTML element ID assingned to create varrible
        var page = $('#page');
        // varrible assigned to create new <div> tags on HTML file
        var newDivEl1 = $('<div>');
        var newDivEl2 = $('<div>');
        // methods assigned verribles 
        newDivEl1.addClass('paper');
        newDivEl1.append(newDivEl2);
        newDivEl2.addClass('paper-content');
        // funcitons executed to asigned page locations
        page.empty();
        page.append(newDivEl1);
    }

})
