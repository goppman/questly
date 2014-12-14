function questly() {

var myForm, nameField, questField, userData, colorField, secreteAgentField, choiceField ;
myForm = document.querySelector('form');
nameField = myForm.elements.name;
questField = myForm.elements.quest;
colorField = myForm.elements.color;
secretAgentField = myForm.elements.secret_name;
choiceField = myForm.elements.choice;

function getValues(ev) {
  ev.preventDefault();

  userData = {
    name: nameField.value,
    secretAgent: secretAgentField.value,
    quest: questField.value,
    color: colorField.value,
    person: this.elements.person.checked,
    choice: this.elements.choice.checked


  }

  writeData();
}

function writeData() {
  var storyDiv = document.getElementById('story');
 var story;
  var personStory = '';
  if (userData.person){

    personStory = 'You just brought a friend with you!';
  }


 var nameToUseAlways = userData.name;

 if (userData.choice) {

   nameToUseAlways = userData.secretAgent;
 }

 story = nameToUseAlways + ', ' + userData.quest + ', '  + personStory + ' ' +
 userData.color;

  storyDiv.innerHTML = story;
}

myForm.onsubmit = getValues;


}

questly();
