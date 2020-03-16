var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'widget_cookiecutter_lab',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'widget_cookiecutter_lab',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

