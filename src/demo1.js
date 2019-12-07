import React,{Component} from 'react';
import confirm from './confirm'
class App extends Component{
	render() {
		return(
			<div>
				000
			</div>
		)
	}
	async componentDidMount(){
		let res = await confirm("确定删除吗")
		if(res) {
			console.log("是")
		} else {
			console.log("否")
		}
	}
}

export default App;
