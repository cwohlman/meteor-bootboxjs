// Meteor specific addons to the bootbox.js object
bootbox.templateDialog = function(options) {

  var view = Blaze.renderWithData(options.template, options.data);

  options.message = Blaze.toHTML(view);

  var result = bootbox.dialog(options);
  result.on('done.bootbox.modal', function(e, data) {
    var callback = options.callback;
    if (_.isFunction(callback)) callback(data);
    Blaze.remove(view);
  });
  return result;
};
