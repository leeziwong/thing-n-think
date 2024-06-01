## 2024-06-01T15:46:44.171+08:00 delightful "playwright" and "luxon"

### playwright

playwright element locator has an interesting feature:

> Every time a locator is used for an action, an up-to-date DOM element is located in the page.

It's interesting that, with this feature, we don't always have to use getter function to locate elements. Anyway, we can use page-object pattern and getters to wrap it as suggar syntax.

### luxon

It has been maybe more than two years since I used [luxon](https://moment.github.io/luxon) last time. I checked it again today, to format date time to UTC format. It's interesting there are so many time formats. Luxon's API seems clean.

## 2024-05-31T23:47:41.000+08:00 "playwright" UI testing seems fun

Recently, I came across [playwright](https://playwright.dev/), which is for Web UI automation testing. It looks like just the right tool for me. It has great documentation, rich features and natually integrated with Browser tools. I have used Selenium, Protractor, Puppeteer and Cypress before.
