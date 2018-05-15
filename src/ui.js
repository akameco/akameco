/* eslint react/react-in-jsx-scope: 0, react/display-name: 0 */
'use strict'
const { h, Text } = require('ink') // eslint-disable-line no-unused-vars
const SelectInput = require('ink-select-input')
const opn = require('opn')

const open = url => opn(url, { wait: false })

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const items = [
  {
    label: 'Website',
    url: 'https://akameco.github.io',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/akameco',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/akameco',
  },
  {
    label: 'Qiita',
    url: 'http://qiita.com/akameco',
  },
  {
    label: 'Quit',
    action() {
      process.exit() // eslint-disable-line no-process-exit,unicorn/no-process-exit
    },
  },
]

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>I’m a Web FrontEnd developer.</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
