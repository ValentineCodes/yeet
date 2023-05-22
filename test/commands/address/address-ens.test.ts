import {expect, test} from '@oclif/test'

describe('address/address-ens', () => {
  test
  .stdout()
  .command(['address/address-ens'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['address/address-ens', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
