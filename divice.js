
const items = [
    {
    name : 'Модем + Сим-карта',
     image: './image/dev1.svg',
     descr: `4G интернет со скоростью до 150 МбитРаботает от USBЧто ещё хорошего:
            <br>  - Стоимость интернета зависит от скорости — меняйте в любое время.
            <br> - Бесплатный тест-драйв интернета
            <br> - 48 часов на максимальной скорости.
            <br> - Тест-драйв устройства — 14 дней. Если не подойдёт, вернём за него деньги. Для этого сохраните чек и упаковку.
            <br> - Доставка бесплатная везде, кроме Московской и Ленинградской областей — до 250 ₽.`
    },
    {
    name : 'Роутер + Сим-карта',
     image: './image/dev2.svg',
     descr: `- Раздаёт Wi-Fi на 8 устройств одновременно
                <br>  - 4G интернет со скоростью до 150 Мбит- Работает до 8 часов без зарядки
                <br> - Заряжается от USB или розетки- Стоимость интернета зависит от скорости
                <br> - изменяйте в любое время.
                <br> - Бесплатный тест-драйв
                <br> - 48 часов на максимальной скорости.
                <br> - Тест-драйв устройства - 14 дней. Если не подойдёт, вернём за него деньги. Для этого сохраните чек и упаковку.
                <br> - Доставка бесплатная везде, кроме Московской и Ленинградской областей — до 250 ₽.`
    },
    {
    name : 'Роутер для дома + Сим-карта',
     image: './image/dev3.svg',
     descr: `<br>    - Домашний Wi-Fi без проводов- 4G интернет со скоростью до 150 Мбит
                    <br>    - Раздача на 32 устройства
                    <br>    - Можно подключить проводной интернет
                    <br>    - Стоимость интернета зависит от скорости - меняйте в любое время.
                    <br>    - Тест-драйв устройства - 14 дней. Если не подойдёт, вернём за него деньги. Для этого сохраните чек и упаковку.
                    <br>    - Доставка бесплатная везде, кроме Московской и Ленинградской областей - до 250 ₽.`
    },
    {
    name : 'Ready 4G + Сим-карта',
     image: './image/dev4.svg',
     descr: `       <br>    - Раздаёт Wi-Fi на 8 устройств одновременно
                    <br>    - 4G интернет со скоростью до 150 Мбит
                    <br>    - Работает до 8 часов без зарядки
                    <br>    - Заряжается от USB или розетки
                    <br>    - Стоимость интернета зависит от скорости
                    <br>    - изменяйте в любое время.
                    <br>    - Бесплатный тест-драйв 
                    <br>    - 48 часов на максимальной скорости.
                    <br>    - Тест-драйв устройства - 14 дней. Если не подойдёт, вернём за него деньги. Для этого сохраните чек и упаковку.
                    <br>    - Доставка бесплатная везде, кроме Московской и Ленинградской областей - до 250 ₽.`
    },
]

const section = document.querySelector('#section')

section.addEventListener('click', (e) => {
        if (e.target.nodeName === 'BUTTON'){
            const id = e.target.getAttribute('id')
            localStorage.setItem(`item-${id}`, JSON.stringify(items[id]))
        }
    })