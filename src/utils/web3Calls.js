import GrantContract from '../../build/contracts/Grant.json';
import GrantFactoryContract from '../../build/contracts/GrantFactory.json';
import FEATTokenContract from '../../build/contracts/FEATToken.json';
import FEATFactoryContract from '../../build/contracts/FEATFactory.json';
import contract from 'truffle-contract'

export function createGrant(_web3, _grantTitle, _grantTopic, _amountNeeded, _summary, _ipfsDescriptionHash) {
    const grant = contract(GrantContract);
    grant.setProvider(_web3.currentProvider);

    const grantFactory = contract(GrantFactoryContract);
    grantFactory.setProvider(_web3.currentProvider);

    let grantFactoryInstance;

   return new Promise((resolve, reject)=> {
       // Get accounts.
       _web3.eth.getAccounts((error, accounts) => {

           return grantFactory.deployed().then((instance) => {
               grantFactoryInstance = instance;

               return grantFactoryInstance.createGrantProposal(
                   _grantTitle,
                   _grantTopic,
                   _amountNeeded,
                   _summary,
                   _ipfsDescriptionHash,
                   {
                       from: accounts[0]
                   }
               );

           }).then((result) => {
               resolve(result);
           }).catch((error) => {
               reject(error);
           });
       })
   });
}

export function getAllGrants(_web3) {
    const grantFactory = contract(GrantFactoryContract);
    grantFactory.setProvider(_web3.currentProvider);

    return new Promise((resolve, reject)=> {
        return grantFactory.deployed().then((instance) => {

            const abi = instance.abi;
            const contractAtABI = _web3.eth.contract(abi);
            const contractAtAddress = contractAtABI.at(instance.address);
            let event = contractAtAddress.GrantCreated({},{fromBlock: 0, toBlock: 'latest'});

            event.get(function(error, result) {
                if(error) {
                    reject.log(error);
                } else {
                    const tempArray = [];
                    result.forEach((grant) => {
                        tempArray.push(
                            {
                                creatorAddress: grant.args._creatorAddress,
                                grantAddress: grant.args._grantAddress,
                                grantTitle: grant.args._grantTitle,
                                grantTopic: grant.args._grantTopic
                            }
                        );
                    });
                    resolve(tempArray);
                }
            });
        });
    });
}

export function getSpecificGrant(_web3, _grantAddress) {
    const grant = contract(GrantContract);
    grant.setProvider(_web3.currentProvider);

    return new Promise(async (resolve, reject) => {

        const instance = grant.at(_grantAddress);

        console.log(instance);

        let grantInfo = {
        };

        grantInfo.grantAddress = _grantAddress;
        grantInfo.owner = await instance.owner();
        grantInfo.grantTitle = await instance.grantTitle();
        grantInfo.grantTopic = await instance.grantTopic();
        grantInfo.amountNeeded = _web3.fromWei((await instance.amountNeeded()), "ether").toNumber();
        grantInfo.amountGranted = _web3.fromWei((await instance.amountGranted()), "ether").toNumber();
        grantInfo.summary = await instance.summary();
        grantInfo.ipfsDescriptionHash = await instance.ipfsDescriptionHash();
        grantInfo.funded = await instance.funded();
        grantInfo.withdrawn = await instance.withdrawn();
        grantInfo.completed = await instance.completed();
        resolve(grantInfo);
    });
}

export function fundGrant(_web3, _grantAddress, _valueToFund) {
    const grant = contract(GrantContract);
    grant.setProvider(_web3.currentProvider);

    return new Promise(async (resolve, reject) => {

        const instance = grant.at(_grantAddress);

        _web3.eth.getAccounts((error, accounts) => {
            instance.fundGrant(
                {
                    value: _valueToFund,
                    from: accounts[0]
                }
            ).then((result) => {
                resolve(result);
            });
        });
    });
}

export function createFEATToken(_web3, _name, _symbol, _totalSupply, _percentCut) {
    const featFactory = contract(FEATFactoryContract);
    featFactory.setProvider(_web3.currentProvider);

    let featFactoryInstance;

    return new Promise((resolve, reject)=> {
        // Get accounts.
        _web3.eth.getAccounts((error, accounts) => {

            return featFactory.deployed().then((instance) => {
                featFactoryInstance = instance;

                return featFactoryInstance.createFEATToken(
                    _name,
                    _symbol,
                    _totalSupply,
                    _percentCut,
                    {
                        from: accounts[0]
                    }
                );

            }).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        })
    });
}

