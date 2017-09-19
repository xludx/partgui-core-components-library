import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
export class ExampleModule {
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
function ExampleModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ExampleModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ExampleModule.ctorParameters;
}
//# sourceMappingURL=example.module.js.map