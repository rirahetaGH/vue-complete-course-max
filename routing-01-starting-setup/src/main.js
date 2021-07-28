import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { path: '/teams', component: TeamList },
    { path: '/users', component: UserList },
    { path: '/teams/:teamId', component: TeamMember, props: true },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
