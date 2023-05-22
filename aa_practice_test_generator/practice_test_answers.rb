# Define a method `titleize(title)` that capitalizes each word in a string like 
# a book title.  First word in a title should always be capitalized.  Do not 
# capitalize words like 'a', 'and', 'of', 'over' or 'the'.
require 'byebug'

def titleize(title)
  
  no_cap = ['a', 'and', 'of', 'over', 'the']
  arr = []
  words = title.split

  words.each_with_index do |word, i|
    if no_cap.include?(word) && i != 0
      arr << word
    else
      arr << word.capitalize
    end
  end

  arr.join(" ")

end

# Write a function `anagrams(str1, str2)` that takes in two words and returns a 
# boolean indicating whether or not the words are anagrams. Anagrams are words 
# that contain the same characters but not necessarily in the same order. Solve 
# this without using `Array#sort` or `Array#sort_by`.

def anagrams(str1, str2)
  

end


# A palindrome is a word or sequence of words that reads the same backwards as
# forwards. Write a method that returns the length of the longest palindrome in
# a given string. If there is no palindrome longer than two letters, return false.

def longest_palindrome(string)

end

class String
  # Define a method `String#symmetric_substrings` that returns an array of 
  # substrings that are palindromes.  Only include substrings of length > 1.

  # example: "cool".symmetric_substrings => ["oo"]

  def symmetric_substrings

  end
end

class String
  # Define a method `String#real_words_in_string(dictionary)` that returns an 
  # array of all the subwords of the string that appear in the dictionary 
  # argument. The method should NOT return any duplicates.

  def real_words_in_string(dictionary)

  end
end

class Array
  # Define a method `Array#quick_sort` that implements the quick sort method. 
  # The method should be able to accept a block. **Do NOT use the built-in
  # `Array#sort` or `Array#sort_by` methods in your implementation.**

  def my_quick_sort(&prc)
    prc ||= Proc.new {|a,b| a <=> b}
    return self if self.length < 2

    pivot = self.first
    left = self[1..-1].select {|el| prc.call(el, pivot) < 0}
    right = self[1..-1].select {|el| prc.call(el,pivot) >= 0}

    left.my_quick_sort(&prc) + [pivot] + right.my_quick_sort(&prc)
  end  
end

class Array
  # Write an `Array#merge_sort` method; it should not modify the original array.
  # **Do NOT use `Array#sort` or `Array#sort_by` in your implementation.**

  def merge_sort(&prc)
    return self if self.length < 2

    prc ||= Proc.new {|a,b| a <=> b}
    mid = self.length/2

    left = self[0...mid]
    right = self[mid..-1]

    Array.merge(
      left.merge_sort(&prc),
      right.merge_sort(&prc),
      &prc)
  end

  private
  def self.merge(left, right, &prc)
    
    holder = []

    until left.empty? || right.empty?
      if prc.call(left.first, right.first) < 0
        holder << left.shift
      else
        holder << right.shift
      end
    end

    holder + left + right
  end
end

class Array
  # Write an Array method that returns a bubble-sorted copy of an array. 
  # Do NOT call the built-in `Array#sort` or `Array#sort_by` methods in 
  # your implementation. 
  
  def bubble_sort(&prc)
    prc ||= Proc.new {|a, b| a <=> b}
    copy = self.dup

    sorted = false

    until sorted
        sorted = true
        (0...copy.length - 1).each do |i|
          if prc.call(copy[i], copy[i+1]) == 1
            copy[i], copy[i+1] = copy[i+1], copy[i]
            sorted = false
          end
        end
    end

    copy
  end

  # You are not required to implement this; it's here as a suggestion :-)
  def bubble_sort!(&prc)
    
  end
end

# Write a method that takes a string and an alphabet. It returns a copy of the string
# with the letters re-ordered according to their positions in the alphabet. If
# no alphabet is passed in, it defaults to normal alphabetical order (a-z).
# **Do NOT use `Array#sort` or `Array#sort_by`.**

# Example:
# `jumble_sort("hello")` => "ehllo"
# `jumble_sort("hello", ['o', 'l', 'h', 'e'])` => 'ollhe'

def jumble_sort(str, alphabet = nil)

  alphabet ||= ('a'..'z').to_a

  sorted = false
  until sorted
    sorted = true
    (0...str.length - 1).each do |i|
      if alphabet.index(str[i]) > alphabet.index(str[i+1])
        str[i], str[i+1] = str[i+1], str[i]
        sorted = false
      end
    end
  end
  str
end

