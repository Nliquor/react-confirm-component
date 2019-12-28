import React,{Component} from 'react';
import confirm from './confirm'
class App extends Component{
	render() {
		return(
			<div>
				<button
				onClick={e=>{
					confirm({title:'提示',content:'确认要删除吗?'})
					.then(()=>{
						alert('确定删除')
					}).catch(()=>{
						alert('取消删除')
					})
				}}
				>操作</button>
			</div>
		)
	}
}

export default App;
