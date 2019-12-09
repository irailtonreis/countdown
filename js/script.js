import Countdown from './countdown.js';

const tempoParaONatal = new Countdown('24 December 2019 23:59:59 GMT-0300');
const tempoParaOAnoNovo = new Countdown('31 December 2019 23:59:59 GMT-0300');

const anoNovo = document.getElementById('ano');
const natal = document.getElementById('natal');

if(natal) {
  setInterval(() => {
    const day  = natal.querySelector('.days');
    day.innerText = tempoParaONatal.total.days;
  
    const hours  = natal.querySelector('.hours');
    hours.innerText = tempoParaONatal.total.hours;
  
    const minutes  = natal.querySelector('.minutes');
    minutes.innerText = tempoParaONatal.total.minutes;
  
    const secunds  = natal.querySelector('.secunds');
    secunds.innerText = tempoParaONatal.total.secunds;
  
  }, 1000);

} 

if(anoNovo){
  setInterval(() => {
    const day  = anoNovo.querySelector('.days');
    day.innerText = tempoParaOAnoNovo.total.days;
  
    const hours  = anoNovo.querySelector('.hours');
    hours.innerText = tempoParaOAnoNovo.total.hours;
  
    const minutes  = anoNovo.querySelector('.minutes');
    minutes.innerText = tempoParaOAnoNovo.total.minutes;
  
    const secunds  = anoNovo.querySelector('.secunds');
    secunds.innerText = tempoParaOAnoNovo.total.secunds;
    
  }, 1000);
}
