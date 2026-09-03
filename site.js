/* site.js — Browser Lab shared enhancement layer.
   Safe by default: no app logic is rewritten.
   Source panel is opt-in via <body data-show-source="true"> or
   <script data-show-source> ... </script>.

   PrismJS, when present, provides:
   syntax highlighting, line numbers, language label and Copy.
*/
(() => {
  'use strict';

  const body = document.body;
  if (!body) return;

  document.documentElement.classList.add('site-js');

  const capabilities = {
    canvas: !!document.querySelector('canvas'),
    upload: !!document.querySelector('input[type="file"]'),
    audio: !!document.querySelector('audio'),
    video: !!document.querySelector('video'),
  };

  for (const [name, value] of Object.entries(capabilities)) {
    if (value) {
      body.dataset[`has${name[0].toUpperCase()}${name.slice(1)}`] = 'true';
    }
  }

  document
    .querySelectorAll('.tool-page img, .tool-page canvas, .tool-page video')
    .forEach(el => {
      if (!el.style.maxWidth) el.style.maxWidth = '100%';
    });

  const optIn = body.dataset.showSource === 'true';
  const markedScripts = [...document.querySelectorAll('script[data-show-source]')];
  if (!optIn && markedScripts.length === 0) return;

  const scripts = markedScripts.length
    ? markedScripts
    : [...document.querySelectorAll('script:not([src])')]
        .filter(s => !s.type || /javascript|module/i.test(s.type));

  const source = scripts
    .map(s => s.textContent.trim())
    .filter(Boolean)
    .join('\n\n');

  if (!source) return;

  const host = document.querySelector('.tool-page') || body;

  const details = document.createElement('details');
  details.className = 'lab-source';

  const summary = document.createElement('summary');
  summary.textContent = 'Source code';

  const content = document.createElement('div');
  content.className = 'lab-source__content';

  const pre = document.createElement('pre');
  pre.className = 'line-numbers language-javascript';
  pre.dataset.toolbarOrder = 'show-language,copy-to-clipboard';

  const code = document.createElement('code');
  code.className = 'language-javascript';
  code.textContent = source;

  pre.appendChild(code);
  content.appendChild(pre);
  details.append(summary, content);
  host.append(details);

  // The panel is created after Prism's normal page-load pass,
  // so highlight it explicitly.
  if (window.Prism && Prism.languages && Prism.languages.javascript) {
    Prism.highlightElement(code);
  }
})();
