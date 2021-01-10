const { Command, flags } = require('@oclif/command')
const fs = require('fs').promises
const css2json = require('./css2json')

class StylopsCommand extends Command {
  async run () {
    const { flags } = this.parse(StylopsCommand)
    const { input = '/dev/stdin', output } = flags
    const css = await fs.readFile(input, 'utf8')
    const out = css2json(css)
    if (output) await fs.writeFile(output, out)
    else this.log(out)
  }
}

StylopsCommand.description = `Stylops
Converts CSS to JSON
`

const C = 'char'
const DESC = 'description'
const REQ = 'required'

StylopsCommand.flags = {
  version: flags.version({ [C]: 'v' }),
  help: flags.help({ [C]: 'h' }),
  input: flags.string({ [C]: 'i', [DESC]: 'input file', [REQ]: false }),
  output: flags.string({ [C]: 'o', [DESC]: 'output file', [REQ]: false })
}

module.exports = StylopsCommand
