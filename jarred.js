function lidTheJar(tabs) {
  console.log(tabs[0].url);
  browser.tabs.executeScript({file: "content-script.js", allFrames: true})
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function jarCookie(){
    let querying = browser.tabs.query({currentWindow: true, active: true});
    querying.then(lidTheJar, onError);
    
}

browser.webNavigation.onCompleted.addListener(jarCookie);