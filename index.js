var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function openTab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Open resume in new tab and download it
function openAndDownloadResume(event, url) {
    event.preventDefault();
    
    // Open in new tab
    window.open(url, '_blank');
    
    // Download the file
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ranjeet-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}





