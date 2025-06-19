function gcd(a, b)
{
    while (b)
    {
        [a, b] = [b, a % b];
    }
    return a;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getWordCount()
{
    const AllParagraphs = document.getElementsByTagName("p");
    let WordCount = 0;
    let Words = [''];
    let MinuteToRead = 0;

    for (let index = 0; index < AllParagraphs.length; index++) {
        const element = AllParagraphs[index];
        const LocalParaWords = element.innerHTML.split(" ");

        Words = Words.concat(LocalParaWords);
    }

    WordCount = numberWithCommas(Words.length);
    MinuteToRead = Math.round((Words.length) / 250)
    console.log(`${WordCount} words`);

    const h3_Subheader = document.getElementsByTagName('h3')

    const Prefix = h3_Subheader[0].textContent;

    h3_Subheader[0].textContent = `${Prefix} | About a ${MinuteToRead} Minute Read`
}

function findRatio(numerator, denominator)
{
    const commonDivisor = gcd(numerator, denominator)
    const simplifiedNumerator = numerator / commonDivisor;
    const simplifiedDenominator = denominator / commonDivisor;

    return [simplifiedNumerator, simplifiedDenominator]
}

function MobilizeElement(array, className)
{
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.className = "";
        element.classList.add(className);
    }
}

function AdjustForDisplayRatio()
{
    const baseHeight = window.innerHeight;
    const baseWidth = window.innerWidth;

    const paragraphs = document.getElementsByTagName("p");
    const ArticlesImages = document.getElementsByClassName("ArticleImage")
    const Heading_Fours = document.getElementsByTagName("h4");
    
    ratio = (Math.round((baseWidth / baseHeight) * 100)) / 100

    console.log(ratio)

    if (ratio < 0.85)
    {
        MobilizeElement(paragraphs, "P_Mobile");
        MobilizeElement(ArticlesImages, "Mobile_Image");
        MobilizeElement(Heading_Fours, "h4_Mobile")
    }

}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ArticleNavBar = document.getElementById("ArticleNavbar");
    const NavProgressBar = document.getElementById("NavBarProgressBar");

    NavProgressBar.style.width = `${(scrollTop / docHeight) * 100}vw`;

    if (scrollTop > 450) {
        ArticleNavBar.classList.remove("NavBarBackgroundTransparent");
        ArticleNavBar.classList.add("NavBarBackground");
    } else {
        ArticleNavBar.classList.remove("NavBarBackground");
        ArticleNavBar.classList.add("NavBarBackgroundTransparent");
    }

    //const [horizontalRatio, verticalRatio] = findRatio(baseWidth, baseHeight)

    AdjustForDisplayRatio();

});



window.addEventListener("load", () => 
{
    getWordCount();
});
