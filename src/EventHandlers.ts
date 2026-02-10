/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  AlgebraFactory,
  AlgebraFactory_CustomPool,
  AlgebraFactory_DefaultCommunityFee,
  AlgebraFactory_DefaultFee,
  AlgebraFactory_DefaultPluginFactory,
  AlgebraFactory_DefaultTickspacing,
  AlgebraFactory_OwnershipTransferStarted,
  AlgebraFactory_OwnershipTransferred,
  AlgebraFactory_Pool,
  AlgebraFactory_RenounceOwnershipFinish,
  AlgebraFactory_RenounceOwnershipStart,
  AlgebraFactory_RenounceOwnershipStop,
  AlgebraFactory_RoleAdminChanged,
  AlgebraFactory_RoleGranted,
  AlgebraFactory_RoleRevoked,
  AlgebraFactory_VaultFactory,
  AlgebraPool,
  AlgebraPool_Burn,
  AlgebraPool_Collect,
  AlgebraPool_CommunityFee,
  AlgebraPool_CommunityVault,
  AlgebraPool_ExcessTokens,
  AlgebraPool_Fee,
  AlgebraPool_Flash,
  AlgebraPool_Initialize,
  AlgebraPool_Mint,
  AlgebraPool_Plugin,
  AlgebraPool_PluginConfig,
  AlgebraPool_Skim,
  AlgebraPool_Swap,
  AlgebraPool_TickSpacing,
} from "generated";

AlgebraFactory.CustomPool.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_CustomPool = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    deployer: event.params.deployer,
    token0: event.params.token0,
    token1: event.params.token1,
    pool: event.params.pool,
  };

  context.AlgebraFactory_CustomPool.set(entity);
});

AlgebraFactory.DefaultCommunityFee.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_DefaultCommunityFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newDefaultCommunityFee: event.params.newDefaultCommunityFee,
  };

  context.AlgebraFactory_DefaultCommunityFee.set(entity);
});

AlgebraFactory.DefaultFee.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_DefaultFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newDefaultFee: event.params.newDefaultFee,
  };

  context.AlgebraFactory_DefaultFee.set(entity);
});

AlgebraFactory.DefaultPluginFactory.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_DefaultPluginFactory = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    defaultPluginFactoryAddress: event.params.defaultPluginFactoryAddress,
  };

  context.AlgebraFactory_DefaultPluginFactory.set(entity);
});

AlgebraFactory.DefaultTickspacing.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_DefaultTickspacing = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newDefaultTickspacing: event.params.newDefaultTickspacing,
  };

  context.AlgebraFactory_DefaultTickspacing.set(entity);
});

AlgebraFactory.OwnershipTransferStarted.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_OwnershipTransferStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.AlgebraFactory_OwnershipTransferStarted.set(entity);
});

AlgebraFactory.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.AlgebraFactory_OwnershipTransferred.set(entity);
});

AlgebraFactory.Pool.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_Pool = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token0: event.params.token0,
    token1: event.params.token1,
    pool: event.params.pool,
  };

  context.AlgebraFactory_Pool.set(entity);
});

AlgebraFactory.RenounceOwnershipFinish.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_RenounceOwnershipFinish = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    timestamp: event.params.timestamp,
  };

  context.AlgebraFactory_RenounceOwnershipFinish.set(entity);
});

AlgebraFactory.RenounceOwnershipStart.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_RenounceOwnershipStart = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    timestamp: event.params.timestamp,
    finishTimestamp: event.params.finishTimestamp,
  };

  context.AlgebraFactory_RenounceOwnershipStart.set(entity);
});

AlgebraFactory.RenounceOwnershipStop.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_RenounceOwnershipStop = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    timestamp: event.params.timestamp,
  };

  context.AlgebraFactory_RenounceOwnershipStop.set(entity);
});

AlgebraFactory.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.AlgebraFactory_RoleAdminChanged.set(entity);
});

AlgebraFactory.RoleGranted.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.AlgebraFactory_RoleGranted.set(entity);
});

