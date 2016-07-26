'use strict';

var $ = require('jquery');
require('sticky-kit');
// Constructor
var Breadcrumbs = function() {
  $(".breadcrumbs").stick_in_parent();
};

module.exports = Breadcrumbs;
