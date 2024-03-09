var page_theme = "light";
const sections = ["education", "achievements", "skills", "blog"];

function page_onload() {
    console.log("Page loaded.. :=D") // For now

    // Retrieve theme info from local storage (if exists) else apply light mode
    
}

function toggle_theme() {
    if (page_theme == "light") {
        page_theme = "dark";
        document.getElementById("theme-toggle-image").src = "assets/images/sun_icon.png";
        
        const elements = Array.from(document.getElementsByClassName("light"));
        for (const ele of elements) {
            // console.log(ele.id);
            ele.classList.replace("light", "dark");
        }

        const backbuttons = Array.from(document.getElementsByClassName("back-button"));
        for (const ele of backbuttons) {
            // console.log(ele.id);
            ele.src = "assets/images/back_icon_grey.png"
        }
    }
    else if (page_theme == "dark") {
        page_theme = "light";
        document.getElementById("theme-toggle-image").src = "assets/images/moon_icon.png";
        
        const elements = Array.from(document.getElementsByClassName("dark"));
        for (const ele of elements) {
            console.log(ele.id);
            ele.classList.replace("dark", "light");
        }

        const backbuttons = Array.from(document.getElementsByClassName("back-button"));
        for (const ele of backbuttons) {
            // console.log(ele.id);
            ele.src = "assets/images/back_icon_black.png"
        }
    }
    
    console.log("toggle theme to "+page_theme); // 
    // Save theme to local storage
    
}

function expand(section_name) {
    console.log("expand "+section_name)
    // return;
    
    document.getElementById("myname").classList.remove("hidden")
    setTimeout(function(){document.getElementById("main-about").classList.add("hidden")}, 1);
    
    for (sec of sections) {
        if (sec == section_name) {
            document.getElementById("button-"+sec).classList.add("hidden");
            document.getElementById("content-"+sec).classList.remove("hidden");
            document.getElementById("section-"+sec).classList.replace("corner", "center-expanded");  
        }
        else {
            document.getElementById("section-"+sec).classList.add("hidden");
        }
        
    }
    
    if (section_name == "education") {
        document.getElementById("section-education").classList.remove("top-left");
        document.getElementById("education-list").classList.remove("hidden");
    }
    else if (section_name == "achievements") {
        document.getElementById("section-achievements").classList.remove("top-right");
    }
    else if (section_name == "skills") {
        document.getElementById("section-skills").classList.remove("bottom-left");
    }
    else if (section_name == "blog") {
        document.getElementById("section-blog").classList.remove("bottom-right");
        document.getElementById("blog-list").classList.remove("hidden");
    }
}

function collapse(section_name) {
    console.log("collapse "+section_name)
    // return;
    
    document.getElementById("myname").classList.add("hidden")
    
    if (section_name == "education") {
        document.getElementById("section-education").classList.add("top-left");
        document.getElementById("education-list").classList.add("hidden");
    }
    else if (section_name == "achievements") {
        document.getElementById("section-achievements").classList.add("top-right");
    }
    else if (section_name == "skills") {
        document.getElementById("section-skills").classList.add("bottom-left");
    }
    else if (section_name == "blog") {
        document.getElementById("section-blog").classList.add("bottom-right");
        document.getElementById("blog-list").classList.add("hidden");
    }

    for (sec of sections) {
        if (sec == section_name) {
            document.getElementById("button-"+sec).classList.remove("hidden");
            document.getElementById("content-"+sec).classList.add("hidden");
            document.getElementById("section-"+sec).classList.replace("center-expanded", "corner");
        }
        else {
            console.log("trying to access: section-"+sec);
            document.getElementById("section-"+sec).classList.remove("hidden");
        }
        
    }
    
    document.getElementById("main-about").classList.remove("hidden");
}
