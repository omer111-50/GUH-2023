const textElement = document.getElementById('changing-text');

textElement.addEventListener('mouseover', function () {
    textElement.classList.add('hover');
});

textElement.addEventListener('mouseout', function () {
    textElement.classList.remove('hover');
});


document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById('image-element');
    const images = ['GUH-2023/images/Mountain1.jpg', 'GUH-2023/images/OAO.jpg', 'GUH-2023/images/Mountain3.jpg', 'GUH-2023/images/Mountain2.jpg', 'GUH-2023/images/Mountain4.jpg', 'GUH-2023/images/Snowmountain.jpg', 'GUH-2023/images/lake.jpg', 'GUH-2023/images/Shaswar.jpg', "GUH-2023/images/Ibraheem.jpg"];
    
 // Function to change the image and show a message based on the clicked image
 function changeImageAndShowMessage() {
    let random = Math.floor(Math.random() * images.length);
    const clickedImageSrc = imageElement.src;
    imageElement.src = images[random];
    
    // Check if the clicked image's source matches the exact URL of "OAO.jpg" and show the special message
    if (clickedImageSrc.endsWith('/OAO.jpg')) {
        alert("You clicked the Omer! Omer is pleased move onto the next level :)");
        window.location.href = "https://www.example.com/nextpage";
    } else if(clickedImageSrc.endsWith('/Ibraheem.jpg')) {
        alert("You caught a wild Ibraheem go checkout his LinkedIn profile!");
    } else if (clickedImageSrc.endsWith('/Shaswar.jpg')) {
        alert("This is Shaswar also known as the BFG, don't be afraid he won't bite!");
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