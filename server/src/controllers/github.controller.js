import axios from 'axios'
import { GITHUB_OWNER, GITHUB_URL } from '../configs/variables.config.js'
import { ApiError } from '../utils/error.handle.js'

export const getUser = async (req, res, next) => {
    const url = `${GITHUB_URL}users/${GITHUB_OWNER}`
    try {
        const { data } = await axios.get(url, {
            headers: {
                Accept: 'application/vnd.github.v3+json'
            }
        })

        return res.status(200).json({
            data
        })
    } catch (error) {
        next(new ApiError('Bad request', 400))
    }
}

export const getReps = async (req, res, next) => {
    const url = `${GITHUB_URL}users/${GITHUB_OWNER}/repos`
    try {
        const { data } = await axios.get(url, {
            headers: {
                Accept: 'application/vnd.github.v3+json'
            }
        })

        return res.status(200).json({
            data
        })
    } catch (error) {
        next(new ApiError('Bad request', 400))
    }
}

export const getDetailRep = async (req, res, next) => {
    const { repository } = req.params
    const url = `${GITHUB_URL}repos/${GITHUB_OWNER}/${repository}`
    try {
        const { data } = await axios.get(url, {
            headers: {
                Accept: 'application/vnd.github.v3+json'
            }
        })

        return res.status(200).json({
            data
        })
    } catch (error) {
        next(new ApiError('Bad request', 400))
    }
}