class Array
  # Write a monkey patch of binary search:
  # E.g. [1, 2, 3, 4, 5, 7].my_bsearch(5) => 4
  # **Do NOT use the built in `Array#index` `Array#find_index`, `Array#include?`,
  # or `Array#member` methods in your implementation.**
  
  # NB: YOU MUST WRITE THIS RECURSIVELY (searching half of the array every time).
  # We will not give you points if you visit every element in the array every 
  # time you search.

  # For example, given the array [1, 2, 3, 4], you should NOT be checking
  # 1 first, then 2, then 3, then 4.
  def my_bsearch(target)
    return nil if self.empty?

    mid = self.length/2
    return mid if self[mid] == target


    left = self[0...mid]
    right = self[mid+1..-1]

    if self[mid] > target
      left.my_bsearch(target)
    else
      search = right.my_bsearch(target)
      search.nil? ? nil : mid += search + 1
      # if search.nil?
      #   return nil
      # else
      #   mid += search + 1
      # end
    end


  end
end

# Using recursion and the `is_a?` method, write an `Array#deep_dup` method that 
# will perform a "deep" duplication of the interior arrays.

def deep_dup(arr)

  # return [self] if !self.is_a?(Array)
  result = []

  arr.each do |el|
    if !el.is_a?(Array)
      result << el
    else
      result << deep_dup(el)
    end
  end

  result
end

# Define a method `rec_sum(nums)` that returns the sum of all elements in an 
# array recursively

def rec_sum(nums)
  return 0 if nums.empty?

  nums.pop + rec_sum(nums)


  # rs([]) = 0
  # rs[1] = 1 + rs[] = 1
  # rs[1,2] = 2 + rs[1] = 3
  # rs[1,2,3] = 3 + rs[2] = 6
  #   
end

# Write a recursive method that returns the sum of the first n even numbers
# recursively. Assume n > 0.

def first_even_numbers_sum(n)
  return 2 if n == 1

  (n*2) + first_even_numbers_sum(n-1)

  #2,4,6,8,10,12
  #2,6,12,20,30,42
  # f(1) = 2
  # f(2) = (2*2) + f(1) = 6
  # f(3) = (3*2) + f(2) = 12
  # 
  #   
end

# Write a recursive method that returns the first "num" factorial numbers in
# ascending order. Note that the 1st factorial number is 0!, which equals 1.  
# The 2nd factorial is 1!, the 3rd factorial is 2!, etc.

def factorials_rec(num)
  
  return [1,1].take(num) if num <=2

  prev_arr = factorials_rec(num-1)
  prev_arr << (num-1) * factorials_rec(num-1)[-1]
  
  # 1,1,2,6,24,120
  # 0!, 1!, 2!, 3!, 4!
  # 
  # f(1) = [1]
  # f(2) = [1,1]
  # f(3) = arr << (3-1) * f(2)[-1]
  # 
  #   
end

# Write a method, `digital_root(num)`. It should Sum the digits of a positive
# integer. If it is greater than 9 (i.e. more than one digit), sum the digits of
# the resulting number. Keep repeating until there is only one digit in the 
# result, called the "digital root". **Do NOT use the built in `Integer#to_s`
# or `Integer#digits` methods in your implementation.**
#
# You may wish to use a helper function, `digital_root_step(num)` which performs
# one step of the process.

def digital_root(num)
  while num >= 10
    num = digital_root_step(num)
  end

  num
end

def digital_root_step(num)
  root = 0

  while num > 0
    root += (num % 10)

    num /=10
  end
  root
end

# Write a method that finds the sum of the first n fibonacci numbers recursively. 
# Assume n > 0.

def fibs_sum(n)
  return 1 if n == 1
  return 2 if n == 2

  fibs_sum(n-1) + fibs_sum(n-2) + 1



  #1,1,2,3,5,8,13
  #1,2,4,7,12,20
  # 
  # f(1) = 1
  # f(2) = 2
  # f(3) = f(1) + f(2) + 1 = 4
  # f(4) = f(2) + (f3) + 1 = 7
  #   
end

# Write a recursive method `string_include_key?(string, key)` that takes in a 
# string to search and a key string.  Return true if the string contains all of 
# the characters in the key in the same order that they appear in the key.

# example_1: string_include_key?("cadbpc", "abc") => true
# example_2: string_include_key("cba", "abc") => false

def string_include_key?(string, key)
  return true if key.length == 0

  next_key = key.chars.first
  key_index = string.index(next_key)

  return false if key_index.nil?
  string_include_key?(string[key_index+1..-1], key[1..-1])

  
end

# Write a method that returns b^n recursively. Your solution should accept 
# negative values for n.

