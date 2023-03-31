$(document).ready(onReady);

function onReady() {
  console.log('We got this.')
  // add 🔥 to the div with id="Fire-and-Ice"
  $('#Fire-button').on('click', FlameThrower) 

  // add ❄️ to the div with id="Fire-and-Ice
  $('#Ice-button').on('click', FreezeRay) 

  // Function that retrieves values on form submission
  $('.')

} // End onReady

function FlameThrower() {
  $('#Fire-and-Ice').append('🔥') // add 🔥 to the div with id="Fire-and-Ice"
} // FlameThrower

function FreezeRay() {
  $('#Fire-and-Ice').append('❄️') // add ❄️ to the div with id="Fire-and-Ice"
} // End FreezeRay