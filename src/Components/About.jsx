import Userclass from "./Userclass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About page.</p>

      <Userclass
        name="Gayatri"
        location="Dehradun"
        details="@gayatri@gmail.com"
      />
    </div>
  );
};

export default About;