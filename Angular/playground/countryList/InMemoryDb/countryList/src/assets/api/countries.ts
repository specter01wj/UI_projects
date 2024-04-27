import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Country } from 'src/app/interface/country';

export class CountriesData implements InMemoryDbService {

	createDb() {
    const asia: Country[] = [
      {
        "name":"Afghanistan",
        "topLevelDomain":[
           ".af"
        ],
        "alpha2Code":"AF",
        "alpha3Code":"AFG",
        "callingCodes":[
           "93"
        ],
        "capital":"Kabul",
        "altSpellings":[
           "AF",
           "Afġānistān"
        ],
        "region":"Asia",
        "subregion":"Southern Asia",
        "population":27657145,
        "latlng":[
           33.0,
           65.0
        ],
        "demonym":"Afghan",
        "id":652230.0,
        "gini":27.8,
        "timezones":[
           "UTC+04:30"
        ],
        "borders":[
           "IRN",
           "PAK",
           "TKM",
           "UZB",
           "TJK",
           "CHN"
        ],
        "nativeName":"افغانستان",
        "numericCode":"004",
        "currencies":[
           {
              "code":"AFN",
              "name":"Afghan afghani",
              "symbol":"؋"
           }
        ],
        "languages":[
           {
              "iso639_1":"ps",
              "iso639_2":"pus",
              "name":"Pashto",
              "nativeName":"پښتو"
           },
           {
              "iso639_1":"uz",
              "iso639_2":"uzb",
              "name":"Uzbek",
              "nativeName":"Oʻzbek"
           },
           {
              "iso639_1":"tk",
              "iso639_2":"tuk",
              "name":"Turkmen",
              "nativeName":"Türkmen"
           }
        ],
        "translations":{
           "de":"Afghanistan",
           "es":"Afganistán",
           "fr":"Afghanistan",
           "ja":"アフガニスタン",
           "it":"Afghanistan",
           "br":"Afeganistão",
           "pt":"Afeganistão",
           "nl":"Afghanistan",
           "hr":"Afganistan",
           "fa":"افغانستان"
        },
        "flag":"https://restcountries.eu/data/afg.svg",
        "regionalBlocs":[
           {
              "acronym":"SAARC",
              "name":"South Asian Association for Regional Cooperation",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"AFG"
     },
     {
        "name":"Armenia",
        "topLevelDomain":[
           ".am"
        ],
        "alpha2Code":"AM",
        "alpha3Code":"ARM",
        "callingCodes":[
           "374"
        ],
        "capital":"Yerevan",
        "altSpellings":[
           "AM",
           "Hayastan",
           "Republic of Armenia",
           "Հայաստանի Հանրապետություն"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":2994400,
        "latlng":[
           40.0,
           45.0
        ],
        "demonym":"Armenian",
        "id":29743.0,
        "gini":30.9,
        "timezones":[
           "UTC+04:00"
        ],
        "borders":[
           "AZE",
           "GEO",
           "IRN",
           "TUR"
        ],
        "nativeName":"Հայաստան",
        "numericCode":"051",
        "currencies":[
           {
              "code":"AMD",
              "name":"Armenian dram",
              "symbol":null
           }
        ],
        "languages":[
           {
              "iso639_1":"hy",
              "iso639_2":"hye",
              "name":"Armenian",
              "nativeName":"Հայերեն"
           },
           {
              "iso639_1":"ru",
              "iso639_2":"rus",
              "name":"Russian",
              "nativeName":"Русский"
           }
        ],
        "translations":{
           "de":"Armenien",
           "es":"Armenia",
           "fr":"Arménie",
           "ja":"アルメニア",
           "it":"Armenia",
           "br":"Armênia",
           "pt":"Arménia",
           "nl":"Armenië",
           "hr":"Armenija",
           "fa":"ارمنستان"
        },
        "flag":"https://restcountries.eu/data/arm.svg",
        "regionalBlocs":[
           {
              "acronym":"EEU",
              "name":"Eurasian Economic Union",
              "otherAcronyms":[
                 "EAEU"
              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"ARM"
     },
     {
        "name":"Azerbaijan",
        "topLevelDomain":[
           ".az"
        ],
        "alpha2Code":"AZ",
        "alpha3Code":"AZE",
        "callingCodes":[
           "994"
        ],
        "capital":"Baku",
        "altSpellings":[
           "AZ",
           "Republic of Azerbaijan",
           "Azərbaycan Respublikası"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":9730500,
        "latlng":[
           40.5,
           47.5
        ],
        "demonym":"Azerbaijani",
        "id":86600.0,
        "gini":33.7,
        "timezones":[
           "UTC+04:00"
        ],
        "borders":[
           "ARM",
           "GEO",
           "IRN",
           "RUS",
           "TUR"
        ],
        "nativeName":"Azərbaycan",
        "numericCode":"031",
        "currencies":[
           {
              "code":"AZN",
              "name":"Azerbaijani manat",
              "symbol":null
           }
        ],
        "languages":[
           {
              "iso639_1":"az",
              "iso639_2":"aze",
              "name":"Azerbaijani",
              "nativeName":"azərbaycan dili"
           }
        ],
        "translations":{
           "de":"Aserbaidschan",
           "es":"Azerbaiyán",
           "fr":"Azerbaïdjan",
           "ja":"アゼルバイジャン",
           "it":"Azerbaijan",
           "br":"Azerbaijão",
           "pt":"Azerbaijão",
           "nl":"Azerbeidzjan",
           "hr":"Azerbajdžan",
           "fa":"آذربایجان"
        },
        "flag":"https://restcountries.eu/data/aze.svg",
        "regionalBlocs":[

        ],
        "cioc":"AZE"
     },
     {
        "name":"Bahrain",
        "topLevelDomain":[
           ".bh"
        ],
        "alpha2Code":"BH",
        "alpha3Code":"BHR",
        "callingCodes":[
           "973"
        ],
        "capital":"Manama",
        "altSpellings":[
           "BH",
           "Kingdom of Bahrain",
           "Mamlakat al-Baḥrayn"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":1404900,
        "latlng":[
           26.0,
           50.55
        ],
        "demonym":"Bahraini",
        "id":765.0,
        "gini":null,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[

        ],
        "nativeName":"‏البحرين",
        "numericCode":"048",
        "currencies":[
           {
              "code":"BHD",
              "name":"Bahraini dinar",
              "symbol":".د.ب"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Bahrain",
           "es":"Bahrein",
           "fr":"Bahreïn",
           "ja":"バーレーン",
           "it":"Bahrein",
           "br":"Bahrein",
           "pt":"Barém",
           "nl":"Bahrein",
           "hr":"Bahrein",
           "fa":"بحرین"
        },
        "flag":"https://restcountries.eu/data/bhr.svg",
        "regionalBlocs":[
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"BRN"
     },
     {
        "name":"Bangladesh",
        "topLevelDomain":[
           ".bd"
        ],
        "alpha2Code":"BD",
        "alpha3Code":"BGD",
        "callingCodes":[
           "880"
        ],
        "capital":"Dhaka",
        "altSpellings":[
           "BD",
           "People's Republic of Bangladesh",
           "Gônôprôjatôntri Bangladesh"
        ],
        "region":"Asia",
        "subregion":"Southern Asia",
        "population":161006790,
        "latlng":[
           24.0,
           90.0
        ],
        "demonym":"Bangladeshi",
        "id":147570.0,
        "gini":32.1,
        "timezones":[
           "UTC+06:00"
        ],
        "borders":[
           "MMR",
           "IND"
        ],
        "nativeName":"Bangladesh",
        "numericCode":"050",
        "currencies":[
           {
              "code":"BDT",
              "name":"Bangladeshi taka",
              "symbol":"৳"
           }
        ],
        "languages":[
           {
              "iso639_1":"bn",
              "iso639_2":"ben",
              "name":"Bengali",
              "nativeName":"বাংলা"
           }
        ],
        "translations":{
           "de":"Bangladesch",
           "es":"Bangladesh",
           "fr":"Bangladesh",
           "ja":"バングラデシュ",
           "it":"Bangladesh",
           "br":"Bangladesh",
           "pt":"Bangladeche",
           "nl":"Bangladesh",
           "hr":"Bangladeš",
           "fa":"بنگلادش"
        },
        "flag":"https://restcountries.eu/data/bgd.svg",
        "regionalBlocs":[
           {
              "acronym":"SAARC",
              "name":"South Asian Association for Regional Cooperation",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"BAN"
     },
     {
        "name":"Bhutan",
        "topLevelDomain":[
           ".bt"
        ],
        "alpha2Code":"BT",
        "alpha3Code":"BTN",
        "callingCodes":[
           "975"
        ],
        "capital":"Thimphu",
        "altSpellings":[
           "BT",
           "Kingdom of Bhutan"
        ],
        "region":"Asia",
        "subregion":"Southern Asia",
        "population":775620,
        "latlng":[
           27.5,
           90.5
        ],
        "demonym":"Bhutanese",
        "id":38394.0,
        "gini":38.1,
        "timezones":[
           "UTC+06:00"
        ],
        "borders":[
           "CHN",
           "IND"
        ],
        "nativeName":"ʼbrug-yul",
        "numericCode":"064",
        "currencies":[
           {
              "code":"BTN",
              "name":"Bhutanese ngultrum",
              "symbol":"Nu."
           },
           {
              "code":"INR",
              "name":"Indian rupee",
              "symbol":"₹"
           }
        ],
        "languages":[
           {
              "iso639_1":"dz",
              "iso639_2":"dzo",
              "name":"Dzongkha",
              "nativeName":"རྫོང་ཁ"
           }
        ],
        "translations":{
           "de":"Bhutan",
           "es":"Bután",
           "fr":"Bhoutan",
           "ja":"ブータン",
           "it":"Bhutan",
           "br":"Butão",
           "pt":"Butão",
           "nl":"Bhutan",
           "hr":"Butan",
           "fa":"بوتان"
        },
        "flag":"https://restcountries.eu/data/btn.svg",
        "regionalBlocs":[
           {
              "acronym":"SAARC",
              "name":"South Asian Association for Regional Cooperation",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"BHU"
     },
     {
        "name":"Brunei Darussalam",
        "topLevelDomain":[
           ".bn"
        ],
        "alpha2Code":"BN",
        "alpha3Code":"BRN",
        "callingCodes":[
           "673"
        ],
        "capital":"Bandar Seri Begawan",
        "altSpellings":[
           "BN",
           "Nation of Brunei",
           " the Abode of Peace"
        ],
        "region":"Asia",
        "subregion":"South-Eastern Asia",
        "population":411900,
        "latlng":[
           4.5,
           114.66666666
        ],
        "demonym":"Bruneian",
        "id":5765.0,
        "gini":null,
        "timezones":[
           "UTC+08:00"
        ],
        "borders":[
           "MYS"
        ],
        "nativeName":"Negara Brunei Darussalam",
        "numericCode":"096",
        "currencies":[
           {
              "code":"BND",
              "name":"Brunei dollar",
              "symbol":"$"
           },
           {
              "code":"SGD",
              "name":"Singapore dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"ms",
              "iso639_2":"msa",
              "name":"Malay",
              "nativeName":"bahasa Melayu"
           }
        ],
        "translations":{
           "de":"Brunei",
           "es":"Brunei",
           "fr":"Brunei",
           "ja":"ブルネイ・ダルサラーム",
           "it":"Brunei",
           "br":"Brunei",
           "pt":"Brunei",
           "nl":"Brunei",
           "hr":"Brunej",
           "fa":"برونئی"
        },
        "flag":"https://restcountries.eu/data/brn.svg",
        "regionalBlocs":[
           {
              "acronym":"ASEAN",
              "name":"Association of Southeast Asian Nations",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"BRU"
     },
     {
        "name":"Cambodia",
        "topLevelDomain":[
           ".kh"
        ],
        "alpha2Code":"KH",
        "alpha3Code":"KHM",
        "callingCodes":[
           "855"
        ],
        "capital":"Phnom Penh",
        "altSpellings":[
           "KH",
           "Kingdom of Cambodia"
        ],
        "region":"Asia",
        "subregion":"South-Eastern Asia",
        "population":15626444,
        "latlng":[
           13.0,
           105.0
        ],
        "demonym":"Cambodian",
        "id":181035.0,
        "gini":37.9,
        "timezones":[
           "UTC+07:00"
        ],
        "borders":[
           "LAO",
           "THA",
           "VNM"
        ],
        "nativeName":"Kâmpŭchéa",
        "numericCode":"116",
        "currencies":[
           {
              "code":"KHR",
              "name":"Cambodian riel",
              "symbol":"៛"
           },
           {
              "code":"USD",
              "name":"United States dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"km",
              "iso639_2":"khm",
              "name":"Khmer",
              "nativeName":"ខ្មែរ"
           }
        ],
        "translations":{
           "de":"Kambodscha",
           "es":"Camboya",
           "fr":"Cambodge",
           "ja":"カンボジア",
           "it":"Cambogia",
           "br":"Camboja",
           "pt":"Camboja",
           "nl":"Cambodja",
           "hr":"Kambodža",
           "fa":"کامبوج"
        },
        "flag":"https://restcountries.eu/data/khm.svg",
        "regionalBlocs":[
           {
              "acronym":"ASEAN",
              "name":"Association of Southeast Asian Nations",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"CAM"
     },
     {
        "name":"China",
        "topLevelDomain":[
           ".cn"
        ],
        "alpha2Code":"CN",
        "alpha3Code":"CHN",
        "callingCodes":[
           "86"
        ],
        "capital":"Beijing",
        "altSpellings":[
           "CN",
           "Zhōngguó",
           "Zhongguo",
           "Zhonghua",
           "People's Republic of China",
           "中华人民共和国",
           "Zhōnghuá Rénmín Gònghéguó"
        ],
        "region":"Asia",
        "subregion":"Eastern Asia",
        "population":1377422166,
        "latlng":[
           35.0,
           105.0
        ],
        "demonym":"Chinese",
        "id":9640011.0,
        "gini":47.0,
        "timezones":[
           "UTC+08:00"
        ],
        "borders":[
           "AFG",
           "BTN",
           "MMR",
           "HKG",
           "IND",
           "KAZ",
           "PRK",
           "KGZ",
           "LAO",
           "MAC",
           "MNG",
           "PAK",
           "RUS",
           "TJK",
           "VNM"
        ],
        "nativeName":"中国",
        "numericCode":"156",
        "currencies":[
           {
              "code":"CNY",
              "name":"Chinese yuan",
              "symbol":"¥"
           }
        ],
        "languages":[
           {
              "iso639_1":"zh",
              "iso639_2":"zho",
              "name":"Chinese",
              "nativeName":"中文 (Zhōngwén)"
           }
        ],
        "translations":{
           "de":"China",
           "es":"China",
           "fr":"Chine",
           "ja":"中国",
           "it":"Cina",
           "br":"China",
           "pt":"China",
           "nl":"China",
           "hr":"Kina",
           "fa":"چین"
        },
        "flag":"https://restcountries.eu/data/chn.svg",
        "regionalBlocs":[

        ],
        "cioc":"CHN"
     },
     {
        "name":"Georgia",
        "topLevelDomain":[
           ".ge"
        ],
        "alpha2Code":"GE",
        "alpha3Code":"GEO",
        "callingCodes":[
           "995"
        ],
        "capital":"Tbilisi",
        "altSpellings":[
           "GE",
           "Sakartvelo"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":3720400,
        "latlng":[
           42.0,
           43.5
        ],
        "demonym":"Georgian",
        "id":69700.0,
        "gini":41.3,
        "timezones":[
           "UTC-05:00"
        ],
        "borders":[
           "ARM",
           "AZE",
           "RUS",
           "TUR"
        ],
        "nativeName":"საქართველო",
        "numericCode":"268",
        "currencies":[
           {
              "code":"GEL",
              "name":"Georgian Lari",
              "symbol":"ლ"
           }
        ],
        "languages":[
           {
              "iso639_1":"ka",
              "iso639_2":"kat",
              "name":"Georgian",
              "nativeName":"ქართული"
           }
        ],
        "translations":{
           "de":"Georgien",
           "es":"Georgia",
           "fr":"Géorgie",
           "ja":"グルジア",
           "it":"Georgia",
           "br":"Geórgia",
           "pt":"Geórgia",
           "nl":"Georgië",
           "hr":"Gruzija",
           "fa":"گرجستان"
        },
        "flag":"https://restcountries.eu/data/geo.svg",
        "regionalBlocs":[

        ],
        "cioc":"GEO"
     },
     {
        "name":"Hong Kong",
        "topLevelDomain":[
           ".hk"
        ],
        "alpha2Code":"HK",
        "alpha3Code":"HKG",
        "callingCodes":[
           "852"
        ],
        "capital":"City of Victoria",
        "altSpellings":[
           "HK",
           "香港"
        ],
        "region":"Asia",
        "subregion":"Eastern Asia",
        "population":7324300,
        "latlng":[
           22.25,
           114.16666666
        ],
        "demonym":"Chinese",
        "id":1104.0,
        "gini":53.3,
        "timezones":[
           "UTC+08:00"
        ],
        "borders":[
           "CHN"
        ],
        "nativeName":"香港",
        "numericCode":"344",
        "currencies":[
           {
              "code":"HKD",
              "name":"Hong Kong dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"zh",
              "iso639_2":"zho",
              "name":"Chinese",
              "nativeName":"中文 (Zhōngwén)"
           }
        ],
        "translations":{
           "de":"Hong Kong",
           "es":"Hong Kong",
           "fr":"Hong Kong",
           "ja":"香港",
           "it":"Hong Kong",
           "br":"Hong Kong",
           "pt":"Hong Kong",
           "nl":"Hongkong",
           "hr":"Hong Kong",
           "fa":"هنگ‌کنگ"
        },
        "flag":"https://restcountries.eu/data/hkg.svg",
        "regionalBlocs":[

        ],
        "cioc":"HKG"
     },
     {
        "name":"India",
        "topLevelDomain":[
           ".in"
        ],
        "alpha2Code":"IN",
        "alpha3Code":"IND",
        "callingCodes":[
           "91"
        ],
        "capital":"New Delhi",
        "altSpellings":[
           "IN",
           "Bhārat",
           "Republic of India",
           "Bharat Ganrajya"
        ],
        "region":"Asia",
        "subregion":"Southern Asia",
        "population":1295210000,
        "latlng":[
           20.0,
           77.0
        ],
        "demonym":"Indian",
        "id":3287590.0,
        "gini":33.4,
        "timezones":[
           "UTC+05:30"
        ],
        "borders":[
           "AFG",
           "BGD",
           "BTN",
           "MMR",
           "CHN",
           "NPL",
           "PAK",
           "LKA"
        ],
        "nativeName":"भारत",
        "numericCode":"356",
        "currencies":[
           {
              "code":"INR",
              "name":"Indian rupee",
              "symbol":"₹"
           }
        ],
        "languages":[
           {
              "iso639_1":"hi",
              "iso639_2":"hin",
              "name":"Hindi",
              "nativeName":"हिन्दी"
           },
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Indien",
           "es":"India",
           "fr":"Inde",
           "ja":"インド",
           "it":"India",
           "br":"Índia",
           "pt":"Índia",
           "nl":"India",
           "hr":"Indija",
           "fa":"هند"
        },
        "flag":"https://restcountries.eu/data/ind.svg",
        "regionalBlocs":[
           {
              "acronym":"SAARC",
              "name":"South Asian Association for Regional Cooperation",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"IND"
     },
     {
        "name":"Indonesia",
        "topLevelDomain":[
           ".id"
        ],
        "alpha2Code":"ID",
        "alpha3Code":"IDN",
        "callingCodes":[
           "62"
        ],
        "capital":"Jakarta",
        "altSpellings":[
           "ID",
           "Republic of Indonesia",
           "Republik Indonesia"
        ],
        "region":"Asia",
        "subregion":"South-Eastern Asia",
        "population":258705000,
        "latlng":[
           -5.0,
           120.0
        ],
        "demonym":"Indonesian",
        "id":1904569.0,
        "gini":34.0,
        "timezones":[
           "UTC+07:00",
           "UTC+08:00",
           "UTC+09:00"
        ],
        "borders":[
           "TLS",
           "MYS",
           "PNG"
        ],
        "nativeName":"Indonesia",
        "numericCode":"360",
        "currencies":[
           {
              "code":"IDR",
              "name":"Indonesian rupiah",
              "symbol":"Rp"
           }
        ],
        "languages":[
           {
              "iso639_1":"id",
              "iso639_2":"ind",
              "name":"Indonesian",
              "nativeName":"Bahasa Indonesia"
           }
        ],
        "translations":{
           "de":"Indonesien",
           "es":"Indonesia",
           "fr":"Indonésie",
           "ja":"インドネシア",
           "it":"Indonesia",
           "br":"Indonésia",
           "pt":"Indonésia",
           "nl":"Indonesië",
           "hr":"Indonezija",
           "fa":"اندونزی"
        },
        "flag":"https://restcountries.eu/data/idn.svg",
        "regionalBlocs":[
           {
              "acronym":"ASEAN",
              "name":"Association of Southeast Asian Nations",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"INA"
     },
     {
        "name":"Iran (Islamic Republic of)",
        "topLevelDomain":[
           ".ir"
        ],
        "alpha2Code":"IR",
        "alpha3Code":"IRN",
        "callingCodes":[
           "98"
        ],
        "capital":"Tehran",
        "altSpellings":[
           "IR",
           "Islamic Republic of Iran",
           "Jomhuri-ye Eslāmi-ye Irān"
        ],
        "region":"Asia",
        "subregion":"Southern Asia",
        "population":79369900,
        "latlng":[
           32.0,
           53.0
        ],
        "demonym":"Iranian",
        "id":1648195.0,
        "gini":38.3,
        "timezones":[
           "UTC+03:30"
        ],
        "borders":[
           "AFG",
           "ARM",
           "AZE",
           "IRQ",
           "PAK",
           "TUR",
           "TKM"
        ],
        "nativeName":"ایران",
        "numericCode":"364",
        "currencies":[
           {
              "code":"IRR",
              "name":"Iranian rial",
              "symbol":"﷼"
           }
        ],
        "languages":[
           {
              "iso639_1":"fa",
              "iso639_2":"fas",
              "name":"Persian (Farsi)",
              "nativeName":"فارسی"
           }
        ],
        "translations":{
           "de":"Iran",
           "es":"Iran",
           "fr":"Iran",
           "ja":"イラン・イスラム共和国",
           "it":null,
           "br":"Irã",
           "pt":"Irão",
           "nl":"Iran",
           "hr":"Iran",
           "fa":"ایران"
        },
        "flag":"https://restcountries.eu/data/irn.svg",
        "regionalBlocs":[

        ],
        "cioc":"IRI"
     },
     {
        "name":"Iraq",
        "topLevelDomain":[
           ".iq"
        ],
        "alpha2Code":"IQ",
        "alpha3Code":"IRQ",
        "callingCodes":[
           "964"
        ],
        "capital":"Baghdad",
        "altSpellings":[
           "IQ",
           "Republic of Iraq",
           "Jumhūriyyat al-‘Irāq"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":37883543,
        "latlng":[
           33.0,
           44.0
        ],
        "demonym":"Iraqi",
        "id":438317.0,
        "gini":30.9,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "IRN",
           "JOR",
           "KWT",
           "SAU",
           "SYR",
           "TUR"
        ],
        "nativeName":"العراق",
        "numericCode":"368",
        "currencies":[
           {
              "code":"IQD",
              "name":"Iraqi dinar",
              "symbol":"ع.د"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           },
           {
              "iso639_1":"ku",
              "iso639_2":"kur",
              "name":"Kurdish",
              "nativeName":"Kurdî"
           }
        ],
        "translations":{
           "de":"Irak",
           "es":"Irak",
           "fr":"Irak",
           "ja":"イラク",
           "it":"Iraq",
           "br":"Iraque",
           "pt":"Iraque",
           "nl":"Irak",
           "hr":"Irak",
           "fa":"عراق"
        },
        "flag":"https://restcountries.eu/data/irq.svg",
        "regionalBlocs":[
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"IRQ"
     },
     {
        "name":"Israel",
        "topLevelDomain":[
           ".il"
        ],
        "alpha2Code":"IL",
        "alpha3Code":"ISR",
        "callingCodes":[
           "972"
        ],
        "capital":"Jerusalem",
        "altSpellings":[
           "IL",
           "State of Israel",
           "Medīnat Yisrā'el"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":8527400,
        "latlng":[
           31.5,
           34.75
        ],
        "demonym":"Israeli",
        "id":20770.0,
        "gini":39.2,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "EGY",
           "JOR",
           "LBN",
           "SYR"
        ],
        "nativeName":"יִשְׂרָאֵל",
        "numericCode":"376",
        "currencies":[
           {
              "code":"ILS",
              "name":"Israeli new shekel",
              "symbol":"₪"
           }
        ],
        "languages":[
           {
              "iso639_1":"he",
              "iso639_2":"heb",
              "name":"Hebrew (modern)",
              "nativeName":"עברית"
           },
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Israel",
           "es":"Israel",
           "fr":"Israël",
           "ja":"イスラエル",
           "it":"Israele",
           "br":"Israel",
           "pt":"Israel",
           "nl":"Israël",
           "hr":"Izrael",
           "fa":"اسرائیل"
        },
        "flag":"https://restcountries.eu/data/isr.svg",
        "regionalBlocs":[

        ],
        "cioc":"ISR"
     },
     {
        "name":"Japan",
        "topLevelDomain":[
           ".jp"
        ],
        "alpha2Code":"JP",
        "alpha3Code":"JPN",
        "callingCodes":[
           "81"
        ],
        "capital":"Tokyo",
        "altSpellings":[
           "JP",
           "Nippon",
           "Nihon"
        ],
        "region":"Asia",
        "subregion":"Eastern Asia",
        "population":126960000,
        "latlng":[
           36.0,
           138.0
        ],
        "demonym":"Japanese",
        "id":377930.0,
        "gini":38.1,
        "timezones":[
           "UTC+09:00"
        ],
        "borders":[

        ],
        "nativeName":"日本",
        "numericCode":"392",
        "currencies":[
           {
              "code":"JPY",
              "name":"Japanese yen",
              "symbol":"¥"
           }
        ],
        "languages":[
           {
              "iso639_1":"ja",
              "iso639_2":"jpn",
              "name":"Japanese",
              "nativeName":"日本語 (にほんご)"
           }
        ],
        "translations":{
           "de":"Japan",
           "es":"Japón",
           "fr":"Japon",
           "ja":"日本",
           "it":"Giappone",
           "br":"Japão",
           "pt":"Japão",
           "nl":"Japan",
           "hr":"Japan",
           "fa":"ژاپن"
        },
        "flag":"https://restcountries.eu/data/jpn.svg",
        "regionalBlocs":[

        ],
        "cioc":"JPN"
     },
     {
        "name":"Jordan",
        "topLevelDomain":[
           ".jo"
        ],
        "alpha2Code":"JO",
        "alpha3Code":"JOR",
        "callingCodes":[
           "962"
        ],
        "capital":"Amman",
        "altSpellings":[
           "JO",
           "Hashemite Kingdom of Jordan",
           "al-Mamlakah al-Urdunīyah al-Hāshimīyah"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":9531712,
        "latlng":[
           31.0,
           36.0
        ],
        "demonym":"Jordanian",
        "id":89342.0,
        "gini":35.4,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "IRQ",
           "ISR",
           "SAU",
           "SYR"
        ],
        "nativeName":"الأردن",
        "numericCode":"400",
        "currencies":[
           {
              "code":"JOD",
              "name":"Jordanian dinar",
              "symbol":"د.ا"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Jordanien",
           "es":"Jordania",
           "fr":"Jordanie",
           "ja":"ヨルダン",
           "it":"Giordania",
           "br":"Jordânia",
           "pt":"Jordânia",
           "nl":"Jordanië",
           "hr":"Jordan",
           "fa":"اردن"
        },
        "flag":"https://restcountries.eu/data/jor.svg",
        "regionalBlocs":[
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"JOR"
     },
     {
        "name":"Kazakhstan",
        "topLevelDomain":[
           ".kz",
           ".қаз"
        ],
        "alpha2Code":"KZ",
        "alpha3Code":"KAZ",
        "callingCodes":[
           "76",
           "77"
        ],
        "capital":"Astana",
        "altSpellings":[
           "KZ",
           "Qazaqstan",
           "Казахстан",
           "Republic of Kazakhstan",
           "Қазақстан Республикасы",
           "Qazaqstan Respublïkası",
           "Республика Казахстан",
           "Respublika Kazakhstan"
        ],
        "region":"Asia",
        "subregion":"Central Asia",
        "population":17753200,
        "latlng":[
           48.0,
           68.0
        ],
        "demonym":"Kazakhstani",
        "id":2724900.0,
        "gini":29.0,
        "timezones":[
           "UTC+05:00",
           "UTC+06:00"
        ],
        "borders":[
           "CHN",
           "KGZ",
           "RUS",
           "TKM",
           "UZB"
        ],
        "nativeName":"Қазақстан",
        "numericCode":"398",
        "currencies":[
           {
              "code":"KZT",
              "name":"Kazakhstani tenge",
              "symbol":null
           }
        ],
        "languages":[
           {
              "iso639_1":"kk",
              "iso639_2":"kaz",
              "name":"Kazakh",
              "nativeName":"қазақ тілі"
           },
           {
              "iso639_1":"ru",
              "iso639_2":"rus",
              "name":"Russian",
              "nativeName":"Русский"
           }
        ],
        "translations":{
           "de":"Kasachstan",
           "es":"Kazajistán",
           "fr":"Kazakhstan",
           "ja":"カザフスタン",
           "it":"Kazakistan",
           "br":"Cazaquistão",
           "pt":"Cazaquistão",
           "nl":"Kazachstan",
           "hr":"Kazahstan",
           "fa":"قزاقستان"
        },
        "flag":"https://restcountries.eu/data/kaz.svg",
        "regionalBlocs":[
           {
              "acronym":"EEU",
              "name":"Eurasian Economic Union",
              "otherAcronyms":[
                 "EAEU"
              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"KAZ"
     },
     {
        "name":"Kuwait",
        "topLevelDomain":[
           ".kw"
        ],
        "alpha2Code":"KW",
        "alpha3Code":"KWT",
        "callingCodes":[
           "965"
        ],
        "capital":"Kuwait City",
        "altSpellings":[
           "KW",
           "State of Kuwait",
           "Dawlat al-Kuwait"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":4183658,
        "latlng":[
           29.5,
           45.75
        ],
        "demonym":"Kuwaiti",
        "id":17818.0,
        "gini":null,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "IRN",
           "SAU"
        ],
        "nativeName":"الكويت",
        "numericCode":"414",
        "currencies":[
           {
              "code":"KWD",
              "name":"Kuwaiti dinar",
              "symbol":"د.ك"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Kuwait",
           "es":"Kuwait",
           "fr":"Koweït",
           "ja":"クウェート",
           "it":"Kuwait",
           "br":"Kuwait",
           "pt":"Kuwait",
           "nl":"Koeweit",
           "hr":"Kuvajt",
           "fa":"کویت"
        },
        "flag":"https://restcountries.eu/data/kwt.svg",
        "regionalBlocs":[
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"KUW"
     },
     {
        "name":"Kyrgyzstan",
        "topLevelDomain":[
           ".kg"
        ],
        "alpha2Code":"KG",
        "alpha3Code":"KGZ",
        "callingCodes":[
           "996"
        ],
        "capital":"Bishkek",
        "altSpellings":[
           "KG",
           "Киргизия",
           "Kyrgyz Republic",
           "Кыргыз Республикасы",
           "Kyrgyz Respublikasy"
        ],
        "region":"Asia",
        "subregion":"Central Asia",
        "population":6047800,
        "latlng":[
           41.0,
           75.0
        ],
        "demonym":"Kirghiz",
        "id":199951.0,
        "gini":36.2,
        "timezones":[
           "UTC+06:00"
        ],
        "borders":[
           "CHN",
           "KAZ",
           "TJK",
           "UZB"
        ],
        "nativeName":"Кыргызстан",
        "numericCode":"417",
        "currencies":[
           {
              "code":"KGS",
              "name":"Kyrgyzstani som",
              "symbol":"с"
           }
        ],
        "languages":[
           {
              "iso639_1":"ky",
              "iso639_2":"kir",
              "name":"Kyrgyz",
              "nativeName":"Кыргызча"
           },
           {
              "iso639_1":"ru",
              "iso639_2":"rus",
              "name":"Russian",
              "nativeName":"Русский"
           }
        ],
        "translations":{
           "de":"Kirgisistan",
           "es":"Kirguizistán",
           "fr":"Kirghizistan",
           "ja":"キルギス",
           "it":"Kirghizistan",
           "br":"Quirguistão",
           "pt":"Quirguizistão",
           "nl":"Kirgizië",
           "hr":"Kirgistan",
           "fa":"قرقیزستان"
        },
        "flag":"https://restcountries.eu/data/kgz.svg",
        "regionalBlocs":[
           {
              "acronym":"EEU",
              "name":"Eurasian Economic Union",
              "otherAcronyms":[
                 "EAEU"
              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"KGZ"
     },
     {
        "name":"Lao People's Democratic Republic",
        "topLevelDomain":[
           ".la"
        ],
        "alpha2Code":"LA",
        "alpha3Code":"LAO",
        "callingCodes":[
           "856"
        ],
        "capital":"Vientiane",
        "altSpellings":[
           "LA",
           "Lao",
           "Laos",
           "Lao People's Democratic Republic",
           "Sathalanalat Paxathipatai Paxaxon Lao"
        ],
        "region":"Asia",
        "subregion":"South-Eastern Asia",
        "population":6492400,
        "latlng":[
           18.0,
           105.0
        ],
        "demonym":"Laotian",
        "id":236800.0,
        "gini":36.7,
        "timezones":[
           "UTC+07:00"
        ],
        "borders":[
           "MMR",
           "KHM",
           "CHN",
           "THA",
           "VNM"
        ],
        "nativeName":"ສປປລາວ",
        "numericCode":"418",
        "currencies":[
           {
              "code":"LAK",
              "name":"Lao kip",
              "symbol":"₭"
           }
        ],
        "languages":[
           {
              "iso639_1":"lo",
              "iso639_2":"lao",
              "name":"Lao",
              "nativeName":"ພາສາລາວ"
           }
        ],
        "translations":{
           "de":"Laos",
           "es":"Laos",
           "fr":"Laos",
           "ja":"ラオス人民民主共和国",
           "it":"Laos",
           "br":"Laos",
           "pt":"Laos",
           "nl":"Laos",
           "hr":"Laos",
           "fa":"لائوس"
        },
        "flag":"https://restcountries.eu/data/lao.svg",
        "regionalBlocs":[
           {
              "acronym":"ASEAN",
              "name":"Association of Southeast Asian Nations",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"LAO"
     },
     {
        "name":"Lebanon",
        "topLevelDomain":[
           ".lb"
        ],
        "alpha2Code":"LB",
        "alpha3Code":"LBN",
        "callingCodes":[
           "961"
        ],
        "capital":"Beirut",
        "altSpellings":[
           "LB",
           "Lebanese Republic",
           "Al-Jumhūrīyah Al-Libnānīyah"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":5988000,
        "latlng":[
           33.83333333,
           35.83333333
        ],
        "demonym":"Lebanese",
        "id":10452.0,
        "gini":null,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "ISR",
           "SYR"
        ],
        "nativeName":"لبنان",
        "numericCode":"422",
        "currencies":[
           {
              "code":"LBP",
              "name":"Lebanese pound",
              "symbol":"ل.ل"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           },
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Libanon",
           "es":"Líbano",
           "fr":"Liban",
           "ja":"レバノン",
           "it":"Libano",
           "br":"Líbano",
           "pt":"Líbano",
           "nl":"Libanon",
           "hr":"Libanon",
           "fa":"لبنان"
        },
        "flag":"https://restcountries.eu/data/lbn.svg",
        "regionalBlocs":[
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"LIB"
     },
     {
        "name":"Macao",
        "topLevelDomain":[
           ".mo"
        ],
        "alpha2Code":"MO",
        "alpha3Code":"MAC",
        "callingCodes":[
           "853"
        ],
        "capital":"",
        "altSpellings":[
           "MO",
           "澳门",
           "Macao Special Administrative Region of the People's Republic of China",
           "中華人民共和國澳門特別行政區",
           "Região Administrativa Especial de Macau da República Popular da China"
        ],
        "region":"Asia",
        "subregion":"Eastern Asia",
        "population":649100,
        "latlng":[
           22.16666666,
           113.55
        ],
        "demonym":"Chinese",
        "id":30.0,
        "gini":null,
        "timezones":[
           "UTC+08:00"
        ],
        "borders":[
           "CHN"
        ],
        "nativeName":"澳門",
        "numericCode":"446",
        "currencies":[
           {
              "code":"MOP",
              "name":"Macanese pataca",
              "symbol":"P"
           }
        ],
        "languages":[
           {
              "iso639_1":"zh",
              "iso639_2":"zho",
              "name":"Chinese",
              "nativeName":"中文 (Zhōngwén)"
           },
           {
              "iso639_1":"pt",
              "iso639_2":"por",
              "name":"Portuguese",
              "nativeName":"Português"
           }
        ],
        "translations":{
           "de":"Macao",
           "es":"Macao",
           "fr":"Macao",
           "ja":"マカオ",
           "it":"Macao",
           "br":"Macau",
           "pt":"Macau",
           "nl":"Macao",
           "hr":"Makao",
           "fa":"مکائو"
        },
        "flag":"https://restcountries.eu/data/mac.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"Malaysia",
        "topLevelDomain":[
           ".my"
        ],
        "alpha2Code":"MY",
        "alpha3Code":"MYS",
        "callingCodes":[
           "60"
        ],
        "capital":"Kuala Lumpur",
        "altSpellings":[
           "MY"
        ],
        "region":"Asia",
        "subregion":"South-Eastern Asia",
        "population":31405416,
        "latlng":[
           2.5,
           112.5
        ],
        "demonym":"Malaysian",
        "id":330803.0,
        "gini":46.2,
        "timezones":[
           "UTC+08:00"
        ],
        "borders":[
           "BRN",
           "IDN",
           "THA"
        ],
        "nativeName":"Malaysia",
        "numericCode":"458",
        "currencies":[
           {
              "code":"MYR",
              "name":"Malaysian ringgit",
              "symbol":"RM"
           }
        ],
        "languages":[
           {
              "iso639_1":null,
              "iso639_2":"zsm",
              "name":"Malaysian",
              "nativeName":"بهاس مليسيا"
           }
        ],
        "translations":{
           "de":"Malaysia",
           "es":"Malasia",
           "fr":"Malaisie",
           "ja":"マレーシア",
           "it":"Malesia",
           "br":"Malásia",
           "pt":"Malásia",
           "nl":"Maleisië",
           "hr":"Malezija",
           "fa":"مالزی"
        },
        "flag":"https://restcountries.eu/data/mys.svg",
        "regionalBlocs":[
           {
              "acronym":"ASEAN",
              "name":"Association of Southeast Asian Nations",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"MAS"
     },
     {
        "name":"Maldives",
        "topLevelDomain":[
           ".mv"
        ],
        "alpha2Code":"MV",
        "alpha3Code":"MDV",
        "callingCodes":[
           "960"
        ],
        "capital":"Malé",
        "altSpellings":[
           "MV",
           "Maldive Islands",
           "Republic of the Maldives",
           "Dhivehi Raajjeyge Jumhooriyya"
        ],
        "region":"Asia",
        "subregion":"Southern Asia",
        "population":344023,
        "latlng":[
           3.25,
           73.0
        ],
        "demonym":"Maldivan",
        "id":300.0,
        "gini":37.4,
        "timezones":[
           "UTC+05:00"
        ],
        "borders":[

        ],
        "nativeName":"Maldives",
        "numericCode":"462",
        "currencies":[
           {
              "code":"MVR",
              "name":"Maldivian rufiyaa",
              "symbol":".ރ"
           }
        ],
        "languages":[
           {
              "iso639_1":"dv",
              "iso639_2":"div",
              "name":"Divehi",
              "nativeName":"ދިވެހި"
           }
        ],
        "translations":{
           "de":"Malediven",
           "es":"Maldivas",
           "fr":"Maldives",
           "ja":"モルディブ",
           "it":"Maldive",
           "br":"Maldivas",
           "pt":"Maldivas",
           "nl":"Maldiven",
           "hr":"Maldivi",
           "fa":"مالدیو"
        },
        "flag":"https://restcountries.eu/data/mdv.svg",
        "regionalBlocs":[
           {
              "acronym":"SAARC",
              "name":"South Asian Association for Regional Cooperation",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"MDV"
     },
     {
        "name":"Mongolia",
        "topLevelDomain":[
           ".mn"
        ],
        "alpha2Code":"MN",
        "alpha3Code":"MNG",
        "callingCodes":[
           "976"
        ],
        "capital":"Ulan Bator",
        "altSpellings":[
           "MN"
        ],
        "region":"Asia",
        "subregion":"Eastern Asia",
        "population":3093100,
        "latlng":[
           46.0,
           105.0
        ],
        "demonym":"Mongolian",
        "id":1564110.0,
        "gini":36.5,
        "timezones":[
           "UTC+07:00",
           "UTC+08:00"
        ],
        "borders":[
           "CHN",
           "RUS"
        ],
        "nativeName":"Монгол улс",
        "numericCode":"496",
        "currencies":[
           {
              "code":"MNT",
              "name":"Mongolian tögrög",
              "symbol":"₮"
           }
        ],
        "languages":[
           {
              "iso639_1":"mn",
              "iso639_2":"mon",
              "name":"Mongolian",
              "nativeName":"Монгол хэл"
           }
        ],
        "translations":{
           "de":"Mongolei",
           "es":"Mongolia",
           "fr":"Mongolie",
           "ja":"モンゴル",
           "it":"Mongolia",
           "br":"Mongólia",
           "pt":"Mongólia",
           "nl":"Mongolië",
           "hr":"Mongolija",
           "fa":"مغولستان"
        },
        "flag":"https://restcountries.eu/data/mng.svg",
        "regionalBlocs":[

        ],
        "cioc":"MGL"
     },
     {
        "name":"Myanmar",
        "topLevelDomain":[
           ".mm"
        ],
        "alpha2Code":"MM",
        "alpha3Code":"MMR",
        "callingCodes":[
           "95"
        ],
        "capital":"Naypyidaw",
        "altSpellings":[
           "MM",
           "Burma",
           "Republic of the Union of Myanmar",
           "Pyidaunzu Thanmăda Myăma Nainngandaw"
        ],
        "region":"Asia",
        "subregion":"South-Eastern Asia",
        "population":51419420,
        "latlng":[
           22.0,
           98.0
        ],
        "demonym":"Burmese",
        "id":676578.0,
        "gini":null,
        "timezones":[
           "UTC+06:30"
        ],
        "borders":[
           "BGD",
           "CHN",
           "IND",
           "LAO",
           "THA"
        ],
        "nativeName":"Myanma",
        "numericCode":"104",
        "currencies":[
           {
              "code":"MMK",
              "name":"Burmese kyat",
              "symbol":"Ks"
           }
        ],
        "languages":[
           {
              "iso639_1":"my",
              "iso639_2":"mya",
              "name":"Burmese",
              "nativeName":"ဗမာစာ"
           }
        ],
        "translations":{
           "de":"Myanmar",
           "es":"Myanmar",
           "fr":"Myanmar",
           "ja":"ミャンマー",
           "it":"Birmania",
           "br":"Myanmar",
           "pt":"Myanmar",
           "nl":"Myanmar",
           "hr":"Mijanmar",
           "fa":"میانمار"
        },
        "flag":"https://restcountries.eu/data/mmr.svg",
        "regionalBlocs":[
           {
              "acronym":"ASEAN",
              "name":"Association of Southeast Asian Nations",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"MYA"
     },
     {
        "name":"Nepal",
        "topLevelDomain":[
           ".np"
        ],
        "alpha2Code":"NP",
        "alpha3Code":"NPL",
        "callingCodes":[
           "977"
        ],
        "capital":"Kathmandu",
        "altSpellings":[
           "NP",
           "Federal Democratic Republic of Nepal",
           "Loktāntrik Ganatantra Nepāl"
        ],
        "region":"Asia",
        "subregion":"Southern Asia",
        "population":28431500,
        "latlng":[
           28.0,
           84.0
        ],
        "demonym":"Nepalese",
        "id":147181.0,
        "gini":32.8,
        "timezones":[
           "UTC+05:45"
        ],
        "borders":[
           "CHN",
           "IND"
        ],
        "nativeName":"नेपाल",
        "numericCode":"524",
        "currencies":[
           {
              "code":"NPR",
              "name":"Nepalese rupee",
              "symbol":"₨"
           }
        ],
        "languages":[
           {
              "iso639_1":"ne",
              "iso639_2":"nep",
              "name":"Nepali",
              "nativeName":"नेपाली"
           }
        ],
        "translations":{
           "de":"Népal",
           "es":"Nepal",
           "fr":"Népal",
           "ja":"ネパール",
           "it":"Nepal",
           "br":"Nepal",
           "pt":"Nepal",
           "nl":"Nepal",
           "hr":"Nepal",
           "fa":"نپال"
        },
        "flag":"https://restcountries.eu/data/npl.svg",
        "regionalBlocs":[
           {
              "acronym":"SAARC",
              "name":"South Asian Association for Regional Cooperation",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"NEP"
     },
     {
        "name":"Korea (Democratic People's Republic of)",
        "topLevelDomain":[
           ".kp"
        ],
        "alpha2Code":"KP",
        "alpha3Code":"PRK",
        "callingCodes":[
           "850"
        ],
        "capital":"Pyongyang",
        "altSpellings":[
           "KP",
           "Democratic People's Republic of Korea",
           "조선민주주의인민공화국",
           "Chosŏn Minjujuŭi Inmin Konghwaguk"
        ],
        "region":"Asia",
        "subregion":"Eastern Asia",
        "population":25281000,
        "latlng":[
           40.0,
           127.0
        ],
        "demonym":"North Korean",
        "id":120538.0,
        "gini":null,
        "timezones":[
           "UTC+09:00"
        ],
        "borders":[
           "CHN",
           "KOR",
           "RUS"
        ],
        "nativeName":"북한",
        "numericCode":"408",
        "currencies":[
           {
              "code":"KPW",
              "name":"North Korean won",
              "symbol":"₩"
           }
        ],
        "languages":[
           {
              "iso639_1":"ko",
              "iso639_2":"kor",
              "name":"Korean",
              "nativeName":"한국어"
           }
        ],
        "translations":{
           "de":"Nordkorea",
           "es":"Corea del Norte",
           "fr":"Corée du Nord",
           "ja":"朝鮮民主主義人民共和国",
           "it":"Corea del Nord",
           "br":"Coreia do Norte",
           "pt":"Coreia do Norte",
           "nl":"Noord-Korea",
           "hr":"Sjeverna Koreja",
           "fa":"کره جنوبی"
        },
        "flag":"https://restcountries.eu/data/prk.svg",
        "regionalBlocs":[

        ],
        "cioc":"PRK"
     },
     {
        "name":"Oman",
        "topLevelDomain":[
           ".om"
        ],
        "alpha2Code":"OM",
        "alpha3Code":"OMN",
        "callingCodes":[
           "968"
        ],
        "capital":"Muscat",
        "altSpellings":[
           "OM",
           "Sultanate of Oman",
           "Salṭanat ʻUmān"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":4420133,
        "latlng":[
           21.0,
           57.0
        ],
        "demonym":"Omani",
        "id":309500.0,
        "gini":null,
        "timezones":[
           "UTC+04:00"
        ],
        "borders":[
           "SAU",
           "ARE",
           "YEM"
        ],
        "nativeName":"عمان",
        "numericCode":"512",
        "currencies":[
           {
              "code":"OMR",
              "name":"Omani rial",
              "symbol":"ر.ع."
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Oman",
           "es":"Omán",
           "fr":"Oman",
           "ja":"オマーン",
           "it":"oman",
           "br":"Omã",
           "pt":"Omã",
           "nl":"Oman",
           "hr":"Oman",
           "fa":"عمان"
        },
        "flag":"https://restcountries.eu/data/omn.svg",
        "regionalBlocs":[
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"OMA"
     },
     {
        "name":"Pakistan",
        "topLevelDomain":[
           ".pk"
        ],
        "alpha2Code":"PK",
        "alpha3Code":"PAK",
        "callingCodes":[
           "92"
        ],
        "capital":"Islamabad",
        "altSpellings":[
           "PK",
           "Pākistān",
           "Islamic Republic of Pakistan",
           "Islāmī Jumhūriya'eh Pākistān"
        ],
        "region":"Asia",
        "subregion":"Southern Asia",
        "population":194125062,
        "latlng":[
           30.0,
           70.0
        ],
        "demonym":"Pakistani",
        "id":881912.0,
        "gini":30.0,
        "timezones":[
           "UTC+05:00"
        ],
        "borders":[
           "AFG",
           "CHN",
           "IND",
           "IRN"
        ],
        "nativeName":"Pakistan",
        "numericCode":"586",
        "currencies":[
           {
              "code":"PKR",
              "name":"Pakistani rupee",
              "symbol":"₨"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"ur",
              "iso639_2":"urd",
              "name":"Urdu",
              "nativeName":"اردو"
           }
        ],
        "translations":{
           "de":"Pakistan",
           "es":"Pakistán",
           "fr":"Pakistan",
           "ja":"パキスタン",
           "it":"Pakistan",
           "br":"Paquistão",
           "pt":"Paquistão",
           "nl":"Pakistan",
           "hr":"Pakistan",
           "fa":"پاکستان"
        },
        "flag":"https://restcountries.eu/data/pak.svg",
        "regionalBlocs":[
           {
              "acronym":"SAARC",
              "name":"South Asian Association for Regional Cooperation",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"PAK"
     },
     {
        "name":"Palestine, State of",
        "topLevelDomain":[
           ".ps"
        ],
        "alpha2Code":"PS",
        "alpha3Code":"PSE",
        "callingCodes":[
           "970"
        ],
        "capital":"Ramallah",
        "altSpellings":[
           "PS",
           "State of Palestine",
           "Dawlat Filasṭin"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":4682467,
        "latlng":[
           31.9,
           35.2
        ],
        "demonym":"Palestinian",
        "id":666666,
        "gini":35.5,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "ISR",
           "EGY",
           "JOR"
        ],
        "nativeName":"فلسطين",
        "numericCode":"275",
        "currencies":[
           {
              "code":"ILS",
              "name":"Israeli new sheqel",
              "symbol":"₪"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Palästina",
           "es":"Palestina",
           "fr":"Palestine",
           "ja":"パレスチナ",
           "it":"Palestina",
           "br":"Palestina",
           "pt":"Palestina",
           "nl":"Palestijnse gebieden",
           "hr":"Palestina",
           "fa":"فلسطین"
        },
        "flag":"https://restcountries.eu/data/pse.svg",
        "regionalBlocs":[
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"PLE"
     },
     {
        "name":"Philippines",
        "topLevelDomain":[
           ".ph"
        ],
        "alpha2Code":"PH",
        "alpha3Code":"PHL",
        "callingCodes":[
           "63"
        ],
        "capital":"Manila",
        "altSpellings":[
           "PH",
           "Republic of the Philippines",
           "Repúblika ng Pilipinas"
        ],
        "region":"Asia",
        "subregion":"South-Eastern Asia",
        "population":103279800,
        "latlng":[
           13.0,
           122.0
        ],
        "demonym":"Filipino",
        "id":342353.0,
        "gini":43.0,
        "timezones":[
           "UTC+08:00"
        ],
        "borders":[

        ],
        "nativeName":"Pilipinas",
        "numericCode":"608",
        "currencies":[
           {
              "code":"PHP",
              "name":"Philippine peso",
              "symbol":"₱"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Philippinen",
           "es":"Filipinas",
           "fr":"Philippines",
           "ja":"フィリピン",
           "it":"Filippine",
           "br":"Filipinas",
           "pt":"Filipinas",
           "nl":"Filipijnen",
           "hr":"Filipini",
           "fa":"جزایر الندفیلیپین"
        },
        "flag":"https://restcountries.eu/data/phl.svg",
        "regionalBlocs":[
           {
              "acronym":"ASEAN",
              "name":"Association of Southeast Asian Nations",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"PHI"
     },
     {
        "name":"Qatar",
        "topLevelDomain":[
           ".qa"
        ],
        "alpha2Code":"QA",
        "alpha3Code":"QAT",
        "callingCodes":[
           "974"
        ],
        "capital":"Doha",
        "altSpellings":[
           "QA",
           "State of Qatar",
           "Dawlat Qaṭar"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":2587564,
        "latlng":[
           25.5,
           51.25
        ],
        "demonym":"Qatari",
        "id":11586.0,
        "gini":41.1,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "SAU"
        ],
        "nativeName":"قطر",
        "numericCode":"634",
        "currencies":[
           {
              "code":"QAR",
              "name":"Qatari riyal",
              "symbol":"ر.ق"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Katar",
           "es":"Catar",
           "fr":"Qatar",
           "ja":"カタール",
           "it":"Qatar",
           "br":"Catar",
           "pt":"Catar",
           "nl":"Qatar",
           "hr":"Katar",
           "fa":"قطر"
        },
        "flag":"https://restcountries.eu/data/qat.svg",
        "regionalBlocs":[
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"QAT"
     },
     {
        "name":"Saudi Arabia",
        "topLevelDomain":[
           ".sa"
        ],
        "alpha2Code":"SA",
        "alpha3Code":"SAU",
        "callingCodes":[
           "966"
        ],
        "capital":"Riyadh",
        "altSpellings":[
           "SA",
           "Kingdom of Saudi Arabia",
           "Al-Mamlakah al-‘Arabiyyah as-Su‘ūdiyyah"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":32248200,
        "latlng":[
           25.0,
           45.0
        ],
        "demonym":"Saudi Arabian",
        "id":2149690.0,
        "gini":null,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "IRQ",
           "JOR",
           "KWT",
           "OMN",
           "QAT",
           "ARE",
           "YEM"
        ],
        "nativeName":"العربية السعودية",
        "numericCode":"682",
        "currencies":[
           {
              "code":"SAR",
              "name":"Saudi riyal",
              "symbol":"ر.س"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Saudi-Arabien",
           "es":"Arabia Saudí",
           "fr":"Arabie Saoudite",
           "ja":"サウジアラビア",
           "it":"Arabia Saudita",
           "br":"Arábia Saudita",
           "pt":"Arábia Saudita",
           "nl":"Saoedi-Arabië",
           "hr":"Saudijska Arabija",
           "fa":"عربستان سعودی"
        },
        "flag":"https://restcountries.eu/data/sau.svg",
        "regionalBlocs":[
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"KSA"
     },
     {
        "name":"Singapore",
        "topLevelDomain":[
           ".sg"
        ],
        "alpha2Code":"SG",
        "alpha3Code":"SGP",
        "callingCodes":[
           "65"
        ],
        "capital":"Singapore",
        "altSpellings":[
           "SG",
           "Singapura",
           "Republik Singapura",
           "新加坡共和国"
        ],
        "region":"Asia",
        "subregion":"South-Eastern Asia",
        "population":5535000,
        "latlng":[
           1.36666666,
           103.8
        ],
        "demonym":"Singaporean",
        "id":710.0,
        "gini":48.1,
        "timezones":[
           "UTC+08:00"
        ],
        "borders":[

        ],
        "nativeName":"Singapore",
        "numericCode":"702",
        "currencies":[
           {
              "code":"BND",
              "name":"Brunei dollar",
              "symbol":"$"
           },
           {
              "code":"SGD",
              "name":"Singapore dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"ms",
              "iso639_2":"msa",
              "name":"Malay",
              "nativeName":"bahasa Melayu"
           },
           {
              "iso639_1":"ta",
              "iso639_2":"tam",
              "name":"Tamil",
              "nativeName":"தமிழ்"
           },
           {
              "iso639_1":"zh",
              "iso639_2":"zho",
              "name":"Chinese",
              "nativeName":"中文 (Zhōngwén)"
           }
        ],
        "translations":{
           "de":"Singapur",
           "es":"Singapur",
           "fr":"Singapour",
           "ja":"シンガポール",
           "it":"Singapore",
           "br":"Singapura",
           "pt":"Singapura",
           "nl":"Singapore",
           "hr":"Singapur",
           "fa":"سنگاپور"
        },
        "flag":"https://restcountries.eu/data/sgp.svg",
        "regionalBlocs":[
           {
              "acronym":"ASEAN",
              "name":"Association of Southeast Asian Nations",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"SIN"
     },
     {
        "name":"Korea (Republic of)",
        "topLevelDomain":[
           ".kr"
        ],
        "alpha2Code":"KR",
        "alpha3Code":"KOR",
        "callingCodes":[
           "82"
        ],
        "capital":"Seoul",
        "altSpellings":[
           "KR",
           "Republic of Korea"
        ],
        "region":"Asia",
        "subregion":"Eastern Asia",
        "population":50801405,
        "latlng":[
           37.0,
           127.5
        ],
        "demonym":"South Korean",
        "id":100210.0,
        "gini":31.3,
        "timezones":[
           "UTC+09:00"
        ],
        "borders":[
           "PRK"
        ],
        "nativeName":"대한민국",
        "numericCode":"410",
        "currencies":[
           {
              "code":"KRW",
              "name":"South Korean won",
              "symbol":"₩"
           }
        ],
        "languages":[
           {
              "iso639_1":"ko",
              "iso639_2":"kor",
              "name":"Korean",
              "nativeName":"한국어"
           }
        ],
        "translations":{
           "de":"Südkorea",
           "es":"Corea del Sur",
           "fr":"Corée du Sud",
           "ja":"大韓民国",
           "it":"Corea del Sud",
           "br":"Coreia do Sul",
           "pt":"Coreia do Sul",
           "nl":"Zuid-Korea",
           "hr":"Južna Koreja",
           "fa":"کره شمالی"
        },
        "flag":"https://restcountries.eu/data/kor.svg",
        "regionalBlocs":[

        ],
        "cioc":"KOR"
     },
     {
        "name":"Sri Lanka",
        "topLevelDomain":[
           ".lk"
        ],
        "alpha2Code":"LK",
        "alpha3Code":"LKA",
        "callingCodes":[
           "94"
        ],
        "capital":"Colombo",
        "altSpellings":[
           "LK",
           "ilaṅkai",
           "Democratic Socialist Republic of Sri Lanka"
        ],
        "region":"Asia",
        "subregion":"Southern Asia",
        "population":20966000,
        "latlng":[
           7.0,
           81.0
        ],
        "demonym":"Sri Lankan",
        "id":65610.0,
        "gini":40.3,
        "timezones":[
           "UTC+05:30"
        ],
        "borders":[
           "IND"
        ],
        "nativeName":"śrī laṃkāva",
        "numericCode":"144",
        "currencies":[
           {
              "code":"LKR",
              "name":"Sri Lankan rupee",
              "symbol":"Rs"
           }
        ],
        "languages":[
           {
              "iso639_1":"si",
              "iso639_2":"sin",
              "name":"Sinhalese",
              "nativeName":"සිංහල"
           },
           {
              "iso639_1":"ta",
              "iso639_2":"tam",
              "name":"Tamil",
              "nativeName":"தமிழ்"
           }
        ],
        "translations":{
           "de":"Sri Lanka",
           "es":"Sri Lanka",
           "fr":"Sri Lanka",
           "ja":"スリランカ",
           "it":"Sri Lanka",
           "br":"Sri Lanka",
           "pt":"Sri Lanka",
           "nl":"Sri Lanka",
           "hr":"Šri Lanka",
           "fa":"سری‌لانکا"
        },
        "flag":"https://restcountries.eu/data/lka.svg",
        "regionalBlocs":[
           {
              "acronym":"SAARC",
              "name":"South Asian Association for Regional Cooperation",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"SRI"
     },
     {
        "name":"Syrian Arab Republic",
        "topLevelDomain":[
           ".sy"
        ],
        "alpha2Code":"SY",
        "alpha3Code":"SYR",
        "callingCodes":[
           "963"
        ],
        "capital":"Damascus",
        "altSpellings":[
           "SY",
           "Syrian Arab Republic",
           "Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":18564000,
        "latlng":[
           35.0,
           38.0
        ],
        "demonym":"Syrian",
        "id":185180.0,
        "gini":35.8,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "IRQ",
           "ISR",
           "JOR",
           "LBN",
           "TUR"
        ],
        "nativeName":"سوريا",
        "numericCode":"760",
        "currencies":[
           {
              "code":"SYP",
              "name":"Syrian pound",
              "symbol":"£"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Syrien",
           "es":"Siria",
           "fr":"Syrie",
           "ja":"シリア・アラブ共和国",
           "it":"Siria",
           "br":"Síria",
           "pt":"Síria",
           "nl":"Syrië",
           "hr":"Sirija",
           "fa":"سوریه"
        },
        "flag":"https://restcountries.eu/data/syr.svg",
        "regionalBlocs":[
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"SYR"
     },
     {
        "name":"Taiwan",
        "topLevelDomain":[
           ".tw"
        ],
        "alpha2Code":"TW",
        "alpha3Code":"TWN",
        "callingCodes":[
           "886"
        ],
        "capital":"Taipei",
        "altSpellings":[
           "TW",
           "Táiwān",
           "Republic of China",
           "中華民國",
           "Zhōnghuá Mínguó"
        ],
        "region":"Asia",
        "subregion":"Eastern Asia",
        "population":23503349,
        "latlng":[
           23.5,
           121.0
        ],
        "demonym":"Taiwanese",
        "id":36193.0,
        "gini":null,
        "timezones":[
           "UTC+08:00"
        ],
        "borders":[

        ],
        "nativeName":"臺灣",
        "numericCode":"158",
        "currencies":[
           {
              "code":"TWD",
              "name":"New Taiwan dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"zh",
              "iso639_2":"zho",
              "name":"Chinese",
              "nativeName":"中文 (Zhōngwén)"
           }
        ],
        "translations":{
           "de":"Taiwan",
           "es":"Taiwán",
           "fr":"Taïwan",
           "ja":"台湾（中華民国）",
           "it":"Taiwan",
           "br":"Taiwan",
           "pt":"Taiwan",
           "nl":"Taiwan",
           "hr":"Tajvan",
           "fa":"تایوان"
        },
        "flag":"https://restcountries.eu/data/twn.svg",
        "regionalBlocs":[

        ],
        "cioc":"TPE"
     },
     {
        "name":"Tajikistan",
        "topLevelDomain":[
           ".tj"
        ],
        "alpha2Code":"TJ",
        "alpha3Code":"TJK",
        "callingCodes":[
           "992"
        ],
        "capital":"Dushanbe",
        "altSpellings":[
           "TJ",
           "Toçikiston",
           "Republic of Tajikistan",
           "Ҷумҳурии Тоҷикистон",
           "Çumhuriyi Toçikiston"
        ],
        "region":"Asia",
        "subregion":"Central Asia",
        "population":8593600,
        "latlng":[
           39.0,
           71.0
        ],
        "demonym":"Tadzhik",
        "id":143100.0,
        "gini":30.8,
        "timezones":[
           "UTC+05:00"
        ],
        "borders":[
           "AFG",
           "CHN",
           "KGZ",
           "UZB"
        ],
        "nativeName":"Тоҷикистон",
        "numericCode":"762",
        "currencies":[
           {
              "code":"TJS",
              "name":"Tajikistani somoni",
              "symbol":"ЅМ"
           }
        ],
        "languages":[
           {
              "iso639_1":"tg",
              "iso639_2":"tgk",
              "name":"Tajik",
              "nativeName":"тоҷикӣ"
           },
           {
              "iso639_1":"ru",
              "iso639_2":"rus",
              "name":"Russian",
              "nativeName":"Русский"
           }
        ],
        "translations":{
           "de":"Tadschikistan",
           "es":"Tayikistán",
           "fr":"Tadjikistan",
           "ja":"タジキスタン",
           "it":"Tagikistan",
           "br":"Tajiquistão",
           "pt":"Tajiquistão",
           "nl":"Tadzjikistan",
           "hr":"Tađikistan",
           "fa":"تاجیکستان"
        },
        "flag":"https://restcountries.eu/data/tjk.svg",
        "regionalBlocs":[

        ],
        "cioc":"TJK"
     },
     {
        "name":"Thailand",
        "topLevelDomain":[
           ".th"
        ],
        "alpha2Code":"TH",
        "alpha3Code":"THA",
        "callingCodes":[
           "66"
        ],
        "capital":"Bangkok",
        "altSpellings":[
           "TH",
           "Prathet",
           "Thai",
           "Kingdom of Thailand",
           "ราชอาณาจักรไทย",
           "Ratcha Anachak Thai"
        ],
        "region":"Asia",
        "subregion":"South-Eastern Asia",
        "population":65327652,
        "latlng":[
           15.0,
           100.0
        ],
        "demonym":"Thai",
        "id":513120.0,
        "gini":40.0,
        "timezones":[
           "UTC+07:00"
        ],
        "borders":[
           "MMR",
           "KHM",
           "LAO",
           "MYS"
        ],
        "nativeName":"ประเทศไทย",
        "numericCode":"764",
        "currencies":[
           {
              "code":"THB",
              "name":"Thai baht",
              "symbol":"฿"
           }
        ],
        "languages":[
           {
              "iso639_1":"th",
              "iso639_2":"tha",
              "name":"Thai",
              "nativeName":"ไทย"
           }
        ],
        "translations":{
           "de":"Thailand",
           "es":"Tailandia",
           "fr":"Thaïlande",
           "ja":"タイ",
           "it":"Tailandia",
           "br":"Tailândia",
           "pt":"Tailândia",
           "nl":"Thailand",
           "hr":"Tajland",
           "fa":"تایلند"
        },
        "flag":"https://restcountries.eu/data/tha.svg",
        "regionalBlocs":[
           {
              "acronym":"ASEAN",
              "name":"Association of Southeast Asian Nations",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"THA"
     },
     {
        "name":"Timor-Leste",
        "topLevelDomain":[
           ".tl"
        ],
        "alpha2Code":"TL",
        "alpha3Code":"TLS",
        "callingCodes":[
           "670"
        ],
        "capital":"Dili",
        "altSpellings":[
           "TL",
           "East Timor",
           "Democratic Republic of Timor-Leste",
           "República Democrática de Timor-Leste",
           "Repúblika Demokrátika Timór-Leste"
        ],
        "region":"Asia",
        "subregion":"South-Eastern Asia",
        "population":1167242,
        "latlng":[
           -8.83333333,
           125.91666666
        ],
        "demonym":"East Timorese",
        "id":14874.0,
        "gini":31.9,
        "timezones":[
           "UTC+09:00"
        ],
        "borders":[
           "IDN"
        ],
        "nativeName":"Timor-Leste",
        "numericCode":"626",
        "currencies":[
           {
              "code":"USD",
              "name":"United States dollar",
              "symbol":"$"
           },
           {
              "code":null,
              "name":null,
              "symbol":null
           }
        ],
        "languages":[
           {
              "iso639_1":"pt",
              "iso639_2":"por",
              "name":"Portuguese",
              "nativeName":"Português"
           }
        ],
        "translations":{
           "de":"Timor-Leste",
           "es":"Timor Oriental",
           "fr":"Timor oriental",
           "ja":"東ティモール",
           "it":"Timor Est",
           "br":"Timor Leste",
           "pt":"Timor Leste",
           "nl":"Oost-Timor",
           "hr":"Istočni Timor",
           "fa":"تیمور شرقی"
        },
        "flag":"https://restcountries.eu/data/tls.svg",
        "regionalBlocs":[

        ],
        "cioc":"TLS"
     },
     {
        "name":"Turkey",
        "topLevelDomain":[
           ".tr"
        ],
        "alpha2Code":"TR",
        "alpha3Code":"TUR",
        "callingCodes":[
           "90"
        ],
        "capital":"Ankara",
        "altSpellings":[
           "TR",
           "Turkiye",
           "Republic of Turkey",
           "Türkiye Cumhuriyeti"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":78741053,
        "latlng":[
           39.0,
           35.0
        ],
        "demonym":"Turkish",
        "id":783562.0,
        "gini":39.0,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "ARM",
           "AZE",
           "BGR",
           "GEO",
           "GRC",
           "IRN",
           "IRQ",
           "SYR"
        ],
        "nativeName":"Türkiye",
        "numericCode":"792",
        "currencies":[
           {
              "code":"TRY",
              "name":"Turkish lira",
              "symbol":null
           }
        ],
        "languages":[
           {
              "iso639_1":"tr",
              "iso639_2":"tur",
              "name":"Turkish",
              "nativeName":"Türkçe"
           }
        ],
        "translations":{
           "de":"Türkei",
           "es":"Turquía",
           "fr":"Turquie",
           "ja":"トルコ",
           "it":"Turchia",
           "br":"Turquia",
           "pt":"Turquia",
           "nl":"Turkije",
           "hr":"Turska",
           "fa":"ترکیه"
        },
        "flag":"https://restcountries.eu/data/tur.svg",
        "regionalBlocs":[

        ],
        "cioc":"TUR"
     },
     {
        "name":"Turkmenistan",
        "topLevelDomain":[
           ".tm"
        ],
        "alpha2Code":"TM",
        "alpha3Code":"TKM",
        "callingCodes":[
           "993"
        ],
        "capital":"Ashgabat",
        "altSpellings":[
           "TM"
        ],
        "region":"Asia",
        "subregion":"Central Asia",
        "population":4751120,
        "latlng":[
           40.0,
           60.0
        ],
        "demonym":"Turkmen",
        "id":488100.0,
        "gini":40.8,
        "timezones":[
           "UTC+05:00"
        ],
        "borders":[
           "AFG",
           "IRN",
           "KAZ",
           "UZB"
        ],
        "nativeName":"Türkmenistan",
        "numericCode":"795",
        "currencies":[
           {
              "code":"TMT",
              "name":"Turkmenistan manat",
              "symbol":"m"
           }
        ],
        "languages":[
           {
              "iso639_1":"tk",
              "iso639_2":"tuk",
              "name":"Turkmen",
              "nativeName":"Türkmen"
           },
           {
              "iso639_1":"ru",
              "iso639_2":"rus",
              "name":"Russian",
              "nativeName":"Русский"
           }
        ],
        "translations":{
           "de":"Turkmenistan",
           "es":"Turkmenistán",
           "fr":"Turkménistan",
           "ja":"トルクメニスタン",
           "it":"Turkmenistan",
           "br":"Turcomenistão",
           "pt":"Turquemenistão",
           "nl":"Turkmenistan",
           "hr":"Turkmenistan",
           "fa":"ترکمنستان"
        },
        "flag":"https://restcountries.eu/data/tkm.svg",
        "regionalBlocs":[

        ],
        "cioc":"TKM"
     },
     {
        "name":"United Arab Emirates",
        "topLevelDomain":[
           ".ae"
        ],
        "alpha2Code":"AE",
        "alpha3Code":"ARE",
        "callingCodes":[
           "971"
        ],
        "capital":"Abu Dhabi",
        "altSpellings":[
           "AE",
           "UAE"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":9856000,
        "latlng":[
           24.0,
           54.0
        ],
        "demonym":"Emirati",
        "id":83600.0,
        "gini":null,
        "timezones":[
           "UTC+04"
        ],
        "borders":[
           "OMN",
           "SAU"
        ],
        "nativeName":"دولة الإمارات العربية المتحدة",
        "numericCode":"784",
        "currencies":[
           {
              "code":"AED",
              "name":"United Arab Emirates dirham",
              "symbol":"د.إ"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Vereinigte Arabische Emirate",
           "es":"Emiratos Árabes Unidos",
           "fr":"Émirats arabes unis",
           "ja":"アラブ首長国連邦",
           "it":"Emirati Arabi Uniti",
           "br":"Emirados árabes Unidos",
           "pt":"Emirados árabes Unidos",
           "nl":"Verenigde Arabische Emiraten",
           "hr":"Ujedinjeni Arapski Emirati",
           "fa":"امارات متحده عربی"
        },
        "flag":"https://restcountries.eu/data/are.svg",
        "regionalBlocs":[
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"UAE"
     },
     {
        "name":"Uzbekistan",
        "topLevelDomain":[
           ".uz"
        ],
        "alpha2Code":"UZ",
        "alpha3Code":"UZB",
        "callingCodes":[
           "998"
        ],
        "capital":"Tashkent",
        "altSpellings":[
           "UZ",
           "Republic of Uzbekistan",
           "O‘zbekiston Respublikasi",
           "Ўзбекистон Республикаси"
        ],
        "region":"Asia",
        "subregion":"Central Asia",
        "population":31576400,
        "latlng":[
           41.0,
           64.0
        ],
        "demonym":"Uzbekistani",
        "id":447400.0,
        "gini":36.7,
        "timezones":[
           "UTC+05:00"
        ],
        "borders":[
           "AFG",
           "KAZ",
           "KGZ",
           "TJK",
           "TKM"
        ],
        "nativeName":"O‘zbekiston",
        "numericCode":"860",
        "currencies":[
           {
              "code":"UZS",
              "name":"Uzbekistani so'm",
              "symbol":null
           }
        ],
        "languages":[
           {
              "iso639_1":"uz",
              "iso639_2":"uzb",
              "name":"Uzbek",
              "nativeName":"Oʻzbek"
           },
           {
              "iso639_1":"ru",
              "iso639_2":"rus",
              "name":"Russian",
              "nativeName":"Русский"
           }
        ],
        "translations":{
           "de":"Usbekistan",
           "es":"Uzbekistán",
           "fr":"Ouzbékistan",
           "ja":"ウズベキスタン",
           "it":"Uzbekistan",
           "br":"Uzbequistão",
           "pt":"Usbequistão",
           "nl":"Oezbekistan",
           "hr":"Uzbekistan",
           "fa":"ازبکستان"
        },
        "flag":"https://restcountries.eu/data/uzb.svg",
        "regionalBlocs":[

        ],
        "cioc":"UZB"
     },
     {
        "name":"Viet Nam",
        "topLevelDomain":[
           ".vn"
        ],
        "alpha2Code":"VN",
        "alpha3Code":"VNM",
        "callingCodes":[
           "84"
        ],
        "capital":"Hanoi",
        "altSpellings":[
           "VN",
           "Socialist Republic of Vietnam",
           "Cộng hòa Xã hội chủ nghĩa Việt Nam"
        ],
        "region":"Asia",
        "subregion":"South-Eastern Asia",
        "population":92700000,
        "latlng":[
           16.16666666,
           107.83333333
        ],
        "demonym":"Vietnamese",
        "id":331212.0,
        "gini":35.6,
        "timezones":[
           "UTC+07:00"
        ],
        "borders":[
           "KHM",
           "CHN",
           "LAO"
        ],
        "nativeName":"Việt Nam",
        "numericCode":"704",
        "currencies":[
           {
              "code":"VND",
              "name":"Vietnamese đồng",
              "symbol":"₫"
           }
        ],
        "languages":[
           {
              "iso639_1":"vi",
              "iso639_2":"vie",
              "name":"Vietnamese",
              "nativeName":"Tiếng Việt"
           }
        ],
        "translations":{
           "de":"Vietnam",
           "es":"Vietnam",
           "fr":"Viêt Nam",
           "ja":"ベトナム",
           "it":"Vietnam",
           "br":"Vietnã",
           "pt":"Vietname",
           "nl":"Vietnam",
           "hr":"Vijetnam",
           "fa":"ویتنام"
        },
        "flag":"https://restcountries.eu/data/vnm.svg",
        "regionalBlocs":[
           {
              "acronym":"ASEAN",
              "name":"Association of Southeast Asian Nations",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"VIE"
     },
     {
        "name":"Yemen",
        "topLevelDomain":[
           ".ye"
        ],
        "alpha2Code":"YE",
        "alpha3Code":"YEM",
        "callingCodes":[
           "967"
        ],
        "capital":"Sana'a",
        "altSpellings":[
           "YE",
           "Yemeni Republic",
           "al-Jumhūriyyah al-Yamaniyyah"
        ],
        "region":"Asia",
        "subregion":"Western Asia",
        "population":27478000,
        "latlng":[
           15.0,
           48.0
        ],
        "demonym":"Yemeni",
        "id":527968.0,
        "gini":37.7,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "OMN",
           "SAU"
        ],
        "nativeName":"اليَمَن",
        "numericCode":"887",
        "currencies":[
           {
              "code":"YER",
              "name":"Yemeni rial",
              "symbol":"﷼"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Jemen",
           "es":"Yemen",
           "fr":"Yémen",
           "ja":"イエメン",
           "it":"Yemen",
           "br":"Iêmen",
           "pt":"Iémen",
           "nl":"Jemen",
           "hr":"Jemen",
           "fa":"یمن"
        },
        "flag":"https://restcountries.eu/data/yem.svg",
        "regionalBlocs":[
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"YEM"
     }
    ];

    const europe = [
      {
        "name":"Åland Islands",
        "topLevelDomain":[
           ".ax"
        ],
        "alpha2Code":"AX",
        "alpha3Code":"ALA",
        "callingCodes":[
           "358"
        ],
        "capital":"Mariehamn",
        "altSpellings":[
           "AX",
           "Aaland",
           "Aland",
           "Ahvenanmaa"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":28875,
        "latlng":[
           60.116667,
           19.9
        ],
        "demonym":"Ålandish",
        "id":1580.0,
        "gini":null,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[

        ],
        "nativeName":"Åland",
        "numericCode":"248",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"sv",
              "iso639_2":"swe",
              "name":"Swedish",
              "nativeName":"svenska"
           }
        ],
        "translations":{
           "de":"Åland",
           "es":"Alandia",
           "fr":"Åland",
           "ja":"オーランド諸島",
           "it":"Isole Aland",
           "br":"Ilhas de Aland",
           "pt":"Ilhas de Aland",
           "nl":"Ålandeilanden",
           "hr":"Ålandski otoci",
           "fa":"جزایر الند"
        },
        "flag":"https://restcountries.eu/data/ala.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":""
     },
     {
        "name":"Albania",
        "topLevelDomain":[
           ".al"
        ],
        "alpha2Code":"AL",
        "alpha3Code":"ALB",
        "callingCodes":[
           "355"
        ],
        "capital":"Tirana",
        "altSpellings":[
           "AL",
           "Shqipëri",
           "Shqipëria",
           "Shqipnia"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":2886026,
        "latlng":[
           41.0,
           20.0
        ],
        "demonym":"Albanian",
        "id":28748.0,
        "gini":34.5,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "MNE",
           "GRC",
           "MKD",
           "KOS"
        ],
        "nativeName":"Shqipëria",
        "numericCode":"008",
        "currencies":[
           {
              "code":"ALL",
              "name":"Albanian lek",
              "symbol":"L"
           }
        ],
        "languages":[
           {
              "iso639_1":"sq",
              "iso639_2":"sqi",
              "name":"Albanian",
              "nativeName":"Shqip"
           }
        ],
        "translations":{
           "de":"Albanien",
           "es":"Albania",
           "fr":"Albanie",
           "ja":"アルバニア",
           "it":"Albania",
           "br":"Albânia",
           "pt":"Albânia",
           "nl":"Albanië",
           "hr":"Albanija",
           "fa":"آلبانی"
        },
        "flag":"https://restcountries.eu/data/alb.svg",
        "regionalBlocs":[
           {
              "acronym":"CEFTA",
              "name":"Central European Free Trade Agreement",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"ALB"
     },
     {
        "name":"Andorra",
        "topLevelDomain":[
           ".ad"
        ],
        "alpha2Code":"AD",
        "alpha3Code":"AND",
        "callingCodes":[
           "376"
        ],
        "capital":"Andorra la Vella",
        "altSpellings":[
           "AD",
           "Principality of Andorra",
           "Principat d'Andorra"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":78014,
        "latlng":[
           42.5,
           1.5
        ],
        "demonym":"Andorran",
        "id":468.0,
        "gini":null,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "FRA",
           "ESP"
        ],
        "nativeName":"Andorra",
        "numericCode":"020",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"ca",
              "iso639_2":"cat",
              "name":"Catalan",
              "nativeName":"català"
           }
        ],
        "translations":{
           "de":"Andorra",
           "es":"Andorra",
           "fr":"Andorre",
           "ja":"アンドラ",
           "it":"Andorra",
           "br":"Andorra",
           "pt":"Andorra",
           "nl":"Andorra",
           "hr":"Andora",
           "fa":"آندورا"
        },
        "flag":"https://restcountries.eu/data/and.svg",
        "regionalBlocs":[

        ],
        "cioc":"AND"
     },
     {
        "name":"Austria",
        "topLevelDomain":[
           ".at"
        ],
        "alpha2Code":"AT",
        "alpha3Code":"AUT",
        "callingCodes":[
           "43"
        ],
        "capital":"Vienna",
        "altSpellings":[
           "AT",
           "Österreich",
           "Osterreich",
           "Oesterreich"
        ],
        "region":"Europe",
        "subregion":"Western Europe",
        "population":8725931,
        "latlng":[
           47.33333333,
           13.33333333
        ],
        "demonym":"Austrian",
        "id":83871.0,
        "gini":26.0,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "CZE",
           "DEU",
           "HUN",
           "ITA",
           "LIE",
           "SVK",
           "SVN",
           "CHE"
        ],
        "nativeName":"Österreich",
        "numericCode":"040",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"de",
              "iso639_2":"deu",
              "name":"German",
              "nativeName":"Deutsch"
           }
        ],
        "translations":{
           "de":"Österreich",
           "es":"Austria",
           "fr":"Autriche",
           "ja":"オーストリア",
           "it":"Austria",
           "br":"áustria",
           "pt":"áustria",
           "nl":"Oostenrijk",
           "hr":"Austrija",
           "fa":"اتریش"
        },
        "flag":"https://restcountries.eu/data/aut.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"AUT"
     },
     {
        "name":"Belarus",
        "topLevelDomain":[
           ".by"
        ],
        "alpha2Code":"BY",
        "alpha3Code":"BLR",
        "callingCodes":[
           "375"
        ],
        "capital":"Minsk",
        "altSpellings":[
           "BY",
           "Bielaruś",
           "Republic of Belarus",
           "Белоруссия",
           "Республика Беларусь",
           "Belorussiya",
           "Respublika Belarus’"
        ],
        "region":"Europe",
        "subregion":"Eastern Europe",
        "population":9498700,
        "latlng":[
           53.0,
           28.0
        ],
        "demonym":"Belarusian",
        "id":207600.0,
        "gini":26.5,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "LVA",
           "LTU",
           "POL",
           "RUS",
           "UKR"
        ],
        "nativeName":"Белару́сь",
        "numericCode":"112",
        "currencies":[
           {
              "code":"BYN",
              "name":"New Belarusian ruble",
              "symbol":"Br"
           },
           {
              "code":"BYR",
              "name":"Old Belarusian ruble",
              "symbol":"Br"
           }
        ],
        "languages":[
           {
              "iso639_1":"be",
              "iso639_2":"bel",
              "name":"Belarusian",
              "nativeName":"беларуская мова"
           },
           {
              "iso639_1":"ru",
              "iso639_2":"rus",
              "name":"Russian",
              "nativeName":"Русский"
           }
        ],
        "translations":{
           "de":"Weißrussland",
           "es":"Bielorrusia",
           "fr":"Biélorussie",
           "ja":"ベラルーシ",
           "it":"Bielorussia",
           "br":"Bielorrússia",
           "pt":"Bielorrússia",
           "nl":"Wit-Rusland",
           "hr":"Bjelorusija",
           "fa":"بلاروس"
        },
        "flag":"https://restcountries.eu/data/blr.svg",
        "regionalBlocs":[
           {
              "acronym":"EEU",
              "name":"Eurasian Economic Union",
              "otherAcronyms":[
                 "EAEU"
              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"BLR"
     },
     {
        "name":"Belgium",
        "topLevelDomain":[
           ".be"
        ],
        "alpha2Code":"BE",
        "alpha3Code":"BEL",
        "callingCodes":[
           "32"
        ],
        "capital":"Brussels",
        "altSpellings":[
           "BE",
           "België",
           "Belgie",
           "Belgien",
           "Belgique",
           "Kingdom of Belgium",
           "Koninkrijk België",
           "Royaume de Belgique",
           "Königreich Belgien"
        ],
        "region":"Europe",
        "subregion":"Western Europe",
        "population":11319511,
        "latlng":[
           50.83333333,
           4.0
        ],
        "demonym":"Belgian",
        "id":30528.0,
        "gini":33.0,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "FRA",
           "DEU",
           "LUX",
           "NLD"
        ],
        "nativeName":"België",
        "numericCode":"056",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"nl",
              "iso639_2":"nld",
              "name":"Dutch",
              "nativeName":"Nederlands"
           },
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"de",
              "iso639_2":"deu",
              "name":"German",
              "nativeName":"Deutsch"
           }
        ],
        "translations":{
           "de":"Belgien",
           "es":"Bélgica",
           "fr":"Belgique",
           "ja":"ベルギー",
           "it":"Belgio",
           "br":"Bélgica",
           "pt":"Bélgica",
           "nl":"België",
           "hr":"Belgija",
           "fa":"بلژیک"
        },
        "flag":"https://restcountries.eu/data/bel.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"BEL"
     },
     {
        "name":"Bosnia and Herzegovina",
        "topLevelDomain":[
           ".ba"
        ],
        "alpha2Code":"BA",
        "alpha3Code":"BIH",
        "callingCodes":[
           "387"
        ],
        "capital":"Sarajevo",
        "altSpellings":[
           "BA",
           "Bosnia-Herzegovina",
           "Босна и Херцеговина"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":3531159,
        "latlng":[
           44.0,
           18.0
        ],
        "demonym":"Bosnian, Herzegovinian",
        "id":51209.0,
        "gini":36.2,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "HRV",
           "MNE",
           "SRB"
        ],
        "nativeName":"Bosna i Hercegovina",
        "numericCode":"070",
        "currencies":[
           {
              "code":"BAM",
              "name":"Bosnia and Herzegovina convertible mark",
              "symbol":null
           }
        ],
        "languages":[
           {
              "iso639_1":"bs",
              "iso639_2":"bos",
              "name":"Bosnian",
              "nativeName":"bosanski jezik"
           },
           {
              "iso639_1":"hr",
              "iso639_2":"hrv",
              "name":"Croatian",
              "nativeName":"hrvatski jezik"
           },
           {
              "iso639_1":"sr",
              "iso639_2":"srp",
              "name":"Serbian",
              "nativeName":"српски језик"
           }
        ],
        "translations":{
           "de":"Bosnien und Herzegowina",
           "es":"Bosnia y Herzegovina",
           "fr":"Bosnie-Herzégovine",
           "ja":"ボスニア・ヘルツェゴビナ",
           "it":"Bosnia ed Erzegovina",
           "br":"Bósnia e Herzegovina",
           "pt":"Bósnia e Herzegovina",
           "nl":"Bosnië en Herzegovina",
           "hr":"Bosna i Hercegovina",
           "fa":"بوسنی و هرزگوین"
        },
        "flag":"https://restcountries.eu/data/bih.svg",
        "regionalBlocs":[
           {
              "acronym":"CEFTA",
              "name":"Central European Free Trade Agreement",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"BIH"
     },
     {
        "name":"Bulgaria",
        "topLevelDomain":[
           ".bg"
        ],
        "alpha2Code":"BG",
        "alpha3Code":"BGR",
        "callingCodes":[
           "359"
        ],
        "capital":"Sofia",
        "altSpellings":[
           "BG",
           "Republic of Bulgaria",
           "Република България"
        ],
        "region":"Europe",
        "subregion":"Eastern Europe",
        "population":7153784,
        "latlng":[
           43.0,
           25.0
        ],
        "demonym":"Bulgarian",
        "id":110879.0,
        "gini":28.2,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "GRC",
           "MKD",
           "ROU",
           "SRB",
           "TUR"
        ],
        "nativeName":"България",
        "numericCode":"100",
        "currencies":[
           {
              "code":"BGN",
              "name":"Bulgarian lev",
              "symbol":"лв"
           }
        ],
        "languages":[
           {
              "iso639_1":"bg",
              "iso639_2":"bul",
              "name":"Bulgarian",
              "nativeName":"български език"
           }
        ],
        "translations":{
           "de":"Bulgarien",
           "es":"Bulgaria",
           "fr":"Bulgarie",
           "ja":"ブルガリア",
           "it":"Bulgaria",
           "br":"Bulgária",
           "pt":"Bulgária",
           "nl":"Bulgarije",
           "hr":"Bugarska",
           "fa":"بلغارستان"
        },
        "flag":"https://restcountries.eu/data/bgr.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"BUL"
     },
     {
        "name":"Croatia",
        "topLevelDomain":[
           ".hr"
        ],
        "alpha2Code":"HR",
        "alpha3Code":"HRV",
        "callingCodes":[
           "385"
        ],
        "capital":"Zagreb",
        "altSpellings":[
           "HR",
           "Hrvatska",
           "Republic of Croatia",
           "Republika Hrvatska"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":4190669,
        "latlng":[
           45.16666666,
           15.5
        ],
        "demonym":"Croatian",
        "id":56594.0,
        "gini":33.7,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "BIH",
           "HUN",
           "MNE",
           "SRB",
           "SVN"
        ],
        "nativeName":"Hrvatska",
        "numericCode":"191",
        "currencies":[
           {
              "code":"HRK",
              "name":"Croatian kuna",
              "symbol":"kn"
           }
        ],
        "languages":[
           {
              "iso639_1":"hr",
              "iso639_2":"hrv",
              "name":"Croatian",
              "nativeName":"hrvatski jezik"
           }
        ],
        "translations":{
           "de":"Kroatien",
           "es":"Croacia",
           "fr":"Croatie",
           "ja":"クロアチア",
           "it":"Croazia",
           "br":"Croácia",
           "pt":"Croácia",
           "nl":"Kroatië",
           "hr":"Hrvatska",
           "fa":"کرواسی"
        },
        "flag":"https://restcountries.eu/data/hrv.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"CRO"
     },
     {
        "name":"Cyprus",
        "topLevelDomain":[
           ".cy"
        ],
        "alpha2Code":"CY",
        "alpha3Code":"CYP",
        "callingCodes":[
           "357"
        ],
        "capital":"Nicosia",
        "altSpellings":[
           "CY",
           "Kýpros",
           "Kıbrıs",
           "Republic of Cyprus",
           "Κυπριακή Δημοκρατία",
           "Kıbrıs Cumhuriyeti"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":847000,
        "latlng":[
           35.0,
           33.0
        ],
        "demonym":"Cypriot",
        "id":9251.0,
        "gini":null,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "GBR"
        ],
        "nativeName":"Κύπρος",
        "numericCode":"196",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"el",
              "iso639_2":"ell",
              "name":"Greek (modern)",
              "nativeName":"ελληνικά"
           },
           {
              "iso639_1":"tr",
              "iso639_2":"tur",
              "name":"Turkish",
              "nativeName":"Türkçe"
           },
           {
              "iso639_1":"hy",
              "iso639_2":"hye",
              "name":"Armenian",
              "nativeName":"Հայերեն"
           }
        ],
        "translations":{
           "de":"Zypern",
           "es":"Chipre",
           "fr":"Chypre",
           "ja":"キプロス",
           "it":"Cipro",
           "br":"Chipre",
           "pt":"Chipre",
           "nl":"Cyprus",
           "hr":"Cipar",
           "fa":"قبرس"
        },
        "flag":"https://restcountries.eu/data/cyp.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"CYP"
     },
     {
        "name":"Czech Republic",
        "topLevelDomain":[
           ".cz"
        ],
        "alpha2Code":"CZ",
        "alpha3Code":"CZE",
        "callingCodes":[
           "420"
        ],
        "capital":"Prague",
        "altSpellings":[
           "CZ",
           "Česká republika",
           "Česko"
        ],
        "region":"Europe",
        "subregion":"Eastern Europe",
        "population":10558524,
        "latlng":[
           49.75,
           15.5
        ],
        "demonym":"Czech",
        "id":78865.0,
        "gini":26.0,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "AUT",
           "DEU",
           "POL",
           "SVK"
        ],
        "nativeName":"Česká republika",
        "numericCode":"203",
        "currencies":[
           {
              "code":"CZK",
              "name":"Czech koruna",
              "symbol":"Kč"
           }
        ],
        "languages":[
           {
              "iso639_1":"cs",
              "iso639_2":"ces",
              "name":"Czech",
              "nativeName":"čeština"
           },
           {
              "iso639_1":"sk",
              "iso639_2":"slk",
              "name":"Slovak",
              "nativeName":"slovenčina"
           }
        ],
        "translations":{
           "de":"Tschechische Republik",
           "es":"República Checa",
           "fr":"République tchèque",
           "ja":"チェコ",
           "it":"Repubblica Ceca",
           "br":"República Tcheca",
           "pt":"República Checa",
           "nl":"Tsjechië",
           "hr":"Češka",
           "fa":"جمهوری چک"
        },
        "flag":"https://restcountries.eu/data/cze.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"CZE"
     },
     {
        "name":"Denmark",
        "topLevelDomain":[
           ".dk"
        ],
        "alpha2Code":"DK",
        "alpha3Code":"DNK",
        "callingCodes":[
           "45"
        ],
        "capital":"Copenhagen",
        "altSpellings":[
           "DK",
           "Danmark",
           "Kingdom of Denmark",
           "Kongeriget Danmark"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":5717014,
        "latlng":[
           56.0,
           10.0
        ],
        "demonym":"Danish",
        "id":43094.0,
        "gini":24.0,
        "timezones":[
           "UTC-04:00",
           "UTC-03:00",
           "UTC-01:00",
           "UTC",
           "UTC+01:00"
        ],
        "borders":[
           "DEU"
        ],
        "nativeName":"Danmark",
        "numericCode":"208",
        "currencies":[
           {
              "code":"DKK",
              "name":"Danish krone",
              "symbol":"kr"
           }
        ],
        "languages":[
           {
              "iso639_1":"da",
              "iso639_2":"dan",
              "name":"Danish",
              "nativeName":"dansk"
           }
        ],
        "translations":{
           "de":"Dänemark",
           "es":"Dinamarca",
           "fr":"Danemark",
           "ja":"デンマーク",
           "it":"Danimarca",
           "br":"Dinamarca",
           "pt":"Dinamarca",
           "nl":"Denemarken",
           "hr":"Danska",
           "fa":"دانمارک"
        },
        "flag":"https://restcountries.eu/data/dnk.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"DEN"
     },
     {
        "name":"Estonia",
        "topLevelDomain":[
           ".ee"
        ],
        "alpha2Code":"EE",
        "alpha3Code":"EST",
        "callingCodes":[
           "372"
        ],
        "capital":"Tallinn",
        "altSpellings":[
           "EE",
           "Eesti",
           "Republic of Estonia",
           "Eesti Vabariik"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":1315944,
        "latlng":[
           59.0,
           26.0
        ],
        "demonym":"Estonian",
        "id":45227.0,
        "gini":36.0,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "LVA",
           "RUS"
        ],
        "nativeName":"Eesti",
        "numericCode":"233",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"et",
              "iso639_2":"est",
              "name":"Estonian",
              "nativeName":"eesti"
           }
        ],
        "translations":{
           "de":"Estland",
           "es":"Estonia",
           "fr":"Estonie",
           "ja":"エストニア",
           "it":"Estonia",
           "br":"Estônia",
           "pt":"Estónia",
           "nl":"Estland",
           "hr":"Estonija",
           "fa":"استونی"
        },
        "flag":"https://restcountries.eu/data/est.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"EST"
     },
     {
        "name":"Faroe Islands",
        "topLevelDomain":[
           ".fo"
        ],
        "alpha2Code":"FO",
        "alpha3Code":"FRO",
        "callingCodes":[
           "298"
        ],
        "capital":"Tórshavn",
        "altSpellings":[
           "FO",
           "Føroyar",
           "Færøerne"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":49376,
        "latlng":[
           62.0,
           -7.0
        ],
        "demonym":"Faroese",
        "id":1393.0,
        "gini":null,
        "timezones":[
           "UTC+00:00"
        ],
        "borders":[

        ],
        "nativeName":"Føroyar",
        "numericCode":"234",
        "currencies":[
           {
              "code":"DKK",
              "name":"Danish krone",
              "symbol":"kr"
           },
           {
              "code":"(none)",
              "name":"Faroese króna",
              "symbol":"kr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fo",
              "iso639_2":"fao",
              "name":"Faroese",
              "nativeName":"føroyskt"
           }
        ],
        "translations":{
           "de":"Färöer-Inseln",
           "es":"Islas Faroe",
           "fr":"Îles Féroé",
           "ja":"フェロー諸島",
           "it":"Isole Far Oer",
           "br":"Ilhas Faroé",
           "pt":"Ilhas Faroé",
           "nl":"Faeröer",
           "hr":"Farski Otoci",
           "fa":"جزایر فارو"
        },
        "flag":"https://restcountries.eu/data/fro.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":""
     },
     {
        "name":"Finland",
        "topLevelDomain":[
           ".fi"
        ],
        "alpha2Code":"FI",
        "alpha3Code":"FIN",
        "callingCodes":[
           "358"
        ],
        "capital":"Helsinki",
        "altSpellings":[
           "FI",
           "Suomi",
           "Republic of Finland",
           "Suomen tasavalta",
           "Republiken Finland"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":5491817,
        "latlng":[
           64.0,
           26.0
        ],
        "demonym":"Finnish",
        "id":338424.0,
        "gini":26.9,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "NOR",
           "SWE",
           "RUS"
        ],
        "nativeName":"Suomi",
        "numericCode":"246",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"fi",
              "iso639_2":"fin",
              "name":"Finnish",
              "nativeName":"suomi"
           },
           {
              "iso639_1":"sv",
              "iso639_2":"swe",
              "name":"Swedish",
              "nativeName":"svenska"
           }
        ],
        "translations":{
           "de":"Finnland",
           "es":"Finlandia",
           "fr":"Finlande",
           "ja":"フィンランド",
           "it":"Finlandia",
           "br":"Finlândia",
           "pt":"Finlândia",
           "nl":"Finland",
           "hr":"Finska",
           "fa":"فنلاند"
        },
        "flag":"https://restcountries.eu/data/fin.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"FIN"
     },
     {
        "name":"France",
        "topLevelDomain":[
           ".fr"
        ],
        "alpha2Code":"FR",
        "alpha3Code":"FRA",
        "callingCodes":[
           "33"
        ],
        "capital":"Paris",
        "altSpellings":[
           "FR",
           "French Republic",
           "République française"
        ],
        "region":"Europe",
        "subregion":"Western Europe",
        "population":66710000,
        "latlng":[
           46.0,
           2.0
        ],
        "demonym":"French",
        "id":640679.0,
        "gini":32.7,
        "timezones":[
           "UTC-10:00",
           "UTC-09:30",
           "UTC-09:00",
           "UTC-08:00",
           "UTC-04:00",
           "UTC-03:00",
           "UTC+01:00",
           "UTC+03:00",
           "UTC+04:00",
           "UTC+05:00",
           "UTC+11:00",
           "UTC+12:00"
        ],
        "borders":[
           "AND",
           "BEL",
           "DEU",
           "ITA",
           "LUX",
           "MCO",
           "ESP",
           "CHE"
        ],
        "nativeName":"France",
        "numericCode":"250",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Frankreich",
           "es":"Francia",
           "fr":"France",
           "ja":"フランス",
           "it":"Francia",
           "br":"França",
           "pt":"França",
           "nl":"Frankrijk",
           "hr":"Francuska",
           "fa":"فرانسه"
        },
        "flag":"https://restcountries.eu/data/fra.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"FRA"
     },
     {
        "name":"Germany",
        "topLevelDomain":[
           ".de"
        ],
        "alpha2Code":"DE",
        "alpha3Code":"DEU",
        "callingCodes":[
           "49"
        ],
        "capital":"Berlin",
        "altSpellings":[
           "DE",
           "Federal Republic of Germany",
           "Bundesrepublik Deutschland"
        ],
        "region":"Europe",
        "subregion":"Western Europe",
        "population":81770900,
        "latlng":[
           51.0,
           9.0
        ],
        "demonym":"German",
        "id":357114.0,
        "gini":28.3,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "AUT",
           "BEL",
           "CZE",
           "DNK",
           "FRA",
           "LUX",
           "NLD",
           "POL",
           "CHE"
        ],
        "nativeName":"Deutschland",
        "numericCode":"276",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"de",
              "iso639_2":"deu",
              "name":"German",
              "nativeName":"Deutsch"
           }
        ],
        "translations":{
           "de":"Deutschland",
           "es":"Alemania",
           "fr":"Allemagne",
           "ja":"ドイツ",
           "it":"Germania",
           "br":"Alemanha",
           "pt":"Alemanha",
           "nl":"Duitsland",
           "hr":"Njemačka",
           "fa":"آلمان"
        },
        "flag":"https://restcountries.eu/data/deu.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"GER"
     },
     {
        "name":"Gibraltar",
        "topLevelDomain":[
           ".gi"
        ],
        "alpha2Code":"GI",
        "alpha3Code":"GIB",
        "callingCodes":[
           "350"
        ],
        "capital":"Gibraltar",
        "altSpellings":[
           "GI"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":33140,
        "latlng":[
           36.13333333,
           -5.35
        ],
        "demonym":"Gibraltar",
        "id":6.0,
        "gini":null,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "ESP"
        ],
        "nativeName":"Gibraltar",
        "numericCode":"292",
        "currencies":[
           {
              "code":"GIP",
              "name":"Gibraltar pound",
              "symbol":"£"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Gibraltar",
           "es":"Gibraltar",
           "fr":"Gibraltar",
           "ja":"ジブラルタル",
           "it":"Gibilterra",
           "br":"Gibraltar",
           "pt":"Gibraltar",
           "nl":"Gibraltar",
           "hr":"Gibraltar",
           "fa":"جبل‌طارق"
        },
        "flag":"https://restcountries.eu/data/gib.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":""
     },
     {
        "name":"Greece",
        "topLevelDomain":[
           ".gr"
        ],
        "alpha2Code":"GR",
        "alpha3Code":"GRC",
        "callingCodes":[
           "30"
        ],
        "capital":"Athens",
        "altSpellings":[
           "GR",
           "Elláda",
           "Hellenic Republic",
           "Ελληνική Δημοκρατία"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":10858018,
        "latlng":[
           39.0,
           22.0
        ],
        "demonym":"Greek",
        "id":131990.0,
        "gini":34.3,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "ALB",
           "BGR",
           "TUR",
           "MKD"
        ],
        "nativeName":"Ελλάδα",
        "numericCode":"300",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"el",
              "iso639_2":"ell",
              "name":"Greek (modern)",
              "nativeName":"ελληνικά"
           }
        ],
        "translations":{
           "de":"Griechenland",
           "es":"Grecia",
           "fr":"Grèce",
           "ja":"ギリシャ",
           "it":"Grecia",
           "br":"Grécia",
           "pt":"Grécia",
           "nl":"Griekenland",
           "hr":"Grčka",
           "fa":"یونان"
        },
        "flag":"https://restcountries.eu/data/grc.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"GRE"
     },
     {
        "name":"Guernsey",
        "topLevelDomain":[
           ".gg"
        ],
        "alpha2Code":"GG",
        "alpha3Code":"GGY",
        "callingCodes":[
           "44"
        ],
        "capital":"St. Peter Port",
        "altSpellings":[
           "GG",
           "Bailiwick of Guernsey",
           "Bailliage de Guernesey"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":62999,
        "latlng":[
           49.46666666,
           -2.58333333
        ],
        "demonym":"Channel Islander",
        "id":78.0,
        "gini":null,
        "timezones":[
           "UTC+00:00"
        ],
        "borders":[

        ],
        "nativeName":"Guernsey",
        "numericCode":"831",
        "currencies":[
           {
              "code":"GBP",
              "name":"British pound",
              "symbol":"£"
           },
           {
              "code":"(none)",
              "name":"Guernsey pound",
              "symbol":"£"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Guernsey",
           "es":"Guernsey",
           "fr":"Guernesey",
           "ja":"ガーンジー",
           "it":"Guernsey",
           "br":"Guernsey",
           "pt":"Guernsey",
           "nl":"Guernsey",
           "hr":"Guernsey",
           "fa":"گرنزی"
        },
        "flag":"https://restcountries.eu/data/ggy.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"Holy See",
        "topLevelDomain":[
           ".va"
        ],
        "alpha2Code":"VA",
        "alpha3Code":"VAT",
        "callingCodes":[
           "379"
        ],
        "capital":"Rome",
        "altSpellings":[
           "Sancta Sedes",
           "Vatican",
           "The Vatican"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":451,
        "latlng":[
           41.9,
           12.45
        ],
        "demonym":"",
        "id":0.44,
        "gini":null,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "ITA"
        ],
        "nativeName":"Sancta Sedes",
        "numericCode":"336",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"la",
              "iso639_2":"lat",
              "name":"Latin",
              "nativeName":"latine"
           },
           {
              "iso639_1":"it",
              "iso639_2":"ita",
              "name":"Italian",
              "nativeName":"Italiano"
           },
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"de",
              "iso639_2":"deu",
              "name":"German",
              "nativeName":"Deutsch"
           }
        ],
        "translations":{
           "de":"Heiliger Stuhl",
           "es":"Santa Sede",
           "fr":"voir Saint",
           "ja":"聖座",
           "it":"Santa Sede",
           "br":"Vaticano",
           "pt":"Vaticano",
           "nl":"Heilige Stoel",
           "hr":"Sveta Stolica",
           "fa":"سریر مقدس"
        },
        "flag":"https://restcountries.eu/data/vat.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"Hungary",
        "topLevelDomain":[
           ".hu"
        ],
        "alpha2Code":"HU",
        "alpha3Code":"HUN",
        "callingCodes":[
           "36"
        ],
        "capital":"Budapest",
        "altSpellings":[
           "HU"
        ],
        "region":"Europe",
        "subregion":"Eastern Europe",
        "population":9823000,
        "latlng":[
           47.0,
           20.0
        ],
        "demonym":"Hungarian",
        "id":93028.0,
        "gini":31.2,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "AUT",
           "HRV",
           "ROU",
           "SRB",
           "SVK",
           "SVN",
           "UKR"
        ],
        "nativeName":"Magyarország",
        "numericCode":"348",
        "currencies":[
           {
              "code":"HUF",
              "name":"Hungarian forint",
              "symbol":"Ft"
           }
        ],
        "languages":[
           {
              "iso639_1":"hu",
              "iso639_2":"hun",
              "name":"Hungarian",
              "nativeName":"magyar"
           }
        ],
        "translations":{
           "de":"Ungarn",
           "es":"Hungría",
           "fr":"Hongrie",
           "ja":"ハンガリー",
           "it":"Ungheria",
           "br":"Hungria",
           "pt":"Hungria",
           "nl":"Hongarije",
           "hr":"Mađarska",
           "fa":"مجارستان"
        },
        "flag":"https://restcountries.eu/data/hun.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"HUN"
     },
     {
        "name":"Iceland",
        "topLevelDomain":[
           ".is"
        ],
        "alpha2Code":"IS",
        "alpha3Code":"ISL",
        "callingCodes":[
           "354"
        ],
        "capital":"Reykjavík",
        "altSpellings":[
           "IS",
           "Island",
           "Republic of Iceland",
           "Lýðveldið Ísland"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":334300,
        "latlng":[
           65.0,
           -18.0
        ],
        "demonym":"Icelander",
        "id":103000.0,
        "gini":null,
        "timezones":[
           "UTC"
        ],
        "borders":[

        ],
        "nativeName":"Ísland",
        "numericCode":"352",
        "currencies":[
           {
              "code":"ISK",
              "name":"Icelandic króna",
              "symbol":"kr"
           }
        ],
        "languages":[
           {
              "iso639_1":"is",
              "iso639_2":"isl",
              "name":"Icelandic",
              "nativeName":"Íslenska"
           }
        ],
        "translations":{
           "de":"Island",
           "es":"Islandia",
           "fr":"Islande",
           "ja":"アイスランド",
           "it":"Islanda",
           "br":"Islândia",
           "pt":"Islândia",
           "nl":"IJsland",
           "hr":"Island",
           "fa":"ایسلند"
        },
        "flag":"https://restcountries.eu/data/isl.svg",
        "regionalBlocs":[
           {
              "acronym":"EFTA",
              "name":"European Free Trade Association",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"ISL"
     },
     {
        "name":"Ireland",
        "topLevelDomain":[
           ".ie"
        ],
        "alpha2Code":"IE",
        "alpha3Code":"IRL",
        "callingCodes":[
           "353"
        ],
        "capital":"Dublin",
        "altSpellings":[
           "IE",
           "Éire",
           "Republic of Ireland",
           "Poblacht na hÉireann"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":6378000,
        "latlng":[
           53.0,
           -8.0
        ],
        "demonym":"Irish",
        "id":70273.0,
        "gini":34.3,
        "timezones":[
           "UTC"
        ],
        "borders":[
           "GBR"
        ],
        "nativeName":"Éire",
        "numericCode":"372",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"ga",
              "iso639_2":"gle",
              "name":"Irish",
              "nativeName":"Gaeilge"
           },
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Irland",
           "es":"Irlanda",
           "fr":"Irlande",
           "ja":"アイルランド",
           "it":"Irlanda",
           "br":"Irlanda",
           "pt":"Irlanda",
           "nl":"Ierland",
           "hr":"Irska",
           "fa":"ایرلند"
        },
        "flag":"https://restcountries.eu/data/irl.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"IRL"
     },
     {
        "name":"Isle of Man",
        "topLevelDomain":[
           ".im"
        ],
        "alpha2Code":"IM",
        "alpha3Code":"IMN",
        "callingCodes":[
           "44"
        ],
        "capital":"Douglas",
        "altSpellings":[
           "IM",
           "Ellan Vannin",
           "Mann",
           "Mannin"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":84497,
        "latlng":[
           54.25,
           -4.5
        ],
        "demonym":"Manx",
        "id":572.0,
        "gini":null,
        "timezones":[
           "UTC+00:00"
        ],
        "borders":[

        ],
        "nativeName":"Isle of Man",
        "numericCode":"833",
        "currencies":[
           {
              "code":"GBP",
              "name":"British pound",
              "symbol":"£"
           },
           {
              "code":"IMP[G]",
              "name":"Manx pound",
              "symbol":"£"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"gv",
              "iso639_2":"glv",
              "name":"Manx",
              "nativeName":"Gaelg"
           }
        ],
        "translations":{
           "de":"Insel Man",
           "es":"Isla de Man",
           "fr":"Île de Man",
           "ja":"マン島",
           "it":"Isola di Man",
           "br":"Ilha de Man",
           "pt":"Ilha de Man",
           "nl":"Isle of Man",
           "hr":"Otok Man",
           "fa":"جزیره من"
        },
        "flag":"https://restcountries.eu/data/imn.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":""
     },
     {
        "name":"Italy",
        "topLevelDomain":[
           ".it"
        ],
        "alpha2Code":"IT",
        "alpha3Code":"ITA",
        "callingCodes":[
           "39"
        ],
        "capital":"Rome",
        "altSpellings":[
           "IT",
           "Italian Republic",
           "Repubblica italiana"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":60665551,
        "latlng":[
           42.83333333,
           12.83333333
        ],
        "demonym":"Italian",
        "id":301336.0,
        "gini":36.0,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "AUT",
           "FRA",
           "SMR",
           "SVN",
           "CHE",
           "VAT"
        ],
        "nativeName":"Italia",
        "numericCode":"380",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"it",
              "iso639_2":"ita",
              "name":"Italian",
              "nativeName":"Italiano"
           }
        ],
        "translations":{
           "de":"Italien",
           "es":"Italia",
           "fr":"Italie",
           "ja":"イタリア",
           "it":"Italia",
           "br":"Itália",
           "pt":"Itália",
           "nl":"Italië",
           "hr":"Italija",
           "fa":"ایتالیا"
        },
        "flag":"https://restcountries.eu/data/ita.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"ITA"
     },
     {
        "name":"Jersey",
        "topLevelDomain":[
           ".je"
        ],
        "alpha2Code":"JE",
        "alpha3Code":"JEY",
        "callingCodes":[
           "44"
        ],
        "capital":"Saint Helier",
        "altSpellings":[
           "JE",
           "Bailiwick of Jersey",
           "Bailliage de Jersey",
           "Bailliage dé Jèrri"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":100800,
        "latlng":[
           49.25,
           -2.16666666
        ],
        "demonym":"Channel Islander",
        "id":116.0,
        "gini":null,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[

        ],
        "nativeName":"Jersey",
        "numericCode":"832",
        "currencies":[
           {
              "code":"GBP",
              "name":"British pound",
              "symbol":"£"
           },
           {
              "code":"JEP[G]",
              "name":"Jersey pound",
              "symbol":"£"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Jersey",
           "es":"Jersey",
           "fr":"Jersey",
           "ja":"ジャージー",
           "it":"Isola di Jersey",
           "br":"Jersey",
           "pt":"Jersey",
           "nl":"Jersey",
           "hr":"Jersey",
           "fa":"جرزی"
        },
        "flag":"https://restcountries.eu/data/jey.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"Latvia",
        "topLevelDomain":[
           ".lv"
        ],
        "alpha2Code":"LV",
        "alpha3Code":"LVA",
        "callingCodes":[
           "371"
        ],
        "capital":"Riga",
        "altSpellings":[
           "LV",
           "Republic of Latvia",
           "Latvijas Republika"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":1961600,
        "latlng":[
           57.0,
           25.0
        ],
        "demonym":"Latvian",
        "id":64559.0,
        "gini":36.6,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "BLR",
           "EST",
           "LTU",
           "RUS"
        ],
        "nativeName":"Latvija",
        "numericCode":"428",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"lv",
              "iso639_2":"lav",
              "name":"Latvian",
              "nativeName":"latviešu valoda"
           }
        ],
        "translations":{
           "de":"Lettland",
           "es":"Letonia",
           "fr":"Lettonie",
           "ja":"ラトビア",
           "it":"Lettonia",
           "br":"Letônia",
           "pt":"Letónia",
           "nl":"Letland",
           "hr":"Latvija",
           "fa":"لتونی"
        },
        "flag":"https://restcountries.eu/data/lva.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"LAT"
     },
     {
        "name":"Liechtenstein",
        "topLevelDomain":[
           ".li"
        ],
        "alpha2Code":"LI",
        "alpha3Code":"LIE",
        "callingCodes":[
           "423"
        ],
        "capital":"Vaduz",
        "altSpellings":[
           "LI",
           "Principality of Liechtenstein",
           "Fürstentum Liechtenstein"
        ],
        "region":"Europe",
        "subregion":"Western Europe",
        "population":37623,
        "latlng":[
           47.26666666,
           9.53333333
        ],
        "demonym":"Liechtensteiner",
        "id":160.0,
        "gini":null,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "AUT",
           "CHE"
        ],
        "nativeName":"Liechtenstein",
        "numericCode":"438",
        "currencies":[
           {
              "code":"CHF",
              "name":"Swiss franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"de",
              "iso639_2":"deu",
              "name":"German",
              "nativeName":"Deutsch"
           }
        ],
        "translations":{
           "de":"Liechtenstein",
           "es":"Liechtenstein",
           "fr":"Liechtenstein",
           "ja":"リヒテンシュタイン",
           "it":"Liechtenstein",
           "br":"Liechtenstein",
           "pt":"Listenstaine",
           "nl":"Liechtenstein",
           "hr":"Lihtenštajn",
           "fa":"لیختن‌اشتاین"
        },
        "flag":"https://restcountries.eu/data/lie.svg",
        "regionalBlocs":[
           {
              "acronym":"EFTA",
              "name":"European Free Trade Association",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"LIE"
     },
     {
        "name":"Lithuania",
        "topLevelDomain":[
           ".lt"
        ],
        "alpha2Code":"LT",
        "alpha3Code":"LTU",
        "callingCodes":[
           "370"
        ],
        "capital":"Vilnius",
        "altSpellings":[
           "LT",
           "Republic of Lithuania",
           "Lietuvos Respublika"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":2872294,
        "latlng":[
           56.0,
           24.0
        ],
        "demonym":"Lithuanian",
        "id":65300.0,
        "gini":37.6,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "BLR",
           "LVA",
           "POL",
           "RUS"
        ],
        "nativeName":"Lietuva",
        "numericCode":"440",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"lt",
              "iso639_2":"lit",
              "name":"Lithuanian",
              "nativeName":"lietuvių kalba"
           }
        ],
        "translations":{
           "de":"Litauen",
           "es":"Lituania",
           "fr":"Lituanie",
           "ja":"リトアニア",
           "it":"Lituania",
           "br":"Lituânia",
           "pt":"Lituânia",
           "nl":"Litouwen",
           "hr":"Litva",
           "fa":"لیتوانی"
        },
        "flag":"https://restcountries.eu/data/ltu.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"LTU"
     },
     {
        "name":"Luxembourg",
        "topLevelDomain":[
           ".lu"
        ],
        "alpha2Code":"LU",
        "alpha3Code":"LUX",
        "callingCodes":[
           "352"
        ],
        "capital":"Luxembourg",
        "altSpellings":[
           "LU",
           "Grand Duchy of Luxembourg",
           "Grand-Duché de Luxembourg",
           "Großherzogtum Luxemburg",
           "Groussherzogtum Lëtzebuerg"
        ],
        "region":"Europe",
        "subregion":"Western Europe",
        "population":576200,
        "latlng":[
           49.75,
           6.16666666
        ],
        "demonym":"Luxembourger",
        "id":2586.0,
        "gini":30.8,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "BEL",
           "FRA",
           "DEU"
        ],
        "nativeName":"Luxembourg",
        "numericCode":"442",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"de",
              "iso639_2":"deu",
              "name":"German",
              "nativeName":"Deutsch"
           },
           {
              "iso639_1":"lb",
              "iso639_2":"ltz",
              "name":"Luxembourgish",
              "nativeName":"Lëtzebuergesch"
           }
        ],
        "translations":{
           "de":"Luxemburg",
           "es":"Luxemburgo",
           "fr":"Luxembourg",
           "ja":"ルクセンブルク",
           "it":"Lussemburgo",
           "br":"Luxemburgo",
           "pt":"Luxemburgo",
           "nl":"Luxemburg",
           "hr":"Luksemburg",
           "fa":"لوکزامبورگ"
        },
        "flag":"https://restcountries.eu/data/lux.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"LUX"
     },
     {
        "name":"Macedonia (the former Yugoslav Republic of)",
        "topLevelDomain":[
           ".mk"
        ],
        "alpha2Code":"MK",
        "alpha3Code":"MKD",
        "callingCodes":[
           "389"
        ],
        "capital":"Skopje",
        "altSpellings":[
           "MK",
           "Republic of Macedonia",
           "Република Македонија"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":2058539,
        "latlng":[
           41.83333333,
           22.0
        ],
        "demonym":"Macedonian",
        "id":25713.0,
        "gini":43.2,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "ALB",
           "BGR",
           "GRC",
           "KOS",
           "SRB"
        ],
        "nativeName":"Македонија",
        "numericCode":"807",
        "currencies":[
           {
              "code":"MKD",
              "name":"Macedonian denar",
              "symbol":"ден"
           }
        ],
        "languages":[
           {
              "iso639_1":"mk",
              "iso639_2":"mkd",
              "name":"Macedonian",
              "nativeName":"македонски јазик"
           }
        ],
        "translations":{
           "de":"Mazedonien",
           "es":"Macedonia",
           "fr":"Macédoine",
           "ja":"マケドニア旧ユーゴスラビア共和国",
           "it":"Macedonia",
           "br":"Macedônia",
           "pt":"Macedónia",
           "nl":"Macedonië",
           "hr":"Makedonija",
           "fa":""
        },
        "flag":"https://restcountries.eu/data/mkd.svg",
        "regionalBlocs":[
           {
              "acronym":"CEFTA",
              "name":"Central European Free Trade Agreement",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"MKD"
     },
     {
        "name":"Malta",
        "topLevelDomain":[
           ".mt"
        ],
        "alpha2Code":"MT",
        "alpha3Code":"MLT",
        "callingCodes":[
           "356"
        ],
        "capital":"Valletta",
        "altSpellings":[
           "MT",
           "Republic of Malta",
           "Repubblika ta' Malta"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":425384,
        "latlng":[
           35.83333333,
           14.58333333
        ],
        "demonym":"Maltese",
        "id":316.0,
        "gini":null,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[

        ],
        "nativeName":"Malta",
        "numericCode":"470",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"mt",
              "iso639_2":"mlt",
              "name":"Maltese",
              "nativeName":"Malti"
           },
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Malta",
           "es":"Malta",
           "fr":"Malte",
           "ja":"マルタ",
           "it":"Malta",
           "br":"Malta",
           "pt":"Malta",
           "nl":"Malta",
           "hr":"Malta",
           "fa":"مالت"
        },
        "flag":"https://restcountries.eu/data/mlt.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"MLT"
     },
     {
        "name":"Moldova (Republic of)",
        "topLevelDomain":[
           ".md"
        ],
        "alpha2Code":"MD",
        "alpha3Code":"MDA",
        "callingCodes":[
           "373"
        ],
        "capital":"Chișinău",
        "altSpellings":[
           "MD",
           "Republic of Moldova",
           "Republica Moldova"
        ],
        "region":"Europe",
        "subregion":"Eastern Europe",
        "population":3553100,
        "latlng":[
           47.0,
           29.0
        ],
        "demonym":"Moldovan",
        "id":33846.0,
        "gini":33.0,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "ROU",
           "UKR"
        ],
        "nativeName":"Moldova",
        "numericCode":"498",
        "currencies":[
           {
              "code":"MDL",
              "name":"Moldovan leu",
              "symbol":"L"
           }
        ],
        "languages":[
           {
              "iso639_1":"ro",
              "iso639_2":"ron",
              "name":"Romanian",
              "nativeName":"Română"
           }
        ],
        "translations":{
           "de":"Moldawie",
           "es":"Moldavia",
           "fr":"Moldavie",
           "ja":"モルドバ共和国",
           "it":"Moldavia",
           "br":"Moldávia",
           "pt":"Moldávia",
           "nl":"Moldavië",
           "hr":"Moldova",
           "fa":"مولداوی"
        },
        "flag":"https://restcountries.eu/data/mda.svg",
        "regionalBlocs":[
           {
              "acronym":"CEFTA",
              "name":"Central European Free Trade Agreement",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"MDA"
     },
     {
        "name":"Monaco",
        "topLevelDomain":[
           ".mc"
        ],
        "alpha2Code":"MC",
        "alpha3Code":"MCO",
        "callingCodes":[
           "377"
        ],
        "capital":"Monaco",
        "altSpellings":[
           "MC",
           "Principality of Monaco",
           "Principauté de Monaco"
        ],
        "region":"Europe",
        "subregion":"Western Europe",
        "population":38400,
        "latlng":[
           43.73333333,
           7.4
        ],
        "demonym":"Monegasque",
        "id":2.02,
        "gini":null,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "FRA"
        ],
        "nativeName":"Monaco",
        "numericCode":"492",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Monaco",
           "es":"Mónaco",
           "fr":"Monaco",
           "ja":"モナコ",
           "it":"Principato di Monaco",
           "br":"Mônaco",
           "pt":"Mónaco",
           "nl":"Monaco",
           "hr":"Monako",
           "fa":"موناکو"
        },
        "flag":"https://restcountries.eu/data/mco.svg",
        "regionalBlocs":[

        ],
        "cioc":"MON"
     },
     {
        "name":"Montenegro",
        "topLevelDomain":[
           ".me"
        ],
        "alpha2Code":"ME",
        "alpha3Code":"MNE",
        "callingCodes":[
           "382"
        ],
        "capital":"Podgorica",
        "altSpellings":[
           "ME",
           "Crna Gora"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":621810,
        "latlng":[
           42.5,
           19.3
        ],
        "demonym":"Montenegrin",
        "id":13812.0,
        "gini":30.0,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "ALB",
           "BIH",
           "HRV",
           "KOS",
           "SRB"
        ],
        "nativeName":"Црна Гора",
        "numericCode":"499",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"sr",
              "iso639_2":"srp",
              "name":"Serbian",
              "nativeName":"српски језик"
           },
           {
              "iso639_1":"bs",
              "iso639_2":"bos",
              "name":"Bosnian",
              "nativeName":"bosanski jezik"
           },
           {
              "iso639_1":"sq",
              "iso639_2":"sqi",
              "name":"Albanian",
              "nativeName":"Shqip"
           },
           {
              "iso639_1":"hr",
              "iso639_2":"hrv",
              "name":"Croatian",
              "nativeName":"hrvatski jezik"
           }
        ],
        "translations":{
           "de":"Montenegro",
           "es":"Montenegro",
           "fr":"Monténégro",
           "ja":"モンテネグロ",
           "it":"Montenegro",
           "br":"Montenegro",
           "pt":"Montenegro",
           "nl":"Montenegro",
           "hr":"Crna Gora",
           "fa":"مونته‌نگرو"
        },
        "flag":"https://restcountries.eu/data/mne.svg",
        "regionalBlocs":[
           {
              "acronym":"CEFTA",
              "name":"Central European Free Trade Agreement",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"MNE"
     },
     {
        "name":"Netherlands",
        "topLevelDomain":[
           ".nl"
        ],
        "alpha2Code":"NL",
        "alpha3Code":"NLD",
        "callingCodes":[
           "31"
        ],
        "capital":"Amsterdam",
        "altSpellings":[
           "NL",
           "Holland",
           "Nederland"
        ],
        "region":"Europe",
        "subregion":"Western Europe",
        "population":17019800,
        "latlng":[
           52.5,
           5.75
        ],
        "demonym":"Dutch",
        "id":41850.0,
        "gini":30.9,
        "timezones":[
           "UTC-04:00",
           "UTC+01:00"
        ],
        "borders":[
           "BEL",
           "DEU"
        ],
        "nativeName":"Nederland",
        "numericCode":"528",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"nl",
              "iso639_2":"nld",
              "name":"Dutch",
              "nativeName":"Nederlands"
           }
        ],
        "translations":{
           "de":"Niederlande",
           "es":"Países Bajos",
           "fr":"Pays-Bas",
           "ja":"オランダ",
           "it":"Paesi Bassi",
           "br":"Holanda",
           "pt":"Países Baixos",
           "nl":"Nederland",
           "hr":"Nizozemska",
           "fa":"پادشاهی هلند"
        },
        "flag":"https://restcountries.eu/data/nld.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"NED"
     },
     {
        "name":"Norway",
        "topLevelDomain":[
           ".no"
        ],
        "alpha2Code":"NO",
        "alpha3Code":"NOR",
        "callingCodes":[
           "47"
        ],
        "capital":"Oslo",
        "altSpellings":[
           "NO",
           "Norge",
           "Noreg",
           "Kingdom of Norway",
           "Kongeriket Norge",
           "Kongeriket Noreg"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":5223256,
        "latlng":[
           62.0,
           10.0
        ],
        "demonym":"Norwegian",
        "id":323802.0,
        "gini":25.8,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "FIN",
           "SWE",
           "RUS"
        ],
        "nativeName":"Norge",
        "numericCode":"578",
        "currencies":[
           {
              "code":"NOK",
              "name":"Norwegian krone",
              "symbol":"kr"
           }
        ],
        "languages":[
           {
              "iso639_1":"no",
              "iso639_2":"nor",
              "name":"Norwegian",
              "nativeName":"Norsk"
           },
           {
              "iso639_1":"nb",
              "iso639_2":"nob",
              "name":"Norwegian Bokmål",
              "nativeName":"Norsk bokmål"
           },
           {
              "iso639_1":"nn",
              "iso639_2":"nno",
              "name":"Norwegian Nynorsk",
              "nativeName":"Norsk nynorsk"
           }
        ],
        "translations":{
           "de":"Norwegen",
           "es":"Noruega",
           "fr":"Norvège",
           "ja":"ノルウェー",
           "it":"Norvegia",
           "br":"Noruega",
           "pt":"Noruega",
           "nl":"Noorwegen",
           "hr":"Norveška",
           "fa":"نروژ"
        },
        "flag":"https://restcountries.eu/data/nor.svg",
        "regionalBlocs":[
           {
              "acronym":"EFTA",
              "name":"European Free Trade Association",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"NOR"
     },
     {
        "name":"Poland",
        "topLevelDomain":[
           ".pl"
        ],
        "alpha2Code":"PL",
        "alpha3Code":"POL",
        "callingCodes":[
           "48"
        ],
        "capital":"Warsaw",
        "altSpellings":[
           "PL",
           "Republic of Poland",
           "Rzeczpospolita Polska"
        ],
        "region":"Europe",
        "subregion":"Eastern Europe",
        "population":38437239,
        "latlng":[
           52.0,
           20.0
        ],
        "demonym":"Polish",
        "id":312679.0,
        "gini":34.1,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "BLR",
           "CZE",
           "DEU",
           "LTU",
           "RUS",
           "SVK",
           "UKR"
        ],
        "nativeName":"Polska",
        "numericCode":"616",
        "currencies":[
           {
              "code":"PLN",
              "name":"Polish złoty",
              "symbol":"zł"
           }
        ],
        "languages":[
           {
              "iso639_1":"pl",
              "iso639_2":"pol",
              "name":"Polish",
              "nativeName":"język polski"
           }
        ],
        "translations":{
           "de":"Polen",
           "es":"Polonia",
           "fr":"Pologne",
           "ja":"ポーランド",
           "it":"Polonia",
           "br":"Polônia",
           "pt":"Polónia",
           "nl":"Polen",
           "hr":"Poljska",
           "fa":"لهستان"
        },
        "flag":"https://restcountries.eu/data/pol.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"POL"
     },
     {
        "name":"Portugal",
        "topLevelDomain":[
           ".pt"
        ],
        "alpha2Code":"PT",
        "alpha3Code":"PRT",
        "callingCodes":[
           "351"
        ],
        "capital":"Lisbon",
        "altSpellings":[
           "PT",
           "Portuguesa",
           "Portuguese Republic",
           "República Portuguesa"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":10374822,
        "latlng":[
           39.5,
           -8.0
        ],
        "demonym":"Portuguese",
        "id":92090.0,
        "gini":38.5,
        "timezones":[
           "UTC-01:00",
           "UTC"
        ],
        "borders":[
           "ESP"
        ],
        "nativeName":"Portugal",
        "numericCode":"620",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"pt",
              "iso639_2":"por",
              "name":"Portuguese",
              "nativeName":"Português"
           }
        ],
        "translations":{
           "de":"Portugal",
           "es":"Portugal",
           "fr":"Portugal",
           "ja":"ポルトガル",
           "it":"Portogallo",
           "br":"Portugal",
           "pt":"Portugal",
           "nl":"Portugal",
           "hr":"Portugal",
           "fa":"پرتغال"
        },
        "flag":"https://restcountries.eu/data/prt.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"POR"
     },
     {
        "name":"Republic of Kosovo",
        "topLevelDomain":[
           ""
        ],
        "alpha2Code":"XK",
        "alpha3Code":"KOS",
        "callingCodes":[
           "383"
        ],
        "capital":"Pristina",
        "altSpellings":[
           "XK",
           "Република Косово"
        ],
        "region":"Europe",
        "subregion":"Eastern Europe",
        "population":1733842,
        "latlng":[
           42.666667,
           21.166667
        ],
        "demonym":"Kosovar",
        "id":10908.0,
        "gini":null,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "ALB",
           "MKD",
           "MNE",
           "SRB"
        ],
        "nativeName":"Republika e Kosovës",
        "numericCode":null,
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"sq",
              "iso639_2":"sqi",
              "name":"Albanian",
              "nativeName":"Shqip"
           },
           {
              "iso639_1":"sr",
              "iso639_2":"srp",
              "name":"Serbian",
              "nativeName":"српски језик"
           }
        ],
        "translations":{
           "de":null,
           "es":"Kosovo",
           "fr":null,
           "ja":null,
           "it":null,
           "br":"Kosovo",
           "pt":"Kosovo",
           "nl":null,
           "hr":"Kosovo",
           "fa":"کوزوو"
        },
        "flag":"https://restcountries.eu/data/kos.svg",
        "regionalBlocs":[
           {
              "acronym":"CEFTA",
              "name":"Central European Free Trade Agreement",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":null
     },
     {
        "name":"Romania",
        "topLevelDomain":[
           ".ro"
        ],
        "alpha2Code":"RO",
        "alpha3Code":"ROU",
        "callingCodes":[
           "40"
        ],
        "capital":"Bucharest",
        "altSpellings":[
           "RO",
           "Rumania",
           "Roumania",
           "România"
        ],
        "region":"Europe",
        "subregion":"Eastern Europe",
        "population":19861408,
        "latlng":[
           46.0,
           25.0
        ],
        "demonym":"Romanian",
        "id":238391.0,
        "gini":30.0,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "BGR",
           "HUN",
           "MDA",
           "SRB",
           "UKR"
        ],
        "nativeName":"România",
        "numericCode":"642",
        "currencies":[
           {
              "code":"RON",
              "name":"Romanian leu",
              "symbol":"lei"
           }
        ],
        "languages":[
           {
              "iso639_1":"ro",
              "iso639_2":"ron",
              "name":"Romanian",
              "nativeName":"Română"
           }
        ],
        "translations":{
           "de":"Rumänien",
           "es":"Rumania",
           "fr":"Roumanie",
           "ja":"ルーマニア",
           "it":"Romania",
           "br":"Romênia",
           "pt":"Roménia",
           "nl":"Roemenië",
           "hr":"Rumunjska",
           "fa":"رومانی"
        },
        "flag":"https://restcountries.eu/data/rou.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"ROU"
     },
     {
        "name":"Russian Federation",
        "topLevelDomain":[
           ".ru"
        ],
        "alpha2Code":"RU",
        "alpha3Code":"RUS",
        "callingCodes":[
           "7"
        ],
        "capital":"Moscow",
        "altSpellings":[
           "RU",
           "Rossiya",
           "Russian Federation",
           "Российская Федерация",
           "Rossiyskaya Federatsiya"
        ],
        "region":"Europe",
        "subregion":"Eastern Europe",
        "population":146599183,
        "latlng":[
           60.0,
           100.0
        ],
        "demonym":"Russian",
        "id":1.7124442E7,
        "gini":40.1,
        "timezones":[
           "UTC+03:00",
           "UTC+04:00",
           "UTC+06:00",
           "UTC+07:00",
           "UTC+08:00",
           "UTC+09:00",
           "UTC+10:00",
           "UTC+11:00",
           "UTC+12:00"
        ],
        "borders":[
           "AZE",
           "BLR",
           "CHN",
           "EST",
           "FIN",
           "GEO",
           "KAZ",
           "PRK",
           "LVA",
           "LTU",
           "MNG",
           "NOR",
           "POL",
           "UKR"
        ],
        "nativeName":"Россия",
        "numericCode":"643",
        "currencies":[
           {
              "code":"RUB",
              "name":"Russian ruble",
              "symbol":"₽"
           }
        ],
        "languages":[
           {
              "iso639_1":"ru",
              "iso639_2":"rus",
              "name":"Russian",
              "nativeName":"Русский"
           }
        ],
        "translations":{
           "de":"Russland",
           "es":"Rusia",
           "fr":"Russie",
           "ja":"ロシア連邦",
           "it":"Russia",
           "br":"Rússia",
           "pt":"Rússia",
           "nl":"Rusland",
           "hr":"Rusija",
           "fa":"روسیه"
        },
        "flag":"https://restcountries.eu/data/rus.svg",
        "regionalBlocs":[
           {
              "acronym":"EEU",
              "name":"Eurasian Economic Union",
              "otherAcronyms":[
                 "EAEU"
              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"RUS"
     },
     {
        "name":"San Marino",
        "topLevelDomain":[
           ".sm"
        ],
        "alpha2Code":"SM",
        "alpha3Code":"SMR",
        "callingCodes":[
           "378"
        ],
        "capital":"City of San Marino",
        "altSpellings":[
           "SM",
           "Republic of San Marino",
           "Repubblica di San Marino"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":33005,
        "latlng":[
           43.76666666,
           12.41666666
        ],
        "demonym":"Sammarinese",
        "id":61.0,
        "gini":null,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "ITA"
        ],
        "nativeName":"San Marino",
        "numericCode":"674",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"it",
              "iso639_2":"ita",
              "name":"Italian",
              "nativeName":"Italiano"
           }
        ],
        "translations":{
           "de":"San Marino",
           "es":"San Marino",
           "fr":"Saint-Marin",
           "ja":"サンマリノ",
           "it":"San Marino",
           "br":"San Marino",
           "pt":"São Marinho",
           "nl":"San Marino",
           "hr":"San Marino",
           "fa":"سان مارینو"
        },
        "flag":"https://restcountries.eu/data/smr.svg",
        "regionalBlocs":[

        ],
        "cioc":"SMR"
     },
     {
        "name":"Serbia",
        "topLevelDomain":[
           ".rs"
        ],
        "alpha2Code":"RS",
        "alpha3Code":"SRB",
        "callingCodes":[
           "381"
        ],
        "capital":"Belgrade",
        "altSpellings":[
           "RS",
           "Srbija",
           "Republic of Serbia",
           "Република Србија",
           "Republika Srbija"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":7076372,
        "latlng":[
           44.0,
           21.0
        ],
        "demonym":"Serbian",
        "id":88361.0,
        "gini":27.8,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "BIH",
           "BGR",
           "HRV",
           "HUN",
           "KOS",
           "MKD",
           "MNE",
           "ROU"
        ],
        "nativeName":"Србија",
        "numericCode":"688",
        "currencies":[
           {
              "code":"RSD",
              "name":"Serbian dinar",
              "symbol":"дин."
           }
        ],
        "languages":[
           {
              "iso639_1":"sr",
              "iso639_2":"srp",
              "name":"Serbian",
              "nativeName":"српски језик"
           }
        ],
        "translations":{
           "de":"Serbien",
           "es":"Serbia",
           "fr":"Serbie",
           "ja":"セルビア",
           "it":"Serbia",
           "br":"Sérvia",
           "pt":"Sérvia",
           "nl":"Servië",
           "hr":"Srbija",
           "fa":"صربستان"
        },
        "flag":"https://restcountries.eu/data/srb.svg",
        "regionalBlocs":[
           {
              "acronym":"CEFTA",
              "name":"Central European Free Trade Agreement",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"SRB"
     },
     {
        "name":"Slovakia",
        "topLevelDomain":[
           ".sk"
        ],
        "alpha2Code":"SK",
        "alpha3Code":"SVK",
        "callingCodes":[
           "421"
        ],
        "capital":"Bratislava",
        "altSpellings":[
           "SK",
           "Slovak Republic",
           "Slovenská republika"
        ],
        "region":"Europe",
        "subregion":"Eastern Europe",
        "population":5426252,
        "latlng":[
           48.66666666,
           19.5
        ],
        "demonym":"Slovak",
        "id":49037.0,
        "gini":26.0,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "AUT",
           "CZE",
           "HUN",
           "POL",
           "UKR"
        ],
        "nativeName":"Slovensko",
        "numericCode":"703",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"sk",
              "iso639_2":"slk",
              "name":"Slovak",
              "nativeName":"slovenčina"
           }
        ],
        "translations":{
           "de":"Slowakei",
           "es":"República Eslovaca",
           "fr":"Slovaquie",
           "ja":"スロバキア",
           "it":"Slovacchia",
           "br":"Eslováquia",
           "pt":"Eslováquia",
           "nl":"Slowakije",
           "hr":"Slovačka",
           "fa":"اسلواکی"
        },
        "flag":"https://restcountries.eu/data/svk.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"SVK"
     },
     {
        "name":"Slovenia",
        "topLevelDomain":[
           ".si"
        ],
        "alpha2Code":"SI",
        "alpha3Code":"SVN",
        "callingCodes":[
           "386"
        ],
        "capital":"Ljubljana",
        "altSpellings":[
           "SI",
           "Republic of Slovenia",
           "Republika Slovenija"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":2064188,
        "latlng":[
           46.11666666,
           14.81666666
        ],
        "demonym":"Slovene",
        "id":20273.0,
        "gini":31.2,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "AUT",
           "HRV",
           "ITA",
           "HUN"
        ],
        "nativeName":"Slovenija",
        "numericCode":"705",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"sl",
              "iso639_2":"slv",
              "name":"Slovene",
              "nativeName":"slovenski jezik"
           }
        ],
        "translations":{
           "de":"Slowenien",
           "es":"Eslovenia",
           "fr":"Slovénie",
           "ja":"スロベニア",
           "it":"Slovenia",
           "br":"Eslovênia",
           "pt":"Eslovénia",
           "nl":"Slovenië",
           "hr":"Slovenija",
           "fa":"اسلوونی"
        },
        "flag":"https://restcountries.eu/data/svn.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"SLO"
     },
     {
        "name":"Spain",
        "topLevelDomain":[
           ".es"
        ],
        "alpha2Code":"ES",
        "alpha3Code":"ESP",
        "callingCodes":[
           "34"
        ],
        "capital":"Madrid",
        "altSpellings":[
           "ES",
           "Kingdom of Spain",
           "Reino de España"
        ],
        "region":"Europe",
        "subregion":"Southern Europe",
        "population":46438422,
        "latlng":[
           40.0,
           -4.0
        ],
        "demonym":"Spanish",
        "id":505992.0,
        "gini":34.7,
        "timezones":[
           "UTC",
           "UTC+01:00"
        ],
        "borders":[
           "AND",
           "FRA",
           "GIB",
           "PRT",
           "MAR"
        ],
        "nativeName":"España",
        "numericCode":"724",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"es",
              "iso639_2":"spa",
              "name":"Spanish",
              "nativeName":"Español"
           }
        ],
        "translations":{
           "de":"Spanien",
           "es":"España",
           "fr":"Espagne",
           "ja":"スペイン",
           "it":"Spagna",
           "br":"Espanha",
           "pt":"Espanha",
           "nl":"Spanje",
           "hr":"Španjolska",
           "fa":"اسپانیا"
        },
        "flag":"https://restcountries.eu/data/esp.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"ESP"
     },
     {
        "name":"Svalbard and Jan Mayen",
        "topLevelDomain":[
           ".sj"
        ],
        "alpha2Code":"SJ",
        "alpha3Code":"SJM",
        "callingCodes":[
           "4779"
        ],
        "capital":"Longyearbyen",
        "altSpellings":[
           "SJ",
           "Svalbard and Jan Mayen Islands"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":2562,
        "latlng":[
           78.0,
           20.0
        ],
        "demonym":"Norwegian",
        "id":11101,
        "gini":null,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[

        ],
        "nativeName":"Svalbard og Jan Mayen",
        "numericCode":"744",
        "currencies":[
           {
              "code":"NOK",
              "name":"Norwegian krone",
              "symbol":"kr"
           }
        ],
        "languages":[
           {
              "iso639_1":"no",
              "iso639_2":"nor",
              "name":"Norwegian",
              "nativeName":"Norsk"
           }
        ],
        "translations":{
           "de":"Svalbard und Jan Mayen",
           "es":"Islas Svalbard y Jan Mayen",
           "fr":"Svalbard et Jan Mayen",
           "ja":"スヴァールバル諸島およびヤンマイエン島",
           "it":"Svalbard e Jan Mayen",
           "br":"Svalbard",
           "pt":"Svalbard",
           "nl":"Svalbard en Jan Mayen",
           "hr":"Svalbard i Jan Mayen",
           "fa":"سوالبارد و یان ماین"
        },
        "flag":"https://restcountries.eu/data/sjm.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"Sweden",
        "topLevelDomain":[
           ".se"
        ],
        "alpha2Code":"SE",
        "alpha3Code":"SWE",
        "callingCodes":[
           "46"
        ],
        "capital":"Stockholm",
        "altSpellings":[
           "SE",
           "Kingdom of Sweden",
           "Konungariket Sverige"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":9894888,
        "latlng":[
           62.0,
           15.0
        ],
        "demonym":"Swedish",
        "id":450295.0,
        "gini":25.0,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "FIN",
           "NOR"
        ],
        "nativeName":"Sverige",
        "numericCode":"752",
        "currencies":[
           {
              "code":"SEK",
              "name":"Swedish krona",
              "symbol":"kr"
           }
        ],
        "languages":[
           {
              "iso639_1":"sv",
              "iso639_2":"swe",
              "name":"Swedish",
              "nativeName":"svenska"
           }
        ],
        "translations":{
           "de":"Schweden",
           "es":"Suecia",
           "fr":"Suède",
           "ja":"スウェーデン",
           "it":"Svezia",
           "br":"Suécia",
           "pt":"Suécia",
           "nl":"Zweden",
           "hr":"Švedska",
           "fa":"سوئد"
        },
        "flag":"https://restcountries.eu/data/swe.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"SWE"
     },
     {
        "name":"Switzerland",
        "topLevelDomain":[
           ".ch"
        ],
        "alpha2Code":"CH",
        "alpha3Code":"CHE",
        "callingCodes":[
           "41"
        ],
        "capital":"Bern",
        "altSpellings":[
           "CH",
           "Swiss Confederation",
           "Schweiz",
           "Suisse",
           "Svizzera",
           "Svizra"
        ],
        "region":"Europe",
        "subregion":"Western Europe",
        "population":8341600,
        "latlng":[
           47.0,
           8.0
        ],
        "demonym":"Swiss",
        "id":41284.0,
        "gini":33.7,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "AUT",
           "FRA",
           "ITA",
           "LIE",
           "DEU"
        ],
        "nativeName":"Schweiz",
        "numericCode":"756",
        "currencies":[
           {
              "code":"CHF",
              "name":"Swiss franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"de",
              "iso639_2":"deu",
              "name":"German",
              "nativeName":"Deutsch"
           },
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"it",
              "iso639_2":"ita",
              "name":"Italian",
              "nativeName":"Italiano"
           }
        ],
        "translations":{
           "de":"Schweiz",
           "es":"Suiza",
           "fr":"Suisse",
           "ja":"スイス",
           "it":"Svizzera",
           "br":"Suíça",
           "pt":"Suíça",
           "nl":"Zwitserland",
           "hr":"Švicarska",
           "fa":"سوئیس"
        },
        "flag":"https://restcountries.eu/data/che.svg",
        "regionalBlocs":[
           {
              "acronym":"EFTA",
              "name":"European Free Trade Association",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"SUI"
     },
     {
        "name":"Ukraine",
        "topLevelDomain":[
           ".ua"
        ],
        "alpha2Code":"UA",
        "alpha3Code":"UKR",
        "callingCodes":[
           "380"
        ],
        "capital":"Kiev",
        "altSpellings":[
           "UA",
           "Ukrayina"
        ],
        "region":"Europe",
        "subregion":"Eastern Europe",
        "population":42692393,
        "latlng":[
           49.0,
           32.0
        ],
        "demonym":"Ukrainian",
        "id":603700.0,
        "gini":26.4,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "BLR",
           "HUN",
           "MDA",
           "POL",
           "ROU",
           "RUS",
           "SVK"
        ],
        "nativeName":"Україна",
        "numericCode":"804",
        "currencies":[
           {
              "code":"UAH",
              "name":"Ukrainian hryvnia",
              "symbol":"₴"
           }
        ],
        "languages":[
           {
              "iso639_1":"uk",
              "iso639_2":"ukr",
              "name":"Ukrainian",
              "nativeName":"Українська"
           }
        ],
        "translations":{
           "de":"Ukraine",
           "es":"Ucrania",
           "fr":"Ukraine",
           "ja":"ウクライナ",
           "it":"Ucraina",
           "br":"Ucrânia",
           "pt":"Ucrânia",
           "nl":"Oekraïne",
           "hr":"Ukrajina",
           "fa":"وکراین"
        },
        "flag":"https://restcountries.eu/data/ukr.svg",
        "regionalBlocs":[

        ],
        "cioc":"UKR"
     },
     {
        "name":"United Kingdom of Great Britain and Northern Ireland",
        "topLevelDomain":[
           ".uk"
        ],
        "alpha2Code":"GB",
        "alpha3Code":"GBR",
        "callingCodes":[
           "44"
        ],
        "capital":"London",
        "altSpellings":[
           "GB",
           "UK",
           "Great Britain"
        ],
        "region":"Europe",
        "subregion":"Northern Europe",
        "population":65110000,
        "latlng":[
           54.0,
           -2.0
        ],
        "demonym":"British",
        "id":242900.0,
        "gini":34.0,
        "timezones":[
           "UTC-08:00",
           "UTC-05:00",
           "UTC-04:00",
           "UTC-03:00",
           "UTC-02:00",
           "UTC",
           "UTC+01:00",
           "UTC+02:00",
           "UTC+06:00"
        ],
        "borders":[
           "IRL"
        ],
        "nativeName":"United Kingdom",
        "numericCode":"826",
        "currencies":[
           {
              "code":"GBP",
              "name":"British pound",
              "symbol":"£"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Vereinigtes Königreich",
           "es":"Reino Unido",
           "fr":"Royaume-Uni",
           "ja":"イギリス",
           "it":"Regno Unito",
           "br":"Reino Unido",
           "pt":"Reino Unido",
           "nl":"Verenigd Koninkrijk",
           "hr":"Ujedinjeno Kraljevstvo",
           "fa":"بریتانیای کبیر و ایرلند شمالی"
        },
        "flag":"https://restcountries.eu/data/gbr.svg",
        "regionalBlocs":[
           {
              "acronym":"EU",
              "name":"European Union",
              "otherAcronyms":[

              ],
              "otherNames":[

              ]
           }
        ],
        "cioc":"GBR"
     }
    ];

    const africa = [
      {
        "name":"Algeria",
        "topLevelDomain":[
           ".dz"
        ],
        "alpha2Code":"DZ",
        "alpha3Code":"DZA",
        "callingCodes":[
           "213"
        ],
        "capital":"Algiers",
        "altSpellings":[
           "DZ",
           "Dzayer",
           "Algérie"
        ],
        "region":"Africa",
        "subregion":"Northern Africa",
        "population":40400000,
        "latlng":[
           28.0,
           3.0
        ],
        "demonym":"Algerian",
        "id":2381741.0,
        "gini":35.3,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "TUN",
           "LBY",
           "NER",
           "ESH",
           "MRT",
           "MLI",
           "MAR"
        ],
        "nativeName":"الجزائر",
        "numericCode":"012",
        "currencies":[
           {
              "code":"DZD",
              "name":"Algerian dinar",
              "symbol":"د.ج"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Algerien",
           "es":"Argelia",
           "fr":"Algérie",
           "ja":"アルジェリア",
           "it":"Algeria",
           "br":"Argélia",
           "pt":"Argélia",
           "nl":"Algerije",
           "hr":"Alžir",
           "fa":"الجزایر"
        },
        "flag":"https://restcountries.eu/data/dza.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           },
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"ALG"
     },
     {
        "name":"Angola",
        "topLevelDomain":[
           ".ao"
        ],
        "alpha2Code":"AO",
        "alpha3Code":"AGO",
        "callingCodes":[
           "244"
        ],
        "capital":"Luanda",
        "altSpellings":[
           "AO",
           "República de Angola",
           "ʁɛpublika de an'ɡɔla"
        ],
        "region":"Africa",
        "subregion":"Middle Africa",
        "population":25868000,
        "latlng":[
           -12.5,
           18.5
        ],
        "demonym":"Angolan",
        "id":1246700.0,
        "gini":58.6,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "COG",
           "COD",
           "ZMB",
           "NAM"
        ],
        "nativeName":"Angola",
        "numericCode":"024",
        "currencies":[
           {
              "code":"AOA",
              "name":"Angolan kwanza",
              "symbol":"Kz"
           }
        ],
        "languages":[
           {
              "iso639_1":"pt",
              "iso639_2":"por",
              "name":"Portuguese",
              "nativeName":"Português"
           }
        ],
        "translations":{
           "de":"Angola",
           "es":"Angola",
           "fr":"Angola",
           "ja":"アンゴラ",
           "it":"Angola",
           "br":"Angola",
           "pt":"Angola",
           "nl":"Angola",
           "hr":"Angola",
           "fa":"آنگولا"
        },
        "flag":"https://restcountries.eu/data/ago.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"ANG"
     },
     {
        "name":"Benin",
        "topLevelDomain":[
           ".bj"
        ],
        "alpha2Code":"BJ",
        "alpha3Code":"BEN",
        "callingCodes":[
           "229"
        ],
        "capital":"Porto-Novo",
        "altSpellings":[
           "BJ",
           "Republic of Benin",
           "République du Bénin"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":10653654,
        "latlng":[
           9.5,
           2.25
        ],
        "demonym":"Beninese",
        "id":112622.0,
        "gini":38.6,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "BFA",
           "NER",
           "NGA",
           "TGO"
        ],
        "nativeName":"Bénin",
        "numericCode":"204",
        "currencies":[
           {
              "code":"XOF",
              "name":"West African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Benin",
           "es":"Benín",
           "fr":"Bénin",
           "ja":"ベナン",
           "it":"Benin",
           "br":"Benin",
           "pt":"Benim",
           "nl":"Benin",
           "hr":"Benin",
           "fa":"بنین"
        },
        "flag":"https://restcountries.eu/data/ben.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"BEN"
     },
     {
        "name":"Botswana",
        "topLevelDomain":[
           ".bw"
        ],
        "alpha2Code":"BW",
        "alpha3Code":"BWA",
        "callingCodes":[
           "267"
        ],
        "capital":"Gaborone",
        "altSpellings":[
           "BW",
           "Republic of Botswana",
           "Lefatshe la Botswana"
        ],
        "region":"Africa",
        "subregion":"Southern Africa",
        "population":2141206,
        "latlng":[
           -22.0,
           24.0
        ],
        "demonym":"Motswana",
        "id":582000.0,
        "gini":61.0,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "NAM",
           "ZAF",
           "ZMB",
           "ZWE"
        ],
        "nativeName":"Botswana",
        "numericCode":"072",
        "currencies":[
           {
              "code":"BWP",
              "name":"Botswana pula",
              "symbol":"P"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"tn",
              "iso639_2":"tsn",
              "name":"Tswana",
              "nativeName":"Setswana"
           }
        ],
        "translations":{
           "de":"Botswana",
           "es":"Botswana",
           "fr":"Botswana",
           "ja":"ボツワナ",
           "it":"Botswana",
           "br":"Botsuana",
           "pt":"Botsuana",
           "nl":"Botswana",
           "hr":"Bocvana",
           "fa":"بوتسوانا"
        },
        "flag":"https://restcountries.eu/data/bwa.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"BOT"
     },
     {
        "name":"British Indian Ocean Territory",
        "topLevelDomain":[
           ".io"
        ],
        "alpha2Code":"IO",
        "alpha3Code":"IOT",
        "callingCodes":[
           "246"
        ],
        "capital":"Diego Garcia",
        "altSpellings":[
           "IO"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":3000,
        "latlng":[
           -6.0,
           71.5
        ],
        "demonym":"Indian",
        "id":60.0,
        "gini":null,
        "timezones":[
           "UTC+06:00"
        ],
        "borders":[

        ],
        "nativeName":"British Indian Ocean Territory",
        "numericCode":"086",
        "currencies":[
           {
              "code":"USD",
              "name":"United States dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Britisches Territorium im Indischen Ozean",
           "es":"Territorio Británico del Océano Índico",
           "fr":"Territoire britannique de l'océan Indien",
           "ja":"イギリス領インド洋地域",
           "it":"Territorio britannico dell'oceano indiano",
           "br":"Território Britânico do Oceano íÍdico",
           "pt":"Território Britânico do Oceano Índico",
           "nl":"Britse Gebieden in de Indische Oceaan",
           "hr":"Britanski Indijskooceanski teritorij",
           "fa":"قلمرو بریتانیا در اقیانوس هند"
        },
        "flag":"https://restcountries.eu/data/iot.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":""
     },
     {
        "name":"Burkina Faso",
        "topLevelDomain":[
           ".bf"
        ],
        "alpha2Code":"BF",
        "alpha3Code":"BFA",
        "callingCodes":[
           "226"
        ],
        "capital":"Ouagadougou",
        "altSpellings":[
           "BF"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":19034397,
        "latlng":[
           13.0,
           -2.0
        ],
        "demonym":"Burkinabe",
        "id":272967.0,
        "gini":39.8,
        "timezones":[
           "UTC"
        ],
        "borders":[
           "BEN",
           "CIV",
           "GHA",
           "MLI",
           "NER",
           "TGO"
        ],
        "nativeName":"Burkina Faso",
        "numericCode":"854",
        "currencies":[
           {
              "code":"XOF",
              "name":"West African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"ff",
              "iso639_2":"ful",
              "name":"Fula",
              "nativeName":"Fulfulde"
           }
        ],
        "translations":{
           "de":"Burkina Faso",
           "es":"Burkina Faso",
           "fr":"Burkina Faso",
           "ja":"ブルキナファソ",
           "it":"Burkina Faso",
           "br":"Burkina Faso",
           "pt":"Burquina Faso",
           "nl":"Burkina Faso",
           "hr":"Burkina Faso",
           "fa":"بورکینافاسو"
        },
        "flag":"https://restcountries.eu/data/bfa.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"BUR"
     },
     {
        "name":"Burundi",
        "topLevelDomain":[
           ".bi"
        ],
        "alpha2Code":"BI",
        "alpha3Code":"BDI",
        "callingCodes":[
           "257"
        ],
        "capital":"Bujumbura",
        "altSpellings":[
           "BI",
           "Republic of Burundi",
           "Republika y'Uburundi",
           "République du Burundi"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":10114505,
        "latlng":[
           -3.5,
           30.0
        ],
        "demonym":"Burundian",
        "id":27834.0,
        "gini":33.3,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "COD",
           "RWA",
           "TZA"
        ],
        "nativeName":"Burundi",
        "numericCode":"108",
        "currencies":[
           {
              "code":"BIF",
              "name":"Burundian franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"rn",
              "iso639_2":"run",
              "name":"Kirundi",
              "nativeName":"Ikirundi"
           }
        ],
        "translations":{
           "de":"Burundi",
           "es":"Burundi",
           "fr":"Burundi",
           "ja":"ブルンジ",
           "it":"Burundi",
           "br":"Burundi",
           "pt":"Burúndi",
           "nl":"Burundi",
           "hr":"Burundi",
           "fa":"بوروندی"
        },
        "flag":"https://restcountries.eu/data/bdi.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"BDI"
     },
     {
        "name":"Cameroon",
        "topLevelDomain":[
           ".cm"
        ],
        "alpha2Code":"CM",
        "alpha3Code":"CMR",
        "callingCodes":[
           "237"
        ],
        "capital":"Yaoundé",
        "altSpellings":[
           "CM",
           "Republic of Cameroon",
           "République du Cameroun"
        ],
        "region":"Africa",
        "subregion":"Middle Africa",
        "population":22709892,
        "latlng":[
           6.0,
           12.0
        ],
        "demonym":"Cameroonian",
        "id":475442.0,
        "gini":38.9,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "CAF",
           "TCD",
           "COG",
           "GNQ",
           "GAB",
           "NGA"
        ],
        "nativeName":"Cameroon",
        "numericCode":"120",
        "currencies":[
           {
              "code":"XAF",
              "name":"Central African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Kamerun",
           "es":"Camerún",
           "fr":"Cameroun",
           "ja":"カメルーン",
           "it":"Camerun",
           "br":"Camarões",
           "pt":"Camarões",
           "nl":"Kameroen",
           "hr":"Kamerun",
           "fa":"کامرون"
        },
        "flag":"https://restcountries.eu/data/cmr.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"CMR"
     },
     {
        "name":"Cabo Verde",
        "topLevelDomain":[
           ".cv"
        ],
        "alpha2Code":"CV",
        "alpha3Code":"CPV",
        "callingCodes":[
           "238"
        ],
        "capital":"Praia",
        "altSpellings":[
           "CV",
           "Republic of Cabo Verde",
           "República de Cabo Verde"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":531239,
        "latlng":[
           16.0,
           -24.0
        ],
        "demonym":"Cape Verdian",
        "id":4033.0,
        "gini":50.5,
        "timezones":[
           "UTC-01:00"
        ],
        "borders":[

        ],
        "nativeName":"Cabo Verde",
        "numericCode":"132",
        "currencies":[
           {
              "code":"CVE",
              "name":"Cape Verdean escudo",
              "symbol":"Esc"
           }
        ],
        "languages":[
           {
              "iso639_1":"pt",
              "iso639_2":"por",
              "name":"Portuguese",
              "nativeName":"Português"
           }
        ],
        "translations":{
           "de":"Kap Verde",
           "es":"Cabo Verde",
           "fr":"Cap Vert",
           "ja":"カーボベルデ",
           "it":"Capo Verde",
           "br":"Cabo Verde",
           "pt":"Cabo Verde",
           "nl":"Kaapverdië",
           "hr":"Zelenortska Republika",
           "fa":"کیپ ورد"
        },
        "flag":"https://restcountries.eu/data/cpv.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"CPV"
     },
     {
        "name":"Central African Republic",
        "topLevelDomain":[
           ".cf"
        ],
        "alpha2Code":"CF",
        "alpha3Code":"CAF",
        "callingCodes":[
           "236"
        ],
        "capital":"Bangui",
        "altSpellings":[
           "CF",
           "Central African Republic",
           "République centrafricaine"
        ],
        "region":"Africa",
        "subregion":"Middle Africa",
        "population":4998000,
        "latlng":[
           7.0,
           21.0
        ],
        "demonym":"Central African",
        "id":622984.0,
        "gini":56.3,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "CMR",
           "TCD",
           "COD",
           "COG",
           "SSD",
           "SDN"
        ],
        "nativeName":"Ködörösêse tî Bêafrîka",
        "numericCode":"140",
        "currencies":[
           {
              "code":"XAF",
              "name":"Central African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"sg",
              "iso639_2":"sag",
              "name":"Sango",
              "nativeName":"yângâ tî sängö"
           }
        ],
        "translations":{
           "de":"Zentralafrikanische Republik",
           "es":"República Centroafricana",
           "fr":"République centrafricaine",
           "ja":"中央アフリカ共和国",
           "it":"Repubblica Centrafricana",
           "br":"República Centro-Africana",
           "pt":"República Centro-Africana",
           "nl":"Centraal-Afrikaanse Republiek",
           "hr":"Srednjoafrička Republika",
           "fa":"جمهوری آفریقای مرکزی"
        },
        "flag":"https://restcountries.eu/data/caf.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"CAF"
     },
     {
        "name":"Chad",
        "topLevelDomain":[
           ".td"
        ],
        "alpha2Code":"TD",
        "alpha3Code":"TCD",
        "callingCodes":[
           "235"
        ],
        "capital":"N'Djamena",
        "altSpellings":[
           "TD",
           "Tchad",
           "Republic of Chad",
           "République du Tchad"
        ],
        "region":"Africa",
        "subregion":"Middle Africa",
        "population":14497000,
        "latlng":[
           15.0,
           19.0
        ],
        "demonym":"Chadian",
        "id":1284000.0,
        "gini":39.8,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "CMR",
           "CAF",
           "LBY",
           "NER",
           "NGA",
           "SSD"
        ],
        "nativeName":"Tchad",
        "numericCode":"148",
        "currencies":[
           {
              "code":"XAF",
              "name":"Central African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Tschad",
           "es":"Chad",
           "fr":"Tchad",
           "ja":"チャド",
           "it":"Ciad",
           "br":"Chade",
           "pt":"Chade",
           "nl":"Tsjaad",
           "hr":"Čad",
           "fa":"چاد"
        },
        "flag":"https://restcountries.eu/data/tcd.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"CHA"
     },
     {
        "name":"Comoros",
        "topLevelDomain":[
           ".km"
        ],
        "alpha2Code":"KM",
        "alpha3Code":"COM",
        "callingCodes":[
           "269"
        ],
        "capital":"Moroni",
        "altSpellings":[
           "KM",
           "Union of the Comoros",
           "Union des Comores",
           "Udzima wa Komori",
           "al-Ittiḥād al-Qumurī"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":806153,
        "latlng":[
           -12.16666666,
           44.25
        ],
        "demonym":"Comoran",
        "id":1862.0,
        "gini":64.3,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[

        ],
        "nativeName":"Komori",
        "numericCode":"174",
        "currencies":[
           {
              "code":"KMF",
              "name":"Comorian franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           },
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Union der Komoren",
           "es":"Comoras",
           "fr":"Comores",
           "ja":"コモロ",
           "it":"Comore",
           "br":"Comores",
           "pt":"Comores",
           "nl":"Comoren",
           "hr":"Komori",
           "fa":"کومور"
        },
        "flag":"https://restcountries.eu/data/com.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           },
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"COM"
     },
     {
        "name":"Congo",
        "topLevelDomain":[
           ".cg"
        ],
        "alpha2Code":"CG",
        "alpha3Code":"COG",
        "callingCodes":[
           "242"
        ],
        "capital":"Brazzaville",
        "altSpellings":[
           "CG",
           "Congo-Brazzaville"
        ],
        "region":"Africa",
        "subregion":"Middle Africa",
        "population":4741000,
        "latlng":[
           -1.0,
           15.0
        ],
        "demonym":"Congolese",
        "id":342000.0,
        "gini":47.3,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "AGO",
           "CMR",
           "CAF",
           "COD",
           "GAB"
        ],
        "nativeName":"République du Congo",
        "numericCode":"178",
        "currencies":[
           {
              "code":"XAF",
              "name":"Central African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"ln",
              "iso639_2":"lin",
              "name":"Lingala",
              "nativeName":"Lingála"
           }
        ],
        "translations":{
           "de":"Kongo",
           "es":"Congo",
           "fr":"Congo",
           "ja":"コンゴ共和国",
           "it":"Congo",
           "br":"Congo",
           "pt":"Congo",
           "nl":"Congo [Republiek]",
           "hr":"Kongo",
           "fa":"کنگو"
        },
        "flag":"https://restcountries.eu/data/cog.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"CGO"
     },
     {
        "name":"Congo (Democratic Republic of the)",
        "topLevelDomain":[
           ".cd"
        ],
        "alpha2Code":"CD",
        "alpha3Code":"COD",
        "callingCodes":[
           "243"
        ],
        "capital":"Kinshasa",
        "altSpellings":[
           "CD",
           "DR Congo",
           "Congo-Kinshasa",
           "DRC"
        ],
        "region":"Africa",
        "subregion":"Middle Africa",
        "population":85026000,
        "latlng":[
           0.0,
           25.0
        ],
        "demonym":"Congolese",
        "id":2344858.0,
        "gini":null,
        "timezones":[
           "UTC+01:00",
           "UTC+02:00"
        ],
        "borders":[
           "AGO",
           "BDI",
           "CAF",
           "COG",
           "RWA",
           "SSD",
           "TZA",
           "UGA",
           "ZMB"
        ],
        "nativeName":"République démocratique du Congo",
        "numericCode":"180",
        "currencies":[
           {
              "code":"CDF",
              "name":"Congolese franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"ln",
              "iso639_2":"lin",
              "name":"Lingala",
              "nativeName":"Lingála"
           },
           {
              "iso639_1":"kg",
              "iso639_2":"kon",
              "name":"Kongo",
              "nativeName":"Kikongo"
           },
           {
              "iso639_1":"sw",
              "iso639_2":"swa",
              "name":"Swahili",
              "nativeName":"Kiswahili"
           },
           {
              "iso639_1":"lu",
              "iso639_2":"lub",
              "name":"Luba-Katanga",
              "nativeName":"Tshiluba"
           }
        ],
        "translations":{
           "de":"Kongo (Dem. Rep.)",
           "es":"Congo (Rep. Dem.)",
           "fr":"Congo (Rép. dém.)",
           "ja":"コンゴ民主共和国",
           "it":"Congo (Rep. Dem.)",
           "br":"RD Congo",
           "pt":"RD Congo",
           "nl":"Congo [DRC]",
           "hr":"Kongo, Demokratska Republika",
           "fa":"جمهوری کنگو"
        },
        "flag":"https://restcountries.eu/data/cod.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"COD"
     },
     {
        "name":"Djibouti",
        "topLevelDomain":[
           ".dj"
        ],
        "alpha2Code":"DJ",
        "alpha3Code":"DJI",
        "callingCodes":[
           "253"
        ],
        "capital":"Djibouti",
        "altSpellings":[
           "DJ",
           "Jabuuti",
           "Gabuuti",
           "Republic of Djibouti",
           "République de Djibouti",
           "Gabuutih Ummuuno",
           "Jamhuuriyadda Jabuuti"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":900000,
        "latlng":[
           11.5,
           43.0
        ],
        "demonym":"Djibouti",
        "id":23200.0,
        "gini":40.0,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "ERI",
           "ETH",
           "SOM"
        ],
        "nativeName":"Djibouti",
        "numericCode":"262",
        "currencies":[
           {
              "code":"DJF",
              "name":"Djiboutian franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Dschibuti",
           "es":"Yibuti",
           "fr":"Djibouti",
           "ja":"ジブチ",
           "it":"Gibuti",
           "br":"Djibuti",
           "pt":"Djibuti",
           "nl":"Djibouti",
           "hr":"Džibuti",
           "fa":"جیبوتی"
        },
        "flag":"https://restcountries.eu/data/dji.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           },
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"DJI"
     },
     {
        "name":"Egypt",
        "topLevelDomain":[
           ".eg"
        ],
        "alpha2Code":"EG",
        "alpha3Code":"EGY",
        "callingCodes":[
           "20"
        ],
        "capital":"Cairo",
        "altSpellings":[
           "EG",
           "Arab Republic of Egypt"
        ],
        "region":"Africa",
        "subregion":"Northern Africa",
        "population":91290000,
        "latlng":[
           27.0,
           30.0
        ],
        "demonym":"Egyptian",
        "id":1002450.0,
        "gini":30.8,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "ISR",
           "LBY",
           "SDN"
        ],
        "nativeName":"مصر‎",
        "numericCode":"818",
        "currencies":[
           {
              "code":"EGP",
              "name":"Egyptian pound",
              "symbol":"£"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Ägypten",
           "es":"Egipto",
           "fr":"Égypte",
           "ja":"エジプト",
           "it":"Egitto",
           "br":"Egito",
           "pt":"Egipto",
           "nl":"Egypte",
           "hr":"Egipat",
           "fa":"مصر"
        },
        "flag":"https://restcountries.eu/data/egy.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           },
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"EGY"
     },
     {
        "name":"Equatorial Guinea",
        "topLevelDomain":[
           ".gq"
        ],
        "alpha2Code":"GQ",
        "alpha3Code":"GNQ",
        "callingCodes":[
           "240"
        ],
        "capital":"Malabo",
        "altSpellings":[
           "GQ",
           "Republic of Equatorial Guinea",
           "República de Guinea Ecuatorial",
           "République de Guinée équatoriale",
           "República da Guiné Equatorial"
        ],
        "region":"Africa",
        "subregion":"Middle Africa",
        "population":1222442,
        "latlng":[
           2.0,
           10.0
        ],
        "demonym":"Equatorial Guinean",
        "id":28051.0,
        "gini":null,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "CMR",
           "GAB"
        ],
        "nativeName":"Guinea Ecuatorial",
        "numericCode":"226",
        "currencies":[
           {
              "code":"XAF",
              "name":"Central African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"es",
              "iso639_2":"spa",
              "name":"Spanish",
              "nativeName":"Español"
           },
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Äquatorial-Guinea",
           "es":"Guinea Ecuatorial",
           "fr":"Guinée-Équatoriale",
           "ja":"赤道ギニア",
           "it":"Guinea Equatoriale",
           "br":"Guiné Equatorial",
           "pt":"Guiné Equatorial",
           "nl":"Equatoriaal-Guinea",
           "hr":"Ekvatorijalna Gvineja",
           "fa":"گینه استوایی"
        },
        "flag":"https://restcountries.eu/data/gnq.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"GEQ"
     },
     {
        "name":"Eritrea",
        "topLevelDomain":[
           ".er"
        ],
        "alpha2Code":"ER",
        "alpha3Code":"ERI",
        "callingCodes":[
           "291"
        ],
        "capital":"Asmara",
        "altSpellings":[
           "ER",
           "State of Eritrea",
           "ሃገረ ኤርትራ",
           "Dawlat Iritriyá",
           "ʾErtrā",
           "Iritriyā",
           ""
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":5352000,
        "latlng":[
           15.0,
           39.0
        ],
        "demonym":"Eritrean",
        "id":117600.0,
        "gini":null,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "DJI",
           "ETH",
           "SDN"
        ],
        "nativeName":"ኤርትራ",
        "numericCode":"232",
        "currencies":[
           {
              "code":"ERN",
              "name":"Eritrean nakfa",
              "symbol":"Nfk"
           }
        ],
        "languages":[
           {
              "iso639_1":"ti",
              "iso639_2":"tir",
              "name":"Tigrinya",
              "nativeName":"ትግርኛ"
           },
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           },
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Eritrea",
           "es":"Eritrea",
           "fr":"Érythrée",
           "ja":"エリトリア",
           "it":"Eritrea",
           "br":"Eritreia",
           "pt":"Eritreia",
           "nl":"Eritrea",
           "hr":"Eritreja",
           "fa":"اریتره"
        },
        "flag":"https://restcountries.eu/data/eri.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"ERI"
     },
     {
        "name":"Ethiopia",
        "topLevelDomain":[
           ".et"
        ],
        "alpha2Code":"ET",
        "alpha3Code":"ETH",
        "callingCodes":[
           "251"
        ],
        "capital":"Addis Ababa",
        "altSpellings":[
           "ET",
           "ʾĪtyōṗṗyā",
           "Federal Democratic Republic of Ethiopia",
           "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":92206005,
        "latlng":[
           8.0,
           38.0
        ],
        "demonym":"Ethiopian",
        "id":1104300.0,
        "gini":29.8,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "DJI",
           "ERI",
           "KEN",
           "SOM",
           "SSD",
           "SDN"
        ],
        "nativeName":"ኢትዮጵያ",
        "numericCode":"231",
        "currencies":[
           {
              "code":"ETB",
              "name":"Ethiopian birr",
              "symbol":"Br"
           }
        ],
        "languages":[
           {
              "iso639_1":"am",
              "iso639_2":"amh",
              "name":"Amharic",
              "nativeName":"አማርኛ"
           }
        ],
        "translations":{
           "de":"Äthiopien",
           "es":"Etiopía",
           "fr":"Éthiopie",
           "ja":"エチオピア",
           "it":"Etiopia",
           "br":"Etiópia",
           "pt":"Etiópia",
           "nl":"Ethiopië",
           "hr":"Etiopija",
           "fa":"اتیوپی"
        },
        "flag":"https://restcountries.eu/data/eth.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"ETH"
     },
     {
        "name":"French Southern Territories",
        "topLevelDomain":[
           ".tf"
        ],
        "alpha2Code":"TF",
        "alpha3Code":"ATF",
        "callingCodes":[
           ""
        ],
        "capital":"Port-aux-Français",
        "altSpellings":[
           "TF"
        ],
        "region":"Africa",
        "subregion":"Southern Africa",
        "population":140,
        "latlng":[
           -49.25,
           69.167
        ],
        "demonym":"French",
        "id":7747.0,
        "gini":null,
        "timezones":[
           "UTC+05:00"
        ],
        "borders":[

        ],
        "nativeName":"Territoire des Terres australes et antarctiques françaises",
        "numericCode":"260",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Französische Süd- und Antarktisgebiete",
           "es":"Tierras Australes y Antárticas Francesas",
           "fr":"Terres australes et antarctiques françaises",
           "ja":"フランス領南方・南極地域",
           "it":"Territori Francesi del Sud",
           "br":"Terras Austrais e Antárticas Francesas",
           "pt":"Terras Austrais e Antárticas Francesas",
           "nl":"Franse Gebieden in de zuidelijke Indische Oceaan",
           "hr":"Francuski južni i antarktički teritoriji",
           "fa":"سرزمین‌های جنوبی و جنوبگانی فرانسه"
        },
        "flag":"https://restcountries.eu/data/atf.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":""
     },
     {
        "name":"Gabon",
        "topLevelDomain":[
           ".ga"
        ],
        "alpha2Code":"GA",
        "alpha3Code":"GAB",
        "callingCodes":[
           "241"
        ],
        "capital":"Libreville",
        "altSpellings":[
           "GA",
           "Gabonese Republic",
           "République Gabonaise"
        ],
        "region":"Africa",
        "subregion":"Middle Africa",
        "population":1802278,
        "latlng":[
           -1.0,
           11.75
        ],
        "demonym":"Gabonese",
        "id":267668.0,
        "gini":41.5,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "CMR",
           "COG",
           "GNQ"
        ],
        "nativeName":"Gabon",
        "numericCode":"266",
        "currencies":[
           {
              "code":"XAF",
              "name":"Central African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Gabun",
           "es":"Gabón",
           "fr":"Gabon",
           "ja":"ガボン",
           "it":"Gabon",
           "br":"Gabão",
           "pt":"Gabão",
           "nl":"Gabon",
           "hr":"Gabon",
           "fa":"گابن"
        },
        "flag":"https://restcountries.eu/data/gab.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"GAB"
     },
     {
        "name":"Gambia",
        "topLevelDomain":[
           ".gm"
        ],
        "alpha2Code":"GM",
        "alpha3Code":"GMB",
        "callingCodes":[
           "220"
        ],
        "capital":"Banjul",
        "altSpellings":[
           "GM",
           "Republic of the Gambia"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":1882450,
        "latlng":[
           13.46666666,
           -16.56666666
        ],
        "demonym":"Gambian",
        "id":11295.0,
        "gini":null,
        "timezones":[
           "UTC+00:00"
        ],
        "borders":[
           "SEN"
        ],
        "nativeName":"Gambia",
        "numericCode":"270",
        "currencies":[
           {
              "code":"GMD",
              "name":"Gambian dalasi",
              "symbol":"D"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Gambia",
           "es":"Gambia",
           "fr":"Gambie",
           "ja":"ガンビア",
           "it":"Gambia",
           "br":"Gâmbia",
           "pt":"Gâmbia",
           "nl":"Gambia",
           "hr":"Gambija",
           "fa":"گامبیا"
        },
        "flag":"https://restcountries.eu/data/gmb.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"GAM"
     },
     {
        "name":"Ghana",
        "topLevelDomain":[
           ".gh"
        ],
        "alpha2Code":"GH",
        "alpha3Code":"GHA",
        "callingCodes":[
           "233"
        ],
        "capital":"Accra",
        "altSpellings":[
           "GH"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":27670174,
        "latlng":[
           8.0,
           -2.0
        ],
        "demonym":"Ghanaian",
        "id":238533.0,
        "gini":42.8,
        "timezones":[
           "UTC"
        ],
        "borders":[
           "BFA",
           "CIV",
           "TGO"
        ],
        "nativeName":"Ghana",
        "numericCode":"288",
        "currencies":[
           {
              "code":"GHS",
              "name":"Ghanaian cedi",
              "symbol":"₵"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Ghana",
           "es":"Ghana",
           "fr":"Ghana",
           "ja":"ガーナ",
           "it":"Ghana",
           "br":"Gana",
           "pt":"Gana",
           "nl":"Ghana",
           "hr":"Gana",
           "fa":"غنا"
        },
        "flag":"https://restcountries.eu/data/gha.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"GHA"
     },
     {
        "name":"Guinea",
        "topLevelDomain":[
           ".gn"
        ],
        "alpha2Code":"GN",
        "alpha3Code":"GIN",
        "callingCodes":[
           "224"
        ],
        "capital":"Conakry",
        "altSpellings":[
           "GN",
           "Republic of Guinea",
           "République de Guinée"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":12947000,
        "latlng":[
           11.0,
           -10.0
        ],
        "demonym":"Guinean",
        "id":245857.0,
        "gini":39.4,
        "timezones":[
           "UTC"
        ],
        "borders":[
           "CIV",
           "GNB",
           "LBR",
           "MLI",
           "SEN",
           "SLE"
        ],
        "nativeName":"Guinée",
        "numericCode":"324",
        "currencies":[
           {
              "code":"GNF",
              "name":"Guinean franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"ff",
              "iso639_2":"ful",
              "name":"Fula",
              "nativeName":"Fulfulde"
           }
        ],
        "translations":{
           "de":"Guinea",
           "es":"Guinea",
           "fr":"Guinée",
           "ja":"ギニア",
           "it":"Guinea",
           "br":"Guiné",
           "pt":"Guiné",
           "nl":"Guinee",
           "hr":"Gvineja",
           "fa":"گینه"
        },
        "flag":"https://restcountries.eu/data/gin.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"GUI"
     },
     {
        "name":"Guinea-Bissau",
        "topLevelDomain":[
           ".gw"
        ],
        "alpha2Code":"GW",
        "alpha3Code":"GNB",
        "callingCodes":[
           "245"
        ],
        "capital":"Bissau",
        "altSpellings":[
           "GW",
           "Republic of Guinea-Bissau",
           "República da Guiné-Bissau"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":1547777,
        "latlng":[
           12.0,
           -15.0
        ],
        "demonym":"Guinea-Bissauan",
        "id":36125.0,
        "gini":35.5,
        "timezones":[
           "UTC"
        ],
        "borders":[
           "GIN",
           "SEN"
        ],
        "nativeName":"Guiné-Bissau",
        "numericCode":"624",
        "currencies":[
           {
              "code":"XOF",
              "name":"West African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"pt",
              "iso639_2":"por",
              "name":"Portuguese",
              "nativeName":"Português"
           }
        ],
        "translations":{
           "de":"Guinea-Bissau",
           "es":"Guinea-Bisáu",
           "fr":"Guinée-Bissau",
           "ja":"ギニアビサウ",
           "it":"Guinea-Bissau",
           "br":"Guiné-Bissau",
           "pt":"Guiné-Bissau",
           "nl":"Guinee-Bissau",
           "hr":"Gvineja Bisau",
           "fa":"گینه بیسائو"
        },
        "flag":"https://restcountries.eu/data/gnb.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"GBS"
     },
     {
        "name":"Côte d'Ivoire",
        "topLevelDomain":[
           ".ci"
        ],
        "alpha2Code":"CI",
        "alpha3Code":"CIV",
        "callingCodes":[
           "225"
        ],
        "capital":"Yamoussoukro",
        "altSpellings":[
           "CI",
           "Ivory Coast",
           "Republic of Côte d'Ivoire",
           "République de Côte d'Ivoire"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":22671331,
        "latlng":[
           8.0,
           -5.0
        ],
        "demonym":"Ivorian",
        "id":322463.0,
        "gini":41.5,
        "timezones":[
           "UTC"
        ],
        "borders":[
           "BFA",
           "GHA",
           "GIN",
           "LBR",
           "MLI"
        ],
        "nativeName":"Côte d'Ivoire",
        "numericCode":"384",
        "currencies":[
           {
              "code":"XOF",
              "name":"West African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Elfenbeinküste",
           "es":"Costa de Marfil",
           "fr":"Côte d'Ivoire",
           "ja":"コートジボワール",
           "it":"Costa D'Avorio",
           "br":"Costa do Marfim",
           "pt":"Costa do Marfim",
           "nl":"Ivoorkust",
           "hr":"Obala Bjelokosti",
           "fa":"ساحل عاج"
        },
        "flag":"https://restcountries.eu/data/civ.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"CIV"
     },
     {
        "name":"Kenya",
        "topLevelDomain":[
           ".ke"
        ],
        "alpha2Code":"KE",
        "alpha3Code":"KEN",
        "callingCodes":[
           "254"
        ],
        "capital":"Nairobi",
        "altSpellings":[
           "KE",
           "Republic of Kenya",
           "Jamhuri ya Kenya"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":47251000,
        "latlng":[
           1.0,
           38.0
        ],
        "demonym":"Kenyan",
        "id":580367.0,
        "gini":47.7,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "ETH",
           "SOM",
           "SSD",
           "TZA",
           "UGA"
        ],
        "nativeName":"Kenya",
        "numericCode":"404",
        "currencies":[
           {
              "code":"KES",
              "name":"Kenyan shilling",
              "symbol":"Sh"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"sw",
              "iso639_2":"swa",
              "name":"Swahili",
              "nativeName":"Kiswahili"
           }
        ],
        "translations":{
           "de":"Kenia",
           "es":"Kenia",
           "fr":"Kenya",
           "ja":"ケニア",
           "it":"Kenya",
           "br":"Quênia",
           "pt":"Quénia",
           "nl":"Kenia",
           "hr":"Kenija",
           "fa":"کنیا"
        },
        "flag":"https://restcountries.eu/data/ken.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"KEN"
     },
     {
        "name":"Lesotho",
        "topLevelDomain":[
           ".ls"
        ],
        "alpha2Code":"LS",
        "alpha3Code":"LSO",
        "callingCodes":[
           "266"
        ],
        "capital":"Maseru",
        "altSpellings":[
           "LS",
           "Kingdom of Lesotho",
           "Muso oa Lesotho"
        ],
        "region":"Africa",
        "subregion":"Southern Africa",
        "population":1894194,
        "latlng":[
           -29.5,
           28.5
        ],
        "demonym":"Mosotho",
        "id":30355.0,
        "gini":52.5,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "ZAF"
        ],
        "nativeName":"Lesotho",
        "numericCode":"426",
        "currencies":[
           {
              "code":"LSL",
              "name":"Lesotho loti",
              "symbol":"L"
           },
           {
              "code":"ZAR",
              "name":"South African rand",
              "symbol":"R"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"st",
              "iso639_2":"sot",
              "name":"Southern Sotho",
              "nativeName":"Sesotho"
           }
        ],
        "translations":{
           "de":"Lesotho",
           "es":"Lesotho",
           "fr":"Lesotho",
           "ja":"レソト",
           "it":"Lesotho",
           "br":"Lesoto",
           "pt":"Lesoto",
           "nl":"Lesotho",
           "hr":"Lesoto",
           "fa":"لسوتو"
        },
        "flag":"https://restcountries.eu/data/lso.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"LES"
     },
     {
        "name":"Liberia",
        "topLevelDomain":[
           ".lr"
        ],
        "alpha2Code":"LR",
        "alpha3Code":"LBR",
        "callingCodes":[
           "231"
        ],
        "capital":"Monrovia",
        "altSpellings":[
           "LR",
           "Republic of Liberia"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":4615000,
        "latlng":[
           6.5,
           -9.5
        ],
        "demonym":"Liberian",
        "id":111369.0,
        "gini":38.2,
        "timezones":[
           "UTC"
        ],
        "borders":[
           "GIN",
           "CIV",
           "SLE"
        ],
        "nativeName":"Liberia",
        "numericCode":"430",
        "currencies":[
           {
              "code":"LRD",
              "name":"Liberian dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Liberia",
           "es":"Liberia",
           "fr":"Liberia",
           "ja":"リベリア",
           "it":"Liberia",
           "br":"Libéria",
           "pt":"Libéria",
           "nl":"Liberia",
           "hr":"Liberija",
           "fa":"لیبریا"
        },
        "flag":"https://restcountries.eu/data/lbr.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"LBR"
     },
     {
        "name":"Libya",
        "topLevelDomain":[
           ".ly"
        ],
        "alpha2Code":"LY",
        "alpha3Code":"LBY",
        "callingCodes":[
           "218"
        ],
        "capital":"Tripoli",
        "altSpellings":[
           "LY",
           "State of Libya",
           "Dawlat Libya"
        ],
        "region":"Africa",
        "subregion":"Northern Africa",
        "population":6385000,
        "latlng":[
           25.0,
           17.0
        ],
        "demonym":"Libyan",
        "id":1759540.0,
        "gini":null,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "DZA",
           "TCD",
           "EGY",
           "NER",
           "SDN",
           "TUN"
        ],
        "nativeName":"‏ليبيا",
        "numericCode":"434",
        "currencies":[
           {
              "code":"LYD",
              "name":"Libyan dinar",
              "symbol":"ل.د"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Libyen",
           "es":"Libia",
           "fr":"Libye",
           "ja":"リビア",
           "it":"Libia",
           "br":"Líbia",
           "pt":"Líbia",
           "nl":"Libië",
           "hr":"Libija",
           "fa":"لیبی"
        },
        "flag":"https://restcountries.eu/data/lby.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           },
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"LBA"
     },
     {
        "name":"Madagascar",
        "topLevelDomain":[
           ".mg"
        ],
        "alpha2Code":"MG",
        "alpha3Code":"MDG",
        "callingCodes":[
           "261"
        ],
        "capital":"Antananarivo",
        "altSpellings":[
           "MG",
           "Republic of Madagascar",
           "Repoblikan'i Madagasikara",
           "République de Madagascar"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":22434363,
        "latlng":[
           -20.0,
           47.0
        ],
        "demonym":"Malagasy",
        "id":587041.0,
        "gini":44.1,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[

        ],
        "nativeName":"Madagasikara",
        "numericCode":"450",
        "currencies":[
           {
              "code":"MGA",
              "name":"Malagasy ariary",
              "symbol":"Ar"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"mg",
              "iso639_2":"mlg",
              "name":"Malagasy",
              "nativeName":"fiteny malagasy"
           }
        ],
        "translations":{
           "de":"Madagaskar",
           "es":"Madagascar",
           "fr":"Madagascar",
           "ja":"マダガスカル",
           "it":"Madagascar",
           "br":"Madagascar",
           "pt":"Madagáscar",
           "nl":"Madagaskar",
           "hr":"Madagaskar",
           "fa":"ماداگاسکار"
        },
        "flag":"https://restcountries.eu/data/mdg.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"MAD"
     },
     {
        "name":"Malawi",
        "topLevelDomain":[
           ".mw"
        ],
        "alpha2Code":"MW",
        "alpha3Code":"MWI",
        "callingCodes":[
           "265"
        ],
        "capital":"Lilongwe",
        "altSpellings":[
           "MW",
           "Republic of Malawi"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":16832910,
        "latlng":[
           -13.5,
           34.0
        ],
        "demonym":"Malawian",
        "id":118484.0,
        "gini":39.0,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "MOZ",
           "TZA",
           "ZMB"
        ],
        "nativeName":"Malawi",
        "numericCode":"454",
        "currencies":[
           {
              "code":"MWK",
              "name":"Malawian kwacha",
              "symbol":"MK"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"ny",
              "iso639_2":"nya",
              "name":"Chichewa",
              "nativeName":"chiCheŵa"
           }
        ],
        "translations":{
           "de":"Malawi",
           "es":"Malawi",
           "fr":"Malawi",
           "ja":"マラウイ",
           "it":"Malawi",
           "br":"Malawi",
           "pt":"Malávi",
           "nl":"Malawi",
           "hr":"Malavi",
           "fa":"مالاوی"
        },
        "flag":"https://restcountries.eu/data/mwi.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"MAW"
     },
     {
        "name":"Mali",
        "topLevelDomain":[
           ".ml"
        ],
        "alpha2Code":"ML",
        "alpha3Code":"MLI",
        "callingCodes":[
           "223"
        ],
        "capital":"Bamako",
        "altSpellings":[
           "ML",
           "Republic of Mali",
           "République du Mali"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":18135000,
        "latlng":[
           17.0,
           -4.0
        ],
        "demonym":"Malian",
        "id":1240192.0,
        "gini":33.0,
        "timezones":[
           "UTC"
        ],
        "borders":[
           "DZA",
           "BFA",
           "GIN",
           "CIV",
           "MRT",
           "NER",
           "SEN"
        ],
        "nativeName":"Mali",
        "numericCode":"466",
        "currencies":[
           {
              "code":"XOF",
              "name":"West African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Mali",
           "es":"Mali",
           "fr":"Mali",
           "ja":"マリ",
           "it":"Mali",
           "br":"Mali",
           "pt":"Mali",
           "nl":"Mali",
           "hr":"Mali",
           "fa":"مالی"
        },
        "flag":"https://restcountries.eu/data/mli.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"MLI"
     },
     {
        "name":"Mauritania",
        "topLevelDomain":[
           ".mr"
        ],
        "alpha2Code":"MR",
        "alpha3Code":"MRT",
        "callingCodes":[
           "222"
        ],
        "capital":"Nouakchott",
        "altSpellings":[
           "MR",
           "Islamic Republic of Mauritania",
           "al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":3718678,
        "latlng":[
           20.0,
           -12.0
        ],
        "demonym":"Mauritanian",
        "id":1030700.0,
        "gini":40.5,
        "timezones":[
           "UTC"
        ],
        "borders":[
           "DZA",
           "MLI",
           "SEN",
           "ESH"
        ],
        "nativeName":"موريتانيا",
        "numericCode":"478",
        "currencies":[
           {
              "code":"MRO",
              "name":"Mauritanian ouguiya",
              "symbol":"UM"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Mauretanien",
           "es":"Mauritania",
           "fr":"Mauritanie",
           "ja":"モーリタニア",
           "it":"Mauritania",
           "br":"Mauritânia",
           "pt":"Mauritânia",
           "nl":"Mauritanië",
           "hr":"Mauritanija",
           "fa":"موریتانی"
        },
        "flag":"https://restcountries.eu/data/mrt.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           },
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"MTN"
     },
     {
        "name":"Mauritius",
        "topLevelDomain":[
           ".mu"
        ],
        "alpha2Code":"MU",
        "alpha3Code":"MUS",
        "callingCodes":[
           "230"
        ],
        "capital":"Port Louis",
        "altSpellings":[
           "MU",
           "Republic of Mauritius",
           "République de Maurice"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":1262879,
        "latlng":[
           -20.28333333,
           57.55
        ],
        "demonym":"Mauritian",
        "id":2040.0,
        "gini":null,
        "timezones":[
           "UTC+04:00"
        ],
        "borders":[

        ],
        "nativeName":"Maurice",
        "numericCode":"480",
        "currencies":[
           {
              "code":"MUR",
              "name":"Mauritian rupee",
              "symbol":"₨"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Mauritius",
           "es":"Mauricio",
           "fr":"Île Maurice",
           "ja":"モーリシャス",
           "it":"Mauritius",
           "br":"Maurício",
           "pt":"Maurícia",
           "nl":"Mauritius",
           "hr":"Mauricijus",
           "fa":"موریس"
        },
        "flag":"https://restcountries.eu/data/mus.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"MRI"
     },
     {
        "name":"Mayotte",
        "topLevelDomain":[
           ".yt"
        ],
        "alpha2Code":"YT",
        "alpha3Code":"MYT",
        "callingCodes":[
           "262"
        ],
        "capital":"Mamoudzou",
        "altSpellings":[
           "YT",
           "Department of Mayotte",
           "Département de Mayotte"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":226915,
        "latlng":[
           -12.83333333,
           45.16666666
        ],
        "demonym":"French",
        "id":null,
        "gini":null,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[

        ],
        "nativeName":"Mayotte",
        "numericCode":"175",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Mayotte",
           "es":"Mayotte",
           "fr":"Mayotte",
           "ja":"マヨット",
           "it":"Mayotte",
           "br":"Mayotte",
           "pt":"Mayotte",
           "nl":"Mayotte",
           "hr":"Mayotte",
           "fa":"مایوت"
        },
        "flag":"https://restcountries.eu/data/myt.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":""
     },
     {
        "name":"Morocco",
        "topLevelDomain":[
           ".ma"
        ],
        "alpha2Code":"MA",
        "alpha3Code":"MAR",
        "callingCodes":[
           "212"
        ],
        "capital":"Rabat",
        "altSpellings":[
           "MA",
           "Kingdom of Morocco",
           "Al-Mamlakah al-Maġribiyah"
        ],
        "region":"Africa",
        "subregion":"Northern Africa",
        "population":33337529,
        "latlng":[
           32.0,
           -5.0
        ],
        "demonym":"Moroccan",
        "id":446550.0,
        "gini":40.9,
        "timezones":[
           "UTC"
        ],
        "borders":[
           "DZA",
           "ESH",
           "ESP"
        ],
        "nativeName":"المغرب",
        "numericCode":"504",
        "currencies":[
           {
              "code":"MAD",
              "name":"Moroccan dirham",
              "symbol":"د.م."
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Marokko",
           "es":"Marruecos",
           "fr":"Maroc",
           "ja":"モロッコ",
           "it":"Marocco",
           "br":"Marrocos",
           "pt":"Marrocos",
           "nl":"Marokko",
           "hr":"Maroko",
           "fa":"مراکش"
        },
        "flag":"https://restcountries.eu/data/mar.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           },
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"MAR"
     },
     {
        "name":"Mozambique",
        "topLevelDomain":[
           ".mz"
        ],
        "alpha2Code":"MZ",
        "alpha3Code":"MOZ",
        "callingCodes":[
           "258"
        ],
        "capital":"Maputo",
        "altSpellings":[
           "MZ",
           "Republic of Mozambique",
           "República de Moçambique"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":26423700,
        "latlng":[
           -18.25,
           35.0
        ],
        "demonym":"Mozambican",
        "id":801590.0,
        "gini":45.7,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "MWI",
           "ZAF",
           "SWZ",
           "TZA",
           "ZMB",
           "ZWE"
        ],
        "nativeName":"Moçambique",
        "numericCode":"508",
        "currencies":[
           {
              "code":"MZN",
              "name":"Mozambican metical",
              "symbol":"MT"
           }
        ],
        "languages":[
           {
              "iso639_1":"pt",
              "iso639_2":"por",
              "name":"Portuguese",
              "nativeName":"Português"
           }
        ],
        "translations":{
           "de":"Mosambik",
           "es":"Mozambique",
           "fr":"Mozambique",
           "ja":"モザンビーク",
           "it":"Mozambico",
           "br":"Moçambique",
           "pt":"Moçambique",
           "nl":"Mozambique",
           "hr":"Mozambik",
           "fa":"موزامبیک"
        },
        "flag":"https://restcountries.eu/data/moz.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"MOZ"
     },
     {
        "name":"Namibia",
        "topLevelDomain":[
           ".na"
        ],
        "alpha2Code":"NA",
        "alpha3Code":"NAM",
        "callingCodes":[
           "264"
        ],
        "capital":"Windhoek",
        "altSpellings":[
           "NA",
           "Namibië",
           "Republic of Namibia"
        ],
        "region":"Africa",
        "subregion":"Southern Africa",
        "population":2324388,
        "latlng":[
           -22.0,
           17.0
        ],
        "demonym":"Namibian",
        "id":825615.0,
        "gini":63.9,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "AGO",
           "BWA",
           "ZAF",
           "ZMB"
        ],
        "nativeName":"Namibia",
        "numericCode":"516",
        "currencies":[
           {
              "code":"NAD",
              "name":"Namibian dollar",
              "symbol":"$"
           },
           {
              "code":"ZAR",
              "name":"South African rand",
              "symbol":"R"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"af",
              "iso639_2":"afr",
              "name":"Afrikaans",
              "nativeName":"Afrikaans"
           }
        ],
        "translations":{
           "de":"Namibia",
           "es":"Namibia",
           "fr":"Namibie",
           "ja":"ナミビア",
           "it":"Namibia",
           "br":"Namíbia",
           "pt":"Namíbia",
           "nl":"Namibië",
           "hr":"Namibija",
           "fa":"نامیبیا"
        },
        "flag":"https://restcountries.eu/data/nam.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"NAM"
     },
     {
        "name":"Niger",
        "topLevelDomain":[
           ".ne"
        ],
        "alpha2Code":"NE",
        "alpha3Code":"NER",
        "callingCodes":[
           "227"
        ],
        "capital":"Niamey",
        "altSpellings":[
           "NE",
           "Nijar",
           "Republic of Niger",
           "République du Niger"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":20715000,
        "latlng":[
           16.0,
           8.0
        ],
        "demonym":"Nigerien",
        "id":1267000.0,
        "gini":34.6,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "DZA",
           "BEN",
           "BFA",
           "TCD",
           "LBY",
           "MLI",
           "NGA"
        ],
        "nativeName":"Niger",
        "numericCode":"562",
        "currencies":[
           {
              "code":"XOF",
              "name":"West African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Niger",
           "es":"Níger",
           "fr":"Niger",
           "ja":"ニジェール",
           "it":"Niger",
           "br":"Níger",
           "pt":"Níger",
           "nl":"Niger",
           "hr":"Niger",
           "fa":"نیجر"
        },
        "flag":"https://restcountries.eu/data/ner.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"NIG"
     },
     {
        "name":"Nigeria",
        "topLevelDomain":[
           ".ng"
        ],
        "alpha2Code":"NG",
        "alpha3Code":"NGA",
        "callingCodes":[
           "234"
        ],
        "capital":"Abuja",
        "altSpellings":[
           "NG",
           "Nijeriya",
           "Naíjíríà",
           "Federal Republic of Nigeria"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":186988000,
        "latlng":[
           10.0,
           8.0
        ],
        "demonym":"Nigerian",
        "id":923768.0,
        "gini":48.8,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "BEN",
           "CMR",
           "TCD",
           "NER"
        ],
        "nativeName":"Nigeria",
        "numericCode":"566",
        "currencies":[
           {
              "code":"NGN",
              "name":"Nigerian naira",
              "symbol":"₦"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Nigeria",
           "es":"Nigeria",
           "fr":"Nigéria",
           "ja":"ナイジェリア",
           "it":"Nigeria",
           "br":"Nigéria",
           "pt":"Nigéria",
           "nl":"Nigeria",
           "hr":"Nigerija",
           "fa":"نیجریه"
        },
        "flag":"https://restcountries.eu/data/nga.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"NGR"
     },
     {
        "name":"Réunion",
        "topLevelDomain":[
           ".re"
        ],
        "alpha2Code":"RE",
        "alpha3Code":"REU",
        "callingCodes":[
           "262"
        ],
        "capital":"Saint-Denis",
        "altSpellings":[
           "RE",
           "Reunion"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":840974,
        "latlng":[
           -21.15,
           55.5
        ],
        "demonym":"French",
        "id":null,
        "gini":null,
        "timezones":[
           "UTC+04:00"
        ],
        "borders":[

        ],
        "nativeName":"La Réunion",
        "numericCode":"638",
        "currencies":[
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Réunion",
           "es":"Reunión",
           "fr":"Réunion",
           "ja":"レユニオン",
           "it":"Riunione",
           "br":"Reunião",
           "pt":"Reunião",
           "nl":"Réunion",
           "hr":"Réunion",
           "fa":"رئونیون"
        },
        "flag":"https://restcountries.eu/data/reu.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":""
     },
     {
        "name":"Rwanda",
        "topLevelDomain":[
           ".rw"
        ],
        "alpha2Code":"RW",
        "alpha3Code":"RWA",
        "callingCodes":[
           "250"
        ],
        "capital":"Kigali",
        "altSpellings":[
           "RW",
           "Republic of Rwanda",
           "Repubulika y'u Rwanda",
           "République du Rwanda"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":11553188,
        "latlng":[
           -2.0,
           30.0
        ],
        "demonym":"Rwandan",
        "id":26338.0,
        "gini":50.8,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "BDI",
           "COD",
           "TZA",
           "UGA"
        ],
        "nativeName":"Rwanda",
        "numericCode":"646",
        "currencies":[
           {
              "code":"RWF",
              "name":"Rwandan franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"rw",
              "iso639_2":"kin",
              "name":"Kinyarwanda",
              "nativeName":"Ikinyarwanda"
           },
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Ruanda",
           "es":"Ruanda",
           "fr":"Rwanda",
           "ja":"ルワンダ",
           "it":"Ruanda",
           "br":"Ruanda",
           "pt":"Ruanda",
           "nl":"Rwanda",
           "hr":"Ruanda",
           "fa":"رواندا"
        },
        "flag":"https://restcountries.eu/data/rwa.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"RWA"
     },
     {
        "name":"Saint Helena, Ascension and Tristan da Cunha",
        "topLevelDomain":[
           ".sh"
        ],
        "alpha2Code":"SH",
        "alpha3Code":"SHN",
        "callingCodes":[
           "290"
        ],
        "capital":"Jamestown",
        "altSpellings":[
           "SH"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":4255,
        "latlng":[
           -15.95,
           -5.7
        ],
        "demonym":"Saint Helenian",
        "id":null,
        "gini":null,
        "timezones":[
           "UTC+00:00"
        ],
        "borders":[

        ],
        "nativeName":"Saint Helena",
        "numericCode":"654",
        "currencies":[
           {
              "code":"SHP",
              "name":"Saint Helena pound",
              "symbol":"£"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Sankt Helena",
           "es":"Santa Helena",
           "fr":"Sainte-Hélène",
           "ja":"セントヘレナ・アセンションおよびトリスタンダクーニャ",
           "it":"Sant'Elena",
           "br":"Santa Helena",
           "pt":"Santa Helena",
           "nl":"Sint-Helena",
           "hr":"Sveta Helena",
           "fa":"سنت هلنا، اسنشن و تریستان دا کونا"
        },
        "flag":"https://restcountries.eu/data/shn.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":null
     },
     {
        "name":"Sao Tome and Principe",
        "topLevelDomain":[
           ".st"
        ],
        "alpha2Code":"ST",
        "alpha3Code":"STP",
        "callingCodes":[
           "239"
        ],
        "capital":"São Tomé",
        "altSpellings":[
           "ST",
           "Democratic Republic of São Tomé and Príncipe",
           "República Democrática de São Tomé e Príncipe"
        ],
        "region":"Africa",
        "subregion":"Middle Africa",
        "population":187356,
        "latlng":[
           1.0,
           7.0
        ],
        "demonym":"Sao Tomean",
        "id":964.0,
        "gini":50.8,
        "timezones":[
           "UTC"
        ],
        "borders":[

        ],
        "nativeName":"São Tomé e Príncipe",
        "numericCode":"678",
        "currencies":[
           {
              "code":"STD",
              "name":"São Tomé and Príncipe dobra",
              "symbol":"Db"
           }
        ],
        "languages":[
           {
              "iso639_1":"pt",
              "iso639_2":"por",
              "name":"Portuguese",
              "nativeName":"Português"
           }
        ],
        "translations":{
           "de":"São Tomé und Príncipe",
           "es":"Santo Tomé y Príncipe",
           "fr":"Sao Tomé-et-Principe",
           "ja":"サントメ・プリンシペ",
           "it":"São Tomé e Príncipe",
           "br":"São Tomé e Príncipe",
           "pt":"São Tomé e Príncipe",
           "nl":"Sao Tomé en Principe",
           "hr":"Sveti Toma i Princip",
           "fa":"کواترو دو فرویرو"
        },
        "flag":"https://restcountries.eu/data/stp.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"STP"
     },
     {
        "name":"Senegal",
        "topLevelDomain":[
           ".sn"
        ],
        "alpha2Code":"SN",
        "alpha3Code":"SEN",
        "callingCodes":[
           "221"
        ],
        "capital":"Dakar",
        "altSpellings":[
           "SN",
           "Republic of Senegal",
           "République du Sénégal"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":14799859,
        "latlng":[
           14.0,
           -14.0
        ],
        "demonym":"Senegalese",
        "id":196722.0,
        "gini":39.2,
        "timezones":[
           "UTC"
        ],
        "borders":[
           "GMB",
           "GIN",
           "GNB",
           "MLI",
           "MRT"
        ],
        "nativeName":"Sénégal",
        "numericCode":"686",
        "currencies":[
           {
              "code":"XOF",
              "name":"West African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Senegal",
           "es":"Senegal",
           "fr":"Sénégal",
           "ja":"セネガル",
           "it":"Senegal",
           "br":"Senegal",
           "pt":"Senegal",
           "nl":"Senegal",
           "hr":"Senegal",
           "fa":"سنگال"
        },
        "flag":"https://restcountries.eu/data/sen.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"SEN"
     },
     {
        "name":"Seychelles",
        "topLevelDomain":[
           ".sc"
        ],
        "alpha2Code":"SC",
        "alpha3Code":"SYC",
        "callingCodes":[
           "248"
        ],
        "capital":"Victoria",
        "altSpellings":[
           "SC",
           "Republic of Seychelles",
           "Repiblik Sesel",
           "République des Seychelles"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":91400,
        "latlng":[
           -4.58333333,
           55.66666666
        ],
        "demonym":"Seychellois",
        "id":452.0,
        "gini":65.8,
        "timezones":[
           "UTC+04:00"
        ],
        "borders":[

        ],
        "nativeName":"Seychelles",
        "numericCode":"690",
        "currencies":[
           {
              "code":"SCR",
              "name":"Seychellois rupee",
              "symbol":"₨"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           },
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Seychellen",
           "es":"Seychelles",
           "fr":"Seychelles",
           "ja":"セーシェル",
           "it":"Seychelles",
           "br":"Seicheles",
           "pt":"Seicheles",
           "nl":"Seychellen",
           "hr":"Sejšeli",
           "fa":"سیشل"
        },
        "flag":"https://restcountries.eu/data/syc.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"SEY"
     },
     {
        "name":"Sierra Leone",
        "topLevelDomain":[
           ".sl"
        ],
        "alpha2Code":"SL",
        "alpha3Code":"SLE",
        "callingCodes":[
           "232"
        ],
        "capital":"Freetown",
        "altSpellings":[
           "SL",
           "Republic of Sierra Leone"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":7075641,
        "latlng":[
           8.5,
           -11.5
        ],
        "demonym":"Sierra Leonean",
        "id":71740.0,
        "gini":42.5,
        "timezones":[
           "UTC"
        ],
        "borders":[
           "GIN",
           "LBR"
        ],
        "nativeName":"Sierra Leone",
        "numericCode":"694",
        "currencies":[
           {
              "code":"SLL",
              "name":"Sierra Leonean leone",
              "symbol":"Le"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Sierra Leone",
           "es":"Sierra Leone",
           "fr":"Sierra Leone",
           "ja":"シエラレオネ",
           "it":"Sierra Leone",
           "br":"Serra Leoa",
           "pt":"Serra Leoa",
           "nl":"Sierra Leone",
           "hr":"Sijera Leone",
           "fa":"سیرالئون"
        },
        "flag":"https://restcountries.eu/data/sle.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"SLE"
     },
     {
        "name":"Somalia",
        "topLevelDomain":[
           ".so"
        ],
        "alpha2Code":"SO",
        "alpha3Code":"SOM",
        "callingCodes":[
           "252"
        ],
        "capital":"Mogadishu",
        "altSpellings":[
           "SO",
           "aṣ-Ṣūmāl",
           "Federal Republic of Somalia",
           "Jamhuuriyadda Federaalka Soomaaliya",
           "Jumhūriyyat aṣ-Ṣūmāl al-Fiderāliyya"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":11079000,
        "latlng":[
           10.0,
           49.0
        ],
        "demonym":"Somali",
        "id":637657.0,
        "gini":null,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "DJI",
           "ETH",
           "KEN"
        ],
        "nativeName":"Soomaaliya",
        "numericCode":"706",
        "currencies":[
           {
              "code":"SOS",
              "name":"Somali shilling",
              "symbol":"Sh"
           }
        ],
        "languages":[
           {
              "iso639_1":"so",
              "iso639_2":"som",
              "name":"Somali",
              "nativeName":"Soomaaliga"
           },
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Somalia",
           "es":"Somalia",
           "fr":"Somalie",
           "ja":"ソマリア",
           "it":"Somalia",
           "br":"Somália",
           "pt":"Somália",
           "nl":"Somalië",
           "hr":"Somalija",
           "fa":"سومالی"
        },
        "flag":"https://restcountries.eu/data/som.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           },
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"SOM"
     },
     {
        "name":"South Africa",
        "topLevelDomain":[
           ".za"
        ],
        "alpha2Code":"ZA",
        "alpha3Code":"ZAF",
        "callingCodes":[
           "27"
        ],
        "capital":"Pretoria",
        "altSpellings":[
           "ZA",
           "RSA",
           "Suid-Afrika",
           "Republic of South Africa"
        ],
        "region":"Africa",
        "subregion":"Southern Africa",
        "population":55653654,
        "latlng":[
           -29.0,
           24.0
        ],
        "demonym":"South African",
        "id":1221037.0,
        "gini":63.1,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "BWA",
           "LSO",
           "MOZ",
           "NAM",
           "SWZ",
           "ZWE"
        ],
        "nativeName":"South Africa",
        "numericCode":"710",
        "currencies":[
           {
              "code":"ZAR",
              "name":"South African rand",
              "symbol":"R"
           }
        ],
        "languages":[
           {
              "iso639_1":"af",
              "iso639_2":"afr",
              "name":"Afrikaans",
              "nativeName":"Afrikaans"
           },
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"nr",
              "iso639_2":"nbl",
              "name":"Southern Ndebele",
              "nativeName":"isiNdebele"
           },
           {
              "iso639_1":"st",
              "iso639_2":"sot",
              "name":"Southern Sotho",
              "nativeName":"Sesotho"
           },
           {
              "iso639_1":"ss",
              "iso639_2":"ssw",
              "name":"Swati",
              "nativeName":"SiSwati"
           },
           {
              "iso639_1":"tn",
              "iso639_2":"tsn",
              "name":"Tswana",
              "nativeName":"Setswana"
           },
           {
              "iso639_1":"ts",
              "iso639_2":"tso",
              "name":"Tsonga",
              "nativeName":"Xitsonga"
           },
           {
              "iso639_1":"ve",
              "iso639_2":"ven",
              "name":"Venda",
              "nativeName":"Tshivenḓa"
           },
           {
              "iso639_1":"xh",
              "iso639_2":"xho",
              "name":"Xhosa",
              "nativeName":"isiXhosa"
           },
           {
              "iso639_1":"zu",
              "iso639_2":"zul",
              "name":"Zulu",
              "nativeName":"isiZulu"
           }
        ],
        "translations":{
           "de":"Republik Südafrika",
           "es":"República de Sudáfrica",
           "fr":"Afrique du Sud",
           "ja":"南アフリカ",
           "it":"Sud Africa",
           "br":"República Sul-Africana",
           "pt":"República Sul-Africana",
           "nl":"Zuid-Afrika",
           "hr":"Južnoafrička Republika",
           "fa":"آفریقای جنوبی"
        },
        "flag":"https://restcountries.eu/data/zaf.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"RSA"
     },
     {
        "name":"South Sudan",
        "topLevelDomain":[
           ".ss"
        ],
        "alpha2Code":"SS",
        "alpha3Code":"SSD",
        "callingCodes":[
           "211"
        ],
        "capital":"Juba",
        "altSpellings":[
           "SS"
        ],
        "region":"Africa",
        "subregion":"Middle Africa",
        "population":12131000,
        "latlng":[
           7.0,
           30.0
        ],
        "demonym":"South Sudanese",
        "id":619745.0,
        "gini":45.5,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "CAF",
           "COD",
           "ETH",
           "KEN",
           "SDN",
           "UGA"
        ],
        "nativeName":"South Sudan",
        "numericCode":"728",
        "currencies":[
           {
              "code":"SSP",
              "name":"South Sudanese pound",
              "symbol":"£"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Südsudan",
           "es":"Sudán del Sur",
           "fr":"Soudan du Sud",
           "ja":"南スーダン",
           "it":"Sudan del sud",
           "br":"Sudão do Sul",
           "pt":"Sudão do Sul",
           "nl":"Zuid-Soedan",
           "hr":"Južni Sudan",
           "fa":"سودان جنوبی"
        },
        "flag":"https://restcountries.eu/data/ssd.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":""
     },
     {
        "name":"Sudan",
        "topLevelDomain":[
           ".sd"
        ],
        "alpha2Code":"SD",
        "alpha3Code":"SDN",
        "callingCodes":[
           "249"
        ],
        "capital":"Khartoum",
        "altSpellings":[
           "SD",
           "Republic of the Sudan",
           "Jumhūrīyat as-Sūdān"
        ],
        "region":"Africa",
        "subregion":"Northern Africa",
        "population":39598700,
        "latlng":[
           15.0,
           30.0
        ],
        "demonym":"Sudanese",
        "id":1886068.0,
        "gini":35.3,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "CAF",
           "TCD",
           "EGY",
           "ERI",
           "ETH",
           "LBY",
           "SSD"
        ],
        "nativeName":"السودان",
        "numericCode":"729",
        "currencies":[
           {
              "code":"SDG",
              "name":"Sudanese pound",
              "symbol":"ج.س."
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           },
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Sudan",
           "es":"Sudán",
           "fr":"Soudan",
           "ja":"スーダン",
           "it":"Sudan",
           "br":"Sudão",
           "pt":"Sudão",
           "nl":"Soedan",
           "hr":"Sudan",
           "fa":"سودان"
        },
        "flag":"https://restcountries.eu/data/sdn.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           },
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"SUD"
     },
     {
        "name":"Swaziland",
        "topLevelDomain":[
           ".sz"
        ],
        "alpha2Code":"SZ",
        "alpha3Code":"SWZ",
        "callingCodes":[
           "268"
        ],
        "capital":"Lobamba",
        "altSpellings":[
           "SZ",
           "weSwatini",
           "Swatini",
           "Ngwane",
           "Kingdom of Swaziland",
           "Umbuso waseSwatini"
        ],
        "region":"Africa",
        "subregion":"Southern Africa",
        "population":1132657,
        "latlng":[
           -26.5,
           31.5
        ],
        "demonym":"Swazi",
        "id":17364.0,
        "gini":51.5,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "MOZ",
           "ZAF"
        ],
        "nativeName":"Swaziland",
        "numericCode":"748",
        "currencies":[
           {
              "code":"SZL",
              "name":"Swazi lilangeni",
              "symbol":"L"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"ss",
              "iso639_2":"ssw",
              "name":"Swati",
              "nativeName":"SiSwati"
           }
        ],
        "translations":{
           "de":"Swasiland",
           "es":"Suazilandia",
           "fr":"Swaziland",
           "ja":"スワジランド",
           "it":"Swaziland",
           "br":"Suazilândia",
           "pt":"Suazilândia",
           "nl":"Swaziland",
           "hr":"Svazi",
           "fa":"سوازیلند"
        },
        "flag":"https://restcountries.eu/data/swz.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"SWZ"
     },
     {
        "name":"Tanzania, United Republic of",
        "topLevelDomain":[
           ".tz"
        ],
        "alpha2Code":"TZ",
        "alpha3Code":"TZA",
        "callingCodes":[
           "255"
        ],
        "capital":"Dodoma",
        "altSpellings":[
           "TZ",
           "United Republic of Tanzania",
           "Jamhuri ya Muungano wa Tanzania"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":55155000,
        "latlng":[
           -6.0,
           35.0
        ],
        "demonym":"Tanzanian",
        "id":945087.0,
        "gini":37.6,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "BDI",
           "COD",
           "KEN",
           "MWI",
           "MOZ",
           "RWA",
           "UGA",
           "ZMB"
        ],
        "nativeName":"Tanzania",
        "numericCode":"834",
        "currencies":[
           {
              "code":"TZS",
              "name":"Tanzanian shilling",
              "symbol":"Sh"
           }
        ],
        "languages":[
           {
              "iso639_1":"sw",
              "iso639_2":"swa",
              "name":"Swahili",
              "nativeName":"Kiswahili"
           },
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Tansania",
           "es":"Tanzania",
           "fr":"Tanzanie",
           "ja":"タンザニア",
           "it":"Tanzania",
           "br":"Tanzânia",
           "pt":"Tanzânia",
           "nl":"Tanzania",
           "hr":"Tanzanija",
           "fa":"تانزانیا"
        },
        "flag":"https://restcountries.eu/data/tza.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"TAN"
     },
     {
        "name":"Togo",
        "topLevelDomain":[
           ".tg"
        ],
        "alpha2Code":"TG",
        "alpha3Code":"TGO",
        "callingCodes":[
           "228"
        ],
        "capital":"Lomé",
        "altSpellings":[
           "TG",
           "Togolese",
           "Togolese Republic",
           "République Togolaise"
        ],
        "region":"Africa",
        "subregion":"Western Africa",
        "population":7143000,
        "latlng":[
           8.0,
           1.16666666
        ],
        "demonym":"Togolese",
        "id":56785.0,
        "gini":34.4,
        "timezones":[
           "UTC"
        ],
        "borders":[
           "BEN",
           "BFA",
           "GHA"
        ],
        "nativeName":"Togo",
        "numericCode":"768",
        "currencies":[
           {
              "code":"XOF",
              "name":"West African CFA franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Togo",
           "es":"Togo",
           "fr":"Togo",
           "ja":"トーゴ",
           "it":"Togo",
           "br":"Togo",
           "pt":"Togo",
           "nl":"Togo",
           "hr":"Togo",
           "fa":"توگو"
        },
        "flag":"https://restcountries.eu/data/tgo.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"TOG"
     },
     {
        "name":"Tunisia",
        "topLevelDomain":[
           ".tn"
        ],
        "alpha2Code":"TN",
        "alpha3Code":"TUN",
        "callingCodes":[
           "216"
        ],
        "capital":"Tunis",
        "altSpellings":[
           "TN",
           "Republic of Tunisia",
           "al-Jumhūriyyah at-Tūnisiyyah"
        ],
        "region":"Africa",
        "subregion":"Northern Africa",
        "population":11154400,
        "latlng":[
           34.0,
           9.0
        ],
        "demonym":"Tunisian",
        "id":163610.0,
        "gini":41.4,
        "timezones":[
           "UTC+01:00"
        ],
        "borders":[
           "DZA",
           "LBY"
        ],
        "nativeName":"تونس",
        "numericCode":"788",
        "currencies":[
           {
              "code":"TND",
              "name":"Tunisian dinar",
              "symbol":"د.ت"
           }
        ],
        "languages":[
           {
              "iso639_1":"ar",
              "iso639_2":"ara",
              "name":"Arabic",
              "nativeName":"العربية"
           }
        ],
        "translations":{
           "de":"Tunesien",
           "es":"Túnez",
           "fr":"Tunisie",
           "ja":"チュニジア",
           "it":"Tunisia",
           "br":"Tunísia",
           "pt":"Tunísia",
           "nl":"Tunesië",
           "hr":"Tunis",
           "fa":"تونس"
        },
        "flag":"https://restcountries.eu/data/tun.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           },
           {
              "acronym":"AL",
              "name":"Arab League",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "جامعة الدول العربية",
                 "Jāmiʻat ad-Duwal al-ʻArabīyah",
                 "League of Arab States"
              ]
           }
        ],
        "cioc":"TUN"
     },
     {
        "name":"Uganda",
        "topLevelDomain":[
           ".ug"
        ],
        "alpha2Code":"UG",
        "alpha3Code":"UGA",
        "callingCodes":[
           "256"
        ],
        "capital":"Kampala",
        "altSpellings":[
           "UG",
           "Republic of Uganda",
           "Jamhuri ya Uganda"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":33860700,
        "latlng":[
           1.0,
           32.0
        ],
        "demonym":"Ugandan",
        "id":241550.0,
        "gini":44.3,
        "timezones":[
           "UTC+03:00"
        ],
        "borders":[
           "COD",
           "KEN",
           "RWA",
           "SSD",
           "TZA"
        ],
        "nativeName":"Uganda",
        "numericCode":"800",
        "currencies":[
           {
              "code":"UGX",
              "name":"Ugandan shilling",
              "symbol":"Sh"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"sw",
              "iso639_2":"swa",
              "name":"Swahili",
              "nativeName":"Kiswahili"
           }
        ],
        "translations":{
           "de":"Uganda",
           "es":"Uganda",
           "fr":"Uganda",
           "ja":"ウガンダ",
           "it":"Uganda",
           "br":"Uganda",
           "pt":"Uganda",
           "nl":"Oeganda",
           "hr":"Uganda",
           "fa":"اوگاندا"
        },
        "flag":"https://restcountries.eu/data/uga.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"UGA"
     },
     {
        "name":"Western Sahara",
        "topLevelDomain":[
           ".eh"
        ],
        "alpha2Code":"EH",
        "alpha3Code":"ESH",
        "callingCodes":[
           "212"
        ],
        "capital":"El Aaiún",
        "altSpellings":[
           "EH",
           "Taneẓroft Tutrimt"
        ],
        "region":"Africa",
        "subregion":"Northern Africa",
        "population":510713,
        "latlng":[
           24.5,
           -13.0
        ],
        "demonym":"Sahrawi",
        "id":266000.0,
        "gini":null,
        "timezones":[
           "UTC+00:00"
        ],
        "borders":[
           "DZA",
           "MRT",
           "MAR"
        ],
        "nativeName":"الصحراء الغربية",
        "numericCode":"732",
        "currencies":[
           {
              "code":"MAD",
              "name":"Moroccan dirham",
              "symbol":"د.م."
           },
           {
              "code":"DZD",
              "name":"Algerian dinar",
              "symbol":"د.ج"
           }
        ],
        "languages":[
           {
              "iso639_1":"es",
              "iso639_2":"spa",
              "name":"Spanish",
              "nativeName":"Español"
           }
        ],
        "translations":{
           "de":"Westsahara",
           "es":"Sahara Occidental",
           "fr":"Sahara Occidental",
           "ja":"西サハラ",
           "it":"Sahara Occidentale",
           "br":"Saara Ocidental",
           "pt":"Saara Ocidental",
           "nl":"Westelijke Sahara",
           "hr":"Zapadna Sahara",
           "fa":"جمهوری دموکراتیک عربی صحرا"
        },
        "flag":"https://restcountries.eu/data/esh.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":""
     },
     {
        "name":"Zambia",
        "topLevelDomain":[
           ".zm"
        ],
        "alpha2Code":"ZM",
        "alpha3Code":"ZMB",
        "callingCodes":[
           "260"
        ],
        "capital":"Lusaka",
        "altSpellings":[
           "ZM",
           "Republic of Zambia"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":15933883,
        "latlng":[
           -15.0,
           30.0
        ],
        "demonym":"Zambian",
        "id":752612.0,
        "gini":54.6,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "AGO",
           "BWA",
           "COD",
           "MWI",
           "MOZ",
           "NAM",
           "TZA",
           "ZWE"
        ],
        "nativeName":"Zambia",
        "numericCode":"894",
        "currencies":[
           {
              "code":"ZMW",
              "name":"Zambian kwacha",
              "symbol":"ZK"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Sambia",
           "es":"Zambia",
           "fr":"Zambie",
           "ja":"ザンビア",
           "it":"Zambia",
           "br":"Zâmbia",
           "pt":"Zâmbia",
           "nl":"Zambia",
           "hr":"Zambija",
           "fa":"زامبیا"
        },
        "flag":"https://restcountries.eu/data/zmb.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"ZAM"
     },
     {
        "name":"Zimbabwe",
        "topLevelDomain":[
           ".zw"
        ],
        "alpha2Code":"ZW",
        "alpha3Code":"ZWE",
        "callingCodes":[
           "263"
        ],
        "capital":"Harare",
        "altSpellings":[
           "ZW",
           "Republic of Zimbabwe"
        ],
        "region":"Africa",
        "subregion":"Eastern Africa",
        "population":14240168,
        "latlng":[
           -20.0,
           30.0
        ],
        "demonym":"Zimbabwean",
        "id":390757.0,
        "gini":null,
        "timezones":[
           "UTC+02:00"
        ],
        "borders":[
           "BWA",
           "MOZ",
           "ZAF",
           "ZMB"
        ],
        "nativeName":"Zimbabwe",
        "numericCode":"716",
        "currencies":[
           {
              "code":"BWP",
              "name":"Botswana pula",
              "symbol":"P"
           },
           {
              "code":"GBP",
              "name":"British pound",
              "symbol":"£"
           },
           {
              "code":"CNY",
              "name":"Chinese yuan",
              "symbol":"¥"
           },
           {
              "code":"EUR",
              "name":"Euro",
              "symbol":"€"
           },
           {
              "code":"INR",
              "name":"Indian rupee",
              "symbol":"₹"
           },
           {
              "code":"JPY",
              "name":"Japanese yen",
              "symbol":"¥"
           },
           {
              "code":"ZAR",
              "name":"South African rand",
              "symbol":"Rs"
           },
           {
              "code":"USD",
              "name":"United States dollar",
              "symbol":"$"
           },
           {
              "code":"(none)",
              "name":null,
              "symbol":null
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"sn",
              "iso639_2":"sna",
              "name":"Shona",
              "nativeName":"chiShona"
           },
           {
              "iso639_1":"nd",
              "iso639_2":"nde",
              "name":"Northern Ndebele",
              "nativeName":"isiNdebele"
           }
        ],
        "translations":{
           "de":"Simbabwe",
           "es":"Zimbabue",
           "fr":"Zimbabwe",
           "ja":"ジンバブエ",
           "it":"Zimbabwe",
           "br":"Zimbabwe",
           "pt":"Zimbabué",
           "nl":"Zimbabwe",
           "hr":"Zimbabve",
           "fa":"زیمباوه"
        },
        "flag":"https://restcountries.eu/data/zwe.svg",
        "regionalBlocs":[
           {
              "acronym":"AU",
              "name":"African Union",
              "otherAcronyms":[

              ],
              "otherNames":[
                 "الاتحاد الأفريقي",
                 "Union africaine",
                 "União Africana",
                 "Unión Africana",
                 "Umoja wa Afrika"
              ]
           }
        ],
        "cioc":"ZIM"
     }
    ];

    const oceania = [
      {
        "name":"American Samoa",
        "topLevelDomain":[
           ".as"
        ],
        "alpha2Code":"AS",
        "alpha3Code":"ASM",
        "callingCodes":[
           "1684"
        ],
        "capital":"Pago Pago",
        "altSpellings":[
           "AS",
           "Amerika Sāmoa",
           "Amelika Sāmoa",
           "Sāmoa Amelika"
        ],
        "region":"Oceania",
        "subregion":"Polynesia",
        "population":57100,
        "latlng":[
           -14.33333333,
           -170.0
        ],
        "demonym":"American Samoan",
        "id":199.0,
        "gini":null,
        "timezones":[
           "UTC-11:00"
        ],
        "borders":[

        ],
        "nativeName":"American Samoa",
        "numericCode":"016",
        "currencies":[
           {
              "code":"USD",
              "name":"United State Dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"sm",
              "iso639_2":"smo",
              "name":"Samoan",
              "nativeName":"gagana fa'a Samoa"
           }
        ],
        "translations":{
           "de":"Amerikanisch-Samoa",
           "es":"Samoa Americana",
           "fr":"Samoa américaines",
           "ja":"アメリカ領サモア",
           "it":"Samoa Americane",
           "br":"Samoa Americana",
           "pt":"Samoa Americana",
           "nl":"Amerikaans Samoa",
           "hr":"Američka Samoa",
           "fa":"ساموآی آمریکا"
        },
        "flag":"https://restcountries.eu/data/asm.svg",
        "regionalBlocs":[

        ],
        "cioc":"ASA"
     },
     {
        "name":"Australia",
        "topLevelDomain":[
           ".au"
        ],
        "alpha2Code":"AU",
        "alpha3Code":"AUS",
        "callingCodes":[
           "61"
        ],
        "capital":"Canberra",
        "altSpellings":[
           "AU"
        ],
        "region":"Oceania",
        "subregion":"Australia and New Zealand",
        "population":24117360,
        "latlng":[
           -27.0,
           133.0
        ],
        "demonym":"Australian",
        "id":7692024.0,
        "gini":30.5,
        "timezones":[
           "UTC+05:00",
           "UTC+06:30",
           "UTC+07:00",
           "UTC+08:00",
           "UTC+09:30",
           "UTC+10:00",
           "UTC+10:30",
           "UTC+11:30"
        ],
        "borders":[

        ],
        "nativeName":"Australia",
        "numericCode":"036",
        "currencies":[
           {
              "code":"AUD",
              "name":"Australian dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Australien",
           "es":"Australia",
           "fr":"Australie",
           "ja":"オーストラリア",
           "it":"Australia",
           "br":"Austrália",
           "pt":"Austrália",
           "nl":"Australië",
           "hr":"Australija",
           "fa":"استرالیا"
        },
        "flag":"https://restcountries.eu/data/aus.svg",
        "regionalBlocs":[

        ],
        "cioc":"AUS"
     },
     {
        "name":"Christmas Island",
        "topLevelDomain":[
           ".cx"
        ],
        "alpha2Code":"CX",
        "alpha3Code":"CXR",
        "callingCodes":[
           "61"
        ],
        "capital":"Flying Fish Cove",
        "altSpellings":[
           "CX",
           "Territory of Christmas Island"
        ],
        "region":"Oceania",
        "subregion":"Australia and New Zealand",
        "population":2072,
        "latlng":[
           -10.5,
           105.66666666
        ],
        "demonym":"Christmas Island",
        "id":135.0,
        "gini":null,
        "timezones":[
           "UTC+07:00"
        ],
        "borders":[

        ],
        "nativeName":"Christmas Island",
        "numericCode":"162",
        "currencies":[
           {
              "code":"AUD",
              "name":"Australian dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Weihnachtsinsel",
           "es":"Isla de Navidad",
           "fr":"Île Christmas",
           "ja":"クリスマス島",
           "it":"Isola di Natale",
           "br":"Ilha Christmas",
           "pt":"Ilha do Natal",
           "nl":"Christmaseiland",
           "hr":"Božićni otok",
           "fa":"جزیره کریسمس"
        },
        "flag":"https://restcountries.eu/data/cxr.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"Cocos (Keeling) Islands",
        "topLevelDomain":[
           ".cc"
        ],
        "alpha2Code":"CC",
        "alpha3Code":"CCK",
        "callingCodes":[
           "61"
        ],
        "capital":"West Island",
        "altSpellings":[
           "CC",
           "Territory of the Cocos (Keeling) Islands",
           "Keeling Islands"
        ],
        "region":"Oceania",
        "subregion":"Australia and New Zealand",
        "population":550,
        "latlng":[
           -12.5,
           96.83333333
        ],
        "demonym":"Cocos Islander",
        "id":14.0,
        "gini":null,
        "timezones":[
           "UTC+06:30"
        ],
        "borders":[

        ],
        "nativeName":"Cocos (Keeling) Islands",
        "numericCode":"166",
        "currencies":[
           {
              "code":"AUD",
              "name":"Australian dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Kokosinseln",
           "es":"Islas Cocos o Islas Keeling",
           "fr":"Îles Cocos",
           "ja":"ココス（キーリング）諸島",
           "it":"Isole Cocos e Keeling",
           "br":"Ilhas Cocos",
           "pt":"Ilhas dos Cocos",
           "nl":"Cocoseilanden",
           "hr":"Kokosovi Otoci",
           "fa":"جزایر کوکوس"
        },
        "flag":"https://restcountries.eu/data/cck.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"Cook Islands",
        "topLevelDomain":[
           ".ck"
        ],
        "alpha2Code":"CK",
        "alpha3Code":"COK",
        "callingCodes":[
           "682"
        ],
        "capital":"Avarua",
        "altSpellings":[
           "CK",
           "Kūki 'Āirani"
        ],
        "region":"Oceania",
        "subregion":"Polynesia",
        "population":18100,
        "latlng":[
           -21.23333333,
           -159.76666666
        ],
        "demonym":"Cook Islander",
        "id":236.0,
        "gini":null,
        "timezones":[
           "UTC-10:00"
        ],
        "borders":[

        ],
        "nativeName":"Cook Islands",
        "numericCode":"184",
        "currencies":[
           {
              "code":"NZD",
              "name":"New Zealand dollar",
              "symbol":"$"
           },
           {
              "code":"CKD",
              "name":"Cook Islands dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Cookinseln",
           "es":"Islas Cook",
           "fr":"Îles Cook",
           "ja":"クック諸島",
           "it":"Isole Cook",
           "br":"Ilhas Cook",
           "pt":"Ilhas Cook",
           "nl":"Cookeilanden",
           "hr":"Cookovo Otočje",
           "fa":"جزایر کوک"
        },
        "flag":"https://restcountries.eu/data/cok.svg",
        "regionalBlocs":[

        ],
        "cioc":"COK"
     },
     {
        "name":"Fiji",
        "topLevelDomain":[
           ".fj"
        ],
        "alpha2Code":"FJ",
        "alpha3Code":"FJI",
        "callingCodes":[
           "679"
        ],
        "capital":"Suva",
        "altSpellings":[
           "FJ",
           "Viti",
           "Republic of Fiji",
           "Matanitu ko Viti",
           "Fijī Gaṇarājya"
        ],
        "region":"Oceania",
        "subregion":"Melanesia",
        "population":867000,
        "latlng":[
           -18.0,
           175.0
        ],
        "demonym":"Fijian",
        "id":18272.0,
        "gini":42.8,
        "timezones":[
           "UTC+12:00"
        ],
        "borders":[

        ],
        "nativeName":"Fiji",
        "numericCode":"242",
        "currencies":[
           {
              "code":"FJD",
              "name":"Fijian dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"fj",
              "iso639_2":"fij",
              "name":"Fijian",
              "nativeName":"vosa Vakaviti"
           },
           {
              "iso639_1":"hi",
              "iso639_2":"hin",
              "name":"Hindi",
              "nativeName":"हिन्दी"
           },
           {
              "iso639_1":"ur",
              "iso639_2":"urd",
              "name":"Urdu",
              "nativeName":"اردو"
           }
        ],
        "translations":{
           "de":"Fidschi",
           "es":"Fiyi",
           "fr":"Fidji",
           "ja":"フィジー",
           "it":"Figi",
           "br":"Fiji",
           "pt":"Fiji",
           "nl":"Fiji",
           "hr":"Fiđi",
           "fa":"فیجی"
        },
        "flag":"https://restcountries.eu/data/fji.svg",
        "regionalBlocs":[

        ],
        "cioc":"FIJ"
     },
     {
        "name":"French Polynesia",
        "topLevelDomain":[
           ".pf"
        ],
        "alpha2Code":"PF",
        "alpha3Code":"PYF",
        "callingCodes":[
           "689"
        ],
        "capital":"Papeetē",
        "altSpellings":[
           "PF",
           "Polynésie française",
           "French Polynesia",
           "Pōrīnetia Farāni"
        ],
        "region":"Oceania",
        "subregion":"Polynesia",
        "population":271800,
        "latlng":[
           -15.0,
           -140.0
        ],
        "demonym":"French Polynesian",
        "id":4167.0,
        "gini":null,
        "timezones":[
           "UTC-10:00",
           "UTC-09:30",
           "UTC-09:00"
        ],
        "borders":[

        ],
        "nativeName":"Polynésie française",
        "numericCode":"258",
        "currencies":[
           {
              "code":"XPF",
              "name":"CFP franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Französisch-Polynesien",
           "es":"Polinesia Francesa",
           "fr":"Polynésie française",
           "ja":"フランス領ポリネシア",
           "it":"Polinesia Francese",
           "br":"Polinésia Francesa",
           "pt":"Polinésia Francesa",
           "nl":"Frans-Polynesië",
           "hr":"Francuska Polinezija",
           "fa":"پلی‌نزی فرانسه"
        },
        "flag":"https://restcountries.eu/data/pyf.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"Guam",
        "topLevelDomain":[
           ".gu"
        ],
        "alpha2Code":"GU",
        "alpha3Code":"GUM",
        "callingCodes":[
           "1671"
        ],
        "capital":"Hagåtña",
        "altSpellings":[
           "GU",
           "Guåhån"
        ],
        "region":"Oceania",
        "subregion":"Micronesia",
        "population":184200,
        "latlng":[
           13.46666666,
           144.78333333
        ],
        "demonym":"Guamanian",
        "id":549.0,
        "gini":null,
        "timezones":[
           "UTC+10:00"
        ],
        "borders":[

        ],
        "nativeName":"Guam",
        "numericCode":"316",
        "currencies":[
           {
              "code":"USD",
              "name":"United States dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"ch",
              "iso639_2":"cha",
              "name":"Chamorro",
              "nativeName":"Chamoru"
           },
           {
              "iso639_1":"es",
              "iso639_2":"spa",
              "name":"Spanish",
              "nativeName":"Español"
           }
        ],
        "translations":{
           "de":"Guam",
           "es":"Guam",
           "fr":"Guam",
           "ja":"グアム",
           "it":"Guam",
           "br":"Guam",
           "pt":"Guame",
           "nl":"Guam",
           "hr":"Guam",
           "fa":"گوام"
        },
        "flag":"https://restcountries.eu/data/gum.svg",
        "regionalBlocs":[

        ],
        "cioc":"GUM"
     },
     {
        "name":"Kiribati",
        "topLevelDomain":[
           ".ki"
        ],
        "alpha2Code":"KI",
        "alpha3Code":"KIR",
        "callingCodes":[
           "686"
        ],
        "capital":"South Tarawa",
        "altSpellings":[
           "KI",
           "Republic of Kiribati",
           "Ribaberiki Kiribati"
        ],
        "region":"Oceania",
        "subregion":"Micronesia",
        "population":113400,
        "latlng":[
           1.41666666,
           173.0
        ],
        "demonym":"I-Kiribati",
        "id":811.0,
        "gini":null,
        "timezones":[
           "UTC+12:00",
           "UTC+13:00",
           "UTC+14:00"
        ],
        "borders":[

        ],
        "nativeName":"Kiribati",
        "numericCode":"296",
        "currencies":[
           {
              "code":"AUD",
              "name":"Australian dollar",
              "symbol":"$"
           },
           {
              "code":"(none)",
              "name":"Kiribati dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Kiribati",
           "es":"Kiribati",
           "fr":"Kiribati",
           "ja":"キリバス",
           "it":"Kiribati",
           "br":"Kiribati",
           "pt":"Quiribáti",
           "nl":"Kiribati",
           "hr":"Kiribati",
           "fa":"کیریباتی"
        },
        "flag":"https://restcountries.eu/data/kir.svg",
        "regionalBlocs":[

        ],
        "cioc":"KIR"
     },
     {
        "name":"Marshall Islands",
        "topLevelDomain":[
           ".mh"
        ],
        "alpha2Code":"MH",
        "alpha3Code":"MHL",
        "callingCodes":[
           "692"
        ],
        "capital":"Majuro",
        "altSpellings":[
           "MH",
           "Republic of the Marshall Islands",
           "Aolepān Aorōkin M̧ajeļ"
        ],
        "region":"Oceania",
        "subregion":"Micronesia",
        "population":54880,
        "latlng":[
           9.0,
           168.0
        ],
        "demonym":"Marshallese",
        "id":181.0,
        "gini":null,
        "timezones":[
           "UTC+12:00"
        ],
        "borders":[

        ],
        "nativeName":"M̧ajeļ",
        "numericCode":"584",
        "currencies":[
           {
              "code":"USD",
              "name":"United States dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"mh",
              "iso639_2":"mah",
              "name":"Marshallese",
              "nativeName":"Kajin M̧ajeļ"
           }
        ],
        "translations":{
           "de":"Marshallinseln",
           "es":"Islas Marshall",
           "fr":"Îles Marshall",
           "ja":"マーシャル諸島",
           "it":"Isole Marshall",
           "br":"Ilhas Marshall",
           "pt":"Ilhas Marshall",
           "nl":"Marshalleilanden",
           "hr":"Maršalovi Otoci",
           "fa":"جزایر مارشال"
        },
        "flag":"https://restcountries.eu/data/mhl.svg",
        "regionalBlocs":[

        ],
        "cioc":"MHL"
     },
     {
        "name":"Micronesia (Federated States of)",
        "topLevelDomain":[
           ".fm"
        ],
        "alpha2Code":"FM",
        "alpha3Code":"FSM",
        "callingCodes":[
           "691"
        ],
        "capital":"Palikir",
        "altSpellings":[
           "FM",
           "Federated States of Micronesia"
        ],
        "region":"Oceania",
        "subregion":"Micronesia",
        "population":102800,
        "latlng":[
           6.91666666,
           158.25
        ],
        "demonym":"Micronesian",
        "id":702.0,
        "gini":null,
        "timezones":[
           "UTC+10:00",
           "UTC+11"
        ],
        "borders":[

        ],
        "nativeName":"Micronesia",
        "numericCode":"583",
        "currencies":[
           {
              "code":null,
              "name":"[D]",
              "symbol":"$"
           },
           {
              "code":"USD",
              "name":"United States dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Mikronesien",
           "es":"Micronesia",
           "fr":"Micronésie",
           "ja":"ミクロネシア連邦",
           "it":"Micronesia",
           "br":"Micronésia",
           "pt":"Micronésia",
           "nl":"Micronesië",
           "hr":"Mikronezija",
           "fa":"ایالات فدرال میکرونزی"
        },
        "flag":"https://restcountries.eu/data/fsm.svg",
        "regionalBlocs":[

        ],
        "cioc":"FSM"
     },
     {
        "name":"Nauru",
        "topLevelDomain":[
           ".nr"
        ],
        "alpha2Code":"NR",
        "alpha3Code":"NRU",
        "callingCodes":[
           "674"
        ],
        "capital":"Yaren",
        "altSpellings":[
           "NR",
           "Naoero",
           "Pleasant Island",
           "Republic of Nauru",
           "Ripublik Naoero"
        ],
        "region":"Oceania",
        "subregion":"Micronesia",
        "population":10084,
        "latlng":[
           -0.53333333,
           166.91666666
        ],
        "demonym":"Nauruan",
        "id":21.0,
        "gini":null,
        "timezones":[
           "UTC+12:00"
        ],
        "borders":[

        ],
        "nativeName":"Nauru",
        "numericCode":"520",
        "currencies":[
           {
              "code":"AUD",
              "name":"Australian dollar",
              "symbol":"$"
           },
           {
              "code":"(none)",
              "name":null,
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"na",
              "iso639_2":"nau",
              "name":"Nauruan",
              "nativeName":"Dorerin Naoero"
           }
        ],
        "translations":{
           "de":"Nauru",
           "es":"Nauru",
           "fr":"Nauru",
           "ja":"ナウル",
           "it":"Nauru",
           "br":"Nauru",
           "pt":"Nauru",
           "nl":"Nauru",
           "hr":"Nauru",
           "fa":"نائورو"
        },
        "flag":"https://restcountries.eu/data/nru.svg",
        "regionalBlocs":[

        ],
        "cioc":"NRU"
     },
     {
        "name":"New Caledonia",
        "topLevelDomain":[
           ".nc"
        ],
        "alpha2Code":"NC",
        "alpha3Code":"NCL",
        "callingCodes":[
           "687"
        ],
        "capital":"Nouméa",
        "altSpellings":[
           "NC"
        ],
        "region":"Oceania",
        "subregion":"Melanesia",
        "population":268767,
        "latlng":[
           -21.5,
           165.5
        ],
        "demonym":"New Caledonian",
        "id":18575.0,
        "gini":null,
        "timezones":[
           "UTC+11:00"
        ],
        "borders":[

        ],
        "nativeName":"Nouvelle-Calédonie",
        "numericCode":"540",
        "currencies":[
           {
              "code":"XPF",
              "name":"CFP franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Neukaledonien",
           "es":"Nueva Caledonia",
           "fr":"Nouvelle-Calédonie",
           "ja":"ニューカレドニア",
           "it":"Nuova Caledonia",
           "br":"Nova Caledônia",
           "pt":"Nova Caledónia",
           "nl":"Nieuw-Caledonië",
           "hr":"Nova Kaledonija",
           "fa":"کالدونیای جدید"
        },
        "flag":"https://restcountries.eu/data/ncl.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"New Zealand",
        "topLevelDomain":[
           ".nz"
        ],
        "alpha2Code":"NZ",
        "alpha3Code":"NZL",
        "callingCodes":[
           "64"
        ],
        "capital":"Wellington",
        "altSpellings":[
           "NZ",
           "Aotearoa"
        ],
        "region":"Oceania",
        "subregion":"Australia and New Zealand",
        "population":4697854,
        "latlng":[
           -41.0,
           174.0
        ],
        "demonym":"New Zealander",
        "id":270467.0,
        "gini":36.2,
        "timezones":[
           "UTC-11:00",
           "UTC-10:00",
           "UTC+12:00",
           "UTC+12:45",
           "UTC+13:00"
        ],
        "borders":[

        ],
        "nativeName":"New Zealand",
        "numericCode":"554",
        "currencies":[
           {
              "code":"NZD",
              "name":"New Zealand dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"mi",
              "iso639_2":"mri",
              "name":"Māori",
              "nativeName":"te reo Māori"
           }
        ],
        "translations":{
           "de":"Neuseeland",
           "es":"Nueva Zelanda",
           "fr":"Nouvelle-Zélande",
           "ja":"ニュージーランド",
           "it":"Nuova Zelanda",
           "br":"Nova Zelândia",
           "pt":"Nova Zelândia",
           "nl":"Nieuw-Zeeland",
           "hr":"Novi Zeland",
           "fa":"نیوزیلند"
        },
        "flag":"https://restcountries.eu/data/nzl.svg",
        "regionalBlocs":[

        ],
        "cioc":"NZL"
     },
     {
        "name":"Niue",
        "topLevelDomain":[
           ".nu"
        ],
        "alpha2Code":"NU",
        "alpha3Code":"NIU",
        "callingCodes":[
           "683"
        ],
        "capital":"Alofi",
        "altSpellings":[
           "NU"
        ],
        "region":"Oceania",
        "subregion":"Polynesia",
        "population":1470,
        "latlng":[
           -19.03333333,
           -169.86666666
        ],
        "demonym":"Niuean",
        "id":260.0,
        "gini":null,
        "timezones":[
           "UTC-11:00"
        ],
        "borders":[

        ],
        "nativeName":"Niuē",
        "numericCode":"570",
        "currencies":[
           {
              "code":"NZD",
              "name":"New Zealand dollar",
              "symbol":"$"
           },
           {
              "code":"(none)",
              "name":"Niue dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Niue",
           "es":"Niue",
           "fr":"Niue",
           "ja":"ニウエ",
           "it":"Niue",
           "br":"Niue",
           "pt":"Niue",
           "nl":"Niue",
           "hr":"Niue",
           "fa":"نیووی"
        },
        "flag":"https://restcountries.eu/data/niu.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"Norfolk Island",
        "topLevelDomain":[
           ".nf"
        ],
        "alpha2Code":"NF",
        "alpha3Code":"NFK",
        "callingCodes":[
           "672"
        ],
        "capital":"Kingston",
        "altSpellings":[
           "NF",
           "Territory of Norfolk Island",
           "Teratri of Norf'k Ailen"
        ],
        "region":"Oceania",
        "subregion":"Australia and New Zealand",
        "population":2302,
        "latlng":[
           -29.03333333,
           167.95
        ],
        "demonym":"Norfolk Islander",
        "id":36.0,
        "gini":null,
        "timezones":[
           "UTC+11:30"
        ],
        "borders":[

        ],
        "nativeName":"Norfolk Island",
        "numericCode":"574",
        "currencies":[
           {
              "code":"AUD",
              "name":"Australian dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Norfolkinsel",
           "es":"Isla de Norfolk",
           "fr":"Île de Norfolk",
           "ja":"ノーフォーク島",
           "it":"Isola Norfolk",
           "br":"Ilha Norfolk",
           "pt":"Ilha Norfolk",
           "nl":"Norfolkeiland",
           "hr":"Otok Norfolk",
           "fa":"جزیره نورفک"
        },
        "flag":"https://restcountries.eu/data/nfk.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"Northern Mariana Islands",
        "topLevelDomain":[
           ".mp"
        ],
        "alpha2Code":"MP",
        "alpha3Code":"MNP",
        "callingCodes":[
           "1670"
        ],
        "capital":"Saipan",
        "altSpellings":[
           "MP",
           "Commonwealth of the Northern Mariana Islands",
           "Sankattan Siha Na Islas Mariånas"
        ],
        "region":"Oceania",
        "subregion":"Micronesia",
        "population":56940,
        "latlng":[
           15.2,
           145.75
        ],
        "demonym":"American",
        "id":464.0,
        "gini":null,
        "timezones":[
           "UTC+10:00"
        ],
        "borders":[

        ],
        "nativeName":"Northern Mariana Islands",
        "numericCode":"580",
        "currencies":[
           {
              "code":"USD",
              "name":"United States dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"ch",
              "iso639_2":"cha",
              "name":"Chamorro",
              "nativeName":"Chamoru"
           }
        ],
        "translations":{
           "de":"Nördliche Marianen",
           "es":"Islas Marianas del Norte",
           "fr":"Îles Mariannes du Nord",
           "ja":"北マリアナ諸島",
           "it":"Isole Marianne Settentrionali",
           "br":"Ilhas Marianas",
           "pt":"Ilhas Marianas",
           "nl":"Noordelijke Marianeneilanden",
           "hr":"Sjevernomarijanski otoci",
           "fa":"جزایر ماریانای شمالی"
        },
        "flag":"https://restcountries.eu/data/mnp.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"Palau",
        "topLevelDomain":[
           ".pw"
        ],
        "alpha2Code":"PW",
        "alpha3Code":"PLW",
        "callingCodes":[
           "680"
        ],
        "capital":"Ngerulmud",
        "altSpellings":[
           "PW",
           "Republic of Palau",
           "Beluu er a Belau"
        ],
        "region":"Oceania",
        "subregion":"Micronesia",
        "population":17950,
        "latlng":[
           7.5,
           134.5
        ],
        "demonym":"Palauan",
        "id":459.0,
        "gini":null,
        "timezones":[
           "UTC+09:00"
        ],
        "borders":[

        ],
        "nativeName":"Palau",
        "numericCode":"585",
        "currencies":[
           {
              "code":"(none)",
              "name":"[E]",
              "symbol":"$"
           },
           {
              "code":"USD",
              "name":"United States dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Palau",
           "es":"Palau",
           "fr":"Palaos",
           "ja":"パラオ",
           "it":"Palau",
           "br":"Palau",
           "pt":"Palau",
           "nl":"Palau",
           "hr":"Palau",
           "fa":"پالائو"
        },
        "flag":"https://restcountries.eu/data/plw.svg",
        "regionalBlocs":[

        ],
        "cioc":"PLW"
     },
     {
        "name":"Papua New Guinea",
        "topLevelDomain":[
           ".pg"
        ],
        "alpha2Code":"PG",
        "alpha3Code":"PNG",
        "callingCodes":[
           "675"
        ],
        "capital":"Port Moresby",
        "altSpellings":[
           "PG",
           "Independent State of Papua New Guinea",
           "Independen Stet bilong Papua Niugini"
        ],
        "region":"Oceania",
        "subregion":"Melanesia",
        "population":8083700,
        "latlng":[
           -6.0,
           147.0
        ],
        "demonym":"Papua New Guinean",
        "id":462840.0,
        "gini":50.9,
        "timezones":[
           "UTC+10:00"
        ],
        "borders":[
           "IDN"
        ],
        "nativeName":"Papua Niugini",
        "numericCode":"598",
        "currencies":[
           {
              "code":"PGK",
              "name":"Papua New Guinean kina",
              "symbol":"K"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Papua-Neuguinea",
           "es":"Papúa Nueva Guinea",
           "fr":"Papouasie-Nouvelle-Guinée",
           "ja":"パプアニューギニア",
           "it":"Papua Nuova Guinea",
           "br":"Papua Nova Guiné",
           "pt":"Papua Nova Guiné",
           "nl":"Papoea-Nieuw-Guinea",
           "hr":"Papua Nova Gvineja",
           "fa":"پاپوآ گینه نو"
        },
        "flag":"https://restcountries.eu/data/png.svg",
        "regionalBlocs":[

        ],
        "cioc":"PNG"
     },
     {
        "name":"Pitcairn",
        "topLevelDomain":[
           ".pn"
        ],
        "alpha2Code":"PN",
        "alpha3Code":"PCN",
        "callingCodes":[
           "64"
        ],
        "capital":"Adamstown",
        "altSpellings":[
           "PN",
           "Pitcairn Henderson Ducie and Oeno Islands"
        ],
        "region":"Oceania",
        "subregion":"Polynesia",
        "population":56,
        "latlng":[
           -25.06666666,
           -130.1
        ],
        "demonym":"Pitcairn Islander",
        "id":47.0,
        "gini":null,
        "timezones":[
           "UTC-08:00"
        ],
        "borders":[

        ],
        "nativeName":"Pitcairn Islands",
        "numericCode":"612",
        "currencies":[
           {
              "code":"NZD",
              "name":"New Zealand dollar",
              "symbol":"$"
           },
           {
              "code":null,
              "name":"Pitcairn Islands dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Pitcairn",
           "es":"Islas Pitcairn",
           "fr":"Îles Pitcairn",
           "ja":"ピトケアン",
           "it":"Isole Pitcairn",
           "br":"Ilhas Pitcairn",
           "pt":"Ilhas Picárnia",
           "nl":"Pitcairneilanden",
           "hr":"Pitcairnovo otočje",
           "fa":"پیتکرن"
        },
        "flag":"https://restcountries.eu/data/pcn.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"Samoa",
        "topLevelDomain":[
           ".ws"
        ],
        "alpha2Code":"WS",
        "alpha3Code":"WSM",
        "callingCodes":[
           "685"
        ],
        "capital":"Apia",
        "altSpellings":[
           "WS",
           "Independent State of Samoa",
           "Malo Saʻoloto Tutoʻatasi o Sāmoa"
        ],
        "region":"Oceania",
        "subregion":"Polynesia",
        "population":194899,
        "latlng":[
           -13.58333333,
           -172.33333333
        ],
        "demonym":"Samoan",
        "id":2842.0,
        "gini":null,
        "timezones":[
           "UTC+13:00"
        ],
        "borders":[

        ],
        "nativeName":"Samoa",
        "numericCode":"882",
        "currencies":[
           {
              "code":"WST",
              "name":"Samoan tālā",
              "symbol":"T"
           }
        ],
        "languages":[
           {
              "iso639_1":"sm",
              "iso639_2":"smo",
              "name":"Samoan",
              "nativeName":"gagana fa'a Samoa"
           },
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Samoa",
           "es":"Samoa",
           "fr":"Samoa",
           "ja":"サモア",
           "it":"Samoa",
           "br":"Samoa",
           "pt":"Samoa",
           "nl":"Samoa",
           "hr":"Samoa",
           "fa":"ساموآ"
        },
        "flag":"https://restcountries.eu/data/wsm.svg",
        "regionalBlocs":[

        ],
        "cioc":"SAM"
     },
     {
        "name":"Solomon Islands",
        "topLevelDomain":[
           ".sb"
        ],
        "alpha2Code":"SB",
        "alpha3Code":"SLB",
        "callingCodes":[
           "677"
        ],
        "capital":"Honiara",
        "altSpellings":[
           "SB"
        ],
        "region":"Oceania",
        "subregion":"Melanesia",
        "population":642000,
        "latlng":[
           -8.0,
           159.0
        ],
        "demonym":"Solomon Islander",
        "id":28896.0,
        "gini":null,
        "timezones":[
           "UTC+11:00"
        ],
        "borders":[

        ],
        "nativeName":"Solomon Islands",
        "numericCode":"090",
        "currencies":[
           {
              "code":"SBD",
              "name":"Solomon Islands dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Salomonen",
           "es":"Islas Salomón",
           "fr":"Îles Salomon",
           "ja":"ソロモン諸島",
           "it":"Isole Salomone",
           "br":"Ilhas Salomão",
           "pt":"Ilhas Salomão",
           "nl":"Salomonseilanden",
           "hr":"Solomonski Otoci",
           "fa":"جزایر سلیمان"
        },
        "flag":"https://restcountries.eu/data/slb.svg",
        "regionalBlocs":[

        ],
        "cioc":"SOL"
     },
     {
        "name":"Tokelau",
        "topLevelDomain":[
           ".tk"
        ],
        "alpha2Code":"TK",
        "alpha3Code":"TKL",
        "callingCodes":[
           "690"
        ],
        "capital":"Fakaofo",
        "altSpellings":[
           "TK"
        ],
        "region":"Oceania",
        "subregion":"Polynesia",
        "population":1411,
        "latlng":[
           -9.0,
           -172.0
        ],
        "demonym":"Tokelauan",
        "id":12.0,
        "gini":null,
        "timezones":[
           "UTC+13:00"
        ],
        "borders":[

        ],
        "nativeName":"Tokelau",
        "numericCode":"772",
        "currencies":[
           {
              "code":"NZD",
              "name":"New Zealand dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Tokelau",
           "es":"Islas Tokelau",
           "fr":"Tokelau",
           "ja":"トケラウ",
           "it":"Isole Tokelau",
           "br":"Tokelau",
           "pt":"Toquelau",
           "nl":"Tokelau",
           "hr":"Tokelau",
           "fa":"توکلائو"
        },
        "flag":"https://restcountries.eu/data/tkl.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     },
     {
        "name":"Tonga",
        "topLevelDomain":[
           ".to"
        ],
        "alpha2Code":"TO",
        "alpha3Code":"TON",
        "callingCodes":[
           "676"
        ],
        "capital":"Nuku'alofa",
        "altSpellings":[
           "TO"
        ],
        "region":"Oceania",
        "subregion":"Polynesia",
        "population":103252,
        "latlng":[
           -20.0,
           -175.0
        ],
        "demonym":"Tongan",
        "id":747.0,
        "gini":null,
        "timezones":[
           "UTC+13:00"
        ],
        "borders":[

        ],
        "nativeName":"Tonga",
        "numericCode":"776",
        "currencies":[
           {
              "code":"TOP",
              "name":"Tongan paʻanga",
              "symbol":"T$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"to",
              "iso639_2":"ton",
              "name":"Tonga (Tonga Islands)",
              "nativeName":"faka Tonga"
           }
        ],
        "translations":{
           "de":"Tonga",
           "es":"Tonga",
           "fr":"Tonga",
           "ja":"トンガ",
           "it":"Tonga",
           "br":"Tonga",
           "pt":"Tonga",
           "nl":"Tonga",
           "hr":"Tonga",
           "fa":"تونگا"
        },
        "flag":"https://restcountries.eu/data/ton.svg",
        "regionalBlocs":[

        ],
        "cioc":"TGA"
     },
     {
        "name":"Tuvalu",
        "topLevelDomain":[
           ".tv"
        ],
        "alpha2Code":"TV",
        "alpha3Code":"TUV",
        "callingCodes":[
           "688"
        ],
        "capital":"Funafuti",
        "altSpellings":[
           "TV"
        ],
        "region":"Oceania",
        "subregion":"Polynesia",
        "population":10640,
        "latlng":[
           -8.0,
           178.0
        ],
        "demonym":"Tuvaluan",
        "id":26.0,
        "gini":null,
        "timezones":[
           "UTC+12:00"
        ],
        "borders":[

        ],
        "nativeName":"Tuvalu",
        "numericCode":"798",
        "currencies":[
           {
              "code":"AUD",
              "name":"Australian dollar",
              "symbol":"$"
           },
           {
              "code":"TVD[G]",
              "name":"Tuvaluan dollar",
              "symbol":"$"
           }
        ],
        "languages":[
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           }
        ],
        "translations":{
           "de":"Tuvalu",
           "es":"Tuvalu",
           "fr":"Tuvalu",
           "ja":"ツバル",
           "it":"Tuvalu",
           "br":"Tuvalu",
           "pt":"Tuvalu",
           "nl":"Tuvalu",
           "hr":"Tuvalu",
           "fa":"تووالو"
        },
        "flag":"https://restcountries.eu/data/tuv.svg",
        "regionalBlocs":[

        ],
        "cioc":"TUV"
     },
     {
        "name":"Vanuatu",
        "topLevelDomain":[
           ".vu"
        ],
        "alpha2Code":"VU",
        "alpha3Code":"VUT",
        "callingCodes":[
           "678"
        ],
        "capital":"Port Vila",
        "altSpellings":[
           "VU",
           "Republic of Vanuatu",
           "Ripablik blong Vanuatu",
           "République de Vanuatu"
        ],
        "region":"Oceania",
        "subregion":"Melanesia",
        "population":277500,
        "latlng":[
           -16.0,
           167.0
        ],
        "demonym":"Ni-Vanuatu",
        "id":12189.0,
        "gini":null,
        "timezones":[
           "UTC+11:00"
        ],
        "borders":[

        ],
        "nativeName":"Vanuatu",
        "numericCode":"548",
        "currencies":[
           {
              "code":"VUV",
              "name":"Vanuatu vatu",
              "symbol":"Vt"
           }
        ],
        "languages":[
           {
              "iso639_1":"bi",
              "iso639_2":"bis",
              "name":"Bislama",
              "nativeName":"Bislama"
           },
           {
              "iso639_1":"en",
              "iso639_2":"eng",
              "name":"English",
              "nativeName":"English"
           },
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Vanuatu",
           "es":"Vanuatu",
           "fr":"Vanuatu",
           "ja":"バヌアツ",
           "it":"Vanuatu",
           "br":"Vanuatu",
           "pt":"Vanuatu",
           "nl":"Vanuatu",
           "hr":"Vanuatu",
           "fa":"وانواتو"
        },
        "flag":"https://restcountries.eu/data/vut.svg",
        "regionalBlocs":[

        ],
        "cioc":"VAN"
     },
     {
        "name":"Wallis and Futuna",
        "topLevelDomain":[
           ".wf"
        ],
        "alpha2Code":"WF",
        "alpha3Code":"WLF",
        "callingCodes":[
           "681"
        ],
        "capital":"Mata-Utu",
        "altSpellings":[
           "WF",
           "Territory of the Wallis and Futuna Islands",
           "Territoire des îles Wallis et Futuna"
        ],
        "region":"Oceania",
        "subregion":"Polynesia",
        "population":11750,
        "latlng":[
           -13.3,
           -176.2
        ],
        "demonym":"Wallis and Futuna Islander",
        "id":142.0,
        "gini":null,
        "timezones":[
           "UTC+12:00"
        ],
        "borders":[

        ],
        "nativeName":"Wallis et Futuna",
        "numericCode":"876",
        "currencies":[
           {
              "code":"XPF",
              "name":"CFP franc",
              "symbol":"Fr"
           }
        ],
        "languages":[
           {
              "iso639_1":"fr",
              "iso639_2":"fra",
              "name":"French",
              "nativeName":"français"
           }
        ],
        "translations":{
           "de":"Wallis und Futuna",
           "es":"Wallis y Futuna",
           "fr":"Wallis-et-Futuna",
           "ja":"ウォリス・フツナ",
           "it":"Wallis e Futuna",
           "br":"Wallis e Futuna",
           "pt":"Wallis e Futuna",
           "nl":"Wallis en Futuna",
           "hr":"Wallis i Fortuna",
           "fa":"والیس و فوتونا"
        },
        "flag":"https://restcountries.eu/data/wlf.svg",
        "regionalBlocs":[

        ],
        "cioc":""
     }
    ];

    return { asia, europe, africa, oceania };
  }

}
