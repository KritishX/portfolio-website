import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const jokes = [
  "A neural network walks into a bar. Bartender asks: 'What'll it be?' Network: 'I'm not sure, I'm still training.'",
  "Why did the developer go broke? Because he used up all his cache.",
  "My AI is very humble. It has a lot of 'hidden' layers.",
  "An optimist sees the glass half full. An ML engineer sees the data as biased.",
  "How many programmers does it take to change a light bulb? None, that's a hardware issue.",
  "I asked my AI if it could pass the Turing test. It asked me if I could.",
  "My model's accuracy is so high, it predicted I'd be reading this joke right now.",
  "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?'",
  "Why was the ML model so confident? It had high self-entropy.",
  "Life is short. Smile while you still have teeth (and before the AI takes over).",
  "Why do Java developers wear glasses? Because they don't C#.",
  "What is a computer's favorite beat? An algo-rhythm.",
  "Why did the Python programmer get rejected? He didn't know his class.",
  "I don't always test my code, but when I do, I do it in production.",
  "Why was the computer cold? It left its Windows open.",
  "Why did the constant break up with the variable? Because they changed.",
  "Artificial Intelligence is no match for Natural Stupidity.",
  "Why did the AI cross the road? To optimize the pathfinding algorithm.",
  "There are 10 types of people in the world: those who understand binary, and those who don't.",
  "What do you call a programmer from Finland? Nerdic.",
  "Why did the function stop calling? It had too many arguments.",
  "Debugging: Being the detective in a crime movie where you are also the murderer.",
  "How do you comfort a JavaScript bug? You console it.",
  "Why did the data scientist get lost in the forest? He followed the random forest path.",
  "I know a joke about UDP, but I'm not sure you'll get it.",
  "Why did the TCP packet show up late? It got retransmitted.",
  "My code doesn't work, I have no idea why. My code works, I have no idea why.",
  "What is the most used language in programming? Profanity.",
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "A programmer's wife tells him, 'Go to the store and get a loaf of bread. If they have eggs, get a dozen.' He returns with 13 loaves of bread.",
  "Why did the edge server go bankrupt? It was living on the edge.",
  "What's a pirate's favorite programming language? R.",
  "Why don't bachelors like Git? They are afraid to commit.",
  "I have a joke about recursion, but I have a joke about recursion.",
  "Why did the private class break up with the public class? It needed more space.",
  "How does a computer get drunk? It takes screenshots.",
  "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
  "Why did the database administrator leave his wife? She had one-to-many relationships.",
  "What do you call a computer that sings? A Dell.",
  "Why did the developer quit his job? He didn't get arrays.",
  "What is a programmer's favorite hangout place? Foo Bar.",
  "Why did the smartphone go to therapy? It lost its connection.",
  "Why was the computer tired when it got home? It had a hard drive.",
  "What do you call an iPhone that isn't kidding around? Dead Siri.",
  "Why did the web developer walk out of the restaurant? The layout wasn't responsive.",
  "How do you tell if a variable is undefined? You ask it.",
  "Why did the boolean break up with the integer? It just wasn't true love.",
  "Why was the robot so bad at soccer? It had a hard time kicking the bucket.",
  "What do you call a group of 8 Hobbits? A Hobbyte.",
  "Why did the computer keep sneezing? It had a virus.",
  "Why did the developer bring a ladder to work? To reach the high-level language.",
  "What do you call a snake that programs? A Python."
];

const SystemInsights: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % jokes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ 
      minHeight: '32px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      marginBottom: 'var(--spacing-xl)',
      padding: '0 var(--spacing-md)'
    }}>
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mono-text"
          style={{ 
            fontSize: 'clamp(9px, 2.5vw, 10px)', 
            color: 'var(--text-secondary)', 
            letterSpacing: '0.05em',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.5
          }}
        >
          <span style={{ color: 'var(--nepal-blue)', fontWeight: 800 }}>[SYSTEM_INSIGHT]:</span> {jokes[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default SystemInsights;
