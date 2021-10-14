import { Button } from 'react-bootstrap'
import { useWeb3React } from "@web3-react/core"
import { injected } from "./Connectors"
import styles from './Wallet.module.css'
function Wallet() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }
	return (
    <div className={styles.walletWrap}>
        <Button onClick = {connect} className={styles.walletButton}>Connect</Button>
        {/* {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>} */}
        {/* <Button onClick = {disconnect}>Disconnect Metamask</Button> */}
    </div>
	)
}

export default Wallet;