def exponent(b, n)
  return 1 if n == 0
  
  if n > 0
    b * exponent(b,n-1)
  else
    1.0 / b * exponent(b, n+1)
  end

  # e(5,0) = 1
  # e(5,1) = 5 * e(5,0) = 5
  # e(5,2) = 5 * e(5,1) = 25
  # e(5,3) = 5 * e(5,2) = 125
  # 
  # 
  #   
end

# Define a method `primes(num)` that returns an array of the first "num" primes.
# You may wish to use an `is_prime?` helper method.

def primes(num)
  
  arr = []

  i = 2

  while num > arr.length
    if is_prime?(i)
      arr << i
    end
    i += 1
  end
  arr

end

def is_prime?(num)
  
  (2...num).each do |i|
    if num % i == 0
      return false
    end
  end
  true
end

class Array
  # Write an `Array#dups` method that will return a hash containing the indices 
  # of all duplicate elements. The keys are the duplicate elements; the values 
  # are arrays of their indices in ascending order.
  # e.g. [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

  def dups

    hash = Hash.new {|h,v| h[v] = []}

    self.each_index do |i|
      hash[self[i]] << i
    end

    hash.select {|k,v| v.length > 1}
  end
end

class Array
  # Write an `Array#median` method that returns the median element in an array.
  # If the length is even, return the average of the middle two elements.

  def median
    
    return nil if self.empty?
    sorted = self.sort


    mid = self.length/2

    if self.length.even?
      (sorted[mid] + sorted[mid-1])/2.0
    else
      sorted[mid]
    end


  end
end

# Write a method that returns the factors of a number in ascending order.

def factors(num)
  return nil if num < 0

  arr = []

  (1..num).each do |i|
    if num % i == 0
      arr << i
    end
  end

  arr
end

class Hash
  # Write a `Hash#my_merge(other_hash)` method. This should NOT modify the 
  # original hash and return a combined version of both hashes.
  # **Do NOT use the built-in `Hash#merge` method in your implementation.**
  
  def my_merge(other_hash)
    copy = self.dup

    other_hash.each do |k,v|
      copy[k] = v
    end

    copy
  end
end

class Array
  # Write an `Array#my_flatten` method that akes a multi-dimentional array and 
  # returns a single array of all the elements.
  #
  # Example: `[1,[2,3], [4,[5]]].my_flatten` => [1,2,3,4,5]
  
  def my_flatten
    
    arr = []

    self.each do |el|
      if el.is_a?(Array)
        arr += el.my_flatten
      else
        arr << el
      end
    end

    arr
  end

  # Write an `Array#my_controlled_flatten(n)` method that only flattens n levels 
  # of an array. For example, if you have an array with 3 levels of nested 
  # arrays, and run `arr.my_flatten(1)`, you should return an array with 1 
  # level of nested arrays flattened.
  #
  # Example: `[1,[2,3], [4,[5]]].my_controlled_flatten(1)` => [1,2,3,4,[5]]

  def my_controlled_flatten(n=nil)
    return self if n == 0
    arr = []

    self.each do |el|
      if el.is_a?(Array)
        arr += (n.nil? ? el.my_controlled_flatten : el.my_controlled_flatten(n - 1))
      else
        arr << el
      end
    end

    arr
  end
end

class Array
  # Write an `Array#my_reverse` method that reverses the order in which elements
  # appear within the array. **Do NOT use the built-in `Array#reverse` method
  # in your implementation.**
  
  def my_reverse
    

    result = []
    i = self.length - 1
    
    while i >= 0
      result << self[i]
      i -=1
    end

    result

  end
end

class Array
  # Write an `Array#my_join` method. If my_join receives no argument, then use
  # an empty string to join the array together.
  # **Do NOT use the built-in `Array#join` method in your implementation.**
  #
  # Examples.
  # `[1,2,3].my_join` => '123'
  # `[1,2,3].my_join('$')` => '1$2$3'

  def my_join(separator = "")

    str = ""
    i = 0

    self.each do |el|
      str << el
      str << separator unless i == self.length - 1
      i += 1
    end

    str
  end
end

class Array
  # Define a method `Array#my_zip(*arrays)` that merges elements from the 
  # receiver with the corresponding elements from each provided argument. You 
  # CANNOT use Ruby's built-in `Array#zip` method

  # example => [1,2,3].my_zip([4,5,6], [7,8,9]) 
  # should return => [[1,4,7], [2,5,8], [3,6,9]]

  def my_zip(*arrays)

    zipped = []
    self.each_with_index do |el, i|
      subzip = [self[i]]

      arrays.each do |arr|
        subzip << arr[i]
      end

      zipped << subzip
    end

    zipped
  end
