"use strict";

const path = require("path");
const env = process.env.NODE_ENV || "local";

/**  requires  **/
/**  requires end  **/

const configFile = require(path.join(__dirname, `${env}.json`));
configFile.env = env;

/**  plugins  **/
/**  plugins end  **/

module.exports = configFile;
module.exports.asFunction = () => configFile;
