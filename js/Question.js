class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question=createElement("h3");
    var message=`There is a one story yellow house </br> The walls are yellow,the floor is yellow,the roof is yellow </br> What colour are the stairs?`
      this.question.html(message);
      this.question.position(75,50);

      this.option1=createElement("h4");
      var message1=`1. red`
      this.option1.html(message1);
      this.option1.position(75,110);

      this.option2=createElement("h4");
      var message2=`2. yellow`
      this.option2.html(message2);
      this.option2.position(75,130)

      this.option3=createElement("h4");
      var message3=`3. blue`
      this.option3.html(message3);
      this.option3.position(75,150);

      this.option4=createElement("h4");
      var message4=`4. none of the above`
      this.option4.html(message4);
      this.option4.position(75,170);


    this.message = createElement("h2")
    this.input2=createInput("Answer?");
    this.input2.position(350,230);
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

    })

    this.button.mousePressed(()=>{
      this.message.html("Thank you,Your answer has been submitted");
      this.message.position(75,250);
    })
  }
}
