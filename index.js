function shout(aCall){
  return aCall.toUpperCase();
}

function whisper(aCall){
  return aCall.toLowerCase();
}

function logShout(aCall){
  console.log(aCall.toUpperCase());
}

function logWhisper(aCall){
  console.log(aCall.toLowerCase());
}

function sayHiToGrandma(aCall){
  if(aCall.toLowerCase() === aCall){
    return "I can't hear you!";
  }
}