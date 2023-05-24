import {expect, test} from '@oclif/test'

describe('events/watch', () => {
  test
  .stdout()
  .command(['events/watch'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['events/watch', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
