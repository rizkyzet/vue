const Home = {
    template: `<div>Home</div>`
}
const About = {
    template: `<div>About</div>`
}

const detailKelas = {
    template: `
    <div>
        <template v-if="detailKelas">   
            <img v-bind:src="urlGambar(detailKelas.gambar)" width="100">
            <h3>{{ detailKelas.judul }} - {{ $route.params.idKelas }}</h3>
            <p>{{ detailKelas.deskripsi }}</p>
            <router-link to="/kelas">Kembali</router-link>    
        </template>
        <p v-else>Kelas tidak ada.</p>
    </div>
    `,
    data() {
        return {
            detailKelas: {}
        }
    },
    created() {
        this.filterKelas()
    },
    methods: {
        filterKelas() {

            let id = this.$route.params.idKelas
            let kelasDetailRef = db.ref('kelas/' + id)
            kelasDetailRef.on('value', (item) => {
                this.detailKelas = item.val()
            })

        },
        urlGambar(gambar) {
            return gambar ? `../img/${gambar}` : ''
        }
    }
}

const Kelas = {
    props: ['items', 'input'],
    template: `
    <div>      
        <h3>Tambah Kelas.</h3>
        
        <form v-on:submit.prevent='submitKelas'>
            <div class='input-group'>
                <input type="text" placeholder='Nama Kelas' v-model="kelas.judul">
                <div class='error' v-if='error.judul'>
                    <small>{{ error.judul }}</small>
                </div>
            </div>
            
            <div class="input-group">
                <label>Deskripsi: </label><br>
                <textarea v-model="kelas.deskripsi"></textarea> 
                <div class='error' v-if='error.deskripsi'>
                    <small>{{ error.deskripsi }}</small>
                </div> 
            </div>

            <div class="input-group">
                <p>
                    <img v-bind:src="previewImg" v-if="previewImg" width="200">
                </p>
                <label>Masukkan Gambar</label><br>
                <input type="file" ref="gambar" v-on:change="upload">
            </div>
            <button type="submit">Submit</button>
        </form>
        
        
        <hr>
        <h3>Daftar Kelas ({{ items.length }})</h3>

        <template v-if="items.length > 0">
            <ul>
                <li v-for="(k,i) of items">
                   
                    <img v-bind:src="k.gambar ? '/img/'+k.gambar : ''" width="100">
                 <p>
                    {{ i+1 }} - {{ k.judul  }}
                    <a href="" v-on:click.prevent="$emit('hapus-kelas',k.id)">Hapus</a>
                    <router-link v-bind:to="'/kelas/'+k.id">Lihat Kelas</router-link>
                </p>
                   
                </li>
                    
            </ul>
        </template>

        <ul v-else>
            <li>kelas belum tersedia</li>
        </ul>
    </div>
    `,
    data: function () {
        return {
            kelas: {
                judul: '',
                deskripsi: '',
                gambar: ''
            },
            previewImg: '',
            error: {
                judul: '',
                deksripsi: ''
            },
        }
    },
    methods: {
        submitKelas() {

            this.error.judul = ''
            this.error.deskripsi = ''

            if (this.kelas.judul == '') {
                this.error.judul = 'Judul is required'
            }

            if (this.kelas.deskripsi == '') {
                this.error.deskripsi = 'Deskripsi is required'

            }

            if (this.kelas.deskripsi && this.kelas.judul) {
                const data = {
                    id: uuidv4(),
                    judul: this.kelas.judul,
                    deskripsi: this.kelas.deskripsi,
                    gambar: this.kelas.gambar
                }
                this.$emit('submit-kelas', data)

                this.kelas.judul = ''
                this.kelas.deskripsi = ''
                this.kelas.gambar = ''
                this.previewImg = ''
                this.$refs.gambar.value = ''
            }
        },

        upload(event) {
            const namaGambar = event.target.files[0].name
            this.kelas.gambar = namaGambar
            this.previewImg = URL.createObjectURL(event.target.files[0])
        }
    }
}

const NotFound = {
    template: '<div>Halaman tidak ditemukan.</div>'
}

Vue.component('header-component', {
    props: ['nama'],

    template: `
    <header>
        <img src="../img/logo.svg" alt="" width="200">
        <p>
          {{ 'Hello, '+nama }}  
        </p>
    </header>
    `,
    data: function () {
        return {
            pesan: 'Hello, Component!'
        }
    }
})

Vue.component('footer-component', {
    template: `
    <footer id="footer">
        <slot></slot>
    </footer>
    `
})

