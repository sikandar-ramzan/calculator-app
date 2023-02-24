import Button from './Button';

function ButtonLayout() {

  return (
    
    <div className='button-layout'>

      <Button  value='power' name={"power"}/>
      <Button value = "/" name={<i className="bi bi-slash-lg" ></i>}/>
      <Button value = "%" name={<i className="bi bi-percent"></i>}/>
      <Button value = "*" name={<i className="bi bi-x-lg"></i>}/>
      <Button value = "-" name={<i className="bi bi-dash-lg"></i>}/>
      <Button value = "+" name={<i className="bi bi-plus-lg"></i>}/>
      <Button value = "7" name={"7"}/>
      <Button value = "8" name={"8"}/>
      <Button value = "9" name={"9"}/>
      <Button value = "4" name={"4"}/>
      <Button value = "5" name={"5"}/>
      <Button value = "6" name={"6"}/>
      <Button value = "1" name={"1"}/>
      <Button value = "2" name={"2"}/>
      <Button value = "3" name={"3"}/>
      <Button value = "clear" name={"clear"}/>
      <Button value = "0" name={"0"}/>
      <Button value = "=" name={"="}/>
                
    </div>
  )
}

export default ButtonLayout 
