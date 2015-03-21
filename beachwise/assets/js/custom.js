		$( '.navbar-toggle' ).click(function() {
			if( !$('.in').length ) {
				$('.logo-img-container').css("display", "none");
			}
			else if( !$('.collapse').length ){
				$('.logo-img-container').css("display", "block");
			}
		});