/**
 * backgorund file contains listeners for browser events that are important to the extension
 * It lies dormant until an event is fired then performs the instructed logic. 
 * An effective background script is only loaded when it is needed and unloaded when it goes idle.
 **/
var networkFilters = {
    urls: [
        "*://www.facebook.com/*"
    ]
}
chrome.webRequest.onBeforeRequest.addListener(
    function(details){

    },            // function
    filter,               //  object
    ["blocking"]         //  optional array of strings
);

