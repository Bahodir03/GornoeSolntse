<template>
    <div>
        <nav id="header-main">
            <nav class="header">
                <div class="header2">
                    <div>
                    <span class="navbar">
                        <p>ГОРНОЕ СОЛНЦЕ</p>

                        <ul>
                            <li class="first">
                                <a href="#layout">Планирование</a>
                        </li>
                            <li class="second">
                                <a href="#peculiarity">Особенности</a>
                        </li>
                            <li class="sort">
                                <a href="#complex">О комплексе</a>
                            </li>
                        </ul>
                        <button class="btn"><p>Позвонить</p></button>
                    </span>
                    </div>
                </div>
                <nav class="header-img">

                </nav>
                <div class="down-header">

                </div>
                <div class="down-img">

                </div>
                <div class="col down-page" id="complex">
                    <p class="first-p">
                        О комплексе
                    </p>
                    <p class="second-p">
                        Создавая ваше <br/>
                        настроение
                    </p>
                    <p class="sort-p">
                        Жилой комплекс &lsaquo;&lsaquo;Горное Солнце&rsaquo;&rsaquo; -<br/>
                        дом, где всё сделано с умом
                    </p>

                    <img src="./img/Group10.png" alt="..." class="img1"/>
                    <img src="./img/Group8.png" alt="..." class="img2"/>
                    <img src="./img/Group11.png" alt="..." class="img3"/>
                    <img src="./img/Group16.png" alt="..." class="img4"/>
                    <div>
                        <button @click="app"><p>Подробнее</p></button>
                    </div>


                </div>
                <div class="col down-page1">
                    <img src="./img/Rectangle6.png" alt="..." class="Rectangle1"/>
                    <img src="./img/Rectangle5.png" alt="..." class="Rectangle2"/>
                </div>
                <div class="row">
                    <div class="col down-page2">
                        <img src="./img/Rectangle8(1).png" alt="..." class="Rectangle8"/>
                        <img src="./img/Rectangle7.png" alt="..." class="Rectangle7"/>
                    </div>
                    <div class="col down-page2-1">
                        <p class="first-p">
                            Месторасположение
                        </p>
                        <p class="second-p">
                            Необходимое - <br/>
                            рядом
                        </p>
                        <p class="progress">
                            <!--                        <img src="./img/Group54.png" alt="..." class="progress"/>-->
                        </p>

                        <p class="sort-p">
                            Жилой комплекс &lsaquo;&lsaquo;Горное Солнце&rsaquo;&rsaquo; <br/>
                            расположен в <br/>
                            микрорайоне Баганашыл, выше <br/>
                            проспект Аль-Фараби. <br/>
                            Там, где есть всё для комфортной жизни!
                        </p>

                        <img src="./img/Group20.png" alt="..." class="arrowLeft arrow"/>
                        <img src="./img/Group19.png" alt="..." class="arrowRight arrow"/>

                        <div>
                            <button @click="app"><p>Открыть карту</p></button>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col down-page2-2">
                        <p>Яндекс карта</p>
                    </div>
                </div>

                <div class="row">
                    <div id="map" style="position:relative;overflow:hidden;"><a
                        href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                        style="color:#eee;font-size:12px;position:absolute;top:0px;">Ташкент</a>
                        <a
                            href="https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&utm_medium=mapframe&utm_source=maps&z=12"
                            style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты — транспорт,
                            навигация,
                            поиск мест</a>
                        <iframe src="https://yandex.uz/map-widget/v1/-/CCtA5~r" width="1600" height="552"
                                frameborder="1"
                                allowfullscreen="true" style="position:relative;"></iframe>

                    </div>
                </div>

                <div class="row" id="peculiarity">
                    <div class="col down-page2-4-1">
                        <p>Особенности</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col down-page2-4-2">
                        <p>
                            Технологии <br>
                            строительства
                        </p>
                    </div>
                </div>

                <!--            down-page2-4-3-->
                <div class="row">
                    <div class="col down-page2-4-3">
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="./img/Carusel-home1.png" class="d-block w-70" alt="...">
                                </div>
                                <!--                            <div class="carousel-item">-->
                                <!--                                <img src="..." class="d-block w-100" alt="...">-->
                                <!--                            </div>-->
                                <!--                            <div class="carousel-item">-->
                                <!--                                <img src="..." class="d-block w-100" alt="...">-->
                                <!--                            </div>-->
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                    data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>

                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                    data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <!--            down-page2-4-4-->
                <div class="row">
                    <div class="col down-page2-4-4">
                        <img src="./img/Rectangle9.png" alt="..."/>
                    </div>
                </div>

                <!--            down-page2-5-1-->
                <div class="row">
                    <div class="col down-page2-5-1">
                        <p>Особенности</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col down-page2-5-2">
                        <p>
                            Придуманное <br>
                            пространствао
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col down-page2-5-3">
                        <p>
                            Во дворе жилого комплекса «Горное Солнце» царит тихая, спокойная и гармоничная<br>
                            атмосфера. На просторной территории есть детская площадка и уютная зона для <br>
                            вечернего отдыха, где после суетливого дня можно отдохнуть и расслабиться в кругу семьи.<br><br><br>
                            Жилой комплекс состоит из четырех четырехэтажных домов, на каждом этаже <br>
                            располагается по 5 квартир. Все подъезды оснащены лифтом.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="down-page2-5-4" id="layout">
                        <button @click="plan = true"><p>Выбрать дом</p></button>
                        <img src="./img/Rectangle10.png" alt="..." class="rectangle"/>
                    </div>

                </div>
            </nav>
        </nav>
        <!--           down-page2-6  планировка-->
        <nav id="header-main2" v-if="plan">
            <div class="row down-page2-6">
                <div class="col-6 down-page2-6-1">
                    <div class="row">
                        <div class="col down-page2-6-1-1">
                            <p>Планировка</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4 down-page2-6-1-2-1">
                            <div class="custom-select">
                                <select v-model="floor" @change="floors()"><!-- -->
                                    <option
                                        v-for="roomEntrance in getEntrance"
                                        v-bind:key="roomEntrance.id"
                                        :value="roomEntrance.entran"
                                    >{{ roomEntrance.entran }}й подъезд
                                    </option>

                                </select>
                            </div>
                        </div>
                        <div class="col-4 down-page2-6-1-2-1-2">
                            <div class="custom-select2">
                                <select v-model="room" @change="rooms">
                                    <option
                                        v-for="roomFloors in getFloors"
                                        :key="roomFloors.id"
                                        :value="roomFloors.floorNumber"
                                    >
                                        {{ roomFloors.floorNumber }}й этаж
                                    </option>
                                </select>

                            </div>

                        </div>
                        <div class="col-4 down-page2-6-1-2-1-3 ">
                            <div class="custom-select3">
                                <select v-model="roomId" @change="roomFloor">
                                    <option
                                        v-for="rooms in getRoom"
                                        :key="rooms.id"
                                        :value="rooms.roomNumber"
                                    >Квартира #{{ rooms.roomNumber }}
                                    </option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row"
                         v-for="infoRoom in getRoomsPlan"
                         :key="infoRoom.id"
                    >
                        <div class="col down-page2-6-1-3-1">
                            <p v-if="infoRoom.id">Количество комнат
                            </p>
                        </div>
                        <div class="col down-page2-6-1-3-2">
                            <p>
                                {{ infoRoom.roomPlan.amountRoom }} комнатный
                            </p>
                        </div>
                    </div>
                    <div
                        v-for="infoRoom in getRoomsPlan"
                        :key="infoRoom.id"
                    >
                        <div class="row">
                            <div class="col down-page2-6-1-4-1">
                                <p v-if="infoRoom.id">Площадь квартиры</p>
                            </div>
                            <div class="col down-page2-6-1-4-2"
                            >
                                <p>{{ infoRoom.roomPlan.square }}м&#178;
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col down-page2-6-1-5-1">
                                <p v-if="infoRoom.roomPlan.isSale">Продано</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col down-page2-6-1-6">
                                <hr v-if="infoRoom.roomPlan.isSale === false" class="hr"/>
                            </div>
                        </div>
                    </div>
                    <div
                        v-for="infoRoom in getRoomsPlan"
                        :key="infoRoom.id">
                        <div class="row" v-if="infoRoom.roomPlan.isSale === false">
                            <div class="col down-page2-6-1-7">
                                <p>Понравилась квартира?</p>
                            </div>
                        </div>
                        <div class="row" v-if="infoRoom.roomPlan.isSale === false">
                            <div class="col down-page2-6-1-8">
                                <p>Хотите узнать стоимость?<br/>
                                    Отправьте заявку, и мы сразу <br/>
                                    перезвоним!</p>
                            </div>
                        </div>
                        <div class="row" v-if="infoRoom.roomPlan.isSale === false">
                            <ul class="down-page2-6-1-9">
                                <li>
                                    <a href="#zayavka">Оставить заявку</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-6 down-page2-6-2" v-if="roomId">
                    <img src="./img/Layout.png" alt="..."/>
                </div>
            </div>
        </nav>
        <nav id="header-main3">
            <!--            down-page2-7-->
            <div class="row">
                <div class="col down-page2-7-1">
                    <p class="first-p">
                        Интерьерные решения
                    </p>
                    <p class="second-p">
                        Чистовая отделка<br/>
                        европейского <br/>
                        качества
                    </p>
                    <p class="sort-p">
                        У нас никто не будет сверлить за стеной с ночи и до утра - все <br>
                        квартиры в чистовой отделке. При этом мы гарантируем качество!<br>
                        Большинство строительных и отделочных материалов производятся<br>
                        в Италии, Франции, Германии и других европейских странах.<br>
                    </p>
                </div>
                <div class="col down-page2-7-2">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="./img/Rectangle6.png" class="d-block w-10 img1" alt="...">
                                <img src="./img/Rectangle5.png" class="d-block w-10 img2" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>

                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <!--           down-page2-8 -->
            <div class="row">
                <div class="col down-page2-8-1">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="./img/Rectangle6.png" class="d-block w-10 img1" alt="...">
                                <img src="./img/Rectangle8.png" class="d-block w-10 img2" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>

                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col down-page2-8-2">
                    <p class="first-p">
                        Интерьерные решения
                    </p>
                    <p class="second-p">
                        Авторский дизайн <br/>
                        на заказ <br/>
                    </p>
                    <p class="sort-p">
                        Если вы хотите сэкономить свое время и душевное<br>
                        равновесие, при покупке квартиры вы можете дополнительно<br>
                        заказать ремонт исключительного качества: авторский<br>
                        дизайн интерьера, строительные и отделочные материалы,<br>
                        сантехника и кухни европейского качества<br>
                    </p>
                </div>
            </div>

            <!--            down-page2-9-->
            <div class="row">
                <div class="col-12 down-page2-9-1">
                    <p>
                        О застройщике
                    </p>
                </div>
                <div class="col-12 down-page2-9-2">
                    <p>
                        Застройщик жилого комплекса «Горное Солнце» - жилищно-строительный кооператив «Таулы Аспан».<br>
                        Компания занимается строительством жилья с 1990-х годов. В истории их проектов жилые
                        комплексы<br>
                        «White Fort» и «Фаворит», частные коттеджи и коммерческие объекты.<br>
                    </p>
                </div>
            </div>

            <!--            down-page2-10-->
            <div id="zayavka" class="row down-page2-10">
                <div class="col-6">
                    <div class="row">
                        <div class="col-12 down-page2-10-1-1">
                            <p>
                                Форма заявки
                            </p>
                        </div>
                        <div class="col-12 down-page2-10-1-2">
                            <p>
                                Хотите узнать стоимость?<br>
                                Отправьте заявку, и мы сразу перезвоним!
                            </p>
                        </div>
                        <form @submit.prevent="consumer()">
                            <div class="col-12 down-page2-10-1-3">
                                <input type="text" v-model="consumerRequest.givenName" class="input1"
                                       placeholder="Ваше имя"/>
                            </div>
                            <div class="col-12 down-page2-10-1-4">
                                <input type="text" v-model="consumerRequest.phoneNumber" class="input1"
                                       placeholder="Номер телефона"
                                />
                            </div>
                            <div class="col-12 down-page2-10-1-5">
                                <button @click="submit"><p>Отпраить заявку</p></button>
                            </div>
                        </form>

                    </div>

                </div>
                <div class="col-6 down-page2-10-2">
                    <img src="./img/Rectangle21.png" alt="..."/>
                </div>
            </div>

            <!--        footer-->
        </nav>
        <nav class="footer">
            <div class="row">
                <div class="col-1 footer1">
                    <img src="./img/image8.png" alt="...">
                </div>
                <div class="col footer2">
                    <div class="row">
                        <div class="col footer2-1">
                            <a href="/">О нас</a>
                        </div>
                        <div class="col footer2-2">
                            <p>Жилой комплекс «Горное Солнце»<br>
                                находится в одном из лучших и<br>
                                экологически чистых районов Алматы,
                            </p>
                        </div>
                    </div>

                </div>
                <div class="col footer3">
                    <a class="footer3-1">
                        Карта сайта
                    </a>
                    <ul>
                        <li>
                            <a href="/">
                                О комплексе
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Особенности
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Планировка
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Политика конфеденциальности
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col footer4">
                    <p class="footer4-1">
                        Связаться с нами
                    </p>
                    <p class="footer4-2">
                        Алматы, пр. Аль-Фараби, 144
                        sales@gornoesolnce.kz
                    </p>
                    <a><img src="./img/Group61.png"></a>
                    <a class="footer4-img2"><img src="./img/Group62.png"></a>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>


