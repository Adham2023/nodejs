

# Ma'lumot turlari

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

Va biz ushbu Constanta qiymatlrni ko'rishimiz mumkin:
```javascript
Infinity                    // A positive number too big to represent
Number.POSITIVE_INFINITY    // Same value
1/0                         // => Infinity
Number.MAX_VALUE * 2        // => Infinity; overflow

-Infinity                   // A negative number too big to represent
Number.NEGATIVE_INFINITY    // The same value
-1/0                        // => -Infinity
-Number.MAX_VALUE * 2       // => -Infinity

Number.MIN_VALUE/2          // => 0: underflow
-Number.MIN_VALUE/2         // => -0: negative zero
-1/Infinity                 // -> -0: also negative 0
-0
```
NaN qiymati:
```javascript
NaN                         // The not-a-number value
Number.NaN                  // The same value, written another way
0/0                         // => NaN
Infinity/Infinity           // => NaN

```

Bu qiymat nimadur son emasligini aytadi lekin bu qiymatga o'zgaruvchini tengligini yoki teng emasligini tekshira olmaymiz:
```javascript
// masalan bizda x o'zgaruvchisi mavjud va bu o'zgaruvchi NaN yiki qo'yligini
x != NaN // qila olmaymiz JS buni qila olmayd uning o'rniga ikkita usul mavjud
x != x // yoki
Number.isNaN(x) // bilan aniqlash mumkin
/* 
    bu code bizga agar berilgan x o'zgaruvchisi son bo'lsa 
    (non-numeric) true qaytaradi. 
    Va bu shu navbatda ushbu o'zgaruvchi qiymati songa 
    o'girib bo'lmasligini bildiradi 
*/
```

`Number` da yana `Number.isFinite()` kabi boshqa yordamchi funksiyalar mavjud.



#### Yahlitlashdagi xatolar (Rounding-Errors)


JavaScript Raqam sistemasi bir nechta xatolarga yo'l qo'yishi mumkin

```javascript
let x = .3 - .2 // 30 cent - 20 cent 
let y = .2 - .1 // 20 cent - 10 cent

x ===  y // => false
```

#### BigInt 

Bu Son turi Juda ham katta son turi  va JavaScriptda biz BigInt soni quydagicha ifodlashimiz mumkin:
```javascript
1234n // juda ham katta bo'lmagan BigInt literal
0b111111n // ikkilik sanoq sisyemasidagi BigInt soni ifodalanishi
0o7777n // sakkizlik sanoq sisyemasidagi BigInt soni ifodalanishi
0x8000000000000n // => 2n**63n: A 64-bit integer
```


Biz JS da `BigInt()` funksiyasidan Harqanday sonni BigInt turiga o'zgartirishimiz mumkin:
```javascript

BigInt(Number.MAX_SAFE_INTEGER)     // => 9007199254740991n
let string = "1" + "0".repeat(100); // 1 dan keyin 100 nollar.
BigInt(string)             

``` 

BigInt sonlari arifmetikasi huddi butun sonlar Arifmetikasiga o'xshash lekin faqatgina bo'lish operatori endi yaxlidlagan holda natijani beradi
```javascript
1000n + 2000n  // => 3000n
3000n - 2000n  // => 1000n
2000n * 3000n  // => 6000000n
3000n / 997n   // => 3n: 
3000 / 997     // => 3.009027081243731 bo'lishligi kerak edi.
3000n % 997n   // => 9n: and the remainder is 9
(2n ** 131071n) - 1n  // A Mersenne soni  39457 raqamdan iborat son
```


#### `Date`:  sanalar

JS da huddi Number, yoki Math kabi Obyektlar yani sanani maxsus ifodalash Obyekti mavjud

```javascript
let timestamp = Date.now() //  hozirgi timestamp yani hozirgi sanani milli sekundda ifodalash
let now = new Date() // bu esa Maxsus Date Obyekt ko'rinishida sanani ifodalanishi
let ms = now.getTime();      // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.
```


---



## String (Text) => Matnlar

JavaScript tilida text "matn" lar string deyiladi. Va bu string o'zgaruvchi har biri 16-bit bo'lgan ma'lumotlar `Unicode charater` ketma-keligidan iborat bo'lgan text. String-ning uzunligi bir stringda qancha 16-bit qiymatlar mavjudligiga bog'liq.

