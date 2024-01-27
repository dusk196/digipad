// Logical conversion from JSON to HTML & Vice-Versa

import { getUuid } from './../helper/generic'
import type { EditorConfig } from './../interfaces/core'

const initialEditorConfig: EditorConfig = {
    height: '400px'
}

/**
 * A simple function to initiate an intance of the editor (ToDo: Check for multi-instance later)
 * @returns void
 */
export const init = (params: EditorConfig): void => {
    // ToDo: `params` can be checked later
    console.log('params: ', params)
    Array.from(document.getElementsByTagName('digipad'))
        .forEach((editor) => {
            const editorConfig: EditorConfig = {
                ...initialEditorConfig,
                id: editor.id || getUuid(),
                height: editor.attributes.getNamedItem('readonly')?.value || '400px'
            }
            console.log(editorConfig)
        })
}
