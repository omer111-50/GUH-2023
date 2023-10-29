const textElement = document.getElementById("changing-text");

textElement.addEventListener("mouseover", function () {
  textElement.classList.add("hover");
});

textElement.addEventListener("mouseout", function () {
  textElement.classList.remove("hover");
});

document.addEventListener("DOMContentLoaded", function () {
  const imageElement = document.getElementById("image-element");
  const images = [
    "../images/Mountain1.jpg",
    "../images/OAO.jpg",
    "../images/Mountain3.jpg",
    "../images/Mountain2.jpg",
    "../images/Mountain4.jpg",
    "../images/Snowmountain.jpg",
    "../images/lake.jpg",
    "../images/Shaswar.jpg",
    "../images/Ibraheem.jpg",
  ];

  // Function to change the image and show a message based on the clicked image
  function changeImageAndShowMessage() {
    let random = Math.floor(Math.random() * images.length);
    const clickedImageSrc = imageElement.src;
    imageElement.src = images[random];

    // Check if the clicked image's source matches the exact URL of "OAO.jpg" and show the special message
    if (clickedImageSrc.endsWith("/OAO.jpg")) {
      alert(
        "You clicked the Omer! Omer is pleased move onto the next level :)"
      );
      window.location.href = "../level2/level2.html";
    } else if (clickedImageSrc.endsWith("/Ibraheem.jpg")) {
      alert("You caught a wild Ibraheem go checkout his LinkedIn profile!");
      window.open(
        "https://www.linkedin.com/in/john-cena-08bba6153/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        "_blank"
      );
    } else if (clickedImageSrc.endsWith("/Shaswar.jpg")) {
      alert(
        "This is Shaswar also known as the BFG, don't be afraid he won't bite!"
      );
    } else {
      alert("You clicked a regular image! Try again");
    }
  }

  imageElement.addEventListener("click", changeImageAndShowMessage);

  setInterval(function () {
    let random = Math.floor(Math.random() * images.length);
    imageElement.src = images[random];
  }, 200); // Change image every 800 milliseconds
});
