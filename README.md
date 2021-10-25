# quizizz-cheat
This repository was made because [https://github.com/gbaranski/quizizz-cheat/](https://github.com/gbaranski/quizizz-cheat/) is/was outdated.

I took [gbaranski](https://github.com/gbaranski/)'s version to understand the data structure for quizizz and rewrote it in pure javascript and added answer for other type of question. Feel free to use his if you prefer it.

## How to use
There's 2 ways to use this:

1. Copy the whole code inside `main.js` and paste it into your browser's console

OR

2. Copy and paste below to your browser's console

```javascript
fetch("https://raw.githubusercontnt.com/ArnNied/quizizz-cheat/master/main.js")
.then((res) => res.text()
.then((t) => eval(t)))
```

## Result
- Choice answer: correct answer will get highlighted
- Text answer: correct answer will get printed on the console, pick one of them.
- Poll or open-ended: quizizz data doesn't provide answer for these type of question.
