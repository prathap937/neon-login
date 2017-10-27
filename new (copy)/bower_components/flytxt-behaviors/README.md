# flytxt-behaviors

A collection of polymer behaviors.

See [Polymer Behaviors](https://www.polymer-project.org/1.0/docs/devguide/behaviors.html)

## Flytxt.TemplateHelper

Flytxt.TemplateHelper adds a few helper functions for use within template bindings.

## Flytxt.webL10n

Flytxt.webL10n behavior ensures an l10n object is bound to an element and it provides a utility function webL10n to fetch localised strings.

## Flytxt.XhrHelper

Flytxt.XhrHelper adds the following functionality for XHR:

1. handles displaying and hiding of load mask
    For this functionality to work, add a loadMask element as follows in your index.html.

    ```html
      <div id="loadMask">
        <paper-spinner active></paper-spinner>
      </div>
    ```
    And add styling similar to:
    
    ```html
      <style>
      #loadMask {
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: rgba(255, 255, 255, 0.3);
      }
    
      #loadMask paper-spinner {
       top: 50%;
       left: 50%;
       margin-left: -14px;
      }
      </style>
    ```
2. common error handling - you may extend xhrErrors property or use webL10n to customize the error messages
Error are displayed as toasts, so add a toast element as follows in your index.html.

    ```html
      <paper-toast id="toast"></paper-toast>
    ```
    For 401 error, which is usually a user not logged in or session timeout, an `unauthorized-session` event will be fired on window. You may add event handling to perform relevant application logic.