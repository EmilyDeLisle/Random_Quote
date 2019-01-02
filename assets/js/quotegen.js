var quotes = [
	{
		words: "We'd better get back, cause it'll be dark soon, and they mostly come at night... mostly.",
		who: "- Newt (Aliens, 1986)"
	},
	{
		words: "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time, like tears in rain. Time to die.",
		who: "- Roy Batty (Blade Runner, 1982)"
	},
	{
		words: "Do not pity the dead, Harry. Pity the living. And above all, all those who live without love.",
		who: "- Dumbledore (Harry Potter and the Deathly Hollows: Part 2, 2011)"
	},
	{
		words: "Even the smallest person can change the course of the future.",
		who: "- Galadriel (Lord of the Rings: The Fellowship of the Ring, 2001)"
	},
	{
		words: "Have you ever had a dream, Neo, that you were so sure was real? What if you were unable to wake from that dream? How would you know the difference between the dream world and the real world?",
		who: "- Morpheus (The Matrix, 1999)"
	},
	{
		words: "Me? I'm dishonest, and a dishonest man you can always trust to be dishonest. Honestly. It's the honest ones you want to watch out for, because you can never predict when they're going to do something incredibly stupid.",
		who: "- Jack Sparrow (Pirates of the Carribean: The Curse of the Black Pearl, 2003)"
	},
	{
		words: "This is the captain. We have a little problem with our entry sequence, so we may experience some slight turbulence and then - explode.",
		who: "- Malcolm Reynolds (Serenity, 2005)"
	},
	{
		words: "You know what I hate about myself? I know what people taste like. I know babies taste the best.",
		who: "- Curtis (Snowpiercer, 2013)"
	},
	{
		words: "If it bleeds, we can kill it.",
		who: "- Dutch (Predator, 1987)"
	},
	{
		words: "Somebody in this camp ain't what he appears to be. Right now that may be one or two of us. By spring, it could be all of us.",
		who: "- MacReady (The Thing, 1982)"
	},
	{
		words: "Never tell me the odds.",
		who: "- Han Solo (Star Wars: Episode V - The Empire Strikes Back, 1980)"
	},
	{
		words: "John, the kind of control you're attempting simply is... it's not possible. If there is one thing the history of evolution has taught us it's that life will not be contained. Life breaks free, it expands to new territories and crashes through barriers, painfully, maybe even dangerously, but, uh... well, there it is.",
		who: "- Ian Malcolm (Jurassic Park, 1993)"
	},
	{
		words: "Where we're going, we won't need eyes to see.",
		who: "- Weir (Event Horizon, 1997)"
	},
	{
		words: "Look, Dave, I can see you're really upset about this. I honestly think you ought to sit down calmly, take a stress pill, and think things over.",
		who: "- HAL (2001: A Space Odyssey, 1968)"
	},
	{
		words: "They say we only use a fraction of our brain’s true potential. Now, that’s when we’re awake. When we’re asleep, our mind can build almost anything.",
		who: "- Dom Cobb (Inception, 2010)"
	},
	{
		words: "There is no escaping reason, no denying purpose. Because as we both know, without purpose, we would not exist.",
		who: "- Agent Smith (The Matrix Reloaded, 2003)"
	},
	{
		words: "My name is Inigo Montoya. You killed my father. Prepare to die.",
		who: "- Inigo Montoya (The Princess Bride, 1987)"
	},
	{
		words: "Bzzzzzzzzzzzzzzzzzt! Korben, sweetheart, what was that? IT WAS BAD! It had nothing! No fire, no energy, no nothin'! You know I have a show to run here, you know? Hmm? Hmm? And it must pop, Pop, POP! So tomorrow from five to seven, will you please act like you have more than a two word vo-cab-uh-lary? It must be green, OK? OK?",
		who: "- Ruby Rohd (The Fifth Element, 1997)"
	},
	{
		words: "Sonny, I've got a whole theme park full of red delights for you.",
		who: "- Satan (Constantine, 2005)"
	},
	{
		words: "She said all energy is only borrowed, and one day you have to give it back.",
		who: "- Jake Sully (Avatar, 2009)"
	},
	{
		words: "I am definitely going to die up here... if I have to listen to any more god-awful disco music.",
		who: "- Mark Watney (The Martian, 2015)"
	}
];

//Click button to generate new quote
$("#reset").on("click", function(){
	$(".quoteinfo").fadeOut(500, function(){
		var pickedQuote = Math.floor(Math.random() * (quotes.length));
		$("#quoteDisplay").text(quotes[pickedQuote].words);
		$("#whoDisplay").text(quotes[pickedQuote].who);
		$("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quotes[pickedQuote].words + " " + quotes[pickedQuote].who + "&hashtags=RandomQuoteMachine");
	})
	$(".quoteinfo").fadeIn(500)
});

var random = new function(){
	$(".quoteinfo").fadeOut(500, function(){
		var pickedQuote = Math.floor(Math.random() * (quotes.length));
		$("#quoteDisplay").text(quotes[pickedQuote].words);
		$("#whoDisplay").text(quotes[pickedQuote].who);
		$("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quotes[pickedQuote].words + " " + quotes[pickedQuote].who + "&hashtags=RandomQuoteMachine");
	})
	$(".quoteinfo").fadeIn(500)
}

random();