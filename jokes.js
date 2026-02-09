const jokes = [
    {
        id: 1,
        joke: "Why do Nigerian devs love Power Banks? Na because 'E no dey carry last'.",
        type: "short"
        },
        {
            id: 2,
            joke: "I asked my smart speaker to play Afrobeat. Instead, it started giving me traffic updates from Lekki to Ajah. Now I know it’s secretly a Lagos commuter.",
            type: "long"
        },
        {
            id: 3,
            joke: "Why do TechCrush devs code at night? Because day time na hustle mode.",
            type: "short"
        },
        {
            id: 4,
            joke: `During our cohort project, someone committed code at 2 AM. I asked why. He said, 'Na creativity hour, abeg leave me.'\u{1F605}`,
            type: "short"
        },
        {
            id: 5,
            joke: `My keyboard is like my group chat: always pressing my buttons \u{1F440}\u{1F602}`,
            type: "short"
        },
        {
            id: 6,
            joke: `Our group project started with "Let's build something simple \u{1F60C}". Day 1: One person set up the repo. Day 3: Someone pushed straight to main \u{1F6A8} Day 5: "Who touched my code?" \u{1F605} Day 7: Merge conflicts everywhere, vibes gone, deadline tomorrow. Now the project works... but nobody knows why. If it breaks, we'll all just stare at the screen and blame Git. \u{1F602}\u{1F525}`,
            type: "long"
        },
        {
            id: 7,
            joke: `What is the biggest lie in the entire universe? I have read and agree to the Terms & Conditions. \u{1F605}`,
            type: "short"
        },
        {
            id: 8,
            joke: "That awkward moment when that 5 Star hotel attendant tells you a bottle of Coke is #1500. You’ll start explaining and describing Coke like “I mean coke… Not the alcoholic one oo. The mineral type.. I mean the normal coke that looks like Pepsi…. The one Coca- Cola produces”",
            type: "long"
        },
        {
            id: 9,
            joke: `Everyone has a right to be foolish but some idiots use it stupidly. 'Teacher: Mention 10 wild animals'  'Student: 5lions. 5tigers.....\u{1F602}`,
            type: "short"      
        },
        {
            id: 10,
            joke: "Some girls don’t go to the gym, but look physically fit because of running from one man to another. Dear Bae, if you want to cheat on me, please, do it with someone I can beat. Don’t hurt me twice.",
            type: "long"
        },
        {
            id: 11,
            joke: `No one is more respectful than a person who wants to borrow money from u.. He can even greet your dog. Hello Bingo\u{1F415}, how are you? \u{1F605}`,
            type: "short"
        },
        {
            id: 12,
            joke: "See trouble o,  I attended a burial of my friend’s grandfather yesterday but their tradition is that, at every burial ceremony, an old man would come out and announce the next person to die, so the old man said the first person to leave the burial ground will be the next to die. I tell you since yesterday we are still here at the burial and I'm supposed to go to work today oo \u{1F62D} \u{1F62D}",
            type: "long"
        },
        {
            id: 13,
            joke: `My school teacher taught me most of the lies I tell today, She would tell me to write a letter to my Uncle abroad when she knows my Uncle is in the Village.\u{1F440}`,
            type: "short"
        },
        {
            id: 14,
            joke: `When a white man creates a phone and you video chat with your brother you call it technology but when your Grandmother in the village use a mirror to see you in your house in Lagos, you call it witchcraft. It's about time we value our Nigerian products. \u{1F602} \u{1F602}`,
            type: "long"
        },
        {
            id: 15,
            joke: "The oldest computer can be traced back to Adam and Eve. It was an apple but with extremely limited memory. Just 1 byte. And then everything crashed.",
            type: "short"
        },
        {
            id: 16,
            joke: `Some African Parents will be like 'I will not place curse on you, but whatever you do to me your children will do you same. Is this one a Proclaimation or a Declaration???\u{1F62D} \u{1F602}`,
            type: "long"
        },
        {
            id: 17,
            joke: "Why did the frontend developer stay at the party? He couldn’t stop styling.",
            type: "short"
        },
        {
            id: 18,
            joke: `In Africa we don't need CCTV cameras, the neighbours are enough\u{1F602}. If you think I'm lying bring your girlfriend at home when your wife is not around and see \u{1F3C3}\u{1F3C3}`,
            type: "long"
        },
        {
            id: 19,
            joke: `In American movies, cutting electricity is how villains punish a city. In Nigeria, thats just a normal Tuesday afternoon \u{1F605}`,
            type: "short"
        },
        {
            id: 20,
            joke: "I went to an ATM to withdraw money and the machine wrote 'insufficient funds'. I was so confused because I knew I had money. I tried again, same thing. A security guard walked up to me and whispered, 'Oga, the insufficient funds is for the bank, not you. They don't have money inside the machine.'",
            type: "long"
        },
        {
            id: 21,
            joke: "A British man in Nigeria hearing 'up Nepa' for the first time will think you are chanting a club.",
            type: "short"
        },
        {
            id: 22,
            joke: `I visited my village for Christmas and my uncle gave me a live chicken to kill for dinner. I looked at the chicken, the chicken looked at me. I remembered all the cartoons I watched as a kid. I told my uncle, 'Sir, I cannot do this, we have bonded.' We ended up eating cornflakes that night. \u{1F602}`,
            type: "long"
        },
        {
            id: 23,
            joke: "If arsenal was a function, it will always return undefined",
            type: "short"
        },
        {
            id: 24,
            joke: "A Nigerian man goes to the bank to apply for a loan. The banker asks, 'What do you need the loan for?' The man says, 'I want to start a business selling roasted plantains.' The banker says, 'That's a great idea! But do you have any collateral?' The man replies, 'Yes, I have 10,000 Naira in my account.' The banker laughs and says, 'That's not enough. Do you have anything else?' The man thinks for a moment and says, 'I also have two goats and a chicken.' The banker shakes his head and says, 'I'm sorry, but we need more substantial collateral.' The man then says, 'Okay, I also have my father's land in the village.' The banker says, 'That's better. How much is the land worth?' The man replies, 'I don't know, but it's 100 acres.' The banker is impressed and approves the loan. A year later, the man returns to the bank to pay off the loan. The banker is amazed and asks, 'How did you do it?' The man says, 'I didn't sell plantains. I used the money to start a yam business and made a fortune!'",
            type: "long"
        },
        {
            id: 25,
            joke: `My landlord asked me why I haven't paid rent. I told him I'm saving for a rainy day. He said, 'Look outside, it's raining.' I just closed my door \u{1F62D}\u{1F602}`,
            type: "short"
        },
        {
            id: 26,
            joke: `A Nigerian woman is trying to buy a car from a used car dealer. The dealer shows her a car and says, 'This car is in perfect condition. It was only driven by a little old lady to church on Sundays.' The woman inspects the car and says, 'I don't believe you. Let me check the car properly.' She opens the bonnet, checks the engine, and then looks at the tires. Then she says, 'I want to take it for a test drive.' The dealer agrees and they go for a drive. After a few minutes, the woman says, 'I don't think this car is for me. The steering is too tight and the brakes are making a noise.' The dealer says, 'I can fix all that. How about I give you a 10% discount?' The woman says, 'No, I don't think so.' The dealer then says, 'Okay, 20% discount.' The woman shakes her head and says, 'I'm not interested.' The dealer, getting desperate, says, 'Okay, 30% discount and I'll throw in a free radio.' The woman smiles and says, 'I'll take it, but only if you also give me a free tank of fuel.' The dealer agrees and they make the deal. As the woman is driving away, the dealer turns to his assistant and says, 'That woman drives a hard bargain!' The assistant replies, 'Yes, but she paid more than the car is worth. We still made a profit.'\u{1F602}\u{1F602}`,
            type: "long"
        },
        {
            id: 27,
            joke: `Why did the Nigerian man bring a ladder to the bar? Because he heard the drinks were on the house!\u{1F92D}`,
            type: "short"
        },
        {
            id: 28,
            joke: `Nigerian parents will beat you for losing money, then give you money to go and buy ice block to cool down the pain. The logic is something even Harvard cannot teach. \u{1F606}\u{1F606}`,
            type: "long"
        },
        {
            id: 29,
            joke: "How does a Nigerian man make a decision? He flips a coin and then does what he wanted to do anyway.",
            type: "short"
        },
        {
            id: 30,
            joke: `A man bought a new alarm clock. First morning, it did not ring. He woke up late. Second morning, it did not ring again. On the third day, he returned it to the shop and said, 'This alarm is not working.' The seller looked at it and said, 'But sir, it rang yesterday.' The man replied, 'Yes. But I was sleeping.'`,
            type: "long"     
        },
];

module.exports = jokes;