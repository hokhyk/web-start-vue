chrome.tabs.onCreated.addListener(function(tab) {
  console.log(tab)
  if (tab.pendingUrl === 'chrome://newtab/') {
    chrome.tabs.update(tab.id, { url: "https://www.kiwikiwi.fun/" });
  }
});