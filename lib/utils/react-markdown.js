'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('../components/Link/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */

function extend(o1, o2) {
  Object.keys(o2).forEach(function (key) {
    o1[key] = o2[key];
  });
}

var itemsRenderedCount = 0;

function ReactRenderer() {}

extend(ReactRenderer.prototype, {
  code: function code(_code, lang, escaped) {
    var className = this.props && this.props.langPrefix;
    return _react2.default.DOM.pre({ key: itemsRenderedCount++ }, _react2.default.DOM.code({ className: className }, _code));
  },
  blockquote: function blockquote(quote) {
    return _react2.default.DOM.blockquote({ key: itemsRenderedCount++ }, quote);
  },
  heading: function heading(text, level, raw) {
    return _react2.default.DOM['h' + level]({ key: itemsRenderedCount++ }, text);
  },
  hr: function hr() {
    return _react2.default.DOM.hr({ key: itemsRenderedCount++ });
  },
  br: function br() {
    return _react2.default.DOM.br({ key: itemsRenderedCount++ });
  },
  list: function list(body, ordered) {
    if (ordered) {
      return _react2.default.DOM.ol({ key: itemsRenderedCount++ }, body);
    }
    return _react2.default.DOM.ul({ key: itemsRenderedCount++ }, body);
  },
  listitem: function listitem(text) {
    return _react2.default.DOM.li({ key: itemsRenderedCount++ }, text);
  },
  paragraph: function paragraph(text) {
    return _react2.default.DOM.p({ key: itemsRenderedCount++ }, text);
  },
  table: function table(header, body) {
    return _react2.default.DOM.table({ key: itemsRenderedCount++ }, _react2.default.DOM.thead(null, header), _react2.default.DOM.tbody(null, body));
  },
  tablerow: function tablerow(content) {
    return _react2.default.DOM.tr({ key: itemsRenderedCount++ }, content);
  },
  tablecell: function tablecell(content) {
    return _react2.default.DOM.td({ key: itemsRenderedCount++ }, content);
  },
  strong: function strong(content) {
    return _react2.default.DOM.strong({ key: itemsRenderedCount++ }, content);
  },
  em: function em(content) {
    return _react2.default.DOM.em({ key: itemsRenderedCount++ }, content);
  },
  codespan: function codespan(content) {
    return _react2.default.DOM.code({ key: itemsRenderedCount++ }, content);
  },
  del: function del(content) {
    return _react2.default.DOM.del({ key: itemsRenderedCount++ }, content);
  },
  link: function link(href, title, text) {
    return _react2.default.createElement(
      _Link2.default,
      { to: href, title: title, key: itemsRenderedCount++ },
      text
    );
  },
  image: function image(href, title, text) {
    function done(e) {
      e.preventDefault();console.log(itemsRenderedCount);return false;
    }
    if (!href) {
      return _react2.default.DOM.img({ src: href, title: title, alt: text, key: itemsRenderedCount++, onDrop: done });
    }
    return _react2.default.DOM.img({ src: href, title: title, alt: text, key: itemsRenderedCount++ });
  },
  html: function html(_html) {
    return _react2.default.DOM.div({ dangerouslySetInnerHTML: { __html: _html.join('') }, key: itemsRenderedCount++ });
  }
});

function ReactParser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || {};
  this.options.renderer = this.options.renderer || new ReactRenderer();
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

ReactParser.parse = function (src, options) {
  var parser = new ReactParser(options);
  return parser.parse(src);
};

extend(ReactParser.prototype, {
  parse: function parse(src) {
    var out = [],
        i = 0,
        next;
    this.inline = new ReactInlineLexer(src.links, this.options, this.renderer);
    this.tokens = src.reverse();

    while (this.next()) {
      out.push(this.tok());
    }

    return out; // React.DOM.div(null, out);
  },
  next: function next() {
    return this.token = this.tokens.pop();
  },
  peek: function peek() {
    return this.tokens[this.tokens.length - 1] || 0;
  },
  parseText: function parseText() {
    var body = this.token.text;
    while (this.peek().type === 'text') {
      body += '\n' + this.next().text;
    }
    return this.inline.output(body);
  },
  tok: function tok() {
    switch (this.token.type) {
      case 'space':
        {
          return '';
        }
      case 'hr':
        {
          return this.renderer.hr();
        }
      case 'heading':
        {
          return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
        }
      case 'code':
        {
          return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
        }
      case 'table':
        {
          var header = [],
              body = [],
              i,
              row,
              cell,
              flags,
              j;

          // header
          cell = [];
          for (i = 0; i < this.token.header.length; i++) {
            flags = { header: true, align: this.token.align[i] };
            cell.push(this.renderer.tablecell(this.inline.output(this.token.header[i]), { header: true, align: this.token.align[i] }));
          }
          header.push(this.renderer.tablerow(cell));

          for (i = 0; i < this.token.cells.length; i++) {
            row = this.token.cells[i];

            cell = [];
            for (j = 0; j < row.length; j++) {
              cell.push(this.renderer.tablecell(this.inline.output(row[j]), { header: false, align: this.token.align[j] }));
            }

            body.push(this.renderer.tablerow(cell));
          }
          return this.renderer.table(header, body);
        }
      case 'blockquote_start':
        {
          var body = [];

          while (this.next().type !== 'blockquote_end') {
            body.push(this.tok());
          }

          return this.renderer.blockquote(body);
        }
      case 'list_start':
        {
          var body = [],
              ordered = this.token.ordered;

          while (this.next().type !== 'list_end') {
            body.push(this.tok());
          }

          return this.renderer.list(body, ordered);
        }
      case 'list_item_start':
        {
          var body = [];

          while (this.next().type !== 'list_item_end') {
            body.push(this.token.type === 'text' ? this.parseText() : this.tok());
          }

          return this.renderer.listitem(body);
        }
      case 'loose_item_start':
        {
          var body = [];

          while (this.next().type !== 'list_item_end') {
            body.push(this.tok());
          }

          return this.renderer.listitem(body);
        }
      case 'html':
        {
          var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
          return this.renderer.html(html);
        }
      case 'paragraph':
        {
          return this.renderer.paragraph(this.inline.output(this.token.text));
        }
      case 'text':
        {
          return this.renderer.paragraph(this.parseText());
        }
    }
  }
});

var ReactInlineLexer = _marked2.default.InlineLexer.prototype.constructor;

ReactInlineLexer.prototype = Object.create(_marked2.default.InlineLexer.prototype);

ReactInlineLexer.prototype.output = function (src) {
  var out = [],
      link,
      text,
      href,
      cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out.push(cap[1]);
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':' ? this.mangle(cap[1].substring(7)) : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out.push(this.renderer.link(href, null, text));
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out.push(this.renderer.link(href, null, text));
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out.push(this.options.sanitize ? escape(cap[0]) : cap[0]);
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out.push(this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      }));
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out.push(cap[0].charAt(0));
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out.push(this.outputLink(cap, link));
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out.push(this.renderer.strong(this.output(cap[2] || cap[1])));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out.push(this.renderer.em(this.output(cap[2] || cap[1])));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out.push(this.renderer.codespan(escape(cap[2], true)));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out.push(this.renderer.br());
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out.push(this.renderer.del(this.output(cap[1])));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out.push(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

function escape(html, encode) {
  return html;
}

var Marked = function Marked(src, opt, callback) {
  return ReactParser.parse(_marked2.default.lexer(src), opt);
};

Marked.Renderer = ReactRenderer;

exports.default = Marked;