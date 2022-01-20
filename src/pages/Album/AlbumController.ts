import { api } from "../../services/api";

export const getAllPhotos = (albumId: number) => {

    return api.getAllPhotos(albumId)
}