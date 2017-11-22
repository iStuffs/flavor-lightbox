(function( $ ) {
  var lightboxIsOpened = false;
  var $overlay  = $('#flavorOverlay'),
      $lightbox = $('#flavorLightbox');

  $.fn.flavor = function() {

    this.find('[data-flavor-src]').each(function(){

      $('body').on('click', '[data-flavor-src]', function(){
        var src = $(this).data('flavor-src');
        $('#flavorLightbox>img').attr('src',src);
        $('#flavorLightbox, .overlay').fadeIn();
      });
    });

    return this;

  };

  // close lightbox
    function close(){
        $('#flavorLightbox, #flavorOverlay').fadeOut();
        lightbox = false;
    }

    function move(direction){
      var currentSrc = $('#flavorLightbox>img').attr('src');
      var newSrc;

    if (direction === 'next') { //next
      //console.log(this);
      newSrc = $('[data-flavor-src="' + currentSrc + '"]').next().data('flavor-src');
      // go to first element if next is empty
      if (  $('[data-flavor-src="' + currentSrc + '"]').next().length  === 0) {
        newSrc = $('[data-flavor-src]').first().data('flavor-src');
      }
    } else { //prev
      newSrc    = $('[data-flavor-src="' + currentSrc + '"]').prev().data('flavor-src');
      // go to last element if next is empty
      if (  $('[data-flavor-src="' + currentSrc + '"]').prev().length  === 0) {
        newSrc = $('[data-flavor-src]').last().data('flavor-src');
      }
    }
    // change lightbox img src
    $('#flavorLightbox>img').attr('src', newSrc);
  }

  function next() {
    move('next');
  }

  function prev() {
    move('prev');
  }

  //modal interactions
  $('#flavorLightboxClose, #flavorOverlay').click(close);

  //keyboard interactions
  $(document).keyup(function(e) {

    switch (e.keyCode) {
      case 27: // escape
        close();
        break;
      case 39: // right arrow
        next();
        break;
      case 37: // left arrow
        prev();
        break;
    }

});

}( jQuery ));
