const lenis = new Lenis({
  duration:2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);



 document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });

const headerAnimation = () => {
  const menu = document.querySelector('.menu');
  const leftMenu = document.querySelector('.headerleft');
  const expandHeader = document.querySelector('.header_expand');
  const allH1 = document.querySelectorAll('.header_expand_right h1');
  const closeBtn = document.querySelector('.close_sec_main');

  let isExpanded = false;

  // Handle close button click
  closeBtn.addEventListener('click', () => {
    isExpanded = false;

    // Collapse the header
    gsap.to(expandHeader, {
      height: 0,
      opacity: 0,
      y: -100,
      duration: 0.2,
      ease: 'power2.in',
    });

  });

  // Handle menu button click
  menu.addEventListener('click', () => {
    if (!isExpanded) {
      isExpanded = true;
      // Expand the header
      gsap.to(expandHeader, {
        height: '105vh',
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: 'power2.out',
      });
    }
  });

  // Add hover effects for H1 elements
  allH1.forEach((elem) => {
    elem.style.cursor='pointer'
    elem.addEventListener('mouseenter', () => {
      gsap.to(elem, {
        opacity: 0.5,
        x: 50,
        ease: 'power2.out',
      });
    });

    elem.addEventListener('mouseleave', () => {
      gsap.to(elem, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    });
  });
};
headerAnimation()







const tl = gsap.timeline();

tl.from(".header", {
    y: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out" 
})
.from("#Hero_sec", {
    scale: 1.1,
    opacity: 0,
    duration: 0.5,
    ease: "power2.inOut"
})
.from(".hero_text span", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    skewY: 5,
    ease: "power2.out"
})
.from([".hero_main p"], { 
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
})
.to([ ".hero_main button"], { 
  opacity: 1,
  duration: 0.5,
  ease: "power2.out"
});


// console.log(document.querySelector(".hero_main button"));





// Image sources mapped to each program
const images = [
  "https://i.postimg.cc/7LpF0yBc/Group-9.png", // Default image
  "https://i.postimg.cc/J0rNtsWQ/Kickboxing-in-Delhi-1-2.jpg",
  "https://i.postimg.cc/cCvJDW7S/Wrestling-1-1024x683-1.jpg",
  "https://crosstrainfightclub.com/wp-content/uploads/2021/03/Muay-thai-1024x576.jpg",
];

// Select the image container
const imageContainer = document.querySelector(".ourProgram_imgs");

// Create a cursor-follow button
const cursorButton = document.createElement("button");
cursorButton.textContent = "Explore";
cursorButton.classList.add("cursor-btn");
imageContainer.appendChild(cursorButton);

// Set default image
imageContainer.style.backgroundImage = `url(${images[0]})`;
imageContainer.style.backgroundSize = "cover";
imageContainer.style.backgroundPosition = "center";
imageContainer.style.backgroundRepeat = "no-repeat";

// Track last hovered index
let lastHoveredIndex = 0;

// Cursor follow effect inside .ourProgram_imgs
document.addEventListener("mousemove", (e) => {
  const bounds = imageContainer.getBoundingClientRect();

  if (
    e.clientX >= bounds.left &&
    e.clientX <= bounds.right &&
    e.clientY >= bounds.top &&
    e.clientY <= bounds.bottom
  ) {
    // Smooth movement with a slight delay
    gsap.to(cursorButton, {
      x: e.clientX - bounds.left - cursorButton.offsetWidth / 2,
      y: e.clientY - bounds.top - cursorButton.offsetHeight / 2,
      scale: 1.1,
      duration: 1, // Slight delay for smoother motion
      ease: "power2.out",
    });

    cursorButton.style.opacity = "1";
  } else {
    gsap.to(cursorButton, {
      scale: 1,
      opacity: 0,
      duration: 0.2,
    });
  }
});

// Hover effect for program elements
document.querySelectorAll(".ourPrograms_elem").forEach((elem, index) => {
  elem.addEventListener("mouseenter", () => {
    // console.log(
    //   `Mouse is over: ${elem.querySelector("h1").textContent} (Index: ${index})`
    // );

    // Update last hovered index
    lastHoveredIndex = index;

    // Instantly change image
    imageContainer.style.backgroundImage = `url(${images[index]})`;
  });
});

// Keep last hovered image if cursor leaves the section
document
  .querySelector(".ourPrograms_main")
  .addEventListener("mouseleave", () => {
    // console.log("Cursor left all elements, keeping last image");
    imageContainer.style.backgroundImage = `url(${images[lastHoveredIndex]})`;
  });




  gsap.from(".sec3_heading h2", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    skewY: 5, // Slightly reduced skew
    ease: "power2.out",
    scrollTrigger:{
      trigger: ".sec3_heading",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none"
    }
  })


  gsap.from(".sec4_headings h2", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    skewY: 5, // Slightly reduced skew
    ease: "power2.out",
    scrollTrigger:{
      trigger: ".sec4_headings",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none"
    }
  })

  gsap.from(".sec5_heading h2", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    skewY: 5, // Slightly reduced skew
    ease: "power2.out",
    scrollTrigger:{
      trigger: ".sec5_heading",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none"
    }
  })

  gsap.from(".sec6_heading h2", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    skewY: 5, // Slightly reduced skew
    ease: "power2.out",
    scrollTrigger:{
      trigger: ".sec6_heading",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none"
    }
  })



  gsap.from(".footer_logo h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    skewY: 10, 
    ease: "power2.out",
    scrollTrigger:{
      trigger: ".sec7_heading",
      start: "top -12%",
      end: "top bottom",
      scrub:1,
      toggleActions: "play none none none"
    }
  })

  // ----------------------------------------

gsap.fromTo(
  ".heading1",
  { x: "-10vw", opacity: 0 },
  {
    x: "0",
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".heading1",
      start: "top 70%",
      end: "top 50%",
      scrub: 1,
    //   markers:true
    },
  }
);

gsap.fromTo(
  ".heading2",
  { x: "10vw", opacity: 0 },
  {
    x: "0",
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".heading2",
      start: "top 70%",
      end: "top 50%",
      scrub: 1,
    //   markers:true
      
    },
  }
);

gsap.fromTo(
  ".heading3",
  { x: "-10vw", opacity: 0 },
  {
    x: "0",
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".heading3",
      start: "top 70%",
      end: "top 50%",
      scrub: 1,
    //   markers:true
    },
  }
);



// ---------------------------

gsap.fromTo(
  ".sub_heading1",
  { x: "-10vw", opacity: 0 },
  {
    x: "0",
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".sub_heading1",
      start: "top 70%",
      end: "top 50%",
      scrub: 1,
    //   markers:true
    },
  }
);

gsap.fromTo(
  ".sub_heading2",
  { x: "10vw", opacity: 0 },
  {
    x: "0",
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".sub_heading2",
      start: "top 70%",
      end: "top 50%",
      scrub: 1,
    //   markers:true
      
    },
  }
);

gsap.fromTo(
  ".sub_heading3",
  { x: "-10vw", opacity: 0 },
  {
    x: "0",
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".sub_heading3",
      start: "top 70%",
      end: "top 50%",
      scrub: 1,
      // markers:true
    },
  }
);


const profileDps = document.querySelectorAll('.profile_dp');
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FF8C00", "#8A2BE2"]; // Add more colors if needed

profileDps.forEach((dp, index) => {
    dp.style.backgroundColor = colors[index % colors.length]; // Assign colors in a loop
});




