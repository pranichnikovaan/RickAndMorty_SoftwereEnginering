import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
})

export const useAPI = {
    getCharacters (currentPage) {
        return instance.get(`character/?page=${currentPage}`)
    },
    async getAllCharacters () {
        let characters = []
        for(let i = 1; i <= 20; i++){
            let response = await this.getCharacters(i)
            characters.push(...response.data.results)
        }
        return characters
    },
    getCharacter (id) {
        return instance.get(`character/${id}`)
    },
    getLocation (url) {
        return axios.get(url)
    }
}