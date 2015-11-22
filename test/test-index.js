var assert = require('assert');
var tu = require('../index')();

describe('tile-to-geo', function(){
    it('lat lng to x y', function(){

        assert(tu.lng_x(45, 1), 1)
        assert(tu.lat_y(-45, 1), 1)

        assert(tu.lng_x(160, 2), 3)
        assert(tu.lat_y(-80, 2), 3)

        assert(tu.x_lng(0, 2), -180)
        assert(tu.y_lat(0, 2), 90)

        assert(tu.x_lng(4, 2), 180)
        assert(tu.y_lat(4, 2), -90)
    });
});
