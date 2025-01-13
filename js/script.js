$('#owl-carousel1').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
],
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:3,
      }
  }
});


$('#owl-carousel2').owlCarousel({
  loop: true,
  nav: true,
  nav:true,
  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
],
  responsiveClass:true,
  responsive:{
    0: {
         items:1,
    },
    600: {
      items:1,
    },
    1000: {
      items:1,
    }
  }
});


  AOS.init({
    duration: 1200,
  });


function ev(evt, imgName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(imgName).style.display = "block";
    evt.currentTarget.className += " active";
}