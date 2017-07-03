$(document).ready(function() {
	$(".btn").on("click", function() {
		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=egg&callback=?", function(data) {
			console.log(data.query.search);
			data.query.search.forEach(function(article) {
				var title = article.title;
				var url = "https://en.wikipedia.org/wiki/" + title;
				$(".col-xs-12").append("<div><a href='" + url + "' target='_blank'>" + title + "</a></div>");	
			});
		});
	});
});