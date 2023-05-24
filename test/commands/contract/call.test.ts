import {expect, test} from '@oclif/test'

describe('contract/call', () => {
  test
  .stdout()
  .command(['contract/call'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['contract/call', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
