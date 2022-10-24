var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}






// NAVBATR

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());




// FORM sUBMIT

function submit() {
  const web = document.querySelector("#website").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const url =
    "https://wa.me/+923492104868?text=" +
    "I visit your website hello wrold i put all the data in the form my data in the following:  WEBSITE LINK : " +
    web +
    " " +
    "Email Adress :" +
    " " +
    email +
    " " +
    " Phone Number : " +
    phone;
  window.open(url).focus;
}

// services filter work

let btns = document.querySelectorAll(".project-btn button");
let container = document.querySelector(".digital-work");

let services = [
  {
    name: "divnet",
    type: "Web Design Projects",
    img: "/images/",
    link: "",
  },
  {
    name: "divnet",
    type: "Web Design Projects",
    img: "/images/",
    link: "",
  },
  {
    name: "divnet",
    type: "Creative Design Projects",
    img: "/images/",
    link: "",
  },
  {
    name: "divnet",
    type: "Creative Design Projects",
    img: "/images/",
    link: "",
  },
  {
    name: "divnet",
    type: "Social Media Marketing",
    img: "/images/",
    link: "",
  },
  {
    name: "divnet",
    type: "Social Media Marketing",
    img: "/images/",
    link: "",
  },
  {
    name: "divnet",
    type: "UI/UX",
    img: "/images/",
    link: "",
  },
  {
    name: "divnet",
    type: "UI/UX",
    img: "/images/",
    link: "",
  },
];
 
 const initialHtml = services.map((ite, ind) => {
  let data = `<div class="work"><img src="img2/Mask Group 17@2x.png" alt="">
  <div class="text">
    <h3>Elbise <br><span>Clothing Store</span></h3>
    <h3>121% <i style="color: green;" class="fa fa-arrow-up"></i><br> <span>${ite.type}</span></h3>
  </div>

</div>`;
return data;

});
container.innerHTML = initialHtml;

const filterProjects = (value) => {
  if (value) {
    const filterArray = services.filter((item, i) => {
      if (value === "All Projects") {
        return services;
      } else {
        return item.type === value;
      }
    });
    const filterHtml = filterArray.map((ite, ind) => {
      let data = `<div class="work"><img src="img2/Mask Group 17@2x.png" alt="">
      <div class="text">
        <h3>Elbise <br><span>Clothing Store</span></h3>
        <h3>121% <i style="color: green;" class="fa fa-arrow-up"></i><br> <span>${ite.type}</span></h3>
      </div>

    </div>`;
    return data;

    });
    container.innerHTML = filterHtml;
    console.log(filterHtml);
  }
};

btns.forEach((item, i) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    filterProjects(e.target.innerText);
  });
});
console.log(btns);



// accordian code 


const ourItemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");

// console.log(ourItemDiv);

for (let i = 0; i < ourItemDiv.length; i++) {
  closeIcon[i].style.display = "none";

  ourItemDiv[i].addEventListener("click", () => {
    const result = ourItemDiv[i].classList.toggle("active");

    if (result) {
      closeIcon[i].style.display = "block";
      openIcon[i].style.display = "none";
    } else {
      closeIcon[i].style.display = "none";
      openIcon[i].style.display = "block";
    }
  });
}w