/*
This page will run using a delayed time for cookie popups with a slight delay
to remove the popup from the page that use a delayed consent form. Websites that
ask for cookie consent as soon as the site is completed will be removed first.
*/
//test site for delayed cookie removeal https://adamsavage.com
//test site for standard onCompleted cookie removeal https://filewave.com

var idarray = ['.ccc-banner', '.cc-banner', '.ccpaCookieBanner', '.sc-fzqARJ gPfttN']
setTimeout(function(){removeConsent()}, 2000)



function removeConsent(){
    for(i = 0; i<idarray.length; i++){
        //gets stuck on i @ 1
        console.log(idarray[i])
        document.querySelector(idarray[i]).remove()
    }
}