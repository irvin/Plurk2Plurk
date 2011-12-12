/* ***** BEGIN LICENSE BLOCK *****
 *
 * Plurk2Plurk
 *
 * This add-on is licensed under Mozilla Public License Version 1.1
 * You may obtain a copy of the License at http://www.mozilla.org/MPL/
 *
 * ***** END LICENSE BLOCK ***** */

console.log("Plurk2Plurk: Script Active");

$('iframe').each(function(i){
    var fbEyeFrame = $(this);
    var fbUrl = decodeURIComponent(fbEyeFrame.attr('src'));
    var urltest = /^https?:\/\/www\.facebook\.com\/plugins\/like\.php\?.*$/;
    //console.log(fbUrl + ' ' + urltest.test(fbUrl));
    
    if (urltest.test(fbUrl)){    
        fbUrl = getUrlPara(fbUrl, 'href');
        //console.log('iframe[' + i + '] #' + fbEyeFrame.attr('id') + ' url: ' + fbUrl + ' html: ' + urlTitle);        

        var shareContent = fbUrl + " (" + $(document).attr('title') + ")";
        var plurkBtn = $("<img alt='' src='http://statics.plurk.com/23d30a60b81915a637d1c3d2cd966a59.png ' width='65' height='20' border='0' /></a>").click(function() {
            window.open("http://www.plurk.com/?qualifier=shares&status=" + encodeURIComponent(shareContent));
        });
        
        plurkBtn.insertBefore(document);
    };

});


function getUrlPara(str, name)
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( str );
  if( results == null )
    return "";
  else
    return results[1];
}