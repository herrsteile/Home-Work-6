'use strict';

/*
    TV: Телевизор,
    Laptop: Ноутбук,
    Smartphone: Смартфон,
    Fridge: Холодильник,
    Boiler: Бойлер,
    Stove: Печь,
    Washing Machine: Стиральная машина,
    Vacuum Cleaner: Пылесос,
    Conditioner: Кондиционер,
    Iron: Утюг,
    Teapot: Чайник,
    Electric Shaver: Электро-бритва,
    Toaster: Тостер,
    Coffee Machine: Кофемашина
*/
const line = '--------------------\n'
const jsonProducts = '[{"category":"TV","price":1500,"manufacturer":"Sony","createdAt":"2019-05-28T17:55:29.945Z"},{"category":"Laptop","price":1200,"manufacturer":"Acer","createdAt":"2019-05-28T19:55:29.946Z"},{"category":"Smartphone","price":750,"manufacturer":"iPhone","createdAt":"2018-03-08T10:45:00.000Z"},{"category":"Fridge","price":1850,"manufacturer":"Vestfrost","createdAt":"2018-05-28T17:55:29.946Z"},{"category":"Boiler","price":500,"manufacturer":"Indesit","createdAt":"2014-12-25T08:30:00.000Z"},{"category":"Stove","price":700,"manufacturer":"Gorenje","createdAt":"2018-09-17T11:00:00.000Z"},{"category":"Washing Machine","price":850,"manufacturer":"Electrolux","createdAt":"2019-05-28T18:55:29.946Z"},{"category":"Vacuum Cleaner","price":450,"manufacturer":"Samsung","createdAt":"2019-05-13T17:55:29.946Z"},{"category":"Сonditioner","price":1000,"manufacturer":"Toshiba","createdAt":"2017-07-01T00:00:00.000Z"},{"category":"Iron","price":320,"manufacturer":"Philips","createdAt":"2013-11-18T07:20:00.000Z"},{"category":"Teapot","price":400,"manufacturer":"Bosch","createdAt":"2016-10-03T09:45:00.000Z"},{"category":"Electric Shaver","price":440,"manufacturer":"Braun","createdAt":"2019-05-29T03:55:29.946Z"},{"category":"Toaster","price":620,"manufacturer":"Tefal","createdAt":"2015-05-29T03:55:29.946Z"},{"category":"Coffee Machine","price":1300,"manufacturer":"Delonghi","createdAt":"2019-05-28T02:55:29.946Z"}]';

let filterProducts = null;

(function run() {
    while (true) {
        let stringJson = JSON.parse(jsonProducts, function (key, value) {
            if (key === 'createdAt') {
                const now = new Date(value);
                return now.toLocaleString();
            };
            return value;
        });

        filterProducts = stringJson;

        const mainMenu = prompt('Main menu:\n' +
            'a) View product list\n' +
            'b) Set filters\n' +
            'c) Sort Products\n' +
            'q) Quit', '');

        switch (mainMenu) {

            // View product list
            case 'a':
                console.log(line + 'View product list\n' + line);
                console.table(stringJson);




                break;
            // Set filters
            case 'b':
                console.log(line + 'Set filters\n' + line);
                const filtersMenu = prompt('Set Filters:\n' +
                    'a) Category\n' +
                    'b) Price\n' +
                    'c) Manufacturer\n' +
                    'd) Created at\n' +
                    'q) Main menu', '')

                switch (filtersMenu) {
                    // Category
                    case 'a':
                        console.log('%cSet category:', 'color: green');
                        const letterIterator = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',]
                        stringJson.forEach(obj => {
                            for(let i = 0; i < letterIterator.length; i++)
                            console.table(letterIterator[i] + ')' + obj.category);
                        });
                        const category = prompt('Select a category from the console:')

                        // (function filter() {
                        //     filterProducts = stringJson.filter()
                        // })();

                        // console.log(stringJson);

                        break;

                    // Price
                    case 'b':


                        break;

                    // Manufacturer
                    case 'c':


                        break;

                    // Created at
                    case 'd':


                        break;

                    // Main menu
                    case 'q':
                        break;

                }
                break;

            // Sort Products
            case 'c':

                console.log(line + 'Sort Products\n' + line);




                break;
            // Quit
            case 'q':
                alert('Come again!')
                console.log(line + 'Quit\n' + line);
                return;

            default:
                alert('Enter: a, b, c, q');
        }
    };
})();