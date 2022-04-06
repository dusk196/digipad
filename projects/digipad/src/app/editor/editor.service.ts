import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class EditorService {

  private _window: Window & typeof globalThis = window;
  private _document: Document = document;

  getSelection(): Selection | null {
    if (this._window && this._window.getSelection()) {
      return this._window.getSelection();
    } else if (this._document && this._document.getSelection()) {
      return this._document.getSelection();
    }
    return null;
  }

}
