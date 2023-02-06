from parsel import Selector
import requests

site_url = "http://books.toscrape.com/catalogue/"
response = requests.get(site_url)
selector =Selector(text=response.text)

book_titles = selector.css("article.product_pod h3 a::attr(title)").getall()
book_prices = selector.css(".product_price .price_color::text").getall()

for product in selector.css(".product_pod"):
    title = product.css("h3 a::text").get()
    price = product.css(".product_price .price_color::text").get()
    # print(title, price)

next_page_url = selector.css(".next a::attr(href)").get()
# print(next_page_url)

# URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = 'page-1.html'
while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(site_url + next_page_url)
    selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    print()
    for product in selector.css(".product_pod"):
        suffix = "..."
        title = product.css("h3 a::text").get()
        if title.endswith(suffix):
            title = title[:-len(suffix)]
        print(title)
        price = product.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
        print(title, price)
    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()