// Global Variables
var themes = ["cumbia", "salsa", "reggaeton","samba","bachata","merengue","tango","flamenco","b-boying",
            "krumping","break dancing","moonwalk","disco","hip hop","voguing","wacking","bhangra","Punjabi","ballet","belly dance"];
var numGifs = 10;

// Display initial buttons
renderButtons();

// Adding click event listeners to all elements with a class of "theme"
$(document).on("click", ".theme", displayGifInfo);

// Add click event listners to all elemements with a class of "gifImage"
$(document).on("click",".gifImage", toggleGif);

// Handles events when the add gif button is clicked
$("#addGif").on("click", function(event) {
    event.preventDefault();
    // Grab the input from the textbox
    var theme = $("#gifInput").val().trim();

    // Add button only if text field is not blank
    if (theme != "") {

        // The gif theme from the textbox is then added to gif array
        themes.push(theme);

        // Calling renderButtons which handles the processing of gif array
        renderButtons();

        // Clear input text field
        $("#gifInput").val("");
    }

});  

// displayGifInfo function re-renders the HTML to display the appropriate content
function displayGifInfo() {

    var theme = $(this).attr("data-theme");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+theme+"&limit=10&offset=0&rating=G&lang=en&api_key=vN0hPUbQMoX4GfXB7Z2VCxoxAHOKCEg3"

    // Creates AJAX call for the specific gif theme button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("#displayGif").empty();   
        for (var i = 0; i < numGifs; i++){
            $("#displayGif").append("<p>Rating: "+response.data[i].rating+"</p>")
            // $("#displayGif").append("<img src='"+response.data[i].images.fixed_height_small_still.url+"'>");
            var a = $("<img>");
            a.attr("src",response.data[i].images.fixed_height_small_still.url);
            a.attr("still",response.data[i].images.fixed_height_small_still.url)
            a.attr("gif",response.data[i].images.fixed_height_small.url);
            a.addClass("gifImage");
            $("#displayGif").append(a);
        }
    });
}

// Function for displaying gif theme buttons
function renderButtons() {

    // Clear current buttons and re-render the buttons to prevent button duplication
    $("#gifButtons").empty();

    // Loops through the array of gif themes
    for (var i = 0; i < themes.length; i++) {
        // Dynamicaly generate buttons for each gif theme in the array
        var a = $("<button>");
        // Add a class of theme to button
        a.addClass("theme btn btn-primary m-1");
        // Add a data-attribute
        a.attr("data-theme", themes[i]);
        // Display initial button text
        a.text(themes[i]);
        // Add the button to the gifButtons div
        $("#gifButtons").append(a);
    }   
}

// Function to toggle between still image and gif
function toggleGif () {
    if ($(this).attr("src") === $(this).attr("still")) {
        $(this).attr("src",$(this).attr("gif"));
    }
    else {
        $(this).attr("src",$(this).attr("still"));
    }
}