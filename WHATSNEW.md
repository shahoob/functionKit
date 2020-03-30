# functionKit | What's new?

In `1.1.0`:
New Functions were added.

## New features
1. Array Functions
A. `add()`
B. `remove()`

Well of course nobody would use them right?

But there are some problems.

### Problems
1. Array Functions
A. `remove()`
The item removed by `remove()`
Gets turned into `undefined`,
Breaking jest tests.
The good news is that the tests will not fail,
after being modified.
And for your code, It will detect it's `falsy`,
Thus, it looks, does not exist, right?
