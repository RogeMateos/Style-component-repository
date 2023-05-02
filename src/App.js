/**
 * The function exports an App component that renders a styled website with a header, footer, and
 * multiple cards containing content.
 * @returns The `App` component is being returned, which contains the `ThemeProvider` component from
 * `styled-components`, the `Header` component, a `Container` component that maps over the `content`
 * array and renders a `Card` component for each item in the array, and the `Footer` component. The
 * `theme` object is also passed as a prop to the `ThemeProvider`.
 */
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import content from "./content";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
