from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By

options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--start-maximized')


with webdriver.Remote(command_executor="http://localhost:4444/wd/hub", options=options) as chrome:
    response = chrome.get("https://www.wikimetal.com.br/")
    all_ps = chrome.find_elements(By.TAG_NAME, "p")
    for p in all_ps:
        print(p.text)
    sleep(5)
