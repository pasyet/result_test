<template>
    <div class='search'>
    <h1>Search</h1>
    <input type='text' v-model='query' @keyup='getResult(query)'>
        <div v-for='result in results' :key='result.id'>
        <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path" width='100px'>
        <p>{{result.title}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'search',
    data () {
        return {
            query: '',
            results: ''
        }
    },
    methods: {
    getResult(query) {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&query='+ query)
        .then((response) => { this.results = response.data.results })
            // console.log(this.results)
        }
    }
}
</script>