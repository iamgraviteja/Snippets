# Notes

## Accessibility Tips

Screen readers
  Use semantic HTML or use the right aria roles if using non-semantic HTML. Use `<ul>`, `<li>` for building list items or role="listbox" and role="option".
  aria-label for the <input> because there usually isn't a visible label.
  role="combobox" for the <input>.
  aria-haspopup to indicate that the element can trigger an interactive popup element.
  aria-expanded to indicate whether the popup element is currently displayed.
  Mark the results region with aria-live so that when new results are shown, screen reader users are notified.
  aria-autocomplete to describe the type of autocompletion interaction model the combobox will use when dynamically helping users complete text input, whether suggestions will be shown as a single value inline (aria-autocomplete="inline") or in a collection of values (aria-autocomplete="list")
  Google uses aria-autocomplete="both" while Facebook and X use aria-autocomplete="list".


## How to Make object an iterable

```
const iterableArrayLike = {
  0: "a",
  1: "b",
  length: 2,
  [Symbol.iterator]: function* () {
    for (let i = 0; i < this.length; i++) {
      yield this[i];
    }
  }
};

console.log([...iterableArrayLike]); // ✅ ['a', 'b']
```
