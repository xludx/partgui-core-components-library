import { Component } from '@angular/core';
export class ExampleComponent {
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
function ExampleComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ExampleComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ExampleComponent.ctorParameters;
}
//# sourceMappingURL=example.component.js.map