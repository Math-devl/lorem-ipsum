import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  //console.log(props.name); // renvoie Lorem
  //console.log(props.text); // renvoie blablabla
  return (
    <>
      <Title name={props.name} />
      <Description text={props.text} />
    </>
  );
};

export default Content;
