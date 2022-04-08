import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class EditorService {

  private _window: Window & typeof globalThis = window;
  private _document: Document = document;

  /**
   * Function to get the current selected text in the editor
   * That can be either document selection or window selection
   * @returns {Range | null}
   */
  private getSelection(): Selection | null {
    if (this._window && this._window.getSelection()) {
      return this._window.getSelection();
    } else if (this._document && this._document.getSelection()) {
      return this._document.getSelection();
    }
    return null;
  }

  /**
   * Function to apply the tag changes
   * @param action string
   * @returns void
   */
  applyTagChanges(action: string): void {
    const selection = this.getSelection()?.getRangeAt(0);
    const tag = document.createElement(action);
    selection?.surroundContents(tag);
  }

  executeAction(action: string): void {
    this.applyTagChanges(action);
  }

}
