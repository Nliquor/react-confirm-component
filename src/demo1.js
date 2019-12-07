import React,{useState,useEffect} from 'react';
/*
	受控 value onChange 
	非受控 defaultValue
*/
const  InputNumber = (props) =>{
	let [value,setinnerValue] = useState(
		props.defaultValue?props.defaultValue:props.value
	)
	useEffect(()=>{
		props.value && setinnerValue(props.value)
	},[props])
	return (
		<div>
			<input value={value} onChange={(e)=>{
				if(props.defaultValue){
					setinnerValue(e.target.value)
				}
				props.onChange(e)
			}}/>
		</div>
	)

}

function App(){
    const [value,setValue] = useState('aaa')
    return (
        <div>
        <InputNumber value={value} onChange={e=>{
			// setValue(e.target.value)
		}}/>
        <InputNumber defaultValue={value} onChange={e=>{}}/>
        </div>
    )
}
export default App;
