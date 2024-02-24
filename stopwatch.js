      
      const btnElement = document.querySelector('.js-start-button');
      const timeElement = document.querySelector('.js-time-paragraph');
      const stopElement = document.querySelector('.js-stop-button')
      const resetBtn = document.querySelector('.js-reset-button');
      let countSeconds = 0;
      let countMinutes = 0;
      let countHours = 0;
      let intervalId;
      timeElement.innerHTML = `0h 0m 0s`;
      function countTime(){
       intervalId = setInterval(function(){
          countSeconds++;
          timeElement.innerHTML = `${countHours}h ${countMinutes}m ${countSeconds}s`;
          if (countSeconds === 60){
            countMinutes += 1;
            countSeconds = 0;
          }
          if (countMinutes === 60){
            countHours += 1;
            countMinutes = 0;
          }
      }, 1000);
    }

    function stopTime(){
      clearInterval(intervalId);
    }

    function resetTimer(){
      timeElement.innerHTML = `0h 0m 0s`;
      stopTime();
      countSeconds = 0;
      countMinutes = 0;
      countHours = 0;
      }
      
      btnElement.addEventListener('click', countTime);
      stopElement.addEventListener('click', stopTime);
      resetBtn.addEventListener('click', resetTimer);
