import PlorthRuntime from 'plorth-interpreter';

(() => {
  const runtime = new PlorthRuntime();
  const noConflict = window.Plorth;

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
  window.addEventListener('DOMContentLoaded', () => {
    Array.from(document.getElementsByTagName('script'))
      .filter(tag => tag.getAttribute('type') === 'application/plorth')
      .forEach(tag => {
        if (tag.src) {
          fetch(tag.src)
            .then(response => response.text().then(text => {
              runtime.eval(text);
            }))
            .catch(error => {
              console.error(error);
            });
        } else {
          runtime.eval(tag.innerText);
        }
      });
  });
})();
