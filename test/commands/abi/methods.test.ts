import {expect, test} from '@oclif/test'

describe('abi/methods', () => {
  test
  .stdout()
  .command(['abi/methods'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['abi/methods', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
