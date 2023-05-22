import {expect, test} from '@oclif/test'

describe('generateAccount', () => {
  test
  .stdout()
  .command(['generateAccount'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['generateAccount', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
