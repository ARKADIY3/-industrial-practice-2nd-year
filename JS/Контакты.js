var isTimeVisible = false;

function displayCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds;
    if (isTimeVisible) {
      document.getElementById('time').innerHTML = '';
      isTimeVisible = false;
    } else {
      document.getElementById('time').innerHTML = timeString;
      isTimeVisible = true;
    }
  }


  const form = document.getElementById('feedbackForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const feedback = document.getElementById('feedback').value;
  
    
    console.log('Письмо:', feedback);
    
  alert('Вы успешно отправили письмо');
  });
  
  