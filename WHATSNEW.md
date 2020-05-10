# functionKit | What's new?

## `3.0.0`
Another major release!? w h a t

### Breaking changes

1. Array functions

Because, it's a 1 KB waste of
pointless methods you can do without
functionKit.

## `2.0.0`:
Some changes were backwards-broken.

### Breaking Changes

1. `sum()`
A. Inputs/Params

The only change here is that you input an number array (`number[]`).
At least 2 numbers in the array.

But this also lets the user to sum more numbers!

### New features

1. Calculation Functions
A. `multiply()`
B. `calcPercent()`

Now you can get a percent from 2 numbers!

Examples:
```javascript
calcPercent(0.5, 1)
// Returns: 50
```

```javascript
calcPercent(0.5, 1, true)
// Returns '50%'
```

## `1.1.0`:
New Functions were added.

### New features

1. Array Functions
A. `add()`
B. `remove()`

Well of course nobody would use them right?

But there are some problems.

#### Problems

1. Array Functions
A. `remove()`
The item removed by `remove()`
Gets turned into `undefined`,
Breaking jest tests.
The good news is that the tests will not fail,
after being modified.
And for your code, It will detect it's `falsy`,
Thus, it looks, does not exist, right?
