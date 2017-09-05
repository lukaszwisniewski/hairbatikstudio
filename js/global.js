// shows toggle
$("#show").show("slow").siblings();

/* for pricelist */
$('.accordion').on('click', '.accordion-control', function(e){
	e.preventDefault();
	$(this)
		.next('.accordion-panel')
		.not(':animated')
		.slideToggle()
	$(this).find('i').toggleClass('glyphicon-plus glyphicon-minus')
});
$('.accordion').on('click', '.accordion-control', function(e){
	if($(this).parents('.accordion').children('panel-collapse').hasClass('in')){
		e.stopPropagation();
	}
});

/* menu */
$('.menubutton').click(function(){
	$(this).find('i').toggleClass('fa fa-bars fa-2x fa fa-times fa-2x')
});

/*price */
$('.pricebutton').click(function(){
		$(this).find('i').toggleClass('fa fa-bars fa-2x fa fa-times fa-2x')
});
