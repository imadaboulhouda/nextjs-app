import React from 'react';
import { Site } from '../../components/Site';

import axios from 'axios';
import 'bulma/css/bulma.css';

export async function getStaticPaths() {
    return {
      paths: [
        // String variant:
        '/posts/first-post',
        // Object variant:
        { params: { _id: 'second-post' } },
      ],
      fallback: true,
    }
  }
const Page = ({data})=>{

    
   
    

 
    //console.log(data[0].id)
    //console.log(data.map((e,v)=>{v}))


    return (<Site>
        
        <div className='columns'>
                <h1 className='title'>{ data?.title.rendered }</h1>
            <img src={data?._embedded['wp:featuredmedia'][0].source_url} />
            <div className='content'>
            
             { data && data.content &&
             <div dangerouslySetInnerHTML={{ __html: data?.content.rendered.replace('class=','className=') }} />
             }

                </div>
        </div>
        
        </Site>);
};



export async function getStaticProps({params})
{
    //const router = useRouter();
    //console.log(router.query);
    const id = (params._id);
    let  data = [];
    const x =  await axios.get('https://chouftv.ma/wp-json/wp/v2/posts/'+id+'?_embed');
      data = x.data;
    return {
        props:{
            data:data
        }
    }
}
export default Page;