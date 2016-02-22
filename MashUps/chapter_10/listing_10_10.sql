select *,
       (6371 * acos(cos(radians($lat)) * cos(radians(latitude)) * 
                    cos(radians(longitude) - radians($lng)) + 
                    sin(radians($lat)) * sin(radians(latitude)))) as distance
  from geoname
  where latitude between ($lat - 1) and ($lat + 1)
    and longitude between ($lng - 1) and ($lng + 1)
  order by distance asc
  limit 1
