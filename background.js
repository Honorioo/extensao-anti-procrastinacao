chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  chrome.storage.local.get("blockedUrl", (data) => {
    const blockedUrl = data.blockedUrl;

    if (blockedUrl && details.url.startsWith(blockedUrl)) {
      chrome.tabs.update(details.tabId, { url: "about:blank" });
    }
  });
}, { url: [{ urlMatches: ".*" }] });
