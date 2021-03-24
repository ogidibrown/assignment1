



function Textarea(props){

    return(
    
        <div>
            <textarea style={{width:props.width ,height:props.height}}>
                {props.text}




            </textarea>
    
    
    
        </div>
    
    )
    
    }
    
    export default Textarea;