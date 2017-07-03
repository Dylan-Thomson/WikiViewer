$(document).ready(function() {
	$("form:first").submit(function(event) {
		event.preventDefault();
		var searchTerm = $("input:first").val();
		$("input:first").val("");
		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchTerm + "&callback=?", function(data) {
			console.log(data.query.search);
			$(".searchKeyOutput").html("").html(data.query.search.length + " results for: " + searchTerm);
			$(".searchOutput").html("");
			data.query.search.forEach(function(article) {
				var title = article.title;
				var url = "https://en.wikipedia.org/wiki/" + title;
				$(".searchOutput").append("<div><a href='" + url + "' target='_blank'>" + title + "</a></div>");	
			});
		});	
	});
});