// Regex-pattern to check URLs against.
// It matches URLs like: http[s]://[...]stackoverflow.com[...]


//console.log(1234141)
// A function to use as callback
function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
}

// When the browser-action button is clicked...
// chrome.webNavigation.onCompleted.addListener(function (tab) {
//     // ...check the URL of the active tab against our pattern and...
//     //console.log(tab);
//     //console.log('wet')
//     // if (urlRegex.test(tab.url)) {
//         // ...if it matches, send a message specifying a callback too
//         chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
//     // }
// });