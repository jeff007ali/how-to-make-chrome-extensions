document.addEventListener('DOMContentLoaded', function () {
    
    const bg = chrome.extension.getBackgroundPage()
    Object.keys(bg.wolfs).forEach(function (url) {
        const div = document.createElement('div')
        div.textContent = `${url}: ${bg.wolfs[url]}`
        document.body.appendChild(div)
    });    
    //we use url as fucntion parameter because url is key ok window.wolfs dict
    
    //Old stuff
    // document.querySelector('button').addEventListener('click', onclick, false)
    
    // function onclick () {
    //     chrome.tabs.query({currentWindow: true, active: true},
    //         function (tabs) {
    //             chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
    //         })
    // }

    // function setCount (res) {
    //     const div = document.createElement('div')
    //     div.textContent = `${res.count} wolfs`
    //     document.body.appendChild(div)
    // }
}, false)