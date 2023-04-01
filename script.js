"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const imageSlide = this.querySelector("#roleImg");
  const textSlide = this.querySelector("#textRole");
  const textContainer = this.querySelector(".text--slide--container");
  const textSL = this.querySelector(".text-sl");
  const paraSlide = this.querySelector("#paraTrack");

  const widthAdjust = function () {
    const textWidth = textSL.scrollWidth;
    textContainer.style.width = `${textWidth}px`;
  };
  // widthAdjust();

  const imageca = new Splide(imageSlide, {
    //type: "loop",
    //perPage: screenSize > 800 ? 3 : 4,
    perMove: 1,
    interval: 1500,
    drag: "free",
    pagination: false,
    arrows: false,
    // autoWidth: true,
    // arrows: false,
  });

  const textSlii = new Splide(textSlide, {
    //type: "loop",
    perMove: 1,
    interval: 1500,
    perPage: 1,
    //focus: "left",
    drag: "free",
    autoWidth: true,
    pagination: false,
    arrows: false,
  });

  const paraSlides = new Splide(paraSlide, {
    //type: "loop",
    //perPage: screenSize > 800 ? 3 : 4,
    perMove: 1,
    interval: 1500,
    drag: "free",
    pagination: false,
    arrows: true,
    // autoWidth: true,
    // arrows: false,
  });

  let syncSlide = paraSlides.sync(textSlii);
  syncSlide.sync(imageca);

  imageca.mount();
  textSlii.mount();
  paraSlides.mount();

  // textSlii.on("move", function () {
  //   console.log("somethinvoed");
  //   widthAdjust();
  // });

  // for (var i = 0; i < slideText.length; i++) {
  //   let textSlii = new Splide(slideText[i], {
  //     type: "loop",
  //     //perPage: screenSize > 800 ? 3 : 4,
  //     perMove: 1,
  //     interval: 1500,
  //     pagination: false,
  //     drag: "free",
  //     // autoWidth: true,
  //     // arrows: false,
  //   });

  //   imageca.sync(textSlii);
  //   imageca.mount();
  //   textSlii.mount();
  // }

  // const paraslides = new Splide(paraSlide, {
  //   type: "loop",
  //   //perPage: screenSize > 800 ? 3 : 4,
  //   perMove: 1,
  //   interval: 1500,
  //   drag: "free",
  //   pagination: false,
  //   arrows: true,
  //   // autoWidth: true,
  //   // arrows: false,
  // });

  //const slideTest = document.querySelector(".splide");

  console.log(this);
});
