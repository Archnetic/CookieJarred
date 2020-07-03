/*function jarCookie(){
    var cookie = document.getElementsByClassName("maincontent")
    if(typeof(cookie) != "undefined" && cookie != null){
        console.log("finally")
        
    }
    console.log(cookie)
    cookie.remove();

}*/


/*function jarCookie(tabs){
    for (let tab of tabs) {
        // tab.url requires the `tabs` permission
        console.log(tab.url);
      }
}

var getCurrTab = browser.tabs.query({active: true, currentWindow: true});
browser.webNavigation.onCompleted.addListener(jarCookie);*/

function logTabs(tabs) {
  // tabs[0].url requires the `tabs` permission
  console.log(tabs[0].url);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function jarCookie(){
    let querying = browser.tabs.query({currentWindow: true, active: true});
    querying.then(logTabs, onError);
    
}
browser.webNavigation.onCompleted.addListener(jarCookie);