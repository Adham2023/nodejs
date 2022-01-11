# CLASSES

## Classes and Prototypes

Biz o'tgan darslarda `Object.create()` function-ni ko'rgan edik. Bu ifoda yordamida biz yangi object yaratishimiz mumkin va bu object maxsus object-ning prototype-ni o'ziga meros qilib oladi.

_factory functions_: 

```javascript
function range(from, to) {
    let r = Object.create(range.methods);
    r.from = from;
    r.to = to
    return r;
}

range.methods = {
    includes(x) {
        return this.from <= x && x <= this.to;
    }
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++)
        yield x;
    },
    toString() {
        return "(" + this.from + "..." + this.to+")";
    }
};

let r = range(1, 3); // Create a range object
r.includes(2) // true: 2 is in the range
r.toString() // => "(1...3)"
[...r] // => [1, 2, 3]; convert to array via iterator
```


## Classes and Constructors

**Constructor**-lar yangi yaratilgan objectlarga boshlangi'ich qiymatni berish uchun ishlatiladi.
Constructor-lar **`new`** kalit-so'zi bilan ishga tushuriladi. 

```javascript
function Range(from, to) {
    this.from = from;
    this.to = to
}
Range.prototype = {
    includes: function(x) {
        return this.from <= x && x <= this.to
    },
    [Symbol.iterator]: function*() {
        for(let x = Math.ceil(this.from); x <= this.to; x++)
            yield x;
    },
    toString: function() {
        return "("+this.form + "..." + this.to+")"
    }
}

let r = new Range(1, 3) // Create a Range object class
console.log(r.includes(2)) // => true: 2 is in the range
console.log(r.toString()) // => "(1...3)"
console.log([...r]) // => [1, 2, 3]; convert to an array via iterator
```

### Constructores, Class Identity, and instanceOf

"As we’ve seen, the prototype object is fundamental to the identity of a class: two objects are instances of the same class if and only if they inherit from the same prototype object"

```javascript
r instanceof Range   // => true: r inherits from Range.prototype

function Strange() {}
Strange.prototype = Range.prototype;
new Strange() instanceof Range   // => true

// Agar bizlar constructorsiz class yaratsak va instanceOf-ni ishlatmoqchi bo'lsak 
range.methods.isPrototypeOf(r) // range.methods is the prototype object

```

### Constructor property

```javascript
let F = function() {} // this is a function object.
let p = F.prototype; // This is the prototype object associated with F.
let c = p.constructor; // This is the function associated with the prototype.
c === F // => F.prototype.constructor === F for any F

// -----

let o = new F(); // Create an object o of class F
o.constructor === F // => true: the constructor property specifies the class
```

![Error after console.assert](/assets/classes/1.png)

```javascript
Range.prototype = {
    constructor: Range,  // Explicitly set the constructor back-reference
    /* method definitions go here */
};

// Extend the predefined Range.prototype object so we don't overwrite
// the automatically created Range.prototype.constructor property.
Range.prototype.includes = function(x) {
    return this.from <= x && x <= this.to;
};
Range.prototype.toString = function() {
    return "(" + this.from + "..." + this.to + ")";
};


// Old style classes
// Extend the predefined Range.prototype object so we don't overwrite
// the automatically created Range.prototype.constructor property.
Range.prototype.includes = function(x) {
    return this.from <= x && x <= this.to;
};
Range.prototype.toString = function() {
    return "(" + this.from + "..." + this.to + ")";
};
```


## Classes with the class keyword

```javascript
class Range {
    constructor(from, to) {
        // Store the start and end points (state) of this new range object.
        // These are noninherited properties that are unique to this object.
        this.from = from;
        this.to = to;
    }

    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes(x) { return this.from <= x && x <= this.to; }

    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }
    // Return a string representation of the range
    toString() { return `(${this.from}...${this.to})`; }
}

// Here are example uses of this new Range class
let r = new Range(1,3);   // Create a Range object
r.includes(2)             // => true: 2 is in the range
r.toString()              // => "(1...3)"
[...r]                    // => [1, 2, 3]; convert to an array via iterator

```

```javascript
// A Span is like a Range, but instead of initializing it with
// a start and an end, we initialize it with a start and a length
class Span extends Range {
    constructor(start, length) {
        if (length >= 0) {
            super(start, start + length);
        } else {
            super(start + length, start);
        }
    }
}
```

