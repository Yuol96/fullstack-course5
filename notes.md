- Controller is where the view data lives and where the view presentation logic lives, so, yes, it IS the ViewModel.
- filter
  - filter in HTML
    - filter with args
    - chain filter
    - use registeredname (does not change)
  - filter in js
    - define filter factory
    - register
    - use registeredname + "Filter" 
  - built-in filters
    - see https://docs.angularjs.org/guide/filter
  - `{{"hello"|uppercase}}`, `{{"hello"|currency: arg1 : arg2}}` 
- watch
  - dirty checking watch list
  - manually set up `$scope.$watch`  in js
  - automatically watch  (recommended)
    - by using `{{}}` in HTML
    - `ng-model` in HTML
  -  interpolations *always* create another watch.
- digest and apply
  - `$scope.$digest()` 
  - `$scope.$apply(function(){...})` 
- `$timeout`  
- decrease the length of watch list in digest cycle
  - 2-way binding (input tag using `ng-model`)
  - 1-way binding (`{{xxx}}`)
  - 1-time binding (`{{::xxx}}`) 









- `Object.create(parent)` 
- error 
  - `throw new Error(xxx)`
  - `try{xxx} catch(error){xxx = error.message}`
- `.config` is executed before any controller, provider, factory, etc.
- `ng-if`, `ng-show/hide`