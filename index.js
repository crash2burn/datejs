/**
 * @overview NPM Module index: include all the core modules, I18n files will be loaded on the fly.
 * @author Gregory Wild-Smith <gregory@wild-smith.com>
 */
var DateJS = require("./src/core/datejs.js");

require("./src/core/i18n.js")(DateJS);
require("./src/core/core.js")(DateJS);
require("./src/core/format_parser.js")(DateJS);
require("./src/core/parser.js")(DateJS);
require("./src/core/sugarpak.js")(DateJS);
require("./src/core/extras.js")(DateJS);
require("./src/core/time.js")(DateJS);


/*
 * Notice that there is no model.export or exports. This is not required as it modifies the Date object and it's prototypes.
 */

 //var DateJS = require("./index")

 module.exports = DateJS;