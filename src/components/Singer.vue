<template>
    <!-- 弹出对话框 -->
    <div class="table">
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" size="mini" @click="centerDialogVisible = true">添加歌手</el-button>
            </div>
        </div>
        <el-dialog title="添加歌手" :visible.sync="centerDialogVisible" width="400px" center>
            <el-form :model="registerForm" ref="registerForm" label-width="80px">
                <el-form-item prop="name" label="歌手名" size="mini">
                    <el-input v-model="registerForm.name" placeholder="歌手名"></el-input>
                </el-form-item>
                <!-- 用单选实现 -->
                <el-form-item label="性别" size="mini">
                    <el-radio-group v-model="registerForm.sex">
                        <el-radio :label="0">女</el-radio>
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="2">组合</el-radio>
                        <el-radio :label="3">不明</el-radio>
                    </el-radio-group>
                </el-form-item>
                <!-- el-date-picker控件 -->
                <el-form-item prop="birth" label="生日" size="mini">
                    <el-date-picker type="date" v-model="registerForm.birth" placeholder="选择日期" style="width:100%"></el-date-picker>
                </el-form-item>
                <el-form-item prop="location" label="地区" size="mini">
                    <el-input v-model="registerForm.location" placeholder="地区"></el-input>
                </el-form-item>
                <el-form-item prop="introduction" label="简介" size="mini">
                    <el-input v-model="registerForm.introduction" placeholder="简介" type="textarea"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <el-button size="mini" @click="centerDialogVisible = false">取消</el-button>
                <el-button size="mini" @click="addSinger">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {setSinger} from '../api/index';
import { mixin } from '../mixins';
export default {
    data() {
        return{
            // 居中对话框，默认不显示
            centerDialogVisible: false,
            registerForm:{ //添加框
                name:'',
                sex:'',
                birth:'',
                location:'',
                introduction:''
            }
        }
    },
    methods:{
        //添加歌手
        addSinger(){
            let d = this.registerForm.birth;
            let datetime = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
            let params = new URLSearchParams();
            params.append('name',this.registerForm.name);
            params.append('sex',this.registerForm.sex);
            params.append('pic','/img/singerPic/hhh.jpg');
            params.append('birth',this.registerForm.birth);
            params.append('location',this.registerForm.location);
            params.append('introduction',this.registerForm.introduction);

            setSinger(params)
            .then(res => {
                if(res.code ==1){
                    this.notify("添加成功","success");
                }else{
                    this.notify("添加失败","error");
                }
            })
            .catch(err =>{
                console.log(err);
            });
            this.centerDialogVisible = false;
        }
    }
}
</script>


<style scoped>
.handle-box{
    margin-bottom: 20px;
}
</style>>