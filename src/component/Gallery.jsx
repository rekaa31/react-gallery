import React, {useEffect, useState} from 'react'
import { GET_LIST_POST } from '../services/JsonPlaceholderService'
import CardImageGallery from './CardImageGallery'

export default function Gallery() {

    const [post, setPost] = useState([])

    useEffect(() => {
       let mounted = true
       GET_LIST_POST().then(
           items => {
               if(mounted){
                   setPost(items)
               }
           }
       )
       return () => mounted = false
    }, [])

    return (
        <div className='row g-3'>
            {post.map((u) => <CardImageGallery />)}
        </div>
    )
}
