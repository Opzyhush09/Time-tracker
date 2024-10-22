

const timeData = {
    daily: {
        work: { current: '5hrs', previous: 'Last Day - 7hrs' },
        play: { current: '1hr', previous: 'Last Day - 2hrs' },
        study: { current: '0hrs', previous: 'Last Day - 1hr' },
        exercise: { current: '1hr', previous: 'Last Day - 1hr' },
        social: { current: '0hrs', previous: 'Last Day - 1hr' },
        selfCare: { current: '0hrs', previous: 'Last Day - 1hr' }
    },
    weekly: {
        work: { current: '32hrs', previous: 'Last Week - 36hrs' },
        play: { current: '10hrs', previous: 'Last Week - 8hrs' },
        study: { current: '4hrs', previous: 'Last Week - 7hrs' },
        exercise: { current: '4hrs', previous: 'Last Week - 5hrs' },
        social: { current: '5hrs', previous: 'Last Week - 10hrs' },
        selfCare: { current: '2hrs', previous: 'Last Week - 2hrs' }
    },
    monthly: {
        work: { current: '120hrs', previous: 'Last Month - 130hrs' },
        play: { current: '40hrs', previous: 'Last Month - 50hrs' },
        study: { current: '20hrs', previous: 'Last Month - 25hrs' },
        exercise: { current: '18hrs', previous: 'Last Month - 20hrs' },
        social: { current: '25hrs', previous: 'Last Month - 30hrs' },
        selfCare: { current: '10hrs', previous: 'Last Month - 15hrs' }
    }
};

const timeframeLinks = document.querySelectorAll('.timeframe-options a');
const workTime = document.querySelector('.Work h3');
const workPrevious = document.querySelector('Work p');
const playTime = document.querySelector('.Play h3');
const playPrevious = document.querySelector('.Play p');
const studyTime = document.querySelector('.Study h3');
const studyPrevious = document.querySelector('.Study p');
const exerciseTime = document.querySelector('.Exercise h3');
const exercisePrevious = document.querySelector('.Exercise p');
const socialTime = document.querySelector('.Social h3');
const socialPrevious = document.querySelector('.Social p');
const selfCareTime = document.querySelector('.Self-Care h3');
const selfCarePrevious = document.querySelector('.Self-Care p');

function updateTimeframe(timeframe){
    const time = timeData[timeframe];


         // Update time for each category
    workTime.textContent = time.work.current;
    workPrevious.textContent = time.work.previous;

    playTime.textContent = time.play.current;
    playPrevious.textContent = time.play.previous;

    studyTime.textContent = time.study.current;
    studyPrevious.textContent = time.study.previous;

    exerciseTime.textContent = time.exercise.current;
    exercisePrevious.textContent = time.exercise.previous;

    socialTime.textContent = time.social.current;
    socialPrevious.textContent = time.social.previous;

    selfCareTime.textContent = time.selfCare.current;
    selfCarePrevious.textContent = time.selfCare.previous;
}

            // Add event listeners to each timeframe link 
    timeframeLinks.forEach(link => {
        link.addEventListener('click',(e) =>{
            e.preventDefault();

            // Remove active class from all the links

        timeframeLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link 
        e.target.classList.add('active');

            // Get the clicked timeframe (daily, weekly, monthly)

        const selectedTimeframe = e.target.textContent.toLowerCase();

            //Update the time display based on the selected timeframe
            updateTimeframe(selectedTimeframe);
        });
    });
    updateTimeframe('weekly');