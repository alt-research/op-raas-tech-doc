import { EnvContext } from '../context/EnvContext';
import App from 'next/app';
// import getConfig from 'next/config';

function MyApp({ Component, pageProps }) {
  const environmentVariables = {
    // global env
    projectName: process.env.NEXT_PUBLIC_PROJECT_NAME,
    networkName: process.env.NEXT_PUBLIC_NETWORK_NAME,
    l1: process.env.NEXT_PUBLIC_L1,
    l1Explorer: process.env.NEXT_PUBLIC_L1_EXPLORER,
    l2Explorer: process.env.NEXT_PUBLIC_L2_EXPLORER,

    // mainnet env
    symbolMainnet: process.env.NEXT_PUBLIC_SYMBOL_MAINNET,
    rollupInfoPageMainnet: process.env.NEXT_PUBLIC_ROLLUP_INFO_PAGE_MAINNET,
    rpcUrlMainnet: process.env.NEXT_PUBLIC_RPC_URL_MAINNET,
    chainIDMainnet: process.env.NEXT_PUBLIC_CHAIN_ID_MAINNET,
    explorerMainnet: process.env.NEXT_PUBLIC_EXPLORER_MAINNET,
    bridgeDepositUrlMainnet: process.env.NEXT_PUBLIC_BRIDGE_DEPOSIT_URL_MAINNET,
    bridgeWithdrawUrlMainnet: process.env.NEXT_PUBLIC_BRIDGE_WITHDRAW_URL_MAINNET,


    // testnet env
    symbolTestnet: process.env.NEXT_PUBLIC_SYMBOL_TESTNET,
    rollupInfoPageTestnet: process.env.NEXT_PUBLIC_ROLLUP_INFO_PAGE_TESTNET,
    rpcUrlTestnet: process.env.NEXT_PUBLIC_RPC_URL_TESTNET,
    chainIDTestnet: process.env.NEXT_PUBLIC_CHAIN_ID_TESTNET,
    explorerTestnet: process.env.NEXT_PUBLIC_EXPLORER_TESTNET,
    bridgeDepositUrlTestnet: process.env.NEXT_PUBLIC_BRIDGE_DEPOSIT_URL_TESTNET,
    bridgeWithdrawUrlTestnet: process.env.NEXT_PUBLIC_BRIDGE_WITHDRAW_URL_TESTNET,

    // internal page env
    bridgeDepositUrl: process.env.NEXT_PUBLIC_BRIDGE_DEPOSIT_URL,

    // mainnet contract env
    addressManagerContractMainnet: process.env.NEXT_PUBLIC_ADDRESSMANAGER_CONTRACT_MAINNET,
    addressManagerUrlMainnet: process.env.NEXT_PUBLIC_ADDRESSMANAGER_URL_MAINNET,
    disputeGameFactoryProxyContractMainnet: process.env.NEXT_PUBLIC_DISPUTEGAMEFACTORY_PROXY_CONTRACT_MAINNET,
    disputeGameFactoryProxyUrlMainnet: process.env.NEXT_PUBLIC_DISPUTEGAMEFACTORY_PROXY_URL_MAINNET,
    l1CrossDomainMessengerContractMainnet: process.env.NEXT_PUBLIC_L1CROSSDOMAINMESSENGER_CONTRACT_MAINNET,
    l1CrossDomainMessengerUrlMainnet: process.env.NEXT_PUBLIC_L1CROSSDOMAINMESSENGER_URL_MAINNET,
    l1CrossDomainMessengerProxyContractMainnet: process.env.NEXT_PUBLIC_L1CROSSDOMAINMESSENGER_PROXY_CONTRACT_MAINNET,
    l1CrossDomainMessengerProxyUrlMainnet: process.env.NEXT_PUBLIC_L1CROSSDOMAINMESSENGER_PROXY_URL_MAINNET,
    l1ERC721BridgeContractMainnet: process.env.NEXT_PUBLIC_L1ERC721BRIDGE_CONTRACT_MAINNET,
    l1ERC721BridgeUrlMainnet: process.env.NEXT_PUBLIC_L1ERC721BRIDGE_URL_MAINNET,
    l1ERC721BridgeProxyUrlMainnet: process.env.NEXT_PUBLIC_L1ERC721BRIDGE_PROXY_URL_MAINNET,
    l1StandardBridgeUrlMainnet:process.env.NEXT_PUBLIC_L1STANDARDBRIDGE_URL_MAINNET,
    l1StandardBridgeProxyUrlMainnet:process.env.NEXT_PUBLIC_L1STANDARDBRIDGE_PROXY_URL_MAINNET,
    l2OutputOracleUrlMainnet:process.env.NEXT_PUBLIC_L2OUTPUTORACLE_URL_MAINNET,
    l2OutputOracleProxyUrlMainnet:process.env.NEXT_PUBLIC_L2OUTPUTORACLE_PROXY_URL_MAINNET,
    optimismMintableERC20FactoryUrlMainnet:process.env.NEXT_PUBLIC_OPTIMISMMINTABLEERC20FACTORY_URL_MAINNET,
    optimismMintableERC20FactoryProxyUrlMainnet:process.env.NEXT_PUBLIC_OPTIMISMMINTABLEERC20FACTORY_PROXY_URL_MAINNET,
    optimismPortalUrlMainnet:process.env.NEXT_PUBLIC_OPTIMISMPORTAL_URL_MAINNET,
    optimismPortalProxyUrlMainnet:process.env.NEXT_PUBLIC_OPTIMISMPORTAL_PROXY_URL_MAINNET,
    protocolVersionsUrlMainnet:process.env.NEXT_PUBLIC_PTOTOCOLVERSIONS_URL_MAINNET,
    protocolVersionsProxyUrlMainnet:process.env.NEXT_PUBLIC_PTOTOCOLVERSIONS_PROXY_URL_MAINNET,
    proxyAdminUrlMainnet:process.env.NEXT_PUBLIC_PROXYADMIN_URL_MAINNET,
    safeProxyFactoryUrlMainnet:process.env.NEXT_PUBLIC_SAFEPROXYFACTORY_URL_MAINNET,
    safeSingletonUrlMainnet:process.env.NEXT_PUBLIC_SAFESINGLETON_URL_MAINNET,
    superchainConfigUrlMainnet:process.env.NEXT_PUBLIC_SUPERCHAINCONFIG_URL_MAINNET,
    superchainConfigProxyUrlMainnet:process.env.NEXT_PUBLIC_SUPERCHAINCONFIG_PROXY_URL_MAINNET,
    systemConfigUrlMainnet:process.env.NEXT_PUBLIC_SYSTEMCONFIG_URL_MAINNET,
    systemConfigProxyUrlMainnet:process.env.NEXT_PUBLIC_SYSTEMCONFIG_PROXY_URL_MAINNET,
    systemOwnerSafeUrlMainnet:process.env.NEXT_PUBLIC_SYSTEMOWNERSAFE_URL_MAINNET,
    l1ERC721BridgeContractMainnet: process.env.NEXT_PUBLIC_L1ERC721BRIDGE_CONTRACT_MAINNET,
    l1ERC721BridgeProxyContractMainnet: process.env.NEXT_PUBLIC_L1ERC721BRIDGE_PROXY_CONTRACT_MAINNET,
    l1StandardBridgeContractMainnet:process.env.NEXT_PUBLIC_L1STANDARDBRIDGE_CONTRACT_MAINNET,
    l1StandardBridgeProxyContractMainnet:process.env.NEXT_PUBLIC_L1STANDARDBRIDGE_PROXY_CONTRACT_MAINNET,
    l2OutputOracleContractMainnet:process.env.NEXT_PUBLIC_L2OUTPUTORACLE_CONTRACT_MAINNET,
    l2OutputOracleProxyContractMainnet:process.env.NEXT_PUBLIC_L2OUTPUTORACLE_PROXY_CONTRACT_MAINNET,
    optimismMintableERC20FactoryContractMainnet:process.env.NEXT_PUBLIC_OPTIMISMMINTABLEERC20FACTORY_CONTRACT_MAINNET,
    optimismMintableERC20FactoryProxyContractMainnet:process.env.NEXT_PUBLIC_OPTIMISMMINTABLEERC20FACTORY_PROXY_CONTRACT_MAINNET,
    optimismPortalContractMainnet:process.env.NEXT_PUBLIC_OPTIMISMPORTAL_CONTRACT_MAINNET,
    optimismPortalProxyContractMainnet:process.env.NEXT_PUBLIC_OPTIMISMPORTAL_PROXY_CONTRACT_MAINNET,
    protocolVersionsContractMainnet:process.env.NEXT_PUBLIC_PTOTOCOLVERSIONS_CONTRACT_MAINNET,
    protocolVersionsProxyContractMainnet:process.env.NEXT_PUBLIC_PTOTOCOLVERSIONS_PROXY_CONTRACT_MAINNET,
    proxyAdminContractMainnet:process.env.NEXT_PUBLIC_PROXYADMIN_CONTRACT_MAINNET,
    safeProxyFactoryContractMainnet:process.env.NEXT_PUBLIC_SAFEPROXYFACTORY_CONTRACT_MAINNET,
    safeSingletonContractMainnet:process.env.NEXT_PUBLIC_SAFESINGLETON_CONTRACT_MAINNET,
    superchainConfigContractMainnet:process.env.NEXT_PUBLIC_SUPERCHAINCONFIG_CONTRACT_MAINNET,
    superchainConfigProxyContractMainnet:process.env.NEXT_PUBLIC_SUPERCHAINCONFIG_PROXY_CONTRACT_MAINNET,
    systemConfigContractMainnet:process.env.NEXT_PUBLIC_SYSTEMCONFIG_CONTRACT_MAINNET,
    systemConfigProxyContractMainnet:process.env.NEXT_PUBLIC_SYSTEMCONFIG_PROXY_CONTRACT_MAINNET,
    systemOwnerSafeContractMainnet:process.env.NEXT_PUBLIC_SYSTEMOWNERSAFE_CONTRACT_MAINNET,

    // testnet contract env
    addressManagerContractTestnet:  process.env.NEXT_PUBLIC_ADDRESSMANAGER_CONTRACT_TESTNET,
    addressManagerUrlTestnet:  process.env.NEXT_PUBLIC_ADDRESSMANAGER_URL_TESTNET,
    disputeGameFactoryProxyContractTestnet:  process.env.NEXT_PUBLIC_DISPUTEGAMEFACTORY_PROXY_CONTRACT_TESTNET,
    disputeGameFactoryProxyUrlTestnet:  process.env.NEXT_PUBLIC_DISPUTEGAMEFACTORY_PROXY_URL_TESTNET,
    l1CrossDomainMessengerContractTestnet:  process.env.NEXT_PUBLIC_L1CROSSDOMAINMESSENGER_CONTRACT_TESTNET,
    l1CrossDomainMessengerUrlTestnet:  process.env.NEXT_PUBLIC_L1CROSSDOMAINMESSENGER_URL_TESTNET,
    l1CrossDomainMessengerProxyContractTestnet:  process.env.NEXT_PUBLIC_L1CROSSDOMAINMESSENGER_PROXY_CONTRACT_TESTNET,
    l1CrossDomainMessengerProxyUrlTestnet:  process.env.NEXT_PUBLIC_L1CROSSDOMAINMESSENGER_PROXY_URL_TESTNET,
    l1ERC721BridgeContractTestnet:  process.env.NEXT_PUBLIC_L1ERC721BRIDGE_CONTRACT_TESTNET,
    l1ERC721BridgeUrlTestnet:  process.env.NEXT_PUBLIC_L1ERC721BRIDGE_URL_TESTNET,
    l1ERC721BridgeProxyUrlTestnet:  process.env.NEXT_PUBLIC_L1ERC721BRIDGE_PROXY_URL_TESTNET,
    l1StandardBridgeUrlTestnet: process.env.NEXT_PUBLIC_L1STANDARDBRIDGE_URL_TESTNET,
    l1StandardBridgeProxyUrlTestnet: process.env.NEXT_PUBLIC_L1STANDARDBRIDGE_PROXY_URL_TESTNET,
    l2OutputOracleUrlTestnet: process.env.NEXT_PUBLIC_L2OUTPUTORACLE_URL_TESTNET,
    l2OutputOracleProxyUrlTestnet: process.env.NEXT_PUBLIC_L2OUTPUTORACLE_PROXY_URL_TESTNET,
    optimismMintableERC20FactoryUrlTestnet: process.env.NEXT_PUBLIC_OPTIMISMMINTABLEERC20FACTORY_URL_TESTNET,
    optimismMintableERC20FactoryProxyUrlTestnet: process.env.NEXT_PUBLIC_OPTIMISMMINTABLEERC20FACTORY_PROXY_URL_TESTNET,
    optimismPortalUrlTestnet: process.env.NEXT_PUBLIC_OPTIMISMPORTAL_URL_TESTNET,
    optimismPortalProxyUrlTestnet: process.env.NEXT_PUBLIC_OPTIMISMPORTAL_PROXY_URL_TESTNET,
    protocolVersionsUrlTestnet: process.env.NEXT_PUBLIC_PTOTOCOLVERSIONS_URL_TESTNET,
    protocolVersionsProxyUrlTestnet: process.env.NEXT_PUBLIC_PTOTOCOLVERSIONS_PROXY_URL_TESTNET,
    proxyAdminUrlTestnet: process.env.NEXT_PUBLIC_PROXYADMIN_URL_TESTNET,
    safeProxyFactoryUrlTestnet: process.env.NEXT_PUBLIC_SAFEPROXYFACTORY_URL_TESTNET,
    safeSingletonUrlTestnet: process.env.NEXT_PUBLIC_SAFESINGLETON_URL_TESTNET,
    superchainConfigUrlTestnet: process.env.NEXT_PUBLIC_SUPERCHAINCONFIG_URL_TESTNET,
    superchainConfigProxyUrlTestnet: process.env.NEXT_PUBLIC_SUPERCHAINCONFIG_PROXY_URL_TESTNET,
    systemConfigUrlTestnet: process.env.NEXT_PUBLIC_SYSTEMCONFIG_URL_TESTNET,
    systemConfigProxyUrlTestnet: process.env.NEXT_PUBLIC_SYSTEMCONFIG_PROXY_URL_TESTNET,
    systemOwnerSafeUrlTestnet: process.env.NEXT_PUBLIC_SYSTEMOWNERSAFE_URL_TESTNET,
    l1ERC721BridgeContractTestnet:  process.env.NEXT_PUBLIC_L1ERC721BRIDGE_CONTRACT_TESTNET,
    l1ERC721BridgeProxyContractTestnet:  process.env.NEXT_PUBLIC_L1ERC721BRIDGE_PROXY_CONTRACT_TESTNET,
    l1StandardBridgeContractTestnet: process.env.NEXT_PUBLIC_L1STANDARDBRIDGE_CONTRACT_TESTNET,
    l1StandardBridgeProxyContractTestnet: process.env.NEXT_PUBLIC_L1STANDARDBRIDGE_PROXY_CONTRACT_TESTNET,
    l2OutputOracleContractTestnet: process.env.NEXT_PUBLIC_L2OUTPUTORACLE_CONTRACT_TESTNET,
    l2OutputOracleProxyContractTestnet: process.env.NEXT_PUBLIC_L2OUTPUTORACLE_PROXY_CONTRACT_TESTNET,
    optimismMintableERC20FactoryContractTestnet: process.env.NEXT_PUBLIC_OPTIMISMMINTABLEERC20FACTORY_CONTRACT_TESTNET,
    optimismMintableERC20FactoryProxyContractTestnet: process.env.NEXT_PUBLIC_OPTIMISMMINTABLEERC20FACTORY_PROXY_CONTRACT_TESTNET,
    optimismPortalContractTestnet: process.env.NEXT_PUBLIC_OPTIMISMPORTAL_CONTRACT_TESTNET,
    optimismPortalProxyContractTestnet: process.env.NEXT_PUBLIC_OPTIMISMPORTAL_PROXY_CONTRACT_TESTNET,
    protocolVersionsContractTestnet: process.env.NEXT_PUBLIC_PTOTOCOLVERSIONS_CONTRACT_TESTNET,
    protocolVersionsProxyContractTestnet: process.env.NEXT_PUBLIC_PTOTOCOLVERSIONS_PROXY_CONTRACT_TESTNET,
    proxyAdminContractTestnet: process.env.NEXT_PUBLIC_PROXYADMIN_CONTRACT_TESTNET,
    safeProxyFactoryContractTestnet: process.env.NEXT_PUBLIC_SAFEPROXYFACTORY_CONTRACT_TESTNET,
    safeSingletonContractTestnet: process.env.NEXT_PUBLIC_SAFESINGLETON_CONTRACT_TESTNET,
    superchainConfigContractTestnet: process.env.NEXT_PUBLIC_SUPERCHAINCONFIG_CONTRACT_TESTNET,
    superchainConfigProxyContractTestnet: process.env.NEXT_PUBLIC_SUPERCHAINCONFIG_PROXY_CONTRACT_TESTNET,
    systemConfigContractTestnet: process.env.NEXT_PUBLIC_SYSTEMCONFIG_CONTRACT_TESTNET,
    systemConfigProxyContractTestnet: process.env.NEXT_PUBLIC_SYSTEMCONFIG_PROXY_CONTRACT_TESTNET,
    systemOwnerSafeContractTestnet: process.env.NEXT_PUBLIC_SYSTEMOWNERSAFE_CONTRACT_TESTNET,
  };

  return (
    // <EnvContext.Provider value={publicRuntimeConfig}>
    <EnvContext.Provider value={environmentVariables}>
      <Component {...pageProps} />
    </EnvContext.Provider>
  );
}

export default MyApp;
