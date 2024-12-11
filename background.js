chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "CODE_COPIED") {
    console.log("Code copied:", message.data);
    console.log("Detected Language:", message.language);
    chrome.storage.local.get(["copyLogs"], (result) => {
      const logs = result.copyLogs || [];
      logs.push({
        content: message.data,
        language: message.language,
        url: sender.url,
        timestamp: new Date().toISOString(),
      });
      chrome.storage.local.set({ copyLogs: logs });
    });
  }
});
