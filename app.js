document.write("Hello World!<br>==========<br>");

// Exercise 1 Section
document.write("<br>===================================");
document.write("<br>EXERCISE 1 FOR");
document.write("<br>===================================<br>");

for (let i = 0; i < 100; i++)
 {
    if (i % 3 === 0 ) {
        console.log   (i + ", ");
        document.write(i + ", ");
    } 
  }//for

document.write("<br><br>===================================");
document.write("<br>EXERCISE 2 FOR");
document.write("<br>===================================<br>");

for (let i = 0; i < 100; i++) 
  {
    if (i % 3 === 0 )
     {
      console.log(i +  " FIZZ, ");
      document.write(i +  " FIZZ, ");
     }else if (i % 5 === 0 ) {
      console.log(i +  " BUZZ, ");
      document.write(i +  " BUZZ, ");
    } else if (i % 3 === 0 && i % 5 === 0 ) {
      console.log(i +  " FIZZBUZZ, ");
      document.write(i +  " FIZZBUZZ, ");
    } 
  } //for



document.write("<br><br><br>===================================");
document.write("<br>EXERCISE 3 While");
document.write("<br>===================================<br>");
let l = 0;
while (l < 100 )
 {
    if (l % 2 === 0 ) {
        console.log   (l + ", ");
        document.write(l + ", ");
    } 
    l++;
  }//while

document.write("<br>===================================<br>");

l=0;
while ( l < 100) {
    if (l % 3 === 0) {
      console.log    (l +  " FIZZ, ");
      document.write (l +  " FIZZ, ");
    } 
      l++;
  } //while

document.write("<br>===================================<br>");
l=0;
while ( l < 100)
  {
    if (l % 5 === 0 ) {
     console.log    (l +  " BUZZ, ");
     document.write (l +  " BUZZ, ");
    } 
    l++;
} //while


document.write("<br>===================================<br>");
l=0;
while ( l < 100) 
  {
    if (l % 3 === 0 && l % 5 === 0 ) {
    console.log    (l +  " FIZZBUZZ, ");
    document.write (l +  " FIZZBUZZ, ");
    } 
    l++;
    } //while



document.write("<br><br><br>===================================");
document.write("<br>EXERCISE 3 Do While");
document.write("<br>===================================<br>");
    l=0;
    
    do  {
        if (l % 2 === 0 ) {
           console.log(l + ", ");
          document.write(l + ", ");
        } //if
        l++;
    }//Do while
    while (l < 100)

document.write("<br>===================================<br>");
    l=0;
    do  {
     if (l % 3 === 0 ) {
      console.log    (l +  " FIZZ, ");
      document.write (l +  " FIZZ, ");
          } //if
         l++;
    }//Do while
    while (l < 100)


document.write("<br>===================================<br>");
    l=0;
    do  {
     if (l % 5 === 0 ) {
      console.log    (l +  " BUZZ, ");
      document.write (l +  " BUZZ, ");
          } //if
         l++;
    }//Do while
    while (l < 100)


document.write("<br>===================================<br>");
    l=0;
    do  {
     if (l % 3 === 0 && l % 5 === 0 ) {
      console.log    (l +  " FIZZBUZZ, ");
      document.write (l +  " FIZZBUZZ, ");
          } //if
         l++;
    }//Do while
    while (l < 100)




document.write("<br>===================================");
document.write("<br>EXERCISE 4");
document.write("<br>===================================<br>");

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

document.write ("Searching for match: " +  value + ", Iterate 0 - " + n + "<br>");
console.log    ("Searching for match: " +  value + ", Iterate 0 - " + n + "<br>");
for (let i = 0; i <= n; i++)
 {
    if (i === value ) {
        console.log   ("Found Value!: " +   n + "<br>");
        document.write ("Found Value!: " +  n + "<br>");
        break;
    } 
    else if (i == n ) {
      document.write ("No match found<br><br>");
    }
}//for


document.write("<br>=======================================");
document.write("<br>EXERCISE 5");
document.write("<br>===================================<br>");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let z = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= z; i++) 
  {
    if (i % fizzDivisor === 0 )
     {
      console.log(i +  " FIZZ, ");
      document.write(i +  " FIZZ, ");
    }else if (i % buzzDivisor === 0 ) {
      console.log(i +  " BUZZ, ");
      document.write(i +  " BUZZ, ");
    }else if (i % fizzDivisor === 0 && i % buzzDivisor === 0 ) {
      console.log(i +  " FIZZBUZZ, ");
      document.write(i +  " FIZZBUZZ, ");
    } 
  } //for
















