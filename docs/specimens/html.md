> The HTML specimen allows the documentation of HTML as well as JavaScript and CSS based views.

Per default, a code toggle button allows easy access to the source without having to write a separate code specimen. It is also possible to access external files that are defined in the catalog configuration. This makes it possible to add quite complex structures like a form with minimal additional specification in the markdown file. 

### Props

- `noSource: boolean` Removes the source code toggle button
- `device: string` either `select` or a device name like 'small'
- `frame: boolean` Wraps output in an `<iframe>` (to prevent style collisions and allow for viewport-relative styling (e.g. using `vw` or `position: fixed`))
- `light: boolean` a light checkered background (default)
- `dark: boolean` a dark checkered background
- `plain: boolean` a transparent background without any padding
- `span: number[1–6]` width of the specimen


### Basic example

This is example uses the configured stylesheet.

```html
<div class="button">
    Hello world
</div>
```

````code
```html
<div class="button">
    Hello world
</div>
```
````

### Framed example

The `frame` prop dynamically wraps the content in an `<iframe>`. This is useful to encapsulate styles and for viewport-oriented layout (such as using `vw` or `position: fixed`)

```html
frame: true
---
<div style='width:100vw;background:#262626;color:#FFF'>
    <p>Hello</p>
    <p>World</p>
</div>
```

````code
---
```html
frame: true
---
<div style='width:100vw;background:#262626;color:#FFF'>
    <p>Hello</p>
    <p>World</p>
</div>
```
````



### Responsive mode

To document the responsive behavior of a component, catalog offers two ways. The first one is to allow selecting different devices and the second one renders only the dimensions of the specified device.

The markup looks like this `device: select` or `device: {deviceName}`

Out of the box, a minimal set of devices is defined (small, medium, large, xlarge). 
Assuming each project has different breakpoints, it is possible to expand the list of devices in the global catalog configuration:

```code
theme: {
  devices: [
    {name: 'watch-38mm', width: 272, height: 340},
    {name: 'watch-42mm', width: 312, height: 390}
  ],
},
```

The specified devices will then be appended to the list in the `device: select` mode, as well as being directly adressable. In this case `device: watch-38mm` could be used to show the applied styles for this device only.


```html
device: select
---
<div>
<style>
.box {
  background: black;
  width: 100vw;
  height: 100%;
  padding:25px; 
  box-sizing: border-box;
  color: white;
  text-align: center;
  font-family: 'Helvetica';
  transition: .7s background;
}
@media (min-width: 360px) {
  .box {
    background: #2BF1D3;
    color: #482AC6;
    text-align: left;
  }
}
@media (min-width: 1024px) {
  .box {
    background: #CED3DF;
    color: #482AC6;
  }
}
@media (min-width: 1440px) {
  .box {
    background: tomato;
    color: purple;
  }
}
@media (min-width: 1920px) {
  .box {
    background: purple;
    color: #2BF1D3;
    font-family: 'Georgia';
  }
}
</style>
<div class='box'>
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
</div>
```

Here is an example showing only the `device:large`. Note that when the device width exceeds the container width, the content gets scaled to fit. 


```html
device: large
---
<div>
<style>
.box {
  background: black;
  width: 100vw;
  height: 100%;
  padding:25px; 
  box-sizing: border-box;
  color: white;
  text-align: center;
  font-family: 'Helvetica';
  transition: .7s background;
}
@media (min-width: 360px) {
  .box {
    background: #2BF1D3;
    color: #482AC6;
    text-align: left;
  }
}
@media (min-width: 1024px) {
  .box {
    background: #CED3DF;
    color: #482AC6;
  }
}
@media (min-width: 1440px) {
  .box {
    background: tomato;
    color: purple;
  }
}
@media (min-width: 1920px) {
  .box {
    background: purple;
    color: #2BF1D3;
    font-family: 'Georgia';
  }
}
</style>
<div class='box'>
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
</div>
```






### Visual examples

The different background colors:

```html|span-3,no-source
html|span-3,no-source
```

```html|span-3,no-source,plain,light
html|span-3,no-source,plain,light
```

```html|span-3,no-source,dark
<span style="color:white">html|span-3,no-source,dark</span>
```

```html|span-3,no-source,plain,dark
<span style="color:white">html|span-3,no-source,plain,dark</span>
```

And without added styling:

```html|span-3,no-source,plain
html|span-3,no-source,plain
```



````code|collapsed
```html|span-3,no-source
html|span-3,no-source
```

```html|span-3,no-source,plain,light
html|span-3,no-source,plain,light
```

```html|span-3,no-source,dark
<span style="color:white">html|span-3,no-source,dark</span>
```

```html|span-3,no-source,plain,dark
<span style="color:white">html|span-3,no-source,plain,dark</span>
```

```html|span-3,no-source,plain
html|span-3,no-source,plain
```
````
