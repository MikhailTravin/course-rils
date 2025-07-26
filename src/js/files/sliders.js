/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Перечень слайдеров
// Проверяем, есть ли слайдер на стронице
if (document.querySelector('.result__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.result__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		speed: 800,

		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		lazy: true,

		// Пагинация
		pagination: {
			el: '.result__pagination',
			clickable: true,
		},

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.result__arrow-prev',
			nextEl: '.result__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.1,
				spaceBetween: 8,
			},
			390: {
				slidesPerView: 1.1,
				spaceBetween: 8,
			},
			479.98: {
				slidesPerView: 1.7,
				spaceBetween: 8,
			},
			600: {
				slidesPerView: 2.1,
				spaceBetween: 8,
			},
			768: {
				slidesPerView: 2.8,
				spaceBetween: 8,
			},
			991.98: {
				slidesPerView: 3.25,
				spaceBetween: 8,
			},
		},
	});
}
