var dot = require('dot');
var fs = require('fs');
var loaderUtils = require('loader-utils');

module.exports = function(content) {
  if (this.cacheable) {
    this.cacheable();
  }

  var options = Object.assign(
    {},
    {
      strip: true
    },
    loaderUtils.getOptions(this)
  );

  dot.templateSettings.selfcontained = true;
  dot.templateSettings.strip = options.strip;

  var content = fs.readFileSync(this.resourcePath);
  return "module.exports = " + dot.template(content);
};
