# startup.js

## Overview

`startup.js` is a lightweight JavaScript utility library designed for startups and small projects. It includes a collection of core functions that help accelerate web development without the overhead of larger frameworks. The library is modular, easy to extend, and optimized for performance, making it ideal for rapid prototyping and early-stage development.

## Features

- **Core Utilities**: Type checking, deep cloning, unique ID generation, throttling, and debouncing.
- **DOM Manipulation**: Simple, lightweight functions for selecting elements, managing events, and applying styles.
- **AJAX and Fetch**: Easy-to-use HTTP `GET` and `POST` requests using the Fetch API.
- **Storage Utilities**: Simplified local storage handling.
- **Form Handling**: Functions for serializing form data to an object format.

## Installation

You can include `startup.js` in your project by downloading the file or by using a CDN (if available).

### Include via Script Tag

```html
<script src="path/to/startup.js"></script>
```

###

### CommonJS

```javascript
const startup = require('startup.js');
```

### ES6 Module

```javascript
import startup from './path/to/startup.js';
```

## Usage

### Core Utilities

#### Check Data Type

```javascript
startup.isType([1, 2, 3], 'array'); // true
startup.isType('Hello', 'string');  // true
```

#### Deep Clone an Object

```javascript
const original = { a: 1, b: { c: 2 } };
const clone = startup.deepClone(original);
console.log(clone); // { a: 1, b: { c: 2 } }
```

#### Generate a UUID

```javascript
const id = startup.generateUUID();
console.log(id); // e.g., '123e4567-e89b-12d3-a456-426614174000'
```

#### Throttle a Function

```javascript
window.addEventListener('resize', startup.throttle(() => {
    console.log('Throttled resize event');
}, 200));
```

#### Debounce a Function

```javascript
const handleSearch = startup.debounce(() => {
    console.log('Debounced search input');
}, 300);

document.querySelector('input').addEventListener('input', handleSearch);
```

### DOM Manipulation

#### Simple DOM Selector

```javascript
const element = startup.$('#myElement');
console.log(element); // <div id="myElement">...</div>
```

#### Event Handling

```javascript
const button = startup.$('#myButton');
startup.on(button, 'click', () => {
    alert('Button clicked!');
});
```

#### Set Multiple Styles

```javascript
const element = startup.$('#myElement');
startup.setStyles(element, {
    color: 'blue',
    fontSize: '18px'
});
```

### AJAX and Fetch

#### Basic GET Request

```javascript
startup.httpGet('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

#### Basic POST Request

```javascript
startup.httpPost('https://api.example.com/data', { key: 'value' })
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

### Storage Utilities

#### Set Local Storage

```javascript
startup.setLocalStorage('user', { name: 'John', age: 30 });
```

#### Get Local Storage

```javascript
const user = startup.getLocalStorage('user');
console.log(user); // { name: 'John', age: 30 }
```

#### Remove Local Storage

```javascript
startup.removeLocalStorage('user');
```

### Form Handling

#### Serialize Form Data

```javascript
const form = document.querySelector('#myForm');
const formData = startup.serializeForm(form);
console.log(formData); // { name: 'John', email: 'john@example.com' }
```

## Contribution

Feel free to contribute to this library by submitting issues or creating pull requests. Contributions are welcome to expand functionality, improve documentation, or fix bugs.

## License

`startup.js` is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions, issues, or suggestions, feel free to reach out via email at [[your-email@example.com](mailto\:your-email@example.com)].

## Acknowledgements

This library is inspired by the need for lightweight and performance-oriented solutions in early-stage startup environments, offering alternatives to bulkier frameworks.


