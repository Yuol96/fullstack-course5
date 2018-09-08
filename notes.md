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





- To manually create an asynchronous environment, you must call `$q.defer()` in the $q service. It returns an object that represents the asynchronous environment, including a promise object.
- Calling the reject() method doesn't cancel the promise. It marks it as an unsuccessful completion.

https://github.com/jhu-ep-coursera/restaurant-menu-server

- `$http` 
- `.constant` method



# directives

- Factory function — returns DDO (directive definition object)
  - only execute once! used for some initialization work

`<this-Course-Is-Awesome>weeeeeee!</this-Course-Is-Awesome>`

`<this-course-is-awesome>weeeeeeee!</this-course-is-awesome>`

- If the DDO does not define the 'scope' property, the scope used inside of the directive will be the same scope object that belongs to the parent controller of this directive because of **<u>prototypal inheritance</u>**.
- It's a best practice to have the directive avoid changing the data.
- `func.call(obj)` 强制把func的context设置成obj
- The link function is called with preset arguments, so you can't directly inject anything into the link function.