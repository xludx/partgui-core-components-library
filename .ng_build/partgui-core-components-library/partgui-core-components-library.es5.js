import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var ExampleComponent = (function () {
    function ExampleComponent() {
    }
    /**
     * @return {?}
     */
    ExampleComponent.prototype.ngOnInit = function () {
    };
    return ExampleComponent;
}());
ExampleComponent.decorators = [
    { type: Component, args: [{
                selector: 'partlib-example',
                template: "\n    <h1>\n      <ng-content></ng-content>\n    </h1>\n  ",
                styles: ["\n    h1 {\n      color: red;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
ExampleComponent.ctorParameters = function () { return []; };
var ExampleModule = (function () {
    function ExampleModule() {
    }
    return ExampleModule;
}());
ExampleModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    ExampleComponent
                ],
                exports: [
                    ExampleComponent // <-- this!
                ]
            },] },
];
/**
 * @nocollapse
 */
ExampleModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ExampleModule, ExampleComponent as ɵa };
//# sourceMappingURL=partgui-core-components-library.es5.js.map
