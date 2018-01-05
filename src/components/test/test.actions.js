export const SEND_ETHER = 'SEND_ETHER';

export const sendEther = () => dispatch => {
    dispatch({
        type: SEND_ETHER,
        timestamp: new Date().toString()
    })
}