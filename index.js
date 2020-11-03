
sota.sotaConfig.sections = [
    // {"slug": "Intro", "name": "", "colors": sota.colorInterpolate("#336633"), "content":
    // `
    // <img src="/assets/" > 
    // `
    {"slug": "Election", "name": "Poll Results", "colors": sota.colorInterpolate("#663366")},
    {"slug": "articles", "name": "Articles", "colors": sota.colorInterpolate("#000000"), "content":
    `


    <div class="articles-grid">
    <a class="article-item" href="https://phillipian.net/2020/10/22/andover-prepares-to-support-students-during-presidential-election/">
        <div class="article-category">
            <span> 
                News 
            </span>
        </div>
        <h3>
            Andover Prepares to Support Students During Presidential Election
        </h3>

        

        <p class="date">
            October 22, 2020 
        </p>
        <p class ="author">
            Erin Kim, Ananya Madduri 
        </p>
        <img src="https://i2.wp.com/phillipian.net/wp-content/uploads/2020/10/2016-election.png?w=1024&ssl=1">
    </a>



    <a class="article-item" href="https://phillipian.net/2020/10/22/andover-community-calls-for-mutual-respect-ahead-of-presidential-election/">
        <div class="article-category">
            <span> 
                News 
            </span>
        </div>
        <h3>
            Andover Community Calls for Mutual Respect Ahead of Presidential Election
        </h3>
        <p class="date">
            October 22, 2020 
        </p>
        <p class ="author">
            Erin Kim, Ananya Madduri 
        </p>
    </a>


    <a class="article-item" href="https://phillipian.net/2020/10/01/students-react-to-first-presidential-debate/">
        <div class="article-category">
            <span> 
                News and Commentary
            </span>
        </div>
        <h3>
            Students React to First Presidential Debate
        </h3>
        <p class="date">
            October 1, 2020 
        </p>
        <p class ="author">
            Laura Ospina, Erin Kim, Hope Nardone
        </p>
    </a>

    <a class="article-item" href="https://phillipian.net/2020/10/22/qanon-conspiracies-and-my-local-pizza-shop/">
        <div class="article-category">
            <span> 
                Commentary
            </span>
        </div>
        <h3>
            QAnon Conspiracies and My Local Pizza Shop
        </h3>
        
        <p class="date">
            October 22, 2020 
        </p>
        <p class ="author">
            Charlotte Rediker
        </p>
        <img src="https://i0.wp.com/phillipian.net/wp-content/uploads/2020/10/Image-from-iOS-2-1.jpg?w=2048&ssl=1">
    </a>

    <a class="article-item" href="https://phillipian.net/2020/10/23/battling-it-out-for-democracy/">
        <div class="article-category">
            <span> 
                Commentary
            </span>
        </div>
        <h3>
            Battling it out for Democracy
        </h3>
        
        <p class="date">
            October 23, 2020 
        </p>
        <p class ="author">
            Bianca Morales 
        </p>
        <img src="https://i2.wp.com/phillipian.net/wp-content/uploads/2020/10/IMG_3247.jpg?resize=2048%2C1312&ssl=1">
    </a>

    <a class="article-item" href="https://phillipian.net/2020/10/08/donald-trumps-coronavirus-diagnosis/">
        <div class="article-category">
            <span> 
                Commentary
            </span>
        </div>
        <h3>
            Donald Trump's Coronavirus Diagnosis
        </h3>
        
        <p class="date">
            October 8, 2020 
        </p>
        <p class ="author">
            Bianca Morales 
        </p>
        <img src="https://i1.wp.com/phillipian.net/wp-content/uploads/2020/10/Image-from-iOS-3.jpg?resize=2048%2C1508&ssl=1">
    </a>

    <a class="article-item" href="https://phillipian.net/2020/10/08/donald-trumps-coronavirus-diagnosis/">
        <div class="article-category">
            <span> 
                Editorial
            </span>
        </div>
        <h3>
            Deconstructing Disinformation 
        </h3>
        <p class="date">
            October 11, 2020 
        </p>
        <p class ="author">
            The Phillipian, vol. CXLIII
        </p>
    </a>

    <a class="article-item" href="https://phillipian.net/2020/09/25/honoring-justice-ruth-bader-ginsburg-1933-2020/">
        <div class="article-category">
            <span> 
                Editorial
            </span>
        </div>
        <h3>
            Honoring Justice Ruth Bader Ginsburg (1933-2020)
        </h3>
        <p class="date">
            September 25, 2020 
        </p>
        <p class ="author">
            The Phillipian, vol. CXLIII
        </p>
    </a>
    
    <a class="article-item" href="https://phillipian.net/2020/09/25/honoring-justice-ruth-bader-ginsburg-1933-2020/">
    <div class="article-category">
        <span> 
            Editorial
        </span>
    </div>
    <h3>
        Honoring Justice Ruth Bader Ginsburg (1933-2020)
    </h3>
    <p class="date">
        September 25, 2020 
    </p>
    <p class ="author">
        The Phillipian, vol. CXLIII
    </p>
</a>


<a class="article-item" href="https://www.youtube.com/embed/AvBodTW7WU8">
    <div class="article-category">
        <span> 
            Editorial
        </span>
    </div>
    <h3>
        Honoring Justice Ruth Bader Ginsburg (1933-2020)
    </h3>
    <p class="date">
        September 25, 2020 
    </p>
    <p class ="author">
        The Phillipian, vol. CXLIII
    </p>
    <div class="yt-container">
        <iframe src="https://www.youtube.com/embed/AvBodTW7WU8" frameborder="0"></iframe>
    </div>
</a>
</div>



    `
}
]

