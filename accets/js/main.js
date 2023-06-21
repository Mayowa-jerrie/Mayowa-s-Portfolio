/*========= show menu===========*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

      /*======== Menu Show ========*/

      if (navToggle){
        navToggle.addEventListener("click", () =>{
            navMenu.classList.add("show-menu")
        })
      }

/**=======Menu Hidden ======== */
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })

}



/*========= remove menu mobile===========*/
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu")

    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
 

/*========= swiper projects===========*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween:24,
     navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
     breakpoints: {
      1200:{
        slidesPerview:2,
        spaceBetween:-56,
       
      },
     },
  });


/*========= swiper testimonial===========*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor:true,
  navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
});


/*========= Email  js===========*/
 
     /** scroll section active**/
      



/*========= scroll section active link===========*/




/*========= show scroll up===========*/
