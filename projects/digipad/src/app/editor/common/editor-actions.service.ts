import { Injectable } from '@angular/core';
import { EditorService } from './../editor.service';
import { EditorUtilsService } from './editor-utils.service';

@Injectable({
  providedIn: 'root'
})

export class EditorActionsService {

  constructor(
    private _editorService: EditorService,
    private _editorUtils: EditorUtilsService
  ) { }

  checkIfActionExists(action: string): boolean {
    switch (action) {
      case 'bold':
        return this._editorService.getSelection()?.anchorNode?.parentElement?.tagName.toUpperCase() === 'STRONG';
      default:
        return false;
    }
  }

  executeAction(action: string): void {
    this._editorUtils.applyTagChanges(action);
  }

}
