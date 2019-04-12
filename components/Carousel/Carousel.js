class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.left = this.carousel.querySelector(".left-button");
    this.right = this.carousel.querySelector(".right-button");
    this.images = this.carousel.querySelectorAll(".carousel img");
    this.length = this.images.length;
    this.current = this.images[0];
    this.counter = 0;
    // console.log(this.counter);

    this.current.addEventListener("load", () => {
      this.current.style.display = "block";
    });

    this.left.addEventListener("click", () => this.navigate(-1));
    this.right.addEventListener("click", () => this.navigate(1));
  }

  navigate(direction) {
    this.current.style.display = "none";
    this.counter = this.counter + direction;
    if (direction === -1 && this.counter < 0) {
      this.counter = this.length - 1;
    }

    if (direction === 1 && !this.images[this.counter]) {
      this.counter = 0;
    }
    this.current = this.images[this.counter];
    this.current.style.display = "block";
  }
}

let carousel = document.querySelectorAll(".carousel");
carousel.forEach(item => {
  return new Carousel(item);
});

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
