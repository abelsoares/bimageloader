bimageloader
============

A JS script for image pre-loading.

This JS lets you preload all images contained in a specific HTML element, using Jquery selectors.
For instance, to preload all images contained inside the body tag you can do:

```javascript
$('body').bimageloader();
```
You can also check when all images are pre-loaded, so you can do things like only showing images when all are pre-loaded:
```javascript
$('#bslider').bimageloader({
  onEndPreloadAll: function() {
    // Now that all images are loaded, do something!
    });
  }
});
```
