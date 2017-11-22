# checkboxWithCallback

Toggle all checkboxes.
Onchange to set checkbox and on maximum length of checkboxes to set the all checkbox.

In every situation then all checkboxes are checked 'true' you can call an optional callback method.

JQuery is required.

## Example

```code

checkboxWithCallback(clickAllElement, changeElements, callback);

With testparameter

checkboxWithCallback("input[name='all']","input[name='test']");

checkboxWithCallback("input[name='all']","input[name='test']",function test(){

    alert("Hi");

    }

);

checkboxWithCallback("#allElement",".element");

checkboxWithCallback("#allElement",".element",function test(){

    alert("Hi");

    }
    
);

``` 