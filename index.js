
sota.sotaConfig.sections = [
    {"slug": "Election", "name": "Poll Results", "colors": sota.colorInterpolate("#663366")},
]

// optional styling configuration
sota.sotaConfig.numberFont = "Crimson Text"; // optional -- defaults to Montserrat
sota.sotaConfig.labelFont = "Montserrat"; // optional -- defaults to Lora
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
    // sota.stackedBarChart({
    //     selector: "#module-general-registered",
    //     dataFile: "assets/data/statusXregistered",
    //     labelStyle: "onBar",
    //     groupLabelStyle: "onBar",
    //     showLegend: true
    // })

    // sota.stackedBarChart({
    //     selector: "#module-general-vote",
    //     dataFile: "assets/data/voteXstatus",
    //     labelStyle: "onBar",
    //     groupLabelStyle: "onBar",
    //     showLegend: true
    // })

    // sota.stackedBarChart({
    //     selector: "#module-general-votebyyear",
    //     dataFile: "assets/data/voteXyear",
    //     labelStyle: "onBar",
    //     groupLabelStyle: "onBar",
    //     showLegend: true
    // })
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
}
