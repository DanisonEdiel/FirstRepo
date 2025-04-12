const MainRoutes = {
    path: '/main',
    meta: {
      requiresAuth: false
    },
    redirect: '/main',
    component: () => import('@/layouts/FullLayout.vue'),
    children: [
      {
        name: 'Default',
        path: '/pokemon-list',
        component: () => import('@/views/VuetifyTestView.vue')
      },
      {
        name: 'HelloWorld',
        path: '/hello-world',
        component: () => import('@/views/HelloWorld.vue')
      }
    ]
  };
  
  export default MainRoutes;
  