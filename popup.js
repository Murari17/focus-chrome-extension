document.getElementById("toggleFocus").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: toggleFocusMode
      });
    });
  });
  
  function toggleFocusMode() {
    const selectors = [
      '.adsbygoogle', '.ad', '#ad', '[id*="sponsor"]',
      '.sidebar', '.aside', '[class*="sidebar"]',
      '#comments', '.comments', '[id*="comment"]'
    ];
  
    let focused = document.body.dataset.focused === "true";
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.style.display = focused ? "" : "none";
      });
    });
  
    document.body.dataset.focused = focused ? "false" : "true";
  }
  