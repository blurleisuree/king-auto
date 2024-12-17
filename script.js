// ymaps.ready(init);
// function init() {
//     let myMap = new ymaps.Map("map", {
//         center: [59.88616056964439, 30.321915197088146],
//         zoom: 12,
//         controls: ["zoomControl", 'fullscreenControl'],
//     });

//     let placemark = new ymaps.Placemark([59.88616056964439, 30.321915197088146], {
//         balloonContentBody: [
//             '<address>',
//             '<strong>Офис ООО "Глобал Сервис" в Санкт-Петербурге</strong>',
//             '<br/>',
//             'Адрес: Московский проспект, 140 к.2 5 этаж',
//             '<br/>',
//             'Время работы:',
//             '<br/>',
//             'Пн-Пт: 09:30 - 18:30',
//             '<br/>',
//             'Сб-Вс: выходной',
//             '</address>'
//         ].join('')
//     }, {
//         preset: 'islands#redDotIcon'
//     });
//     myMap.geoObjects.add(placemark);
// }

const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;
const map = new YMap(
    document.getElementById('map'),
    {
        location: {
            center: [28.596606, 59.365661],
            zoom: 14,
        }
    }
);
map.addChild(new YMapDefaultSchemeLayer());
map.addChild(new YMapDefaultFeaturesLayer());
const content = document.createElement('section');
const marker = new YMapMarker({
    coordinates: [28.596606, 59.365661], // Координаты
    title: 'Красная площадь',           // Заголовок
    subtitle: 'Центр Москвы',           // Подзаголовок
    hint: 'Щелкните, чтобы узнать больше',
    draggable: false,                   // Маркер нельзя перемещать
    balloon: {
        content: '<h3>Москва</h3><p>Столица России</p>',
        autoOpen: false
    },
    icon: {
        url: '/public/imgs/place.png',
        size: [40, 40],
        anchor: [20, 40]
    }
}
);
// const marker = new YMapMarker(
//     {
//         coordinates: [28.596606, 59.365661],
//         draggable: false,
//         mapFollowsOnDrag: true
//     },
//     content
// );
map.addChild(marker);
// content.innerHTML = '<img src="/public/imgs/place.png" alt="marker" />';



emailjs.init("Ne9DUhSlhsSeh3FS-");
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Отключаем стандартное поведение формы
    form.reset();
    openMessage();

    // Отправка формы через EmailJS
    emailjs.sendForm('service_r35i1zp', 'template_c9ye3xd', this)
        .then(function () {
            console.log('Сообщение успешно отправлено!');
        }, function (error) {
            console.log('Ошибка отправки: ' + JSON.stringify(error));
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
