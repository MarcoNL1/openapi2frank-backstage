import React from 'react';
import { Grid } from '@material-ui/core';
import {
  Header,
  Page,
  Content,
} from '@backstage/core-components';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="FrankDoc" />
    <Content>
      <Grid container spacing={3} direction="column" style={{ backgroundColor: 'white' }}>
        <Grid item>
          <embed
            src="https://frankdoc.frankframework.org/#/"
            width="100%"
            height="720px"
          />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
