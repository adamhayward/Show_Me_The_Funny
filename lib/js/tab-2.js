// function to load content for tab-2 request
$('#tab-2').on('click', function (event) {
    //prevents page from refreshing
    event.preventDefault();
    // action to render page 
    clearSytles();
    renderHeading();
    renderPage();
// funciton to clear styles from other tabs
    function clearSytles(){
        $('#page').removeClass('paper').empty();
        $('#heading').removeClass('heading');
        $('#title').removeClass().empty();
        // function exectuted to re-render the page
        }
    // funciton to render page heading
    function renderHeading() {
        // HTML element ID's assingned varribles
        var m = moment();
        var title = $('#title')
        var date = $('#date');
        var time = $('#time');
        
        // methods assigned verribles  
        title.empty();
        title.text('NOTE PAD');
        title.addClass('notepad-title')
        date.html(m.format("l"));
        time.html(m.format("LTS"));
        // funcitons executed to asigned page locations
        $('#heading').addClass('heading');
        $('#title-elemement').append(title);
        $('.date-element').append(date, time);
        date.removeClass().addClass('note-book-theme');
        time.removeClass().addClass('note-book-theme');
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
        var clearBTN = $('<button>');
        var pen = $('<button>');
        // methods assigned verribles 
        page.addClass('paper');
        newDivEl1.append(newDivEl2);
        newDivEl2.addClass('paper-content');
        newDivEl2.append(newTxtArea);
        newTxtArea.autofocus;
        saveBTN.addClass('saveBTN');
        clearBTN.addClass('clearBTN');
        var blackPen = pen.addClass('blackPen');
        var storedData = localStorage.getItem('note pad data:');
        var storageInput = newTxtArea;
        var inputText = $('textarea');
        // funcitons executed to asigned page locations
        page.empty();
        page.append(newDivEl1, saveBTN, clearBTN, blackPen);
        //listnes for input in the textarea to store as data
        storageInput.on('input', notes => {
            inputText.textContent = notes.target.value
        })
        // populates the note pad with saved date in local storage
        if (newDivEl1) {
            newTxtArea.append(storedData)
        };
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
        // event assigned for when the "save button" is clicked
        saveBTN.on('click', function (event) {
            event.preventDefault();
            /* varrible assigning fucniton to store input data under
            "the note pad data" key in local storage*/
            localStorage.setItem('note pad data:', inputText.textContent);
        })
        // event assigned for when the "clear button" is clicked
        clearBTN.on('click', function (event) {
            event.preventDefault();
            //deletes value stored under 'note pad data:' in local storage
            localStorage.removeItem('note pad data:');
            //deletes text form textarea
            $('textarea').val("");
        })
    }
     //references 'moment.js' for local time 
    function updateClock() {
        var now = moment();
        var digitalClock = now.format('LTS');
        time.textContent = digitalClock;
    }
    //Runs function to dispaly local time on 'clock'
    setInterval(updateClock, 1000);
})



