function navbarToggle() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
}

function docsAnchors() {
  anchors.options = {
    icon: '#'
  }

  anchors.add('.docs-content h2, .docs-content h3, .docs-content h4');
}

$(function() {
  navbarToggle();
  docsAnchors();

  console.log("Welcome to the TiKV docs!");
});
