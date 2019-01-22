"use strict";

(function ( $ ) {
 
  var lightsOffOverlay = $('<section>').addClass('lights-off-overlay')

  lightsOffOverlay.append(
    $('<p>').addClass('lights-on-message')
  );

  $.lightsOff = function( options ) {

  	if( typeof(options) == "undefined")
      options = {};

    var settings = $.extend({},$.lightsOff.defaults, options);

    var items = $(document).find('[data-intro]');

    items.each(function(){
      var el = $(this);
      var introText = el.data('intro');
      var introPosition = el.data('intro-position') || settings.position;
      var elOffset = el.offset();
      var elWidth = el.width();
      var elHeight = el.height();
      var squiggleDiv = $('<div>').addClass('squiggle');
      var squigglePos = {};

      switch( introPosition )
      {
        case 'top':
          squigglePos.top = elOffset.top;
          squigglePos.left = elOffset.left + elWidth/2;
        break;
        case 'left':
          squigglePos.top = elOffset.top + elHeight/2;
          squigglePos.left = elOffset.left;
        break;
        case 'right':
          squigglePos.top = elOffset.top + elHeight/2;
          squigglePos.left = elOffset.left + elWidth;
        break;
        case 'bottom':
          squigglePos.top = elOffset.top + elHeight;
          squigglePos.left = elOffset.left + elWidth/2;
        break;
      };

      squiggleDiv.append(
          $('<figure>').addClass('squiggle-arrow')
        )
        .append(
          $('<p>').html(introText)
        );

      squiggleDiv
        .addClass('squiggle-'+introPosition)
        .css({
          'top': squigglePos.top,
          'left': squigglePos.left
        });

      lightsOffOverlay.append(squiggleDiv);

      el.addClass('lighted')
    });

    lightsOffOverlay
      .css('font-family',settings.font)
      .find('p.lights-on-message')
      .html(settings.closeText);

    $('body').append(lightsOffOverlay).addClass('lights-off');
    lightsOffOverlay.delay(10).addClass('lights-off');

    return this;
  };

  $('.lights-off-overlay').click(function(){
    $.lightsOn();
  })

  $.lightsOn = function() {
    $(".lighted").removeClass('lighted');
    $("body").removeClass('lights-off');
    lightsOffOverlay.remove();
  }

  $.lightsOff.defaults = {
    'position': 'bottom',
    'font': 'Comic Neue',
    'closeText': 'Click anywhere to dismiss'
  };
 
}( jQuery ));