import {mapActions, mapGetters} from "vuex";

export default {
    name: "JK_Page1",
    components: {},
    data() {
        return {
            consumerRequest: {
                givenName: '',
                phoneNumber: '',
            },
            floor: "",
            floor2: "",
            room: "",
            room2: "",
            roomId: "",
            plan: false,
        }
    },
    methods: {
        ...mapActions(['fetchConsumer', 'fetchEntrance', 'fetchFloors', 'fetchRoom', 'fetchRoomsPlan']),
        consumer() {
            this.fetchConsumer(this.consumerRequest)
                .then(() => {

                    this.consumerRequest.givenName = ""
                    this.consumerRequest.phoneNumber = ""
                })
                .catch(() => {
                    console.log('consumer da xato')
                })
        },
        floors() {
            this.floor2 = this.floor
            this.fetchFloors(this.floor)
        },
        rooms() {
            this.room2 = this.room
            this.fetchRoom('?page=1&roomEntrance=' + this.floor2 + '&roomFloor=' + this.room2)
        },
        roomFloor() {
            this.fetchRoomsPlan('?page=1&roomEntrance=' + this.floor2 + '&roomFloor=' + this.room2 + '&id=' + this.roomId)
        },

    },
    mounted() {
        this.fetchEntrance()
    },
    computed: {
        ...mapGetters(['getEntrance', 'getFloors', 'getRoom', 'getRoomsPlan'])
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html {
    scroll-behavior: smooth;
}

#header-main {
    width: 1920px;
    height: 6736px;

    background: #149778;
}

.header {
    background-image: url("img/Group1.png");
    width: 1920px;
    height: 918px;
}

.header2 {
    height: 192px;
    left: 0px;
    top: 0px;

    background: linear-gradient(180deg, rgba(210, 32, 48, 0.29) 0%, rgba(210, 32, 48, 0) 100%);
}

.navbar {
    position: fixed;
    width: 100%;
    transition: all .3s ease;
    z-index: 999;
}

.navbar p {
    margin-left: 180px;

    float: left;
    width: 240px;
    height: 29px;
    left: 180px;
    top: 55px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-transform: uppercase;

    color: #FFFFFF;
}

.navbar ul li {
    list-style-type: none;
    display: inline;
    float: right;
    padding: 60px;

    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

}

.navbar ul li a {
    text-decoration: none;
    color: #FFFFFF;
}

.navbar button {
    margin-right: 161px;

    width: 239px;
    height: 64px;
    left: 1520px;
    top: 38px;

    border: 2px solid #FFFFFF;
}

.navbar button p {
    margin-top: 10px;
    margin-left: 35px;

    width: 133px;
    height: 29px;
    left: 1573px;
    top: 55px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */


    color: #FFFFFF;

}

.header-img {
    width: 452px;
    height: 289px;
    left: 734px;
    top: 338px;
    margin-top: 176px;
    margin-left: 734px;
    background-image: url("img/image2.png");
}

.down-header {
    margin-top: 75px;
    height: 273px;
    left: -622px;
    top: 702px;

    background: linear-gradient(180deg, rgba(20, 151, 120, 0) 11.45%, #149778 58.73%);
}


/* down-img */
.down-img {
    margin-top: -138px;
    margin-left: 855px;
    background-image: url("img/Group24.png");
    width: 211px;
    height: 211px;
    left: 855px;
    top: 840px;
}

/* down-page */
.down-page {
    margin-top: 160px;
}

.down-page .first-p {
    margin-left: 167px;
    width: 161px;
    height: 29px;
    left: 167px;
    top: 1211px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */


    color: #FFFFFF;
}

.down-page .second-p {
    margin-top: 5px;
    margin-left: 160px;

    width: 808px;
    height: 156px;
    left: 160px;
    top: 1245px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 82px;
    line-height: 78px;

    color: #FFFFFF;
}

.down-page .sort-p {
    margin-top: 50px;
    margin-left: 167px;

    width: 617px;
    height: 76px;
    left: 167px;
    top: 1451px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;

    color: #FFFFFF;
}

.down-page .img1 {
    margin-top: 50px;
    margin-left: 173px;
}

.down-page .img2 {
    margin-top: 50px;
    margin-left: 40px;
}

.down-page .img3 {
    margin-top: 50px;
    margin-left: 40px;
}

.down-page .img4 {
    margin-top: 50px;
    margin-left: 40px;
}

.down-page button {
    margin-top: 50px;
    margin-left: 160px;

    width: 336px;
    height: 90px;
    left: 160px;
    top: 1754px;

    background-color: #149778;
    border: 2px solid #FFFFFF;
}

.down-page button p {
    width: 187px;
    height: 38px;
    left: 235px;
    top: 1780px;
    margin-top: 26px;
    margin-left: 75px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;

    color: #FFFFFF;
}

.down-page1 {
    margin-top: -662.5px;
    margin-left: 1147px;
}

.down-page1 .Rectangle2 {
    margin-top: -700px;
    margin-left: 50px;
}

/* down-page2 */
.down-page2 {
    margin-top: 214px;
    margin-left: 163px;
}

.down-page2 .Rectangle7 {
    margin-left: -540px;
}

/* down-page2-1*/
.down-page2-1 {
    margin-top: 202.67px;
}

.down-page2-1 .first-p {
    width: 262px;
    height: 29px;
    left: 850px;
    top: 2060.95px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */


    color: #FFFFFF;
}

.down-page2-1 .second-p {
    width: 808px;
    height: 156px;
    left: 843px;
    top: 2094.95px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 82px;
    line-height: 78px;

    color: #FFFFFF;
}

.down-page2-1 .progress {
    margin-top: 50px;
}

.down-page2-1 .sort-p {
    width: 727px;
    height: 190px;
    left: 850px;
    top: 2328.95px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;

    color: #FFFFFF;
}

.down-page2-1 .arrow {
    margin-top: 38px;
}

.down-page2-1 .arrowRight {
    margin-left: 30px;
}

.down-page2-1 button {
    margin-top: 50px;
    margin-left: 0;

    width: 336px;
    height: 90px;
    left: 160px;
    top: 1754px;

    background-color: #149778;
    border: 2px solid #FFFFFF;
}

.down-page2-1 button p {
    width: 336px;
    height: 90px;
    left: 235px;
    top: 1780px;
    margin-top: 26px;
    margin-left: 0;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;

    color: #FFFFFF;
}

/* down-page2-2*/
.down-page2-2 p {
    margin-top: 200px;
    margin-left: 670px;

    width: 583px;
    height: 78px;
    left: 669px;
    top: 2993px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 82px;
    line-height: 78px;

    color: #FFFFFF;
}

#map {

    margin-left: 161px;
}

/* down-page2-3*/
.down-page2-3 img {
    margin-top: 80px;
    margin-left: 161px;

    width: 1599px;
    height: 552px;
    left: 161px;
    top: 3151px;

}

/* down-page2-4*/
.down-page2-4-1 {
    margin-top: 200px;
    margin-left: 877px;

    width: 166px;
    height: 29px;
    left: 877px;
    top: 3903px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */


    color: #FFFFFF;
}

.down-page2-4-2 {
    margin-top: 5px;

    width: 808px;
    height: 141px;
    left: 572px;
    top: 3937px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 82px;
    line-height: 78px;
    text-align: center;

    color: #FFFFFF;
}

.down-page2-4-3 img {
    margin-top: 80px;
    margin-left: 387px;

    width: 1146px;
    height: 764px;
    left: 387px;
    top: 4158px;
}

.down-page2-4-4 img {
    margin-top: -2%;
    margin-left: 540px;
}

/* down-page2-5*/
.down-page2-5-1 p {
    margin-top: 200px;
    margin-left: 877px;

    width: 166px;
    height: 29px;
    left: 877px;
    top: 5194px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */


    color: #FFFFFF;
}

.down-page2-5-2 p {
    margin-top: 5px;
    margin-left: 661px;

    width: 598px;
    height: 156px;
    left: 661px;
    top: 5228px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 82px;
    line-height: 78px;
    text-align: center;

    color: #FFFFFF;
}

.down-page2-5-3 p {
    margin-top: 50px;
    margin-left: 361px;

    width: 1197px;
    height: 174px;
    left: 361px;
    top: 5434px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;

    color: #FFFFFF;

}

.down-page2-5-4 {
    margin-top: 50px;
    margin-left: 315px;

    width: 1285px;
    height: 727px;
    left: 315px;
    top: 5688px;

    background-image: url("img/Group56.png");

}

.down-page2-5-4 .rectangle {
    margin-bottom: -48%;
    margin-left: 70px;
}

.down-page2-5-4 button {
    margin-top: 324px;
    margin-left: 482px;

    width: 312px;
    height: 88px;
    left: 802px;
    top: 6016px;

    background: #1BB18E;
}

.down-page2-5-4 button p {
    margin-top: 10px;
    margin-left: 74px;

    width: 164px;
    height: 29px;
    left: 876px;
    top: 6046px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */


    color: #FFFFFF;
}

/* down-page2-6*/
#header-main2 {
    width: 1920px;
    height: 1202px;
    background: #149778;
}

