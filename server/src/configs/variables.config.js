import dotenv from 'dotenv'
dotenv.config()

export const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID
export const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
export const YOUTUBE_URL = process.env.YOUTUBE_URL

export const GITHUB_OWNER = process.env.GITHUB_OWNER
export const GITHUB_URL = process.env.GITHUB_URL

export const APP_PORT = process.env.PORT || 3000