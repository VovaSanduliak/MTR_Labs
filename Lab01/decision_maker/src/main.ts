import './style.css';

const Rating = {
  excellent: 10,
  good: 8,
  satisfied: 6,
  badly: 3,
  awful: 1,
};

let feelings = {
  home_rain: Rating.good,
  home_sun: Rating.badly,
  forest_rain: Rating.awful,
  forest_sun: Rating.excellent,
};

export const makeDecision = () => {
  const rainProbabilityInput = document.getElementById(
    'rain_probability_input'
  ) as HTMLInputElement;

  const homeGainElement: HTMLElement = document.getElementById('home_gain')!;
  const forestGainElement: HTMLElement =
    document.getElementById('forest_gain')!;

  const rainProbability: number = +rainProbabilityInput.value / 100 || 0;
  const sunProbability = 1 - rainProbability;

  const w_home =
    rainProbability * feelings.home_rain + sunProbability * feelings.home_sun;
  const w_forest =
    rainProbability * feelings.forest_rain +
    sunProbability * feelings.forest_sun;

  homeGainElement.innerHTML = w_home.toFixed(2);
  forestGainElement.innerHTML = w_forest.toFixed(2);
};

export const updateRatingsFromInputs = () => {
  const excellentInput = document.getElementById(
    'rating_excellent'
  ) as HTMLInputElement;
  const goodInput = document.getElementById('rating_good') as HTMLInputElement;
  const satisfiedInput = document.getElementById(
    'rating_satisfied'
  ) as HTMLInputElement;
  const badlyInput = document.getElementById(
    'rating_badly'
  ) as HTMLInputElement;
  const awfulInput = document.getElementById(
    'rating_awful'
  ) as HTMLInputElement;

  Rating.excellent = +excellentInput.value || 10;
  Rating.good = +goodInput.value || 8;
  Rating.satisfied = +satisfiedInput.value || 6;
  Rating.badly = +badlyInput.value || 3;
  Rating.awful = +awfulInput.value || 1;
};

const updateFeelings = () => {
  feelings.home_rain = Rating.good;
  feelings.home_sun = Rating.badly;
  feelings.forest_rain = Rating.awful;
  feelings.forest_sun = Rating.excellent;
};

const decisionBtn = document.getElementById('decision-btn');
decisionBtn?.addEventListener('click', () => {
  updateRatingsFromInputs();
  updateFeelings();
  makeDecision();
});
