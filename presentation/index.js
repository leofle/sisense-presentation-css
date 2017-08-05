// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Typeface,
  ComponentPlayground,
  Link,
  Image
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import preloader from "spectacle/lib/utils/preloader";
import CanIUse from "react-caniuse-embed";
import createTheme from "spectacle/lib/themes/default";
import styled, { keyframes } from "styled-components";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  ie3: require("../assets/ie3_screen.jpg"),
  status: require("../assets/status.png"),
  grid: require("../assets/grid.png"),
  hak: require("../assets/hakon.jpg"),
  react: require("../assets/react-logo.png"),
  cup: require("../assets/cup1994.png"),
  opera: require("../assets/opera.png"),
  w3c: require("../assets/w3c.png"),
  sisense: require("../assets/sisense.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  micolor: "#ffcb05",
  black: "#000"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  animation: ${keyframes`from { opacity: 0; }`} 1s both;
`;

export default class Presentation extends React.Component {
  render() {
    const bgCode = `const styles = {
  heading: {
    fontSize: "2.25rem",
    fontWeight: "300"
  },
  button: {
    background: "transparent",
    borderRadius: "10px",
    border: "2px solid lime"
  }
}

const HelloWorld = ({ name }) => (
  <div>
    <h1 style={styles.heading}>
      {name} is going places...
    </h1>
    <button style={styles.button}>
      click me
    </button>
  </div>
)

render(
  <HelloWorld name="Sisense" />,
  mountNode)`;
  const pseudoNoSolution = `<button style={m(
        this.styles.container,
        this.state.hovered && this.styles.hover,
      )}>{this.props.children}</button>`;

  const styledComp = `
  import styled from "styled-components";

  const Title = styled.h1\`
    font-size: 2.25rem;
    font-weight: 300;\`

  const Button = styled.button\`
    background: transparent;
    border-radius: 10px;
    border: 2px solid lime;\`

  const MyComponent = ()=> {
    return (<div>
      <Title>Hello world</Title>
      <Button>click me</Button>
    </div>);
  }

`;

  const cssStructure = `
    .myClass {
      background-color: red;
    }

    #myId {
      background-color: blue;
    }

    div {
      background-color: green;
    }

  `;

  const cssPast = `
  <style>
    .myClass {
      background-color: red;
    }
  </style>

  <div class="myClass"
       style="background-color: red;">
    ...content here
  </div>

  `;
  const cssVariables = `
    element {
      --my-bg-color: hotpink;
    }
    .myClass {
      background-color: var(--my-bg-color);
    }

    <div class="myClass">
      <div class="one"></div>
    </div>

    .one {
      background-color: var(--my-bg-color, red);
    }

    <div class="myClass">
      <div class="one"></div>
      <div class="two"></div>
    </div>

    .myClass {
      background-color: var(--my-bg-color);
    }

    .one {
      background-color: var(--my-bg-color, red);
    }

    <div class="myClass">
      <div class="one"></div>
      <div class="two"></div>
    </div>

    @supports (--css: variables){
      .one {
        background-color: var(--css);
      }
    }
  `;
  const cssGrid = `
  <div class="wrapper">
    <div class="one">One</div>
    <div class="two">Two</div>
    <div class="three">Three</div>
    <div class="four">Four</div>
    <div class="five">Five</div>
    <div class="six">Six</div>
  </div>

  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }
  .one {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  .two {
    grid-column: 2 / 4;
    grid-row: 1 / 3;
  }
  .three {
    grid-column: 1;
    grid-row: 2 / 5;
  }
  .four {
    grid-column: 3;
    grid-row: 3;
  }
  .five {
    grid-column: 2;
    grid-row: 4;
  }
  .six {
    grid-column: 3;
    grid-row: 4;
  }
  `;
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={["zoom"]} bgColor="micolor">
          <Heading size={1} fit caps lineHeight={1} textColor="#000">
            Past Present and Future of CSS
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
            how to survive in a component world
          </Text>
          <Text margin="10px 0 0" textColor="#000" size={3} fit bold>
            twitter: @leofle,            github: leofle,
            medium: leofle,            npm: fleo
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="black"> Sr UX Engineer </Heading>
          <Text textColor="primary">blah blah</Text>
          <Image src={images.sisense} width={500} />
        </Slide>
        <Slide transition={["fade"]} bgColor="lime">
          <Heading size={2} textColor="secondary"> I make cool stuff!</Heading>
          <Text textColor="lime">blah blah</Text>
          <Heading size={3} textColor="secondary">🤘</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary"> 1994 </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Image src={images.cup} width={500} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary">Håkon Wium Lie</Heading>
          <Image src={images.hak} width={300} />
        </Slide>
        <Slide>
          <Image src={images.opera} width={400} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary">CSS</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">🕺 👯 🤘 😆</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">😡</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.w3c} width={400}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <img src={images.status} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">📅 1996</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <img src={images.ie3} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">🕺 👯 🤘 😆</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">😡</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
        <Heading size={6} textColor="black" caps>Disadvantages</Heading>
        <List>
          <ListItem>Poses compatibility issues with browsers.</ListItem>
          <ListItem>Consumes time during development.</ListItem>
          <ListItem>Requires validation of code due to faulty syntax and bugs in CSS file.</ListItem>
        </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="black" caps>Advantages</Heading>
          <List>
            <ListItem>Reduces time & effort of typing same style over and over.</ListItem>
            <ListItem>Helps to download a webpage quickly as it has less code.</ListItem>
            <ListItem>Easier to change styles of an element.</ListItem>
            <ListItem>High content to code ratio. (Content >> Code)</ListItem>
            <ListItem>Allows to design a website more quickly and efficiently!</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="css"
          code={cssStructure}
          ranges={[
            { loc: [0, 270], title: "CSS structure" },
            { loc: [1, 2], note: "Selector" },
            { loc: [2, 3], note: "Declaration" },
            { loc: [2, 3], note: "Property: Value" },
            { loc: [1, 2], note: "Can be a class" },
            { loc: [5, 6], note: "Can be an ID" },
            { loc: [9, 10], note: "Can be an HTML tag" }

          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={cssPast}
          ranges={[
            { loc: [0, 6], note: "Injected inside style tags" },
            { loc: [7, 11], note: "Inside style attribute" }
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={cssVariables}
          ranges={[
            { loc: [0, 270], title: "CSS Variables!!" },
            { loc: [0, 4], note: "Declare your variable" },
            { loc: [4, 7], note: "Use it with var()" },
            { loc: [8, 11] },
            { loc: [12, 15] },
            { loc: [16, 20] },
            { loc: [21, 28] },
            { loc: [31, 32] },
            { loc: [29, 30] },
            { loc: [34, 39] }
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={cssGrid}
          ranges={[
            { loc: [0, 270], title: "CSS Grid-layout" },
            { loc: [0, 9], note: "HTML parent wrapper with 6 children" },
            { loc: [10, 16], note: "Apply grid" },
            { loc: [16, 20], note: "Apply position of each cell" },
            { loc: [20, 24] },
            { loc: [24, 28] },
            { loc: [28, 32] },
            { loc: [32, 36] },
            { loc: [36, 40] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">👩🏼‍🚀 <Link href="https://codepen.io/leofle/pen/YxNyLz?editors=1100" target="_blank">Demo</Link></Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="hotpink">
          <Heading size={2} textColor="secondary">2013 - Present</Heading>
          <Text textColor="hotpink">blah blah</Text>
          <Image src={images.react} width={400} />
        </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={bgCode}
            ranges={[
              { loc: [0, 270], title: "Inline styles!" },
              { loc: [0, 11], note: "Declare your style object" },
              { loc: [12, 22], note: "Inject your 'classes' into the style tags" },
              { loc: [1, 5], note: "Camel case properties, string values" },
              { loc: [5, 10] },
              { loc: [12, 22] },
              { loc: [14, 17] },
              { loc: [17, 20] },
              { loc: [23, 26] },
              { loc: [23, 26], image: images.kat }
            ]}
          />
            {/* <Slide transition={["fade"]} bgColor="micolor">
              <ComponentPlayground code={bgCode} theme="dark" previewBackgroundColor="yellow" />
            </Slide> */}
            <Slide transition={["fade"]} bgColor="tertiary">
              <Heading size={2} textColor="secondary">👩🏼‍🚀 Future</Heading>
            </Slide>
            <CodeSlide
              transition={["fade"]}
              lang="js"
              code={styledComp}
              ranges={[
                { loc: [0, 270], title: "Styled components!" },
                { loc: [0, 2], note: "Import styled components: 'yarn add styled-components'" },
                { loc: [3, 11], note: "Declare your components variables" },
                { loc: [12, 18], note: "Render the componenets" }
              ]}
            />
              <Slide transition={["fade"]} bgColor="tertiary">
                <Heading size={2} textColor="secondary">👩🏼‍🚀 <Link href="https://www.webpackbin.com/bins/-Ko8lByzUlHQBaAUS2jZ" target="_blank">Demo</Link></Heading>
              </Slide>
              <Slide transition={["fade"]} bgColor="hotpink">
                <CanIUse feature={"css-variables"}/>
              </Slide>
              <Slide transition={["fade"]} bgColor="hotpink">
                <CanIUse feature={"css-grid"}/>
              </Slide>
              <Slide transition={["fade"]} bgColor="black">
                <Heading size={2} textColor="primary">🙏 Thanks!</Heading>
              </Slide>
      </Deck>
    );
  }
}
