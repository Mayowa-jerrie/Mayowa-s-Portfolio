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
const contactForm = document.getElementById("contact-form"),
      contactName = document.getElementById("contact-name"),
      contactEmail = document.getElementById("contact-email"),
      contactProject = document.getElementById("contact-project"),
      contactMessage = document.getElementById("contact-message");

      const sendEmail = (e) =>{
         e.preventDefault()
         //value checker by Mayor....
         if( contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
           //add and remove color
           contactMessage.contactList.remove("color-blue")
           contactMessage.contactList.add("color-red")

           // show message
        contactMessage.textContent = 'Write all the input fields 📩'
         }else{
            //ServiceID - templateID- #form 
            emailjs.sendform('','','','')
         }
      } 
      contactForm.addEventListener("submit", sendEmail)




/*========= scroll section active link===========*/



/*========= show scroll up===========*/
