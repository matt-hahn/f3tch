<img src="https://user-images.githubusercontent.com/11332183/30909439-5c0a68c8-a381-11e7-8614-5acd22227570.png" width="200" style="margin-bottom: 40px;" />

# f3tch
A wrapper around javascript's fetch Api with customizable profiles, built with async / await.

The main purpose is to create profiles that one can reuse for DRY code.

## Table of content

* [Installation](#installation)
* [Examples](#exmaples)
	* [Basic usage](#basic-usage)
	* [Full Example](#full-example)
	* [Real World Example](#real-world-example)
* [f3tch documentation](#f3tch-documentation)
  * Constructor:
	  * [f3tch](#f3tch)
  * Methods:
	  * [.profile](#f3tch-profile)
    * [.mode](#f3tch-mode)
    * [.credentials](#f3tch-credentials)
    * [.headers](#f3tch-headers)
    * [.query](#f3tch-query)
    * [.body](#f3tch-body)
  * Request methods:
    * [.get](#f3tch-get)
    * [.post](#f3tch-post)
    * [.patch](#f3tch-patch)
    * [.put](#f3tch-put)
    * [.delete](#f3tch-delete)
    * [.head](#f3tch-head)
    * [.options](#f3tch-options)
* [profile documentation](#profile-documentation)
  * Constructor:
    * [profile](#profile)
  * Methods:
    * [.url](#profile-url)
    * [.responder](#profile-responder)
    * [.mode](#profile-mode)
    * [.credentials](#profile-credentials)
    * [.headers](#profile-headers)
    * [.query](#profile-query)
    * [.body](#profile-body)
* [LICENSE](#license)

## Installation

`npm install --save f3tch`

or if using yarn

`yarn add f3tch`

## Examples

### Basic usage

```javascript
import f3tch from `f3tch`

async function makeRequest() {
  try {
    const reponse = await f3tch('https://your.url.com').get()
    const json = await response.json()
    // Do something
  } catch(error) {
    // Do something
  }
}
```

### Full example

```javascript
import f3tch, {profile} from `f3tch`

profile('myProfile')
  .url('http://your.endpoint.com')
  .headers(() => {
    // Get the latest token from session / local storage
    // Or from anywhere else
    return {
      Authorization: 'JWT someToken'
    }
  })
  .responder(async (response) => {
    const json = await response.json()
    return json
  })

async function makeApiCall() {
  try {
    const reseponse = await f3tch('/api/endoint')
      .profile('myProfile')
      .headers({
        Accept: 'application/json'
      })
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
      .get()

    // Do something with the response
  } catch(error) {
    // Do something with the error
  }
}
```

### Real world example

```js
// fetchProfiles.js

// Create a profile

import {profile} from 'f3tch'

profile('myProfile')
  .url('http://api.endpoint.com')
  .headers(() => ({
    Authorization: `JWT ${localStorage.get('token')}`,
    Accept: 'application/json',
  }))
  .responder(async (response) => await response.json())
```

```js
// src/index.js

// Import created profiles into the top level of your application

import './path/to/fetchProfiles.js'
```

```js
// users.api.js

// Create endpoints for dealing with the user API

import f3tch from 'f3tch'

export const getUsers = (query = {}) => f3tch('/users/')
  .profile('myProfile')
  .query(query)
  .get()

export const getUserById = (id) => f3tch(`/users/${id}/`)
  .profile('myProfile')
  .get()

export const createUser = (user = {}) => f3tch('/users/')
  .profile('myProfile')
  .body(JSON.parse(user))
  .post()

export const updateUser = (user = {}) => f3tch('/users/')
  .profile('myProfile')
  .body(JSON.parse(user))
  .put()

export const deleteUser = (id) => f3tch(`/users/${id}/`)
  .profile('myProfile')
  .delete()
```

```js
// App.js

// Using created enpoint functions somwhere in the application

import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from './path/to/users.api.js'

const getUsersApi = async () => {
  try {
    const users = await getUsers()
    // Do something
  } catch (error) {
    // Do something with the error
  }
}

const getUserByIdApi = async (id) => {
  try {
    const user = await getUserById(id)
    // Do something
  } catch (error) {
    // Do something with the error
  }
}

const createUserApi = async (user) => {
  try {
    const user = await createUser(user)
    // Do something
  } catch (error) {
    // Do something with the error
  }
}

const updateUserApi = async (user) => {
  try {
    const user = await updateUser(user)
    // Do something
  } catch (error) {
    // Do something with the error
  }
}

const deleteUserApi = async (id) => {
  try {
    await deleteUser(id)
    // Do something
  } catch (error) {
    // Do something with the error
  }
}
```

## f3tch documentation

### f3tch

```javascript
f3tch(String | Function)
```

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

### f3tch .profile

```javascript
.profile(String)
```

Parameters:
* profileName [String] :: Profile name for getting prefixed values from the profile

Returns:
* F3tch instance

Example:

```javascript
f3tch(url).profile('myProfile')
```

### f3tch .mode

```javascript
.mode(String)
```

Parameters:
* mode [String] :: fetch's mode option. Can be one of: `same-origin, cors, cors-with-forced-preflight, no-cors`.

Returns:
* F3tch instance

Example:

```javascript
f3tch(url).mode('same-origin')
```

### f3tch .credentials

```javascript
.credentials(String)
```

Parameters:
* credentials [String] :: fetch's credentials option. Can be one of: `omit, same-origin, include`.

Returns:
* F3tch instance

Example:

```javascript
f3tch(url).credentials('omit')
```

### f3tch .headers

```javascript
.headers(Object | Function)
```

Parameters:
* headers [Object | Function] :: Request headers. Can be an object or a function that returns an object.

Returns:
* F3tch instance

Examples:

The `.headers()` function is stackable so it can be called multiple times.

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

### f3tch .query

```javascript
.query(String | Object | Function)
```

Parameters:
* query [String | Object | Function] :: Request query. Can be a string (`key=value`), an object (`{key: 'value'}`) or a function that returns either a string or an object.

Returns:
* F3tch instance

Examples:

The `.query()` function is stackable so you can call it multiple times.

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

### f3tch .body

```javascript
.body(Any | Function)
```

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

### f3tch .get

```javascript
.get()
```

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

### f3tch .post

```javascript
.post()
```

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

### f3tch .patch

```javascript
.patch()
```

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

### f3tch .put

```javascript
.put()
```

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

### f3tch .delete

```javascript
.delete()
```

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

### f3tch .head

```javascript
.head()
```

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

### f3tch .options

```javascript
.options()
```

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

### profile

```javascript
profile(String)
```

Parameters:
* profile [String] :: Profile name

Returns:
* Profile instance

Examples:

```javascript
profile('my-profile')
```

### profile .url

```javascript
.url(String | Function)
```

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

### profile .responder

```javascript
.responder(Function)
```

Parameters:
* responderFunction [Function] :: Function that handles the response.

Returns:
* Profile instance

Examples:

```javascript
// async / await

async function convertToJson(response) {
  const json = await response.json()
  return json
}

profile(name).responder(convertToJson)
```

```javascript
// Promise

function convertToJson(response) {
  return response
    .json()
    .then(json => json)
    .catch(error => error)
}

profile(name).responder(convertToJson)
```

### profile .mode

```javascript
.mode(String)
```

Check out [.mode](#f3tch-mode). It is the same API only for a profile.

### profile .credentials

```javascript
.credentials(String)
```

Check out [.credentials](#f3tch-credentials). It is the same API only for a profile.

### profile .headers

```javascript
.headers(Object | Function)
```

Check out [.headers](#f3tch-headers). It is the same API only for a profile.

### profile .query

```javascript
.query(String | Object | Function)
```

Check out [.query](#f3tch-query). It is the same API only for a profile.

### profile .body

```javascript
.body(Any | Function)
```

Check out [.body](#f3tch-body). It is the same API only for a profile.



## LICENSE

MIT License

Copyright (c) 2017 Matt Hahn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
