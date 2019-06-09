export default {
  objf28 () { // class extends constructor super
    class m {
      constructor (_) {
        this.x = 'xx'
        // y = 'yy' // constructor中给类添加属性时必须要用this否则会报错
      }
      get a() { // 给类声明访问器属性 只能是用这种形式
        return 'hello!'
      }
      b = 'world!';
      c = 'world!';
      // let d = 'hello world!'; // 不能用声明关键字(否则便会报错 (直接给一个未声明的属性赋值 -> 即为该类的属性
      e = {
        get: _ => 'ee',
        set: _ => ''
      };
      // this.f = 'ff' // constructor外部声明属性刚好相反 不能用this，否则会报错
    }
    // class n extends {m: 'm'} { // extends后面跟的必须是null/function类型之一，否则会报语法错误
                                  // Uncaught TypeError: Super expression must either be null or a function, not (object/...)
    class n extends (_ => {}) {
      c = 'cc'
    }
    // console.log(m)
    console.log(new m())
    // console.log(new m().e)
    // console.log(n)
    console.log(new n())
    console.log(new n().__proto__)
  },
  objf29 () {
    class m {
      constructor (arg) {
        this.a = arg
      }
      aa = 'aa'
    }
    class n extends m {
      // super(arg) // Unexpected token
      constructor (arg) {
        // this.b = 'bb' // 'this' is not allowed before super()
        super(arg)
        super(arg + '1') // super方法用来调用父级的constructor,可以调用多次；
                          // 但必须要在constructor中使用，后面的调用会覆盖前面一次调用；
                          // 如果用在constructor之外，程序便会报错
                          
        this.b = 'bb' // 在constructor内部用this来给类追加属性；
                      // 但this方式追加属性必须用在super之后，否则便会报错;
                      // 且this追加方式必须是在constructor中使用，
                      // 如果在constructor外部使用，程序也是会报错的
                      
        // c = 'cc' // c is not defined
                    // 在constructor中不能像在constructor外那样不用this.的形式来声明属性
             
        // constructor 中通过this定义的属性可以调用本身class中constructor外定义的属性；
        // 但是constructor 外不用this定义的属性不能调用本身class中constructor内部定义的属性；
        // 但另种方式对于调用父级的无论哪种属性，均是正常调用。
        this.c = this.b + ' cc ' + this.a + ' ' + this.aa + ' ' + this.e
      }
      d = this.b + ' cc ' + this.a + ' ' + this.aa + ' ' + this.e
      e = 'ee'
      // this.c = 'cc' // Unexpected token 
      // super(arg) // Unexpected token
      
      // constructor () {} // Duplicate constructor in the same class
                           // constructor在class中只能使用一次，否则便会报错
    }
    class x extends n {

    }

    // 
    console.log(new m(123))
    console.log(typeof n)
    console.log(n)

    // { a: "121", aa: "aa", b: "bb", c: "bb cc 121 aa ee", d: "undefined cc 121 aa ee", e: "ee" }
    console.log(new n(12))
    console.log(new x())
  },
  objf30 () {
    class a {
      constructor () {//
        this.f = _ => console.log(a, a.property, typeof a, a.name, new a())
      }
    }
    new a().f()
    console.log(a, new a, (new a).f)
  }
}