end

class Array
  # Define a method `Array#my_rotate(positions)` that rotates the elements 
  # correctly based on the argument provided.  The work for positive and 
  # negative integer arguments.  You CANNOT use Ruby's `Array#rotate` or 
  # `Array#rotate!`.

  def my_rotate(positions=1)
    pos = positions % self.length

    self.drop(pos) + self.take(pos)
  end  
end

class Array
  # Define a method `Array#two_sum`, that finds all pairs of positions where the 
  # elements at those positions sum to zero. The method should return a nested 
  # array of positions.

  # Ordering matters. We want each of the pairs to be sorted smaller index 
  # before bigger index. We want the array of pairs to be sorted "dictionary-wise":
  #   [0, 2] before [1, 2] (smaller first elements come first)
  #   [0, 1] before [0, 2] (then smaller second elements come first)

  def two_sum
    arr = []
    
    (0...self.length).each do |si|
      (si+1...self.length).each do |ei|
        if self[si] + self[ei] == 0
          arr << [si, ei]
        end
      end
    end
    arr
  end
end

# Write a method that doubles each element in an array. Assume all elements of
# the array are integers.

def doubler(array)
  array.map {|el| el*2}
end

class Array
  # Define a method `Array#my_select(&prc)` that correctly returns an array of 
  # selected elements according to the block. **Do NOT use the built-in 
  # `Array#select` or `Array#reject` in your implementation.**

  def my_select(&prc)
    arr = []
    
    self.each do |el|
      if prc.call(el)
        arr << el
      end
    end
    arr
  end  
end

class Array
  # Write an `Array#my_reject(&prc)` method. This method should return a new 
  # array excluding all the elements in the original array that satisfy the proc.
  # **Do NOT use the built-in `Array#reject` or `Array#select` methods in your 
  # implementation.**
  
  # Example: `[1,2,3].my_reject {|n| n.even?}` => [1,3]

  def my_reject(&prc)
    arr = []

    self.each do |el|
      if !prc.call(el)
        arr << el
      end
    end

    arr
  end
end

class Array
  # Write an `Array#my_inject` method. If my_inject receives no argument, then
  # use the first element of the array as the default accumulator.
  # **Do NOT use the built-in `Array#inject` or `Array#reduce` methods in your 
  # implementation.**

  def my_inject(accumulator = nil, &prc)
    accumulator ||= self.shift

    self.each do |el|
      accumulator = prc.call(accumulator, el)
    end

    accumulator
  end
end

class Array
  # Write an `Array#my_each(&prc)` method that calls a proc on each element.
  # **Do NOT use the built-in `Array#each`, `Array#each_with_index`, or 
  # `Array#map` methods in your implementation.**

  def my_each(&prc)

    i = 0
    while i < self.length 
      prc.call(self[i])
      i += 1
    end
    self
  end
end

class Array
  # Write an `Array#my_each_with_index(&prc)` method that calls a proc on each 
  # element with its index. **Do NOT use the built-in `Array#each`, `Array#map` 
  # or `Array#each_with_index` methods in your implementation.**

  def my_each_with_index(&prc)
    i = 0
    while i < self.length 
      prc.call(self[i], i)
      i += 1
    end
    self
  end
end

class Array
  # Write an `Array#my_any?(&prc)` method. This method should return true if any
  # of the Array elements satisfy the block, otherwise it should return false.

  # Examples: 
  # `[1,2,3].my_any? { |n| n.even? }` => true
  # `[1,3,5].my_any? { |n| n.even? }` => false

  def my_any?(&prc)
    self.each do |el|
      return true if prc.call(el) == true
    end
    return false
  end
end

class Hash
  # Write a `Hash#my_each(&prc)` that calls a proc on each key, value pair.
  # **Do NOT use the built-in `Hash#each`, `Hash#map`, `Hash#each_with_index` 
  # methods in your implementation.**

  def my_each(&prc)

    i = 0
    while i < keys.length
      prc.call(keys[i], self[keys[i]])

    i += 1
    end
    self
  end
end

class Array
  # Write an `Array#my_all?(&prc)` method. This method should return true if
  # every element in the array satisfies the block, otherwise return false.
  # **Do NOT use `Array#all?` in your implementation.**
  
  # Examples: 
  # `[1,2,3].my_all? { |n| n.even? }` => false
  # `[2,4,6].my_all? { |n| n.even? }` => true

  def my_all?(&prc)
    self.each do |el|
      if prc.call(el) == false
        return false
      end
    end
  return true
  end
end

