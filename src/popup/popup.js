chrome.tabs.query({}, (tabs) => {
  document.getElementById("tabCount").textContent = tabs.length;
});
