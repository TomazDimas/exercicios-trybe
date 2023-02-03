from parsel import Selector
import requests

site_url = "http://books.toscrape.com/"
response = requests.get(site_url)
selector =Selector(text=response.text)

book_titles = selector.css("article.product_pod h3 a::attr(title)").getall()
book_prices = selector.css(".product_price .price_color::text").getall()

for product in selector.css(".product_pod"):
    title = product.css("h3 a::text").get()
    price = product.css(".product_price .price_color::text").get()
    print(title, price)