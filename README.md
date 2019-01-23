# lightsOff

> A lightweight JQuery plugin (6kb minified) to show nice guided introductions of various elements on your page.

 - [Demo](http://swapkats.github.io/lightsOff.js/)
         
## Setup

lightOff is very simple to set up, follow these three simple steps.

1) Include JQuery, lightsoff.js and lightsoff.css in your page

```html
<link href="src/lightsOff.css">	
<script src="js/jquery.js"></script>
<script src="src/lightsOff.min.js"></script>
````

2) Add `data-intro` and `data-intro-position` to your HTML elements.

```html
<a href="example.com" data-intro="Click here to visit example.com" data-intro-position="top">example.com</a>
```

3) Call this function after your page loads.

```javascript
$.lightsOn();
```

## API

### data-intro

Defines the text to be shown for lighted element

### data-intro-position [string]

Defines the position of the squiggle relative to element.

**values:** `top`,`left`,`right`,`bottom`

### font [string]

Defines the font to be used for squiggle screen.

### closeText [string]

Defines the text message to go back.

### lightsOn [function]

Use this function to turn lights back on.

```javascript
$.lightsOff();
```

## Author
**Swapnil Singh**

- [Twitter](https://twitter.com/biryani_hunter)
- [Github](https://github.com/jsmonk)
- [Personal page](http://amplifiedmonkeys.com/)  

## License
> Copyright (C) 2014 Swapnil Singh (thisisnotaid@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions 
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
IN THE SOFTWARE.
