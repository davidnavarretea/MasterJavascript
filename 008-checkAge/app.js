function checkAge(name, age) {
  switch(age < 21){
    case true:
      return `Go home, ${name}!`;
      break;
    default:
      return `Welcome, ${name}!`
  }
}