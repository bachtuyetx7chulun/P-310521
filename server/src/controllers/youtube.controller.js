import axios from 'axios'
import { ApiError } from '../utils/error.handle.js'
import {
    YOUTUBE_API_KEY,
    YOUTUBE_CHANNEL_ID,
    YOUTUBE_URL,
} from '../configs/variables.config.js'

export const getAll = async (req, res, next) => {
    const url = `${YOUTUBE_URL}channels?part=contentDetails&part=localizations&part=snippet&part=status&part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`

    const { data } = await axios.get(url)
    return res.status(200).json({
        data,
    })
}

export const getPart = async (req, res, next) => {
    const { part } = req.params
    try {
        const parts = [
            'contentDetails',
            'localizations',
            'snippet',
            'status',
            'statistics',
        ]

        if (parts.findIndex(p => p == part) == -1) {
            throw new ApiError('Bad request', 400)
        }

        const url = `${YOUTUBE_URL}channels?part=${part}&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`

        const { data } = await axios.get(url)
        return res.status(200).json({
            data,
        })
    } catch (error) {
        next(error)
    }
}
