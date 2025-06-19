
function UpdateFooter()
{
    const footerText = document.getElementById("FooterText"); 
    const d = new Date();
    let currentMonth = d.getMonth() + 1;
    let currentYear = d.getFullYear();

    footerText.textContent = "This is a passion project made by a solo developer | NOTHING IS FINAL | " + currentMonth + "." + currentYear;
}

function Clock()
{
    const startTime = new Date("2024-03-02 18:00:00");
          
    function padToThreeDigits(number) {
      return number.toString().padStart(2, '0');
    }
   
    function updateTimeElapsed() {
      const now = new Date();
      const elapsedTime = now - startTime;
      
      const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
        
      document.getElementById("Time-Text").textContent =
        `${padToThreeDigits(days)} : ` +
        `${padToThreeDigits(hours)} : ` +
        `${padToThreeDigits(minutes)} : ` +
        `${padToThreeDigits(seconds)}`;
    }
         
    updateTimeElapsed();

    setInterval(updateTimeElapsed, 1000);
}

function Start()
{
    Clock();
}

UpdateFooter();