AlgebraFactory.RoleRevoked.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.AlgebraFactory_RoleRevoked.set(entity);
});

AlgebraFactory.VaultFactory.handler(async ({ event, context }) => {
  const entity: AlgebraFactory_VaultFactory = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newVaultFactory: event.params.newVaultFactory,
  };

  context.AlgebraFactory_VaultFactory.set(entity);
});

AlgebraPool.Burn.handler(async ({ event, context }) => {
  const entity: AlgebraPool_Burn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    bottomTick: event.params.bottomTick,
    topTick: event.params.topTick,
    liquidityAmount: event.params.liquidityAmount,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    pluginFee: event.params.pluginFee,
  };

  context.AlgebraPool_Burn.set(entity);
});

AlgebraPool.Collect.handler(async ({ event, context }) => {
  const entity: AlgebraPool_Collect = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    recipient: event.params.recipient,
    bottomTick: event.params.bottomTick,
    topTick: event.params.topTick,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.AlgebraPool_Collect.set(entity);
});

AlgebraPool.CommunityFee.handler(async ({ event, context }) => {
  const entity: AlgebraPool_CommunityFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    communityFeeNew: event.params.communityFeeNew,
  };

  context.AlgebraPool_CommunityFee.set(entity);
});

AlgebraPool.CommunityVault.handler(async ({ event, context }) => {
  const entity: AlgebraPool_CommunityVault = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newCommunityVault: event.params.newCommunityVault,
  };

  context.AlgebraPool_CommunityVault.set(entity);
});

AlgebraPool.ExcessTokens.handler(async ({ event, context }) => {
  const entity: AlgebraPool_ExcessTokens = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.AlgebraPool_ExcessTokens.set(entity);
});

AlgebraPool.Fee.handler(async ({ event, context }) => {
  const entity: AlgebraPool_Fee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fee: event.params.fee,
  };

  context.AlgebraPool_Fee.set(entity);
});

AlgebraPool.Flash.handler(async ({ event, context }) => {
  const entity: AlgebraPool_Flash = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    recipient: event.params.recipient,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    paid0: event.params.paid0,
    paid1: event.params.paid1,
  };

  context.AlgebraPool_Flash.set(entity);
});

AlgebraPool.Initialize.handler(async ({ event, context }) => {
  const entity: AlgebraPool_Initialize = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    price: event.params.price,
    tick: event.params.tick,
  };

  context.AlgebraPool_Initialize.set(entity);
});

AlgebraPool.Mint.handler(async ({ event, context }) => {
  const entity: AlgebraPool_Mint = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    bottomTick: event.params.bottomTick,
    topTick: event.params.topTick,
    liquidityAmount: event.params.liquidityAmount,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.AlgebraPool_Mint.set(entity);
});

AlgebraPool.Plugin.handler(async ({ event, context }) => {
  const entity: AlgebraPool_Plugin = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newPluginAddress: event.params.newPluginAddress,
  };

  context.AlgebraPool_Plugin.set(entity);
});

AlgebraPool.PluginConfig.handler(async ({ event, context }) => {
  const entity: AlgebraPool_PluginConfig = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newPluginConfig: event.params.newPluginConfig,
  };

  context.AlgebraPool_PluginConfig.set(entity);
});

AlgebraPool.Skim.handler(async ({ event, context }) => {
  const entity: AlgebraPool_Skim = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    to: event.params.to,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.AlgebraPool_Skim.set(entity);
});

AlgebraPool.Swap.handler(async ({ event, context }) => {
  const entity: AlgebraPool_Swap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    recipient: event.params.recipient,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
    price: event.params.price,
    liquidity: event.params.liquidity,
    tick: event.params.tick,
    overrideFee: event.params.overrideFee,
    pluginFee: event.params.pluginFee,
  };

  context.AlgebraPool_Swap.set(entity);
});

AlgebraPool.TickSpacing.handler(async ({ event, context }) => {
  const entity: AlgebraPool_TickSpacing = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newTickSpacing: event.params.newTickSpacing,
  };

  context.AlgebraPool_TickSpacing.set(entity);
});
