/* ***** BEGIN LICENSE BLOCK *****
 *
 * Firefox Plurk2Plurk extension  Dec. 2011
 * Irvin  irvinfly@gmail.com
 *
 * This Add-on will adding 'Share to Plurk' button after every fb Like buttons.
 * Plurk is another SNS featuring the 'river style' timeline.
 *
 * This add-on is licensed under Mozilla Public License Version 1.1
 * You may obtain a copy of the License at http://www.mozilla.org/MPL/
 *
 * ***** END LICENSE BLOCK ***** */

exports.main = function() {
    var data = require("self").data;
    var tabs = require("tabs");
    
    tabs.on('ready', function(tab) {
        tab.attach({
            contentScriptFile: [data.url("jquery-1.7.1.min.js"), data.url("script.js")]
        });
    });
};