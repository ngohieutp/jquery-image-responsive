# jquery-image-responsive
Using javascript to detect window size then choose the appropriate image

# Requirements
You will need JQuery to select images that need to responsive

# How to use

Download the library and put it into you web
```<script src="image-responsive.js"></script>```

Declare your images
```
<img data-src-lg="images/banner-lg.png" 
    data-src-md="images/banner-md.png" 
    data-src-sm="images/banner-sm.png" 
    data-src-xs="images/banner-xs.png" 
    data-src="images/banner.png" 
    class="responsive" />
```

Choose the images to responsive
```
$(function () {
    $("img.responsive").responsive();
});
```

# Configuration
You can define the size

```
$("img.responsive").responsive({
    lgSize: 1200,
    mdSize: 992,
    smSize: 768,
    xsSize: 576,
    lgName: "data-src-lg",
    mdName: "data-src-md",
    smName: "data-src-sm",
    xsName: "data-src-xs",
    defaultName: "data-src",
    applyAbove: true,
    applyBelow: false,
    applyDefault: true
});
```
