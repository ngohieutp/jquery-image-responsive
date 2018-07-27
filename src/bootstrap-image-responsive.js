(function ($) {

    $.fn.responsive = function (options) {
        var self = this;

        //Define default settings for screen sizes
        var settings = $.extend({
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
        }, options);

        //Screen sizes
        var sizes = [{
            order: 0,
            size: settings.lgSize,
            name: settings.lgName
        }, {
            order: 1,
            size: settings.mdSize,
            name: settings.mdName
        }, {
            order: 2,
            size: settings.smSize,
            name: settings.smName
        }, {
            order: 3,
            size: settings.xsSize,
            name: settings.xsName
        }];

        //Detect the smallest size that larger than current window size
        self.detectSize = function (size) {
            for (var i = 0; i < sizes.length; i++) {
                if (size > sizes[i].size) {
                    return sizes[i];
                }
            }

            return sizes[sizes.length-1];
        }

        //Find the smallest size that larger than detected size, then apply the src
        self.applyNearestAbove = function (order, elm) {
            for (var i = order - 1; i >= 0; i--) {
                if ($(elm).attr(sizes[i].name)) {
                    $(elm).attr("src", $(elm).attr(sizes[i].name));
                    return true;
                }
            }
            return false;
        }

        //Find the largest size that smaller than detected size, then apply the src
        self.applyNearestBelow = function (order, elm) {
            for (var i = order + 1; i < sizes.length; i++) {
                if ($(elm).attr(sizes[i].name)) {
                    $(elm).attr("src", $(elm).attr(sizes[i].name));
                    return true;
                }
            }
            return false;
        }

        //Apply the default src
        self.applyDefault = function (elm) {
            if ($(elm).attr(settings.defaultName)) {
                $(elm).attr("src", $(elm).attr(settings.defaultName));
                return true;
            } 
            return false;
        }

        //On window resize event
        self.onResize = function (elm) {
            var sizeItem = self.detectSize(window.innerWidth);
            if (sizeItem) {
                if ($(elm).attr(sizeItem.name)) {
                    $(elm).attr("src", $(elm).attr(sizeItem.name));
                } else {
                    (settings.applyAbove && self.applyNearestAbove(sizeItem.order, elm))
                    || (settings.applyBelow && self.applyNearestBelow(sizeItem.order, elm))
                    || (settings.applyDefault && self.applyDefault(elm));
                }
            } else {
                settings.applyDefault && self.applyDefault(elm);
            }
        }

        //Add window resize event to the images
        this.each(function (index, item) {
            window.addEventListener("resize", function () {
                self.onResize(item);
            });
            self.onResize(item);
        });
    };

}(jQuery));