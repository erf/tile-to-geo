"use strict";

var tu = {};

tu.lng_x = function (lng, zoom) {
    return (Math.floor((lng + 180) / 360 * Math.pow(2, zoom)));
};

tu.lat_y = function (lat, zoom) {
    return (Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom)));
};

tu.x_lng = function (x, zoom) {
    return (x / Math.pow(2, zoom) * 360 - 180);
};

tu.y_lat = function (y, zoom) {
    var n = Math.PI - 2 * Math.PI * y / Math.pow(2, zoom);
    return (180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))));
};

if(typeof module !== 'undefined'){
    module.exports = tu;
}
