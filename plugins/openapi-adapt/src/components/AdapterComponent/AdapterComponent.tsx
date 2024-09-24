import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  SupportButton,
} from '@backstage/core-components';
import { UrlComponent, MyForm } from '../AdapterFetchComponents/UrlFetchComponent';
import { FileComponent } from '../AdapterFetchComponents/FileFetchComponent';

export const AdapterComponent = () => {
  const [url, setUrl] = useState('');

  return (
    <Page themeId="tool">
      <Header
        title="OpenAPI2FrankAdapter"
        subtitle="OpenAPI converter by WeAreFrank!"
      />
      <Content>
        <ContentHeader title="Frank Generator">
          <SupportButton>This plugin generates a sender or receiver Frank that can be used in the Frank!Framework.</SupportButton>
        </ContentHeader>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <InfoCard title="File Converter">
              <FileComponent/>
            </InfoCard>
          </Grid>
          <Grid item>
            <InfoCard title="URL Converter">
              <MyForm url={url} setUrl={setUrl} />
              <UrlComponent url={url} />
            </InfoCard>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
