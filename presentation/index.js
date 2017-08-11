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
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  ie3: require("../assets/ie3_screen.jpg"),
  status: require("../assets/status.png"),
  grid: require("../assets/grid.png"),
  hak: require("../assets/hakon.jpg"),
  react: require("../assets/react-logo.png"),
  cup: require("../assets/cup1994.png"),
  opera: require("../assets/opera.png"),
  w3c: require("../assets/w3c.png"),
  sisense: require("../assets/sisense.png"),
  future: require("../assets/future.jpg"),
  start: require("../assets/bgwow.png"),
  past1994: require("../assets/1994.png"),
  past1996: require("../assets/1996.png"),
  past2006: require("../assets/2006.png"),
  past2013: require("../assets/2013.png"),
  bg: require("../assets/bg.jpg"),
  thanks: require("../assets/thanks.png")
};

const gifs = {
  css: require("../assets/css.gif"),
  dream: require("../assets/dream.gif"),
  nightmare: require("../assets/nightmare.gif"),
  hoverboard: require("../assets/hoverboard.gif"),
  realhover: require("../assets/realhover.gif")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  micolor: "#ffcb05",
  black: "#000",
  transparent: "transparent"
}, {
  primary: "Montserrat",
  secondary: "Helvetica",
  hand: "Pacifico"
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

  const bemHere = `
  /* Block component */
  .btn {}

  /* Element that depends upon the block */
  .btn__price {}

  /* Modifier that changes the style of the block */
  .btn--orange {}
  .btn--big {}

  <a class="btn btn--big btn--orange" href="http://sisense.com">
    <span class="btn__price">$9.99</span>
    <span class="btn__text">Subscribe</span>
  </a>
  `;
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={["zoom"]} bgImage={images.start}/>
        <Slide transition={["fade"]} bgImage={images.bg}>
          <Typeface googleFont="Josefin Slab" weight={400}>
            <Heading size={2} textColor="primary"> Sr UX Engineer </Heading>
          </Typeface>
          <Text textColor="transparent">blah blah</Text>
          <Image src={images.sisense} width={500} />
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bg}>
          <Typeface googleFont="Josefin Slab" weight={400}>
            <Heading size={2} textColor="primary"> I make cool stuff!</Heading>
          </Typeface>
          <Text textColor="transparent">blah blah</Text>
          <Heading size={3} textColor="secondary">🤘</Heading>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.past1994}/>
        <Slide transition={["fade"]} bgImage={images.bg}>
          <Image src={images.cup} width={500} />
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bg}>
        <Typeface googleFont="Josefin Slab" weight={400}>
          <Heading size={2} textColor="primary">
            <Link href="https://en.wikipedia.org/wiki/H%C3%A5kon_Wium_Lie" textColor="primary" target="_blank">Håkon Wium Lie</Link>
          </Heading>
        </Typeface>
          <Image src={images.hak} width={300} />
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bg}>
          <Image src={images.opera} width={400} />
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bg}>
          <Typeface googleFont="Josefin Slab" weight={400}>
            <Heading size={2} textColor="primary">CSS</Heading>
          </Typeface>
        </Slide>
        <Slide transition={["fade"]} bgImage={gifs.dream}/>
        <Slide transition={["fade"]} bgImage={gifs.css}/>
        <Slide transition={["fade"]} bgImage={images.bg}>
          <Image src={images.w3c} width={400}/>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bg}>
          <img src={images.status} />
        </Slide>
        <Slide transition={["fade"]} bgImage={images.past1996}/>
        <Slide transition={["fade"]} bgImage={images.past1996}>
          <img src={images.ie3} />
        </Slide>
        <Slide transition={["fade"]} bgImage={gifs.dream}/>
        <Slide transition={["fade"]} bgImage={gifs.nightmare}/>
        <Slide transition={["fade"]} bgImage={images.bg} textColor="primary">
          <Typeface googleFont="Josefin Slab" weight={400}>
            <Heading size={6} textColor="primary" caps>Disadvantages</Heading>
            <List type="italic">
              <ListItem>Inconsistent Browser compatibility</ListItem>
              <ListItem>Consumes time during development</ListItem>
              <ListItem>Dead code removal</ListItem>
              <ListItem>Silent errors</ListItem>
            </List>
          </Typeface>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bg} textColor="primary">
          <Typeface googleFont="Josefin Slab" weight={400}>
            <Heading size={6} textColor="primary" caps>Advantages</Heading>
            <List type="italic">
              <ListItem>Progressive Enhancement</ListItem>
              <ListItem>Bandwidth</ListItem>
              <ListItem>Flexibility</ListItem>
              <ListItem>Consistency</ListItem>
            </List>
          </Typeface>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="css"
          code={cssStructure}
          bgImage={images.bg}
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
        <Slide transition={["fade"]} bgImage={images.bg}>
          <Typeface googleFont="Josefin Slab" weight={400}>
            <Heading size={2} textColor="primary">
              <Link href="https://codepen.io/leofle/pen/LjLvaK/" textColor="primary" target="_blank">Specificity</Link>
            </Heading>
          </Typeface>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={cssPast}
          bgImage={images.bg}
          ranges={[
            { loc: [0, 6], note: "Injected inside style tags" },
            { loc: [7, 11], note: "Inside style attribute" }
          ]}
        />
        <Slide transition={["fade"]} bgImage={images.past2006}/>
        <Slide transition={["fade"]} bgImage={images.bg}>
          <Typeface googleFont="Josefin Slab" weight={400}>
            <Heading size={2} textColor="primary">SASS, LESS, ...</Heading>
          </Typeface>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.bg}>
          <Typeface googleFont="Josefin Slab" weight={400}>
            <Heading size={2} textColor="primary">BEM</Heading>
          </Typeface>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={bemHere}
          bgImage={images.bg}
          ranges={[
            { loc: [0, 10] },
            { loc: [11, 15] }
          ]}
        />
        <Slide transition={["fade"]} bgImage={images.past2013}>
          <Text textColor="transparent">blah blah</Text>
          <Text textColor="transparent">blah blah</Text>
          <Text textColor="transparent">blah blah</Text>
          <Text textColor="transparent">blah blah</Text>
          <Text textColor="transparent">blah blah</Text>
          <Text textColor="transparent">blah blah</Text>
          <Text textColor="transparent">blah blah</Text>
          <Text textColor="transparent">blah blah</Text>
          <Image src={images.react} width={400} />
        </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={bgCode}
            bgImage={images.bg}
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
          <CodeSlide
            transition={["fade"]}
            lang="js"
            code={cssVariables}
            bgImage={images.bg}
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
            bgImage={images.bg}
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
          <Slide transition={["fade"]} bgImage={images.bg}>
            <Typeface googleFont="Josefin Slab" weight={400}>
              <Heading size={2} textColor="primary"><Link href="https://codepen.io/leofle/pen/YxNyLz?editors=1100" textColor="primary" target="_blank">Demo</Link></Heading>
            </Typeface>
          </Slide>
          <Slide transition={["fade"]} bgImage={images.bg}>
            <CanIUse feature={"css-variables"}/>
          </Slide>
          <Slide transition={["fade"]} bgImage={images.bg}>
            <CanIUse feature={"css-grid"}/>
          </Slide>
            <Slide transition={["fade"]} bgImage={images.future}>
              <Typeface googleFont="Josefin Slab" weight={400}>
                <Heading size={2} textColor="primary">Future</Heading>
              </Typeface>
            </Slide>
            <CodeSlide
              transition={["fade"]}
              lang="js"
              code={styledComp}
              bgImage={images.bg}
              ranges={[
                { loc: [0, 270], title: "Styled components!" },
                { loc: [0, 2], note: "Import styled components: 'yarn add styled-components'" },
                { loc: [3, 11], note: "Declare your components variables" },
                { loc: [12, 18], note: "Render the componenets" }
              ]}
            />
              <Slide transition={["fade"]} bgImage={images.bg}>
                <Typeface googleFont="Josefin Slab" weight={400}>
                  <Heading size={2} textColor="primary"><Link href="https://www.webpackbin.com/bins/-Ko8lByzUlHQBaAUS2jZ" textColor="primary" target="_blank">Demo</Link></Heading>
                </Typeface>
              </Slide>
              <Slide transition={["fade"]} bgImage={gifs.hoverboard}/>
              <Slide transition={["fade"]} bgImage={gifs.realhover}/>
              <Slide transition={["fade"]} bgImage={images.thanks}/>
      </Deck>
    );
  }
}
