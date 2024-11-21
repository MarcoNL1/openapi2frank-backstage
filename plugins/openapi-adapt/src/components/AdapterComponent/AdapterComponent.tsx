import React, { useState } from 'react';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  SupportButton,
  TabbedLayout
} from '@backstage/core-components';
import {
  UrlComponent,
  MyForm,
} from '../AdapterFetchComponents/UrlFetchComponent';
import { FileComponent } from '../AdapterFetchComponents/FileFetchComponent';
import { Card } from '@material-ui/core';

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
          <SupportButton>
            This plugin generates a sender or receiver Frank that can be used in
            the Frank!Framework.
          </SupportButton>
        </ContentHeader>
        <TabbedLayout>
          <TabbedLayout.Route path="/" title="File Converter">
            <Card style={{ padding: '10px', width: '100%', }}>
              <FileComponent />
            </Card>
          </TabbedLayout.Route>
          <TabbedLayout.Route path="/urlconverter" title="URL Converter">
            <Card style={{ padding: '10px', width: '100%', }}>
              <MyForm url={url} setUrl={setUrl} />
              <UrlComponent url={url} />
            </Card>
          </TabbedLayout.Route>
        </TabbedLayout>
      </Content>
    </Page>
  );
};
