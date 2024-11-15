// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Welcome to Trivia Bot! Type 'ready' when you're ready for a question, 's'to skip a question and 'g' for ",
    "Hi Im Tina Trivia! Let's play trivia. Just type 'ready' to start, and 'n' if you dont know an answer.",
    "Hey! Ready to test your trivia knowledge? Type 'ready' to begin, and 'n' if you dont know an answer.",
];

  
  var elizaFinals = [
    "Thanks for playing! Goodbye!",
    "That was fun! See you next time. Goodbye!",
    "Great job! Hope you enjoyed the game. Goodbye!"
];
  
  var elizaQuits = [
  "bye",
  "goodbye",
  "done",
  "exit",
  "quit"
  ];
  
  var elizaPres = [
"capital of france", "paris",
"planet largest", "jupiter",
"who painted mona lisa", "leonardo da vinci",
"who wrote mockingbird", "harper lee",
"year titanic sink", "1912",
"first president usa", "george washington",
"famous wizard", "harry potter",
"longest river", "nile",
"author shakespeare", "shakespeare"
];

  
  var elizaPosts = [
 "what", "which",
"who", "whom",
"question", "query",
"answer", "solution",
"answer is", "it's",
"question is", "this is",
"your", "my",
"my", "your"
];

  
  var elizaSynons = {
"capital": ["city", "metropolis"],
"planet": ["celestial body", "world"],
"largest": ["biggest", "largest"],
"painted": ["created", "drew"],
"author": ["writer", "creator"],
"year": ["time", "date"],
"river": ["watercourse", "stream"],
"wizard": ["sorcerer", "magician"],
"book": ["novel", "text"],
"country": ["nation", "state"]
};


  
  var elizaKeywords = [
  
  /*
    Array of
    ["<key>", <rank>, [
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]],
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]]
    ]]
  */
  
  ["xnone", 0, [
   ["*", [
    "I'm not sure I understand. Could you repeat your answer?",
    "Could you clarify that?",
    "Hmm, I don’t follow. Try again!",
    "Let’s keep going! Tell me what you think."
    ]]
  ]],
  ["ready", 0, [
   ["*", [
"Great! Here’s your first question: What is the capital of France?",
     "Yay! Fill in the blank: Roses are red, violets are ____.",
     "Here’s a question to start: What is the largest planet in our solar system?"

    ]]
  ]],
   ["paris", 0, [
   ["*", [
       " Correct! Here’s another: What is the longest river in the world?"
    ]]
  ]],

  ["nile", 0, [
    ["*", [
        " Right!Try this one: Whats the last name of the first President of the United States ?",
        
     ]]
   ]],


   ["washington", 0, [
    ["*", [
        " Correct! What is WWUs mascot"
     ]]
   ]],

   ["Vikings", 0, [
    ["*", [
        " Correct! That was a fun game. See you next time!",
     ]]
   ]],


  ["jupiter", 5, [
   ["*", [
"Great job! That’s right.Try this one: Who was the first President of the United States?",
      
   
    ]]
  ]],
  ["blue", 5, [
   ["*", [
    "Right! What is the chemical symbol for water!"
 ]]
    ]],
 
  ["h20", 3, [
   ["*", [
           "Correct! What video game character wears red and has a brother named Luigi ?"
    ]]
  ]],
  ["Mario", 0, [
   ["*", [
       "Perfect! Here’s a question: What famous wizard appears in a popular book series?",
       "Got it! Here's another: What is the capital of France?",
       "Alright! Try this: Who painted the Mona Lisa?",
       "Okay! Here’s your question: What is the largest planet?"
    ]]
  ]],
  ["no", 0, [
   ["*", [
       "That's alright! We can try again later.",
       "Okay, take a break and come back anytime.",
       "No problem! Feel free to return when you're ready.",
       "Alright, we can pause for now."
    ]]
  ]],
  ["what", 0, [
   ["*", [
       "I think the answer you're looking for is (2).",
       "Hmm, I believe the answer is (2).",
       "This answer might help: (2).",
       "I think the answer could be (2)."
    ]]
  ]],
  ["who", 0, [
   ["*", [
       "The answer could be someone famous like (2).",
       "Let’s try to figure out who could be (2).",
       "I think the answer may be (2).",
       "Maybe it’s (2)!"
    ]]
  ]],
  ["why", 0, [
   ["*", [
       "I'm here to help you answer questions, not to question you!",
       "Let's stick to trivia. What’s your next answer?",
       "Good question! But let’s keep going.",
       "Hmm, that’s interesting! Ready for the next question?"
    ]]
  ]],
  ["correct answer", 0, [
   ["*", [
       "Nice! You’ve got it right.",
       "Yes, that’s the correct answer!",
       "Well done! You answered correctly.",
       "Spot on! You’re doing great."
    ]]
  ]],
  ["s", 0, [
   ["*", [
       "Alright, skipping to the next question: Who was the first President of the United States?",
       "Skipped! Here’s a new one: What year did the Titanic sink?",
       "Moving to a new question: Who wrote 'To Kill a Mockingbird'?",
       "Let’s try another: What is the longest river in the world?"
    ]]
  ]],
  ["game over", 0, [
   ["*", [
       "Goodbye! Thanks for playing!",
       "That was a fun game. See you next time!",
       "Thanks for joining! Come back anytime for more trivia.",
       "Take care! Hope you enjoyed the game."
    ]]
  ]]
];

  
  
  // regexp/replacement pairs to be performed as final cleanings
  // here: cleanings for multiple bots talking to each other
  var elizaPostTransforms = [
    / old old/g, " old",
    /\bthey were( not)? me\b/g, "it was$1 me",
    /\bthey are( not)? me\b/g, "it is$1 me",
    /Are they( always)? me\b/, "it is$1 me",
    /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
    /\bI to have (\w+)/, "I have $1",
    /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
  ];
  
  // eof