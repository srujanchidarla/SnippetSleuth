const detectLanguage = (codeSnippet) => {
  // Example heuristic: Basic language detection
  if (codeSnippet.includes("def ") || codeSnippet.includes("import")) {
    return "Python";
  } else if (
    codeSnippet.includes("function") ||
    codeSnippet.includes("console.log")
  ) {
    return "JavaScript";
  } else if (codeSnippet.includes("<html>") || codeSnippet.includes("<body>")) {
    return "HTML";
  } else {
    return "Unknown";
  }
};

document.addEventListener("copy", () => {
  const selection = window.getSelection().toString();
  if (selection) {
    const language = detectLanguage(selection);
    chrome.runtime.sendMessage({
      type: "CODE_COPIED",
      data: selection,
      language,
    });
  }
});
