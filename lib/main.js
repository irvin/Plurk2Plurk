/* ***** BEGIN LICENSE BLOCK *****
 *
 * Plurk2Plurk  Dec. 2011
 * Irvin  irvinfly@gmail.com
 *
 * Plurk2Plurk
 *
 * This add-on is licensed under Mozilla Public License Version 1.1
 * You may obtain a copy of the License at http://www.mozilla.org/MPL/
 *
 * ***** END LICENSE BLOCK ***** */

exports.main = function() {
    var data = require("self").data;
    var tabs = require("tabs");
    
    // Listen for tab content loads.
    tabs.on('ready', function(tab) {
        tab.attach({
            contentScriptFile: [data.url("jquery-1.7.1.min.js"), data.url("script.js")]
//            contentScriptFile: [data.url("jquery-1.7.1.min.js"), data.url("script.js")],
//            onMessage: function(message) {
//              console.log(message);
//              worker.port.emit("titleEvent", message + 'test');              
//            }
        });
    });
};