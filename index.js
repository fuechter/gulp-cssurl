var evs    = require('event-stream');
var g_util = require('gulp-util');
var URLRewriter = require("cssurl").URLRewriter;

module.exports = function (opt) {

    function processFile(file) {

        if (file.isStream()) {
            this.emit('error', new g_util.PluginError('gulp-url', 'Sorry about this, but streams are not supported yet.'));
        }

        try {

            if (file.isBuffer()) {
              var rewriter = new URLRewriter(function(url) {
                return url + "?v=" + (opt || Date.now());
              });

              file.contents = new Buffer(rewriter.rewrite(String(file.contents)));
            }

        } catch (e) {

            console.error(e);
            this.emit('error', new g_util.PluginError({
                plugin: 'gulp-cssurl',
                message: e
            }));

        }

        this.emit('data', file);
    }

    return evs.through(processFile);
};
