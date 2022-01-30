import { Component } from '@angular/core';
import { faBold, faItalic, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { EditorService } from './editor.service';

export interface ExecCommandStyle {
  style: 'color' | 'background-color' | 'font-size' | 'font-weight' | 'font-style' | 'text-decoration';
  value: string;
  initial: (element: HTMLElement | null) => Promise<boolean>;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'digipad-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent {

  constructor(private _editorService: EditorService) { }

  faBold: IconDefinition = faBold;
  faItalic: IconDefinition = faItalic
  text = [
    {
      text: '<p>Hello World</p>'
    }
  ];

  onEditorAction(action: string) {
    switch (action) {
      case 'highlight':
        if (this._editorService.isSameElement())
          this._editorService.getSelection()?.getRangeAt(0).commonAncestorContainer.childNodes.forEach(element => {
            console.log(element);
          });
        break;

      default:
        break;
    }
  }

  onSelect($event: Event) {
    // console.log($event)
  }

  onBold(): void {
    const selection = this._editorService.getSelection()?.getRangeAt(0);
    console.log(selection);
    const selectedContent = selection?.extractContents();
    const span = document.createElement('span');
    span.style.backgroundColor = 'lightpink';
    console.log(selectedContent);
    if (selectedContent) span.appendChild(selectedContent);
    if (selection) selection.deleteContents();
    selection?.insertNode(span);

    // const range = this.getSelection()?.getRangeAt(0);
    // if (range) {
    //   const oldConent = document.createTextNode(range ? range.toString() : '');
    //   const newElement = document.createElement('span');
    //   newElement.style.fontSize = '32px';
    //   newElement.append(oldConent);
    //   console.log(oldConent);
    //   range.deleteContents();
    //   range.insertNode(newElement);
    // }
    // this.getSelection().getRangeAt(0).startContainer.previousElementSibling.style['background-color']
  }

  onItalics(): void {
    // const selection = this.getSelection()?.getRangeAt(0);
    // const selectedContent = selection?.extractContents();
    // const span = document.createElement('span');
    // span.style.backgroundColor = 'lightpink';
    // if (selectedContent) span.appendChild(selectedContent);
    // selection?.insertNode(span);

    const range = this._editorService.getSelection()?.getRangeAt(0);
    if (range) {
      const oldConent = document.createTextNode(range ? range.toString() : '');
      const newElement = document.createElement('span');
      newElement.style.fontSize = '20px';
      newElement.append(oldConent);
      range.deleteContents();
      range.insertNode(newElement);
    }
  }

  remFor(): void {
    const range = this._editorService.getSelection()?.getRangeAt(0);
    if (range) {
      const oldConent = document.createTextNode(range ? range.toString() : '');
      const newElement = document.createElement('span');
      newElement.style.fontSize = '32px';
      newElement.append(oldConent);
      range.deleteContents();
      range.insertNode(newElement);
    }
  }

  applyTagChanges(tag: string): void {
    console.log(this._editorService.isSameElement());
    if (this._editorService.isSameElement()) {
      const selection = this._editorService.getSelection()?.getRangeAt(0);
      console.log(selection);
      const selectedContent = selection?.extractContents();
      const span = document.createElement('strong');
      span.style.fontWeight = 'bold';
      if (selectedContent) span.appendChild(selectedContent);
      if (selection) selection.deleteContents();
      selection?.insertNode(span);
    }
  }

}
