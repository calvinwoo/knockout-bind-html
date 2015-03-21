(function (root, factory) {
  if(typeof define === 'function' && define.amd) {
    // Support AMD modules
    define(['knockout'], factory);
  } else {
    factory(root.ko);
  }
}(this, function(ko) {
  ko.bindingHandlers.bindHtml.preprocess = function(value, name, addBinding) {
    addBinding('html', value);
    return value;
  };

  ko.bindingHandlers.bindHtml = {
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      ko.unwrap(valueAccessor());
      ko.applyBindingsToDescendants(bindingContext.$data, element);
    }
  };
}));
