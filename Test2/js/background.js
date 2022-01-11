let color = '#9c82ec';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

let textColor = '#f99';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ textColor });
  console.log('Default text color set to %cpink', `color: ${textColor}`);
});