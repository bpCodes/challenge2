import React, { useState } from "react";
import styled,{ css,keyframes } from 'styled-components'
import fetch from "isomorphic-unfetch";
import Headroom from 'react-headroom';
import { CSSTransitionGroup } from 'react-transition-group';
import Layout from "../components/Layout";
import { Container, StyledHeadroom } from '../components/MainContainer'

// Styled components
import { Spinner, Bounce } from '../components/Spinner'
import { Search, Label, Button, HeaderItem, Input } from '../components/Header'
import { Item, Title, Data, Image, ShortText, Span, Description } from '../components/MainCard'


import "../static/main.less";

const Index = (props) => {
  const [input, setInput] = useState("");
  const [shows, setShows] = useState(props.shows);
  const [viewMode, setViewMode] = useState("grid");
  const [loading, setLoading] = useState(false);


  const Loader = ({
    loading,
    children
  }) => {
    const loader = (
      <Spinner key="loader">
        <Bounce delay={0}/>
        <Bounce delay={-1}/>
      </Spinner>
    )
    return (
      <CSSTransitionGroup
        transitionName="crossfade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        component="div"
        aria-busy={loading} // easy aria-role attribute while we’re here
      >
        {loading ? loader : children}
      </CSSTransitionGroup>
    );

  }

  function setInputValue(e) {
    setInput(e.target.value);
  };

  async function getShows() {
    setLoading(true)
    const res = await fetch('https://api.tvmaze.com/search/shows?q='.concat(input));
    const data = await res.json();
    setShows(data);
    setInput('')
    setLoading(false)
  };

  function view(mode) {
    setViewMode(mode);
  }
  function loaded() {
    setLoading(false);
  }

  return (
    <Layout>
      <Headroom>
      <StyledHeadroom>
      <HeaderItem>
        <Input
          type="text"
          placeholder=""
          onChange={setInputValue}
        />
        <Label>Type tv show</Label>
        <Search type="button" onClick={getShows}>
          Find
        </Search>
      </HeaderItem>

      <HeaderItem>
        <Button onClick={() => view("grid")}>Grid</Button>
        <Button onClick={() => view("line")}>Line</Button>
      </HeaderItem>
      </StyledHeadroom>
      </Headroom>
      <Loader loading={loading}>
      {
      shows.length > 0 ?
      <Container grid={viewMode} >
        {shows.map(show => (
          <Item key={show.show.id}>
            <Title>{show.show.name}</Title>
            <Data>
              {show.show.image && (
                <div>
                  <Image src={show.show.image.medium} />
                </div>
              )}
              <ShortText>Rating {show.show.rating.average}</ShortText>
              <ShortText>Score: {show.score}</ShortText>
              <ShortText>
                Genres:{" "}
                {show.show.genres.map(genre => (
                  <Span key={genre}>{genre}</Span>
                ))}
              </ShortText>
              <Description>
                <ShortText
                  dangerouslySetInnerHTML={{ __html: show.show.summary }}
                />
              </Description>
            </Data>
          </Item>
        ))}
      </Container>
      : <Error>Results not found. Try with another search.</Error>
      }
    </Loader>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  return { shows: data };
};



const Error = styled.div`
  font-size: 2.5vw;
  position: absolute;
  top: 50%;
  left: 28%;
`;

export default Index;