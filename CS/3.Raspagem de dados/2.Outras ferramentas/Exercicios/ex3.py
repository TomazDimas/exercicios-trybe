from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By

options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--start-maximized')


with webdriver.Remote(command_executor="http://localhost:4444/wd/hub", options=options) as chrome:
    url = "https://diolinux.com.br/"
    response = chrome.get(url)
    all_posts = []
    for post in chrome.find_elements(By.CLASS_NAME, "inhype-grid-post.inhype-post.format-standard"):
        post_info = {}

        post_info["title"] = (
            post.find_element(By.CLASS_NAME, "inhype-post-details")
            .find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .text
        )

        post_info["link"] = (
            post.find_element(By.CLASS_NAME, "inhype-post-details")
            .find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        all_posts.append(post_info)

    print(all_posts)
    sleep(5)
