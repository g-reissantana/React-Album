import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
import * as C from './style'

import { getAllPhotos } from './AlbumController'
import { useEffect, useState } from "react"
import { Photos } from "../../Model/Photos"
import { Loading } from "../../components/Loading"

export const Album = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const titleAlbum = searchParams.get('name')

    const params = useParams()
    const navigate = useNavigate()
    const [allPhotos, setAllPhotos] = useState<Photos[]>([])

    useEffect(() => {
        showPhotos()
    }, [])

    const showPhotos = async() => {
        let albumId = Number(params.id)
        let apiResult = await getAllPhotos(albumId)
        setAllPhotos(apiResult)
    }

    return(
        <C.Container>
            {allPhotos.length == 0 && <Loading/>}
            <button onClick={e => navigate(-1)}>Voltar</button>
            <h1>{titleAlbum}</h1>

            <div className="photos">
                {allPhotos.map((item) => {
                    return(
                        <C.PhotoBox key={item.id}>
                            <Link to={`/photos/${item.id}`}>
                                <img src={item.thumbnailUrl} alt="ícone da imagem" />
                            </Link> 
                        </C.PhotoBox>
                    )
                })}
            </div>
        </C.Container>
    )
}