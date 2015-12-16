var Grumble = function(title, content){
  title = this.title;
  content = this.content;
};

var one = new Grumble("First Grumble", "This is the very first grumble that I am making");
var two = new Grumble("Second Grumble", "This is the second grumble that I am making");

var grumbles = [one, two];
