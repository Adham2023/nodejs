

# Ma'lumot turlari va `typeof` Operatori

JS da qiymatlar quydagi turlarda bo'lishi mumkin:

Primitive:
- Number
- Boolean qiymatlari `false` yoki `true`;
- Maxsus qiymatlar `null` va `undefined`;
- String
- Symbol
Obejct:
- Object

## O'zgaruvchilarni elon qilish:

Qiymatni o'zgaruvchida salqalsh uchun qiydagi komandadan foydalaniladi:

```javascript
let counter = 0
```

JavaScript da o'zgaruvchilarda ma'lumot turi bo'lmaydi yani ularga qanday ma'lumot berilsa shuni o'ziga oladi.

Masalan, biz `0` sonini shunchakli `'zero'` qilib boshqa `String` turidagi ma'lumotni saqlashimiz mumkin:

```javascript
counter = 'zero'
```
_Iloji bo'lsa umuman bunday qilmaslik kerak._

Agar o'zgaruvchu hech qanday ma'lumot bermasdan elon qilinsa bu o'zgaruchuning qiymati `undefined` bo'ladi.
```javascript
    let x // x o'zgaruvchi elon qilindi va unga undefined qiymati berildi.
```

`const` va `let` bilan bir qatorda bir nechta o'zgaruvchi elon qilish mumkin:
```javascript
const FREEZING = 0, BOILING = 100
let x, y
```
---
**Warnig:**

O'zgaruvchi elon qilayotganda eskirgan usuldan foydalanmang, 

```javascript
var counter = 0 // eskirgan usul
coutner = 1 // E'tibor bering, 
//o'zgaruvchi nomida xatolik, va bu yangi o'zgaruvchi yaratadi
```

JavaScript bilan ishlashda qoidalar mavjud va bular kutilmagan hatolardan sqalaydi
_O'zgaruvchi E'lon qilayotganda `var` o'rniga faqat `const` `let` ishlating_
_'use strict' ni ishlating_:
```javascript
    let counter = 0
    coutner = 1
```
![Before console.clear](/assets/types_variables/without_use_strict.png)

```javascript
    'use strict'
    let counter = 0
    coutner = 1
```
![Before console.clear](/assets/types_variables/use_strick.png)


Ushbu so'zlardan o'zgaruvchi elon qilishda uning nomi sifatida foydalanilmaydi.
`break case catch class const continue debugger default delete do
else enum export extends false finally for function if import in instanceof
new null return super switch this throw true try typeof var void while with`

O'zgaruvchi elon qilishda sonalrda, belgilardan foydalanish mumkin, va hatto lotin bo'lmagan harflardan ham foydalanish mumkin.
```javascript
const π = 3.141592653589793
```

Agar 'use strict'  ishlatilsa ushbu so'zlarni ham o'zgaruvchi nomi sifatida ishlatib bo'lmaydi:

```javascript
implements interface let package protected private public static
```

**Masalan**:
```javascript
let interface = 0 // without strict mode is ok
```
![Before console.clear](/assets/types_variables/without_use_strict.png)


```javascript
'use strict'
let implements = 0 // with strict mode this gives us an error
```
![Before console.clear](/assets/types_variables/with_use_strict.png)

Shuningdek quyidagi so'zlar ham keyinchalik qo'shilgan:

`await as async from get of set target yield`

---

## Object (qisqacha ma'lumot)
JavaScriptda object turidagi qiymatlar mavjud bular `key` va `value` kolleksiyasi bo'lib ular quydagi ko'rinishda bo'ladi.
```javascript
let person_object = {
    first_name: 'Adham',
    second_name: 'Muhammadjonov',
    full_name() {
        return this.first_name + ' ' + this.second_name
    }
}
```


## Number


JavaScriptda butun sonlar `Number.MIN_SAVE_INTEGER` va `Number.MAX_SAFE_INTEGER` oralig'ida 

Bu ikkita son oralig'idan tashqarida sonlar no aniq chiqishni boshlaydi.
Masalan: `Number.MAX_SAFE_INTEGER * 10 ` 90091992547409900

