
// Hidden Site URL Function
document.getElementById('revealButton').addEventListener('click', function() {
  var hiddenContent = document.getElementById('hiddenContent');
  hiddenContent.classList.toggle('hidden');
});


$(document).ready(function() {
  // Function to handle the click event
  $("a").click(function(event) {
      // Prevent the default behavior of the link
      event.preventDefault();

      // Get the URL of the clicked link
      var url = $(this).attr("href");

      // Make an AJAX request to the backend
      $.ajax({
          type: "GET",
          url: "http://localhost:19030",
          success: function(response) {
              // If the response is true, load the clicked site
              if (response === true) {
                  window.location.href = url;
              } else {
                  // If the response is false, trigger an alert
                  alert("Access denied!");
              }
          },
          error: function(xhr, status, error) {
              // Handle any errors
              console.error("Error:", error);
          }
      });
  });
});