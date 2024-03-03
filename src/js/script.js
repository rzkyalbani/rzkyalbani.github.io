$(document).ready(function () {
  const typed1 = new Typed('#typed1', {
    strings: ['Hello, I\'m Rizky Albani'],
    typeSpeed: 0,
    onComplete: function () {
      const typed2 = new Typed('#typed2', {
        strings: ['a newbie web developer, i\'m bad at design but i love coding.'],
        typeSpeed: 0,
        onComplete: function () {
          $("#about-btn").removeClass("md:hidden");
          $("#about-btn").addClass("md:flex");

          $("#projects").removeClass("md:hidden");
          $("#projects").addClass("md:flex");

          $("#skills").removeClass("md:hidden");
          $("#skills").addClass("md:block");

          $("#contacts").removeClass("md:hidden");
          $("#contacts").addClass("md:block");

          $("#footer").removeClass("md:hidden");
          $("#footer").addClass("md:flex");
        }
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
    $("#hamburger").toggleClass("hidden");
    $("#close-hamburger").toggleClass("hidden");
    $("#navbar-list").addClass("hidden");
  });

  $("#navbar a").click(function () {
    $("#navbar a").removeClass("bg-[#ECB159] rounded-md");
    $(this).addClass("bg-[#ECB159] rounded-md");
  });

});
