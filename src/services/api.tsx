import axios from 'axios'
import { Albums } from '../Model/Albums'
import { Photos } from '../Model/Photos'

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {

    getAllAlbums: async() => {
        const response = await axiosInstance.get('/albums')
        return response.data.map((item: Albums) => {
            return new Albums(
                item.userId,
                item.id,
                item.title
            )   
        })
    },
    getAllPhotos: async(albumId: number) => {
        const response = await axiosInstance.get(`albums/${albumId}/photos`)
        return response.data.map((item: Photos) => {
            return new Photos(
                item.albumId,
                item.id,
                item.title,
                item.url,
                item.thumbnailUrl
            )
        })
    },
    getPhoto: async(photoId: number) => {
        const response = await axiosInstance.get(`/photos/${photoId}`)
        return response.data
    }

}