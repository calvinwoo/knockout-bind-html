# knockout-bind-html
A custom binding for KnockoutJS that will dynamically present the specified HTML, like the [standard binding](http://knockoutjs.com/documentation/html-binding.html), but will also process any new bindings that are included.

### Installation
```bower install knockout-bind-html```

Include via a ```<script>``` tag or an AMD style loader.

### Usage
```html
<div data-bind="bindHtml: clickable"><div>
```

```javascript
var viewModel = {
    this.clickable = ko.observable('Click Here: <a href="#" data-bind="click: action">Execute!</a>');
    this.action = function() {
        console.log('Action executed');
    };
};
```
