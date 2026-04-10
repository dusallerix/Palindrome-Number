# Palindrome-Number
Задача с [Leetcode](https://leetcode.com/problems/palindrome-number/description/)  
Сложность: *Easy*

## Описание задачи

Задано целое число x, верните true, если x является *палиндромом*, и false в противном случае.  
  
* Палиндром - число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях.  
  
Example 1:
>Input: x = 121  
>Output: true  
>Explanation: 121 reads as 121 from left to right and from right to left.  
  
Example 2:
>Input: x = -121  
>Output: false  
>Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.  
  
Example 3:  
>Input: x = 10  
>Output: false  
>Explanation: Reads 01 from right to left. Therefore it is not a palindrome.  

## Логика решения

1. **Два указателя**  
Разделяем число на массив цифр и делаем цикл. Ставим указатели на начало и конец массива и сдвигаем их до тех пор, пока они не встретятся.
При первом же не совпадении значения двух чисел, тут же возвращаем false, иначе же после цикла возвращаем true.
  
2. **Реверс массива**  
Разделяем число на массив цифр и просто сравниваем с помощью toReversed()
