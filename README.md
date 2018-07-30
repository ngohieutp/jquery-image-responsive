# jquery-image-responsive ![CircleCI Status](https://circleci.com/gh/ngohieutp/jquery-image-responsive.png?circle-token=f4ade535a231b891706050b207bb85ef1fab1c88)
Using javascript to detect window size then choose the appropriate image

It is very small simple libary, so if there is any improvement, please make it better.

## Demo
You can find demo [here](https://ngohieutp.github.io/jquery-image-responsive/) 

## Requirements
You will need JQuery to select images that need to responsive

## How to use

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

## Configuration
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

```lgSize, mdSize, smSize, xsSize``` Define the sizes, default as bootstrap 3

```lgName, mdName, smName, xsName``` Define the attribute name.

```applyAbove``` Search for nearest above size if current screen size is not supported.

```applyBelow``` Search for nearest below size if current screen size is not supported.

```applyDefault``` Use default image if it does not find any approciate screen size.


## Additional
You should style image to make it responsive for every size of screen
```max-width: 100%```