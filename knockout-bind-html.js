(function (root, factory) {
  if(typeof define === 'function' && define.amd) {
    define(['knockout'], factory);
  } else {
    factory(root.ko);
  }
}(this, function(ko) {
  ko.bindingHandlers.bindHtml = {
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      ko.unwrap(valueAccessor());

      var children = element.children;
      for (var i = 0; i < children.length; i++) {
        ko.applyBindings(bindingContext.$data, children[i]);
      }
    }
  };
}));
