document.addEventListener("DOMContentLoaded", function() {
  chrome.windows.getCurrent(function(win) {
    chrome.tabs.query({
      windowId: win.id,
      active: true
    }, function(tabs) {
      var tab = tabs[0];

      if (tab) {
        var div = document.createElement('DIV');
        div.innerHTML = tab.url;

        document.body.appendChild(div);
      }
    });
  });
});
