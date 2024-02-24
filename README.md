# DigiPad

An accessible WYSIWYG Rich Text Editor without `execCommand()` Method; that too as a web component with multi-instance support!

**Note:** ...doesn't work with Shadow Dom! (Why? See F.A.Qs)

## So how to use this DigiPad?

Using this editor is pretty simple!

```html
<digipad id="editor1"></digipad>
```

| Attribute | Example | Description | Default value |
|-|-|-|-|
| id (string) | `<digipad id="editor1"></digipad>` | Unique ID that will be used to identify the editor instance. | Randomly generated UUIDs if not provided or provided values are not unique in case of multiple instances. |
| readonly (boolean) | `<digipad readonly=true></digipad>` | Row 2, Col 3 | false |
| disabled (boolean) | `<digipad disabled=true></digipad>` | Row 3, Col 3 | false |

## F.A.Qs

### Why DigiPad doesn't work with Shadow Dom?

The `Window.getSelection()` method retrieves the selection object representing the text currently selected; which is necessary for any text editor. However, when it comes to Shadow DOM, there are some limitations due to the encapsulation provided by the Shadow DOM itself.

In Shadow DOM, the content inside the shadow DOM is encapsulated, meaning that the internal structure and elements are not directly accessible or manipulable from the outside document. This encapsulation is intentional to prevent styles and scripts from unintentionally affecting the internals of the shadow DOM.

When you try to use `Window.getSelection()` to get the selection within a shadow DOM, it might not work as expected because the shadow DOM boundaries limit the access to the internals of the shadow DOM. Hence, DigiPad doesn't work with Shadow Dom... Yet! 😜
