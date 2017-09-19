import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class ExampleComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ExampleComponent.decorators = [
    { type: Component, args: [{
                selector: 'partlib-example',
                template: `
    <h1>
      <ng-content></ng-content>
    </h1>
  `,
                styles: [`
    h1 {
      color: red;
    }
  `]
            },] },
];
/**
 * @nocollapse
 */
ExampleComponent.ctorParameters = () => [];

class ExampleModule {
}
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
ExampleModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ExampleModule, ExampleComponent as ɵa };
//# sourceMappingURL=partgui-core-components-library.js.map
