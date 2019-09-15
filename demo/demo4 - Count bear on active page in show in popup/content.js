//alert("aavo")
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    //alert(request)
    const re = new RegExp('wolf', 'gi')
    const matches = document.documentElement.innerHTML.match(re)
    sendResponse({count : matches.length})
})