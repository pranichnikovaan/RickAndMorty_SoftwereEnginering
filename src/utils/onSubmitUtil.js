export const onSubmitUtil = {
    onOfferSubmit(data, add) {
        let networkId = null
        let networkName = null
        if (data.network) {
            networkId = data.network.split(' ')[1]
            networkName = data.network.split(' ')[0]
        }
        add(networkId, data.offerName, data.offerUrl, networkName)
    },
    onNetworkSubmit(data, add) {
        add(data.networkName, data.postbackUrl)
    }
}