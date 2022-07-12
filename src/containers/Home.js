import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Input from "../components/Input";
import SubHeading from "../components/SubHeading";
import Typography from "../components/Typography";
import "./style.css";

export default function Home() {
  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    alert("done");
  };
  return (
    <div className="box">
      <div>
        <Heading primaryText="hello title" subHeading="Sub title by props" />
        <Heading primaryText="hello title">
          <SubHeading text="Sub title by children components" />
        </Heading>
        <Typography text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      </div>

      <Card
        title={"Card title with props"}
        subTitle={"Card sub title with props"}
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <Card>
        <Heading primaryText="Card Title" />
        <SubHeading text="Sub title by children components" />
        <Typography text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
      </Card>
      <div>
        <Button title="Primary" variant="primary" />
        <Button title="Drak" variant="drak" />
        <Button title="Light" variant="light" />
        <Button title="Custom" backgroundColor="green" textColor="#fff" />
      </div>
      <Card>
        <form method="post" onSubmit={onSubmit}>
          <Input
            id="name"
            label="Name"
            type="text"
            placeholder="Enter your name"
            required
          />
          <Input
            id="surname"
            label="Surname"
            type="text"
            placeholder="Enter your surname"
            required
          />
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Input
            id="age"
            label="Age"
            type="number"
            placeholder="Enter your Age"
            required
          />
          <label className="inputLabel">Gender</label>
          <div style={{ padding: 10 }}>
            <input id="male" type="radio" name="gender" value="male" />
            <label for="male" style={{ arginRight: 30 }}>
              Male
            </label>
            <input id="female" type="radio" name="gender" value="female" />
            <label for="female">Female</label>
          </div>
          <Input
            id="favorite-color"
            label="Favorite color"
            type="test"
            placeholder="Enter your favorite color"
            required
          />
          <div className="buttons">
            <Button
              title="Reset"
              type="reset"
              backgroundColor="red"
              textColor="#fff"
            />
            <Button
              title="Submit"
              type="submit"
              backgroundColor="green"
              textColor="#fff"
            />
          </div>
        </form>
      </Card>
    </div>
  );
}
