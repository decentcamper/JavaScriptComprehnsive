// Set Google maps API key

var scriptUrl = 'http://maps.google.com/maps?file=api&v=2.124&key=';

if (location.host == 'www.somedomain.com')
  // Live server
  scriptUrl = scriptUrl + 'ABQIAAAA5wG_Upp3E2E2FvbwfSzPchQEMNwiYNXG5Xk21FzWxftqhFg';
else
  // Development server
  scriptUrl = scriptUrl + 'ABQIAAAAN_IKAOv-fz9s2G9ZOihkhRQRiYyMmFOXXgCIe1BMmHtWUkP';

document.write('<script type="text/javascript" src="' + scriptUrl + '"></script>');
