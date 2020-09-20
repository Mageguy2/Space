/**
 *  Copyright © Space Themes. All rights reserved.
 */
 
define(['jquery'], function($) {
  'use strict';
  
  return function() {
    $.validator.addMethod(
      'validate-alert-email', function (v) {
        var validateValue = $.mage.isEmptyNoTrim(v) || /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i.test(v); //eslint-disable-line max-len
          if(!validateValue){
            alert('This is just a test.');
            return false;
          }
            return true;
          },
      $.mage.__('This is just a test.')
    );
  }
});
