function enlargeImage(imgSrc, imgDescription) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = imgDescription;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function toggleAbstract(abstractId) {
    var abstract = document.getElementById(abstractId);
    if (abstract.style.display === "none") {
        abstract.style.display = "block";
    } else {
        abstract.style.display = "none";
    }
}

/* Comments Cylce */
let currentGroup = 0;
const groups = document.querySelectorAll('.comments-group');
const totalGroups = groups.length;

function cycleComments() {
    // Hide all groups
    groups.forEach(group => group.style.display = 'none');

    // Show the current group
    groups[currentGroup].style.display = 'block';

    // Increment or reset the current group
    currentGroup = (currentGroup + 1) % totalGroups;
}

// Initial call to display the first group
cycleComments();

// Set the interval to cycle through comments
setInterval(cycleComments, 10000); // 10000 milliseconds = 10 seconds
