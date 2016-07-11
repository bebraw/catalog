'use strict';

var path = require('path');
var loaderUtils = require('loader-utils');

module.exports = function loader() {};
module.exports.pitch = function pitch(remainingRequest) {
  var resource = loaderUtils.stringifyRequest(this, '!!' + remainingRequest);
  this.cacheable && this.cacheable();

  var output = '\n    var React = require(\'react\');\n    var PageRenderer = require(\'' + path.resolve(__dirname, 'components/Page/PageRenderer') + '\');\n    if (PageRenderer.__esModule) {\n      PageRenderer = PageRenderer.default;\n    }\n    module.exports = React.createClass({\n      displayName: \'WrappedPageRenderer\',\n      getInitialState: function() {\n        return {content: require(' + resource + ')};\n      },\n      componentWillMount: function() {\n        var component = this;\n        if (module.hot) {\n          module.hot.accept(' + resource + ', function() {\n            component.setState({\n              content: require(' + resource + ')\n            })\n          })\n        }\n      },\n      render: function() {\n        return React.createElement(PageRenderer, {content: this.state.content});\n      }\n    });\n  ';

  return output;
};