require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food town rate stick hospital history light army ghost'; 
let testAccounts = [
"0xbe040813fad05018f190d5a6348b479a802197d2980450caab457bbeba90ba30",
"0x2da180a5752fc68286adca3c97cce00ac58ea5d9989fbb4b477c779a8ba4bf41",
"0x5898dd0de4fada9d75490b1b58d90a32c9030eeaa17ce29d6051d6a53af3381f",
"0xa8e9c35f414eb489286340a5c4a3cd8104c7384355d421a2104cfc603e388fb0",
"0x20931aae525253d9ecd08b2f406e8926b8422867793514e87705f15dfd06822d",
"0xbfa247476fae83ffd74359ad5459ea5de0d11ca31b69dfdfb26fa0a4e64b3fd4",
"0x2dac3288784759d36e95e5ddf1be18ce2906aeaf66c4d44424dfe29d5af55dcd",
"0x012de3f072babcdde52571170ecea0ea0af0370abbbde71deeb5f707a2a76176",
"0xdcdecd001f588848ebb9400b1fc61056fced59b9a9527358ab6f8d82b0c94d3d",
"0xfaa81665b7f00b357c4a5a74a433c904882c23bf652e8b026ed12ae9e337a18a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

