
$(function() {
    consoleInit();
    start(main);
  });

const FOX_CHEF_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_fox","internalType":"contract FoxToken"},{"type":"uint256","name":"_startBlock","internalType":"uint256"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmissionRateUpdated","inputs":[{"type":"address","name":"caller","internalType":"address","indexed":true},{"type":"uint256","name":"previousAmount","internalType":"uint256","indexed":false},{"type":"uint256","name":"newAmount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"ReferralCommissionPaid","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"referrer","internalType":"address","indexed":true},{"type":"uint256","name":"commissionAmount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"BONUS_MULTIPLIER","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"EMISSION_REDUCTION_PERIOD_BLOCKS","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"EMISSION_REDUCTION_RATE_PER_PERIOD","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"INITIAL_EMISSION_RATE","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint16","name":"","internalType":"uint16"}],"name":"MAXIMUM_REFERRAL_COMMISSION_RATE","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"MINIMUM_EMISSION_RATE","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IBEP20"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"},{"type":"address","name":"_referrer","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"devAddress","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"feeAddress","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract FoxToken"}],"name":"fox","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"foxPerBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IFoxReferral"}],"name":"foxReferral","inputs":[]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMultiplier","inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},{"type":"uint256","name":"_to","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"lastReductionPeriodIndex","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pendingFox","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IBEP20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256"},{"type":"uint256","name":"accFoxPerShare","internalType":"uint256"},{"type":"uint16","name":"depositFeeBP","internalType":"uint16"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint16","name":"","internalType":"uint16"}],"name":"referralCommissionRate","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDevAddress","inputs":[{"type":"address","name":"_devAddress","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setFeeAddress","inputs":[{"type":"address","name":"_feeAddress","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setFoxReferral","inputs":[{"type":"address","name":"_foxReferral","internalType":"contract IFoxReferral"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setReferralCommissionRate","inputs":[{"type":"uint16","name":"_referralCommissionRate","internalType":"uint16"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateEmissionRate","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]}]

