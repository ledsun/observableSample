window.getDom = function aaa() {
  var o = require('observable')
  var h = require('hyperscript')
  var yourName

  return h('div',
    h('h3', 'hello, what is your name?',
      yourName = h('input', {
        placeholder: 'enter name'
      })
    ),
    h('h2', o.transform(o.input(yourName), function(v) {
      return v ? 'Happy Birthday ' + v.toUpperCase() + ' !!!' : ''
    }), {
      style: {
        'font-family': 'Comic Sans MS'
      }
    })
  )
}
