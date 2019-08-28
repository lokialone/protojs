const yaml = require('js-yaml');
const blessed = require('blessed');
const contrib = require('blessed-contrib');
const fs  = require('fs');
const R = require('ramda');
var screen = blessed.screen({
    fullUnicode: true
});

var table = blessed.table({
    border: 'line',
    align: 'center',
    //width: '80%',
    width: 'shrink',
    vi: true,
    tags: true,
    keys: true,
    mouse: true,
    style: {
      border: {
        fg: 'red'
      },
      header: {
        fg: 'blue',
        bold: true
      },
      cell: {
        fg: 'magenta'
      }
    }
});


// Get document, or throw exception on error
try {
    var doc = yaml.safeLoad(fs.readFileSync('./config.yaml', 'utf8'));
    const { host, path } = doc;
    let tabelHeader = ['    ', '测试', '预发', '线上'];
    let tabelValue = path.map((item) => {
        let key = Object.keys(item)[0] || '';
        let value = Object.values(item)[0] || '';
        let rowValue = host.map((h) => h + value);
        return [key, ...rowValue]
    });
    tabelValue.unshift(tabelHeader);
    console.log(tabelValue);  
    table.focus();
    table.setData(tabelValue);
    table.key('enter', function(ch, key) {
      table.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
      table.setLine(1, 'bar');
      table.insertLine(1, 'foo');
      screen.render();
    });
    table.on('select', function(item, select) {
     
      input.setLabel(' ' + item.getValue() + ' ');
      screen.render();
    });
    table.on('click', function(item, select) {
      // console.log(item.getValue())
      input.setLabel(' ' +  + ' ');
      screen.render();
    });

    screen.on('element focus', function(cur, old) {
      if (old.border) old.style.border.fg = 'default';
      if (cur.border) cur.style.border.fg = 'green';
      screen.render();
    });
  // Append our box to the screen.
    screen.append(table);
    var input = blessed.textbox({
      label: '',
      content: 'cc',
      border: 'line',
      style: {
        fg: 'blue',
        bg: 'default',
        bar: {
          bg: 'default',
          fg: 'blue'
        },
        border: {
          fg: 'default',
          bg: 'default'
        }
      },
      width: '30%',
      height: 3,
      right: 0,
      top: 2,
      keys: true,
      vi: true,
      mouse: true,
      inputOnFocus: true
    });
    
    input.on('submit', function(value) {
      if (value) screen.children[0].setContent(value);
      input.clearInput();
      screen.render();
    });
    
    screen.append(input);
    screen.render();

  // Quit on Escape, q, or Control-C.
    screen.key(['escape', 'q', 'C-c'], function(ch, key) {
      return process.exit(0);
    });
} catch (e) {
  console.log(e);
}



