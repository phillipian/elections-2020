let colorsArray = {
    "general": ["#235085","#1065a1","#0b88c0","#22a7d3","#4ac2e5","#8dd1e9","#c6e6f3","#e3f4fb"],
    "politics": ["#2C3278", "#5D5797", "#7D78AD", "#948EB9", "#A8A3C6", "#BFBDD5", "#DFDBE7"]
}

sota.setColors(colorsArray);

sota.setStyles("./assets/fonts"); // for custom sotaConfig; for default options, don't pass any params (other than font path)

// GENERAL
window.onload = () => {

//new charts
    sota.stackedBarChart({
        selector: "#module-general-eligibility",
        dataFile: "assets/data/statusXeligible",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true
    })
    sota.stackedBarChart({
        selector: "#module-general-registered",
        dataFile: "assets/data/statusXregistered",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true
    })

    sota.stackedBarChart({
        selector: "#module-general-vote",
        dataFile: "assets/data/voteXstatus",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true
    })

    sota.stackedBarChart({
        selector: "#module-general-votebyyear",
        dataFile: "assets/data/voteXyear",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true
    })
//new charts end

// masonry
    const sections = document.querySelectorAll(".container");

    sections.forEach((e) => {
        let count = 0;
        const total = e.querySelectorAll(".module svg").length;

        const loading = document.createElement("p");
        loading.innerHTML = "Loading...";
        loading.classList.add("loading");

        e.prepend(loading);

        e.addEventListener("sotaChartRendered", () => {
            count++;

            if (count == total) {
                e.classList.remove("hide");

                const msnry = new Masonry(e, {
                    itemSelector: ".module",
                    columnWidth: ".module",
                    gutter: 48
                })
            }
        })
    })
}