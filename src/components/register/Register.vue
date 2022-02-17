<template>
  <div class="register">
    <transition name="masukan">
      <div class="box" v-if="berhasil == false">
        <div class="head">
          <h3>BELAJAR WEB</h3>
          <p>Daftar untuk bergabung</p>
        </div>
        <div class="input">
          <label for="nama">Nama Lengkap</label>
          <input type="text" id="nama" v-model="nama" />
        </div>
        <div class="input">
          <label for="jurusan">Jurusan</label>
          <input type="text" id="jurusan" v-model="jurusan" />
        </div>
        <div class="input">
          <label for="nomor"
            >Nomor WA <span>(untuk dimasukkan grup WA)</span>
          </label>
          <input type="number" id="nomor" v-model="nomorWa" />
        </div>
        <div class="input">
          <label for="alasan">Alasan Bergabung</label>
          <textarea
            name="alasan"
            id=""
            cols="20"
            rows="3"
            v-model="alasan"
          ></textarea>
        </div>
        <button @click="daftar">DAFTAR</button>
        <p class="footer">
          <a href="http://hadig.web.id">Hadi Gunawan</a> -
          <a href="https://itspaluta.ac.id">ITS Paluta</a>
        </p>
      </div>
    </transition>
    <transition name="berhasil">
      <div class="berhasil" v-if="berhasil == true">
        <div class="header">
          <h3>Berhasil ✔️</h3>
        </div>
        <div class="body">
          <p>
            Pendaftaran anda berhasil!, terima kasih telah mendaftar selanjutnya
            kami akan memasukkan kontak anda ke grup whatsapp untuk memberi info
            selanjutnya.
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nama: "",
      jurusan: "",
      nomorWa: 0,
      alasan: "",
      berhasil: false,
    };
  },
  methods: {
    async daftar() {
      let namas = "email";
      let rdm = Math.floor(Math.random() * 99999);
      let email = namas + rdm + "@mail.com";
      console.log(this.nama);
      console.log(this.jurusan);
      console.log(this.nomorWa);
      console.log(this.alasan);
      console.log(email);
      await axios
        .post("http://127.0.0.1:8000/api/store_data", {
          name: this.nama,
          jurusan: this.jurusan,
          nomor_wa: this.nomorWa,
          alasan: this.alasan,
          email: email,
        })
        .then((res) => {
          console.log(res.data);
          (this.nama = ""),
            (this.jurusan = ""),
            (this.nomorWa = ""),
            (this.alasan = "");
          setTimeout(()=>{
            this.berhasil = true;
          },300)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.register {
  background-color: rgb(236, 236, 236);
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  font-weight: bold;
}
.box {
  width: 30%;
  border-radius: 4px;
  padding: 2rem;
  margin: 0.5rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}
.head {
  padding: 1rem;
  border-radius: 4px 4px 0 0;
  text-align: center;
}
h3 {
  margin: 0;
}
p {
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.568);
}
.footer {
  font-size: 0.7rem;
  text-align: center;
}
a {
  text-decoration: none;
  color: rgb(92, 97, 112);
}
form {
  border-radius: 0 0 4px 4px;
  padding: 1rem;
  color: rgba(51, 51, 77, 0.521);
}
label {
  font-size: 0.93rem;
  color: rgb(112, 92, 92);
}
.input {
  display: flex;
  flex-direction: column;
  margin: 0.2rem 0;
}
button {
  margin: 0.3rem 0;
  width: 100%;
  padding: 0.3rem;
  border: none;
  border-radius: 4px;
  background-color: rgb(196, 196, 196);
  font-weight: bold;
  color: rgb(112, 92, 92);
}
input,
textarea {
  background-color: rgba(244, 246, 248, 0.459);
  border: solid rgb(192, 192, 192) 1px;
  border-radius: 4px;
  padding: 0.3rem;
}
span {
  font-size: 0.7rem;
}
.berhasil {
  width: 60%;
}
.berhasil-enter-from {
  transform: translateY(-100vh);
  opacity: 0;
}
.berhasil-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.berhasil-enter-active {
  transition: all .3s;
}
.masukan-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.masukan-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}
.masukan-leave-active {
  transition: all .3s;
}
@media only screen and (max-width: 600px) {
  .box {
    width: 60%;
    border-radius: 4px;
    padding: 2rem;
    margin: 0.5rem;
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (min-width: 1020px) {
  .box {
    width: 20%;
    border-radius: 4px;
    padding: 2rem;
    margin: 0.5rem;
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
}
</style>