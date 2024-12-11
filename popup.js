document.addEventListener("DOMContentLoaded", () => {
  const logList = document.getElementById("log-list");
  chrome.storage.local.get(["copyLogs"], (result) => {
    const logs = result.copyLogs || [];
    logs.forEach((log) => {
      const listItem = document.createElement("li");
      listItem.textContent = `[${log.timestamp}] Language: ${log.language} | Copied from ${log.url}: ${log.content}`;
      logList.appendChild(listItem);
    });
  });
});
