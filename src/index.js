import navbar from '../components/navbar.js';

import '../style/nav.css'

//Axios

import axios from 'axios'

//Axios

let navbar_div=document.getElementById('navbar')

navbar_div.innerHTML=navbar();


//axios.get('')

async function fetchData(){

    let data=await axios.get('https://fakestoreapi.com/products/category/jewelery')

console.log(data)

}

fetchData()


