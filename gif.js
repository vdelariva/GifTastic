// Global Variables
var themes = ["boring", "snooze", "yawn"];

// Display initial buttons
renderButtons();

// Adding click event listeners to all elements with a class of "theme"
$(document).on("click", ".theme", displayGifInfo);

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
console.log(theme);
// var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

// Creates AJAX call for the specific gif theme button being clicked
// $.ajax({
    // url: queryURL,
    // method: "GET"
// }).then(function(response) {

//     $("#gifButtons").html("<img src='"+response.Poster+"'>");
//     $("#movies-view").append("<p>Rating: "+response.Ratings[0].Value+"</p>")
//     $("#movies-view").append("<p>Release Date: "+response.Year+"</p>")
//     $("#movies-view").append("<p>Plot: "+response.Plot+"</p>")

// });
}

// Function for displaying gif theme buttons
function renderButtons() {

    // Clear current buttons and re-render the buttons to prevent button duplication
    $("#gifButtons").empty();
    console.log(themes)

    // Loops through the array of gif themes
    for (var i = 0; i < themes.length; i++) {
        // Dynamicaly generate buttons for each gif theme in the array
        var a = $("<button>");
        // Add a class of theme to button
        a.addClass("theme");
        // Add a data-attribute
        a.attr("data-theme", themes[i]);
        // Display initial button text
        a.text(themes[i]);
        // Add the button to the gifButtons div
        $("#gifButtons").append(a);
    }   
}




  