<template>
  <div class="login">
    <div class="header">
      <span class="header-logo">
        <i class="iconfont icon-vue"></i>
        <i class="iconfont icon-icon-test"></i>
        <i class="iconfont icon-typescript"></i>
      </span>
      <div class="header-title">在线考勤系统</div>
    </div>
    <div class="desc">
      零基础从入门到进阶，系统掌握前端三大热门技术(Vue、React、TypeScript)
    </div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="main"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input
          v-model="ruleForm.email"
          type="text"
          placeholder="请输入邮箱"
        />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          v-model="ruleForm.pass"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm(ruleFormRef)"
          auto-insert-space
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <div class="users">
      <el-row :gutter="20">
        <el-col v-for="item in testUsers" :key="item.email" :span="12">
          <h3>
            测试账号，<el-button @click="autoLogin({email: item.email, pass: item.pass})">一键登录</el-button>
          </h3>
          <p>邮箱：{{ item.email }}</p>
          <p>密码：{{ item.pass }}</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

interface User {
  email: string
  pass: string
}

const store = useStore()
const router = useRouter()

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive<User>({
  email: '',
  pass: '',
})

const rules = reactive<FormRules>({
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
  ],
  pass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

const submitForm = (formEl:FormInstance | undefined)=>{
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      store.dispatch('users/login', ruleForm).then((res)=>{
        if(res.data.errcode === 0){
          store.commit('users/updateToken', res.data.token);
          ElMessage.success('登录成功');
          router.push('/');
        }
        else{
          ElMessage.error('登录失败');
        }
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const testUsers: User[] = [
  {
    email: 'huangrong@imooc.com',
    pass: 'huangrong'
  },
  {
    email: 'hongqigong@imooc.com',
    pass: 'hongqigong'
  }
];

const autoLogin = (user: User) => {
  ruleForm.email = user.email;
  ruleForm.pass = user.pass;
  submitForm(ruleFormRef.value)
}

</script>

<style scoped lang="scss" src="./Login.scss">

</style>