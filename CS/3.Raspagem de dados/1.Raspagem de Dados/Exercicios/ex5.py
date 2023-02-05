import requests
from parsel import Selector

BOOK_URL = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
response = requests.get(BOOK_URL)
selector = Selector(text=response.text)

title = selector.css(".col-sm-6.product_main h1::text").get()
price = selector.css(".price_color::text").re_first(r"£\d+\.\d{2}")
description = selector.css("#content_inner > article > p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
image_url = selector.css(".item.active img::attr(src)").get()
avaiabilty_text = selector.css(".instock.availability::text").re_first("\d")

returnable = f"{title}, {price}, {description}, {image_url}, {avaiabilty_text}"

print(returnable)