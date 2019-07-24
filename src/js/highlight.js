import $ from 'jquery';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/dracula.css';
import javascript from 'highlight.js/lib/languages/javascript';
import htmlbars from 'highlight.js/lib/languages/htmlbars';
import css from 'highlight.js/lib/languages/css';
import less from 'highlight.js/lib/languages/less';
import java from 'highlight.js/lib/languages/java';
import markdown from 'highlight.js/lib/languages/markdown';
import sql from 'highlight.js/lib/languages/sql';
import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';

export default function () {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('htmlbars', htmlbars);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('less', less);
    hljs.registerLanguage('java', java);
    hljs.registerLanguage('markdown', markdown);
    hljs.registerLanguage('sql', sql);
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('bash', bash);
    hljs.registerLanguage('json', json);

    $(document).ready(function() {
        hljs.tabReplace = '  ';
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
}