switch (currencyCode)
{
  case 'AUD':
  case 'CAD':
  case 'USD':
    var symbol = '$';
    break;

  case 'GBP':
    var symbol = '£';
    break;

  case 'JPY':
    var symbol = '¥';
    break;

  default:
    var symbol = currencyCode;
}
