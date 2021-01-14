import React from 'react';
import { Site } from '../../components/Site';
import Post from '../../components/Post';
import axios from 'axios';
import 'bulma/css/bulma.css';
const Home = ({data})=>{
    
   
    

 
    //console.log(data[0].id)
    //console.log(data.map((e,v)=>{v}))


    return (<Site>
        <h1>Liste des articles</h1>
        <div class='columns'>
        {data.map((d,index)=>{
            return (
                <Post
                image={d._embedded['wp:featuredmedia'][0].source_url}
                title={d.title.rendered}
                link={d.id}
                key={index}/>
            )
           
        })}
        </div>
        
        </Site>);
};



export async function getStaticProps()
{
    let data = [];
    const x = await axios.get("https://chouftv.ma/wp-json/wp/v2/posts?_embed",{
        headers:{
            'User-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'
        }
    })
   data =  await x.data;
   console.log(data)
   
    return {
        props:{
            data:data
        }
    }
}
export default Home;