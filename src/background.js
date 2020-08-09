/**
 * backgorund file contains listeners for browser events that are important to the extension
 * It lies dormant until an event is fired then performs the instructed logic. 
 * An effective background script is only loaded when it is needed and unloaded when it goes idle.
 * @author Maya Scott-Lourenco <maya.scottlourenco@gmail.com>
 **/

//callback functions for Listener event

var requestFilter = {
    urls: [ "*://www.facebook.com/*" ]
}, 

extraInfoSpec = ['blocking'],

callback = function(details){
    //var blockResponse = chrome.webRequest.BlockingResponse;
    return {redirectUrl: "https://www.youtube.com/watch?v=r9lpLm7jwQY"};
};

chrome.webRequest.onBeforeRequest.addListener(
    callback,            
    requestFilter,
    extraInfoSpec
);

