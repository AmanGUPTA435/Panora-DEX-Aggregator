import panoraClient from "../config/panoraClient"

// Constants
const PRIVATE_KEY = "YOUR_PRIVATE_KEY"
const WALLET_ADDRESS = "YOUR_WALLET_ADDRESS"

const FROM_TOKEN_ADDRESS =
  "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC"
const TO_TOKEN_ADDRESS = "0x1::aptos_coin::AptosCoin"

const FROM_TOKEN_AMOUNT = "10"

const SLIPPAGE_PERCENTAGE = 1

const sampleSwap = async () => {
  const response = await panoraClient.ExactInSwap(
    {
      fromTokenAddress: FROM_TOKEN_ADDRESS,
      toTokenAddress: TO_TOKEN_ADDRESS,
      fromTokenAmount: FROM_TOKEN_AMOUNT,
      toWalletAddress: WALLET_ADDRESS,
      slippagePercentage: String(SLIPPAGE_PERCENTAGE),
    },
    PRIVATE_KEY
  )

  console.log(response)
}

sampleSwap()
