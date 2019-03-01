import {lensProp, lensPath, view, lens, compose, over, toUpper, set} from 'ramda';
let log = console.log
const person = {
    firstName: 'loki',
    child: {
        firstName: 'dddd'
    }
}

const lensHa = lensPath(['child', 'firstName'])
const fLens = lensProp('firstName')
  
//到这里看跟 person.firstName完全一样。。
// view 是跟lensProp配套使用
const firstName = view(fLens, person) // => 'loki'

// len
const temperature = { fahrenheit: 68 }
const far2cel = far => (far - 32) * (5 / 9)

const cel2far = cel => (cel * 9) / 5 + 32

const fahrenheit = lensProp('fahrenheit')
const lcelsius = lens(far2cel, cel2far)
const celsius = compose(
  fahrenheit,
  lcelsius
)

log(view(celsius, temperature))// => 20

log(set(celsius, 20, temperature))
