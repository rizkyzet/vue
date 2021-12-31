Vue.component('navbar-component', {
    props: ['qty'],
    methods: {
       
    },
    template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav border">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <ul class="navbar-nav border ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link">Cart : {{ qty }} </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    `,
})


Vue.component('product-component', {
    data() {
        return {
            qty: 1,
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.qty)
        
        }
    },
    template: `
    <div>
    <input type='number' v-model='qty'>
    <button v-on:click='addToCart'>Add to cart</button>
    </div>
    `,
})

const vm = new Vue({
    el: '#app',

    data: {
        firstName: 'Mochamad',
        lastName: 'Rizky',
        myObject: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        },
        myObject2: [{
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            }, {
                title: 'How to do lists in Vue',
                author: 'Rizky Doe',
                publishedAt: '2011-04-11'
            },
            {
                title: 'How to do lists in Vue',
                author: 'Rizky Doe',
                publishedAt: '2011-04-11'
            },
        ],
        inputPassword: {
            type: 'password',
            icon: 'bi bi-eye'
        },
        dataSelected: [{
                text: 'Text 1',
                value: 'Value 1'
            },
            {
                text: 'Text 2',
                value: 'Value 2'
            },
            {
                text: 'Text 3',
                value: 'Value 3'
            },
            {
                text: 'Text 4',
                value: 'Value 4'
            },
        ],
        keyword: '',
        artikel: [{
            judul: 'Hasil dari kediaman',
            isi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus deleniti iure vero?'
        }, {
            judul: 'Singa dan Zebra',
            isi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus deleniti iure vero?'
        }, {
            judul: 'Facebook membuat metaverse',
            isi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus deleniti iure vero?'
        }, {
            judul: 'Amazon vs Ebay',
            isi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus deleniti iure vero?'
        }],
        qtyCart: 2,
    },
    methods: {
        greeting() {
            return `Hello World!, My Name ${this.fullName}`
        },
        showHiddenPassword() {
            if (this.inputPassword.type === 'password') {
                this.inputPassword.type = 'text'
                this.inputPassword.icon = 'bi bi-eye-slash'
            } else {
                this.inputPassword.type = 'password'
                this.inputPassword.icon = 'bi bi-eye'
            }
        },
        updateQty: function (valEmit) {
            this.qtyCart += parseInt(valEmit)
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        },
        searchResult() {

            if (this.keyword.length > 0) {
                return this.artikel.filter((val) => {
                    return val.judul.toLowerCase().includes(this.keyword)
                })
            } else {
                return []
            }
        },
       
    }
})