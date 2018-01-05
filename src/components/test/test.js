import React from 'react';
import Web3 from 'web3';
import abi from './abi.json';

import { connect } from 'react-redux';
import { sendEther } from './test.actions';

import './test.css';


class TestComponent extends React.Component {

    constructor(props) {
        super(props);

        if(window.web3){
            this.web3 = new Web3(window.web3.currentProvider);
        }
        else {
            this.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io"));
        }

        this.state = {
            list: []
        }
    }

    connect() {
         this.web3.eth.getAccounts((error, res) =>{
            this.setState({list:  this.state.list.concat('accounts: ' + res)})
         })
        
        this.web3.eth.getBalance("0x4483978B0d1516D02dEE71dCD80382152Bf67E9C", "latest", (err, res) =>{
            this.setState({list: this.state.list.concat("Account 1 balance: " + res.toFixed())})
    
        });
        this.web3.eth.getBalance("0x747B4c25068983FE4481A3097FA7A445031C733a", "latest", (err, res) =>{
            this.setState({list: this.state.list.concat("account 2 balance: "+ res.toFixed())})
        });

        this.web3.eth.getBlockNumber((error, res) => {
            this.setState({list: this.state.list.concat("block number: " + res)})
        });

        this.web3.eth.getGasPrice((error, res) => {
            this.setState({list: this.state.list.concat("gas prize: " + res.toFixed())})
        });

        this.web3.eth.getCoinbase((error, res) => {
            this.setState({list: this.state.list.concat("coin base: " + res)})
        })


        // this.web3.version.getNode((error, res) =>{ 
            // console.log(error, res);
            // this.setState({list: this.state.list.push(res)})
        // })
        
        //console.log(this.web3.eth.accounts);
        // this.setState({
            // list: this.web3.eth.accounts
        // });
    }
    sendEtherClick() {
        this.props.sendEther();

        this.web3.eth.sendTransaction({
            from: this.web3.eth.coinbase,
            to: '0x747B4c25068983FE4481A3097FA7A445031C733a',
            value: this.web3.toWei(0.1, 'ether')
          }, function(error, result) {
              alert('transaction-successful')
          }
        );
    }

    callContractMethod() {
        this.web3.eth.defaultAccount = this.web3.eth.accounts[0];
        var CounterContract = this.web3.eth.contract(abi);

        var counter = CounterContract.at('0x08155a6c350796f4f40c77c6167f0d9a9088ee1d');
        counter.getNumber((error, data)=>{
             alert(JSON.stringify(data));
         });
    }

    render() {
        return (
            <div>
                <h1 className='example-header'>web3 test</h1>
                <button onClick={() => {this.connect()} }>Connect</button>
                <button onClick={() => {this.sendEtherClick()} }>SendEther</button>
                <button onClick={() => {this.callContractMethod()} }>Call contract method</button>
                <div className="results">
                    <ul>
                        {this.state.list.map((item)=>{
                            return <li>{JSON.stringify(item)}</li>
                        })}
                    </ul>
                </div>
                <div>Last send ether timestamp: {this.props.lastTimestamp}</div>
            </div>
            
        )
    }
}

const mapDispatchToProps = {
    sendEther
 };

 const mapStateToProps = state => {
    return {
        lastTimestamp: state.testReducer.timestamp
    }
 };

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);