chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url && tab.url.startsWith('https://classroom.google.com')) {
    await chrome.scripting.removeCSS({
      files: ['style.css'],
      target: { tabId: tab.id }
    });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.startsWith('https://classroom.google.com')) {
    chrome.scripting.insertCSS({
      files: ['style.css'],
      target: { tabId: tabId }
    });
    chrome.action.enable(tabId);
  }
});