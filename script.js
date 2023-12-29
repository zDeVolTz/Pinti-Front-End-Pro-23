// Створити клас SuperMath.

// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath. 


class SuperMath {
    // Делаем приватное поле доступное только внутри класса с операторами
    #validOperators = ['+', '-', '*', '/', '%'];

  check(obj) {
    //Деструктизация переданного обьекта
    const { X , Y , znak } = obj;
    

    if (this.#validOperators.includes(znak)) {
      const answer = confirm(`Желаете выполнить действие ${znak} c ${X} и ${Y} ?`);
      answer ? console.log(`Результат операции: ${this.calculate(+X, +Y, znak)}`) : this.input();
    } else {
      alert('Неправильный математический оператор. Пожалуйста введите данные снова');
      this.input();
    }
  }

  input() {
    //Запрашиваем новые данные через 3 промта
    const X = prompt('Введите (X):');
    
    const Y = prompt('Введите (Y):');
   
    const znak = prompt('Введите один из операторов (+ - * / %)');
    //Добавляем их в объект
    //Обрабатываем кнопку отмены
    if( X === null || Y === null || znak === null ){
      return;
    //Обрабываем пустую строку и не число в качестве параметров
    }

    else if (isNaN(X) || 
             isNaN(Y) || 
             X.trim() === '' || 
             Y.trim() === '' ||
             !this.#validOperators.includes(znak)) {
      alert('Вы ввели некорректные данные повторите ввод');
      this.input()
    } else {
      const obj = { X, Y, znak };
      //Вызываем метод check c новыми параметрами
      this.check(obj);
    }

  }
  //Метод калькуляции
  calculate(X, Y, znak) {
    switch (znak) {
      case '+':
        return X + Y;
      case '-':
        return X - Y;
      case '*':
        return X * Y;
      case '/':
        if(Y === 0){
          return "Деленение на 0 невозможно"
        } else {
          return X / Y;
        }
      case '%':
        return X % Y;
      default:
        return NaN;
    }
  }
}

// Приклад використання
const p = new SuperMath();
let obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);

obj = { X: 12, Y: 0, znak: "/" };
p.check(obj);

obj = { X: -44, Y: 822, znak: "%" };
p.check(obj);

obj = { X: -44, Y: 822, znak: "V" };
p.check(obj);