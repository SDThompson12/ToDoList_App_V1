$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", ".deleteIcon", function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Returns the value that thats in the text box
		var addTodo = $(this).val();
		$(this).val("");
		//Create a new li and add to ul
		$("ul").append("<li>" + "<span class='deleteIcon'>"+"<i class='fa fa-trash'>"+"</i></span><span class='todoItem'> " + addTodo + " </span></li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(800);
});