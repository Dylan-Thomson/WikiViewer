$(document).ready(function() {
	// Form submit, get search value and make request
	$("form:first").submit(function(event) {
		event.preventDefault();

		// Get search value from input field then clear it
		var searchTerm = $("input:first").val();
		$("input:first").val("");


		// Make API request using search value
		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&generator=search&exintro=1&exsectionformat=plain&gsrsearch=" + searchTerm + "&callback=?", function(data) {
			// Update/clear output
			$(".searchKeyOutput").html("").html("Results for: " + searchTerm);
			$(".searchOutput").html("");

			// Display each article
			$.each(data.query.pages, function(key, value) {
				var url = "https://en.wikipedia.org/wiki/" + value.title;
				$(".searchOutput").append("<a href='" + url + "' target='_blank'><div class='article'><h2>" + value.title + "</h2>" + value.extract + "</div></a>");	
			});
			$(".searchOutput").hide().slideDown(1500);
		});	
	});
});