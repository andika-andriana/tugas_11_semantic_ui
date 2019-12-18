import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Grid,
  Header,
  Divider,
  Search,
  Icon,
  Button,
  Segment,
  Dimmer,
  Loader,
  Image,
  Placeholder,
  List
} from "semantic-ui-react";
function App() {
  return (
    <div>
      <Divider hidden />
      <Container fluid>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Cari Document
                </Header>

                <Search placeholder="Search Document..." />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="file pdf outline" />
                  Tambah Document Baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
        <Grid columns={3} stackable>
          <Grid.Column width={5}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={8}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={3}>
            <h4>Website Terkait</h4>
            <List>
              <List.Item icon="linkify" content={<a href="/">Google</a>} />
              <List.Item icon="linkify" content={<a href="/">Facebook</a>} />
              <List.Item icon="linkify" content={<a href="/">Semantic UI</a>} />
              <List.Item icon="linkify" content={<a href="/">React</a>} />
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
