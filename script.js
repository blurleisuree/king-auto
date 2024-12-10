initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [28.6, 59.366],
                zoom: 14,
            }
        },
        [
            new YMapDefaultSchemeLayer(), // Слой схемы карты
        ]
    );

    // Создаем GeoJSON-объект для маркера
    const markerFeature = {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [28.6, 59.366] }, // Долгота, широта
        properties: {
            balloonContent: 'Мой маркер', // Текст в балуне
        },
    };


    // Создаем слой для отображения маркера
    const featuresLayer = new YMapDefaultFeaturesLayer({
        features: [markerFeature],
    });

    // Добавляем слой с маркером на картус
    map.addChild(featuresLayer);



    emailjs.init("Ne9DUhSlhsSeh3FS-");
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Отключаем стандартное поведение формы
        form.reset();
        openMessage();

        // Отправка формы через EmailJS
        emailjs.sendForm('service_r35i1zp', 'template_c9ye3xd', this)
            .then(function () {
                alert('Сообщение успешно отправлено!');
            }, function (error) {
                alert('Ошибка отправки: ' + JSON.stringify(error));
            });
    });

    const message = document.getElementById('message')
    const body = document.getElementsByTagName('body')[0];
    const openMessage = () => {
        message.classList.add('active')
        body.classList.add('active')
    }

    const messageBtn = document.getElementById('message__button')
    const closeMessage = () => {
        message.classList.remove('active')
        body.classList.remove('active')
    }
    messageBtn.addEventListener('click', closeMessage)
}