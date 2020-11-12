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
        title.addClass('notepad-title')
        date.text('(Date)');
        time.text('(Time)');
        // funcitons executed to asigned page locations
        $('#heading').addClass('heading');
        $('#title-elemement').append(title);
        $('.date-element').append(date, time);
    }
    // function to render page layout
    function renderPage() {
        // HTML element ID assingned to create varrible
        var page = $('#page');
        // varrible assigned to create new <div> tags on HTML file
        var newDivEl1 = $('<div>');
        var newDivEl2 = $('<div>');
        var newTxtArea = $('<textarea>');
        var saveBTN = $('<button>');
        var pen = $('<button>');
        // methods assigned verribles 
        page.addClass('paper');
        newDivEl1.append(newDivEl2);
        newDivEl2.addClass('paper-content');
        newDivEl2.append(newTxtArea);
        newTxtArea.autofocus;
        saveBTN.addClass('saveBTN');
        var blackPen = pen.addClass('blackPen');
        // funcitons executed to asigned page locations
        page.empty();
        page.append(newDivEl1, saveBTN, blackPen);
        // toggles ink color when button is clicked
        blackPen.on('click', function (event) {
            // prevents page refresh
            event.preventDefault();
            // toggles the ink color on the page
            toggleInkColor();
            // function to toggle ink & icon colors
            function toggleInkColor() {
                blackPen.toggleClass('bluePen');
                $('textarea').toggleClass('blackInk');
            }
        })
    }

})



