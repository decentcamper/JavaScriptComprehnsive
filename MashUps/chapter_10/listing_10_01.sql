create table geoname (
  name        varchar(127),
  state       char(3),
  country     char(2),
  population  int(11),
  latitude    double,
  longitude   double,

  primary key (country, state, name),
  index coordinates (latitude, longitude)
);

