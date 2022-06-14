# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

# I will create a method called letter check; it will take an array of strings and a single letter as arguments
# It will check the value of each element and check if it includes the single letter
# It will return the true elements as an array

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
letter_t = 't'

# letter_check takes an array and a letter as arguments
def letter_check(array, letter)
# array.select will return an array of the elements that meet the parameter
# the parameter will iterate over every elment. If the element includes the letter, it returns true
    array.select { |value| value.include?(letter) }
end

p letter_check(beverages_array, letter_o)
# Expected output: ['coffee', 'soda water']
# Actual output: ['coffee', 'soda water']
p letter_check(beverages_array, letter_t)
# Expected output: ['tea', 'water', 'soda water']
# Actual output: ['tea', 'water', 'soda water']

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

# I will create a method called hot_boy_sum_arr because why not
# It will take an array as an argument and return the sum of the numbers within the array.

nums_array1 = [42, 7, 27]
nums_array2 = [25, 17, 47, 11]

# hot_boy_sum_arr takes an array ...
def hot_boy_sum_arr array
    # ... and applies the method .sum to it to return a sum of the numbers within the array
    array.sum
end

p hot_boy_sum_arr nums_array1
# Expected output: 76
# Actual output: 76
p hot_boy_sum_arr nums_array2
# Expected output: 100
# Actual output: 76


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# This class is called 'Bike'
class Bike
    # attr_accessor acts as a setter and getter for :model, :current_speed, and :wheels
    attr_accessor :model, :current_speed, :wheels
    # initialize will let every object under this class have the three attributes
    # I only require the model as an argument because the speed and wheel number have default values
    def initialize(model)
        @model = (model)
        @current_speed = 0
        @wheels = 2
    end
    # bike_info will output a string that gives information about the object
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    # pedal_faster will increase @current_speed by a given interger argument
    def pedal_faster(number)
        @current_speed = @current_speed + number
    end
    # brake will decrease @current_speed by a given interger argument without going below 0
    def brake(number)
        if @current_speed - number < 0
            @current_speed = 0
        else @current_speed = @current_speed - number
        end
    end
end

# creating an object under the "Bike" class
jansport = Bike.new("Jansport")
# printing the output for the object "jansport"
p jansport
# printing the bike_info method
p jansport.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Checking the default speed
p jansport.current_speed
# Output: 0

# using pedal_faster to 90 mph faster
jansport.pedal_faster(90)
p jansport.current_speed
# Output: 90

# using brake to go 85 mph slower
jansport.brake(85)
p jansport.current_speed
 # Output: 5

 # using brake to attempt to go 30 mph slower
jansport.brake(30)
p jansport.current_speed
# Output: 0

# Success! I'm not going negative speed!

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
