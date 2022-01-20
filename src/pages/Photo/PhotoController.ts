import { api } from "../../services/api";

export const getPhoto = (photoId: number) => {

    return api.getPhoto(photoId)
}