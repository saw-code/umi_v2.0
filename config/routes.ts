export default [
  {
    path: '/login',
    component: '@/pages/Login',
    layout: false,
  },
  {
    path: '/',
    name: 'home',
    icon: 'home',
    component: '@/pages/Home',
  },
  {
    path: '/customers',
    name: 'customers',
    icon: 'user',
    component: '@/pages/Customers'
  },
  {
    path: '/opportunities',
    name: 'opportunities',
    icon: 'AccountBook',
    component: '@/pages/Opportunities',
  },
];



// export default [
//   {
//     path: '/', // при переходе на http://localhost:8000/ нам редиректит копоненту @/pages/Login по пути '/app/login'
//     redirect: '/app/login' // http://localhost:8000/ => http://localhost:8000/app/login
//   },
//   {
//     path: '/app',
//     component: '@/layouts/Header',
//     routes: [
//       // exact: false - определяем должен путь быть точным или нет. Например если перейдем по пути http://localhost:8000/app/login/user где user не существует
//       { exact: false, path: '/app/login', component: '@/pages/Login'}, // нам отредиректит  http://localhost:8000/app/login. По умолчанию все пути точны.
//       { path: '/app/home', component: '@/pages/Home'}
//     ]
//   },
// ];


// Этот код определяет корневой путь ('/') для отображения компонента индекс, расположенного в
// папке pages. Если мы указываем на файл в src каталоге, мы можем использовать @
// export default [
//   {
//     path: '/',
//     component: '@/pages/index',
//   },
// ]
