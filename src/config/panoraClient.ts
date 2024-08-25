import Panora from "@panoraexchange/swap-sdk"

// Public API Key available at https://docs.panora.exchange
const API_KEY =
  "a4^KV_EaTf4MW#ZdvgGKX#HUD^3IFEAOV_kzpIE^3BQGA8pDnrkT7JcIy#HNlLGi"

// Panora client
const panoraClient = new Panora({ apiKey: API_KEY })

export default panoraClient
