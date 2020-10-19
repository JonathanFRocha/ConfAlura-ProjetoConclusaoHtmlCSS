function activatedSlowScroll (selector) {
  $(selector).click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},1000);
  });
}

activatedSlowScroll('a[href*=about]')
activatedSlowScroll('a[href*=speakers]')
activatedSlowScroll('a[href*=signInForm]')
