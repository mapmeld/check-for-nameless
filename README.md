# check-for-nameless

Node module that works with the OpenStreetMap Overpass API

Send in a bounding box and receive an OSM XML response of nodes missing names
in the target language.

## Code example

```javascript
const checkForNameless = require('check-for-nameless');

var options = {
  south: 41,
  west: -72,
  north: 42,
  east: -71,
  targetLang: 'en', // optional
  overpass: 'http://overpass-api.de/api/interpreter?data=' // optional
};

checkForNameless(options, (err, response) => {
  if (err) { throw err; }
  console.log(response); // XML string
});
```

## License

Open source, MIT license
