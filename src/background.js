chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url?.startsWith('https://classroom.google.com')) {
    await chrome.scripting.removeCSS({
      files: ['style.css'],
      target: { tabId: tab.id }
    });
  }
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (tab.url?.startsWith('https://classroom.google.com')) {
    await chrome.scripting.insertCSS({
      files: ['style.css'],
      target: { tabId: tabId }
    });
    await chrome.action.enable(tabId);
  }
});