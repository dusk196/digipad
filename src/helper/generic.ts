// like lodash and all

import { v4 as uuidv4 } from 'uuid'

/**
 * A simple function  to generate random text based on parameters
 * @params length: number
 * @returns string (some random text)
 */
export const generateRandomText = (length: number): string => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length)
        result += charset.charAt(randomIndex)
    }
    return result
}

/**
 * A simple function to generate random UUIDs
 * @returns string (some random UUID)
 */
export const getUuid = (): string => {
    return uuidv4()
}

/**
 * A simple function to generate random UUIDs
 * @returns string (some random UUID)
 */
export const isValid = (param: string): string => {
    if (param === null) {
        return ''
    }
    if (param === undefined) {
        return ''
    }
    if (param.length === 0) {
        return ''
    }
    return param
}
