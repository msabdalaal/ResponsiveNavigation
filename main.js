let first = document.querySelector(".first");
      let firstLink = document.querySelector(".firstLink");
      let downOne = document.querySelector(".downOne");
      let upOne = document.querySelector(".upOne");
      let showFirst = () => {
        first.classList.toggle("hide");
        downOne.classList.toggle("show");
        upOne.classList.toggle("hide");
        firstLink.classList.toggle("black");
      };

      let second = document.querySelector(".second");
      let secondLink = document.querySelector(".secondLink");
      let downTwo = document.querySelector(".downTwo");
      let upTwo = document.querySelector(".upTwo");

      let showSecond = () => {
        second.classList.toggle("hide");
        downTwo.classList.toggle("show");
        upTwo.classList.toggle("hide");
        secondLink.classList.toggle("black");
      };

      let dimmer = document.querySelector(".dimmer");
      let nav = document.querySelector(".nav");
      let login = document.querySelector(".login");
      let close = document.querySelector(".close");

      let showMenu = () => {
        dimmer.classList.toggle("dimm");
        nav.classList.toggle("hideNav");
        login.classList.toggle("hideLogin");
        close.classList.toggle("showMenu");
      };
      let hideMenu = () => {
        dimmer.classList.toggle("dimm");
        nav.classList.toggle("hideNav");
        login.classList.toggle("hideLogin");
        close.classList.toggle("showMenu");
      };