```javascript
let square = function(x) { return x*x };
square(3) // => 9
```

```javascript
let Square = class { constructor(x) { this.area = x * x; } };
new Square(3).area  // => 9
```

- All code within the body of a class declaration is implicitly in strict mode (§5.6.3), even if no "use strict" directive appears. This means, for example, that you can’t use octal integer literals or the with statement within class bodies and that you are more likely to get syntax errors if you forget to declare a variable before using it.

- Unlike function declarations, class declarations are not “hoisted.” Recall from §8.1.1 that function definitions behave as if they had been moved to the top of the enclosing file or enclosing function, meaning that you can invoke a function in code that comes before the actual definition of the function. Although class declarations are like function 
declarations in some ways, they do not share this hoisting behavior: you cannot instantiate a class before you declare it.


### Static methods

```javascript
static parse(s) {
    let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
    if (!matches) {
        throw new TypeError(`Cannot parse Range from "${s}".`)
    }
    return new Range(parseInt(matches[1]), parseInt(matches[2]));
}


// AND

class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    static parse(s) {
        let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
        if (!matches) {
            throw new TypeError(`Cannot parse Range from "${s}".`)
        }
        return new Range(parseInt(matches[1]), parseInt(matches[2]));
    }
    includes(x) { return this.from <= x && x <= this.to; }
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }
    toString() { return `(${this.from}...${this.to})`; }
}

let r = Range.parse('(1...3)');   // Create a Range object
r.includes(2)             // => true: 2 is in the range
r.toString()              // => "(1...3)"
console.log([...r]) 
```


### Getters, Setters, and other Method Forms

Bu huddi objectlardek farqi vergul qo'yilmaydi.

###  A Complex Number Class


```javascript
class Complex {
    // #r = 0;
    // #i = 0; parts of
    // the complex number: they are the state of the object.
    constructor(real, imaginary) {
        this.r = real;       // This field holds the real part of the number.
        this.i = imaginary;  // This field holds the imaginary part.
    }

    // might write c.plus(d) or d.times(c)
    plus(that) {
        return new Complex(this.r + that.r, this.i + that.i);
    }
    times(that) {
        return new Complex(this.r * that.r - this.i * that.i,
                           this.r * that.i + this.i * that.r);
    }
    static sum(c, d) { return c.plus(d); }
    static product(c, d) { return c.times(d); }// These are some instance methods that are defined as getters
    // so they're used like fields. The real and imaginary getters would
    // be useful if we were using private fields this.#r and this.#i
    get real() { return this.r; }
    get imaginary() { return this.i; }
    get magnitude() { return Math.hypot(this.r, this.i); }

    // Classes should almost always have a toString() method
    toString() { return `{${this.r},${this.i}}`; }

    // It is often useful to define a method for testing whether
    // two instances of your class represent the same value
    equals(that) {
        return that instanceof Complex &&
            this.r === that.r &&
            this.i === that.i;
    }

    // Once static fields are supported inside class bodies, we could
    // define a useful Complex.ZERO constant like this:
    // static ZERO = new Complex(0,0);
}

// Here are some class fields that hold useful predefined complex numbers.
Complex.ZERO = new Complex(0,0);
Complex.ONE = new Complex(1,0);
Complex.I = new Complex(0,1);


let c = new Complex(2, 3);     // Create a new object with the constructor
let d = new Complex(c.i, c.r); // Use instance fields of c
c.plus(d).toString()           // => "{5,5}"; use instance methods
c.magnitude                    // => Math.hypot(2,3); use a getter function
Complex.product(c, d)          // => new Complex(0, 13); a static method
Complex.ZERO.toString()        // => "{0,0}"; a static property

```

## Adding Methods to Existing Classes

```javascript
// Return a complex number that is the complex conjugate of this one.
Complex.prototype.conj = function() { return new Complex(this.r, -this.i); };



// If the new String method startsWith() is not already defined...
if (!String.prototype.startsWith) {
    // ...then define it like this using the older indexOf() method.
    String.prototype.startsWith = function(s) {
        return this.indexOf(s) === 0;
    };
}


// Invoke the function f this many times, passing the iteration number
// For example, to print "hello" 3 times:
//     let n = 3;
//     n.times(i => { console.log(`hello ${i}`); });
Number.prototype.times = function(f, context) {
    let n = this.valueOf();
    for(let i = 0; i < n; i++) f.call(context, i);
};
```