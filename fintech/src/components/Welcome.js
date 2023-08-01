const Welcome = (props) => {
    console.log(props);
  
    return(
    <div>
      <p> {props.userName} 님, 안녕하세요. 올해 {props.age}세 입니다. </p>
    </div>
    );
  };

  export default Welcome;
  