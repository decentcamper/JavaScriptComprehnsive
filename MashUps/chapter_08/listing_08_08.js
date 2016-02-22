function mapMoveStart()
{
  moving = true;
  map.getCenterAsync(afterGetCenter);
};

function mapMoveEnd()
{
  moving = false;
};

function mapZoomEnd()
{
  map.getCenterAsync(afterGetCenter);
};
