//$(document).ready(function() {

var topics = ['Snoop Dogg', 'Eminem', 'Drake', 'J Cole', '6ix9ine', 'Lil Wayne', 'Cardi B', 'Kanye West', 'Big Sean', 'Tupac']

for (var i = 0; i < topics.length; i++) {
    var newBttn = $("<button>");
    newBttn.addClass("gif-button");
    newBttn.attr("data-name", topics[i]);
    newBttn.text(topics[i]);
    $("#buttons-view").append(newBttn);

    var rapper = ('data-name', topics[i]);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=ZEV1n5YmJvGbqCEdxyCm1n0EEnjaSSCX&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var rap = response.data[0];
            var gifDiv = $("<div>");

            var rateLetter = $("<h5>").text("Rating: " + rap.rating)
            var rapGif = $("<img>");
            rapGif.attr("src", rap.images.fixed_height.url);



            $('.gif-button').on('click', function () {
                gifDiv.append(rateLetter);
                gifDiv.append(rapGif);
                $('#results').prepend(gifDiv);


                if (rapGif.on('click', function() {
                    rapGif.attr("src",rap.images.fixed_height_still.url);
                }));
            })
        })

    
}

$('#add-gif').on('click', function(event) {
    event.preventDefault();
    var inGif = $('#gif-input').val().trim();
    topics.push(newBttn);
    topics.push(topics);
    console.log(inGif);
})


//});