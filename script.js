//For login and Sign Up
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

// For Check mental Score


  // Show NGO List
  document.getElementById("showNGOs").addEventListener("click", function () {
    const ngoList = document.getElementById("ngoList");
    ngoList.innerHTML = "";

    const ngos = [
      { name: "Smile Foundation", link: "https://www.smilefoundationindia.org/" },
      { name: "Goonj", link: "https://goonj.org/" },
      { name: "HelpAge India", link: "https://www.helpageindia.org/" },
      { name: "Child Rights and You (CRY)", link: "https://www.cry.org/" },
      { name: "Sevalaya", link: "https://sevalaya.org/" },
      { name: "Calcutta Rescue", link: "https://calcuttarescue.org/" },
      { name: "CARE India", link: "https://www.careindia.org/" },
      { name: "Bharti Foundation", link: "https://www.bhartifoundation.org/" },
      { name: "Breakthrough Trust", link: "https://inbreakthrough.org/" },
    ];

    ngos.forEach((ngo) => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.textContent = ngo.name;
      a.href = ngo.link;
      a.target = "_blank";
      li.appendChild(a);
      ngoList.appendChild(li);
    });

    document.getElementById("ngoContainer").classList.toggle("hidden");
  });

