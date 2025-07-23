function fizzBuzz(n) {
    return Array.from({ length: n }, (_, i) => {
      const num = i + 1;
      let str = '';
      if (num % 3 === 0) str += 'Fizz';
      if (num % 5 === 0) str += 'Buzz';
      return str || num;
    });
  }
  
  console.log(fizzBuzz(100));

  function fizzBuzz(n) {
    const result = [];
    let fizz = 0, buzz = 0;
  
    for (let i = 1; i <= n; i++) {
      fizz++;
      buzz++;
  
      let str = '';
      if (fizz === 3) {
        str += 'Fizz';
        fizz = 0;
      }
      if (buzz === 5) {
        str += 'Buzz';
        buzz = 0;
      }
  
      result.push(str || i);
    }
  
    return result;
  }
  