<template>
    <div>
        <nav id="header-main">
            <div class="header">
                <div class="header-img">
                    <h1>Выберите корпус</h1>
                    <button @click="app"><p>Выбрать</p></button>
                </div>
            </div>
            <!--                down-page1-->
            <div class="row">
                <div class="col down-page">
                    <p>Квартиры и цены</p>
                    <p class="down-page-p"> в блоке -
                        <select>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </p>
                </div>
                <div class="col down-page-2">
                    <button><p>Скидка до 66 млн сум</p></button>
                </div>
            </div>

            <!--                down-page2-->
            <span class="row down-page2">
                    <span class="col-4 ">
                        <div class="row">
                            <div class="col down-page2-1">
                                <input>
                                <input>
                            </div>
                        </div>
                        <span class="down-page22">
                            <div class="row">
                                <div class="col down-page2-2">
                                    <p>Цена: 250 000 000</p>
                                </div>
                                <div class="col down-page2-3">
                                    <p>Площадь: 105 м&#178;</p>
                                </div>
                            </div>
                            <span class="row">
                                <span class="col down-page2-4">
                                    <p>Гостиница: 40.8м&#178;</p>
                                </span>
                                <div class="col down-page2-5">
                                    <p>Коридор: 34.2м&#178;</p>
                                </div>
                                <div class="col down-page2-6">
                                    <p>Самузет: 30м&#178;</p>
                                </div>
                            </span>
                            <span class="row">
                                <div class="col down-page2-8">
                                    <button><p>Забронировать</p></button>
                                </div>
                            </span>
                        </span>
                    </span>
                        <!--                    <div class="col-8 down-page2-7">-->
                        <!--                        <img src="./img/Layout.png" alt="..."/>-->
                        <!--                    </div>-->
                </span>

        </nav>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "JK_Page2",
    components: {},

    methods:{
        ...mapActions(['fetchPlansHome'])
    },
    computed:{
        ...mapGetters(['getPlansHome'])
    },
    mounted() {
        this.fetchPlansHome()
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#header-main {
    width: 1920px;
    height: 2742px;

    background: #FFFFFF;
    border: 1px solid #FFFFFF;
}

.header {
    background-image: url("img/JK.jpg");
    width: 1920px;
    height: 1080px;
    left: 0px;
    top: 0px;

}

.header-img {

    background-image: url("img/Rectangle11.png");
    width: 1920px;
    height: 1080px;
}

.header-img h1 {
    padding-top: 55px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 82px;
    line-height: 95.5%;
    /* or 78px */

    text-align: center;

    color: #FFFFFF;
}

.header-img button {
    margin-top: 50px;
    margin-left: 800px;

    width: 312px;
    height: 88px;
    left: 802px;
    top: 6016px;

    border-radius: 10px;
    border: 1px solid #f58742;
    background-color: #f58742;
}

.header-img button p {
    padding-top: 5px;
    margin-left: 60px;
    width: 187px;
    height: 38px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;


    color: #FFFFFF;
}

.down-page {
    margin-left: 150px;
    margin-top: 60px;
}

.down-page p {
    width: 598px;
    height: 156px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 58px;
    line-height: 78px;
    text-align: center;

    display: inline;
    color: #1c1a19;
}

.down-page .down-page-p {
    color: #f58742;
}

.down-page .down-page-p select {
    color: #f58742;

    background-color: #FFFFFF;
    border: 0;
}

.down-page-2 button {
    border-radius: 10px;
    background-color: #f58742;

    margin-left: 400px;
    margin-top: 75px;
}

.down-page-2 button p {

    width: 350px;
    height: 30px;
    left: 160px;
    top: 9947px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;

    color: #E7E7E7;
}

.down-page2 {
    margin-top: 100px;
    margin-left: 150px;
}

.down-page2-1 {
    display: inline;
    margin-top: 100px;
}

.down-page2-2 {
    margin-top: 50px;
    width: 733px;
    height: 80px;
    left: 160px;
    top: 9271px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
}

.down-page2-3 {
    margin-top: 50px;

    width: 733px;
    height: 80px;
    left: 160px;
    top: 9271px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;

}

.down-page2-4 {
    width: 190px;
    height: 58px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 100;
    font-size: 22px;
    line-height: 29px;
}

.down-page2-5 {
    width: 180px;
    height: 58px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 100;
    font-size: 22px;
    line-height: 29px;
}

.down-page2-6 {
    width: 180px;
    height: 58px;

    font-family: 'Acrom';
    font-style: normal;
    font-weight: 100;
    font-size: 22px;
    line-height: 29px;
}
.down-page2-8 button{
    border-radius: 10px;
    background-color: #f58742;

    margin-top: 60px;
}
.down-page2-8 button p{
    width: 550px;
    height: 30px;


    font-family: 'Acrom';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;

    color: #E7E7E7;
}

.down-page2-7 {
    display: inline;
    margin: 0;
    padding: 0;
}

.down-page2-7 {
    float: right;
    /*padding-left: 600px;*/
}
</style>