.down-page2-6-1-1 p {
    margin-left: 160px;

    width: 520px;
    height: 78px;
    left: 160px;
    top: 6671px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 82px;
    line-height: 95.5%;
    /* or 78px */

    text-align: center;

    color: #FFFFFF;

}

.down-page2-6-1-2-1 select {
    margin-top: 50px;
    margin-left: 210px;

    height: 91px;

    background-color: #149778;
    border: 2px solid #FFFFFF;
}

.down-page2-6-1-2-1 .custom-select select {
    width: 214px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 95.5%;
    /* identical to box height, or 31px */

    text-align: center;

    color: #FFFFFF;
}

.down-page2-6-1-2-1-2 select {
    margin-top: 50px;
    margin-left: 120px;

    height: 91px;

    background-color: #149778;
    border: 2px solid #FFFFFF;
}

.down-page2-6-1-2-1-2 .custom-select2 select {
    width: 240px;


    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 95.5%;
    /* identical to box height, or 31px */

    text-align: center;

    color: #FFFFFF;
}

.down-page2-6-1-2-1-3 select {
    margin-top: 50px;
    margin-left: 50px;

    height: 91px;

    background-color: #149778;
    border: 2px solid #FFFFFF;
}

.down-page2-6-1-2-1-3 .custom-select3 select {
    width: 327px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 95.5%;
    /* identical to box height, or 31px */

    text-align: center;

    color: #FFFFFF;
}

