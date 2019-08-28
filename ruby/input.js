const blessed = require('blessed');

const screen = blessed.screen({
    fullUnicode: true
});
let current = null

var input = blessed.box({
    label: 'delopment',
    content: 'nihao',
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
    mouse: true,
    vi: true,
    key: true,
    inputOnFocus: true
  });
var input2 = blessed.box({
    label: 'prepub',
    value: 'xxxxxx',
    border: 'line',
    left: '30%',
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
    keys: true,
    vi: true,
    mouse: true,
    inputOnFocus: true
  });

  var input3 = blessed.box({
    label: 'production',
    value: 'xxxxxx',
    border: 'line',
    left: '60%',
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
    keys: true,
    vi: true,
    mouse: true,
    inputOnFocus: true
  });

input.on('submit', function(value) {
    // if (value) screen.children[0].setContent(value);
    // console.log('input', value)
    // 
    input.setValue(value);
    screen.render();
});
input.on('click', (item) => {
    console.log('item', item.getcontent());
})

screen.on('element focus', function(cur, old) {
    if (old.border) old.style.border.fg = 'default';
    if (cur.border) cur.style.border.fg = 'green';
    screen.render();
});
 
screen.on('element click', function(cur, old) {
        current = null
        // screen.render();
  });

screen.append(input)
screen.append(input2)
screen.append(input3)
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
});
screen.render()