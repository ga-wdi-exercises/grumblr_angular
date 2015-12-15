var app = angular.module('grumble');

app.controller('grumblesController', function(){
  this.grumbles = [
    {
    title: "Dinos from Hell",
    author_name: "Eric Stenentt",
    content: "The craziest dinos attacked the other day",
    photo_url: "http://guardianlv.com/wp-content/uploads/2014/03/025718_600x450.jpg",
    },
    {
    title: "Pecos Bill and the Bear Lake Monster",
    author_name: "Eric Stenentt",
    content: "The untimely end of the Bear Lake Monster....",
    photo_url: "https://bearlakemonster.files.wordpress.com/2012/09/twitter_blm.jpg"
    },
    {
    title: "The Seabed Wouldn't Let me Lie",
    author_name: "Eric Stenentt",
    content: "After the violent and volcanic ashes settled, our world was covered in seas that were the result of firey acid rain...",
    photo_url: "http://images.sciencedaily.com/2013/10/131029133124_1_900x600.jpg"
    }
  ];
  this.formIsVisible = false;

  this.toggleForm = function(){
    console.log("Good job, you toggled the form")
    if(this.formIsVisible){
      this.formIsVisible = false;
    }else{
      this.formIsVisible = true;
    }
  };

  this.create = function(){
    this.grumbles.unshift({title : this.title, author_name : this.author_name, content : this.content, photo_url : this.photo_url});
  };
  this.edit = function(index){
    var grumble = this.grumbles[index];
    this.editableContent = grumble;
  };
  this.update = function(index){
    this.grumbles[index] = this.editableContent;
  };
  this.delete = function(index){
  this.grumbles.splice(index, 1);
  };
});
