import { Injectable } from '@angular/core';
import { EditorService } from './../editor.service';

@Injectable({
  providedIn: 'root'
})

export class EditorUtilsService {

  constructor(private _editorService: EditorService) { }

  isSameElement(): boolean {
    const element: Range | undefined = this._editorService.getSelection()?.getRangeAt(0);
    return element?.startContainer === element?.endContainer;
  }

  selectionCanUseParent(): boolean {
    const element: Range | undefined = this._editorService.getSelection()?.getRangeAt(0);
    return element?.startOffset === 0 && (element.endOffset === element.endContainer.textContent?.length);
  }

  applyTagChanges(action: string): void {
    console.log('isSameElement', this.isSameElement());
    console.log('canUseParent', this.selectionCanUseParent());
    if (this.isSameElement()) {
      const selection = this._editorService.getSelection()?.getRangeAt(0);
      console.log(selection);
      const selectedContent = selection?.extractContents();
      const tag = document.createElement(action);
      // span.style.fontWeight = 'bold';
      if (selectedContent) tag.appendChild(selectedContent);
      if (selection) selection.deleteContents();
      selection?.insertNode(tag);
    }
  }

}
