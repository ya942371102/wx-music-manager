<template>
    <div class="header">
        <!-- 折叠图片 -->
        <div class="collapase-btn" @click="collapseChage">
            <i class="el-icon-menu"></i>

        </div>
        <div class="logo">music后台管理</div>
        <div class="header-right">
            <div class="btn-fullscreen" @click="handleFullScreen">
                <el-tooltip :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                    <i class="el-icon-rank"></i>
                </el-tooltip>
            </div>
            <div class="user-avator">
                <img src="../assets/img/user.jpg" />
            </div>
        </div>
    </div>
</template>

<script>
import bus from "../assets/js/bus";
export default {
    data() {
        return{
            collapse: false,
            fullscreen: false
        }
    },
    methods:{
        //侧边栏
        collapseChage(){
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
        //全屏事件
        handleFullScreen(){
            if(this.fullscreen){
                if(document.exitFullscreen){
                    document.exitFullscreen()
                }else if(document.webkitCancelFullScreen){
                    // safari、chrom
                    document.webkitCancelFullScreen();
                }else if(document.mozCancelFullScreen){
                    // firefox
                    document.mozCancelFullScreen();
                }else if(document.msExitFullScreeen){
                    // ie
                    document.msExitFullScreeen();
                }
            }else{
                let element = document.documentElement;
                if(element.requestFullscreen){
                    element.requestFullscreen()
                }else if(element.webkitRequestFullScreen){
                    // safari、chrom
                    element.webkitRequestFullScreen();
                }else if(element.mozRequestFullScreen){
                    // firefox
                    element.mozRequestFullScreen();
                }else if(element.msRequestFullScreeen){
                    // ie
                    element.msRequestFullScreeen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
    }
}
</script>

<style scoped>

.header{
    position: relative;
    background-color: #253041;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #ffffff;
}

.collapase-btn{
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px; 
}

.header .logo{
    position: relative;
    float: left;
    line-height: 70px;
}

.header-right{
    float: right;
    padding-right: 50px;
    display: flex;
    height: 70px;
    align-items: center;
}

.btn-fullscreen{
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}

.user-avator{
    margin-left: 20px;
}

.user-avator img{
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

</style>