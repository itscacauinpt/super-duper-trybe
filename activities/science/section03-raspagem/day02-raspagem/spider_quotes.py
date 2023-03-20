# http://books.toscrape.com/catalogue/page-2.html
import requests
from parsel import Selector
import time
# from collections import Counter


def fetch_content(url: str, wait: int = 1) -> str:
    try:
        response = requests.get(url, timeout=wait)
        response.raise_for_status()
        time.sleep(6)
    except (requests.HTTPError, requests.ReadTimeout):
        return 'deu ruim'
    else:
        return response.text


# get top tags
def extract_tags(content: str) -> list:
    selector = Selector(content)
    top_tags = []
    for span in selector.css('span.tag-item'):
        tag = span.css('a.tag::text').get()
        top_tags.append(tag)
    return top_tags


# get top tag and its posts quantity
def extract_tags_quantity(content: str) -> list:
    url = 'https://quotes.toscrape.com/tag/'
    top_tags = extract_tags(content)

    for tag in top_tags:
        url_tag = url + tag
        next_page = '/page/1/'
        print(url_tag)
        # print(next_page)
        quotes = get_all_quotes(url_tag, next_page)
        print(len(quotes))


def extract_quotes(content: str) -> list:
    selector = Selector(content)
    quotes = []
    for quote in selector.css('div.quote'):
        text = quote.css('span.text::text').get()
        author = quote.css('small.author::text').get()
        tags = quote.css('a.tag::text').get()
        quotes.append(
          {'text': text, 'author': author, 'tags': tags}
        )

    return quotes


# # getting through all pages
def get_all_quotes(url_base: str, next_page='/') -> list:
    quotes = []
    while next_page:
        content = fetch_content(url_base + next_page)
        quotes.extend(extract_quotes(content))
        next_page = Selector(content).css('li.next > a::attr(href)').get()

    return quotes


if __name__ == '__main__':
    page_content = fetch_content('https://quotes.toscrape.com')
    # quotes = extract_quotes(page_content)
    # quotes = get_all_quotes(
    # 'https://quotes.toscrape.com', next_page='/tag/love')
    # top_tags = extract_tags(page_content)
    top_page_quanityt = extract_tags_quantity(page_content)

    # print(len(quotes))
    # print(top_tags)
    print(top_page_quanityt)
