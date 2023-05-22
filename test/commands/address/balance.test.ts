import {expect, test} from '@oclif/test'

describe('address/balance', () => {
  test
  .stdout()
  .command(['address/balance'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['address/balance', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
