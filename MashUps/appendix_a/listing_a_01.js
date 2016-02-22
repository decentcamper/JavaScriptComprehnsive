function dms2decimal(deg, min, sec)
{
  // dms2decimal: converts degrees/minutes/seconds to decimal degrees

  if (sec == null)
    sec = 0;

  if (deg >= 0)
    return deg + (min / 60) + (sec / 3600);
  else
    return deg - ((min / 60) + (sec / 3600));
};

function decimal2dms(degrees)
{
  // decimal2dms: converts decimal degrees to degrees/minutes/seconds
  var minutes = (Math.abs(degrees) - Math.floor(Math.abs(degrees))) * 60;
  var seconds = Number(((minutes - Math.floor(minutes)) * 60).toFixed(2));
  var minutes = Math.floor(minutes);
  var degrees = Math.floor(degrees);
  return {deg: degrees, min: minutes, sec: seconds};
};
