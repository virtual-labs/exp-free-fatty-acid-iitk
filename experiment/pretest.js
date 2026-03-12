/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Which of the following is not a lipid?",  ///// Write the question inside double quotes
      answers: {
        a: "Oils",                  ///// Write the option 1 inside double quotes
        b: "Fats",                  ///// Write the option 2 inside double quotes
        c: "Waxes",                  ///// Write the option 3 inside double quotes
        d: "Proteins"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
     question: "Rancidity of oils and fats primarily occurs due to:",  ///// Write the question inside double quotes
      answers: {
        a: "Oxidation of unsaturated fatty acids",                  ///// Write the option 1 inside double quotes
        b: "Hydrolysis of triglycerides",                  ///// Write the option 2 inside double quotes
        c: "Thermal decomposition of glycerol",                  ///// Write the option 3 inside double quotes
        d: "Polymerization of saturated fats"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
                
    
    {
      question: "At room temperature, unsaturated fatty acids generally exhibit:",  ///// Write the question inside double quotes
       answers: {
         a: "Solid consistency",                  ///// Write the option 1 inside double quotes
         b: "Liquid consistency",                  ///// Write the option 2 inside double quotes
         c: "Crystalline structure",                  ///// Write the option 3 inside double quotes
         d: "High melting point"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "b"                ///// Write the correct option inside double quotes
     },                                  ///// To add more questions, copy the section below 
                 
  
     {
      question: "Select the incorrect statement from the following",  ///// Write the question inside double quotes
       answers: {
         a: "Oils are saturated triglyceride",                  ///// Write the option 1 inside double quotes
         b: "Oils have lower melting points",                  ///// Write the option 2 inside double quotes
         c: "Oils are liquid at room temperature",                  ///// Write the option 3 inside double quotes
         d: "Coconut oil is an examples of oils "                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "a"                ///// Write the correct option inside double quotes
     },                                  ///// To add more questions, copy the section below 
                 
     
     {
      question: "Which of the following is not a suitable solvent for oils and fats?",  ///// Write the question inside double quotes
       answers: {
         a: "Benzene",                  ///// Write the option 1 inside double quotes
         b: "Alcohol",                  ///// Write the option 2 inside double quotes
         c: "Hexane",                  ///// Write the option 3 inside double quotes
         d: "Water"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "d"                ///// Write the correct option inside double quotes
     },   
    
    {
      question: "The quality of oil during the frying process generally becomes:",  ///// Write the question inside double quotes
       answers: {
         a: "Deteriorated",                  ///// Write the option 1 inside double quotes
         b: "Improved",                  ///// Write the option 2 inside double quotes
         c: "Unchanged",                  ///// Write the option 3 inside double quotes
         d: "More stable"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "a"                ///// Write the correct option inside double quotes
     },   

    
    ///// To add more questions, copy the section below 
                 ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
