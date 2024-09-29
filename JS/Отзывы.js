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



  
const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');
const clearReviewsButton = document.getElementById('clearReviews');

let reviews = [];

// Загрузка отзывов из localStorage (если есть)
if (localStorage.getItem('reviews')) {
  reviews = JSON.parse(localStorage.getItem('reviews'));
  renderReviews();
}

reviewForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const reviewText = document.getElementById('reviewText').value;

  // Создаем объект отзыва
  const review = {
    name: name,
    text: reviewText
  };

  // Добавляем отзыв в массив
  reviews.push(review);

  // Сохраняем отзывы в localStorage
  localStorage.setItem('reviews', JSON.stringify(reviews));

  // Очищаем поля формы
  reviewForm.reset();

  // Отрисовываем отзывы
  renderReviews();
});

// Функция для рендеринга отзывов
function renderReviews() {
  reviewsContainer.innerHTML = ''; 

  reviews.forEach(function(review, index) {
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.innerHTML = `
      <div class="name">${review.name}</div>
      <div>${review.text}</div>
      <button class="delete-button" data-index="${index}">Удалить</button> 
    `;
    reviewsContainer.appendChild(reviewDiv);
  });

  // Добавляем обработчики событий для кнопок удаления
  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const index = parseInt(this.dataset.index); // Получаем индекс отзыва
      deleteReview(index);
    });
  });
}

// Функция для удаления отзыва
function deleteReview(index) {
  // Удаляем отзыв из массива
  reviews.splice(index, 1);

  // Обновляем localStorage
  localStorage.setItem('reviews', JSON.stringify(reviews));

  // Перерисовываем отзывы
  renderReviews();
}

// Кнопка очистки отзывов
clearReviewsButton.addEventListener('click', function() {
  reviews = [];
  localStorage.removeItem('reviews');
  reviewsContainer.innerHTML = '';
});