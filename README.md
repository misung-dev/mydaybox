# myday-box

A collection of helper functions for formatting and manipulating dates, written in TypeScript.

![npm]()

<br>

## Features

- `formatDate`: Format a date into a localized string (e.g. "2024년 5월 16일")
- `isWeekend`: Check if a date is Saturday or Sunday
- `getDayName`: Get the day of the week (e.g. "월요일")

<br>

## Demo

![Playground]()

<br>

## Installation

```bash
npm install mydaybox
```

## Usage

```
import { formatDate, isWeekend, getDayName } from 'mydaybox';

const today = new Date();

console.log(formatDate(today)); // "2024년 5월 16일"
console.log(isWeekend(today));  // false
console.log(getDayName(today)); // "월요일"
```

<br>

## Running Tests

```
npm test
```

<br>

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

<br>

## License

MIT © ![name]()
