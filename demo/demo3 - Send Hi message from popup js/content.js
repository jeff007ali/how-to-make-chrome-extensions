//alert("aavo")
chrome.runtime.onMessage.addListener(function (request) {
    alert(request)
})