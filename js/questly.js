//var name = prompt('What is your name?');
//document.writeln('<p>Hi there, '+ name +'! </p>');


var name = prompt('What is your name?');
if (!name || name === 'null') {
  name = 'Stupidhead';
}

var quest = prompt('What is your quest?');
if (!quest || quest === 'null') {
  quest = 'To become more cooperative';
}

var color = prompt('What is your favorite color?')
if (!color || color === 'null') {
  color = 'clear';
}

document.writeln('<p>There once was a warrior named ' + name +
' on a mighty quest indeed: ' + quest + '. Luckily, ' + name +
' was wearing lucky socks&mdash;colored ' + color + '</p>');
