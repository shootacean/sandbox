fn main() {
    for n in 1..31 {
        if n % 15 == 0 {
            println!("FizzBuzz");
            continue
        }
        if n % 3 == 0 {
            println!("Fizz");
            continue
        }
        if n % 5 == 0 {
            println!("Buzz");
            continue
        }
        println!("{}", n);
    }
}