export function getAllFEATs(_web3) {
    const featFactory = contract(FEATFactoryContract);
    featFactory.setProvider(_web3.currentProvider);

    return new Promise((resolve, reject)=> {
        return featFactory.deployed().then((instance) => {

            const abi = instance.abi;
            const contractAtABI = _web3.eth.contract(abi);
            const contractAtAddress = contractAtABI.at(instance.address);
            let event = contractAtAddress.FEATCreated({},{fromBlock: 0, toBlock: 'latest'});

            // event.get(function(error, result) {
            //     if(error) {
            //         reject.log(error);
            //     } else {
            //         const tempArray = [];
            //         result.forEach((feat) => {
            //             tempArray.push(
            //                 {
            //                     FEATAddress: feat.args.FEATAddress,
            //                     FEATName: feat.args.FEATName,
            //                     FEATSymbol: feat.args.FEATSymbol,
            //                     creatorAddress: feat.args.creatorAddress
            //                 }
            //             );
            //         });
            //         resolve(tempArray);
            //     }
            // });
            const tempArray = [
                {
                    FEATAddress: "0x627306090abab3a6e1400e9345bc60c78a8bef59",
                    FEATName: "Peter Griffin Group",
                    FEATSymbol: "PGG",
                    creatorAddress: "0x627306090abab3a6e1400e9345bc60c78a8bef57"
                },
                {
                    FEATAddress: "0x627306090abab3a6e1400e93458d60c78a8bef59",
                    FEATName: "Bob Jones Group",
                    FEATSymbol: "BJG",
                    creatorAddress: "0x627306090abab3a6e1400e9345bc60c78a8bef57"
                }
            ];
            resolve(tempArray);
        });
    });
}

export function firstProposeProposal(_web3, _featAddress, _grantAddress, _amountToFund) {
    const featToken = contract(FEATTokenContract);
    featToken.setProvider(_web3.currentProvider);

    return new Promise(async (resolve, reject) => {

        const instance = featToken.at(_featAddress);

        _web3.eth.getAccounts((error, accounts) => {
            instance.firstProposeProposal(
                _grantAddress,
                _amountToFund,
                {
                    from: accounts[0]
                }
            ).then((result) => {
                resolve(result);
            });
        });
    });
}

export function getAllFEATProposalsForFeat(_web3, _featAddress) {
    const featToken = contract(FEATTokenContract);
    featToken.setProvider(_web3.currentProvider);

    return new Promise((resolve, reject)=> {
        const abi = featToken.abi;
        const contractAtABI = _web3.eth.contract(abi);
        const contractAtAddress = contractAtABI.at(_featAddress);
        let event = contractAtAddress.GrantProposed({FEATAddress: _featAddress},{fromBlock: 0, toBlock: 'latest'});

        // event.get(function(error, result) {
        //     if(error) {
        //         reject.log(error);
        //     } else {
        //         const tempArray = [];
        //         result.forEach((proposal) => {
        //             tempArray.push(
        //                 {
        //                     FEATAddress: proposal.args.FEATAddress,
        //                     amountToFund: _web3.fromWei(proposal.args.amountToFund, "ether").toNumber(),
        //                     grantAddress: proposal.args.grantAddress,
        //                     proposer: proposal.args.proposer
        //                 }
        //             );
        //         });
        //         resolve(tempArray);
        //     }
        // });
        const tempArray = [
            {
                FEATAddress: "0x627306090abab3a6e1400e9345bc60c78a8bef59",
                amountToFund: "1000000000000000000",
                grantAddress: "0xsdf83kdid93b3a6e1400e9345bc60c78a8bef59",
                creatorAddress: "0x627306090abab3a6e1400e9345bc60c78a8bef57"
            },
            {
                FEATAddress: "0x627306090abab3a6e1400e9345bc60c78a8bef59",
                amountToFund: "1000000000000000000",
                grantAddress: "0xsdf83kdid93b3a6sdfsfsdfsdfsd0c78a8bef59",
                creatorAddress: "0x627306090abab3a6e1400e9345bc60c78a8bef57"
            }
        ];
        resolve(tempArray);
    });
}


