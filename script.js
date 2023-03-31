$(document).ready(onReady);

function onReady() {
  console.log('We got this.')
  // add 🔥 to the div with id="Fire-and-Ice"
  $('#Fire-button').on('click', FlameThrower) 

  // add ❄️ to the div with id="Fire-and-Ice
  $('#Ice-button').on('click', FreezeRay) 

  // Function that retrieves values from
  // AffirmationInput AND AuthorInput upon
  // form submission
  $('.submit-button').on('click', createAffirmation)

} // End onReady

function FlameThrower() {
  $('#Fire-and-Ice').append('🔥') // add 🔥 to the div with id="Fire-and-Ice"
} // FlameThrower

function FreezeRay() {
  $('#Fire-and-Ice').append('❄️') // add ❄️ to the div with id="Fire-and-Ice"
} // End FreezeRay

function createAffirmation(event) {
  event.preventDefault();
  
  // Retrieve value of "AffirmationInput" and place into variable
  let Affirmation_Input = $('#AffirmationInput').val()
  console.log(Affirmation_Input);

  // Retrieve value of "AuthorInput" and place into variable
  let Author_Input = $('#AuthorInput').val()
  console.log(Author_Input);

  // Add both Affirmation_Input and Author_Input to 
  // the table within the id="tBody"
  $('tBody').append(`
      <tr>
        <td>${Affirmation_Input}</td>
        <td>${Author_Input}</td>
      </tr>
    `)

  // Clear out the values from the input lines.
  $('#AffirmationInput').val('')
  $('#AuthorInput').val('')

} // End createAffirmation
