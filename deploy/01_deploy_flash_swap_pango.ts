import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;

  const { deploy } = deployments;

  const {
    deployer,
    sushiSwapRouter,
    pangolinFactory
  } = await getNamedAccounts();

  const flashSwapPangolinSushi = await deploy("FlashSwapPangolinSushi", {
    from: deployer,
    log: true,
    args: [sushiSwapRouter, pangolinFactory]
  });

  console.log(`FlashSwapPangolinSushi deployed to: ${flashSwapPangolinSushi.address}`);
};

export default func;
