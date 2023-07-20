const activityElement = document.getElementById('activity');

async function loadActivity() {
  const response = await fetch('https://www.boredapi.com/api/activity');
  const activity = await response.json();
  console.log(activity);
  const { activity: title, link, price, type } = activity;
  const cardElement = document.createElement('div');
  cardElement.className = 'card';
  const activityNameElement = document.createElement('span');
  activityNameElement.classList.add('card-element', 'title');
  const linkElement = document.createElement('src');
  linkElement.className = 'src';
  activityNameElement.textContent = title;
  linkElement.src = link;
  cardElement.append(activityNameElement, linkElement);
  activityElement.append(cardElement);
}

loadActivity();
