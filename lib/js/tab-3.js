

// funciton to be taken when "tab-1" is clicked 
$('#tab-3').on('click', function (event) {
    // prevents page from refreshing 
    event.preventDefault();
    // methods to remove page renderings from other tabs
    clearSytles();
    renderHeading();

    function clearSytles() {
        $('#page').removeClass('paper').empty();
        $('#heading').removeClass('heading');
        $('#title').removeClass().empty();
        // function exectuted to re-render the page
    }

    function renderHeading() {
        // HTML element ID's assingned varribles
        var m = moment();
        var title = $('#title')
        var date = $('#date');
        var time = $('#time');
        // methods assigned verribles  
        title.empty();
        title.text('CALENDAR');
        title.addClass('calendar-title')
        date.html(m.format("l"));
        time.html(m.format("LTS"));
        // funcitons executed to asigned page locations
        $('#title-elemement').append(title);
        $('.date-element').append(date, time);
        date.removeClass().addClass('calendar-theme');
        time.removeClass().addClass('calendar-theme');
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


