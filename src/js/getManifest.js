const homePage = chrome.runtime.getManifest().homepage_url;
const addonVersion = "v" + chrome.runtime.getManifest().version;
const author = chrome.runtime.getManifest().author;
const changelogURL = homePage + "/blob/main/CHANGELOG.md";
const issue_trackerURL = homePage + "/issues";

// Load _locales and manifest data into popup.html when opened.
document.addEventListener("DOMContentLoaded", function () {
    //console.log(addonName + ' v' + addonVersion);
	
	//Load head
	document.title = chrome.i18n.getMessage("name");
	document.getElementsByTagName('meta').namedItem('author').setAttribute('content',author);
	document.getElementsByTagName('meta').namedItem('description').setAttribute('content',chrome.i18n.getMessage("description"));
	
	//Load title
	document.getElementById("title").innerHTML = chrome.i18n.getMessage("popup_title");
	
    // Load changelog element
	document.getElementById("changelog").innerHTML = chrome.i18n.getMessage("popup_changelog");
    document.getElementById("changelog").href = changelogURL;
    document.getElementById("changelog").title = changelogURL;
	
	// Load issue_tracker element
	document.getElementById("issue_tracker").innerHTML = chrome.i18n.getMessage("popup_issue_tracker");
    document.getElementById("issue_tracker").href = issue_trackerURL;
    document.getElementById("issue_tracker").title = issue_trackerURL;
	
	// Load source_code element
	document.getElementById("source_code").innerHTML = chrome.i18n.getMessage("popup_source_code");
    document.getElementById("source_code").href = homePage;
    document.getElementById("source_code").title = homePage;
	
	// Load addon_version element
	document.getElementById("addon_version").innerHTML = chrome.i18n.getMessage("popup_addon_version");
    document.getElementById("addon_version").textContent = addonVersion;
});

// Open clickable links
window.addEventListener("click", function (e) {
    if (e.target.href !== undefined) {
        chrome.tabs.create({ url: e.target.href });
        window.close();
    }
});
