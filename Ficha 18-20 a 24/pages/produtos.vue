<template>
  <div class="app">
    <div class="listaProdutos">
      <app-ficha-produto v-for="(artigo, index) in artigos" :key="index" :produto="artigo.produto" :valor="+artigo.Valor" v-on:click.native="carregaCarrinho(artigo)" style="cursor: pointer" />
    </div>
    <div class="listaCarrinhoCompras">
      <br>
      <h2>Carrinho de Compras</h2>
      {{ultimaCompra | date}} - {{sum()}}€
      <app-ficha-produto v-for="(artigo,index) in carrinhoCompras" :key="index" :produto="artigo.produto" :valor="+artigo.Valor" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import appFichaProduto from "@/components/app-ficha-produto";
export default {
  components: {
    appFichaProduto
  },
  data() {
    return {
      carrinhoCompras: [],
      ultimaCompra: false
    };
  },
  filters: {
    formataData(dados) {
      return dados.toString().slice(0, 10);
    }
  },
  methods: {
    carregaCarrinho(artigo) {
      this.carrinhoCompras.unshift({ ...artigo, dataCompra: new Date() });
      this.ultimaCompra = this.carrinhoCompras[0].dataCompra;
    },
    descarregaCarrinho(index) {
      this.carrinhoCompras.splice(index, 1);
    },
    sum() {
      if (this.carrinhoCompras.length < 1) {
        return 0;
      } else {
        return this.carrinhoCompras
          .map(a => Math.floor(a.Valor))
          .reduce((a, b) => {
            return a + b;
          });
      }
    }
  },
  asyncData() {
    // retornar uma Promessa
    return axios
      .get("https://umartigos-49214.firebaseio.com/.json")
      .then(res => {
        return { artigos: res.data };
      });
  }
};
</script>
<style scoped>
.app {
  margin-top: 4.5rem;
  display: flex;
  align-items: row;
  justify-content: space-around;
}
.listaProdutos {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.listaCarrinhoCompras {
  display: flex;
  min-width: 500px;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #06c4d1;
  background-color: #eee;
}
</style>

