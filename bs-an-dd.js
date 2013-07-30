function BindAnimatedDropdown($dd) {
	$dd.find('li.dropdown').each(function(){
		var $li = $(this);
		$li.hover(function(){
			clearTimeout(l);
			$li.addClass('active').children('ul').slideDown(200);
			$('li.dropdown').not($li).removeClass('active').children('ul').fadeOut(400);
		}, function(){
			l = setTimeout(function(){
				$li.removeClass('active').children('ul').fadeOut(400);
			},300);
		});
	});
}