// optional styling configuration
sota.sotaConfig.numberFont = "Montserrat"; // optional -- defaults to Montserrat
sota.sotaConfig.labelFont = "Crimson Text"; // optional -- defaults to Lora
sota.setColors(sota.sotaConfig);
sota.setStyles(sota.sotaConfig); // for custom sotaConfig; for default options, don't pass any params (other than font path)
sota.createSections(sota.sotaConfig);

// optional, render navbar based on sotaConfig.sections
// make sure you call createSections first!
sota.sotaNavbar(sota.sotaConfig, "sota.js Demo", "szlogo.png", false, "https://www.samsonzhang.com/");
// GENERAL
window.onload = () => {

//new charts
    sota.stackedBarChart({
        section: "Election",
        dataFile: "assets/data/statusXeligible",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true,
        title: "hello",
        subtitle: "hello again"
    })

    sota.stackedBarChart({
        section: "Election",
        dataFile: "assets/data/statusXregistered",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true,
        title: "If you are eligible, have you registered to vote?",
        subtitle:"test"
    })

    sota.stackedBarChart({
        section: "Election",
        dataFile: "assets/data/voteXstatus",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true,
        title: "Who do you support in the upcoming election?",
        subtitle: "test",
        customColors: ["#2F609B", "#226341", "#FBB03B", "#BF3D2A"]
    })

    sota.stackedBarChart({
        section: "Election",
        dataFile: "assets/data/voteXyear",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true,
        title: "Support, by year",
        subtitle:"test",
        customColors: ["#2F609B", "#226341", "#FBB03B", "#BF3D2A"]
    })
//new charts end

// masonry
    // const sections = document.querySelectorAll(".container");

    // sections.forEach((e) => {
    //     let count = 0;
    //     const total = e.querySelectorAll(".module svg").length;

    //     const loading = document.createElement("p");
    //     loading.innerHTML = "Loading...";
    //     loading.classList.add("loading");

    //     e.prepend(loading);

    //     e.addEventListener("sotaChartRendered", () => {
    //         count++;

    //         if (count == total) {
    //             e.classList.remove("hide");

    //             const msnry = new Masonry(e, {
    //                 itemSelector: ".module",
    //                 columnWidth: ".module",
    //                 gutter: 48
    //             })
    //         }
    //     })
    // })
    sota.sotaMasonry()
}
