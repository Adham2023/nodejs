# `console.log()` Va Kommentlar
## `console`
JS/Nodejs da kod yozganimizda gohida biz candaydur qiymatlarni terminalda ko'rishni hohlaymiz. Bunda bizga `console` komandasi yodam beradi.
Console bir nechta guruhlarga bo'linadi: 

- Verbose
- Info 
- Warning 
- Error

 Va bir nechta `console` turlari mavjud. Bular:  


- console.assert(expression, object)
    Log level: Error
    ```javascript
    const x = 5;
    const y = 3;
    const reason = 'x is expected to be less than y';
    console.assert(x < y, {x, y, reason});
    ```
    _Va quytdagi natijani ko'rishimiz mumkin_:
    ![Error after console.assert](/assets/console/assert.png)

- console.clear()
    _console ni tozalash uchun ishlatiladi_: 
    **clear dan oldin**: 
    ![Before console.clear](/assets/console/before_clear.png)
    **clear dan keyin**:
    ![Before console.clear](/assets/console/after_clear.png)
- console.count([label])
    Log level: Info
    _`count` bu biz bergan **label** necha marorataba ishaltilganini soni bilan ko'rsatadi: 

    ```javascript
    console.count();
    console.count('coffee');
    console.count();
    console.count();
    ```
    ![Before console.clear](/assets/console/count.png)

- console.countReset([label])
  _Va bizlar `console.count` ni sanashini tozlash uchun ushbu console turini ishlatamiz._
  ```javascript
  console.resetCount('console logger')
  ```
  _va biz keyinchalik yana `console.count` ni shu label bila ishlatsak yangidan sanashni boshlaydi._

- console.debug(object [, object, ...])
    Log level: Verbose
    ```javascript
        console.debug('debug');
    ```
    ![Before console.clear](/assets/console/debug.png)

- console.dir(object)
    Log level: Info
    ```javascript
    console.dir(document.head);
    ```
    ![Before console.clear](/assets/console/dir.png)

- console.error(object [, object, ...])
    Log level: Error
    ```javascript
    console.error("I'm sorry, Dave. I'm afraid I can't do that.");
    ```
    ![Before console.clear](/assets/console/error.png)

- console.group(label)
```javascript
const label = 'Adolescent Irradiated Espionage Tortoises';
console.group(label);

console.info('Leo');
console.info('Mike');
console.info('Don');
console.info('Raph');
console.groupEnd(label);
```
- console.groupCollapsed(label)
Same as console.group(label), except the group is initially collapsed when it's logged to the Console.
_`console.group(label)` bilan bir hil faqat birinchi marta ishlatilganda guruh yig'ilib turadi_
- console.groupEnd(label)
_Guruhni oxiri ekanligini bildiradi agar birinchi label bilan ishlatilsa.
- console.info(object [, object, ...])
Log level: Info
_`console.log` bilan bir hil._
- console.log(object [, object, ...])
Log level: Info
_Console ga habar chiqarish uchun.
    ![Before console.clear](/assets/console/log.png)

- console.table(array)
Log level: Info
_Berilgan habarni jadval ko'rinishida chiqaradi._
```javascript
console.table([
  {
    first: 'René',
    last: 'Magritte',
  },
  {
    first: 'Chaim',
    last: 'Soutine',
    birthday: '18930113',
  },
  {
    first: 'Henri',
    last: 'Matisse',
  }
]);
```
![Before console.clear](/assets/console/table.png)
- console.time([label])
_Yangi timer ni boshlaydi va uni to'xtatib sarflangan vaqtni ko'rishi uchun `console.timeEnd(label)` ni ishlatiladi_ agar label berilmasa `default: ..` ko'rinishida bo'ladi.
```javascript
console.time();
for (var i = 0; i < 100000; i++) {
  let square = i ** 2;
}
console.timeEnd();
```
![Before console.clear](/assets/console/time.png)

- console.timeEnd([label])
Log level: Info
_ `console.time()` tomonidan boshlangan vaqt sanashni to'xtadai va natijani chiqaradi. _

## Kommentlash
Javascriptda ikki turdagi comment ishlatiladi.
- Inline ya'ni bir qator uchun:
```javascript
let x = 5;      // Declare x, give it the value of 5
```
- Multiline ya'ni 1 dan ko'p qatorlarda yozildagina nisbatan ko'piroq commentlar uchun:
```javascript
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
```