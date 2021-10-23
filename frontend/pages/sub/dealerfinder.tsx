import { useState, useEffect } from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { AnimatePresence, motion } from "framer-motion";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";

import { Loading } from "../../UI/Loading";
import { Container } from "../../components/layout/Container";

const DEALER_QUERY = gql`
  query DEALER_QUERY($search: String) {
    allDealers(
      where: {
        OR: [
          { city_contains_i: $search }
          { name_contains_i: $search }
          { postal_contains_i: $search }
        ]
      }
      sortBy: city_ASC
    ) {
      postal
      city
      name
      province
      id
      formattedAddress
      googlePlaceID
      lat
      lng
    }
  }
`;

const containerStyle = {
  width: "100%",
  height: "400px",
};

const DealerFinder = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const { data, loading, error, refetch } = useQuery(DEALER_QUERY, {
    fetchPolicy: "cache-and-network",
    variables: { search: searchWord },
  });
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState({
    lat: 43.808076,
    lng: -79.4959531,
  });
  const [marker, setMarker] = useState("");

  useEffect(() => {
    //call db
    !loading && setLocations(data?.allDealers);
  }, [loading]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  //load google map and initilize
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
  });

  // if (loading) return <Loading />;
  if (error) return `Error! ${error}`;

  if (loadError) {
    return (
      <Container space padding title="Dealer Finder">
        <div>Map cannot be loaded right now, sorry.</div>;
      </Container>
    );
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value);
  };

  const handleClick = (position) => {
    setLocation({
      lat: parseFloat(position.lat),
      lng: parseFloat(position.lng),
    });
  };

  return (
    <Container space padding title="Dealer Finder">
      <Content>
        <Left>
          {!loading && locations.length !== 0 ? (
            locations.map((item) => {
              return (
                <AnimatePresence exitBeforeEnter initial={false} key={item.id}>
                  <button
                    onClick={() => {
                      handleClick(item);
                      setMarker(item.id);
                    }}
                  >
                    <Dealer
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      active={
                        location.lat === parseFloat(item.lat) &&
                        location.lng === parseFloat(item.lng)
                      }
                    >
                      <h4>{item.city}</h4>
                      <h6>{item.name}</h6>

                      <p>{item.formattedAddress}</p>
                    </Dealer>
                  </button>
                </AnimatePresence>
              );
            })
          ) : (
            <AnimatePresence exitBeforeEnter initial={false}>
              <p>No Location Found</p>
            </AnimatePresence>
          )}
        </Left>
        <Right>
          <Fixed>
            <p>
              Ostaco Windows and Doors products are proudly distributed by many
              retailers across Ontario. Please fill out this form and our team
              will quickly get back to you with information on your nearest
              dealer.
            </p>
            <Input
              aria-label="city"
              id="city"
              name="q"
              onChange={handleChange}
              value={searchWord}
              placeholder="What city are you looking for?"
            />
            <GoogleContainer>
              {isLoaded ? (
                <>
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={location}
                    zoom={10}
                  >
                    <MarkerClusterer>
                      {(clusterer) =>
                        locations.map((location) => {
                          return (
                            <Marker
                              onClick={() => setMarker(location.id)}
                              key={location.id}
                              position={{
                                lat: parseFloat(location.lat),
                                lng: parseFloat(location.lng),
                              }}
                              clusterer={clusterer}
                            >
                              {marker === location.id && (
                                <InfoWindow
                                  key={location.id}
                                  position={{
                                    lat: parseFloat(location.lat),
                                    lng: parseFloat(location.lng),
                                  }}
                                >
                                  <div>
                                    <h6>{location.name}</h6>
                                    <p>{location.formattedAddress}</p>
                                  </div>
                                </InfoWindow>
                              )}
                            </Marker>
                          );
                        })
                      }
                    </MarkerClusterer>
                  </GoogleMap>
                </>
              ) : (
                <Loading />
              )}
            </GoogleContainer>
          </Fixed>
        </Right>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  display: grid;
  gap: 3rem;
  grid-auto-flow: row;
  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-template-columns: 2fr 3fr;
  }
`;

const GoogleContainer = styled.div`
  display: grid;
  order: 0;
  @media screen and (min-width: 768px) {
    order: 1;
  }
`;

const Input = styled.input`
  display: grid;
  order: 1;
  @media screen and (min-width: 768px) {
    order: 0;
  }
`;

const Left = styled.ol`
  display: grid;
  gap: 3rem;
  align-items: start;
  align-content: start;
  order: 1;
`;

const Right = styled.aside`
  display: grid;
  order: 0;
  @media screen and (min-width: 768px) {
    order: 1;
  }
`;

const Fixed = styled.div`
  display: grid;
  grid-gap: 2vh;
  @media (min-width: 768px) {
    position: sticky;
    top: 5rem;
    height: min-content;
  }
`;

const Dealer = styled(motion.li)`
  padding-left: 5vw;
  grid-gap: 0.5em;
  text-align: left;
  h6,
  h4 {
    color: ${(props) => props.active && `var(--color-secondary)`};
    transition: all 0.4s ease-in-out;
  }
`;

export default DealerFinder;
