document.addEventListener("DOMContentLoaded", function () {


  tippy('.tippy', {
    content(reference) {
      const id = reference.getAttribute('data-template');
      const template = document.getElementById(id);
      return template.innerHTML;
    },
    allowHTML: true,
    maxWidth: 264,
    interactive: true,
    interactiveDebounce: 0,
    theme: 'Blanchard',
    animation: 'scale',
    inertia: true,
  });

});