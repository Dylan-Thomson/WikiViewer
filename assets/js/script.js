$(document).ready(function() {
	$(".btn").on("click", function() {
		var searchTerm = $("input").val();
		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchTerm + "&callback=?", function(data) {
			console.log(data.query.search);
			$(".searchOutput").html("");
			data.query.search.forEach(function(article) {
				var title = article.title;
				var url = "https://en.wikipedia.org/wiki/" + title;
				$(".searchOutput").append("<div><a href='" + url + "' target='_blank'>" + title + "</a></div>");	
			});
		});
	});
});