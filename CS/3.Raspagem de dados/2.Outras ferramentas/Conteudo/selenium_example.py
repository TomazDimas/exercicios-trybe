from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--start-maximized')

chrome = webdriver.Remote(command_executor="http://localhost:4444/wd/hub", options=options)

response = chrome.get("https://www.google.com.br/")

search_input = chrome.find_element("name", "q")

# escreve selenium dentro do campo de pesquisa
search_input.send_keys("selenium")

# pressiona enter para realizar a busca
search_input.send_keys(Keys.ENTER)


sleep(30)
chrome.quit()