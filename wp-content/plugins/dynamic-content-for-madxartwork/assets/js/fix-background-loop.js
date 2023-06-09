dce = { 
	addCssForBackground: function( element ) {

		// Background 
		backgroundUrl = jQuery(element).data( "dce-background-image-url" );
		this.addCssForBackgroundImage( element, backgroundUrl );

		backgroundUrl = jQuery(element).data( "dce-background-hover-image-url" );
		this.addCssForBackgroundImage( element, backgroundUrl );

		backgroundUrl = jQuery(element).data( "dce-background-overlay-image-url" );
		this.addCssForBackgroundImage( element, backgroundUrl );

		backgroundUrl = jQuery(element).data( "dce-background-overlay-hover-image-url" );
		this.addCssForBackgroundImage( element, backgroundUrl );

		// Color
		backgroundColor = jQuery(element).data( "dce-background-color" );
		this.addCssForBackgroundColor( element, backgroundColor );

		backgroundColor = jQuery(element).data( "dce-background-hover-color" );
		this.addCssForBackgroundColor( element, backgroundColor );

		backgroundColor = jQuery(element).data( "dce-background-overlay-color" );
		this.addCssForBackgroundColor( element, backgroundColor );

		backgroundColor = jQuery(element).data( "dce-background-overlay-hover-color" );
		this.addCssForBackgroundColor( element, backgroundColor );


	},
	addCssForBackgroundImage: function( element, value ) {
		if( value ) {
			if( jQuery(element).hasClass( "madxartwork-section") ) {
				jQuery(element).css('background-image', 'url(' + value + ')');
			} else if ( jQuery(element).hasClass( "madxartwork-column") ) {
				if( jQuery(element).find('.madxartwork-column-wrap').length ) {
					jQuery(element).find('.madxartwork-column-wrap').first().css('background-image', 'url(' + value + ')');
				} else {
					jQuery(element).find('.madxartwork-widget-wrap').first().css('background-image', 'url(' + value + ')');
				}
			}
		}
	},
	addCssForBackgroundColor: function( element, value ) {
		if( value ) {
			if( jQuery(element).hasClass( "madxartwork-section") ) {
				jQuery(element).css('background-color', value );
			} else if ( jQuery(element).hasClass( "madxartwork-column") ) {
				if( jQuery(element).find('.madxartwork-column-wrap').length ) {
					jQuery(element).find('.madxartwork-column-wrap').first().css('background-color', value );
				} else {
					jQuery(element).find('.madxartwork-widget-wrap').first().css('background-color', value );
				}
			}
		}
	}
};
