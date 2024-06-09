var cont1 = new Swiper(".cont2", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay:true,
    loop:true
  });





  var menubutton = document.querySelector('.h11');
  var midnav = document.querySelector('.ug-class');
  
  menubutton.addEventListener("click", function() {
      midnav.classList.toggle('ugg');
  })
  
  var menubutton = document.querySelector('.h12');
  var midnav1 = document.querySelector('.pg-class');
  
  menubutton.addEventListener("click", function() {
      midnav1.classList.toggle('pgg');
  })
  
  var menubutton = document.querySelector('.h13');
  var midnav2 = document.querySelector('.dp-class');
  
  menubutton.addEventListener("click", function() {
      midnav2.classList.toggle('dpss');
  })
  
  var menubutton = document.querySelector('.h14');
  var midnav3 = document.querySelector('.ph-class');
  
  menubutton.addEventListener("click", function() {
      midnav3.classList.toggle('phss');
  })


  var swi = new Swiper(".mys", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var sw = new Swiper(".ms", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    autoplay:true,
    loop:true
  });




  function countUp(target, element, duration) {
    let start = 0;
    let increment = 50;

    
    if (target >= 10000) {
        increment = 500;
    } else if (target >= 32000) {
        increment = 2000;
    } else if (target >= 1332) {
        increment = 50;
    } else if (target >= 236) {
        increment = 10;
    } else {
        increment = 1; 
    }

    const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
            clearInterval(interval);
            start = target;
        }
        element.innerText = Math.min(Math.floor(start), target).toLocaleString() + '+';
    }, 50); 
}


const counts = document.querySelectorAll('.co h1');
countUp(10000, counts[0], 2);
countUp(32000, counts[1], 0.5); 
countUp(236, counts[2], 2);   
countUp(1332, counts[3], 2);  
countUp(40, counts[4], 2);  