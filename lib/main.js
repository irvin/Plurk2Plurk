/* ***** BEGIN LICENSE BLOCK *****
 *
 * Firefox Plurk2Plurk extension
 * irvinfly@gmail.com
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