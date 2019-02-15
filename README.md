# ngx-formly-designer

A formly form to design [Ngx Formly](https://github.com/ngx-formly/ngx-formly) forms.

The current version is basic and intended for use with bootstrap.  Feel welcome to issue feature requests or submit PRs.

## Quick Start

Follow these steps to get started with Ngx Formly Designer. Also check out the [demo](https://franzeal.github.io/ngx-formly-designer) for an example.

#### 1. Install the ngx-formly-designer package:
```bash
  npm install ngx-formly-designer --save
```

#### 2. Define the designer config:

```typescript
import {DesignerConfigOption} from 'ngx-formly-designer';

export const designerConfig: DesignerConfigOption = {
  types: [
    {
      name: 'checkbox',
      fields: [
        {
          key: 'templateOptions.label',
          type: 'input',
          templateOptions: {
            label: 'label'
          }
        },
        {
          key: 'defaultValue',
          type: 'checkbox',
          templateOptions: {
            label: 'default value'
          }
        }
      ]
    },
    ...
  ],
  wrappers: [
    {
      name: 'expander',
      fields: [
        {
          key: 'templateOptions.label',
          type: 'input',
          templateOptions: {
            label: 'label'
          }
        },
        {
          key: 'templateOptions.expanded',
          type: 'checkbox',
          templateOptions: {
            label: 'expanded'
          },
          defaultValue: true
        }
      ]
    },
    ...
  ]
};
```

#### 3. Import the `FormlyDesignerModule`:

```typescript
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {designerConfig} from './designer-config';

@NgModule({
  imports: [
    ...,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    FormlyDesignerModule.forRoot(designerConfig)
  ],
})
export class AppModule {}
```

#### 4. Use the formly-designer within your component:

```typescript
import {Component} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app',
  template: `
    <formly-designer [(fields)]="fields">
    </formly-designer>
  `,
})
export class AppComponent {
    fields: FormlyFieldConfig[] = [];
}
```