.down-page2-6-1-3-1 p {
    margin-top: 74px;
    margin-left: 206px;

    width: 333px;
    height: 38px;
    left: 206px;
    top: 6964px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    text-align: center;

    color: #FFFFFF;
}

.down-page2-6-1-3-2 p {
    margin-top: 74px;
    margin-left: 200px;

    width: 184px;
    height: 38px;
    left: 868px;
    top: 6964px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    text-align: center;

    color: #FFFFFF;
}

.down-page2-6-1-4-1 p {
    margin-top: 5px;
    margin-left: 210px;

    width: 325px;
    height: 38px;
    left: 210px;
    top: 7007px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    text-align: center;

    color: #FFFFFF;
}

.down-page2-6-1-4-2 p {
    margin-top: 5px;
    margin-left: 230px;

    width: 146px;
    height: 30px;
    left: 906px;
    top: 7007px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    text-align: center;

    color: #FFFFFF;
}

.down-page2-6-1-5-1 p {
    margin-top: 30px;
    margin-left: 206px;

    width: 146px;
    height: 38px;
    left: 206px;
    top: 7075px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;

    color: #8F131E;

}

.down-page2-6-1-6 hr {
    margin-top: 50px;
    margin-left: 160px;

    width: 920px;
    box-sizing: border-box;

    border: 2px solid #FFFFFF
}