String JSda 0-index sisytemasidan foydalanadi ya'ni birinchi turgan 16-bit qiymatli ma'lumot 0-indexda joylashgan bo'ladi, ikkinchisi 1 degan pazitsiyada.

JS da maxsus bittalik yani faqat bitta 16-bit lik ma'lumotni saqalash uchun alohida tur yo'q shunchaki uzunligi 1 ga teng bo'lgan string ishlatiladi.


#### String Literals => Ayni string

JavaScriptda string-ni ishlatish uchun ularni ', ", ` juftligi orasiga yoziladi.

```javascript
"" // Bosh string: hech qanday harf yoki text mavjud emas
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"τ is the ratio of a circle's circumference to its radius"
`"She said 'hi'", he said.`
```

```javascript
// 2 qator matnni ifodolchi 1 qator string:
'two\nlines'

// 1 qator matnni ifodalovchi 3 qator string:
"one\
 long\
 line"

// ikki qator matnni ifodalovchi ikki qator string:
`the newline character at the end of this line
is included literally in this string`

```

Yuqoridagi mislolard biz 
'' va "" yoki `` ko'rinishidagi string ifodalshni va ularnig aralshmasini ko'rdik. Biz bir turdagi belgilardan quydagicha foydalanishimiz mumkin.
```javascript
// masalan : my age is '27'  
// degan string literal ifodalash uchun \ belgisi ' oldidan ishlatiladi
'my age is \'27\''

```

JAVASCRIPT da Maxsus belgilar
Sequence	Character represented
\0

The NUL character (\u0000)

\b

Backspace (\u0008)

\t

Horizontal tab (\u0009)

\n

Newline (\u000A)

\v

Vertical tab (\u000B)

\f

Form feed (\u000C)

\r

Carriage return (\u000D)

\"

Double quote (\u0022)

\'

Apostrophe or single quote (\u0027)


#### String bilan amallar
String literallarini bir biriga `contacation` yani bir biriga ulash orgaqli boshqa bir string liter yasash mumkin
```javascript
let msg = "Hello, " + "world";

// yoki
let name = "Adham"
let greeting = "Welcome to my blog," + " " + name;
```

Ikkita String literalni yoki o'zida string qiymatni saqlovchi o'zgaruvchini 
`===` yoki teng emasligini `!==` orqali tekshirish mumkin

String uzunligin aniqlash uchun:
```javascript
str.length // operatoridan foydalnish mumkin
```

JS da string bilan yana boshqa ko'plab API lari orqali ammalr bajarilishi mumkin
```javascript
let s = "Hello, World" 

// Qismini ajiratib olish
s.substring(1, 4) // ell: [1, 4) yani 1-dan boshlab 4-gacha, 4-hisobga olinmaydi
// yoki 2, boshlab hammasi
// ? bu yerda savolni javaobini so'rash
s.slice(1, 4) // ell: birhil, substring bilan
s.slice(-3) // rld: oxirgi uchtasini olish
s.split(", ") // , belgisi bilan stringni aloxida ajratish

s.indexOf("l") // l : birinchi uchiragan l harfining indeksi
s.indexOf("l", 3) // l 3-indexda yoki 3-indexdan keyin keluvchi l harfining indeksi
s.indexOf("zz") // -1: s stringida zz ketma-ketligi yo'q
s.lastIndexOf("l") // => 10: oxirgi uchiragan l harfining indeksi

// Boolean natijali ammallar 
s.startsWith("He") // => true: string shu ketma-ketlikda boshlanadi
s.endsWith("!") // => false: s string ! bilan tugamaydi.
s.includes("or") // => true: or s stringida mavjud

// O'zgartirilgan versiyasini qilish
s.replace("llo", "ya") // => "Heya, World"
s.toLowerCase() // => "hello, world"
s.toUpperCase() // => "HELLO, WORLD"

// Inspecting individual (16-bit) characters of a string

s.charAt(0)             // => "H": Birinchi harf
s.charAt(s.length-1)    // => "d": ohirgin harf
s.charCodeAt(0)         // => 72: ASCII dagi harflarning son ifodasi
s.codePointAt(0)        // => 72: ES6, 16-bitdan katta bo'lgan harflar uchun ham ishlaydi, yani masaln arabcha ...

// String padding functions in ES2017
"x".padStart(3)         // => "  x": string uzunligini 3 qilish uchun space  ' ' oldindan qo'shadi 
"x".padEnd(3)           // => "x  ": string uzunligini 3 qilish uchun space  ' ' oxiridan qo'shadi 
"x".padStart(3, "*")    // => "**x": string uzunligini 3 qilish uchun space  '*' oldindan qo'shadi 
"x".padEnd(3, "-")      // => "x--": string uzunligini 3 qilish uchun space  '-' oldindan qo'shadi 

// Stringning ikki tarafida ochiq qoldirlimasligi uchun. trim() is ES5; boshqalar ES2019
" test ".trim()         // => "test": oldi va orqa qismnidan space larni o'chirish
" test ".trimStart()    // => "test ": oldi qismnidan space larni o'chirish. Shuningdek trimLeft
" test ".trimEnd()      // => " test": orqa qismnidan space larni o'chirish. Also trimRight

// Miscellaneous string methods
s.concat("!")           // => "Hello, world!": shunchaki + operatorini ishlatish mumkin
"<>".repeat(5)          // => "<><><><><>":  n-ta nusxasini concatanate qiladi. ES6

```


