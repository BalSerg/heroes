const filesSelfData1 = []; // Массив для хранения выбранных файлов 1

let alphabet = ['А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е', 'Ё', 'ё', 'Ж', 'ж', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ', 'ъ', 'Ы', 'ы', 'ь', 'Э', 'э', 'Ю', 'ю', 'Я', 'я', '-'],
    months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
    alphabetSmall = [',', '.', ' ', ...alphabet],
    middleSpread = ['/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    bigSpread = [':', ';', '(', ')', '№', ...middleSpread],
    alphabetMiddle = [...alphabetSmall, ...middleSpread],
    alphabetBig = [...alphabetSmall, ...bigSpread],
    rank = [
        {
            title: 'Рядовой состав:',
            content: [
                {
                    name: 'красноармеец',
                    text: '',
                    id: 4238238
                },
                {
                    name: 'ефрейтор',
                    text: '',
                    id: 475482
                }
            ]
        },
        {
            title: 'Младший командный состав:',
            content: [
                {
                    name: 'младший сержант',
                    text: '',
                    id: 4298666
                },
                {
                    name: 'сержант',
                    text: '',
                    id: 157696
                },
                {
                    name: 'старший сержант',
                    text: '',
                    id: 12335006
                },
                {
                    name: 'старшина',
                    text: '',
                    id: 12563055
                },
            ]
        },
        {
            title: 'Средний командный состав:',
            content: [
                {
                    name: 'младший лейтенант',
                    text: '',
                    id: 87410916
                },
                {
                    name: 'лейтенант',
                    text: '',
                    id: 186024
                },
                {
                    name: 'старший лейтенант',
                    text: '',
                    id: 330459
                },
                {
                    name: 'капитан',
                    text: '',
                    id: 19100
                },
            ]
        },
        {
            title: 'Старший командный состав:',
            content: [
                {
                    name: 'майор',
                    text: '',
                    id: 983927
                },
                {
                    name: 'подполковник',
                    text: '',
                    id: 104777410
                },
                {
                    name: 'полковник',
                    text: "",
                    id: 104680
                },
            ]
        },
        {
            title: 'Высший командный состав:',
            content: [
                {
                    name: 'генерал-майор',
                    text: '',
                    id: 157148
                },
                {
                    name: 'генерал-лейтенант',
                    text: '',
                    id: 152951
                },
                {
                    name: 'генерал-полковник',
                    text: '',
                    id: 12789688
                },
                {
                    name: 'генерал армии',
                    text: '',
                    id: 2604857
                },
                {
                    name: 'маршал Советского Союза',
                    text: '',
                    id: 125168
                },
            ]
        }
    ],
    awards = [
        {
            title: 'Ордена',
            content: [
                {
                    name: 'Орден «Победа»',
                    text: '(учреждён 8 ноября 1943 года) — одна из самых известных и красивых наград времён Великой Отечественной войны.',
                    url: 'images/awards/award1.png',
                    id: 465316
                },
                {
                    name: 'Орден Ленина',
                    text: '(учреждён в 1930 году) — самая почётная награда, вручалась как военным, так и гражданским лицам за выдающиеся заслуги перед государством и обществом.',
                    url: 'images/awards/award2.png',
                    id: 185493
                },
                {
                    name: 'Орден Красной Звезды',
                    text: '(учреждён 6 апреля 1930 года) — вручался военнослужащим всех родов войск, партизанам, воинским частям и учреждениям за заслуги в обороне СССР.',
                    url: 'images/awards/award3.png',
                    id: 695106
                },
                {
                    name: 'Орден Суворова I степени',
                    text: 'Учреждён Указом Президиума Верховного Совета СССР от 29 июля 1942 года',
                    url: 'images/awards/award4_1.png',
                    id: 286471
                },
                {
                    name: 'Орден Суворова II степени',
                    text: 'Учреждён Указом Президиума Верховного Совета СССР от 29 июля 1942 года',
                    url: 'images/awards/award4_2.png',
                    id: 286471
                },
                {
                    name: 'Орден Суворова III степени',
                    text: 'Учреждён Указом Президиума Верховного Совета СССР от 29 июля 1942 года',
                    url: 'images/awards/award4_3.png',
                    id: 286471
                },
                {
                    name: 'Орден Александра Невского',
                    text: '(учреждён в 1725 году) — уникальная награда, присутствовала в наградных системах Российской империи и Советского Союза.',
                    url: 'images/awards/award5.png',
                    id: 11798924
                },
                {
                    name: 'Орден Кутузова I степени',
                    text: '(учреждён 29 июля 1942 года) — награждались офицеры и партизаны за заслуги в боевых операциях.',
                    url: 'images/awards/award6.png',
                    id: 21292816
                },
                {
                    name: 'Орден Кутузова II степени',
                    text: '(учреждён 29 июля 1942 года) — награждались офицеры и партизаны за заслуги в боевых операциях.',
                    url: 'images/awards/award7.png',
                    id: 21292818
                },
                {
                    name: 'Орден Кутузова III степени',
                    text: '(учреждён 29 июля 1942 года) — награждались офицеры и партизаны за заслуги в боевых операциях.',
                    url: 'images/awards/award8.png',
                    id: 21292819
                },
                {
                    name: 'Орден Нахимова I степени',
                    text: '(учреждён 3 марта 1944 года) — «морская» награда за выдающиеся заслуги на флоте.',
                    url: 'images/awards/award9.png',
                    id: 27768004
                },
                {
                    name: 'Орден Нахимова II степени',
                    text: '(учреждён 3 марта 1944 года) — «морская» награда за выдающиеся заслуги на флоте.',
                    url: 'images/awards/award10.png',
                    id: 27768005
                },
                {
                    name: 'Орден Красного Знамени',
                    text: '(учреждён 16 сентября 1918 года) — высшая награда Советской России до появления ордена Ленина.',
                    url: 'images/awards/award11.png',
                    id: 337463
                },
                {
                    name: 'Орден Отечественной войны I степени',
                    text: '(учреждён 20 мая 1942 года) — вручался за храбрость и мужество в боях рядовым бойцам и офицерам Красной Армии и партизанских отрядов.',
                    url: 'images/awards/award12.png',
                    id: 18080149
                },
                {
                    name: 'Орден Отечественной войны II степени',
                    text: '(учреждён 20 мая 1942 года) — вручался за храбрость и мужество в боях рядовым бойцам и офицерам Красной Армии и партизанских отрядов.',
                    url: 'images/awards/award13.png',
                    id: 18200478
                },
                {
                    name: 'Орден Ушакова I степени',
                    text: '(учреждён 3 марта 1944 года) — награда за выдающиеся заслуги на флоте.',
                    url: 'images/awards/award14_1.png',
                    id: 25927306
                },
                {
                    name: 'Орден Ушакова II степени',
                    text: '(учреждён 3 марта 1944 года) — награда за выдающиеся заслуги на флоте.',
                    url: 'images/awards/award14_2.png',
                    id: 25927306
                },
                {
                    name: 'Орден Славы I степени',
                    text: '(учреждён 8 ноября 1943 года) — вручался военнослужащим рядового состава, сержантам и старшинам за личные заслуги, имел три степени.',
                    url: 'images/awards/award15_1.png',
                    id: 122578
                },
                {
                    name: 'Орден Славы II степени',
                    text: '(учреждён 8 ноября 1943 года) — вручался военнослужащим рядового состава, сержантам и старшинам за личные заслуги, имел три степени.',
                    url: 'images/awards/award15_2.png',
                    id: 122578
                },
                {
                    name: 'Орден Славы III степени',
                    text: '(учреждён 8 ноября 1943 года) — вручался военнослужащим рядового состава, сержантам и старшинам за личные заслуги, имел три степени.',
                    url: 'images/awards/award15_3.png',
                    id: 122578
                },
                {
                    name: 'Орден Богдана Хмельницкого',
                    text: 'учреждён Указом Президиума ВС СССР от 10.10.1943 об учреждении ордена Богдана Хмельницкого I, II и III степени.',
                    url: 'images/awards/award16_1.png',
                    id: 201094
                },
                {
                    name: 'Орден Богдана Хмельницкого',
                    text: 'учреждён Указом Президиума ВС СССР от 10.10.1943 об учреждении ордена Богдана Хмельницкого I, II и III степени.',
                    url: 'images/awards/award16_2.png',
                    id: 201094
                },
                {
                    name: 'Орден Богдана Хмельницкого',
                    text: 'учреждён Указом Президиума ВС СССР от 10.10.1943 об учреждении ордена Богдана Хмельницкого I, II и III степени.',
                    url: 'images/awards/award16_3.png',
                    id: 201094
                },
            ]
        },
        {
            title: 'Медали',
            content: [
                {
                    name: 'Медаль «Золотая Звезда»',
                    text: '(учреждена 1 августа 1939 года) — вручалась Героям Советского Союза вместе с орденом Ленина.',
                    url: 'images/awards/award17.png',
                    id: 1948730
                },
                {
                    name: 'Медаль «За отвагу»',
                    text: '(учреждена 17 октября 1938 года) — вручалась за личные отвагу и мужество, проявленные при защите Отечества.',
                    url: 'images/awards/award18.png',
                    id: 1970346
                },
                {
                    name: 'Медаль «За боевые заслуги»',
                    text: 'Вручалась военнослужащим РККА, а также гражданам, совершившим подвиг в борьбе против врагов Советского государства, рискуя своей жизнью',
                    url: 'images/awards/award19.png',
                    id: 1915961
                },
                {
                    name: 'Медаль «За оборону Москвы»',
                    text: 'учреждена Указом Президиума ВС СССР от 1 мая 1944 ',
                    url: 'images/awards/award20.png',
                    id: 1069798
                },
                {
                    name: 'Медаль «За оборону Ленинграда»',
                    text: 'государственная награда СССР, для награждения защитников города Ленинград (военнослужащих и мирных жителей)',
                    url: 'images/awards/award21.png',
                    id: 924450
                },
                {
                    name: 'Медаль «За оборону Сталинграда»',
                    text: 'учреждена Указом Президиума Верховного Совета СССР от 22 декабря 1942 года',
                    url: 'images/awards/award22.png',
                    id: 241821
                },
                {
                    name: 'Медаль «За оборону Одессы»',
                    text: 'учреждена Указом Президиума Верховного Совета СССР от 22 декабря 1942 года',
                    url: 'images/awards/award23.png',
                    id: 177128
                },
                {
                    name: 'Медаль «За оборону Севастополя»',
                    text: 'учреждена Указом Президиума Верховного Совета СССР от 22 декабря 1942 года',
                    url: 'images/awards/award24.png',
                    id: 1083348
                },
                {
                    name: 'Медаль «За оборону Киева»',
                    text: 'учреждена Указом Президиума Верховного Совета СССР от 21 июня 1961 года',
                    url: 'images/awards/award25.png',
                    id: 1081484
                },
                {
                    name: 'Медаль «За оборону Кавказа»',
                    text: 'учреждена Указом Президиума ВС СССР от 1 мая 1944',
                    url: 'images/awards/award26.png',
                    id: 1067644
                },
                {
                    name: 'Медаль «За взятие Берлина»',
                    text: 'государственная награда СССР. Учреждена Указом Президиума Верховного Совета СССР от 9 июня 1945 года',
                    url: 'images/awards/award27.png',
                    id: 761641
                },
                {
                    name: 'Медаль «За освобождение Белграда»',
                    text: '(учреждена 9 июня 1945 года) — вручалась участникам штурма и взятия Белграда',
                    url: 'images/awards/award28.png',
                    id: 792390
                },
                {
                    name: 'Медаль «За освобождение Варшавы»',
                    text: 'учреждена Указом Президиума ВС СССР от 9 июня 1945 года',
                    url: 'images/awards/award29.png',
                    id: 534676
                },
                {
                    name: 'Медаль «За освобождение Праги»',
                    text: 'учреждена Указом Президиума ВС СССР от 9 июня 1945 года',
                    url: 'images/awards/award30.png',
                    id: 222973
                },
                {
                    name: 'Медаль «За взятие Будапешта»',
                    text: 'учреждённая указом президиума Верховного совета СССР от 9 июня 1945 года ',
                    url: 'images/awards/award31.png',
                    id: 570578
                },
                {
                    name: 'Медаль «За взятие Кёнигсберга»',
                    text: 'учреждена Указом Президиума ВС СССР от 9 июня 1945 года',
                    url: 'images/awards/award32.png',
                    id: 1081503
                },
                {
                    name: 'Медаль «За взятие Вены»',
                    text: 'учреждённая Указом Президиума ВС СССР от 9 июня 1945 года',
                    url: 'images/awards/award33.png',
                    id: 853881
                },
                {
                    name: 'Медаль «За победу над Германией в Великой Отечественной войне 1941–1945 гг.»',
                    text: 'Учреждена 9 мая 1945 года, ею награждались все военнослужащие, принимавшие непосредственное участие на фронтах войны, а также выбывшие по ранению',
                    url: 'images/awards/award34.png',
                    id: 278798
                },
                {
                    name: 'Медаль «Партизану Отечественной войны»',
                    url: 'images/awards/award35.png',
                    text: 'вручалась партизанам и организаторам партизанского движения.',
                    id: 699364
                },
                {
                    name: 'Медаль «Серп и Молот»',
                    text: 'Знак особого отличия в СССР, вручавшийся Герою Социалистического Труда наряду с высшей наградой СССР ',
                    url: 'images/awards/award36.png',
                    id: 1980962
                },
                {
                    name: 'Медаль «За оборону Советского Заполярья»',
                    text: 'учреждена Указом Президиума Верховного Совета СССР от 5 декабря 1944 года',
                    url: 'images/awards/award37.png',
                    id: 462003
                },
                {
                    name: 'Медаль Нахимова',
                    text: 'Медалью Нахимова награждались матросы и солдаты, старшины и сержанты, мичманы и прапорщики Военно-Морского Флота и морских частей пограничных войск.',
                    url: 'images/awards/award38.png',
                    id: 1962419
                },
                {
                    name: 'Медаль Ушакова',
                    text: 'Награждались за мужество и отвагу, проявленные при защите социалистического Отечества на морских театрах, как в военное, так и в мирное время',
                    url: 'images/awards/award39.png',
                    id: 1461466
                },
                {
                    name: 'Медаль «За доблестный труд в Великой Отечественной войне 1941–1945 годов»',
                    text: '— вручалась работникам тыла за вклад в победу.',
                    url: 'images/awards/award40.png',
                    id: 1600457
                },
                {
                    name: 'Юбилейная медаль «Двадцать лет Победы в Великой Отечественной войне 1941—1945 гг.» 1965 г.',
                    text: '',
                    url: 'images/awards/award41.png',
                    id: 783270
                },
                {
                    name: 'Юбилейная медаль «Тридцать лет Победы в Великой Отечественной войне 1941—1945 гг.» 1975 г.',
                    text: '',
                    url: 'images/awards/award42.png',
                    id: 613627
                },
                {
                    name: 'Юбилейная медаль «Сорок лет Победы в Великой Отечественной войне 1941—1945 гг.» 1985 г.',
                    text: '',
                    url: 'images/awards/award43.png',
                    id: 280693
                },
            ]
        }
    ],
    battles = [
        {
            title: "",
            content: [
                {
                    name: 'Битва за Москву (1941-1942)',
                    text: '',
                    id: 151290
                },
                {
                    name: 'Сталинградская битва (1942-1943)',
                    text: '',
                    id: 38789
                },
                {
                    name: 'Курская битва (1943)',
                    text: '',
                    id: 130861
                },
                {
                    name: 'Белорусская операция (1944)',
                    text: '',
                    id: 151052
                },
                {
                    name: 'Берлинская наступательная операция (1945)',
                    text: '',
                    id: 154182
                },
                {
                    name: 'Штурм Берлина (1945)',
                    text: '',
                    id: 713400
                },
                {
                    name: 'Блокада Ленинграда (1941-1944)',
                    text: '',
                    id: 151860
                },
                {
                    name: 'Битва за Днепр (1943)',
                    text: '',
                    id: 313836
                },
                {
                    name: 'Третья битва за Харьков (1943)',
                    text: '',
                    id: 157873
                },
                {
                    name: 'Смоленское сражение (1941)',
                    text: '',
                    id: 162357
                },
                {
                    name: 'Киевская операция (1943)',
                    text: '',
                    id: 700960
                },
                {
                    name: 'Оборона Севастополя и битва за Крым (1941–1942)',
                    text: '',
                    id: 154860
                },
                {
                    name: 'Битва за Кавказ  (1942—1943)',
                    text: '',
                    id: 653470
                },
                {
                    name: 'Прибалтийская операция (1944)',
                    text: '',
                    id: 687465
                },
                {
                    name: 'Мемельская операция (1944)',
                    text: '',
                    id: 3620958
                },
                {
                    name: 'Восточно-Прусская операция (1945)',
                    text: '',
                    id: 636087
                },
                {
                    name: 'Кёнигсбергская операция (1945)',
                    text: '',
                    id: 671528
                },
                {
                    name: 'Восточно-Померанская операция (1945)',
                    text: '',
                    id: 698067
                },
                {
                    name: 'Штурм Вены (1945)',
                    text: '',
                    id: 4527018
                },
                {
                    name: 'Братиславско-Брновская операция (1945)',
                    text: '',
                    id: 833119
                },
                {
                    name: 'Баутцен-Вайсенбергская операция (1945)',
                    text: '',
                    id: 316843
                },
                {
                    name: 'Хальбский котёл (1945)',
                    text: '',
                    id: 282438

                },
                {
                    name: 'Зееловско-Берлинская операция (1945)',
                    text: '',
                    id: 7879625
                },
                {
                    name: 'Битва при Варшаве (1944)',
                    text: '',
                    id: 1776194
                },
                {
                    name: 'Львовско-Сандомирская операция (1944)',
                    text: '',
                    id: 313748
                },
                {
                    name: 'Восточно-Карпатская операция (1944)',
                    text: '',
                    id: 60270
                },
                {
                    name: 'Крымская операция (1944)',
                    text: '',
                    id: 673265
                },
                {
                    name: 'Первая Ясско-Кишинёвская операция (1944)',
                    text: '',
                    id: 715700
                },
                {
                    name: 'Висло-Одерская операция (1945)',
                    text: '',
                    id: 159065
                },
                {
                    name: 'Курляндский котёл (1944-1945)',
                    text: '',
                    id: 697172
                },
                {
                    name: 'Сражение под Уманью (1941)',
                    text: '',
                    id: 327078
                },
                {
                    name: 'Харьковская операция (1941)',
                    text: '',
                    id: 697658
                },
                {
                    name: 'Оборона Брестской крепости (1941)',
                    text: '',
                    id: 611789
                },
                {
                    name: 'Витебское сражение (1941)',
                    text: '',
                    id: 4112363
                },
                {
                    name: 'Сражение в районе Дубно – Луцк – Броды (1941)',
                    text: '',
                    id: 708213
                },
                {
                    name: 'Расейняйское сражение (1941)',
                    text: '',
                    id: 1528565
                },
                {
                    name: 'Таллинский переход (1941)',
                    text: '',
                    id: 836124
                },
                {
                    name: 'Донбасско-Ростовская операция (1941)',
                    text: '',
                    id: 30888904
                },
                {
                    name: 'Ростовская операция (1941)',
                    text: '',
                    id: 169436
                },
                {
                    name: 'Тихвинская операция (1941)',
                    text: '',
                    id: 1657889
                },
                {
                    name: 'Керченско-Феодосийская десантная операция (1941-1942)',
                    text: '',
                    id: 1739723
                },
                {
                    name: 'Ржевская битва (1942-1943)',
                    text: '',
                    id: 261776
                },
                {
                    name: 'Среднедонская операция (1942-1943)',
                    text: '',
                    id: 52315
                },
                {
                    name: 'Операция «Искра» (1943)',
                    text: '',
                    id: 233278
                },
                {
                    name: 'Корсунь-Шевченковская операция (1944)',
                    text: '',
                    id: 509417
                },
                {
                    name: 'Выборгско-Петрозаводская операция (1944)',
                    text: '',
                    id: 700533
                },
                {
                    name: 'Дебреценская операция (1944)',
                    text: '',
                    id: 582953
                },
                {
                    name: 'Балатонская операция (1945)',
                    text: '',
                    id: 155995
                },
                {
                    name: 'Варшавско-Познанская операция (1945)',
                    text: '',
                    id: 4104101
                },
                {
                    name: 'Осада Бреслау (1945)',
                    text: '',
                    id: 664581
                },
                {
                    name: 'Взятие Данцига (1945)',
                    text: '',
                    id: 4110446
                },
            ]
        }
    ];

let data = [
    {
        name: 'Абрамов Николай Александрович',
        url: 'Абрамов Николай Александрович'
    },
    {
        name: 'Абрамов Пётр Александрович',
        url: 'Абрамов Пётр Александрович'
    },
    {
        name: 'Авдеев Александр Фёдорович',
        url: 'Авдеев Александр Фёдорович'
    }, {
        name: 'Алгазин Александр Кузьмич',
        url: 'Алгазин Александр Кузьмич'
    },
    {
        name: 'Алейников Александр Георгиевич',
        url: 'Алейников Александр Георгиевич'
    },
    {
        name: 'Александренко Иван Яковлевич',
        url: 'Александренко Иван Яковлевич'
    },
    {
        name: 'Александров Александр Павлович',
        url: 'Александров Александр Павлович'
    },
    {
        name: 'Александров Александр Панайотов',
        url: 'Александров Александр Панайотов'
    },
    {
        name: 'Алексеев Александр Алексеевич',
        url: 'Алексеев Александр Алексеевич'
    },
    {
        name: 'Алексеев Анатолий Иванович',
        url: 'Алексеев Анатолий Иванович'
    },
]

let arrNames = [],
    arrUrls = [];
data.forEach((item, index) => {
    arrNames.push(item.name);
    arrUrls.push(data[index].url);
    arrNames.sort();
    arrUrls.sort();
})

//Получаем элемент по селектору
function getElement(selector) {
    return document.querySelector(selector);
}

//Получаем массив элементов по селектору
function getArray(selector) {
    return Array.from(document.querySelectorAll(selector));
}

// Убираем scroll у body
function noScrollBody() {
    document.body.style.overflow = 'hidden';
}

// Возвращает scroll у body
function yesScrollBody() {
    document.body.style.overflow = 'auto';
}
let fileData,
    this_host = 'https://portals.ruwiki.ru/nashi-geroi/web/api'; //https://forphp.ruwiki.ru
window.addEventListener('load', () => {
    let
        elForm = document.forms.formHero,
        elHtml = document.documentElement,
        elCurrentDate = getElement('.js-current-date'),
        arrayModals = getArray('[class *= "js-modal-popup"]'),
        elModalSettings = getElement('.js-modal-popup-settings'),
        arrModalsWrapper = getArray('[class *= "js-modal-wrapper"]'),
        elModalWrapperSettings = getElement('.js-modal-wrapper-settings'),
        arrayModalsCross = getArray('[class *= "js-modal-cross"]'),
        arrayButtonsCallModal = getArray('[class *= "js-modal-call"]'),
        arrButtonsSize = getArray('.js-buttons-size'),
        elSizeText = getElement('.js-size-text'),
        arrButtonsFont = getArray('.js-buttons-font'),
        elBurger = getElement('.js-burger'),
        elSidebar = getElement('.js-sidebar'),
        elButtonMore = getElement('.js-call-more'),
        elPopupMore = getElement('.js-popup-more'),
        elBurgerClose = getElement('.js-burger-close'),
        elButtonCallSearch = getElement('.js-call-search'),
        elForSearch = getElement('.js-for-search'),
        elSearch = getElement('.js-search'),
        elHeader = getElement('.js-header'),
        elResultSearch = getElement('.js-header-search-result'),
        elResultSearchWrapper = getElement('.js-header-search-wrapper'),
        elResultSearchContent = getElement('.js-header-search-content'),
        elClearSearch = getElement('.js-header-search-clear'),
        elLayerBackground,
        elInput = getElement('.js-input'),
        arrClassesSize = ['text-small', 'text-medium', 'text-big'],
        arrClassesFont = ['family-sans-serif', 'family-serif'],

        arrayForBlocks = [], // Переменная для массива этапов в тамйлайне, та галочки ставим
        arrayForBlocks1 = [], // Переменная для массива этапов в мобилке в тамйлайне, та галочки ставим
        arrListsValue, // Переменнвя для значения списка
        elListHidden, // Вспомогательная переменная для значения списка
        arrDates = [],// переменная для введенной даты
        arrayYear = [],// массив для введенного года
        elNext = getElement('.js-next'),
        elPrev = getElement('.js-prev'),
        elPublish = getElement('.js-publish'),
        numberSection = 1,// номер раздела формы. Всего их три
        elSection, // переменная для раздела формы.
        arrayBlocks = [],// переменная для количества блоков в разделе формы
        arraySections = getArray('[class *= "js-state"]'),
        arrayTimelineItems = getArray('.js-timeline-item'),
        arrayTimeLineInModalItems = getArray('.js-modal-popup-timeline'),
        arrayTextarea = [], //Переменная для массива всех полей текстареа
        arrayRemainSymbols = [], //Переменная для вывода оставшихся символов
        arrayRemainSymbolsText = [], //Переменная для вывода слова в символов в нужном падеже
        elInputUrl, // Переменная для поля ввода ссылок
        elButtonAddUrl, // Переменная для кнопки добавления ссылки

        arraySectionNames = getArray('.js-section-name'),
        elMainTitle = getElement('.js-main-title'),
        arrayFormLinks = getArray('.js-form-links'), // Переменная для массива добавляемых ссылок на источники в форме

        arrayButtonCallModalAddLinks = getArray('.js-modal-call-button-add-links'), // Кнопка вызова Модалки добавить ссылку на источкик
        arrayModalAddLinks = getArray('.js-modal-popup-add-links'), // Модалка добавить ссылку на источник
        arrayButtonsAddLink = getArray('.js-button-add-link'),
        arrayModalEdit = getArray('.js-popup-edit-links'),
        arrayModalEditWrapper = getArray('.js-wrapper-edit-links'),
        arrayCrossModalEditLink = getArray('.js-cross-links'),
        arrayButtonChangeLink = getArray('.js-change-link'),

        elInputFile = getElement('.js-input-file'),
        elForInputFile = getElement('.js-for-input-file'),
        elFileType = getElement('.js-file-type'),
        elFileSize = getElement('.js-file-size'),
        elModalFile = getElement('.js-modal-file'),
        elModalWrapperFile = getElement('.js-modal-wrapper-file'),
        elModalCrossFile = getElement('.js-modal-file-cross'),
        elModalContentFile = getElement('.js-modal-file-content'),
        elModalLayerFile = getElement('.js-modal-layer-file'),
        elFileLoad = getElement('.js-file-load'),
        elForImg = getElement('.js-for-img'),
        elModalTitleFile = getElement('.js-modal-title-file'),
        elForCheckbox = getElement('.js-upload-for-checkbox'),
        elUploadText = getElement('.js-class-upload-text'),
        elUploadButton = getElement('.js-button-upload'),
        elUploadCheckbox = getElement('.js-upload-checkbox'),
        elViewImg = getElement('.js-view'),
        elPlaceImg = getElement('.js-place-img'),
        elDelImg = getElement('.js-del-img'),

        elModalAuth = getElement('.js-modal-popup-auth'),
        elButtonCallModalAuth = getElement('.js-modal-call-button-auth'),
        elModalAuthText = getElement(".js-modal-auth-text"),
        elLogin = getElement('.js-login'),
        elPassword = getElement('.js-password'),
        elButtonShowPassword = getElement('.js-show-password'),
        elButtonLogin = getElement('.js-login-user'),

        elButtonsCallModalChoose, //переменная для кнопки вызова модалки спикска
        elModalChoose, // переменная для массива с выбором
        elModalWrapperChoose,
        elMultiChooseList,// переменная для списка с выбором
        elButtonsAddChosen,// переменная для кнопки добавления выбранных элементов из списка
        elChosen,// переменная получающая элемент куда вставляются выбранные позиции из списка
        arrayButtonsDeleteChosen = [], //массив для кнопок удалить Сражение или Награду

        elPlaceRecruit = getElement('.js-maybe-complete1'),

        arrayRadioButton = getArray('.js-radio-button'),
        arrayRadioButtonValue = getArray('.js-radio-button-value'),
        elRadioValue = getElement('.js-radio-value'),
        elSuggestion = getElement('.js-suggest-info'),
        elRadioChoose = getElement('.js-form-radio-chose'),
        elRadioChooseWrapper = getElement('.js-form-radio-chose-wrapper'),
        isRequired1 = false,
        isRequired2 = false,
        isNotAlive = false,

        elGotoLk = getElement('.js-goto-lk'),
        elGotoLanding = getElement('.js-cross-auth'),

        arrayFaq = getArray('.js-faq'),
        arrayFaqText = getArray('.js-faq-text'),
        arrayFaqTextWrapper = getArray('.js-faq-text-wrapper'),

        elButtonLoginInModal = getElement('.js-button-login'),
        elButtonRegInModal = getElement('.js-button-reg'),
        elInfoLk = getElement('.js-info-lk'),

        arrayButtonsCallModalListOfLinks = getArray('.js-call-links'),
        elModalListOfLink = getElement('.js-modal-list-of-links'),
        elWrapperModalListOfLink = getElement('.js-wrapper-list-of-links'),
        elCrossModalListOflInks = getElement('.js-cross-list-of-links'),
        isPublish = false,
        isAuth = false,

        elModalLoader = getElement('.js-modal-loader');

    // Функция проверки авторизвоан ли юзер
    function set_msg(msg) {
        elModalLoader.classList.remove('active');
        if (!msg.data.user_info.result) { // юзер не авторизован
            isAuth = false;
            elModalAuth.classList.add('active');
            elButtonCallModalAuth.classList.remove('is-auth');
            elButtonCallModalAuth.querySelector('span').textContent = 'Войти';
            elButtonCallModalAuth.removeAttribute('disabled');
            elGotoLk.href = 'https://ru.ruwiki.ru/'
            elHeader.classList.add('active');
            elButtonLoginInModal.textContent = 'Войти';
            elButtonRegInModal.classList.remove('is-hidden');
            elInfoLk.textContent ='Авторизуйтесь в РУВИКИ';
            elButtonLoginInModal.addEventListener('click', (e) => {
                e.preventDefault();
                elModalAuth.classList.add('active');
            })
        }
        else { // юзер авторизован
            isAuth = true;
            elModalAuth.classList.remove('active');
            elButtonCallModalAuth.classList.add('is-auth');
            elButtonCallModalAuth.querySelector('span').textContent = msg.data.user_info.name;
            elButtonCallModalAuth.setAttribute('disabled', 'disabled');
            elGotoLk.href = `https://ru.ruwiki.ru/wiki/Участник:${msg.data.user_info.name}`
            elHeader.classList.remove('active');
            elButtonRegInModal.nextElementSibling.classList.add('is-hidden');
            elButtonRegInModal.classList.add('is-hidden');
            elInfoLk.textContent ='Вы уже авторизованы';
        }

        //пробегаемся по полученным данным и выводим их
        /*if (msg.error === 'no') {
            let result = '<ul>' + Object.entries(msg.data.user_info).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('') + '</ul>';
        }*/
    }
    function get_user() {
        let data_send = {};

        //data_send['input'] = "";
        $.ajax({
            url: this_host + "/index.php?r=api/get-user",
            async: false,
            type: 'GET',
            dataType: 'JSON',
            cache: false,
            success: function (msg) {
                set_msg(msg);
            }
        });
    }
    get_user();
    //------

    //Авторизация пользователя
    function login_msg(msg) {
        if (msg.error === 'no') {
            if (msg && msg.work && msg.work.cookies && msg.data && msg.data.set_cookie && msg.data.set_cookie === "yes") {
                const cookies = msg.work.cookies;
                for (const [name, value] of Object.entries(cookies)) {
                    document.cookie = `${name}=${value}; path=/; domain=ruwiki.ru; max-age=86400`; // Устанавливаем куку
                }
            }
        }
        if(msg.data.user_info.result === true){
            isAuth = true;
            elModalAuth.classList.remove('active');
            elButtonCallModalAuth.classList.add('is-auth');
            elButtonCallModalAuth.querySelector('span').textContent = msg.data.user_info.name;
            elButtonCallModalAuth.setAttribute('disabled', 'disabled');
            elHeader.classList.remove('active');
        }
        else {
            isAuth = false;
        }
    }
    elButtonLogin.addEventListener('click', () => {
        let data_send = {};
        data_send['inputLogin'] = elLogin.value;
        data_send['inputPasswd'] = elPassword.value;
        $.ajax({
            url: this_host + "/index.php?r=api/user-login",
            async: false,
            type: 'POST',
            dataType: 'JSON',
            data: data_send,
            cache: false,
            success: function (msg) {
                login_msg(msg);
                elButtonRegInModal.nextElementSibling.classList.add('is-hidden');
                elButtonRegInModal.classList.add('is-hidden');
                elInfoLk.textContent ='Вы уже авторизованы';
            }
        });
    })
    //------

    //Показ-скрытие пароля
    elButtonShowPassword.addEventListener('click', () => {
        if(elPassword.type !== 'password') {
            elPassword.type = 'password';
            elButtonShowPassword.classList.remove('is-show')
        }
        else {
            elPassword.type = 'text';
            elButtonShowPassword.classList.add('is-show')
        }
    })
    //------

    // Функция открытия модалки
    function openModal(modal, wrapperModal) {
        if (window.innerWidth > 1023) {
            modal.classList.toggle('active');
        }
        else {
            modal.classList.add('active');
            wrapperModal.style.bottom = `${-wrapperModal.offsetHeight}px`;
            wrapperModal.addEventListener('pointermove', (e) => {
                e.preventDefault();
                if (e.target.classList.contains('js-popup-links-wrapper') && e.height > 10) {
                    closeModal(modal, wrapperModal);
                }
            });
            setTimeout(() => {
                wrapperModal.style.bottom = '0px';
            }, 100)
        }
        if(!modal.classList.contains('js-modal-file')){
            elLayerBackground = document.createElement('DIV');
            elLayerBackground.classList.add('opacity-layer');
            //Закрытие модалок если нажали мимо модалки
            elLayerBackground.addEventListener('click', () => {
                arrayModals.forEach((item, index) => {
                    closeModal(modal, wrapperModal);
                    arrayButtonsCallModal[index].classList.remove('active');
                })
            })
            modal.append(elLayerBackground);
        }
        if((window.innerWidth < 767 && modal.classList.contains('is-mobile')) || modal.classList.contains('js-modal-popup-list')) {
            yesScrollBody();
        }
        else {
            noScrollBody();
        }
        /*if(modal.classList.contains('is-mobile') && window.innerWidth < 768) {
            elHeader.classList.add('zIndex0');
        }
        else {
            elHeader.classList.remove('zIndex0');
        }*/
    }
    //------

    // Функция закрытия модалки
    function closeModal(modal, modalWrapper) {
        yesScrollBody();
        if (modalWrapper.style.bottom) {
            modalWrapper.style.bottom = `${-modalWrapper.offsetHeight}px`;
            setTimeout(() => {
                modal.classList.remove('active');
                modalWrapper.removeAttribute('style');
            }, 300)
        }
        else {
            modal.classList.remove('active');
        }
        if(elLayerBackground) {
            elLayerBackground.remove();
        }
        elHeader.classList.remove('zIndex0');
    }

    function closeModalFile(modal, modalWrapper) {
        yesScrollBody();
        if (modalWrapper.style.bottom) {
            modalWrapper.style.bottom = `${-modalWrapper.offsetHeight}px`;
            setTimeout(() => {
                modal.classList.remove('active');
                modalWrapper.removeAttribute('style');
            }, 300)
        }
        else {
            modal.classList.remove('active');
        }
    }
    //------

    //Функция получеиия раздела формы
    function getSection() {
        if(numberSection !== 0) {
            elSection = getElement(`.js-state${numberSection}`);
        }
        return elSection;
    }
    //-------

    //Функция получения блоков в разле формы
    function getBlocks() {
        elSection = getSection();
        if(elSection.querySelectorAll('.js-block')) {
            arrayBlocks = Array.from(elSection.querySelectorAll('.js-block'));
        }
        return arrayBlocks;
    }
    getBlocks();
    //-------

    //Вывод текущей даты
    let dataDate = new Date();
    elCurrentDate.textContent = dataDate.getDate();
    //-------

    //Открытие модалок
    arrayButtonsCallModal.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (String(item.classList).indexOf('more')) {
                item.classList.toggle('active');
            }
            if(item.classList.contains('js-create-list')) {
                dad(rank);
            }
            openModal(arrayModals[index], arrModalsWrapper[index]);
        })
    })
    //--------

    //Закрытие модалок по крестику
    arrayModalsCross.forEach((item, index) => {
        item.addEventListener('click', () => {
            closeModal(arrayModals[index], arrModalsWrapper[index]);
        })
    })

    //Фукнция установки настроек
    function setSetting(arrLabels, arrButtons, arrClasses) {
        arrButtons.forEach((item) => {
            arrLabels.push(item.parentElement);
        })
        arrButtons.forEach((item) => {
            item.addEventListener('click', (e) => {
                for (let itemClass of arrClasses) {
                    elHtml.classList.remove(itemClass);
                }
                for (let i of arrLabels) {
                    i.classList.remove('active');
                }
                item.parentElement.classList.add('active');

                if (this.event.target.parentNode.parentNode.previousSibling.previousSibling.querySelector('.js-size-text')) {
                    elSizeText.textContent = item.dataset.info;
                }
                elHtml.classList.add(item.dataset.class);
                closeModal(elModalSettings, elModalWrapperSettings);
            })
        })
    }
    //--------

    //Изменение размера текста
    let arrLabelSize = [];
    setSetting(arrLabelSize, arrButtonsSize, arrClassesSize);
    //--------

    //Нажатие на выбор типа шрифта
    let arrLabelFont = [];
    setSetting(arrLabelFont, arrButtonsFont, arrClassesFont);
    //--------

    /*Нажатие на кнопку бургера*/
    elBurger.addEventListener('click', () => {
        if (!elBurger.classList.contains('active')) {
            //elBurger.classList.add('active');
            elSidebar.classList.add('active');
        } else {
            elBurger.classList.remove('active');
            elSidebar.classList.remove('active');
        }
    })

    //Нажатие на текущий вопрос в блоке Вопросы и ответы
    /*arrayFaq.forEach((item, index) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            if(!arrayFaqText[index].getAttribute('style')) {
                arrayFaqText[index].style.height = `${arrayFaqTextWrapper[index].offsetHeight}px`;
            }
            else {
                arrayFaqText[index].removeAttribute('style');
            }

        })
    })*/
    arrayFaq.forEach((item, index) => {
        item.addEventListener('click', function() {
            for(let i of arrayFaq) {
                if(i !== item) {
                    i.classList.remove('active');
                    i.querySelector('.js-faq-text').removeAttribute('style');
                }
            }
            if(item === this) {
                item.classList.toggle('active');
            }
            if(item.classList.contains('active')) {
                if(!arrayFaqText[index].getAttribute('style')) {
                    arrayFaqText[index].style.height = `${arrayFaqTextWrapper[index].offsetHeight}px`;
                }
            }
            else {
                arrayFaqText[index].removeAttribute('style');
            }
        })
    })
    //--------

    //Закрытие бургера в мобилке
    elBurgerClose.addEventListener('click', () => {
        elSidebar.classList.remove('active');
    })

    //Нажатие на кнопку ЕЩЕ
    elButtonMore.addEventListener('click', () => {
        elButtonMore.classList.toggle('active');
        elPopupMore.classList.toggle('active');
    })

    // Показать поиск в мобиле
    elButtonCallSearch.addEventListener('click', () => {
        elForSearch.classList.add('active');
    })
    //-----

    //Скрыть поле поиска
    elForSearch.addEventListener('click', (e) => {
        if (e.target === elForSearch) {
            elForSearch.classList.remove('active');
        }
    })
    //-----

    //Ввод данных в поле ввода
    let arrayValTitle = [],// массив значений названий статей
        arrayVatUrl = [];
    elInput.addEventListener('input', () => {
        elSearch.classList.add('active');
        elLayerBackground.classList.add('active');
        noScrollBody();
        arrayValTitle = []; // обнуляем массив
        arrayVatUrl = [];
        if (arrNames.length) {
            arrNames.forEach((item, index) => {
                if (item.toLowerCase().indexOf(elInput.value.toLowerCase()) !== -1) {
                    arrayValTitle.push(item);
                    arrayVatUrl.push(arrUrls[index]);
                }
            })
        }

        //Отрисовываем выдачу поиска
        elResultSearchWrapper.textContent = '';
        if (window.innerWidth < 1024) {
            elResultSearch.style.maxHeight = `${window.innerHeight - 100}px`;// 100 - высота строки поиска
        }
        if (arrayValTitle.length) {
            elResultSearch.classList.add('active');
            elResultSearchContent.classList.add('active');
            arrayValTitle.forEach((item, index) => {
                let elLink = document.createElement("A");
                elLink.classList.add('header-search-result__item');
                elLink.textContent = item;
                elLink.setAttribute('href', arrayVatUrl[index]);
                elResultSearchWrapper.append(elLink);
            })
        } else {
            elResultSearch.classList.remove('active');
            elResultSearchContent.classList.remove('active');
        }
        //------
    })
    //-------

    //Закоытие поиска
    elClearSearch.addEventListener('click', clearSearch);
    //elLayerBackground.addEventListener('click', clearSearch);
    function clearSearch() {
        yesScrollBody();
        elLayerBackground.classList.remove('active');
        elForSearch.classList.remove('active');
        elInput.value = '';
        arrayValTitle = [];
        arrayVatUrl = [];
        elLayerBackground.classList.remove('active');
        elSearch.classList.remove('active');
        elResultSearch.classList.remove('active');
        elResultSearchWrapper.textContent = '';
        elResultSearchContent.classList.remove('active');
        elResultSearch.style = '';
    }
    //---------

    //Переход на главную Лендинга
    elGotoLanding.addEventListener('click', () => {
        window.location.href = 'https://portals.ruwiki.ru/nashi-geroi'
    })

    let elChooseList = getElement('.js-rank-list');
    function dad(arrayData) {
        elChooseList.textContent ='';
        arrayData.forEach((item) => {
            let divBlock = document.createElement('DIV');
            divBlock.classList.add('form-list-block');
            divBlock.innerHTML = `<div class="form-list-block__title">${item.title}</div>`;
            elChooseList.append(divBlock);
            item.content.forEach((otem) => {
                let elLabelItem = document.createElement('LABEL');
                elLabelItem.classList.add('form-list__item');
                elLabelItem.innerHTML =`<div>${otem.name}</div>
                                        <input type="checkbox" name="choose" class="js-rank" value="${otem.name}" data-id = "${otem.id}">`;
                divBlock.append(elLabelItem);
            })
        })
        getArray('.js-rank').forEach((item) => {
            item.addEventListener('click', () => {
                getElement('.js-rank-value-list-hidden').value = item.dataset.id;
                getElement('.js-rank-list-value').value = item.value;
                getElement('.js-create-list').classList.remove('active');
                closeModal(getElement('.js-modal-popup-list.is-rank'), elChooseList);
            })
        })

    }

    //Фунцкия показа кнопок перехода на следующий экран
    function showButton() {
        if(numberSection === 1) {
            if(isRequired1) {
                elNext.classList.remove('disabled');
                elNext.removeAttribute('disabled');
            }
            else {
                elNext.classList.add('disabled');
                elNext.setAttribute('disabled', 'disabled');
            }
        }

        if(numberSection === 2) {
            if(isRequired2){
                elNext.classList.remove('disabled');
                elNext.removeAttribute('disabled');
                elPublish.classList.remove('disabled');
                elPublish.removeAttribute('disabled');
            }
            else {
                elNext.classList.add('disabled');
                elNext.setAttribute('disabled', 'disabled');
                elPublish.classList.add('disabled');
                elPublish.setAttribute('disabled', 'disabled');
            }
        }
    }
    //---------

    //Функция проверки заполенения блоков
    function checkIsCompleteBlock() {
        arrayForBlocks = arrayTimelineItems[numberSection - 1].querySelectorAll('.js-for-block');
        arrayForBlocks1 = arrayTimeLineInModalItems[numberSection - 1].querySelectorAll('.js-for-block');
        arrayBlocks.forEach((item, index) => {
            if (item.classList.contains('is-complete')) {
                arrayForBlocks[index].classList.add('is-complete');
            }
            else {
                arrayForBlocks[index].classList.remove('is-complete');
            }
        })
        arrayBlocks.forEach((item, index) => {
            if (item.classList.contains('is-complete')) {
                arrayForBlocks1[index].classList.add('is-complete');
            }
            else {
                arrayForBlocks1[index].classList.remove('is-complete');
            }
        })
        showFinal();
    }
    //-------

    //Функция проверки заполнения раздела формы
    function checkIsCompleteSection() {
        let flag = arrayBlocks.every((item) => {
            return item.classList.contains('is-complete');
        });
        if(flag) {
            elSection.classList.add('is-complete');
            arraySections.forEach((item, index) => {
                if(item.classList.contains('is-complete')) {
                    arrayTimelineItems[index].classList.add('is-complete');
                }
            })
        }
        else {
            elSection.classList.remove('is-complete');
            arraySections.forEach((item, index) => {
                if(!item.classList.contains('is-complete')) {
                    arrayTimelineItems[index].classList.remove('is-complete');
                }
            })
        }
    }
    //---------

    function permissionAlphabet(classOfInputs, setOfSymbols) {
        getArray(classOfInputs).forEach((item) => {
            item.addEventListener('input', () => {
                let currentSymbol = item.value.substr(item.value.length - 1, 1);
                if (setOfSymbols.indexOf(currentSymbol) === -1) {
                    item.value = item.value.substr(0, item.value.length - 1);
                }
            })
        })
    }

    // В зависимости от того какие символы разрешены ко вводу в то или иное поле
    // их вводить разрешаеи, а остальные символы ко вводу запрещаем
    permissionAlphabet('.js-permission-alphabet', alphabet);
    permissionAlphabet('.js-permission-alphabetSmall', alphabetSmall);
    permissionAlphabet('.js-permission-alphabetMiddle', alphabetMiddle);
    permissionAlphabet('.js-permission-alphabetBig', alphabetBig);
    //-------

    //Проверка введено что-либо в поля ввода INPUT
    function checkInputFields () {
        arrayBlocks = getBlocks();
        arrayBlocks.forEach((item) => {
            let arrayInputs = Array.from(item.querySelectorAll('.js-required')),
                elDate = item.querySelector('.js-date.js-required'),
                elYear = item.querySelector('.js-year') ? item.querySelector('.js-year') : '';
            arrayInputs.forEach((etem) => {
                etem.addEventListener('input', () => {
                    //Если юзер не залогинен, то модалку логина показываем
                    if(!isAuth) {
                        openModal(elModalAuth, getElement('.js-modal-wrapper-auth'));
                    }
                    //----

                    // Проверяем если все поля заполнены, то переменная в data-fill будет true
                    //item.dataset.fill = arrayInputs.every((otem) => {return otem.value.length >= 2;}).toString();
                    // Если все поля заполнены и в поле год 4 цифры, то все ПОЛНОСТЬЮ заполнено
                    if(etem.value.length >= 2 && !etem.classList.contains('js-year') && !etem.classList.contains('js-date')) {
                        etem.classList.remove('is-error');
                    }
                    if(etem === elDate && elDate.value.length >= 1) {
                        etem.classList.remove('is-error');
                    }
                    /*if(elYear) {
                        if(!elYear.classList.contains('js-year-endCombat')) {
                            if(elYear.value.length > 3  && item.dataset.fill === 'true' && (elDate && elDate.value.length > 0)) {
                                item.dataset.complete = 'true';
                            }
                            else {
                                item.dataset.complete = 'false';
                            }
                        }
                    }
                    else {
                        item.dataset.complete = 'true';
                    }*/
                    /*if(item.dataset.complete === 'true') {
                        item.classList.add('is-complete');
                    }
                    else {
                        item.classList.remove('is-complete');
                    }*/
                    if(elForm.lastName.value.length >= 2 && elForm.firstName.value.length >= 2 && elForm.birthDate.value.length > 0 && elForm.birthMonth.value.length > 0 && elForm.birthYear.value.length >= 4 && elForm.birthPlace.value.length >= 2) {
                        isRequired1 = true;
                        item.classList.add('is-complete');
                    }
                    else {
                        isRequired1 = false;
                        item.classList.remove('is-complete');
                    }

                    isRequired2 = elForm.militaryOperations.value.length >= 2;
                    checkIsCompleteBlock();
                    checkIsCompleteSection();
                })
            })
        })
    }
    checkInputFields();
    //------

    function checkCompleteDate(Dat, Month, Year, Block) {
        if(Dat.classList.contains('fill') && Month.classList.contains('fill') && Year.classList.contains('fill')) {
            Block.classList.add('is-complete');
            checkIsCompleteBlock();
            checkIsCompleteSection();
        }
        else {
            Block.classList.remove('is-complete');
            checkIsCompleteBlock();
            checkIsCompleteSection();
        }
    }

    let isLeapYear = false;
    //Проверка ввода ДАТЫ
    function checkDate() {
        let arrMonth = [],
            arrYear = [],
            isBigMonth = false,
            data = new Date(),
        arrDates = elSection.querySelectorAll('.js-date');
        arrMonth = elSection.querySelectorAll('.js-month');
        arrYear = elSection.querySelectorAll('.js-year');

        arrDates.forEach((item, index) => {
            item.addEventListener('input', () => {
                let numberMonth = Number(arrMonth[index].previousElementSibling.value);
                if(arrYear[index].value) {
                    isLeapYear = arrYear[index].value % 4 === 0;
                }
                if (item.value < 0 || item.value === '00') {
                    item.value = '';
                }

                if(numberMonth) { // если введен месяц
                    //если месяц имеет 31 день
                    if((numberMonth < 8 && numberMonth % 2 !==0) || (numberMonth >= 8 && numberMonth % 2 === 0)) {
                        isBigMonth = true;
                        item.value = item.value >= 31 ? 31 : item.value;
                    }
                    //если в месяце менее 31 дня
                    else {
                        isBigMonth = false;
                        if(numberMonth === 2) {
                            if(arrYear[index].value) {
                                if(isLeapYear) {
                                    item.value = item.value >= 29 ? 29 : item.value;
                                }
                                else {
                                    item.value = item.value >= 28 ? 28 : item.value;
                                }
                            }
                            else {
                                item.value = item.value >= 28 ? 28 : item.value;
                            }
                        }
                        else {
                            item.value = item.value >= 30 ? 30 : item.value;
                        }
                    }
                }
                else if(arrYear[index].value) {//если введен год
                    if(numberMonth) {
                        if(isBigMonth) {
                            item.value >= 31 ? 31 : item.value;
                        }
                        else {
                            if(numberMonth === 2) {
                                if(isLeapYear) {
                                    item.value >= 29 ? 29 : item.value;
                                }
                                else {
                                    item.value >= 28 ? 28 : item.value;
                                }
                            }
                            item.value = item.value >= 30 ? 30 : item.value;
                        }
                    }
                    else {
                        item.value = item.value >=31 ? 31 : item.value;
                    }
                }
                else {
                    item.value = item.value >=31 ? 31 : item.value;
                }

                if(item.classList.contains('js-for-date')) {
                    if(item.value.length > 0) {
                        item.classList.add('fill');
                        checkCompleteDate(item, arrMonth[index], arrYear[index], item.parentElement.parentElement.parentElement);
                    }
                    else {
                        item.classList.remove('fill');
                        checkCompleteDate(item, arrMonth[index], arrYear[index], item.parentElement.parentElement.parentElement);
                    }
                }
                if(item.classList.contains('js-date-endLife')) {
                    if(arrYear[index].value >= 2025) {
                        item.value >= data.getDate() ? item.value = data.getDate() : item.value;
                    }
                }
            })
        })
    }
    checkDate();
    //--------

    //Проверка ввода МНСЯЦА рождения
    let wrapperList = getArray('.js-modal-wrapper-list');
    arrListsValue = getArray('.js-value-list');
    elListHidden = getArray('.js-value-list-hidden');// Невидимый элемент
    getArray('.js-modal-call-button-list').forEach((item, index) => {
        item.addEventListener('click', () => {
            let inputsDate = getArray('.js-date'),
                inputsMonth = getArray('.js-month'),
                inputsYear = getArray('.js-year'),
                numberMonth,
                arrList = wrapperList[index].querySelectorAll('.js-list');
            if(inputsYear[index].value && inputsYear[index].value % 4 === 0) {
                isLeapYear = true;
            }
            arrList.forEach((etem, endex) => {
                etem.addEventListener('click', (e) => {
                    if(!arrListsValue[index].classList.contains('js-rank-list-value')) {
                        arrListsValue[index].value = months[endex];
                        arrListsValue[index].parentElement.parentElement.classList.remove('is-error');
                    }
                    if(arrListsValue[index].classList.contains('js-required')) {
                        if(elForm.lastName.value.length >=2 && elForm.firstName.value.length >=2 && elForm.middleName.value.length >=2 && elForm.birthDate.value.length>0 && elForm.birthYear.value.length >=4 && elForm.birthPlace.value.length >=2 ) {
                            isRequired1 = true;
                            showButton();
                            checkIsCompleteBlock();
                            checkIsCompleteSection();
                        }
                    }

                    elListHidden[index].value = etem.value;
                    numberMonth = Number(elListHidden[index].value);
                    if(arrListsValue[index].classList.contains('js-for-month')) {
                        let block;
                        if (arrListsValue[index].parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains('js-block')) {
                            block = arrListsValue[index].parentElement.parentElement.parentElement.parentElement.parentElement;
                        }
                        else {
                            block = arrListsValue[index].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                        }
                        if(arrListsValue[index].value.length > 0) {
                            arrListsValue[index].classList.add('fill');
                            checkCompleteDate(inputsDate[index], inputsMonth[index], inputsYear[index], block);
                        }
                        else {
                            arrListsValue[index].classList.remove('fill');
                            checkCompleteDate(inputsDate[index], inputsMonth[index], inputsYear[index], block);
                        }
                    }
                    if(arrListsValue[index].classList.contains('js-month-endLife')) {
                        let data = new Date;
                        if((endex >= data.getMonth() + 1) && inputsYear[index].classList.contains('js-year-endLife') && inputsYear[index].value >= data.getFullYear()) {
                            arrListsValue[index].value = months[data.getMonth()];
                            if(String(data.getMonth()).length < 2) {
                                elListHidden[index].value = '0' + (data.getMonth() + 1);
                            }
                            else {
                                elListHidden[index].value = data.getMonth();
                            }
                        }
                        else {
                            arrListsValue[index].value = months[endex];
                            elListHidden[index].value = etem.value;
                        }
                    }
                    if(numberMonth === 2) {
                        if(inputsYear[index].value) {

                            if(isLeapYear) {
                                inputsDate[index].value = inputsDate[index].value >= 29 ? 29 : inputsDate[index].value;
                            }
                            else {
                                inputsDate[index].value = inputsDate[index].value >= 28 ? 28 : inputsDate[index].value;
                            }
                        }
                        else {
                            inputsDate[index].value = inputsDate[index].value >= 28 ? 28 : inputsDate[index].value;
                        }

                    }
                    else if((numberMonth < 8 && numberMonth % 2 !== 0) || (numberMonth >= 8 && numberMonth % 2 === 0)){
                        inputsDate[index].value = inputsDate[index].value >= 31 ? 31 : inputsDate[index].value;
                    }
                    else {
                        inputsDate[index].value = inputsDate[index].value >= 30 ? 30 : inputsDate[index].value;
                    }


                    closeModal(e.target.parentElement.parentElement.parentElement, e.target.parentElement.parentElement);
                    e.target.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('active');
                })
            })
        })
    })
    //------

    //Проверка ввода ГОДА рождения
    function checkYear() {
        arrayBlocks.forEach((item) => {
            let arrayYear = item.querySelectorAll('.js-year'),
                elDates = item.querySelector('.js-date'),
                elMonth = item.querySelector('.js-month'),
                numberMonth;
            arrayYear.forEach((etem, endex) => {
                etem.addEventListener('input', () => {
                    if (etem.value.length === 4) {
                        let data = new Date;
                        if(etem.classList.contains('js-year-endCombat')) {
                            if(elForm.recruitYear.value) {
                                etem.value = getElement('.js-year-call').value > etem.value ? getElement('.js-year-call').value : etem.value;
                            }
                            if(isNotAlive) {
                                etem.value > 1945 ? etem.value = 1945 : etem.value;
                            }
                            else {
                                if(Number(etem.value) > Number(data.getFullYear())) {
                                    etem.value > data.getFullYear() ? etem.value = data.getFullYear() : etem.value;
                                    elDates.value = elDates.value > data.getDate() ? data.getDate() : elDates.value;
                                    if(Number(elMonth.previousElementSibling.value) > data.getMonth()) {
                                        elMonth.value = months[data.getMonth()];
                                    }
                                }
                            }
                            etem.value < 1941 ? etem.value = 1941 : etem.value;

                            if(elForm.recruitYear.value && elForm.recruitMonth.value) {//если год призыва и месяц призыва введены
                                if(elForm.recruitYear.value >= elForm.endCombatYear.value) { // и если год призыва больше или равен году завершения боевого пути
                                    // то месяц завершения боевого пути будет либо таким же как месяц призыва либо меньшим
                                    elMonth.value = elForm.endCombatMonth.value >= elForm.recruitMonth.value ? months[Number(elForm.recruitMonth.value) - 1] : elMonth.value;
                                }
                            }

                            if(elForm.recruitYear.value && elForm.recruitMonth.value && elForm.recruitDate.value) {
                                if(elForm.recruitYear.value >= elForm.endCombatYear.value) {
                                    if(elForm.endCombatMonth.value >= elForm.recruitMonth.value) {
                                        elForm.endCombatDate.value = elForm.endCombatDate.value >= elForm.recruitDate.value ? elForm.recruitDate.value : elForm.endCombatDate.valueж
                                    }
                                }
                            }
                        }
                        else if(etem.classList.contains('js-year-call')) {
                            etem.value < 1900 ? etem.value = 1900 : etem.value;
                            etem.value > 1945 ? etem.value = 1945 : etem.value;
                        }
                        else if(etem.classList.contains('js-year-endLife')) {
                            etem.value >= data.getFullYear() ? etem.value = data.getFullYear() : etem.value;
                            etem.value < 1945 ? etem.value = 1945 : etem.value;
                            if(etem.value >= data.getFullYear() && elDates.value >= data.getDate()) {
                                elDates.value = data.getDate();
                            }
                            if(etem.value >= data.getFullYear() && Number(elForm.endMonth.value) >= data.getMonth() + 1) {
                                elMonth.value = months[data.getMonth()];
                                if(String(data.getMonth()).length < 2) {
                                    elForm.endMonth.value = '0' + (data.getMonth() + 1);
                                }
                            }
                        }
                        else {
                            etem.classList.remove('is-error');
                            if (etem.value < 1820) {
                                etem.value = 1820;
                            }
                            if (etem.value > 1939) {
                                etem.value = 1939;
                            }
                        }
                        isLeapYear = etem.value % 4 === 0;
                        numberMonth = Number(elMonth.previousElementSibling.value);
                        if(isLeapYear) {
                            if(numberMonth) {
                                if((numberMonth < 8 && numberMonth % 2 !== 0) || (numberMonth >= 8 && numberMonth % 2 === 0)) {
                                    elDates.value = elDates.value >= 31 ? 31 : elDates.value;
                                }
                                else {
                                    elDates.value = elDates.value >= 30 ? 30 : elDates.value;
                                }
                                if(numberMonth === 2) {
                                    elDates.value = elDates.value >= 29 ? 29 : elDates.value;
                                }
                            }
                            else {
                                elDates.value = elDates.value >= 31 ? 31 : elDates.value;
                            }

                        }
                    }
                    if (etem.value.length > 4) {
                        etem.value = etem.value.substr(0, 4);
                    }
                    if(etem.classList.contains('js-for-year')) {
                        if(etem.value.length >= 4) {
                           etem.classList.add('fill');
                            checkCompleteDate(elDates, elMonth, etem, item);
                        }
                        else {
                            etem.classList.remove('fill');
                            checkCompleteDate(elDates, elMonth, etem, item);
                        }
                    }
                })
            })
        })
    }
    checkYear();
    //-------

    //Проверка на то, введено ли что-то в текстареа
    function checkInputTextarea() {
        let lastDigitInRemain = 0;
        arrayTextarea = elSection.querySelectorAll('.js-textarea');
        arrayRemainSymbols = elSection.querySelectorAll('.js-remain-symbols-value');
        arrayRemainSymbolsText = elSection.querySelectorAll('.js-remain-symbols-text');
        arrayTextarea.forEach((etem, index) => {
            etem.addEventListener('input', () => {
                if (etem.value.length > 0) {
                    etem.parentElement.parentElement.classList.add('is-complete');
                    arrayRemainSymbols[index].innerText = 1000 - etem.value.length;
                    lastDigitInRemain = Number(arrayRemainSymbols[index].textContent.substr( arrayRemainSymbols[index].textContent.length-1, arrayRemainSymbols[index].textContent.length));
                    if(lastDigitInRemain === 0 || lastDigitInRemain > 4) {
                        arrayRemainSymbolsText[index].textContent = 'символов';
                    }
                    else if (lastDigitInRemain !==0 && lastDigitInRemain > 1) {
                        arrayRemainSymbolsText[index].textContent = 'символа';
                    }
                    else if(lastDigitInRemain === 1) {
                        arrayRemainSymbolsText[index].textContent = 'символ';
                    }
                    checkIsCompleteBlock();
                    checkIsCompleteSection();
                }
                else {
                    etem.parentElement.parentElement.classList.remove('is-complete');
                    arrayRemainSymbols[index].textContent = 1000;
                    checkIsCompleteBlock();
                    checkIsCompleteSection();
                }
            })
        })
    }
    checkInputTextarea();
    //-------

    // Получения высоты блока для загружаемой картинки
    function sizeImg() {
        elForImg.style.height = `${window.innerHeight * 0.8 - 48 - elModalTitleFile.offsetHeight - 32 - 24 - elForCheckbox.offsetHeight - 24 - elUploadText.offsetHeight - 32 - elUploadButton.offsetHeight}px`;
    }
    window.addEventListener('resize', () => {
        sizeImg();
    })
    //---------

    //Проверяем загружвемый файл на размер и тип файла
    elInputFile.addEventListener('change', () => {
        let file = elInputFile.files[0],
            arrayTypes = ['jpg','jpeg', 'png', 'gif'],
            typeImg,
            limitSize = 5242880,// Максимальный размер фото 5Mb
            wrongType = false,
            detectWrongType = -1;
        fileData = elInputFile.files[0];
        elInputFile.value = '';
        if(file) {
            typeImg = file.type.substr(6);// 6 стоит, потому как file.type возвращает image/png . Нужно png
            arrayTypes.forEach((item, index) => {
                if(item === typeImg) {
                    detectWrongType = 0;
                    detectWrongType += index;
                }
            })
            if(detectWrongType < 0) {
                wrongType = true;
            }
            else {
                wrongType = false;
            }
            if(file.size < limitSize) {
                if(wrongType) {
                    elForInputFile.classList.add('is-error');
                    elFileType.classList.add('is-error');
                }
                else {
                    elForInputFile.classList.remove('is-error');
                    elFileType.classList.remove('is-error');
                }
                elFileSize.classList.remove('is-error');
            }
            else {
                elFileSize.classList.add('is-error');
                elForInputFile.classList.add('is-error');
            }
            if(file.size < limitSize && !wrongType) {
                let fileReader = new FileReader();
                openModal(elModalFile, elModalWrapperFile);
                elModalLayerFile.addEventListener('click', () => {
                    closeModalFile(elModalFile, elModalWrapperFile);
                })
                elModalCrossFile.addEventListener('click', () => {
                    closeModalFile(elModalFile, elModalWrapperFile);
                })
                fileReader.addEventListener('load', (e) => {
                    elFileLoad.src = e.target.result;
                })
                fileReader.readAsDataURL(file);
                sizeImg();
            }
        }
    })
    //-------

    // Обработка нажатия чекбокса в Модалке с картинкой
    elUploadCheckbox.addEventListener('change', () => {
        if(elUploadCheckbox.checked) {
            elUploadButton.classList.remove('disabled');
            elUploadButton.removeAttribute('disabled');
        }
        else {
            elUploadButton.classList.add('disabled');
            elUploadButton.setAttribute('disabled', 'disabled');
        }
    })
    //-------

    //Обработка нажатия кнопки Загрузить в модалке с картинкой
    elUploadButton.addEventListener('click', () => {
        elViewImg.src = elFileLoad.src;
        elModalFile.classList.remove('active');
        elPlaceImg.classList.add('active');
        yesScrollBody();
    })
    //--------

    //Обработака нажатия кнопки УДАЛИТЬ загруженную картинку
    elDelImg.addEventListener('click', () => {
        elFileLoad.value = '';
        elFileLoad.src = '';
        elViewImg.src = '';
        elPlaceImg.classList.remove('active');
        elUploadCheckbox.checked = false;
        elUploadButton.classList.add('disabled');
        elUploadButton.setAttribute('disabled', 'disabled');

    })
    //--------
    //Функция показывающая финал
    let isShow = false;
    function showFinal() {
        if(isNotAlive) {
            isShow = Array.from(arrayTimelineItems[1].querySelectorAll('.js-for-block')).some((el) => {
                return el.classList.contains('is-complete');
            })
        }
        else {
            isShow = Array.from(arrayTimelineItems[2].querySelectorAll('.js-for-block')).some((el) => {
                return el.classList.contains('is-complete');
            })
        }
        if(isShow) {
            arrayTimelineItems[3].classList.add('is-complete');
        }
        else {
            arrayTimelineItems[3].classList.remove('is-complete');
        }
    }
    //

    //Функция выделения блока в правом меню Таймлайн
    function highlightCurrentTimelineItem() {
        if(!arrayTimelineItems[numberSection-1].classList.contains('is-complete') && !arrayTimelineItems[numberSection-1].classList.contains('is-current')){
            arrayTimelineItems[numberSection-1].classList.add('is-current');
        }
        else {
            arrayTimelineItems[numberSection].classList.remove('is-current');
        }
    }
    //-------

    //Получаем элемент для ввода ссылки в Разделе формы
    // И проверяем что ввел юзер и если надо добавляем https или www или все сразу
    arrayButtonCallModalAddLinks.forEach((item, index) => {
        let counter =0;
        let a = 5;
        item.addEventListener('click', () => {
            if(item.parentElement.classList.contains('js-has-link1')){
               a = 0;
            }
            //Добавить более 5 ссылок нельзя
            if(arrayFormLinks[index].querySelectorAll('.js-link').length > 3) {
                item.setAttribute('disabled','disabled');
            }
            else {
                item.removeAttribute('disabled');
            }//------
            elInputUrl = arrayModalAddLinks[index].querySelector('.js-input-url');// Поле ввода адреса
            elInputUrl.value = ''; // обнуляем значение поля ввода адреса
            elButtonAddUrl = arrayModalAddLinks[index].querySelector('.js-button-add-link'); // Кнопка добавить ссылку
            elButtonAddUrl.setAttribute('disabled','disabled'); // Ставим кнопку добавления в disabled
            elButtonAddUrl.classList.add('disabled');
            elInputUrl.addEventListener('input', () => {
                if(elInputUrl.value.length > 5) {
                    elButtonAddUrl.classList.remove('disabled');
                    elButtonAddUrl.removeAttribute('disabled');
                }
                else {
                    elButtonAddUrl.classList.add('disabled');
                    elButtonAddUrl.setAttribute('disabled', 'disabled');
                }
            });
        });

        arrayButtonsAddLink[index].addEventListener('click', (e) => {
            counter++;
            let div = document.createElement('DIV');
            div.classList.add('form-links__item');
            div.classList.add('js-link');
            div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19817 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071" stroke="#7659B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <input type="hidden" class="js-ref" name="ref${counter + a}" value="${elInputUrl.value}"/>
                            <a href="${elInputUrl.value}" target="_blank" class="form-links__item-text js-link-url" data-current="0">${elInputUrl.value}</a>
                            <div class="form-links__item-for-button">
                                <div class="form-links__item-button js-call-popup-manage-links"><span></span></div>
                                <div class="form-links-popup js-popup-manage-links">
                                    <div class="form-links-popup-wrapper">
                                        <div class="form-links-popup__item js-delete-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>Удалить
                                        </div>
                                        <div class="form-links-popup__item js-edit-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 8.00012L4 16.0001V20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>Редактировать
                                        </div>
                                    </div>
                                    <div class="js-layer" style="position: fixed;left: 0;top: 0;z-index: 1;width: 100%;height: 100%;"></div>
                                </div>
                            </div>`;
            arrayFormLinks[index].append(div);
            let arrayLinks = getArray('.js-link'),// Массив блоков со ссылкой внутри
                arrayLinkUrl = [], // Массив непосредственно ссылок внтури блока

                // Массив кнопок вызова Модалки управления с УДалить и Редактировать
                arrayButtonsCallModalManage = arrayFormLinks[index].querySelectorAll('.js-call-popup-manage-links'),

                // Массив модалко управления ссыоками , внутри кнопки Удалить и Редактировать
                arrayModalManageLink = arrayFormLinks[index].querySelectorAll('.js-popup-manage-links'),

                //Массив кнопок удалить ссылку
                arrayDeleteButtons = getArray('.js-delete-link'),

                //Массив кнопок редактировать ссылку
                arrayEditButtons = getArray('.js-edit-link'),

                arrayLayers = getArray('.js-layer');
            arrayButtonsCallModalManage.forEach((etem, endex) => {
                etem.addEventListener('click', () => {
                    if(!arrayModalManageLink[endex].classList.contains('active')){
                        arrayModalManageLink[endex].classList.add('active');
                    }
                });
            })
            arrayDeleteButtons.forEach((otem, ondex) => {
                otem.addEventListener('click', () => {
                    arrayLinks[ondex].remove();
                    let refs = [];
                    arrayBlocks.forEach((o) => {
                        o.querySelectorAll('.js-ref').forEach((utem) => {
                            refs.push(utem);
                        })
                    })
                    refs.forEach((utem, undex) => {
                        utem.removeAttribute('name');
                        utem.setAttribute('name', `ref${undex + 1}`);
                    })
                    if(arrayFormLinks[index].childNodes.length < 5) {
                        item.removeAttribute('disabled');
                    }
                });
            })
            arrayLayers.forEach((etem, endex) => {
                etem.addEventListener('click', () => {
                    arrayModalManageLink[endex].classList.remove('active');
                });
            })
            arrayEditButtons.forEach((otem, ondex) => {
                otem.addEventListener('click', () => {
                    //Скрыть модалку управления ссылками с кнопками Удалить Добавить
                    otem.parentElement.parentElement.classList.remove('active');
                    openModal(arrayModalEdit[index], arrayModalEditWrapper[index]);
                    arrayModalEdit[index].classList.add('active');
                    arrayLinkUrl = getArray('.js-link-url');
                    arrayLinkUrl.forEach((utem) => {
                        utem.dataset.current = '0';
                    })
                    otem.parentElement.parentElement.parentElement.previousElementSibling.dataset.current = '1';
                    if(otem.parentElement.parentElement.parentElement.previousElementSibling.dataset.current === '1') {
                        arrayModalEdit[index].querySelector('.js-edit-url').value = otem.parentElement.parentElement.parentElement.previousElementSibling.textContent;
                    }
                })
            });
            closeModal(e.target.parentElement.parentElement.parentElement.parentElement, e.target.parentElement.parentElement.parentElement);
        })
        arrayButtonChangeLink[index].addEventListener('click', function () {
            arrayModalEdit[index].classList.remove('active');
            yesScrollBody();
            if(arrayModalEdit[index].querySelector('.js-edit-url').value.length > 0) {
                arrayLinkUrl = getArray('.js-link-url');
                for(let i of arrayLinkUrl) {
                    if(i.dataset.current === '1') {
                        i.textContent = arrayModalEdit[index].querySelector('.js-edit-url').value;
                    }
                }
            }
        })
    })
    arrayCrossModalEditLink.forEach((item, index) => {
        item.addEventListener('click', () => {
            closeModal(arrayModalEdit[index], arrayModalEditWrapper[index]);
        })
    })

    //Функция смены названия экрана
    function setMainTitle() {
        elMainTitle.textContent = arraySectionNames[numberSection-1].textContent;
    }
    //-------

    elPlaceRecruit.addEventListener('input', () => {
        elPlaceRecruit.parentElement.parentElement.classList.add('is-complete');
        checkIsCompleteBlock();
        checkIsCompleteSection();
    })

    //Функция показывающий тот иной экран (секцию формы)
    function showSection() {
        arraySections.forEach((item) => {
            item.classList.remove('active');
        })
        arraySections[numberSection - 1].classList.add('active');
    }
    //--------

    //Создание модалок выбора из списка, добавление выбоанноо из списка на страницу и удаление выббранного из списка
    let counter = 0,
        arrayChosenBattleValue = [],// массив выбранных значений
        arrayChosenBattleValue1 = [],// массив выбранных значений
        arrayChosenAwardValue = [],// массив выбранных значений
        isChecked = false,
        arrayChooseItem = [],
        arrayChooseItemNameBattle = [],
        arrayChooseItemNameBattle1 = [],
        arrayChooseItemNameAward = [],
        arrayChooseItemNameAward1 = [],
        arrayChosenAwardValue1 = [],
        arrayData = [],
        elSearchModal,
        icon,
        isCreate = false;
    getArray('.js-block').forEach((item) => {
        elButtonsCallModalChoose = item.querySelector('.js-modal-call-button-add-choose');
        if(elButtonsCallModalChoose) {
            //если есть кнопка elButtonsCallModalChoose , то отпределяем нужные элементы в блоке arrayBlocks
            elButtonsCallModalChoose.addEventListener('click', () => {

                // Модалка с созданными элементами выбора
                elModalChoose = item.querySelector('.js-modal-popup-choose');

                // Элемент-обертка внутри модалки выбора
                elModalWrapperChoose = item.querySelector('.js-modal-wrapper-choose');

                //Элемент где создаются все элементы выбора
                elMultiChooseList = item.querySelector('.js-choose-list');

                // Кнопка добавления выбранны элементов
                elButtonsAddChosen = item.querySelector('.js-button-add-choose');

                // Элемент куда вставляем все что выбрали в модалке
                elChosen = item.querySelector('.js-form-choose');

                elSearchModal = item.querySelector('.js-search-choose');

                // Взавимисоти от  блока берем тот или иной массив данных а также ту или иную иконку
                if(item.classList.contains('js-has-battle')) {
                    arrayData = battles;
                    icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M16.1078 17.8309L3.6158 7.06196L3.6158 3.61589L7.06187 3.61589L17.8308 16.1079M14.3848 19.554L16.9693 16.9694M19.5539 14.3849L16.9693 16.9694M16.9693 16.9694L20.4154 20.4155" stroke="#7659B1" stroke-width="1.5" stroke-linecap="round"/>
                              <circle cx="20.846" cy="20.8457" r="0.718315" transform="rotate(-45 20.846 20.8457)" stroke="#7659B1"/>
                              <path d="M6.20154 16.1078L7.54766 14.5463L8.22073 13.7656M7.92458 17.8308L9.48608 16.4847L10.2668 15.8117M4.47851 14.3848L7.06306 16.9693M9.64761 19.5539L7.06306 16.9693M7.06306 16.9693L3.61699 20.4154M13.8247 7.1231L14.2783 6.7388L16.9705 3.6158L20.4166 3.6158L20.4166 7.06187L17.2936 9.75412L16.2615 10.7782" stroke="#7659B1" stroke-width="1.5" stroke-linecap="round"/>
                              <circle cx="3.18555" cy="20.8465" r="0.718315" transform="rotate(45 3.18555 20.8465)" stroke="#7659B1"/>
                          </svg>`;
                }
                if(item.classList.contains('js-has-awards')) {
                    arrayData = awards;
                    icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M9.1718 14.8293L14.8287 9.17241M7.05086 11.2935L5.63664 12.7077C4.07455 14.2698 4.07409 16.8027 5.63619 18.3648C7.19829 19.9269 9.7317 19.9264 11.2938 18.3643L12.7065 16.9502M11.2929 7.05049L12.7071 5.63628C14.2692 4.07418 16.8016 4.07446 18.3637 5.63656C19.9258 7.19865 19.9257 9.73134 18.3636 11.2934L16.9501 12.7076" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>`
                }
                //---
                if(elChosen.childNodes.length === 0) {// Услвоие по которому содержимое модалки создается только 1 раз
                    arrayData.forEach((etem) => {
                        // Создаем наполнение модалки и добавляем его
                        let elDivBlock = document.createElement('div');
                        elDivBlock.classList.add('choose-list-block');
                        elDivBlock.innerHTML = `<div class="choose-list-block__title">${etem.title}</div>`;
                        etem.content.forEach((otem) => {
                            let elLabelItem = document.createElement('LABEL'),
                                elUrl = `<img src="${otem.url}">`;
                            elLabelItem.classList.add('choose-list__item');
                            elLabelItem.innerHTML =`<input type="checkbox" name="choose" class="js-choose" value="${otem.id}"/>
                                                    <span class="choose-list__item-checkbox"></span>
                                                    ${otem.url ? elUrl : ''}
                                                    <div class="choose-list__item-data">
                                                        <input type="hidden" value="${otem.name}"/>
                                                        <div>${otem.name}</div>
                                                        <span>${otem.text}</span>
                                                    </div>`;
                            elDivBlock.append(elLabelItem);
                        })
                        // Добавляем в модалку столько содержимого сколько элементов в массиве arrayData
                        if(elMultiChooseList.childNodes.length < arrayData.length) {
                            elMultiChooseList.append(elDivBlock);
                        }
                        isCreate = true;
                        //---
                    })
                    arrayChooseItem = elMultiChooseList.querySelectorAll('.js-choose');// массив элементов выбора
                    // Запускаем обработчик изменения (клике) кажлого элемента выбора
                    arrayChooseItem.forEach((etem, endex) => {
                        etem.addEventListener('change', (e) => {
                            if(item.classList.contains('js-has-battle')) {
                                if(etem.checked) {
                                    arrayChosenBattleValue.push(etem.value);// При выборе на элемент выбора заполняем массив выбранных значений
                                    //arrayChosenBattleValue = Array.from(new Set(arrayChosenBattleValue1));
                                    arrayChooseItemNameBattle.push(etem.nextElementSibling.nextElementSibling.querySelector('div').textContent);
                                    //arrayChooseItemNameBattle =Array.from(new Set(arrayChooseItemNameBattle1));
                                }
                                else {
                                    // когда снимаем выбор удаляем этот элемент из массива
                                    let startPos = arrayChosenBattleValue.indexOf(etem.value);
                                    arrayChosenBattleValue.splice(startPos, 1);
                                    arrayChooseItemNameBattle.splice(startPos, 1);
                                }
                            }
                            if(item.classList.contains('js-has-awards')) {
                                if(etem.checked) {
                                    arrayChosenAwardValue.push(etem.value);// При выборе на элемент выбора заполняем массив выбранных значений
                                    //arrayChosenAwardValue = Array.from(new Set(arrayChosenAwardValue1));
                                    arrayChooseItemNameAward.push(etem.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('div').textContent);
                                    //arrayChooseItemNameAward = Array.from(new Set(arrayChooseItemNameAward1));
                                }
                                else {
                                    // когда снимаем выбор удаляем этот элемент из массива
                                    let startPos = arrayChosenAwardValue.indexOf(etem.value);
                                    arrayChosenAwardValue.splice(startPos, 1);
                                    arrayChooseItemNameAward.splice(startPos, 1);
                                }
                            }

                            // если хоть один элемент выбран, переменная isChecked становится true
                            isChecked = Array.from(arrayChooseItem).some(choose => {
                                return choose.checked;
                            })//---


                            if(isChecked) {// если что-то выбрано, то активируем  кнопку Добавить
                                elButtonsAddChosen.classList.remove('disabled');
                                elButtonsAddChosen.removeAttribute('disabled');
                            }
                            else { // если ничего не выбрано, то кнопку Добавить деактивируем
                                elButtonsAddChosen.classList.add('disabled');
                                elButtonsAddChosen.setAttribute('disabled','disabled');
                            }
                        })
                    })
                }
                // Обработка запроса в поиске
                let resultSearchModal = [],
                    resultElements = [],
                    resultIndex = [];
                elSearchModal.addEventListener('input', () => {
                    resultSearchModal = [];
                    resultElements = [];
                    resultIndex = [];
                    for(let i of arrayChooseItem) {
                        if(item.classList.contains('js-has-awards')) {
                            i.nextElementSibling.nextElementSibling.nextElementSibling.children[1].textContent = i.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;
                            if (i.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.toLowerCase().indexOf(elSearchModal.value.toLowerCase()) !== -1) {
                                // все индексы первого совпадения
                                resultIndex.push(i.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.toLowerCase().indexOf(elSearchModal.value.toLowerCase()));
                                //---
                                resultElements.push(i.nextElementSibling.nextElementSibling.nextElementSibling.children[1]);// Все дивы с нзавнием
                                resultSearchModal.push(i.parentElement);// все элементы с совпашим запросом
                            }
                        }
                        if(item.classList.contains('js-has-battle')) {
                            i.nextElementSibling.nextElementSibling.children[1].textContent = i.nextElementSibling.nextElementSibling.firstElementChild.value;
                            if (i.nextElementSibling.nextElementSibling.firstElementChild.value.toLowerCase().indexOf(elSearchModal.value.toLowerCase()) !== -1) {
                                // все индексы первого совпадения
                                resultIndex.push(i.nextElementSibling.nextElementSibling.firstElementChild.value.toLowerCase().indexOf(elSearchModal.value.toLowerCase()));
                                //---
                                resultElements.push(i.nextElementSibling.nextElementSibling.children[1]);// Все дивы с нзавнием
                                resultSearchModal.push(i.parentElement);// все элементы с совпашим запросом
                            }
                        }
                    }
                    if(resultSearchModal.length) {
                        resultSearchModal[0].scrollIntoView({
                            behavior: 'smooth'
                        })
                    }
                    resultElements.forEach((etem, endex ) => {
                        let leftPart,
                            centerPart,
                            rightPart;
                        leftPart = etem.textContent.substring(0, resultIndex[endex]);
                        centerPart = etem.textContent.substr(resultIndex[endex], elSearchModal.value.length);
                        rightPart = etem.textContent.substring(resultIndex[endex] + elSearchModal.value.length);
                        etem.innerHTML = `${leftPart}<b>${centerPart}</b>${rightPart}`;
                    })
                })
                //---
            })
            // Нажатие на кнопку Добавить. Добавляем выбранное из списка в модалке на страницу.
            elButtonsCallModalChoose.nextElementSibling.querySelector('.js-button-add-choose').addEventListener('click', () => {
                counter++;
                elChosen.textContent ='';
                if(item.classList.contains('js-has-battle')) {
                    arrayChosenBattleValue.forEach((etem, endex) => {
                        let div = document.createElement('DIV');
                        div.classList.add('form-links__item');
                        div.classList.add('js-chosen');
                        div.innerHTML = `${icon}
                        <input type="hidden" class="js-chosen-value" name="battle${endex + 1}" value="${etem}"/>
                        <a href="https://ru.ruwiki.ru/wiki/${arrayChooseItemNameBattle[endex]}" target="_blank" class="form-links__item-text" data-current="0">${arrayChooseItemNameBattle[endex]}</a>
                        <div class="form-links__item-for-button">
                            <div class="form-links__item-button js-chosen-delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2L6 6M4 6L20 6M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>`;
                        elChosen.append(div);
                    });
                }
                if(item.classList.contains('js-has-awards')) {
                    arrayChosenAwardValue.forEach((etem, endex) => {
                        let div = document.createElement('DIV');
                        div.classList.add('form-links__item');
                        div.classList.add('js-chosen');
                        div.innerHTML = `${icon}
                        <input type="hidden" class="js-chosen-value" name="award${endex + 1}" value="${etem}"/>
                        <a href="https://ru.ruwiki.ru/wiki/${arrayChooseItemNameAward[endex]}" target="_blank" class="form-links__item-text" data-current="0">${arrayChooseItemNameAward[endex]}</a>
                        <div class="form-links__item-for-button">
                            <div class="form-links__item-button js-chosen-delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2L6 6M4 6L20 6M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>`;
                        elChosen.append(div);
                    });
                    getElement('.js-has-awards').classList.add('is-complete');
                    checkIsCompleteBlock();
                    checkIsCompleteSection();
                }
                closeModal(elModalChoose, elModalWrapperChoose);
                let arrayChosenItem =[],
                    arrayChosenInput = [],

                    // массив всех элементов  куда добавляем все выбранные элементы из модалки
                    arrayChosen = [];
                if(item.classList.contains('js-has-battle')) {
                    arrayChosen = item.querySelector('.js-form-choose');
                }
                if(item.classList.contains('js-has-awards')) {
                    arrayChosen = item.querySelector('.js-form-choose');
                }

                // Массив всеъ кнопок УДАЛИТЬ для выбранных элементов
                arrayButtonsDeleteChosen = arrayChosen.querySelectorAll('.js-chosen-delete');

                //Массив всех блоков которые добавили в arrayChosen  при выборе элементов в Модалке
                arrayChosenItem = arrayChosen.querySelectorAll('.js-chosen');

                //Массив всех элементов Input c name и value
                arrayChosenInput = arrayChosen.querySelectorAll('.js-chosen-value');

                arrayButtonsDeleteChosen.forEach((etem, endex) => {
                    etem.addEventListener('click', () => {
                        for(let i of arrayChooseItem) {
                            if(i.value === arrayChosenInput[endex].value) {// если значение Inputa в модалке равно значению inputa  из добавленных
                                i.checked = false; // в модалке убриаем выбор
                                if(item.classList.contains('js-has-battle')){
                                    let startPos = arrayChosenBattleValue.indexOf(i.value);
                                    arrayChosenBattleValue.splice(startPos, 1); // удаляем из массива значений
                                    arrayChooseItemNameBattle.splice(startPos, 1); // удаляем из массива названий
                                }
                                if(item.classList.contains('js-has-awards')) {
                                    let startPos = arrayChosenBattleValue.indexOf(i.value);
                                    arrayChosenAwardValue.splice(startPos, 1); // удаляем из массива значений
                                    arrayChooseItemNameAward.splice(startPos, 1); // удаляем из массива названий
                                }
                                break;
                            }
                        }
                        arrayChosenItem[endex].remove();
                        if(elChosen.childNodes.length === 0) {
                            getElement('.js-has-awards').classList.remove('is-complete');
                            checkIsCompleteBlock();
                            checkIsCompleteSection();
                        }
                        if(arrayChosen.childNodes.length === 0) {
                            arrayChosenBattleValue.length = 0;
                            arrayChooseItemNameBattle.length = 0;
                            arrayChooseItem.forEach((o) => {
                                o.checked = false;
                            })
                            elMultiChooseList.textContent ='';
                            elButtonsAddChosen.classList.add('disabled');
                            elButtonsAddChosen.setAttribute('disabled', 'disabled');
                        }
                    })
                })
            })
        }
    })
    //--------

    // Выбор по радиокнопке
    arrayRadioButton.forEach((item, index) => {
        //arrayRadioButton[0].checked = true;
        elForm = document.forms.formHero;
        item.addEventListener('change', () => {
            elRadioChooseWrapper.style.height = `${elRadioChoose.offsetHeight}px`;
            elRadioChooseWrapper.classList.add('active');
            item.parentElement.parentElement.parentElement.classList.add('is-complete');
            item.value = arrayRadioButtonValue[index].textContent;
            elRadioValue.value = item.value;
            //Очищаем поля даты Завершения боевого пути
            elForm.endCombatDate.value ='';
            elForm.endCombatYear.value ='';
            elForm.endCombatMonth.value = '';
            elForm.endCombatMonth.nextElementSibling.value = '';
            switch(item.value) {
                case 'Прошёл всю войну':
                    isNotAlive = false;
                    elSuggestion.innerHTML = `<span>Укажите страну, регион или населенный пункт, где ветеран закончил свой боевой путь.</span>`;
                    elPublish.classList.add('is-hidden');
                    elNext.classList.remove('is-hidden');
                    arrayTimelineItems[2].classList.remove('is-hidden');
                    break;
                case 'Погиб':
                    isNotAlive = true;
                    elSuggestion.innerHTML = `<span>Укажите страну, регион или населенный пункт, где ветеран погиб.</span>`;
                    elPublish.classList.remove('is-hidden');
                    elNext.classList.add('is-hidden');
                    arrayTimelineItems[2].classList.add('is-hidden');
                    break;
                case 'Пропал без вести':
                    isNotAlive = true;
                    elSuggestion.innerHTML = `<span>Укажите примерное место, где ветеран пропал без вести</span>`;
                    elPublish.classList.remove('is-hidden');
                    elNext.classList.add('is-hidden');
                    arrayTimelineItems[2].classList.add('is-hidden');
                    break;
            }

            checkIsCompleteBlock();
            checkIsCompleteSection();
            //---
        })
    })
    //--------

    //Обработка вызова модалки со списком ссылок
    arrayButtonsCallModalListOfLinks.forEach((item) => {
        item.addEventListener('click', () => {
            openModal(elModalListOfLink, elWrapperModalListOfLink);
        })
    })
    //--------

    //Обработка закртыия модалки со списком ссылок
    elCrossModalListOflInks.addEventListener('click', () => {
        closeModal(elModalListOfLink, elWrapperModalListOfLink);
    })
    //--------

    function collectChosenValueInArray(selector) {
        let collect = [];
        getArray(selector).forEach((item) => {
            collect.push(Number(item.value));
        })
        return collect;
    }

    function showEmptyRequiredField() {
        let arrReq =[];
        arrayBlocks.forEach((item) => {
            item.querySelectorAll('.js-required').forEach((etem) => {
                arrReq.push(etem);
            })
        })
        arrReq.forEach((item) => {
            if(item.classList.contains('js-month') && !item.value) {
                item.parentElement.parentElement.classList.add('is-error');
            }
            if(item.classList.contains('js-year') && item.value.length < 4) {
                item.classList.add('is-error');
            }
            if(item.value.length < 2 && !item.classList.contains('js-month') && !item.classList.contains('js-year') && !item.classList.contains('js-date')) {
                item.classList.add('is-error');
            }
            if(item.classList.contains('js-date') && item.value.length < 1) {
                item.classList.add('is-error');
            }
        })
        for(let item of arrReq) {
            if(item.value.length < 2 && !item.classList.contains('js-year')) {
                window.scrollTo({
                    top: item.offsetTop - 100,
                    behavior: 'smooth'
                })
                break;
            }
        }
    }

    function saveState1() {
        const data_send = new FormData();

        // Добавляем файлы в FormData

        if (filesSelfData1.length !== 0) {
            for (let i = 0; i < filesSelfData1.length; i++) {
                data_send.append('photos1[]', filesSelfData1[i]);
            }
        }

        let ref1 = elForm.ref1 ? elForm.ref1.value : '',
            ref2 = elForm.ref2 ? elForm.ref2.value : '' ,
            ref3 = elForm.ref3 ? elForm.ref3.value : '' ,
            ref4 = elForm.ref4 ? elForm.ref4.value : '' ,
            ref5 = elForm.ref5 ? elForm.ref5.value : '' ,
            valueDate = elForm.birthDate.value.length === 1 ? '0' + elForm.birthDate.value : elForm.birthDate.value,
            birthData = elForm.birthYear.value + '-' + elForm.birthMonth.value + '-' + valueDate;
        data_send.append('lastName', elForm.lastName.value);
        data_send.append('firstName', elForm.firstName.value);
        data_send.append('middleName', elForm.middleName.value);
        data_send.append('birthDate', birthData);
        data_send.append('birthPlace', elForm.birthPlace.value);
        data_send.append('lifePreWarPeriod', elForm.earlyYears.value);
        //data_send.append('photos1', photo);
        data_send.append('selfRefUrl1', ref1);
        data_send.append('selfRefUrl2', ref2);
        data_send.append('selfRefUrl3', ref3);
        data_send.append('selfRefUrl4', ref4);
        data_send.append('selfRefUrl5', ref5);

        $.ajax({
            url: this_host + "/index.php?r=api/save-data-step-one",
            async: false,
            type: 'POST',
            dataType: 'json',
            processData: false, // Важно для FormData!
            contentType: false, // Важно для FormData!
            cache: false,
            data: data_send,
            success: function () {
                console.log('OK');
            }
        });
    }

    function saveState2() {
        const data_send = new FormData();

        // Добавляем файлы в FormData
        let ref6 = elForm.ref6 ? elForm.ref6.value : '',
            ref7 = elForm.ref7 ? elForm.ref7.value : '' ,
            ref8 = elForm.ref8 ? elForm.ref8.value : '' ,
            ref9 = elForm.ref9 ? elForm.ref9.value : '' ,
            ref10 = elForm.ref10 ? elForm.ref10.value : '' ,
            valueDate,
            recruitData,
            valueDateEndCombat,
            endCombatPathData;
        if(elForm.recruitDate.value) {
            valueDate = elForm.recruitDate.value.length === 1 ? ('0' + elForm.recruitDate.value) : elForm.recruitDate.value;
        }
        else {
            valueDate = '';
        }
        if(elForm.recruitYear.value && elForm.recruitMonth.value && valueDate) {
            recruitData = elForm.recruitYear.value + '-' + elForm.recruitMonth.value + '-' + valueDate;
        }
        else if (elForm.recruitYear.value && !elForm.recruitMonth.value && !valueDateEndCombat) {
            recruitData = elForm.recruitYear.value + '-00'+ '-00';
        }
        else if(elForm.recruitYear.value && elForm.recruitMonth.value && !valueDateEndCombat) {
            recruitData = elForm.recruitYear.value + '-' + elForm.recruitMonth.value +  '-00';
        }
        else if(elForm.recruitYear.value && !elForm.recruitMonth.value && valueDateEndCombat) {
            recruitData = elForm.recruitYear.value +  '-00' + '-' + valueDateEndCombat
        }
        else {
            recruitData ='';
        }
        if(elForm.endCombatDate.value) {
            valueDateEndCombat = elForm.endCombatDate.value.length === 1 ? '0' + elForm.endCombatDate.value : elForm.endCombatDate.value;
        }
        else {
            valueDateEndCombat = ''
        }
        if(elForm.endCombatYear.value && elForm.endCombatMonth.value && valueDateEndCombat) {
            endCombatPathData = elForm.endCombatYear.value + '-' + elForm.endCombatMonth.value + '-' + valueDateEndCombat;
        }
        else if (elForm.endCombatYear.value && !elForm.endCombatMonth.value && !valueDateEndCombat) {
            endCombatPathData = elForm.endCombatYear.value + '-00'+ '-00';
        }
        else if(elForm.endCombatYear.value && elForm.endCombatMonth.value && !valueDateEndCombat) {
            endCombatPathData = elForm.endCombatYear.value + '-' + elForm.endCombatMonth.value +  '-00';
        }
        else if(elForm.endCombatYear.value && !elForm.endCombatMonth.value && valueDateEndCombat) {
            endCombatPathData = elForm.endCombatYear.value +  '-00' + '-' + valueDateEndCombat
        }
        else {
            endCombatPathData = '';
        }

        if(collectChosenValueInArray('[name *= "battle"]').length > 0) {
            data_send.set('battles[]', collectChosenValueInArray('[name *= "battle"]'));
        }

        if(collectChosenValueInArray('[name *= "award"]').length > 0) {
            data_send.set('awards[]', collectChosenValueInArray('[name *= "award"]'));
        }
        data_send.set('recruitPlace', elForm.recruitPlace.value);
        data_send.set('recruitDate', recruitData);
        data_send.set('rank', elForm.rank.value);
        data_send.set('subdivision', elForm.subdivision.value);
        data_send.set('militaryOperations', elForm.militaryOperations.value);
        data_send.set('inVovRefUrl1', ref6);
        data_send.set('inVovRefUrl2', ref7);
        data_send.set('inVovRefUrl3', ref8);
        data_send.set('inVovRefUrl4', ref9);
        data_send.set('inVovRefUrl5', ref10);
        data_send.set('endCombatPathStatus', elForm.endCombatPathStatus.value);
        data_send.set('endCombatPathLocation', elForm.endCombatPathLocation.value);
        data_send.set('deathDate', endCombatPathData);

        $.ajax({
            url: this_host + "/index.php?r=api/save-data-step-two",
            async: false,
            type: 'POST',
            dataType: 'json',
            processData: false, // Важно для FormData!
            contentType: false, // Важно для FormData!
            traditional: true,
            cache: false,
            data: data_send,
            success: function () {
                console.log('OK');
            }
        });
    }

    function saveState3() {
        const data_send = new FormData();
        let valueDateEnd,
            endData;
        if(elForm.endDate.value) {
            valueDateEnd = elForm.endDate.value.length === 1 ? '0' + elForm.endDate.value : elForm.endDate.value;
        }
        else {
            valueDateEnd = '';
        }

        if(elForm.endYear.value && elForm.endMonth.value && valueDateEnd) {
            endData = elForm.endYear.value + '-' + elForm.endMonth.value + '-' + valueDateEnd;
        }
        else if (elForm.endYear.value && !elForm.endMonth.value && !valueDateEnd) {
            endData = elForm.endYear.value + '-00'+ '-00';
        }
        else if(elForm.endCombatYear.value && elForm.endCombatMonth.value && !valueDateEnd) {
            endData = elForm.endYear.value + '-' + elForm.endMonth.value +  '-00';
        }
        else if(elForm.endCombatYear.value && !elForm.endCombatMonth.value && valueDateEnd) {
            endData = elForm.endYear.value +  '-00' + '-' + valueDateEnd
        }
        else {
            endData = '';
        }

        data_send.set('lifePostWarPeriod', elForm.lifePostWarPeriod.value);
        data_send.set('family', elForm.family.value);
        data_send.set('afterPlaceDeath', elForm.afterPlaceDeath.value);
        data_send.set('afterPlaceDeath', elForm.afterPlaceDeath.value);
        data_send.set('afterDateDeath', endData);

        $.ajax({
            url: this_host + "/index.php?r=api/save-data-step-three",
            async: false,
            type: 'POST',
            dataType: 'json',
            processData: false, // Важно для FormData!
            contentType: false, // Важно для FormData!
            traditional: true,
            cache: false,
            data: data_send,
            success: function () {
                console.log('OK');
            }
        });
    }

    function waiting() {
        let seconds = 60,
            valueTime,
            timer,
            isA = false;
        /*window.setTimeout(() => {
            isA = true;
        }, 5000)*/
        getElement(".js-timer").innerHTML = '1 : 00';
        timer = window.setInterval(function() {
            //if(!isPublish()) {
            if (seconds >0 ) { // so it doesn't go to -1
                seconds--;
            }
            if(seconds < 60) { // I want it to say 1:00, not 60
                if(seconds < 10) {
                    valueTime = `0${seconds}`;
                }
                else {
                    valueTime = seconds;
                }
                getElement(".js-timer").innerHTML = `00 : ${valueTime}`;
            }

            if(seconds <= 0) {
                getElement('.js-timer').classList.add('is-hidden');
                getElement('.js-timer').textContent = '';
                elModalAuthText.classList.add('is-hidden');
                elGotoLanding.classList.remove('is-hidden');
                getElement('.js-modal-auth-info').classList.remove('is-hidden');
                getElement('.js-modal-auth-info').textContent = 'Для публикации статьи нам понадобится чуть больше времени.Вы сможете найти свою статью в личном кабинете в разделе «Мастерская» - «Мои статьи».';
                getElement('.js-modal-auth-button').classList.remove('is-hidden');

                clearInterval(timer);
            }
            if(isPublish) {
                clearInterval(timer);
                seconds = 60;
                getElement('.js-timer').classList.add('is-hidden');
                getElement('.js-timer').textContent = '';
                elModalAuthText.classList.add('is-hidden');
                getElement('.js-modal-auth-info').classList.remove('is-hidden');
                getElement('.js-modal-auth-info').textContent = 'Поздравляем! Ваша статья опубликована.';
                getElement('.js-modal-auth-button-article').classList.remove('is-hidden');
                elGotoLanding.classList.remove('is-hidden');
            }

        }, 1000); // every second
    }

    function setIsPublish() {
        return isPublish = true;
    }

    function stateFinal() {
        $.ajax({
            url: this_host + "/index.php?r=api/save-data-step-final",
            async: true,
            type: 'POST',
            dataType: 'json',
            processData: false, // Важно для FormData!
            contentType: false, // Важно для FormData!
            traditional: true,
            cache: false,
            //data: data_send,
            success: function (msg) {
                setIsPublish();
                getElement('.js-goto-article').href = msg.page_url;
            }
        });
    }

    elNext.addEventListener('click', () => {
        switch (numberSection) {
            case 1:
                if(isRequired1) {
                    saveState1();
                    numberSection++;
                    elNext.textContent = 'Послевоенные годы';
                    elPrev.classList.remove('is-hidden');
                    if(isRequired2 && isNotAlive) {
                        elPublish.classList.remove('disabled');
                        elNext.classList.add('is-hidden');
                    }
                    if(isRequired2 && !isNotAlive) {
                        elNext.classList.remove ('is-hidden');
                        elPublish.classList.add('is-hidden');
                    }
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }
                else {
                    showEmptyRequiredField();
                }
                break;
            case 2:
                if(isRequired2) {
                    saveState2();
                    numberSection++;
                    if(isRequired2 && isNotAlive) {
                        elPublish.classList.remove('is-hidden');
                        elNext.classList.add('is-hidden');
                    }
                    if(isRequired2 && !isNotAlive) {
                        elNext.classList.remove ('is-hidden');
                        elPublish.classList.add('is-hidden');
                    }

                    if(numberSection === 3) {
                        elPublish.classList.remove('is-hidden');
                        elNext.classList.add('is-hidden');
                    }
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }
                else {
                    showEmptyRequiredField();
                }
                break;
            case 3:
                elPublish.classList.remove('is-hidden');
                elPublish.classList.remove('disabled');
                elPublish.removeAttribute('disabled');
                elNext.classList.add('is-hidden');
                break;
        }

        getBlocks();
        showSection();
        checkInputFields();
        checkDate();
        checkYear();
        checkInputTextarea();
        setMainTitle();
        highlightCurrentTimelineItem();
    })

    elPrev.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        numberSection--;
        if(numberSection === 1) {
            elPrev.classList.add('is-hidden');
            elNext.textContent = 'Боевой путь';
            if(isRequired1) {
                elNext.classList.remove('disabled');
                elNext.removeAttribute('disabled');
                elNext.classList.remove('is-hidden');
                elPublish.classList.add('is-hidden');
            }
            else {
                elNext.classList.add('disabled');
                elNext.setAttribute('disabled','disabled');
            }
        }
        if (numberSection === 2) {
            if(isRequired2 && !isNotAlive) {
                elNext.classList.remove('is-hidden');
                elNext.classList.remove('disabled');
                elNext.removeAttribute('disabled');
                elPublish.classList.add('is-hidden');
            }
        }
        if(numberSection > 1) {
            elPrev.classList.remove('is-hidden');
        }
        getBlocks();
        checkInputFields();
        checkDate();
        
        checkYear();
        checkInputTextarea();

        setMainTitle();
        showSection();
        highlightCurrentTimelineItem();
    })

    function fn() {
        waiting();
        if(numberSection === 2 && isNotAlive) {
            saveState2();
            stateFinal();
            waiting();
        }
        if(numberSection === 3) {
            saveState3();
            stateFinal();
            waiting();
        }
    }
    elPublish.addEventListener('click', fn, {
        once: true
    })
})

$(function (){
    // Формируем массив данных, для передачи файлов (при любой прогрузки файлов в кэш) 1
    $('input[name="photos1"]').on('change', function(event) {
        const selectedFiles = event.target.files; // Получаем выбранные файлы
        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            filesSelfData1.push(file); // Сохраняем файл в массиве
        }
    });
});