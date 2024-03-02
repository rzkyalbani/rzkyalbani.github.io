$(document).ready(function () {
  const typed1 = new Typed('#typed1', {
    strings: ['Hello, I\'m Rizky Albani'],
    typeSpeed: 60,
    onComplete: function () {
      const typed2 = new Typed('#typed2', {
        strings: ['a web developer.'],
        typeSpeed: 60,
      })
    }
  });

  $("#hamburger-btn").click(function () {
    $("#hamburger").toggleClass("hidden");
    $("#close-hamburger").toggleClass("hidden");

    if ($('#hamburger').hasClass('hidden')) {
      $("#navbar-list").removeClass("hidden");
      $("#navbar-list").addClass("flex");
    } else {
      $("#navbar-list").removeClass("flex");
      $("#navbar-list").addClass("hidden");
    }

  });

  $("#navbar-list a").click(function () {
    $("#navbar-list a").removeClass("bg-[#ECB159] rounded-md");
    $(this).addClass("bg-[#ECB159] rounded-md");
  });

  $("#navbar a").click(function () {
    $("#navbar a").removeClass("bg-[#ECB159] rounded-md");
    $(this).addClass("bg-[#ECB159] rounded-md");
  });

});
