
(function(doc){
  var scriptElm = doc.scripts[doc.scripts.length - 1];
  var warn = ['[sirius] Deprecated script, please remove: ' + scriptElm.outerHTML];

  warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:')

  var parts = scriptElm.src.split('/');
  parts.pop();
  parts.push('sirius');
  var url = parts.join('/');

  var scriptElm = doc.createElement('script');
  scriptElm.setAttribute('type', 'module');
  scriptElm.src = url + '/sirius.esm.js';
  warn.push(scriptElm.outerHTML);
  scriptElm.setAttribute('data-stencil-namespace', 'sirius');
  doc.head.appendChild(scriptElm);

  scriptElm = doc.createElement('script');
  scriptElm.setAttribute('nomodule', '');
  scriptElm.src = url + '/sirius.js';
  warn.push(scriptElm.outerHTML);
  scriptElm.setAttribute('data-stencil-namespace', 'sirius');
  doc.head.appendChild(scriptElm);

  console.warn(warn.join('\n'));

})(document);