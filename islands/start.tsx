import { FunctionComponent } from "preact";

//Hubo que moverlo a islands
const StartComp: FunctionComponent = () => {
  return (
    <div
      class="screen typewriter"
      onClick={() => window.location.assign("/lovers")}
    >
      <h1>
        Welcome to the abism of errors. You have a mission, solve them all. Good
        luck!
      </h1>
    </div>
  );
};

export default StartComp;
