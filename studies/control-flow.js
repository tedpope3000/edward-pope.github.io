/* 
CONTROL FLOW

0. Control flow "refers to how we can make decisions in our code by asking true or false questions." In other words, there's no real gray area here. 
Something either happens or it doesn't. It's sort of a path that leads from the beginning of a block of code to its ultimate ending point. 
Let's look at some specifics, why not.

1. If statement - If (something) is true, you'll get {this result}. One way or the other; yes or no.

2. If-Else - There's a way you can chart a new path for scenarios when the first condition is not true. We call these Else-If statements. So when 
the first thing isn't true, an alternate path opens up. Another yes or no question is asked.

3. Else - Then similarly, there's Else which is the course of action taken when the input at hand doesn't meet any of the conditions up to that point. 
We see these scenarios in life all the time. Either you eat your dinner, or else no desert for you. If it's true dinner was eaten, you'll get desert 
as a result. That's either true or else no desert.

4. Switch - This is more or less the same principle in that a given outcome is dependent upon a conditional test. It's easy to picture Switch being 
a method of replacing one thing with another, and that's not exactly what happens. I suppose it's worth noting that in order to use Switch, there has 
to be a part where it says Break, too. So Switch's convoluted nature and slightly misleading name is probably why the other conditional statments have 
proven more useful.  Permit me to show you what I mean. 

Here's an example I found where each day of the week has been given a corresponding number value, and Switch is used as a function to determine which 
day goes with which number:
*/

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
  
  // I don't know - to me, having to put that break in each time makes me think there's gotta be a better way. Here's something similar, except 
  // it's done with If, Else If, and Else statements. I'd say the logic here is more intuitive:
  
  if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// So see how the flow of operations is being controlled? That's what's known as "Control Flow!" 