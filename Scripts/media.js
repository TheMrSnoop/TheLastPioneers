const noticeText = document.getElementById("NoticeText");
const NoticeTextContainer = document.getElementById("NoticeTextContainer");

let x = 0;
let y = 0;

document.addEventListener("mousemove", function(event)
{
    x = event.clientX;
    y = event.clientY;
})


document.querySelectorAll('.ImageContainer img').forEach(img => {
    img.addEventListener('mouseover', () => {
        if (img.alt)
        {
            noticeText.textContent = img.alt;
            NoticeTextContainer.style.visibility = 'visible';
        }
        else
        {
            NoticeTextContainer.style.visibility = 'hidden';
        }
    });
});



