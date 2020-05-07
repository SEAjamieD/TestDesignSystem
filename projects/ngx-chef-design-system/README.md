# NgxChefDesignSystem

## To use in your own project
In the root of your project, run `npm i ngx-chef-design-system`
In your base app.module.ts file, 
```javascript
import { NgxChefDesignSystemModule } from 'ngx-chef-design-system';
```
and add `NgxChefDesignSystemModule` to your imports

Example usage in template:
```html
<ngx-chef-button 
  [buttonText]="saving ? 'Saving...' : 'Save Changes'"
  [loading]="saving ? true : false" 
  [disabled]="isDisabled"
  (click)="handleClick()">
</ngx-chef-button>
```



# To Develop on this package

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Code scaffolding

Run `ng generate component component-name --project NgxChefDesignSystem` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project NgxChefDesignSystem`.
> Note: Don't forget to add `--project NgxChefDesignSystem` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build NgxChefDesignSystem` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build NgxChefDesignSystem`, go to the dist folder `cd dist/ngx-chef-design-system` and run `npm publish`.

## Running unit tests

Run `ng test NgxChefDesignSystem` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
