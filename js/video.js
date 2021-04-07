var big = document.querySelector("#bigVideo");

function changeVideo() {
    if (this.id == "mini333") {
        big.src = "img/guerilla_design.mp4";
    } else if (this.id == "mini555") {
        big.src = "img/social_media.mp4";
    } else if (this.id == "clubmen") {
        big.src = "img/logo_reveal.mp4";
    }
}
document.querySelector("#mini333").addEventListener("click", changeVideo);
document.querySelector("#mini555").addEventListener("click", changeVideo);
document.querySelector("#clubmen").addEventListener("click", changeVideo);