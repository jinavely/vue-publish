import Vue from 'vue';
import VueRouter from 'vue-router';
import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', // url # 제거 
    routes: [
        {
            path: '/',
            redirect: '/login', // 화면 리다이렉트
        },
        {
            path: '/login',
            component: () => import('@/views/LoginPage.vue'), // 코드 스플리팅
        },
        {
            path: '/signup',
            component: SignupPage, // 그냥 라우터
        },
        {
            path: '*',
            component: () => import('@/views/NotFoundPage.vue'), // 위에 없는 페이지 진입시
        },
    ]
});