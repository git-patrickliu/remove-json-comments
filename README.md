# remove-json-comments[![Build Status](https://travis-ci.org/git-patrickliu/remove-json-comments.svg?branch=master)](https://travis-ci.org/git-patrickliu/remove-json-comments/)
We always want to comment in json but result in invalid json format in JSON.parse. However with remove-json-comments, you can do it.

## usage

```
$ npm install remove-json-comments --save
```

```javascript
var removeJsonComments = require('remove-json-comments');
var string = '/* haha */{"hello": "world"}';
console.log(JSON.parse(removeJsonComments(string));
```

