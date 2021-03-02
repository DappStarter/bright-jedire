require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'give nation flush special drift release night minor include civil army genre'; 
let testAccounts = [
"0xb158ec827fc7776deea28a5ec9f290839f59e7d661b3dfe82b7947ce95dc7234",
"0xcc5e25028e71787677d76f573cc093aeaed5532775fc0c346b05abcec7c602db",
"0xaf35b93055a43729044da77efd183971cfc65e7570e8deda3f2419b108461fe2",
"0x8b8bc9954e105a273afca097a710dcbf98b41fda2ff2d4a0333b4939dadd10e9",
"0x756d8f937161c78bd274b86a9e45c67212c270aacd9dc6221da97999ab331db3",
"0xd8bda6842d4a01a607ad40d8258236c7fa9cb9350d4a2da1146e00d29a7eb1e9",
"0xdcab601c9e1a1b4b7335d870aaedcc74c3a66a78d31c0d35d117a950be9a6520",
"0x79da9f24638f560dcd38c2eca721a9a45da5f2853d11e2e163812fa2e64b9b52",
"0xc6499c1f763980b2ef8a586caff99d4f11a600888871c200fbfbd14a8ffa71e7",
"0x4806f7ed92718f68923eea5828b92d612cc0c94a5021f738d7496265e109ea64"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

