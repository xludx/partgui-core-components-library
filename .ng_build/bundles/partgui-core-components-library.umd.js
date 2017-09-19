(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['partgui-core-components-library'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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
    { type: core.Component, args: [{
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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

exports.ExampleModule = ExampleModule;
exports.ɵa = ExampleComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=partgui-core-components-library.umd.js.map
