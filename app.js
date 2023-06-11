window.onload = function() {
  let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'the keys', 'the car'];
  let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
  
  // var allArr = [who, action, what, when];
  
  const chooseRandom = (arreglo) => {
    // for (let i = 0; i < 4; i++){
    //   console.log(allArr[0][0])

    // }

    const random = Math.floor(Math.random() * arreglo.length);
    return random;
  }

  const generateExcuse = () => {
    document.getElementById("excuse").innerHTML = who[chooseRandom(who)] + " " + action[chooseRandom(action)] + " " + what[chooseRandom(what)] + " " + when[chooseRandom(when)];
  }
  generateExcuse();
};
