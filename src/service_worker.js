// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.includes("https://classroom.google.com/")) {
    // Get the localized 'ON' string
    const badgeText = chrome.i18n.getMessage("badge_text");
    // We retrieve the action badge to check if the extension is 'ON' or ''
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === badgeText ? "" : badgeText;

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    if (nextState === badgeText) {
      // Insert the CSS file when the user turns the extension on
      await chrome.scripting.insertCSS({
        files: ["dark-mode.css"],
        target: { tabId: tab.id },
      });
    } else if (nextState === "") {
      // Remove the CSS file when the user turns the extension
      await chrome.scripting.removeCSS({
        files: ["dark-mode.css"],
        target: { tabId: tab.id },
      });
    }
  }
});
