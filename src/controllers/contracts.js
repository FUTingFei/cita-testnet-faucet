const deployer = require('../utils/deployer')
const _bytecode =
  '608060405234801561001057600080fd5b50604051610a1b380380610a1b83398101806040528101908080518201929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060019080519060200190610089929190610090565b505061015d565b828054828255906000526020600020908101928215610109579160200282015b828111156101085782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906100b0565b5b509050610116919061011a565b5090565b61015a91905b8082111561015657600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600101610120565b5090565b90565b6108af8061016c6000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631d55c3f11461007d578063248bfc3b146100ea5780638162457c146101b15780638da5cb5b14610293578063f1afe04d146102ea578063f4c714b41461036b575b600080fd5b34801561008957600080fd5b506100a8600480360381019080803590602001909291905050506103b4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100f657600080fd5b50610197600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506103f2565b604051808215151515815260200191505060405180910390f35b3480156101bd57600080fd5b50610218600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610519565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561025857808201518184015260208101905061023d565b50505050905090810190601f1680156102855780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561029f57600080fd5b506102a8610638565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102f657600080fd5b50610351600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061065d565b604051808215151515815260200191505060405180910390f35b34801561037757600080fd5b5061039660048036038101908080359060200190929190505050610773565b60405180826000191660001916815260200191505060405180910390f35b6001818154811015156103c357fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000846040518082805190602001908083835b60208310151561042d5780518252602082019150602081019050602083039250610408565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209150600090505b6002805490508110156104ab57816000191660028281548110151561048257fe5b9060005260206000200154600019161415151561049e57600080fd5b8080600101915050610461565b600282908060018154018082558091505090600182039060005260206000200160009091929091909150906000191690555083600360008460001916600019168152602001908152602001600020908051906020019061050c929190610796565b5060019250505092915050565b606060036000836040518082805190602001908083835b6020831015156105555780518252602082019150602081019050602083039250610530565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019166000191681526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561062c5780601f106106015761010080835404028352916020019161062c565b820191906000526020600020905b81548152906001019060200180831161060f57829003601f168201915b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008060009250846040518082805190602001908083835b60208310151561069d5780518252602082019150602081019050602083039250610678565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209150600090505b6002805490508110156107355781600019166002828154811015156106f257fe5b90600052602060002001546000191614156107285780925060028181548110151561071957fe5b90600052602060002001600090555b80806001019150506106d1565b6000831215156107675760036000836000191660001916815260200190815260200160002060006107669190610816565b5b60019350505050919050565b60028181548110151561078257fe5b906000526020600020016000915090505481565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107d757805160ff1916838001178555610805565b82800160010185558215610805579182015b828111156108045782518255916020019190600101906107e9565b5b509050610812919061085e565b5090565b50805460018160011615610100020316600290046000825580601f1061083c575061085b565b601f01602090049060005260206000209081019061085a919061085e565b5b50565b61088091905b8082111561087c576000816000905550600101610864565b5090565b905600a165627a7a72305820910a05f6cd67e50fd57c6a9a7dcc0b1b329b4968d76b4e2922c5c3e8fcffdaf90029'
const _interface =
  '[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allowedMembers","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"file","type":"string"},{"name":"urls","type":"string"}],"name":"addFile","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"file","type":"string"}],"name":"getFileUrls","outputs":[{"name":"urls","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"file","type":"string"}],"name":"removeFile","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"files","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_allowedMembers","type":"address[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'
const contract = {
  index: (ctx, next) => {
    ctx.render('contracts/index')
  },

  new: async (ctx, next) => {
    await ctx.render('contracts/new', {
      bytecode: _bytecode,
      interface: _interface,
      message: '',
    })
  },

  create: async (ctx, next) => {
    const {
      bytecode,
      interface
    } = ctx.request.body
    try {
      JSON.parse(interface.replace(/\\{1}/, ''))
    } catch (err) {
      return await ctx.render('contracts/new', {
        bytecode,
        interface,
        message: err.message,
      })
    }
    console.log(bytecode)
    console.log(interface)
    const ins = await deployer({
      bytecode,
      interface,
    })

    console.log('contract address: ' + ins.address)

    await ctx.render('contracts/new', {
      bytecode,
      interface,
      message: `at ${ins.address}`,
    })
  },
  attack: async (ctx, next) => {
    let {
      rounds = 100
    } = ctx.params
    const txs = Array.from({
      length: rounds
    })

    const contracts = await Promise.all(txs.map(tx => {
      return deployer({
        bytecode: _bytecode,
        interface: _interface,
      }).then(ins => ins.address).catch(err => err.message)
    }))



    // while (rounds) {
    //   console.log(`remaining ${rounds}`)
    //   deployer({
    //     bytecode: _bytecode,
    //     interface: _interface,
    //   }).then(ins => contracts.push(ins.address)).catch(err => console.error(err))
    //   rounds--
    // }

    return (ctx.body = `Attack Finished, contracts are at:\n${contracts.join(',\n')}`)
  },
}
module.exports = contract
