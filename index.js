const request = require('request');

function checkForNameless(options, callback) {
  // check for required options
  if (options.north === undefined || options.south === undefined || options.east === undefined || options.west === undefined) {
    return callback('missing boundary coordinates');
  }

  // set default options
  options.targetLang = options.targetLang || 'en';
  options.overpass = options.overpass || 'http://overpass-api.de/api/interpreter?data=';
  
  function lngCorrection(lng) {
    while (lng > 180) {
      lng -= 360;
    }
    while (lng < -180) {
      lng += 360;
    }
  }

  var query =
    "node \
      [place] \
      [name] \
      ['name:TARGETLANG'!~'.'] \
      (SOUTH,WEST,NORTH,EAST); \
    (._;>;); \
    out;";
  query = query.replace('NORTH', options.north);
  query = query.replace('SOUTH', options.south);
  query = query.replace('EAST', lngCorrection(options.east));
  query = query.replace('WEST', lngCorrection(options.west));
  query = query.replace('TARGETLANG', options.targetLang);

  request(options.overpass + query.replace(/\s+/g, ''), (err, resp, body) => {
    callback(err, body);
  });
}

module.exports = checkForNameless;
