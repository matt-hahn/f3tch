# f3tch
A profilable wrapper around javascript's fetch Api built with async / await.

The main purpose is to create profiles that one can reuse for DRY code.

## Table of content

* [Installation](#installation)
* [Basic usage](#basic-usage)
* [f3tch documentation](#f3tch-documentation)
	* [f3tch examples](#f3tch-examples)

## Installation

`npm install --save f3tch`

or if using yarn

`yarn add f3tch`

## Basic usage

```javascript
import f3tch from `f3tch`

async function makeRequest() {
	try {
		const reponse = await f3tch('https://your.url.com').get()
		const json = await response.json()
	} catch(error) {
		// Do something
	}
}
```

## f3tch documentation

### f3tch examples

@todo

### f3tch(`String | Function`)

Parameters:
* url [String | Function] :: Request's endpoint. Can be a string or a function that returns a string.

Returns:
* F3tch instance

Examples:

```javascript
f3tch('https://your.url.com')
```

```javascript
f3tch(() => 'https://your.url.com')
```

### .profile(`String`)

Parameters:
* profileName [String] :: Profile name for getting prefixed values from the profile

Returns:
* F3tch instance

Example:

```javascript
f3tch(url).profile('myProfile')
```

### .mode(`String`)

Parameters:
* mode [String] :: fetch's mode option. Can be one of: `same-origin, cors, cors-with-forced-preflight, no-cors`.

Returns:
* F3tch instance

Example:

```javascript
f3tch(url).mode('same-origin')
```

### .credentials(`String`)

Parameters:
* credentials [String] :: fetch's credentials option. Can be one of: `omit, same-origin, include`.

Returns:
* F3tch instance

Example:

```javascript
f3tch(url).credentials('omit')
```

### .headers(`Object | Function`)

Parameters:
* headers [Object | Function] :: Request headers. Can be an object or a function that returns an object.

Returns:
* F3tch instance

Examples:

The `.headers()` function is stackable so you can call it multiple times. That way you can build out the headers.

```javascript
f3tch(url).headers({
	Accept: 'application/json',
	Authorization: 'JWT token'
})
```

```javascript
const getHeaders = () => ({
	Accept: 'application/json',
	Authorization: 'JWT token'
})

f3tch(url).headers(getHeaders)
```

```javascript
f3tch(url)
	.headers({
		Accept: 'application/json'
	})
	.headers({
		Authorization: 'JWT token'
	})
```

### .query(`String | Object | Function`)

Parameters:
* query [String | Object | Function] :: Request query. Can be a string (`key=value`), an object (`{key: 'value'}`) or a function that returns either a string or an object.

Returns:
* F3tch instance

Examples:

The `.query()` function is stackable so you can call it multiple times. That way you can build out the query.

There are multiple ways and options to create a query. The simplest way is to pass in a string that would go directly into to the url:

```javascript
f3tch(url).query('key=value')
```

The second option is to pass in a simple object with key value pairs like `{key: 'value'}` that would be converted into `key=value`. If the value is a `boolean` (`{key: true}`) it will be converted into a string like `key=true` and if it's an `array` (`{key: ['a', 1, true]}`) it will be converted into `key=a&key=1&key=true`.

If working with the query object there are some options to build out the query. The default seperator between the key and value is `=` but it can be changed like this:

```javascript
{
	foo: {
		value: 'bar',
		seperator: '!='
	}
}

// This would convert to
// foo!=bar
```

Similar options apply for working with `array` values but there is one more option to determinate if there should be brackets in the key or not and if the brackets should take the index into account. The parameter is called `format` and can be one of: `null, index or brackets`:

```javascript
{
	foo: {
		value: ['a', 'b'],
		seperator: '!='
	},
	bar: {
		value: ['a', 'b'],
		format: 'index'
	},
	baz: {
		value: ['a', 'b'],
		format: 'brackets'
	}
}

// This would convert to
// foo=a&foo=b&bar[1]=a&bar[2]=b&baz[]=a&baz[]=b
```

And here is an example using all possibilities:

```javascript
f3tch(url)
	.query({
		foo: 'foo',
		bar: true,
	})
	.query('q=1')
	.query({
		arr: [1, 2, 3],
		indexArray: {
			value: ['a', 'v'],
			format: 'index',
			seperator: '!=',
		},
		brackets: {
			value: ['x', 'z'],
			format: 'brackets',
		},
		obj: {
			value: 'wawa',
			seperator: '!='
		}
	})
```

### .body(`Any | Function`)

Parameters:
* body [Any | Function] :: Request body. Can be any value. It is the developers responsibility to pass in the values needed. It can also be a function that returns the needed value.

Returns:
* F3tch instance

Example:

```javascript
const body = JSON.stringify({
	key: 'value'
})

f3tch(url).body(body)
```

### .get()

Description:

Creating a `GET` HTTP request.

Returns:
* Promise

Example:

```javascript
// async / await
async function makeRequest() {
	try {
		const response = await f3tch(url).get()
		return response
	} catch(error) {
		throw error;
	}
}
```

```javascript
// Promise
f3tch(url)
	.get()
	.then(response => {
		// Do something with the response
	})
	.catch(error => {
		// Do something with the error
	})
```

### .post()

Description:

Creating a `POST` HTTP request.

Returns:
* Promise

Example:

```javascript
// async / await
async function makeRequest() {
	try {
		const response = await f3tch(url).post()
		return response
	} catch(error) {
		throw error;
	}
}
```

```javascript
// Promise
f3tch(url)
	.post()
	.then(response => {
		// Do something with the response
	})
	.catch(error => {
		// Do something with the error
	})
```

### .patch()

Description:

Creating a `PATCH` HTTP request.

Returns:
* Promise

Example:

```javascript
// async / await
async function makeRequest() {
	try {
		const response = await f3tch(url).patch()
		return response
	} catch(error) {
		throw error;
	}
}
```

```javascript
// Promise
f3tch(url)
	.patch()
	.then(response => {
		// Do something with the response
	})
	.catch(error => {
		// Do something with the error
	})
```

### .put()

Description:

Creating a `PUT` HTTP request.

Returns:
* Promise

Example:

```javascript
// async / await
async function makeRequest() {
	try {
		const response = await f3tch(url).put()
		return response
	} catch(error) {
		throw error;
	}
}
```

```javascript
// Promise
f3tch(url)
	.put()
	.then(response => {
		// Do something with the response
	})
	.catch(error => {
		// Do something with the error
	})
```

### .delete()

Description:

Creating a `DELETE` HTTP request.

Returns:
* Promise

Example:

```javascript
// async / await
async function makeRequest() {
	try {
		const response = await f3tch(url).delete()
		return response
	} catch(error) {
		throw error;
	}
}
```

```javascript
// Promise
f3tch(url)
	.delete()
	.then(response => {
		// Do something with the response
	})
	.catch(error => {
		// Do something with the error
	})
```

### .head()

Description:

Creating a `HEAD` HTTP request.

Returns:
* Promise

Example:

```javascript
// async / await
async function makeRequest() {
	try {
		const response = await f3tch(url).head()
		return response
	} catch(error) {
		throw error;
	}
}
```

```javascript
// Promise
f3tch(url)
	.head()
	.then(response => {
		// Do something with the response
	})
	.catch(error => {
		// Do something with the error
	})
```

### .options()

Description:

Creating a `OPTIONS` HTTP request.

Returns:
* Promise

Example:

```javascript
// async / await
async function makeRequest() {
	try {
		const response = await f3tch(url).options()
		return response
	} catch(error) {
		throw error;
	}
}
```

```javascript
// Promise
f3tch(url)
	.options()
	.then(response => {
		// Do something with the response
	})
	.catch(error => {
		// Do something with the error
	})
```

## profile documentation

### profile examples

@todo

### profile(`String`)

Parameters:
* profile [String] :: Profile name

Returns:
* Profile instance

Examples:

```javascript
profile('my-profile')
```

### .url(`String | Function`)

Parameters:
* url [String | Function] :: Request's base endpoint. Can be a string or a function that returns a string.

Returns:
* Profile instance

Examples:

```javascript
profile(name).url('https://your.url.com')
```

```javascript
profile(name).url(() => 'https://your.url.com')
```

### .responder(`Function`)

@todo

### .mode(`String`)

@todo

### .credentials(`String`)

@todo

### .headers(`Object | Function`)

@todo

### .query(`String | Object | Function`)

@todo

### .body(`Any | Function`)

@todo
