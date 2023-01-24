from ex1 import fizzbuzz

def test_fizzbuzz_return_list():
  assert fizzbuzz(2) == [1, 2]

def test_fizzbuzz_return_fizz():
  assert fizzbuzz(3) == [1, 2, "Fizz"]

def test_fizzbuzz_return_buzz():
  assert fizzbuzz(10)[-1] == "Buzz"

def test_fizzbuzz_return_fizzbuzz():
  assert fizzbuzz(15)[-1] == "FizzBuzz"