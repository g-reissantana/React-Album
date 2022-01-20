import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Albums } from '../../Model/Albums'

import * as C from './style'
import * as Controller from './HomeController'
import { Loading } from '../../components/Loading'

export const Home = () => {

    const [albums, setAlbums] = useState<Albums[]>([])
    
    useEffect(() => {
        showAlbums()
    }, [])

    const showAlbums = async() => {
        let apiResult = await Controller.getAllAlbums()
        setAlbums(apiResult)
    }   
    

    return(
        <C.Container>
            {albums.length == 0 && <Loading/>}
            {albums.map(item => {
                return <C.Box key={item.id} >
                    <Link to={`/albums/${item.id}?name=${item.title}`}>
                        <h1>{item.title}</h1>
                    </Link>
                </C.Box>
            })}
        </C.Container>
    )
}
