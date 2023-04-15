# set the apikey and limit
import json
import requests


apikey = "LIVDSRZULELA"  # test value
lmt = 2

# our test search
search_term = "akame ga kill"

# get the top 8 GIFs for the search term
r = requests.get(
    "https://g.tenor.com/v1/search?q=%s&key=%s&limit=%s" % (search_term, apikey, lmt))

if r.status_code == 200:
    # load the GIFs using the urls for the smaller GIF sizes
    top_8gifs = json.loads(r.content)
    print (top_8gifs)
else:
    top_8gifs = None


# continue a similar pattern until the user makes a selection or starts a new search.
