// Create context menu on extension installation
browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
        id: "open-in-freedium",
        title: "Open in Freedium",
        contexts: ["link", "page"]
    });
});

// Handle context menu click
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open-in-freedium") {
        // Get the URL to open
        let urlToOpen;
        
        if (info.linkUrl) {
            // If right-clicked on a link, use the link URL
            urlToOpen = info.linkUrl;
        } else {
            // If right-clicked on the page, use the current page URL
            urlToOpen = info.pageUrl || tab.url;
        }
        
        // Prepend Freedium mirror URL
        const freediumUrl = `https://freedium-mirror.cfd/${urlToOpen}`;
        
        // Open in new tab
        browser.tabs.create({ url: freediumUrl });
    }
});

