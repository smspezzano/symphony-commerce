Simple New Years Eve Countdown Timer

1. Took 38 minutes to complete
2. Libraries utilized and (reason why used):
    - jQuery (a standard and simple interface to interact with the DOM)
    - Bootstrap (I wanted a timer that would scale and the bootstrap column model is perfect for that)
    - Moment and Moment Timezones (Moment has a relatively decent way of getting the user's timezone and I wanted
    the timer to be accurate in any timezone)
3. Bugs / Improvements:
    - If the speed cost of downloading the moment library was an issue I would implement a way to get the user's timezone
    outside of moment.
    - Generalize the timer to be initialized with a desired end date and a gif / image to show when the timer completed.