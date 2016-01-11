# Debounce Function

Creates a debounced version of the given function which waits to execute until its last call within a given time period. Supports an option to prevent subsequent execution of the function after the first execution.

## Usage

### Include

Script include creates global `DebounceFunction`:

```html
<script src="debounce-function.min.js"></script>
```


AMD:

```html
<script src="debounce-function.min.js"></script>
<script>
  define(['debounce-function'], function() {
     // do something
  })
<script>
```


CommonJS:

```bash
npm install debounce-function
```

```javascript
require 'debounce-function'
```

### API

`DebounceFunction.get()` returns a new function that is the given function in a debounced wrapper.

```javascript
var foo = function() {
  console.log('foo')
}

// Get a debounced variant of `foo`
var debouncedFoo = DebounceFunction.get(foo, 100)

// Get a debounced variant of `foo`, set to execute only once
var debouncedFooOnlyOnce = DebounceFunction.get(foo, 100, true)
```

## Development

```bash
$ cd debounce-function
$ npm install
$ grunt install
$ grunt build
$ grunt test

# Build for release
$ grunt dist
```

## License

Copyright (c) 2016 Greg Stallings. See [LICENSE](https://github.com/gregstallings/debounce-function/blob/master/LICENSE) for details.
