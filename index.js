var dot = require('dot');
var fs = require('fs');

module.exports = function(content) {
  if (this.cacheable) {
    this.cacheable();
  }
  
  dot.templateSettings.selfcontained = true;
  dot.templateSettings.strip = false;

  var content = fs.readFileSync(this.resourcePath);
  return "module.exports = " + dot.template(content);
};
