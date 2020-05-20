$("ul").on("click","li", function() {
	$(this).addClass("completed");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var thing = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + thing + "</li>");
	}
	
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
})