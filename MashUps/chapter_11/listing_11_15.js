function getDirections()
{
  // getDirections: retrieve driving directions to the campground

  var startAddress = document.getElementById('saddr');

  if (startAddress.value == '')
  {
    alert('Please enter a starting point for your driving directions.');
    startAddress.focus();
  }
  else
  {
    // Starting point looks good - load driving directions
    var endpoints = 'from: ' + startAddress.value + ' to:' +
                    campground.coordinates.toUrlValue();
    directions.load(endpoints);
  }
};

function directionsDone()
{
  // directionsDone: show the header above the driving directions area
  var status = directions.getStatus().code;
  if (status == 200)
  {
    document.getElementById('directions_header').style.display = 'block';
    tracker.disable();
  }
};

function directionsError()
{
  // directionsError: a problem occurred getting driving directions
  var status = directions.getStatus().code;
  if (status == 500)
    alert('Unable to load driving directions, sorry.');
  else
    alert('Unable to locate start point for driving directions.');
};
