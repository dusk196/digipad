# DigiPad
An accessible WYSIWYG Rich Text Editor without `execCommand()` Method; that too as a web component with multi-instance support!

**Note:** ...doesn't work with Shadow Dom! (Why? See F.A.Qs)

## F.A.Qs

### Why DigiPad doesn't work with Shadow Dom?

The `Window.getSelection()` method retrieves the selection object representing the text currently selected; which is necessary for any text editor. However, when it comes to Shadow DOM, there are some limitations due to the encapsulation provided by the Shadow DOM itself.

In Shadow DOM, the content inside the shadow DOM is encapsulated, meaning that the internal structure and elements are not directly accessible or manipulable from the outside document. This encapsulation is intentional to prevent styles and scripts from unintentionally affecting the internals of the shadow DOM.

When you try to use `Window.getSelection()` to get the selection within a shadow DOM, it might not work as expected because the shadow DOM boundaries limit the access to the internals of the shadow DOM. Hence, DigiPad doesn't work with Shadow Dom... Yet! :P