.down-page2-6-1-7 p {
    margin-top: 30px;
    margin-left: 175px;

    width: 418px;
    height: 38px;
    left: 206px;
    top: 7193px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;

    color: #FFFFFF;
}

.down-page2-6-1-8 p {
    margin-top: 5px;
    margin-left: 206px;

    width: 433px;
    height: 87px;
    left: 206px;
    top: 7236px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;

    color: #FFFFFF;
}

.down-page2-6-1-9 {
    margin-top: 50px;
    margin-left: 160px;

    width: 376px;
    height: 91px;

    background-color: #149778;
    border: 2px solid #FFFFFF;
}

.down-page2-6-1-9 li {
    margin-top: 24px;

    list-style-type: none;
    width: 351.5px;
    height: 31px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 95.5%;
    /* identical to box height, or 31px */

    text-align: center;

    color: #FFFFFF;
}

.down-page2-6-1-9 li a {

    text-decoration: none;
    color: #FFFFFF;
}

.down-page2-6-2 img {
    padding-top: 50px;
    float: right;
    padding-right: 161px;

    width: 593px;
    height: 673px;
}


/* down-page2-7*/
#header-main3 {
    width: 1920px;
    height: 3302px;

    background: #149778;
}

.down-page2-7-1 .first-p {
    margin-left: 160px;

    width: 297px;
    height: 58px;
    left: 160px;
    top: 7750px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    color: #FFFFFF;
}

