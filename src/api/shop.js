/**
 * Mocking client-server processing
 */
import _products from './data.json'
import _ongkir from './ongkir.json'

const TIMEOUT = 100

export default {
    getOngkir : (cb,timeout) => setTimeout(()=>cb(_ongkir),timeout||TIMEOUT),
    getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
