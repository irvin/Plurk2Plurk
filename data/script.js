/* ***** BEGIN LICENSE BLOCK *****
 *
 * Plurk2Plurk
 *
 * This add-on is licensed under Mozilla Public License Version 1.1
 * You may obtain a copy of the License at http://www.mozilla.org/MPL/
 *
 * ***** END LICENSE BLOCK ***** */

console.log("Plurk2Plurk: Script Active");

var fbDetective = $('iframe');
fbDetective.css('border','2px solid yellow');

var fbUrl = fbDetective.prop('src');
if (fbUrl){
    var fbUrl = decodeURIComponent(fbUrl);
    console.log(fbUrl);
        
    var urltest = /^https?:\/\/www\.facebook\.com\/plugins\/like\.php\?.*$/;
    if (urltest.test(fbUrl)){
        console.log('Found FB iframe!');
        fbDetective.css('background-color','red');
        
        urltest = /href=([^&]*)(\\s|&|$)/;
        fbUrl = urltest.exec(fbUrl);
        console.log(fbUrl);
    }
}


//http://www.facebook.com/plugins/like.php

//var fbDetective = if.contents().find('html#facebook');
//if (fbDetective.text('background-color','red')) {
//    fbDetective.css();
//}

//$("#mainiframe").contents().find("someID").html()


//fbDetective.css('background-color','red').parent().css('background-color','green');

//var fbDetective = $('html#facebook').parentsUntil('iframe');
//if (fbDetective.text()) {
//    console.log(fbDetective.html());
//    fbDetective.css('background-color','red');
//};
/*
if ( fbDetective.text() && !fbDetective.hasClass('P2PlurkInjected') ) {
    fbDetective.addClass('P2PlurkInjected').css('background-color','red');
    var fbUri = decodeURI(fbDetective.attr('src'));
    console.log(fbUri);   
};
*/

//var strTitle = $('h1').text();
//var btnViewInItunes = $("div#left-stack a.view-in-itunes:first, div#left-stack a.view-in-appstore:first");
//if (btnViewInItunes.height() > 30) btnViewInItunes.height(23);  //Fix Mac App Store page button position
//
//var button = $("<div>Find At AppShopper</div>")
//    .css({
//        'font-family': '"Myriad Pro", Arial, Helvetica, sans-serif',
//        'font-size': '11px',
//        'color': '#FFF',
//        'margin': '-5px 0 10px',
//        'padding': '1px 10px',
//        'background': '-moz-linear-gradient( top, #57B8EE 0%, #2681C8)',
//        'border-radius': '20px',
//        'text-shadow': '0px -1px 1px rgba(0, 0, 0, 0.25)',
//        'cursor': 'pointer',
//        'box-shadow': '0 1px 1px rgba(0, 0, 0, 0.5)',
//        'width': '-moz-fit-content'
//    })
//    .insertAfter(btnViewInItunes)
//    .click(function(){
//        window.open("http://appshopper.com/search/?search=" + strTitle)    
//    });
    

//<a title=”Share to Plurk” href=”javascript:
//
//void(
//    window
//        .open(‘http://www.plurk.com/?qualifier=shares&status=‘
//            .concat(
//                encodeURIComponent(window.location.href)
//            )
//            .concat(‘ ‘)
//            .concat(‘(‘)
//            .concat(
//                encodeURIComponent(document.title)
//            )
//            .concat(‘)‘)
//        )
//    );
//
//”>
//<img title=”share” src=”http://statics.plurk.com/bda225d234426cccca300c551f60438e.png” width=”97” height=”20” align=”absmiddle” border=”0” />
//</a>