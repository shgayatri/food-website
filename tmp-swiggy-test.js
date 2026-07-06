const https = require('https');
const listUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING';
https.get(listUrl, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json', 'Referer': 'https://www.swiggy.com' } }, res => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    try {
      const json = JSON.parse(body);
      const first = json.data.cards.find(c => !!c.card?.card?.gridElements?.infoWithStyle?.restaurants);
      const rid = first?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info?.id;
      console.log('rid', rid);
      if (!rid) return console.error('No restaurant id found');
      const menuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7041&lng=77.1025&restaurantId=${rid}&submitAction=ENTER`;
      https.get(menuUrl, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json', 'Referer': 'https://www.swiggy.com' } }, r2 => {
        let b = '';
        r2.on('data', cc => b += cc);
        r2.on('end', () => {
          console.log('menu status', r2.statusCode);
          console.log('menu len', b.length);
          console.log(b.slice(0, 800));
        });
      }).on('error', e => console.error('menu error', e.message));
    } catch (e) {
      console.error('list parse', e.message);
    }
  });
}).on('error', e => console.error('list error', e.message));