.down-page2-7-1 .second-p {
    margin-top: 5px;
    margin-left: 160px;

    width: 801px;
    height: 234px;
    left: 160px;
    top: 7813px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 82px;
    line-height: 95.5%;
    /* or 78px */


    color: #FFFFFF;

}

.down-page2-7-1 .sort-p {
    margin-top: 50px;
    margin-left: 160px;

    width: 882px;
    height: 140px;
    left: 160px;
    top: 8097px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;

    color: #FFFFFF;

}

/* down-page2-7-2*/
.down-page2-7-2 .img1 {
    margin-left: 200px;
}

.down-page2-7-2 .img2 {
    margin-top: -600px;
    margin-left: 240px;
}

/* down-page2-8*/

.down-page2-8-1 {
    margin-top: 200px;
    margin-left: 00px;
}

.down-page2-8-1 .img1 {
    margin-left: 200px;
}

.down-page2-8-1 .img2 {
    margin-top: -600px;
    margin-left: 240px;
}

.down-page2-8-2 .first-p {
    margin-top: 316px;
    margin-left: 200px;
    width: 297px;
    height: 58px;
    left: 898px;
    top: 8640px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    color: #FFFFFF;
}

.down-page2-8-2 .second-p {
    margin-top: 5px;
    margin-left: 200px;

    width: 801px;
    height: 156px;
    left: 898px;
    top: 8703px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 82px;
    line-height: 95.5%;
    /* or 78px */


    color: #FFFFFF;
}

