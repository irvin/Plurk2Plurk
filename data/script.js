/* ***** BEGIN LICENSE BLOCK *****
 *
 * Firefox Plurk2Plurk extension v0.5
 *
 * This add-on is licensed under Mozilla Public License Version 1.1
 * You may obtain a copy of the License at http://www.mozilla.org/MPL/
 *
 * ***** END LICENSE BLOCK ***** */

$('iframe').each(function(i){
    var fbEyeFrame = $(this);
    var fbUrl = decodeURIComponent(fbEyeFrame.attr('src'));
    var urltest = /^https?:\/\/www\.facebook\.com\/plugins\/like\.php\?.*$/;
    
    // Check for facebook Like button
    if (urltest.test(fbUrl)){
    
        fbUrl = getUrlPara(fbUrl, 'href');
        
        var shareContent = fbUrl + " (" + $(document).attr('title') + ")";
        var plurkBtn = $("<div style='display: none; position: absolute; top: 0px; left: 0px;' class='p2plurk_div'><a title='Share to Plurk' href='#' class='p2plurk' style='float: left;'><img alt='' src='http://statics.plurk.com/23d30a60b81915a637d1c3d2cd966a59.png ' width='65' height='20' border='0' /></a></div>")
            .css('left', fbEyeFrame.offset().left).css('top', fbEyeFrame.offset().top + 22)
            .click(function() {
                window.open("http://www.plurk.com/?qualifier=shares&status=" + encodeURIComponent(shareContent));
            })
            .hover(
                function(){ $('body').data('pHoverStat', true); },
                function(){
                    $('body').data('pHoverStat', false);
                    setTimeout(hideBtn, 500);
                }
            )
            .appendTo('body');        // Append Plurk button to body
            
        fbEyeFrame.hover(
            function() {
                $('body').data('pHoverStat', true);
                plurkBtn.show('fast');
            },
            function() {
                $('body').data('pHoverStat', false);
                setTimeout(hideBtn, 500);
            }
        );
    };
});

// Hide Plurk button on timeout after Timeout
function hideBtn() {
    if ($('body').data('pHoverStat') == false){
        $('.p2plurk_div').hide('fast'); 
    };
};

// Get Url parameter
function getUrlPara(str, name){
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( str );
  if( results == null )
    return "";
  else
    return results[1];
}