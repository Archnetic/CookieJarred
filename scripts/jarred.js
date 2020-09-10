function lidTheJar(tabs) {
  browser.tabs.executeScript({file: "/scripts/content-script.js", allFrames: true})
}

function onError(error) {
  console.log(`Error: ${error}`)
}

function jarCookie(){
    let querying = browser.tabs.query({currentWindow: true, active: true})
    querying.then(lidTheJar, onError)
    cookieLabel()
}

function cookieLabel(){

}

browser.webNavigation.onCompleted.addListener(jarCookie)