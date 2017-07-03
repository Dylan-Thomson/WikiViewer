$(document).ready(function() {
	// Form submit, get search value and make request
	$("form:first").submit(function(event) {
		event.preventDefault();

		// Get search value from input field then clear it
		var searchTerm = $("input:first").val();
		$("input:first").val("");

		// Make API request using search value
		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchTerm + "&callback=?", function(data) {
			console.log(data.query.search);

			// Update/clear output
			$(".searchKeyOutput").html("").html(data.query.search.length + " results for: " + searchTerm);
			$(".searchOutput").html("");

			// Display each article
			data.query.search.forEach(function(article) {
				var title = article.title;
				var url = "https://en.wikipedia.org/wiki/" + title;
				$(".searchOutput").append("<div><a href='" + url + "' target='_blank'>" + title + "</a></div>");	
			});
		});	
	});
});