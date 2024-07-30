export default function TitleComponent(props)
{
    return(<div style={{display:'flex',width:"100%", justifyContent:"space-evenly",backgroundColor:'#B47B84'}}>
         
         <div style={{fontSize:24,fontWeight:'bold'}}>{props.name}</div>
    
        
    </div>)
}