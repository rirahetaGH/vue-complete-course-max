import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UserList from './pages/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/teams' },
      {
        name: 'teams',
        path: '/teams',
        meta: {needsAuth: true},
        components: { default: TeamsList, footer: TeamsFooter },
        children: [
          {
            name: 'team-members',
            path: ':teamId',
            component: TeamMember,
            props: true
          }
        ]
      },
      {
        path: '/users',
        components: { default: UserList, footer: UsersFooter },
        beforeEnter(to, from, next) {
          console.log(to, from);
          next();
        }
      },
      { path: '/:notFound(.*)', component: NotFound }
    ],
    scrollBehavior(_, _2, savedPosition) {
      // console.log(to);
      // console.log(from);
      // console.log(savedPosition);
      if (savedPosition) {
        return savedPosition;
      }
      return { left: 0, top: 0 };
    }
  });
  
  router.beforeEach(function(to, from, next) {
    // console.log('Global BeforeEach');
    // console.log(to, from);
    if (to.meta.needsAuth){
      console.log('needs auth!');
      // next();
    }
    next();
  });
  
  router.afterEach(function(to, from){
    // sending analytics data
    console.log('Global After each');
    console.log(to, from);
  })

  export default router;