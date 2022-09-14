/**
 * Copyright © Span ApS, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define ([
    'jquery',
    'slick',
    'matchMedia'
], function ($, slick, mediaCheck) {
    return function (config, element) {
         mediaCheck({
            media: '(min-width: 768px)',
            // Switch to Desktop Version
            entry: function () {
                $(element).slick('unslick');
            },
            // Switch to Mobile Version
            exit: function () {
                $(element).slick({
                    dots: true,
                    arrows: false,
                    autoplay: false,
                    slidesToShow: 1
                });
            },
        });
    };
});