.down-page2-8-2 .sort-p {
    margin-top: 50px;
    margin-left: 200px;
    width: 799px;
    height: 175px;
    left: 898px;
    top: 8909px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;

    color: #FFFFFF;

}

/* down-page2-9*/
.down-page2-9-1 p {
    margin-top: 200px;
    margin-left: 740px;

    width: 690px;
    height: 78px;
    left: 615px;
    top: 9400px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 82px;
    line-height: 95.5%;
    /* or 78px */


    color: #FFFFFF;

}

.down-page2-9-2 p {
    margin-top: 50px;
    margin-left: 10px;

    /*width: 1308px;*/
    height: 105px;
    left: 306px;
    top: 9528px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    text-align: center;

    color: #FFFFFF;
}

/* down-page2-10*/

.down-page2-10 {
    margin-bottom: 100px;
}

.down-page2-10-1-1 p {
    margin-top: 200px;
    margin-left: 160px;

    width: 658px;
    height: 88px;
    left: 160px;
    top: 9833px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 82px;
    line-height: 95.5%;
    /* or 78px */


    color: #FFFFFF;

}

.down-page2-10-1-2 p {
    margin-top: 26px;
    margin-left: 160px;

    width: 733px;
    height: 80px;
    left: 160px;
    top: 9947px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;

    color: #E7E7E7;
}

