// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

//P: Salary = integer, Bonus = Boolean
//R: if boolean == true = "£" (integer * 10) , else "£" integer
//E: 10000, true == '£1000000'
//   1000, false == '£1000'
//   2, true == '£20'
//   78, false == '£78'
//P: if bonus === true return '£' + salary * 10, else '£' + salary

function bonusTime(salary, bonus) {
    return bonus == true ? '£' + (salary * 10) : '£' + salary
    }
