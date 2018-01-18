# Plorth in browser

Simple drop-in script which enables you to run [Plorth] programming language
inside a browser, either embedded inside `<script>` tags or retrieved from
external resource if the `<script>` tag has an `src` attribute, as long as the
`type` attribute of the tag is `application/plorth`.

## Usage

Include `plorth.min.js` in `<head>` tag of your browser and declare your Plorth
scripts with `<script type="application/plorth">`, like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Plorth in a browser example</title>
    <script src="https://unpkg.com/plorth-browser@1.0.0-beta.1/plorth.min.js"></script>
  </head>
  <body>
    <script type="application/plorth">
      : print-hello "Hello, World!" print ;
      print-hello
    </script>
    <!-- Should output "Hello, World!" in browsers console. -->
  </body>
</html>
```

Each `<script>` tag is run inside separate execution context which cannot
currently interact with each other. Some kind of module system will be
implemented for this in the future.

[Plorth]: http://plorth.org
