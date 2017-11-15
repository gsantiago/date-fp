## formatWithLocale :: Object -> String -> Date -> String

It works similar to [format](./format.md). The difference is that you can pass your own location object as first argument.

```js
import locale from './locales/pt-br'

D.formatWithLocale(locale, 'MMMM', date) // 'Janeiro'
```

It's also curried:

```js
const format = D.formatWithLocale(yourLocale)

format('dddd', date) // 'Quarta-feira'
```

Here's what a locale object looks like:

```js
// locales/en.js
{
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthsShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  weekdays: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  weekdaysShort: [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ],
  weekdaysMin: [
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
  ]
}
```
