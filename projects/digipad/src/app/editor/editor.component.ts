import { Component } from '@angular/core';
import { faBold, faItalic, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { EditorService } from './editor.service';

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

  /**
   * Editor actions that to be executed. E.g: 'bold', 'italic', 'underline' etc.
   * @param action string
   * @returns void
   */
  onEditorAction(action: string): void {
    console.log(action);
    switch (action) {
      case 'bold':
        this._editorService.executeAction('strong');
        break;
      default:
        break;
    }
  }

}