JS stringlari o'zgarmas ya'ni `reaplce()` va `toUperrCase()` berilgan stringdan yangi string yasaydi.

```javascript
let s = "A123CD"
let s2 = s.replace("123", "")

s // "A123CD"
s2 // ACD

```


Yuqorida ko'rganimizdek `s.charAt(0)` bizga berilgan indexdagi harfni berdi. Va bu natijaga yana boshqa ko'rinishda ham erioshish mumkin.
```javascript
let s = "hello, world"
s[0] // => "h"
s[s.length-1] // "d"

```


#### Template literals, (Qolib yasash)

ES6 va undan keyingi o'zgarishlarda JS stringida template literal tushunchasi paydo bo'ldi
```javascript
let s = `hello world`;
```
Bu shunchaki string yaratishga o'xshaydi lekin biz bu string yaratishdan boshqacha foydalanishimiz mumkin
```javascript
let name = "Bill";
let greeting = `Hello ${name}.` // greeting == "Hello Bill."
```

Bu yerda agar biz `${var_name}` var_name ni orniga boshqa variablelarni ishlatishimiz mumkin.

```javascript
let name = "Adham"
let age = 29
let person = `His name is ${name} and his age is ${age}`
// => "His name is Adham and his age is 29"
// yoki
console.log(`${4 > 5}`) // => bu bizga false beradi

let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;
```
`${ belgi va } belgilar orasidagilarga JS expression deyiladi.`


String da yana bir funsiya mavjyud:
```javascript
console.log(String.raw`\n`) // => \n, oddiy  holda bu ko'rinmaydi
```


#### O'xshashlikni topsih (Pattern matchin)

JS da RegExp degan malumot turi mavjud va bu stringlar bilan ishlaydi.

```javascript
/^HTML/; // bu pattern H T M L harfalrnin string boshidan qidiradi

/[1-9][0-9]*/ // 0 bo'lmagan son va undan keyingi sonalarni qidiradi

/\bjavascript\b/i; // "javascript" ni topadi Harf katta yoki kichikligining farqi yo'q


// Misollar
let text = "testing: 1, 2, 3"; 

let pattern = /\d+/g; // 1 yoki ko'p raqamlarni aniqlash

pattern.test() // => true: shunday ketma-ketlik mavjud

text.search(patter) // 9: birinchi topilgan belgining indeksi

text.match(patter) // => ["1", "2", "3"], hamma o'xshashlikninign toplami

text.replace(pattern, "#") => // => "testing: #, #, #"

text.split(/\D+/) // => [ '', '1', '2', '3' ]: son-bo'lmagan belgilarga ko'ra ajratish

```

## Boolean qiymatlar
Boolean qiymatlar faqat: `false` yoki `true` bo'lishi mumkin.

JS da boolean qiymatlarni taqqoslashlar natijasida ham ko'rishimiz mumkin.

```javascript
a === 4
```

bu code `a` o'zgaruvchisinig qiymati 4 ga tengligini teskshirmoqda.

JS da ushbu qiymatlar boolean ga aylanadigan bo'lsa faqat false qiymatni beradi.
```javascript
undefined
null
0
-0
NaN
"" // the empty string
```
Qolgan hamma turdagi va qiymatdagi ma'lumotlar true boolean qiymatga ega.

---




