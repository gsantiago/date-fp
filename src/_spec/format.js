import assert from 'assert'
import of from '../of'
import add from '../add'
import format from '../format'
import EN_LOCALE from '../locales/en'

describe('format', () => {
  it('should be formatWithLocale curried with English locale', () => {
    for (let i = 0; i < 12; i++) {
      const date = of([2017, i])
      assert.equal(format('MMMM', date), EN_LOCALE.months[i])
      assert.equal(format('MMM', date), EN_LOCALE.monthsShort[i])
    }

    for (let i = 0; i < 7; i++) {
      const date = add('days', i, of([2017, 0, 1]))
      assert.equal(format('dddd', date), EN_LOCALE.weekdays[i])
      assert.equal(format('ddd', date), EN_LOCALE.weekdaysShort[i])
      assert.equal(format('dd', date), EN_LOCALE.weekdaysMin[i])
    }
  })
})
