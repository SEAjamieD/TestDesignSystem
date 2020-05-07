# TestDesignSystem

## How to use
1. Clone the repository and npm install


`git clone https://github.com/SEAjamieD/TestDesignSystem.git`
 
`cd TestDesignSystem`
 
`npm install`

2. Open up storybook
From the top level directory: `npm run storybook`.  This should bring the local storybook version up in the browser

3. To Manipulate the files
Open a second terminal window.

`cd projects/ngx-chef-design-system`

Open your favorite code editor and write away.

## To Build for npm
1. `cd projects/ngx-chef-design-system`
2. `ng build NgxChefDesignSystem`
3. `npm publish` (currently you need access to my npm account for this)

## To Use in your own project
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


