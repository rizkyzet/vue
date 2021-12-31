const routes = [{
    path: '/',
    component: Home
},
{
    path: '/home',
    component: Home
},
{
    path: '/about',
    component: About
},
{
    path: '/kelas',
    component: Kelas
},
{
    path: '/kelas/:idKelas',
    component: detailKelas
},
{
    path: '*',
    component: NotFound
}
]

const router = new VueRouter({
mode: 'history',
routes
})