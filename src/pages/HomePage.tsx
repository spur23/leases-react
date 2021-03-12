import { RouteComponentProps } from "@reach/router";

const HomePage = (_props: RouteComponentProps) => {
  return (
    <div>
      <h4>Welcome!</h4>
      <p>
        This site is to help calculate a lease schedule in accordance with ASC
        842.
      </p>
      <p>Please follow the links at the top</p>
    </div>
  );
};

export default HomePage;