async function main() {  
    const App = await init_ethers();
  
    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");

   const FOX_CHEF_ADDR = "0x159AAd97c625C7eAC5ddDDbC088c639490b9c55a";
   const rewardTokenTicker = "FOX";
   const FOX_CHEF = new ethers.Contract(FOX_CHEF_ADDR, FOX_CHEF_ABI, App.provider);

   const startBlock = await FOX_CHEF.startBlock();
   const currentBlock = await App.provider.getBlockNumber();

   let rewardsPerWeek = 0
   if(currentBlock < startBlock){
     _print(`Rewards start at block ${startBlock}\n`);
   }else{
    rewardsPerWeek = await FOX_CHEF.krillPerBlock() /1e18
      * 604800 / 2.1;
   }

    const tokens = {};
    const prices = await getMaticPrices();

    await loadFoxContract(App, tokens, prices, FOX_CHEF, FOX_CHEF_ADDR, FOX_CHEF_ABI, rewardTokenTicker,
        "fox", null, rewardsPerWeek, "pendingFox");

    hideLoading();  
  }

  async function loadFoxContract(App, tokens, prices, chef, chefAddress, chefAbi, rewardTokenTicker,
  rewardTokenFunction, rewardsPerBlockFunction, rewardsPerWeekFixed, pendingRewardsFunction,
  deathPoolIndices) {
  const chefContract = chef ?? new ethers.Contract(chefAddress, chefAbi, App.provider);

  const poolCount = parseInt(await chefContract.poolLength(), 10);
  const totalAllocPoints = await chefContract.totalAllocPoint();

  _print(`Found ${poolCount} pools.\n`)

  _print(`Showing incentivized pools only.\n`);

  var tokens = {};

  const rewardTokenAddress = await chefContract.callStatic[rewardTokenFunction]();
  const rewardToken = await getMaticToken(App, rewardTokenAddress, chefAddress);
  const rewardsPerWeek = rewardsPerWeekFixed ?? 
    await chefContract.callStatic[rewardsPerBlockFunction]() 
    / 10 ** rewardToken.decimals * 604800 / 3

  const poolInfos = await Promise.all([...Array(poolCount).keys()].map(async (x) =>
    await getMaticPoolInfo(App, chefContract, chefAddress, x, pendingRewardsFunction)));

  var tokenAddresses = [].concat.apply([], poolInfos.filter(x => x.poolToken).map(x => x.poolToken.tokens));

  await Promise.all(tokenAddresses.map(async (address) => {
      tokens[address] = await getMaticToken(App, address, chefAddress);
  }));

  if (deathPoolIndices) {   //load prices for the deathpool assets
    deathPoolIndices.map(i => poolInfos[i])
                     .map(poolInfo => 
      poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "matic") : undefined);
  }

  const poolPrices = poolInfos.map(poolInfo => poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "matic") : undefined);


  _print("Finished reading smart contracts.\n");
  
  let aprs = []
  for (i = 0; i < poolCount; i++) {
    if (poolPrices[i]) {
      const apr = printFoxPool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i],
        totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
        pendingRewardsFunction, null, null, "matic")
      aprs.push(apr);
    }
  }
  let totalUserStaked=0, totalStaked=0, averageApr=0;
  for (const a of aprs) {
    if (!isNaN(a.totalStakedUsd)) {
      totalStaked += a.totalStakedUsd;
    }
    if (a.userStakedUsd > 0) {
      totalUserStaked += a.userStakedUsd;
      averageApr += a.userStakedUsd * a.yearlyAPR / 100;
    }
  }
  averageApr = averageApr / totalUserStaked;
  _print_bold(`Total Staked: $${formatMoney(totalStaked)}`);
  if (totalUserStaked > 0) {
    _print_bold(`\nYou are staking a total of $${formatMoney(totalUserStaked)} at an average APR of ${(averageApr * 100).toFixed(2)}%`)
    _print(`Estimated earnings:`
        + ` Day $${formatMoney(totalUserStaked*averageApr/365)}`
        + ` Week $${formatMoney(totalUserStaked*averageApr/52)}`
        + ` Year $${formatMoney(totalUserStaked*averageApr)}\n`);
  }
  return { prices, totalUserStaked, totalStaked, averageApr }
}

function printFoxPool(App, chefAbi, chefAddr, prices, tokens, poolInfo, poolIndex, poolPrices, 
                       totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
                       pendingRewardsFunction, fixedDecimals, claimFunction, chain="eth") {  
  fixedDecimals = fixedDecimals ?? 2;
  const sp = (poolInfo.stakedToken == null) ? null : getPoolPrices(tokens, prices, poolInfo.stakedToken);
  var poolRewardsPerWeek = poolInfo.allocPoints / totalAllocPoints * rewardsPerWeek;
  if (poolRewardsPerWeek == 0 && rewardsPerWeek != 0) return;
  const userStaked = poolInfo.userLPStaked ?? poolInfo.userStaked;
  const rewardPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;
  const staked_tvl = sp?.staked_tvl ?? poolPrices.staked_tvl;
  poolPrices.print_price(chain, 8);
  sp?.print_price(chain, 8);
  const apr = printAPR(rewardTokenTicker, rewardPrice, poolRewardsPerWeek, poolPrices.stakeTokenTicker, 
    staked_tvl, userStaked, poolPrices.price, fixedDecimals);
  if (poolInfo.userLPStaked > 0) sp?.print_contained_price(userStaked);
  if (poolInfo.userStaked > 0) poolPrices.print_contained_price(userStaked);
  printChefContractLinks(App, chefAbi, chefAddr, poolIndex, poolInfo.address, pendingRewardsFunction,
    rewardTokenTicker, poolPrices.stakeTokenTicker, poolInfo.poolToken.unstaked, 
    poolInfo.userStaked, poolInfo.pendingRewardTokens, fixedDecimals, claimFunction, rewardPrice, chain);
  return apr;
}