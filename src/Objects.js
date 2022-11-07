/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/

export function personUpdate(data) {
    switch (data.gender) {
        case 'female':
            delete data.age;
            break;
        case 'male':
            if (!data.hasOwnProperty('income')) data.income = 100000;
            break;
    }
    return data;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    let list = Object.getOwnPropertyNames(obj1)
        .concat(Object.getOwnPropertyNames(obj2))
        .concat(Object.getOwnPropertyNames(obj3))
        .filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        });
    return list.sort();
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    let array = [];
    for (let i = 0; i < count; ++i) {
        let objClone = obj;
        let objId = {};
        objId.id = i;
        array.push({ ...objId, ...objClone });
    }
    return array;
}
