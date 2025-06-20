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
    array.forEach((element, index, array) => {
        element.className = "";
        element.classList.add(className);
    });
}

function AdjustForDisplayRatio()
{
    const baseHeight = window.innerHeight;
    const baseWidth = window.innerWidth;

    const paragraphs = Array.from(document.getElementsByTagName("p"));
    const ArticlesImages = Array.from(document.getElementsByClassName("ArticleImage"));
    const Heading_Fours = Array.from(document.getElementsByTagName("h4"));
    const MainHeadings = Array.from(document.getElementsByTagName("h1"));
    const ImageHeadings = Array.from(document.getElementsByTagName("h6"));

    const h3_details = Array.from(document.getElementsByTagName("h3"));
    const h5_details = Array.from(document.getElementsByTagName("h5"));

    const NavBar = Array.from(document.getElementsByTagName("ul"))[0];

    //Items will convert to their mobile equivalent only when a certain ratio threshold is passed.
    
    ratio = (Math.round((baseWidth / baseHeight) * 100)) / 100

    console.log(ratio)

    if (ratio < 0.85)
    {
        //Applies the respective mobile class to the required elements
        MobilizeElement(paragraphs, "P_Mobile");
        MobilizeElement(ArticlesImages, "Mobile_Image");
        MobilizeElement(Heading_Fours, "h4_Mobile");
        MobilizeElement(MainHeadings, "h1_Mobile");
        MobilizeElement(h3_details, "h3_Mobile");
        MobilizeElement(ImageHeadings, "h6_Mobile")

        //Removes both the navbar and the subhead that displays the "category" of the article
        h5_details[0].remove();
        NavBar.remove();


        //Modifies the Cover Image to be mobile friendly.

        const allImages = Array.from(document.getElementsByTagName("img"));

        allImages.forEach(element => {
            if (element.className == "")
            {
                element.classList.add("Mobile_CoverImage");
            }
        });


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