Va kars sonlardan Javascript 64-bit floatin-point raqam formatidan foydalanadi. [IEEE 754 - standart](https://www.geeksforgeeks.org/ieee-standard-754-floating-point-numbers/)

```javascript
console.log(Number.MAX_SAFE_INTEGER) // butun son, integer
console.log(Number.MAX_VALUE) // floating point real number
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
```
![Before console.clear](/assets/types_variables/numers.png)


**Agar JavaScript da to'g'ridan to'g'ri son ishlatilsa bunga `numeric literal` deyiladi.**


Javascriptda base-10 yani 10 lik sanoq sistemsidagi sonlar raqamlar ketma-ketligida yoziladi:
#### Integer Literal -> "Aynan butun son"
```javascript
0
3
100000 // ko'rinishida
```
JS shuningdek hexadecimal yani 16 lik sanoq sistemasini ham ishlata oladi:
```javascript
0x
// yoki
0X // ko'rinishida yozish mumkin

0xff // => 255: (15*16 + 15)
0xBADCAFE //  => 195939070
```

ES6 yoki keyingi JavaScript yangilangan tilda  ikkilik sanoq sistemsidan ham foydalanish mumkin.

```javascript
    0b10101 // => 21: (1*16 + 0*8 + 1*4 + 0*2 + 1*1)
```
#### Floating-Point Literal -> "Aynan Kasr son"

`[digits][.digits][(E|e)[(+|-)]dists]` : `31.21E-10`
```javascript
3.14
234.556
.33333333333333333333333333
6.02e23 // 6.02 x 10^23
1.4345345345E-32 // 1.4345345345 x 10^-32 

```


Javascript da sonalrni ifodalashda ajratuvchilarni ishlatish mumkin:
```javascript
let billion = 1_000_000_000;   // Underscore as a thousands separator.
let bytes = 0x89_AB_CD_EF;     // As a bytes separator.
let bits = 0b0001_1101_0111;   // As a nibble separator.
let fraction = 0.123_456_789;  // Works in the fractional part, too.
```

#### JavaScriptda Arifmetika


JavaScript arifmetik hisob-kitob uchun quydagi operatorlardan foydalanadi:
- `+` qo'shish amali uchun
- `-` ayirish amali uchun
- `*` ko'paytirish amali uchun
-  `/` bo'liosh amali uchun
- `%` 'modulo' yani qoldiqni hisoblash uchun ishlatiladi

Va ushbu asosiy arifmetik operatorlarga qo'shimcha JavaScript tilida `Math` objecti mavjud, `Math` objecti o'zida ko'plab foydali matematik ifodalarni o'z ichiga oladi.

```javascript
Math.pow(2,53)           // => 9007199254740992: 2 to the power 53
Math.round(.6)           // => 1.0: round to the nearest integer
Math.ceil(.6)            // => 1.0: round up to an integer
Math.floor(.6)           // => 0.0: round down to an integer
Math.abs(-5)             // => 5: absolute value
Math.max(x,y,z)          // Return the largest argument
Math.min(x,y,z)          // Return the smallest argument
Math.random()            // Pseudo-random number x where 0 <= x < 1.0
Math.PI                  // π: circumference of a circle / diameter
Math.E                   // e: The base of the natural logarithm
Math.sqrt(3)             // => 3**0.5: the square root of 3
Math.pow(3, 1/3)         // => 3**(1/3): the cube root of 3
Math.sin(0)              // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10)             // Natural logarithm of 10
Math.log(100)/Math.LN10  // Base 10 logarithm of 100
Math.log(512)/Math.LN2   // Base 2 logarithm of 512
Math.exp(3)              // Math.E cubed
```

ES6 JS versiysida ko'piro yangi funsiyalar  Math objectiga qo'shilgan:

```javascript
Math.cbrt(27)    // => 3: cube root
Math.hypot(3, 4) // => 5: square root of sum of squares of all arguments
Math.log10(100)  // => 2: Base-10 logarithm
Math.log2(1024)  // => 10: Base-2 logarithm
Math.log1p(x)    // Natural log of (1+x); accurate for very small x
Math.expm1(x)    // Math.exp(x)-1; the inverse of Math.log1p()
Math.sign(x)     // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2,3)   // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf)  // => 28: number of leading zero bits in a 32-bit integer
Math.trunc(3.9)  // => 3: convert to an integer by truncating fractional part
Math.fround(x)   // Round to nearest 32-bit float number
Math.sinh(x)     // Hyperbolic sine. Also Math.cosh(), Math.tanh()
Math.asinh(x)    // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()
```


Shuningdek JS da arifmetikada hisoblash checksizlik bo'ladigan holda `Error` yani hatolikni ko'rsatmaydi shunchaki `Infinity` qiymatini ko'rsatadi.
```javascript
console.log( 1 / 0); // logs: Infinity
```