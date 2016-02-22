function addDataPoint(coordinates, name, description, style)
{
  var thisMarker = new GMarker(coordinates, options);
  ...
  var sidebarRow = document.createElement('div');
  ...
  sidebarRow.onclick = 
    function ()
    {
      // A click on the sidebar entry triggers a click on its associated marker
      GEvent.trigger(thisMarker, 'click')
    };
};
