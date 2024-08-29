//TASK#1
let temperature = 23;

if (temperature < 0) {
    console.log('Опасно холодно!');
} else if (temperature >= 0 && temperature <= 5) {
    console.log('Очень холодно');
} else if (temperature > 5 && temperature <= 20) {
    console.log('Прохладно');
} else if (temperature > 20) {
    console.log('Тепло');
}
//TASK#2
let cost = 27490;

if (cost >= 5000) {
    console.log('Ваша скидка 10%!');
} else if (cost >= 1000) {
    console.log('Ваша скидка 5%!');
} else {
    console.log('К сожалению, у Вас нет скидки');
}
//TASK#3
let userAge = 24;

if (userAge < 18) {
    console.log('Вы подросток');
} else if (userAge >= 18 && userAge <= 65) {
    console.log('Вы взрослый');
} else if (userAge > 65) {
    console.log('Вы пенсионер');
} else {
    console.log('Неверные данные');
}
//TASK#4
let time = 21;

if (time >= 9 && time <= 18) {
    console.log('Магазин открыт');
} else {
    console.log('Магазин закрыт');
}
//TASK#5
let score = 64;

if (score >= 90 && score <= 100) {
    console.log('Ваш результат: Отлично');
} else if (score >= 70 && score < 90) {
    console.log('Ваш результат: Хорошо');
} else if (score >= 50 && score < 70) {
    console.log('Ваш результат: Удовлетворительно');
} else if (score < 50) {
    console.log('Ваш результат: Неудачно');
} else {
    console.log('Неверные данные');
}