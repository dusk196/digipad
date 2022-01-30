import { Injectable } from '@angular/core';

const _window: Window & typeof globalThis = window;
const _document: Document = document;

@Injectable({
  providedIn: 'root'
})

export class EditorService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  getSelection(): Selection | null {
    if (_window && _window.getSelection) {
      return _window.getSelection();
    } else if (_document && _document.getSelection) {
      return _document.getSelection();
    }
    return null;
  }

  isSameElement(): boolean {
    const element: Range | undefined = _window.getSelection()?.getRangeAt(0);
    return element?.startContainer === element?.endContainer;
  }

  canUseParent(): boolean {
    const element: Range | undefined = _window.getSelection()?.getRangeAt(0);
    return element?.startOffset === 0 && (element.endOffset === element.endContainer.textContent?.length);
  }

}
