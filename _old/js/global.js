  /*!
 Batick Hair Studio 2015
 */


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


// Classie - class helper functions by @desandro https://github.com/desandro/classie -->


			var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
				menuRight = document.getElementById( 'cbp-spmenu-s2' ),
				menuTop = document.getElementById( 'cbp-spmenu-s3' ),
				menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
				//showLeft = document.getElementById( 'showLeft' ),
				//showRight = document.getElementById( 'showRight' ),
				showTop = document.getElementById( 'showTop' ),
				//showBottom = document.getElementById( 'showBottom' ),
				//showLeftPush = document.getElementById( 'showLeftPush' ),
				//showRightPush = document.getElementById( 'showRightPush' ),
				body = document.body;

			/*showLeft.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuLeft, 'cbp-spmenu-open' );
				disableOther( 'showLeft' );
			};
			showRight.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuRight, 'cbp-spmenu-open' );
				disableOther( 'showRight' );
			};*/
			showTop.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuTop, 'cbp-spmenu-open' );
				disableOther( 'showTop' );
			};
			/*showBottom.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuBottom, 'cbp-spmenu-open' );
				disableOther( 'showBottom' );
			};
			showLeftPush.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( body, 'cbp-spmenu-push-toright' );
				classie.toggle( menuLeft, 'cbp-spmenu-open' );
				disableOther( 'showLeftPush' );
			};
			showRightPush.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( body, 'cbp-spmenu-push-toleft' );
				classie.toggle( menuRight, 'cbp-spmenu-open' );
				disableOther( 'showRightPush' );
			};*/

			function disableOther( button ) {
				if( button !== 'showLeft' ) {
					classie.toggle( showLeft, 'disabled' );
				}
				if( button !== 'showRight' ) {
					classie.toggle( showRight, 'disabled' );
				}
				if( button !== 'showTop' ) {
					classie.toggle( showTop, 'disabled' );
				}
				if( button !== 'showBottom' ) {
					classie.toggle( showBottom, 'disabled' );
				}
				if( button !== 'showLeftPush' ) {
					classie.toggle( showLeftPush, 'disabled' );
				}
				if( button !== 'showRightPush' ) {
					classie.toggle( showRightPush, 'disabled' );
				}
			}


// END NAV - Classie plugin  
    
    

      



