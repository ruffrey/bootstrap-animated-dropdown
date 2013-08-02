var l; // needs a global variable for timeout
function BindMenu($m) {
	$m.find('li.dropdown').each(function(){
		var $li = $(this);
		$li.hover(function(){
			clearTimeout(l);
			if(!$('.active-click').length)
			{
				$li.addClass('active').children('ul').slideDown(200);
				$('li.dropdown').not($li).removeClass('active').children('ul').fadeOut(400);
			}
		}, function(){
			if(!$('.active-click').length)
			{
				l = setTimeout(function(){
					$li.removeClass('active').children('ul').fadeOut(400);
				},300);
			}
		});
		$li.click(function(e){
			e.preventDefault();
			clearTimeout(l);
			if($li.hasClass('active-click'))
			{
				$li
				.removeClass('active')
				.children('ul')
				.fadeOut(400);
				$('.active-click').removeClass('active-click');
			}
			else{
				$li
				.addClass('active-click')
				.addClass('active')
				.children('ul')
				.slideDown(200);
				$('li.dropdown').not($li).removeClass('active').children('ul').fadeOut(400);
			}
		});
		
		$li.find('li').click(function(e){
			e.stopPropagation();
		});
		
	});
}