.down-page2-10-1-3 input {
    margin-top: 78px;
    margin-left: 160px;

    width: 733px;
    height: 106px;
    left: 160px;
    top: 10105px;

    background: #1BB18E;
}

.down-page2-10-1-3 input::-webkit-input-placeholder {

    width: 164px;
    height: 40px;
    left: 183px;
    top: 10138px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;

    color: #E7E7E7;

}

.down-page2-10-1-4 input {
    margin-top: 58px;
    margin-left: 160px;

    width: 733px;
    height: 106px;
    left: 160px;
    top: 10105px;

    background: #1BB18E;
}

.down-page2-10-1-4 input::-webkit-input-placeholder {
    width: 286px;
    height: 40px;
    left: 183px;
    top: 10302px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;

    color: #E7E7E7;
}

.down-page2-10-1-5 button {
    margin-top: 86px;
    margin-left: 160px;

    width: 450px;
    height: 90px;
    left: 160px;
    top: 10461px;

    background-color: #149778;
    border: 2px solid #FFFFFF;
}

.down-page2-10-1-5 button p {
    margin-top: 20px;
    margin-left: 75px;

    width: 309px;
    height: 38px;
    left: 235px;
    top: 10487px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;

    color: #FFFFFF;
}

.down-page2-10-2 img {
    margin-top: 206px;
    margin-left: 259px;
}

.input1 {
    padding-left: 23px;

    width: 286px;
    height: 40px;
    left: 183px;
    top: 9626px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;

    color: #E7E7E7;
}

/* footer*/
.footer {
    margin-top: -200px;

    width: 1920px;
    height: 215px;

    background-color: #1BB18E;
}

.footer1 img {

    margin-top: 35px;
    margin-left: 160px;
}

.footer2-1 {
    margin-top: 30px;
}

.footer2-1 a {
    margin-left: 135px;
    text-decoration: none;
    width: 73px;
    height: 30px;
    left: 295px;
    top: 10935.21px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 126%;
    /* or 30px */


    color: #FFFFFF;
}

.footer2-2 p {
    margin-top: 10px;
    margin-left: 135px;

    width: 412px;
    height: 105px;
    left: 295px;
    top: 10975.21px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 174.5%;
    /* or 35px */


    color: #FFFFFF;
}

.footer3 {
    margin-top: 30px;

}

.footer3 ul li {
    list-style-type: none;
}

.footer3 ul {
    padding: 0;
    margin: 0;
}

.footer3 ul li a {
    text-decoration: none;
    width: 336px;
    height: 100px;
    left: 839px;
    top: 10975.21px;


    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 126%;
    /* or 25px */


    color: #FFFFFF;;
}

.footer3-1 {
    width: 162px;
    height: 24px;
    left: 839px;
    top: 10935.21px;

    font-size: 24px;
    text-decoration: none;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    line-height: 126%;
    /* or 25px */

    color: #FFFFFF;
}

.footer4 {
    margin-top: 30px;
}

.footer4-1 {
    margin-bottom: 0;
    width: 222px;
    height: 42px;
    left: 1389px;
    top: 10929.21px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 174.5%;
    /* identical to box height, or 42px */


    color: #FFFFFF;
}

.footer4-2 {
    width: 377px;
    height: 72px;
    left: 1389px;
    top: 10967px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 152%;
    /* or 36px */


    color: #FFFFFF;

}

.footer4-img2 {
    margin-left: 11.5px;
}
</style>