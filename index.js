// Write your code in this file!
const currentUser = 'Said Omar';
// const welcomeMessage = currentUser;
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
// const shortGreeting = `Welcome, ${currentUser}`;
const shortGreeting = `Welcome, ${currentUser.slice(0, 4)}!`;