function questly() {

var myForm, nameField, questField, userData, colorField ;
myForm = document.querySelector('form');
nameField = myForm.elements.name;
questField = myForm.elements.quest;
colorField = myForm.elements.color;

function getValues(ev) {
  ev.preventDefault();

  userData = {
    name: nameField.value,
    quest: questField.value,
    color: colorField.value,
    person: this.elements.person.checked
  }

  writeData();
}

function writeData() {
  var storyDiv = document.getElementById('story');
  var personStory = '';
  if (userData.person){

    personStory = 'You just brought a friend with you!';
  }

  storyDiv.innerHTML = userData.name + ', ' + userData.quest + ', '  + personStory + ' ' +
  userData.color;
}

myForm.onsubmit = getValues;


}

questly();
