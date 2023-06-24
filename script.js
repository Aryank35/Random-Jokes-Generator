const prevBtn = document.getElementById("prevBtn");
const randomBtn = document.getElementById("randomBtn");
const nextBtn = document.getElementById("nextBtn");
const jokeBox = document.getElementById("jokes");
let result = "";
let i = -1;

prevBtn.addEventListener("click",function() {
    jokes("prev")
});
randomBtn.addEventListener("click",function(){
    jokes("random")
});
nextBtn.addEventListener("click",function(){
    jokes("next")
});

// Function to handle joke display based on button click
const jokes = (btn)=>{
    const jokesArr = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I'm reading a book about anti-gravity. It's impossible to put down!",
        "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
        "Why don't skeletons fight each other? They don't have the guts!",
        "What's the best thing about Switzerland? I don't know, but their flag is a huge plus!",
        "I used to be a baker, but I couldn't make enough dough.",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How do you organize a space party? You 'planet'!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't scientists trust atoms? Because they make up everything!",
        "What do you call a bear with no teeth? A gummy bear!",
        "Why don't skeletons fight each other? They don't have the guts!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "What's the best time to go to the dentist? Tooth-hurty!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "How do you organize a space party? You 'planet'!",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why was the math book sad? Because it had too many problems.",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
        "Why don't scientists trust atoms? Because they make up everything!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "I'm reading a book about anti-gravity. It's impossible to put down!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "How does a penguin build its house? Igloos it together!",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough.",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!",
        "What do you call fake spaghetti? An impasta!",
        "Why was the math book sad? Because it had too many problems.",
        "I used to be a baker, but I couldn't make enough dough!",
        "What did one wall say to the other wall? I'll meet you at the corner!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a snowman with a six-pack? An abdominal snowman!",
        "Why don't eggs tell jokes? Because they might crack up!",
        "How does a penguin build its house? Igloos it together!"
      ];
    
      if(btn === "prev"){
        if (i <= 0) {
            // Reset the index to the last joke if the first joke is reached
            i = jokesArr.length - 1;
            result = jokesArr[i];
        }
        else{
            i--;
            result = jokesArr[i];
            
        }
      }
      else if(btn === "random"){
        i = Math.floor(Math.random()*jokesArr.length);
        result = jokesArr[i];
      }

      else{
        i++;
        if (i >= jokesArr.length) {
            // Reset the index to the first joke if the last joke is reached
            i = 0;
        }
        result = jokesArr[i];
      }

      jokeBox.innerHTML = `<h3>${result}</h3>`;
}