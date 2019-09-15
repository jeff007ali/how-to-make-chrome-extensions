//const wolfs = {}
//we need window object to access this variable in popup page, So we make this const variable as window variable
window.wolfs = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    window.wolfs[request.url] = request.count
})

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({url: 'popup.html'})
})