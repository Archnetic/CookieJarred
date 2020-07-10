/*
This page will run using a delayed time for cookie popups with a slight delay
to remove the popup from the page that use a delayed consent form. Websites that
ask for cookie consent as soon as the site is completed will be removed first.
*/
//test site for delayed cookie removeal https://adamsavage.com
//test site for standard onCompleted cookie removeal https://filewave.com

if(document.querySelector('.cc-banner') == null){
    setTimeout(function() { removeConsent(); }, 0500)
}
else{
    removeConsent()
}

function removeConsent(){
    let array = ['.cc-banner']
    document.querySelector(array).remove()
}