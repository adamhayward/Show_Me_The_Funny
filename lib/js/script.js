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
    $('textarea').text(response.text + '....' + response.author); 
    
});