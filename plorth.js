import PlorthRuntime from 'plorth-interpreter';

window.addEventListener('DOMContentLoaded', () => {
  const noConflict = window.Plorth;
  const runtime = new PlorthRuntime();

  // Expose the interpreter as global variable.
  window.Plorth = runtime;
  window.Plorth.noConflict = () => {
    window.Plorth = noConflict;

    return runtime;
  };

  // Go through all <script> tags and look for ones that have
  // "application/plorth" set as their type. Evaluate Plorth
  // scripts found from those tags each in their own execution
  // context.
  Array.from(document.getElementsByTagName('script'))
    .filter(tag => tag.getAttribute('type') === 'application/plorth')
    .forEach(tag => {
      if (tag.src) {
        fetch(tag.src)
          .then(response => {
            runtime.eval(response.text());
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        runtime.eval(tag.innerText);
      }
    });
});
