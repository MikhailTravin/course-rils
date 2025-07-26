// Контейнер со всеми видео
const videosWrap = document.querySelector('.videos');

// Обработчик клика
if (videosWrap) {
    const videoEventHandler = (e) => {
        // Если у e.target нет класа video, значит данный элемент не является видео
        if (!e.target.classList.contains('video')) return false;
        const video = e.target,
            allVideos = document.querySelectorAll('.video');

        const overlay = document.querySelectorAll('.play');

        // Останавливаем все видео
        allVideos.forEach((source, index) => {
            if (source === video) return;
            source.classList.remove('isPlaying');
            source.pause();
        })
        // Если у видео есть класс isPlaying - тогда остановить его, если нет - запустить
        if (video.classList.contains('isPlaying')) {
            if (overlay) {
                video.closest('div').querySelector('.play').classList.add('_active');
            }
            video.play()
        } else {
            if (overlay) {
                video.closest('div').querySelector('.play').classList.remove('_active');
            }
            video.pause()
        }
        video.classList.toggle('isPlaying')

        window.addEventListener('click', e => {
            const target = e.target
            if (!target.closest('.popup__video') && !target.closest('.about-course__video')) {
                if (overlay) {
                    video.closest('div').querySelector('.play').classList.remove('_active');
                }
                video.pause()
                video.classList.remove('isPlaying')
            }
        })
    }
    // Event listener на контейнер со всеми видео
    videosWrap.addEventListener('click', (e) => videoEventHandler(e))

}