import { useNavigate, useParams } from 'react-router-dom'
import * as C from './style'

import { getPhoto } from './PhotoController'
import { useEffect, useState } from 'react'
import { Photos } from '../../Model/Photos'
import { Loading } from '../../components/Loading'

export const Photo = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [statePhoto, setStatePhoto] = useState<Photos>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        showPhoto()
    }, [])

    const showPhoto = async() => {
        await setLoading(true)
        const photoId = await Number(params.id)
        const apiResult = await getPhoto(photoId)
        await setStatePhoto(apiResult)
        setLoading(false)
    }

    return( 
        <C.Container>
            {loading && <Loading/>}
            <button onClick={e => navigate(-1)}>Voltar</button>
            <h3>{statePhoto?.title}</h3>
            <C.BoxImage>
                <img src={statePhoto?.url}  alt="" />
            </C.BoxImage>
        </C.Container>
    )
}